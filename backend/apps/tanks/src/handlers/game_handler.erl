-module(game_handler).

% callbacks
-export([init/4, stream/3, info/3, terminate/2]).

-record(state, {player_id}).

-define(debug_info(Msg),
  lager:debug(
    "application: ~p#~p/~p (~p) -> ~p ~p~n",
    tuple_to_list(element(2, process_info(self(), current_function))) ++ [?LINE, self(), Msg]
  )
).

init(_Transport, Req, _Opts, _Active) ->
  {PlayerId, Req1} = cowboy_req:binding(id, Req),
  game:connect_player(PlayerId),
  lager:debug("new player with id ~p connected to game", [PlayerId]),
  State = #state{player_id=PlayerId},
  {ok, Req1, State}.

stream(<<"ping">>, Req, State) ->
  {ok, Req, State};

stream(Raw, Req, #state{player_id = PlayerId} = State) ->
  case Json = jsx:decode(Raw) of
    [{<<"event">>, EventName}] ->
      ?debug_info(Json),
      event(EventName, Req, State);
    [{<<"event">>, EventName} | [{<<"data">>, Data}]] ->
      ?debug_info(Json),
      event(EventName, Data, Req, State)
  end.

info({sync_state, Game} = Msg, Req, State) ->
  ?debug_info(Msg),
  lager:debug("Serialized info: ~p", [Game]),
  Reply = [{event, <<"sync-game">>}, {data, Game}],
  {reply, jsx:encode(Reply), Req, State};

info(Msg, Req, State) ->
  ?debug_info(Msg),
  {ok, Req, State}.

terminate(_Req, #state{player_id=PlayerId}) ->
  lager:debug("player disconnected: ~p", [PlayerId]),
  game:disconnect_player(PlayerId),
  ok.

event(<<"get-state">>, Req, State) ->
  game:get_state(),
  {ok, Req, State};

event(Event, Req, State) ->
  {ok, Req, State}.

event(<<"player-event">>, Data, Req, #state{player_id=PlayerId} = State) ->
  game:players_cast(PlayerId, Data),
  {ok, Req, State};

event(Event, Data, Req, State) ->
  {ok, Req, State}.
