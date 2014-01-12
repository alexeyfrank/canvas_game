// Compiled by ClojureScript 0.0-2138
goog.provide('game.main');
goog.require('cljs.core');
goog.require('game.utils');
goog.require('cljs.core.async');
goog.require('game.player');
goog.require('game.protocols');
goog.require('cljs.core.async');
goog.require('game.player');
goog.require('game.protocols');
goog.require('game.utils');
game.main.config = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"width","width",1127031096),innerWidth,new cljs.core.Keyword(null,"height","height",4087841945),(innerHeight - 100),new cljs.core.Keyword(null,"point-width","point-width",4479721147),5,new cljs.core.Keyword(null,"point-height","point-height",647051126),5,new cljs.core.Keyword(null,"player-width","player-width",3971244876),40,new cljs.core.Keyword(null,"player-height","player-height",2064155909),40], null);
game.main.game_init_state = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"draw-chan","draw-chan",1113990573),cljs.core.async.chan.call(null),new cljs.core.Keyword(null,"events-chan","events-chan",1971162872),cljs.core.async.chan.call(null),new cljs.core.Keyword(null,"players","players",520336676),game.player.generate_players.call(null,game.main.config),new cljs.core.Keyword(null,"current-player-id","current-player-id",2134766501),0], null);
game.main.get_canvas_context = (function get_canvas_context(canvas_el){var width = new cljs.core.Keyword(null,"width","width",1127031096).cljs$core$IFn$_invoke$arity$1(game.main.config);var height = new cljs.core.Keyword(null,"height","height",4087841945).cljs$core$IFn$_invoke$arity$1(game.main.config);(canvas_el["width"] = width);
(canvas_el["height"] = height);
return canvas_el.getContext("2d");
});
game.main.redraw = (function redraw(canvas,old_actor,new_actor){game.protocols.clear.call(null,old_actor,canvas);
return game.protocols.draw.call(null,new_actor,canvas,"#ff0000");
});
game.main.generate_player_events = (function generate_player_events(state,chan){var current_player_id = new cljs.core.Keyword(null,"current-player-id","current-player-id",2134766501).cljs$core$IFn$_invoke$arity$1(state);return setInterval((function (){var seq__17659 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"players","players",520336676).cljs$core$IFn$_invoke$arity$1(state));var chunk__17660 = null;var count__17661 = 0;var i__17662 = 0;while(true){
if((i__17662 < count__17661))
{var vec__17663 = cljs.core._nth.call(null,chunk__17660,i__17662);var id = cljs.core.nth.call(null,vec__17663,0,null);var player = cljs.core.nth.call(null,vec__17663,1,null);if(!(cljs.core._EQ_.call(null,id,current_player_id)))
{cljs.core.async.put_BANG_.call(null,chan,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"event","event",1110795788),new cljs.core.Keyword(null,"player-move","player-move",1524652719),new cljs.core.Keyword(null,"data","data",1016980252),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"player","player",4323118675),id,new cljs.core.Keyword(null,"direction","direction",4346280689),cljs.core.nth.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"up","up",1013907981),new cljs.core.Keyword(null,"down","down",1016993812),new cljs.core.Keyword(null,"left","left",1017222009),new cljs.core.Keyword(null,"right","right",1122416014)], null),cljs.core.rand_int.call(null,4))], null)], null));
} else
{}
{
var G__17665 = seq__17659;
var G__17666 = chunk__17660;
var G__17667 = count__17661;
var G__17668 = (i__17662 + 1);
seq__17659 = G__17665;
chunk__17660 = G__17666;
count__17661 = G__17667;
i__17662 = G__17668;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__17659);if(temp__4092__auto__)
{var seq__17659__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__17659__$1))
{var c__4150__auto__ = cljs.core.chunk_first.call(null,seq__17659__$1);{
var G__17669 = cljs.core.chunk_rest.call(null,seq__17659__$1);
var G__17670 = c__4150__auto__;
var G__17671 = cljs.core.count.call(null,c__4150__auto__);
var G__17672 = 0;
seq__17659 = G__17669;
chunk__17660 = G__17670;
count__17661 = G__17671;
i__17662 = G__17672;
continue;
}
} else
{var vec__17664 = cljs.core.first.call(null,seq__17659__$1);var id = cljs.core.nth.call(null,vec__17664,0,null);var player = cljs.core.nth.call(null,vec__17664,1,null);if(!(cljs.core._EQ_.call(null,id,current_player_id)))
{cljs.core.async.put_BANG_.call(null,chan,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"event","event",1110795788),new cljs.core.Keyword(null,"player-move","player-move",1524652719),new cljs.core.Keyword(null,"data","data",1016980252),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"player","player",4323118675),id,new cljs.core.Keyword(null,"direction","direction",4346280689),cljs.core.nth.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"up","up",1013907981),new cljs.core.Keyword(null,"down","down",1016993812),new cljs.core.Keyword(null,"left","left",1017222009),new cljs.core.Keyword(null,"right","right",1122416014)], null),cljs.core.rand_int.call(null,4))], null)], null));
} else
{}
{
var G__17673 = cljs.core.next.call(null,seq__17659__$1);
var G__17674 = null;
var G__17675 = 0;
var G__17676 = 0;
seq__17659 = G__17673;
chunk__17660 = G__17674;
count__17661 = G__17675;
i__17662 = G__17676;
continue;
}
}
} else
{return null;
}
}
break;
}
}),100);
});
game.main.keyboard_handler = (function keyboard_handler(state,chan,direction){return cljs.core.async.put_BANG_.call(null,chan,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"event","event",1110795788),new cljs.core.Keyword(null,"player-move","player-move",1524652719),new cljs.core.Keyword(null,"data","data",1016980252),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"player","player",4323118675),new cljs.core.Keyword(null,"current-player-id","current-player-id",2134766501).cljs$core$IFn$_invoke$arity$1(state),new cljs.core.Keyword(null,"direction","direction",4346280689),direction], null)], null));
});
game.main.get_new_coords = (function get_new_coords(p__17677,direction){var map__17680 = p__17677;var map__17680__$1 = ((cljs.core.seq_QMARK_.call(null,map__17680))?cljs.core.apply.call(null,cljs.core.hash_map,map__17680):map__17680);var x = cljs.core.get.call(null,map__17680__$1,new cljs.core.Keyword(null,"x","x",1013904362));var y = cljs.core.get.call(null,map__17680__$1,new cljs.core.Keyword(null,"y","y",1013904363));var p_w = new cljs.core.Keyword(null,"point-width","point-width",4479721147).cljs$core$IFn$_invoke$arity$1(game.main.config);var p_h = new cljs.core.Keyword(null,"point-height","point-height",647051126).cljs$core$IFn$_invoke$arity$1(game.main.config);var w = new cljs.core.Keyword(null,"width","width",1127031096).cljs$core$IFn$_invoke$arity$1(game.main.config);var h = new cljs.core.Keyword(null,"height","height",4087841945).cljs$core$IFn$_invoke$arity$1(game.main.config);var G__17681 = direction;if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"down","down",1016993812),G__17681))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,((((y + p_h) >= h))?h:(y + p_h))], null);
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"up","up",1013907981),G__17681))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,((((y - p_h) <= 0))?0:(y - p_h))], null);
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"left","left",1017222009),G__17681))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((((x - p_w) <= 0))?0:(x - p_w)),y], null);
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"right","right",1122416014),G__17681))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((((x + p_w) >= w))?w:(x + p_w)),y], null);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(direction)].join('')));
} else
{return null;
}
}
}
}
}
});
game.main.get_new_player = (function get_new_player(player,direction){var vec__17683 = game.main.get_new_coords.call(null,player,direction);var x = cljs.core.nth.call(null,vec__17683,0,null);var y = cljs.core.nth.call(null,vec__17683,1,null);return cljs.core.assoc.call(null,player,new cljs.core.Keyword(null,"x","x",1013904362),x,new cljs.core.Keyword(null,"y","y",1013904363),y);
});
game.main.intersect_QMARK_ = (function intersect_QMARK_(first_obj,second_obj){var f_w = new cljs.core.Keyword(null,"w","w",1013904361).cljs$core$IFn$_invoke$arity$1(first_obj);var f_h = new cljs.core.Keyword(null,"h","h",1013904346).cljs$core$IFn$_invoke$arity$1(first_obj);var s_w = new cljs.core.Keyword(null,"w","w",1013904361).cljs$core$IFn$_invoke$arity$1(second_obj);var s_h = new cljs.core.Keyword(null,"h","h",1013904346).cljs$core$IFn$_invoke$arity$1(second_obj);var f_x = new cljs.core.Keyword(null,"x","x",1013904362).cljs$core$IFn$_invoke$arity$1(first_obj);var s_x = new cljs.core.Keyword(null,"x","x",1013904362).cljs$core$IFn$_invoke$arity$1(second_obj);var f_y = new cljs.core.Keyword(null,"y","y",1013904363).cljs$core$IFn$_invoke$arity$1(first_obj);var s_y = new cljs.core.Keyword(null,"y","y",1013904363).cljs$core$IFn$_invoke$arity$1(second_obj);return ((((f_x <= s_x)) && (((f_x + f_w) >= s_x))) && (((f_y <= s_y)) && (((f_y + f_h) >= s_y)))) || ((((f_x <= s_x)) && (((f_x + f_w) >= s_x))) && (((f_y >= s_y)) && ((f_y <= (s_y + s_h))))) || ((((f_x >= s_x)) && ((f_x <= (s_x + s_w)))) && (((f_y <= s_y)) && (((f_y + f_h) >= s_y)))) || ((((f_x >= s_x)) && ((f_x <= (s_x + s_w)))) && (((f_y >= s_y)) && ((f_y <= (s_y + s_h)))));
});
game.main.can_move_player_QMARK_ = (function can_move_player_QMARK_(state,p,direction){var players = new cljs.core.Keyword(null,"players","players",520336676).cljs$core$IFn$_invoke$arity$1(state);var new_player = game.main.get_new_player.call(null,p,direction);return cljs.core.not_any_QMARK_.call(null,(function (p__17686){var vec__17687 = p__17686;var idx = cljs.core.nth.call(null,vec__17687,0,null);var player = cljs.core.nth.call(null,vec__17687,1,null);if(!(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"id","id",1013907597).cljs$core$IFn$_invoke$arity$1(player),new cljs.core.Keyword(null,"id","id",1013907597).cljs$core$IFn$_invoke$arity$1(new_player))))
{return game.main.intersect_QMARK_.call(null,new_player,player);
} else
{return false;
}
}),players);
});
game.main.move_player = (function move_player(state,p_id,direction){var players = new cljs.core.Keyword(null,"players","players",520336676).cljs$core$IFn$_invoke$arity$1(state);var p = cljs.core.get.call(null,players,p_id);if(game.main.can_move_player_QMARK_.call(null,state,p,direction))
{var new_player = game.main.get_new_player.call(null,p,direction);var draw_chan = new cljs.core.Keyword(null,"draw-chan","draw-chan",1113990573).cljs$core$IFn$_invoke$arity$1(state);cljs.core.async.put_BANG_.call(null,draw_chan,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p,new_player], null));
return cljs.core.assoc_in.call(null,state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"players","players",520336676),p_id], null),new_player);
} else
{return state;
}
});
game.main.handle_event = (function handle_event(state,p__17688){var map__17692 = p__17688;var map__17692__$1 = ((cljs.core.seq_QMARK_.call(null,map__17692))?cljs.core.apply.call(null,cljs.core.hash_map,map__17692):map__17692);var event = cljs.core.get.call(null,map__17692__$1,new cljs.core.Keyword(null,"event","event",1110795788));var map__17693 = cljs.core.get.call(null,map__17692__$1,new cljs.core.Keyword(null,"data","data",1016980252));var map__17693__$1 = ((cljs.core.seq_QMARK_.call(null,map__17693))?cljs.core.apply.call(null,cljs.core.hash_map,map__17693):map__17693);var player_id = cljs.core.get.call(null,map__17693__$1,new cljs.core.Keyword(null,"player","player",4323118675));var direction = cljs.core.get.call(null,map__17693__$1,new cljs.core.Keyword(null,"direction","direction",4346280689));var G__17694 = event;if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"player-move","player-move",1524652719),G__17694))
{return game.main.move_player.call(null,state,player_id,direction);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(event)].join('')));
} else
{return null;
}
}
});
game.main.game_loop = (function game_loop(game_init_state,canvas){var draw_chan = new cljs.core.Keyword(null,"draw-chan","draw-chan",1113990573).cljs$core$IFn$_invoke$arity$1(game_init_state);var events_chan = new cljs.core.Keyword(null,"events-chan","events-chan",1971162872).cljs$core$IFn$_invoke$arity$1(game_init_state);var c__5523__auto___17801 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5524__auto__ = (function (){var switch__5508__auto__ = (function (state_17757){var state_val_17758 = (state_17757[1]);if((state_val_17758 === 4))
{var inst_17748 = (state_17757[7]);var inst_17751 = (state_17757[2]);var inst_17752 = game.main.handle_event.call(null,inst_17748,inst_17751);var inst_17748__$1 = inst_17752;var state_17757__$1 = (function (){var statearr_17759 = state_17757;(statearr_17759[7] = inst_17748__$1);
return statearr_17759;
})();var statearr_17760_17802 = state_17757__$1;(statearr_17760_17802[2] = null);
(statearr_17760_17802[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17758 === 3))
{var inst_17755 = (state_17757[2]);var state_17757__$1 = state_17757;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17757__$1,inst_17755);
} else
{if((state_val_17758 === 2))
{var state_17757__$1 = state_17757;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17757__$1,4,events_chan);
} else
{if((state_val_17758 === 1))
{var inst_17748 = game_init_state;var state_17757__$1 = (function (){var statearr_17761 = state_17757;(statearr_17761[7] = inst_17748);
return statearr_17761;
})();var statearr_17762_17803 = state_17757__$1;(statearr_17762_17803[2] = null);
(statearr_17762_17803[1] = 2);
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
var state_machine__5509__auto____0 = (function (){var statearr_17766 = [null,null,null,null,null,null,null,null];(statearr_17766[0] = state_machine__5509__auto__);
(statearr_17766[1] = 1);
return statearr_17766;
});
var state_machine__5509__auto____1 = (function (state_17757){while(true){
var ret_value__5510__auto__ = (function (){try{while(true){
var result__5511__auto__ = switch__5508__auto__.call(null,state_17757);if(cljs.core.keyword_identical_QMARK_.call(null,result__5511__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5511__auto__;
}
break;
}
}catch (e17767){if((e17767 instanceof Object))
{var ex__5512__auto__ = e17767;var statearr_17768_17804 = state_17757;(statearr_17768_17804[5] = ex__5512__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17757);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e17767;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5510__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__17805 = state_17757;
state_17757 = G__17805;
continue;
}
} else
{return ret_value__5510__auto__;
}
break;
}
});
state_machine__5509__auto__ = function(state_17757){
switch(arguments.length){
case 0:
return state_machine__5509__auto____0.call(this);
case 1:
return state_machine__5509__auto____1.call(this,state_17757);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5509__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5509__auto____0;
state_machine__5509__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5509__auto____1;
return state_machine__5509__auto__;
})()
;})(switch__5508__auto__))
})();var state__5525__auto__ = (function (){var statearr_17769 = f__5524__auto__.call(null);(statearr_17769[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5523__auto___17801);
return statearr_17769;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5525__auto__);
}));
var c__5523__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5524__auto__ = (function (){var switch__5508__auto__ = (function (state_17785){var state_val_17786 = (state_17785[1]);if((state_val_17786 === 7))
{var inst_17774 = (state_17785[2]);var inst_17775 = cljs.core.nth.call(null,inst_17774,0,null);var inst_17776 = cljs.core.nth.call(null,inst_17774,1,null);var inst_17777 = game.main.redraw.call(null,canvas,inst_17775,inst_17776);var state_17785__$1 = (function (){var statearr_17787 = state_17785;(statearr_17787[7] = inst_17777);
return statearr_17787;
})();var statearr_17788_17806 = state_17785__$1;(statearr_17788_17806[2] = null);
(statearr_17788_17806[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17786 === 6))
{var inst_17781 = (state_17785[2]);var state_17785__$1 = state_17785;var statearr_17789_17807 = state_17785__$1;(statearr_17789_17807[2] = inst_17781);
(statearr_17789_17807[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17786 === 5))
{var state_17785__$1 = state_17785;var statearr_17790_17808 = state_17785__$1;(statearr_17790_17808[2] = null);
(statearr_17790_17808[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17786 === 4))
{var state_17785__$1 = state_17785;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17785__$1,7,draw_chan);
} else
{if((state_val_17786 === 3))
{var inst_17783 = (state_17785[2]);var state_17785__$1 = state_17785;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17785__$1,inst_17783);
} else
{if((state_val_17786 === 2))
{var state_17785__$1 = state_17785;if(true)
{var statearr_17791_17809 = state_17785__$1;(statearr_17791_17809[1] = 4);
} else
{var statearr_17792_17810 = state_17785__$1;(statearr_17792_17810[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17786 === 1))
{var state_17785__$1 = state_17785;var statearr_17793_17811 = state_17785__$1;(statearr_17793_17811[2] = null);
(statearr_17793_17811[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
});return ((function (switch__5508__auto__){
return (function() {
var state_machine__5509__auto__ = null;
var state_machine__5509__auto____0 = (function (){var statearr_17797 = [null,null,null,null,null,null,null,null];(statearr_17797[0] = state_machine__5509__auto__);
(statearr_17797[1] = 1);
return statearr_17797;
});
var state_machine__5509__auto____1 = (function (state_17785){while(true){
var ret_value__5510__auto__ = (function (){try{while(true){
var result__5511__auto__ = switch__5508__auto__.call(null,state_17785);if(cljs.core.keyword_identical_QMARK_.call(null,result__5511__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5511__auto__;
}
break;
}
}catch (e17798){if((e17798 instanceof Object))
{var ex__5512__auto__ = e17798;var statearr_17799_17812 = state_17785;(statearr_17799_17812[5] = ex__5512__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17785);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e17798;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5510__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__17813 = state_17785;
state_17785 = G__17813;
continue;
}
} else
{return ret_value__5510__auto__;
}
break;
}
});
state_machine__5509__auto__ = function(state_17785){
switch(arguments.length){
case 0:
return state_machine__5509__auto____0.call(this);
case 1:
return state_machine__5509__auto____1.call(this,state_17785);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5509__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5509__auto____0;
state_machine__5509__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5509__auto____1;
return state_machine__5509__auto__;
})()
;})(switch__5508__auto__))
})();var state__5525__auto__ = (function (){var statearr_17800 = f__5524__auto__.call(null);(statearr_17800[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5523__auto__);
return statearr_17800;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5525__auto__);
}));
return c__5523__auto__;
});
game.main.bind_keyboard_events = (function bind_keyboard_events(state,chan){game.utils.keymaster.call(null,"left",(function (){return game.main.keyboard_handler.call(null,state,chan,new cljs.core.Keyword(null,"left","left",1017222009));
}));
game.utils.keymaster.call(null,"right",(function (){return game.main.keyboard_handler.call(null,state,chan,new cljs.core.Keyword(null,"right","right",1122416014));
}));
game.utils.keymaster.call(null,"up",(function (){return game.main.keyboard_handler.call(null,state,chan,new cljs.core.Keyword(null,"up","up",1013907981));
}));
return game.utils.keymaster.call(null,"down",(function (){return game.main.keyboard_handler.call(null,state,chan,new cljs.core.Keyword(null,"down","down",1016993812));
}));
});
game.main.main = (function main(state,canvas_el){var canvas = game.main.get_canvas_context.call(null,canvas_el);var events_chan = new cljs.core.Keyword(null,"events-chan","events-chan",1971162872).cljs$core$IFn$_invoke$arity$1(state);game.main.bind_keyboard_events.call(null,state,events_chan);
game.main.generate_player_events.call(null,state,events_chan);
return game.main.game_loop.call(null,state,canvas);
});
game.main.main.call(null,game.main.game_init_state,document.getElementById("app"));
