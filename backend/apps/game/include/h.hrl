-define(debug_info(Msg),
  lager:debug(
    "application: ~p#~p/~p (~p) -> ~p ~p~n",
    tuple_to_list(element(2, process_info(self(), current_function))) ++ [?LINE, self(), Msg]
  )
).

-record(game, { players=[] }).
-record(player, { id, x, y, width, height, pid }).
