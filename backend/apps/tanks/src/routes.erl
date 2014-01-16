-module(routes).

-export([compile/0, generate_path/2, generate_url/3]).

compile() ->
  List = [game],
  cowboy_router:compile([
    {'_', [route(Name) || Name <- List]}
  ]).

route(game) ->
  {"/game/:id", bullet_handler, [{handler, game_handler}]}.

generate_path(RouteName, Bindings) ->
  Path = element(1, route(RouteName)),
  GeneratedPath = lists:foldl(fun({Key, Value}, Acc) -> re:replace(Acc, [":" | atom_to_list(Key)], to_string(Value), [global, {return, list}]) end, Path, Bindings),
  list_to_binary(GeneratedPath).

generate_url(RouteName, Bindings, Host) ->
  Path = generate_path(RouteName, Bindings),
  <<"http://", Host/binary, Path/binary>>.

to_string(Value) when is_atom(Value) ->
  atom_to_list(Value);
to_string(Value) when is_integer(Value) ->
  integer_to_list(Value);
to_string(Value) when is_binary(Value) ->
  binary_to_list(Value).
