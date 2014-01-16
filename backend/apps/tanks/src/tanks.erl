-module(tanks).

-export([start/0, stop/0, restart/0]).

applications() ->
  [asn1, crypto, ranch, cowlib, cowboy, bullet, jsx, gproc, poolboy, public_key, ssl, tanks, game].

start() ->
  ok = lager:start(),
  ok = sync:go(),
  [ok = application:start(App) || App <- applications()].

stop() ->
  [ok = application:stop(App) || App <- applications()].

restart() ->
  stop(),
  start().
