-module(game_logic).

-include("h.hrl").

-export([connect_player/2,
         disconnect_player/2,
         update_world/1,
         player_action/4
        ]).

update_world(GameState) ->
  #game{ players = Players, bullets = Bullets } = GameState,
  NewPlayers = lists:map(fun(Player) -> player:update(Player, GameState) end, Players),
  NewBullets = lists:map(fun(Bullet) -> bullet:update(Bullet, GameState) end, Bullets),
  GameState#game{ players = NewPlayers, bullets = NewBullets, changed = true }.


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
  { NewPlayer, NewState } = player:handle_action(Player, Action, Data, State),
  NewPlayers = lists:keyreplace(PlayerId, 2, Players, NewPlayer),
  NewState#game{players = NewPlayers, changed = true}.
