-define(debug_info(Msg),
  lager:debug(
    "application: ~p#~p/~p (~p) -> ~p ~p~n",
    tuple_to_list(element(2, process_info(self(), current_function))) ++ [?LINE, self(), Msg]
  )
).

-record(game, { players=[], bullets=[], changed }).
-record(player, { id, pid, shape }).
-record(bullet, { player_id, x, y, velocityX, velocityY  }).

-record(rect, {x, y, width, height, rotation}).
