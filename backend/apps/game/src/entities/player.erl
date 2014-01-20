-module(player).

-include("h.hrl").

-export([create/1,
         update/2,
         handle_action/4
        ]).

create({Id, Pid}) ->
  Shape = #rect{ width = 50, height = 50},
  Velocity = #vector{ x = 0, y = 0 },
  Coords = #vector{ x = 50, y = 50 },
  #player{id = Id,
          pid = Pid,
          shape = Shape,
          velocity = Velocity,
          coords = Coords,
          rotation = 0,
          connected = true }.

update(Player, GameState) ->
  #player{velocity = Velocity, coords = Coords} = Player,
  #vector{ x = Vx, y = Vy } = Velocity,
  #vector{ x = X, y = Y } = Coords,

  NewCoords = Coords#vector{ x = X + Vx, y = Y + Vy },
  NewVelocity = Velocity#vector{ x = 0, y = 0 },
  NewPlayer = Player#player{ velocity = NewVelocity, coords = NewCoords},

  case is_valid_player_position(NewPlayer, GameState) of
    true -> NewPlayer;
    _ -> Player
  end.

handle_action(Player, <<"move">>, {<<"direction">>, Direction}, _GameState) ->
  #player{ velocity = Velocity } = Player,
  NewVelocity = case Direction of
               <<"left">>  -> Velocity#vector{ x = -5 };
               <<"right">> -> Velocity#vector{ x = 5 };
               <<"up">>    -> Velocity#vector{ y = -5 };
               <<"down">>  -> Velocity#vector{ y = 5 }
              end,
  {Player#player{ velocity = NewVelocity }, _GameState};


handle_action(Player, <<"rotate">>, {<<"direction">>, Direction}, _GameState) ->
  #player{ rotation = Rotation } = Player,
  NewRotation = case Direction of
               <<"left">>  -> Rotation - 10;
               <<"right">>  -> Rotation + 10
              end,
  {Player#player{ rotation = NewRotation }, _GameState};

handle_action(Player, <<"attack">>, _Data, GameState) ->
  lager:debug(Player),
  #player{ id = Id, coords = #vector{x = X, y = Y} } = Player,
  Bullet = bullet:create({ Id, 1, X, Y }),
  #game{ bullets = Bullets } = GameState,
  NewBullets = Bullets ++ [Bullet],
  {Player, GameState#game{bullets = NewBullets}}.


intersect([X1, Y1, W1, H1], [X2, Y2, W2, H2]) ->
  CenterX1 = X1 + W1 / 2,
  CenterY1 = Y1 + H1 / 2,
  CenterX2 = X2 + W2 / 2,
  CenterY2 = Y2 + H2 / 2,
  { DiffX, DiffY } = { abs(CenterX1 - CenterX2), abs(CenterY1 - CenterY2) },
  (DiffX =< max(W1, W2)) and (DiffY =< max(H1, H2)).

%%
%% point_in_figure({X, Y, W, H}, #rect{ x = RX, y = RY, width = RW, height = RH}) ->
%%   X >= RX and X =< RX + RW and Y >= RY and Y =< RY + RH.

get_shapes(GameState) ->
  #game{ players = Players} = GameState,
  [] ++
  lists:map(fun(Player) ->
                #player{
                   shape = #rect{ width = W, height = H},
                   coords = #vector{ x = X, y = Y }
                  } = Player,
                [X, Y, W, H]
            end, Players).

is_valid_player_position(Player, GameState) ->
  #player{
     shape = #rect{ width = W, height = H},
     coords = #vector{ x = X, y = Y }
    } = Player,
  PlayerShape = [X, Y, W, H],
  Shapes = get_shapes(GameState),

  Intersections = [intersect(PlayerShape, Shape) || Shape <- Shapes],
  length(lists:filter(fun(Intersect) -> Intersect end, Intersections)) == 1.



