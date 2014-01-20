-module(bullet).

-include("h.hrl").

-export([create/1,
         update/2
        ]).

create({Id, PlayerId, X, Y }) ->
  Shape = #rect{ width = 5, height = 5},
  Velocity = #vector{ x = 5, y = 0 },
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
