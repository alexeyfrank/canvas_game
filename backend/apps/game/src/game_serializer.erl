-module(game_serializer).

-include("h.hrl").

-export([serialize/1]).


serialize(#game{ players=Players }) ->
  [
   {players, [serialize_player(Player) || Player <- Players]}
  ].


%% Private

serialize_player(#player{id = Id, shape = #rect{ x = X, y = Y, width=W, height=H, rotation = R}}) ->
  [{id, Id}, {x, X}, {y, Y}, {width, W}, {height, H}, {rotation, R}].

