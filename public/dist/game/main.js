// Compiled by ClojureScript 0.0-2138
goog.provide('game.main');
goog.require('cljs.core');
goog.require('game.utils');
goog.require('cljs.core.async');
goog.require('cljs.core.async');
goog.require('game.shapes');
goog.require('game.shapes');
goog.require('utils.websocket');
goog.require('utils.websocket');
goog.require('game.utils');
game.main.config = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"point-width","point-width",4479721147),5,new cljs.core.Keyword(null,"point-height","point-height",647051126),5,new cljs.core.Keyword(null,"player-width","player-width",3971244876),40,new cljs.core.Keyword(null,"player-height","player-height",2064155909),40], null);
game.main.app_state = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"stage","stage",1123661424),game.shapes.stage.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"container","container",602947571),"app-container",new cljs.core.Keyword(null,"width","width",1127031096),700,new cljs.core.Keyword(null,"height","height",4087841945),innerHeight], null)),new cljs.core.Keyword(null,"layer","layer",1116653763),game.shapes.layer.call(null),new cljs.core.Keyword(null,"players","players",520336676),cljs.core.PersistentArrayMap.EMPTY], null);
game.main.generate_player_events = (function generate_player_events(chan){setInterval((window["direction"] = cljs.core.nth.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"left","left",1017222009),new cljs.core.Keyword(null,"right","right",1122416014),new cljs.core.Keyword(null,"top","top",1014019271),new cljs.core.Keyword(null,"bottom","bottom",3925642653)], null),cljs.core.rand_int.call(null,4))),1000);
return setInterval((function (){return cljs.core.async.put_BANG_.call(null,chan,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"event","event",1110795788),new cljs.core.Keyword(null,"player-event","player-event",3955009568),new cljs.core.Keyword(null,"data","data",1016980252),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"action","action",3885920680),new cljs.core.Keyword(null,"move","move",1017261891),new cljs.core.Keyword(null,"direction","direction",4346280689),window.direction], null)], null));
}),100);
});
game.main.keyboard_handler = (function keyboard_handler(chan,event){return cljs.core.async.put_BANG_.call(null,chan,event);
});
game.main.bind_keyboard_events = (function bind_keyboard_events(chan){game.utils.keymaster.call(null,"left",(function (){return game.main.keyboard_handler.call(null,chan,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"event","event",1110795788),new cljs.core.Keyword(null,"player-event","player-event",3955009568),new cljs.core.Keyword(null,"data","data",1016980252),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"action","action",3885920680),new cljs.core.Keyword(null,"move","move",1017261891),new cljs.core.Keyword(null,"direction","direction",4346280689),new cljs.core.Keyword(null,"left","left",1017222009)], null)], null));
}));
game.utils.keymaster.call(null,"right",(function (){return game.main.keyboard_handler.call(null,chan,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"event","event",1110795788),new cljs.core.Keyword(null,"player-event","player-event",3955009568),new cljs.core.Keyword(null,"data","data",1016980252),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"action","action",3885920680),new cljs.core.Keyword(null,"move","move",1017261891),new cljs.core.Keyword(null,"direction","direction",4346280689),new cljs.core.Keyword(null,"right","right",1122416014)], null)], null));
}));
game.utils.keymaster.call(null,"up",(function (){return game.main.keyboard_handler.call(null,chan,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"event","event",1110795788),new cljs.core.Keyword(null,"player-event","player-event",3955009568),new cljs.core.Keyword(null,"data","data",1016980252),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"action","action",3885920680),new cljs.core.Keyword(null,"move","move",1017261891),new cljs.core.Keyword(null,"direction","direction",4346280689),new cljs.core.Keyword(null,"up","up",1013907981)], null)], null));
}));
game.utils.keymaster.call(null,"down",(function (){return game.main.keyboard_handler.call(null,chan,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"event","event",1110795788),new cljs.core.Keyword(null,"player-event","player-event",3955009568),new cljs.core.Keyword(null,"data","data",1016980252),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"action","action",3885920680),new cljs.core.Keyword(null,"move","move",1017261891),new cljs.core.Keyword(null,"direction","direction",4346280689),new cljs.core.Keyword(null,"down","down",1016993812)], null)], null));
}));
return game.utils.keymaster.call(null,"enter",(function (){return game.main.keyboard_handler.call(null,chan,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"event","event",1110795788),new cljs.core.Keyword(null,"player-event","player-event",3955009568),new cljs.core.Keyword(null,"data","data",1016980252),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"action","action",3885920680),new cljs.core.Keyword(null,"attack","attack",3901612474)], null)], null));
}));
});
game.main.create_player_view = (function create_player_view(player){return game.shapes.rect.call(null,new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"x","x",1013904362),cljs.core.get.call(null,player,"x"),new cljs.core.Keyword(null,"y","y",1013904363),cljs.core.get.call(null,player,"y"),new cljs.core.Keyword(null,"width","width",1127031096),cljs.core.get.call(null,player,"width"),new cljs.core.Keyword(null,"height","height",4087841945),cljs.core.get.call(null,player,"height"),new cljs.core.Keyword(null,"fill","fill",1017047285),"green",new cljs.core.Keyword(null,"stroke","stroke",4416891306),"black",new cljs.core.Keyword(null,"strokeWidth","strokeWidth",2937970144),4], null));
});
game.main.create_playground_and_send_get_state = (function create_playground_and_send_get_state(state,client_events_chan){var layer_13222 = new cljs.core.Keyword(null,"layer","layer",1116653763).cljs$core$IFn$_invoke$arity$1(state);var stage_13223 = new cljs.core.Keyword(null,"stage","stage",1123661424).cljs$core$IFn$_invoke$arity$1(state);stage_13223.add(layer_13222);
cljs.core.async.put_BANG_.call(null,client_events_chan,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"event","event",1110795788),new cljs.core.Keyword(null,"get-state","get-state",729154252)], null));
return state;
});
game.main.redraw_players = (function redraw_players(app_state,layer,players){var player_views = new cljs.core.Keyword(null,"players","players",520336676).cljs$core$IFn$_invoke$arity$1(app_state);var state = app_state;var players__$1 = players;while(true){
if(cljs.core.seq.call(null,players__$1))
{var player = cljs.core.first.call(null,players__$1);var player_id = cljs.core.get.call(null,player,"id");{
var G__13224 = ((cljs.core.contains_QMARK_.call(null,player_views,player_id))?(function (){var player_view = cljs.core.get.call(null,player_views,player_id);player_view.setX(cljs.core.get.call(null,player,"x"));
player_view.setY(cljs.core.get.call(null,player,"y"));
return state;
})():(function (){var player_view = game.main.create_player_view.call(null,player);game.shapes.add_shape.call(null,layer,player_view);
return cljs.core.assoc_in.call(null,state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"players","players",520336676),player_id], null),player_view);
})());
var G__13225 = cljs.core.rest.call(null,players__$1);
state = G__13224;
players__$1 = G__13225;
continue;
}
} else
{return state;
}
break;
}
});
game.main.sync_game = (function sync_game(state,data){var layer = new cljs.core.Keyword(null,"layer","layer",1116653763).cljs$core$IFn$_invoke$arity$1(state);var players = cljs.core.get.call(null,data,"players");var state1 = game.main.redraw_players.call(null,state,layer,players);game.utils.l.call(null,layer);
layer.batchDraw();
return state1;
});
game.main.handle_event = (function handle_event(state,client_events_chan,p__13226){var map__13229 = p__13226;var map__13229__$1 = ((cljs.core.seq_QMARK_.call(null,map__13229))?cljs.core.apply.call(null,cljs.core.hash_map,map__13229):map__13229);var event = map__13229__$1;var event_name = cljs.core.get.call(null,map__13229__$1,"event");var data = cljs.core.get.call(null,map__13229__$1,"data");game.utils.l.call(null,event_name);
game.utils.l.call(null,data);
var G__13230 = event_name;if(cljs.core._EQ_.call(null,"sync-game",G__13230))
{return game.main.sync_game.call(null,state,data);
} else
{if(cljs.core._EQ_.call(null,"connected",G__13230))
{return game.main.create_playground_and_send_get_state.call(null,state,client_events_chan);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return game.utils.l.call(null,[cljs.core.str("event not found: "),cljs.core.str(event_name)].join(''));
} else
{return null;
}
}
}
});
game.main.game_loop = (function game_loop(init_state,server_events_chan,client_events_chan){var c__5523__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5524__auto__ = (function (){var switch__5508__auto__ = (function (state_13266){var state_val_13267 = (state_13266[1]);if((state_val_13267 === 4))
{var inst_13255 = (state_13266[7]);var inst_13258 = (state_13266[2]);var inst_13259 = cljs.core.clj__GT_js.call(null,inst_13258);var inst_13260 = game.utils.l.call(null,inst_13259);var inst_13261 = game.main.handle_event.call(null,inst_13255,client_events_chan,inst_13258);var inst_13255__$1 = inst_13261;var state_13266__$1 = (function (){var statearr_13268 = state_13266;(statearr_13268[7] = inst_13255__$1);
(statearr_13268[8] = inst_13260);
return statearr_13268;
})();var statearr_13269_13279 = state_13266__$1;(statearr_13269_13279[2] = null);
(statearr_13269_13279[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13267 === 3))
{var inst_13264 = (state_13266[2]);var state_13266__$1 = state_13266;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13266__$1,inst_13264);
} else
{if((state_val_13267 === 2))
{var state_13266__$1 = state_13266;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13266__$1,4,server_events_chan);
} else
{if((state_val_13267 === 1))
{var inst_13255 = init_state;var state_13266__$1 = (function (){var statearr_13270 = state_13266;(statearr_13270[7] = inst_13255);
return statearr_13270;
})();var statearr_13271_13280 = state_13266__$1;(statearr_13271_13280[2] = null);
(statearr_13271_13280[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
});return ((function (switch__5508__auto__){
return (function() {
var state_machine__5509__auto__ = null;
var state_machine__5509__auto____0 = (function (){var statearr_13275 = [null,null,null,null,null,null,null,null,null];(statearr_13275[0] = state_machine__5509__auto__);
(statearr_13275[1] = 1);
return statearr_13275;
});
var state_machine__5509__auto____1 = (function (state_13266){while(true){
var ret_value__5510__auto__ = (function (){try{while(true){
var result__5511__auto__ = switch__5508__auto__.call(null,state_13266);if(cljs.core.keyword_identical_QMARK_.call(null,result__5511__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5511__auto__;
}
break;
}
}catch (e13276){if((e13276 instanceof Object))
{var ex__5512__auto__ = e13276;var statearr_13277_13281 = state_13266;(statearr_13277_13281[5] = ex__5512__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13266);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e13276;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5510__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__13282 = state_13266;
state_13266 = G__13282;
continue;
}
} else
{return ret_value__5510__auto__;
}
break;
}
});
state_machine__5509__auto__ = function(state_13266){
switch(arguments.length){
case 0:
return state_machine__5509__auto____0.call(this);
case 1:
return state_machine__5509__auto____1.call(this,state_13266);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5509__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5509__auto____0;
state_machine__5509__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5509__auto____1;
return state_machine__5509__auto__;
})()
;})(switch__5508__auto__))
})();var state__5525__auto__ = (function (){var statearr_13278 = f__5524__auto__.call(null);(statearr_13278[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5523__auto__);
return statearr_13278;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5525__auto__);
}));
return c__5523__auto__;
});
game.main.main = (function main__$1(app_state,url){var client_events_chan = cljs.core.async.chan.call(null);var server_events_chan = cljs.core.async.chan.call(null);game.main.bind_keyboard_events.call(null,client_events_chan);
var ws_13283 = utils.websocket.connect_to_server.call(null,url,server_events_chan);utils.websocket.send_client_events.call(null,ws_13283,client_events_chan);
return game.main.game_loop.call(null,app_state,server_events_chan,client_events_chan);
});
game.main.start_game = (function start_game(client_id){return game.main.main.call(null,game.main.app_state,[cljs.core.str("ws://localhost:3000/game/"),cljs.core.str(client_id)].join(''));
});
