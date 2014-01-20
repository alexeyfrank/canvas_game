-module(game_logic).

-include("h.hrl").

-export([connect_player/2,
         disconnect_player/2,
         player_action/4
        ]).

-define(MOVE_DELTA, 3).
-define(ROTATION_DELTA, 10).

create(player, { PlayerId, PlayerPid }) ->
  Shape = #rect{x = 50, y = 50, width = 40, height = 40, rotation = 0},
  #player{id = PlayerId, pid = PlayerPid, shape = Shape}.

intersect(#rect{ x = X1, y = Y1, width = W1, height = H1 }, #rect{ x = X2, y = Y2, width = W2, height = H2}) ->
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
  lists:map(fun(#player{ shape = Shape}) -> Shape end, Players).

is_valid_player_position(#player{ shape = PlayerShape }, GameState) ->
  Shapes = get_shapes(GameState),
  Intersections = [intersect(PlayerShape, Shape) || Shape <- Shapes],
  length(lists:filter(fun(Intersect) -> Intersect end, Intersections)) == 1.

move(player, Player, Direction, GameState) ->
  #player{ shape = Shape } = Player,
  #rect{ x = X, y = Y } = Shape,
  NewPlayer = case Direction of
                <<"left">>  -> Player#player{ shape = Shape#rect{x = X - ?MOVE_DELTA} };
                <<"right">> -> Player#player{ shape = Shape#rect{x = X + ?MOVE_DELTA} };
                <<"up">>    -> Player#player{ shape = Shape#rect{y = Y - ?MOVE_DELTA} };
                <<"down">>  -> Player#player{ shape = Shape#rect{y = Y + ?MOVE_DELTA} }
              end,
  case is_valid_player_position(NewPlayer, GameState) of
    true -> NewPlayer;
    _ -> Player
  end.

rotate(player, Player, Direction, GameState) ->
  #player{ shape = Shape } = Player,
  #rect{ rotation = Angle } = Shape,
  NewPlayer = case Direction of
                <<"left">>  -> Player#player{ shape = Shape#rect{rotation = Angle - ?ROTATION_DELTA} };
                <<"right">> -> Player#player{ shape = Shape#rect{rotation = Angle + ?ROTATION_DELTA} }
              end.

attack(player, Player, #game{bullets = Bullets} = GameState) ->
  #player{ id = PlayerId },
  Bullet = #bullet{ player_id = PlayerId, velocityX = 3, velocityY = 3 },
  NewBullets = Bullets ++ [Bullet],
  GameState#game{ bullets = NewBullets}.

connect_player(#game{players = Players} = State, { PlayerId, PlayerPid }) ->
  NewPlayers = case lists:keyfind(PlayerId, 2, Players) of
                 false -> Players ++ [create(player, { PlayerId, PlayerPid })];
                 Player -> lists:keyreplace(PlayerId, 2, Players, Player#player{ pid = PlayerPid })
               end,
  State#game{ players = NewPlayers, changed = true }.

disconnect_player(#game{players = Players} = State, { PlayerId }) ->
  NewPlayers = lists:keydelete(PlayerId, 2, Players),
  State#game{ players = NewPlayers, changed = true}.


player_action(State, PlayerId, <<"move">>, {<<"direction">>, Direction}) ->
  #game{players = Players} = State,
  Player = lists:keyfind(PlayerId, 2, Players),
  NewPlayer = move(player, Player, Direction, State),
  NewPlayers = lists:keyreplace(PlayerId, 2, Players, NewPlayer),
  State#game{players = NewPlayers, changed = true};

player_action(State, PlayerId, <<"rotate">>, {<<"direction">>, Direction}) ->
  #game{players = Players} = State,
  Player = lists:keyfind(PlayerId, 2, Players),
  NewPlayer = rotate(player, Player, Direction, State),
  NewPlayers = lists:keyreplace(PlayerId, 2, Players, NewPlayer),
  State#game{players = NewPlayers, changed = true};

player_action(State, PlayerId, <<"attack">>) ->
  #game{players = Players} = State,
  Player = lists:keyfind(PlayerId, 2, Players),
  NewPlayer = attack(player, Player, State),
  NewPlayers = lists:keyreplace(PlayerId, 2, Players, NewPlayer),
  State#game{players = NewPlayers, changed = true};

player_action(State, PlayerId, Action, Data) ->
  State.
