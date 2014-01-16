-module(tanks_app).

-behaviour(application).

%% Application callbacks
-export([start/2, stop/1]).

%% ===================================================================
%% Application callbacks
%% ===================================================================

start(_StartType, _StartArgs) ->
  %% {ok, Pid} = riakc_pb_socket:start_link("127.0.0.1", 8087),
  %% Name, NbAcceptors, TransOpts, ProtoOpts
  {ok, _} = cowboy:start_http(http, 5,
    [{port, 3000}],
    [{env, [{dispatch, routes:compile()}]}]
  ),
  tanks_sup:start_link().

stop(_State) ->
  ok.
