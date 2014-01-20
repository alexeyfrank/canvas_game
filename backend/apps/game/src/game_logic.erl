-module(game_logic).

-include("h.hrl").

-export([connect_player/2,
         disconnect_player/2,
         update_world/1,
         player_action/4
        ]).

-define(MOVE_DELTA, 3).
-define(ROTATION_DELTA, 10).

%% rotate(player, Player, Direction, GameState) ->
%%   #player{ shape = Shape } = Player,
%%   #rect{ rotation = Angle } = Shape,
%%   NewPlayer = case Direction of
%%                 <<"left">>  -> Player#player{ shape = Shape#rect{rotation = Angle - ?ROTATION_DELTA} };
%%                 <<"right">> -> Player#player{ shape = Shape#rect{rotation = Angle + ?ROTATION_DELTA} }
%%               end.
%%
%% attack(player, Player, #game{bullets = Bullets} = GameState) ->
%%   #player{ id = PlayerId } = Player,
%%   Bullet = #bullet{ player_id = PlayerId, velocityX = 3, velocityY = 3 },
%%   NewBullets = Bullets ++ [Bullet],
%%   GameState#game{bullets = NewBullets}.

%% update(#bullet{x = X, y = Y, velocityX = VelX, velocityY = VelY } = Bullet) ->
%%   Bullet#bullet{ x = X + VelX, y = Y + VelY}.

update_world(GameState) ->
  #game{ players = Players, bullets = Bullets } = GameState,
  NewPlayers = lists:map(fun(Player) -> player:update(Player, GameState) end, Players),
  GameState#game{ players = NewPlayers, changed = true }.


connect_player(#game{players = Players} = State, { PlayerId, PlayerPid }) ->
  NewPlayers = case lists:keyfind(PlayerId, 2, Players) of
                 false -> Players ++ [player:create({ PlayerId, PlayerPid })];
                 Player -> lists:keyreplace(PlayerId, 2, Players, Player#player{ pid = PlayerPid })
               end,
  State#game{ players = NewPlayers, changed = true }.

disconnect_player(#game{players = Players} = State, { PlayerId }) ->
  Player = lists:keyfind(PlayerId, 2, Players),
  NewPlayer = Player#player{ connected = false },
  NewPlayers = lists:keyreplace(PlayerId, 2, Players, NewPlayer),
  State#game{ players = NewPlayers, changed = true}.


player_action(State, PlayerId, Action, Data) ->
  #game{players = Players} = State,
  Player = lists:keyfind(PlayerId, 2, Players),
  NewPlayer = player:handle_action(Player, Action, Data, State),
  NewPlayers = lists:keyreplace(PlayerId, 2, Players, NewPlayer),
  State#game{players = NewPlayers, changed = true}.
