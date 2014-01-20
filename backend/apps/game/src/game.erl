-module(game).

%% API methods
-export([start/0, stop/0]).

-export([
    connect_player/1,
    get_state/0,
    disconnect_player/1,
    players_cast/2
  ]).


%% ===========
%% API methods
%% ===========

start() ->
  ok = lager:start(),
  ok = application:start(gproc),
  ok = application:start(game).

stop() ->
  Pid = game_server:get_pid(),
  supervisor:terminate_child(game_sup, Pid),
  ok = application:stop(lager),
  ok = application:stop(game),
  ok = application:stop(gproc).

connect_player(PlayerId) ->
  call({connect_player, PlayerId}).

disconnect_player(PlayerId) ->
  cast({disconnect_player, PlayerId}).

get_state() ->
  call({get_state}).


players_cast(CurrentPlayerId, Msg) ->
  cast({players_cast, CurrentPlayerId, Msg}).


%% internal functions

cast(Msg) ->
  Pid = game_server:get_pid(),
  gen_server:cast(Pid, Msg).

call(Msg) ->
  Pid = game_server:get_pid(),
  gen_server:call(Pid, Msg).

