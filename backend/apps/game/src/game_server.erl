-module(game_server).
-behaviour(gen_server).
-export([init/1, handle_call/3, handle_cast/2, handle_info/2, terminate/2, code_change/3, start_link/0]).
-export([get_pid/0]).

-include("h.hrl").

-define(INTERVAL, 16).

start_link() ->
  gen_server:start_link(?MODULE, [], []).

init(_) ->
  process_flag(trap_exit, true),
  true = gproc:add_local_name({ game_server }),
  erlang:send_after(?INTERVAL, self(), game_tick),
  {ok, #game{}}.

handle_call({connect_player, PlayerId} = Msg, {FromPid, _}, State) ->
  ?debug_info(Msg),
  State2 = game_logic:connect_player(State, { PlayerId, FromPid }),
  broadcast(State2, { player_connected, PlayerId }),
  {reply, {uncaught_message, Msg}, State2};

handle_call({ get_state } = Msg, {Pid, _} = From, State) ->
  ?debug_info(Msg),
  Pid ! { sync_state, game_serializer:serialize(State) },
  {reply, {uncaught_message, Msg}, State};

handle_call(Msg, _From, State) -> {reply, {uncaught_message, Msg}, State}.

handle_cast({disconnect_player, PlayerId } = Msg, State) ->
  ?debug_info(Msg),
  State2 = game_logic:disconnect_player(State, { PlayerId }),
  broadcast(State2, { player_disconnected, PlayerId }),
  {noreply, State2};

handle_cast({ players_cast, PlayerId, [{<<"action">>, Action}, Data] } = Msg, State) ->
  ?debug_info(Msg),
  State2 = game_logic:player_action(State, PlayerId, Action, Data),
  {noreply, State2};

handle_cast({ players_cast, PlayerId, [{<<"action">>, Action}] } = Msg, State) ->
  ?debug_info(Msg),
  State2 = game_logic:player_action(State, PlayerId, Action, {}),
  {noreply, State2};

handle_cast(Msg, State) ->
  ?debug_info(Msg),
  {noreply, State}.

handle_info(game_tick, State) ->
  lager:debug("Game tick"),
  #game{players = Players, changed = IsStateChanged} = NewState = game_logic:update_world(State),

  case IsStateChanged of
    true ->
      lager:debug("Game state changed"),

      %% TODO: Compute diff between old and new state and send it to client
      SerializedState = game_serializer:serialize(NewState),
      broadcast(NewState, { sync_state, SerializedState });
    _ -> lager:debug("Game state not changed")
  end,

  AlivePlayers = lists:filter(fun(#player{connected = Connected }) -> Connected end, Players),
  erlang:send_after(?INTERVAL, self(), game_tick),
  {noreply, NewState#game{ players = AlivePlayers, changed = false }};

handle_info(Msg, State) ->
  ?debug_info({unprocessed_info_msg, Msg}),
  {noreply, State}.

terminate(Msg, State) ->
  ?debug_info({unexpected_terminate, Msg}),
  ok.

code_change(_OldVsn, State, _Extra) ->
  {ok, State}.

get_pid() ->
  gproc:lookup_local_name({ game_server }).

seconds_from_start(StartedAt) ->
  Diff = case StartedAt of
    undefined -> 0;
    _ -> (h:now_ut() - StartedAt)
  end,
  {secondsFromStart, Diff}.

broadcast(GameState, Msg) ->
  #game{ players = Players } = GameState,
  lists:foreach(fun (#player{pid=PlayerPid}) -> PlayerPid ! Msg end, Players).

