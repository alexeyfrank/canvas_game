// Compiled by ClojureScript 0.0-2138
goog.provide('game.main');
goog.require('cljs.core');
goog.require('game.utils');
goog.require('cljs.core.async');
goog.require('utils.websocket');
goog.require('game.kinetic');
goog.require('utils.websocket');
goog.require('game.controls');
goog.require('game.utils');
goog.require('game.kinetic');
goog.require('game.controls');
goog.require('game.handlers');
goog.require('cljs.core.async');
goog.require('game.handlers');
game.main.app_state = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"stage","stage",1123661424),game.kinetic.stage.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"container","container",602947571),"game-container",new cljs.core.Keyword(null,"width","width",1127031096),800,new cljs.core.Keyword(null,"height","height",4087841945),600], null)),new cljs.core.Keyword(null,"layer","layer",1116653763),game.kinetic.layer.call(null),new cljs.core.Keyword(null,"players","players",520336676),cljs.core.PersistentArrayMap.EMPTY], null);
game.main.generate_player_events = (function generate_player_events(chan){setInterval((window["direction"] = cljs.core.nth.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"left","left",1017222009),new cljs.core.Keyword(null,"right","right",1122416014),new cljs.core.Keyword(null,"top","top",1014019271),new cljs.core.Keyword(null,"bottom","bottom",3925642653)], null),cljs.core.rand_int.call(null,4))),1000);
return setInterval((function (){return cljs.core.async.put_BANG_.call(null,chan,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"event","event",1110795788),new cljs.core.Keyword(null,"player-event","player-event",3955009568),new cljs.core.Keyword(null,"data","data",1016980252),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"action","action",3885920680),new cljs.core.Keyword(null,"move","move",1017261891),new cljs.core.Keyword(null,"direction","direction",4346280689),window.direction], null)], null));
}),100);
});
game.main.handle_server_event = (function handle_server_event(state,p__16042){var map__16045 = p__16042;var map__16045__$1 = ((cljs.core.seq_QMARK_.call(null,map__16045))?cljs.core.apply.call(null,cljs.core.hash_map,map__16045):map__16045);var event = map__16045__$1;var event_name = cljs.core.get.call(null,map__16045__$1,"event");var data = cljs.core.get.call(null,map__16045__$1,"data");var G__16046 = event_name;if(cljs.core._EQ_.call(null,"sync_game",G__16046))
{return game.handlers.sync_game.call(null,state,data);
} else
{if(cljs.core._EQ_.call(null,"player_disconnected",G__16046))
{return game.handlers.remove_player.call(null,state,data);
} else
{if(cljs.core._EQ_.call(null,"player_connected",G__16046))
{return game.handlers.add_player.call(null,state,data);
} else
{if(cljs.core._EQ_.call(null,"disconnected",G__16046))
{return game.handlers.handle_disconnect.call(null,state);
} else
{if(cljs.core._EQ_.call(null,"connected",G__16046))
{return game.handlers.handle_connect.call(null,state);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return game.utils.l.call(null,[cljs.core.str("event not found: "),cljs.core.str(event_name)].join(''));
} else
{return null;
}
}
}
}
}
}
});
game.main.create_playground = (function create_playground(state){var layer_16047 = new cljs.core.Keyword(null,"layer","layer",1116653763).cljs$core$IFn$_invoke$arity$1(state);var stage_16048 = new cljs.core.Keyword(null,"stage","stage",1123661424).cljs$core$IFn$_invoke$arity$1(state);stage_16048.add(layer_16047);
return state;
});
game.main.game_loop = (function game_loop(init_state,server_events_chan){var c__6049__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6050__auto__ = (function (){var switch__6034__auto__ = (function (state_16086){var state_val_16087 = (state_16086[1]);if((state_val_16087 === 4))
{var inst_16075 = (state_16086[7]);var inst_16078 = (state_16086[2]);var inst_16079 = cljs.core.clj__GT_js.call(null,inst_16078);var inst_16080 = game.utils.l.call(null,inst_16079);var inst_16081 = game.main.handle_server_event.call(null,inst_16075,inst_16078);var inst_16075__$1 = inst_16081;var state_16086__$1 = (function (){var statearr_16088 = state_16086;(statearr_16088[8] = inst_16080);
(statearr_16088[7] = inst_16075__$1);
return statearr_16088;
})();var statearr_16089_16099 = state_16086__$1;(statearr_16089_16099[2] = null);
(statearr_16089_16099[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16087 === 3))
{var inst_16084 = (state_16086[2]);var state_16086__$1 = state_16086;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16086__$1,inst_16084);
} else
{if((state_val_16087 === 2))
{var state_16086__$1 = state_16086;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16086__$1,4,server_events_chan);
} else
{if((state_val_16087 === 1))
{var inst_16074 = game.main.create_playground.call(null,init_state);var inst_16075 = inst_16074;var state_16086__$1 = (function (){var statearr_16090 = state_16086;(statearr_16090[7] = inst_16075);
return statearr_16090;
})();var statearr_16091_16100 = state_16086__$1;(statearr_16091_16100[2] = null);
(statearr_16091_16100[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
});return ((function (switch__6034__auto__){
return (function() {
var state_machine__6035__auto__ = null;
var state_machine__6035__auto____0 = (function (){var statearr_16095 = [null,null,null,null,null,null,null,null,null];(statearr_16095[0] = state_machine__6035__auto__);
(statearr_16095[1] = 1);
return statearr_16095;
});
var state_machine__6035__auto____1 = (function (state_16086){while(true){
var ret_value__6036__auto__ = (function (){try{while(true){
var result__6037__auto__ = switch__6034__auto__.call(null,state_16086);if(cljs.core.keyword_identical_QMARK_.call(null,result__6037__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6037__auto__;
}
break;
}
}catch (e16096){if((e16096 instanceof Object))
{var ex__6038__auto__ = e16096;var statearr_16097_16101 = state_16086;(statearr_16097_16101[5] = ex__6038__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16086);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e16096;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6036__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__16102 = state_16086;
state_16086 = G__16102;
continue;
}
} else
{return ret_value__6036__auto__;
}
break;
}
});
state_machine__6035__auto__ = function(state_16086){
switch(arguments.length){
case 0:
return state_machine__6035__auto____0.call(this);
case 1:
return state_machine__6035__auto____1.call(this,state_16086);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6035__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6035__auto____0;
state_machine__6035__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6035__auto____1;
return state_machine__6035__auto__;
})()
;})(switch__6034__auto__))
})();var state__6051__auto__ = (function (){var statearr_16098 = f__6050__auto__.call(null);(statearr_16098[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6049__auto__);
return statearr_16098;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6051__auto__);
}));
return c__6049__auto__;
});
game.main.main = (function main__$1(app_state,url){var client_events_chan = cljs.core.async.chan.call(null);var server_events_chan = cljs.core.async.chan.call(null);game.controls.bind_keyboard_events.call(null,client_events_chan);
var ws_16103 = utils.websocket.connect_to_server.call(null,url,server_events_chan);utils.websocket.send_client_events.call(null,ws_16103,client_events_chan);
return game.main.game_loop.call(null,app_state,server_events_chan);
});
game.main.start_game = (function start_game(client_id){return game.main.main.call(null,game.main.app_state,[cljs.core.str("ws://localhost:3000/game/"),cljs.core.str(client_id)].join(''));
});
