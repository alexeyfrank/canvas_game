-module(game_handler).

% callbacks
-export([init/4, stream/3, info/3, terminate/2]).

-record(state, {player_id}).

-define(debug_info(Msg),
  lager:debug("application: ~p#~p/~p (~p) -> ~p ~p~n",
    tuple_to_list(element(2, process_info(self(), current_function))) ++ [?LINE, self(), Msg])).

init(_Transport, Req, _Opts, _Active) ->
  {PlayerId, Req1} = cowboy_req:binding(id, Req),
  game:connect_player(PlayerId),
  State = #state{player_id=PlayerId},
  {ok, Req1, State}.

stream(<<"ping">>, Req, _State) ->
  {ok, Req, _State};

stream(Raw, Req, #state{player_id = PlayerId} = State) ->
  lager:debug("Events: ~p", [Raw]),
  Events = jsx:decode(Raw),
  lists:foreach(fun(Event) ->
                    case Event of
                      [{<<"event">>, EventName}] ->
                        ?debug_info(Event),
                        event(EventName, Req, State);
                      [{<<"event">>, EventName} | [{<<"data">>, Data}]] ->
                        ?debug_info(Event),
                        event(EventName, Data, Req, State)
                    end
                end, Events),
  {ok, Req, State}.

info({player_connected, PlayerId} = Msg, Req, State) ->
  ?debug_info(Msg),
  Reply = [{event, <<"player_connected">>}, {data, PlayerId}],
  {reply, jsx:encode(Reply), Req, State};

info({player_disconnected, PlayerId} = Msg, Req, State) ->
  ?debug_info(Msg),
  Reply = [{event, <<"player_disconnected">>}, {data, PlayerId}],
  {reply, jsx:encode(Reply), Req, State};

info({sync_state, Game} = Msg, Req, State) ->
  ?debug_info(Msg),
  Reply = [{event, <<"sync_game">>}, {data, Game}],
  {reply, jsx:encode(Reply), Req, State};

info(Msg, Req, State) ->
  ?debug_info(Msg),
  {ok, Req, State}.

terminate(_Req, #state{player_id=PlayerId}) ->
  lager:debug("player disconnected: ~p", [PlayerId]),
  game:disconnect_player(PlayerId),
  ok.

event(<<"get-state">>, Req, State) ->
  game:get_state();

event(Event, Req, State) ->
  lager:debug(Event),
  {ok, Req, State}.

event(<<"player-event">>, Data, Req, #state{player_id=PlayerId} = State) ->
  game:players_cast(PlayerId, Data);

event(Event, Data, Req, State) ->
  lager:debug(Data),
  {ok, Req, State}.
