-define(debug_info(Msg),
  lager:debug(
    "application: ~p#~p/~p (~p) -> ~p ~p~n",
    tuple_to_list(element(2, process_info(self(), current_function))) ++ [?LINE, self(), Msg]
  )
).

%% Math
-record(vector, { x, y }).
-record(dimension, { width, height }).

%% World
-record(game, { players=[], bullets=[], changed }).

%% Entities
-record(player, { id, pid, connected, shape, velocity, coords, rotation }).
-record(bullet, { id, player_id, shape, coords, velocity, exist  }).


-record(rect, {width, height}).
