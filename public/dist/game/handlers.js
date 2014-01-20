// Compiled by ClojureScript 0.0-2138
goog.provide('game.handlers');
goog.require('cljs.core');
goog.require('game.utils');
goog.require('game.utils');
goog.require('game.actors');
goog.require('game.actors');
game.handlers.handle_connect = (function handle_connect(state){console.log("player connected");
return state;
});
game.handlers.handle_disconnect = (function handle_disconnect(state){console.log("player disconnected");
return state;
});
game.handlers.update_player = (function update_player(state,id,data){var player_16335 = cljs.core.get_in.call(null,state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"players","players",520336676),id], null));player_16335.update(data);
return state;
});
game.handlers.add_player = (function add_player(state,id,data){var layer = new cljs.core.Keyword(null,"layer","layer",1116653763).cljs$core$IFn$_invoke$arity$1(state);var p = (new game.actors.Player(id,layer));p.update(data);
return cljs.core.assoc_in.call(null,state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"players","players",520336676),id], null),p);
});
game.handlers.remove_player = (function remove_player(state,id){var p = cljs.core.get_in.call(null,state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"players","players",520336676),id], null));p.remove();
return game.handlers.dissoc_in.call(null,state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"players","players",520336676),id], null));
});
game.handlers.update_players = (function update_players(app_state,players){var state = app_state;var players__$1 = players;while(true){
if(cljs.core.seq.call(null,players__$1))
{var data = cljs.core.first.call(null,players__$1);var p_id = cljs.core.get.call(null,data,"id");if(cljs.core.contains_QMARK_.call(null,new cljs.core.Keyword(null,"players","players",520336676).cljs$core$IFn$_invoke$arity$1(state),p_id))
{{
var G__16336 = game.handlers.update_player.call(null,state,p_id,data);
var G__16337 = cljs.core.rest.call(null,players__$1);
state = G__16336;
players__$1 = G__16337;
continue;
}
} else
{{
var G__16338 = game.handlers.add_player.call(null,state,p_id,data);
var G__16339 = cljs.core.rest.call(null,players__$1);
state = G__16338;
players__$1 = G__16339;
continue;
}
}
} else
{return state;
}
break;
}
});
game.handlers.sync_game = (function sync_game(state,data){var state1 = game.handlers.update_players.call(null,state,cljs.core.get.call(null,data,"players"));return state1;
});
