-module(game_logic).

-include("h.hrl").

-export([connect_player/2,
         disconnect_player/2,
         player_action/4
        ]).

connect_player(#game{players = Players} = State, { PlayerId, PlayerPid }) ->
  NewPlayers = case lists:keyfind(PlayerId, 2, Players) of
                 false -> Players ++ [#player{id = PlayerId, x = 0, y = 0, width = 50, height = 50, pid = PlayerPid}];
                 _ -> Players
               end,
  State#game{ players = NewPlayers }.

disconnect_player(#game{players = Players} = State, { PlayerId, PlayerPid }) ->
  NewPlayers = lists:keydelete(PlayerId, 2, Players),
  State#game{ players = NewPlayers}.

player_action(State, PlayerId, <<"move">>, {<<"direction">>, Direction}) ->
  #game{players = Players} = State,
  #player{x = X, y = Y} = Player = lists:keyfind(PlayerId, 2, Players),
  NewPlayer = case Direction of 
                <<"left">> -> Player#player{ x = X - 5 };
                <<"right">> -> Player#player{ x = X + 5 };
                <<"up">> -> Player#player{ y = Y - 5 };
                <<"down">> -> Player#player{ y = Y + 5 }
              end,
  NewPlayers = lists:keyreplace(PlayerId, 2, Players, NewPlayer),
  lager:debug("Find player: ~p", [NewPlayers]),
  State#game{players = NewPlayers};


player_action(State, PlayerId, Action, Data) ->
  State.
