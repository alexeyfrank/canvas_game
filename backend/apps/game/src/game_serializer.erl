-module(game_serializer).

-include("h.hrl").

-export([serialize/1]).


serialize(#game{ players=Players }) ->
  [
   {players, [serialize_player(Player) || Player <- Players]}
  ].


%% Private

serialize_player(Player) ->
  #player{id = Id,
          shape = #rect{width=W, height=H},
          coords = #vector{ x = X, y = Y},
          rotation = R,
          connected = Connected
         } = Player,
  [{id, Id}, {x, X}, {y, Y}, {width, W}, {height, H}, {rotation, R}, {connected, Connected}].

