-module(bullet).

-include("h.hrl").

-export([create/1,
         update/2
        ]).

-define(DELTA_VELOCITY, 15).

create({Id, Player }) ->
  #player{
     id = PlayerId,
     coords = #vector{x = X, y = Y },
     rotation = Rotation
    } = Player,

  Shape = #rect{ width = 5, height = 5},
  Velocity = #vector{
                x = floor(?DELTA_VELOCITY * math:cos(Rotation * math:pi() / 180)),
                y = floor(?DELTA_VELOCITY * math:sin(Rotation * math:pi() / 180))
               },
  Coords = #vector{ x = X, y = Y },

  #bullet{id = Id,
          player_id = PlayerId,
          shape = Shape,
          velocity = Velocity,
          coords = Coords,
          exist = true }.

update(Bullet, GameState) ->
  #bullet{velocity = Velocity, coords = Coords} = Bullet,
  #vector{ x = Vx, y = Vy } = Velocity,
  #vector{ x = X, y = Y } = Coords,

  NewCoords = Coords#vector{ x = X + Vx, y = Y + Vy },
  NewBullet = Bullet#bullet{ velocity = Velocity, coords = NewCoords},
  NewBullet.



floor(X) ->
  T = erlang:trunc(X),
  case (X - T) of
    Neg when Neg < 0 -> T - 1;
    Pos when Pos > 0 -> T;
    _ -> T
  end.

ceiling(X) ->
  T = erlang:trunc(X),
  case (X - T) of
    Neg when Neg < 0 -> T;
    Pos when Pos > 0 -> T + 1;
    _ -> T
  end.
