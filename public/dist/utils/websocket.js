// Compiled by ClojureScript 0.0-2138
goog.provide('utils.websocket');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('cljs.core.async');
utils.websocket.create = (function create(url){return $.bullet(url);
});
utils.websocket.configure = (function configure(ws,config){var seq__15426_15432 = cljs.core.seq.call(null,config);var chunk__15427_15433 = null;var count__15428_15434 = 0;var i__15429_15435 = 0;while(true){
if((i__15429_15435 < count__15428_15434))
{var vec__15430_15436 = cljs.core._nth.call(null,chunk__15427_15433,i__15429_15435);var k_15437 = cljs.core.nth.call(null,vec__15430_15436,0,null);var v_15438 = cljs.core.nth.call(null,vec__15430_15436,1,null);(ws[cljs.core.name.call(null,k_15437)] = v_15438);
{
var G__15439 = seq__15426_15432;
var G__15440 = chunk__15427_15433;
var G__15441 = count__15428_15434;
var G__15442 = (i__15429_15435 + 1);
seq__15426_15432 = G__15439;
chunk__15427_15433 = G__15440;
count__15428_15434 = G__15441;
i__15429_15435 = G__15442;
continue;
}
} else
{var temp__4092__auto___15443 = cljs.core.seq.call(null,seq__15426_15432);if(temp__4092__auto___15443)
{var seq__15426_15444__$1 = temp__4092__auto___15443;if(cljs.core.chunked_seq_QMARK_.call(null,seq__15426_15444__$1))
{var c__4150__auto___15445 = cljs.core.chunk_first.call(null,seq__15426_15444__$1);{
var G__15446 = cljs.core.chunk_rest.call(null,seq__15426_15444__$1);
var G__15447 = c__4150__auto___15445;
var G__15448 = cljs.core.count.call(null,c__4150__auto___15445);
var G__15449 = 0;
seq__15426_15432 = G__15446;
chunk__15427_15433 = G__15447;
count__15428_15434 = G__15448;
i__15429_15435 = G__15449;
continue;
}
} else
{var vec__15431_15450 = cljs.core.first.call(null,seq__15426_15444__$1);var k_15451 = cljs.core.nth.call(null,vec__15431_15450,0,null);var v_15452 = cljs.core.nth.call(null,vec__15431_15450,1,null);(ws[cljs.core.name.call(null,k_15451)] = v_15452);
{
var G__15453 = cljs.core.next.call(null,seq__15426_15444__$1);
var G__15454 = null;
var G__15455 = 0;
var G__15456 = 0;
seq__15426_15432 = G__15453;
chunk__15427_15433 = G__15454;
count__15428_15434 = G__15455;
i__15429_15435 = G__15456;
continue;
}
}
} else
{}
}
break;
}
return ws;
});
utils.websocket.connect_to_server = (function connect_to_server(url,chan){var ws = utils.websocket.create.call(null,url);return utils.websocket.configure.call(null,ws,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"onmessage","onmessage",1640455354),(function (e){return cljs.core.async.put_BANG_.call(null,chan,cljs.core.js__GT_clj.call(null,JSON.parse.call(null,e.data)));
}),new cljs.core.Keyword(null,"onopen","onopen",4296744987),(function (){return cljs.core.async.put_BANG_.call(null,chan,new cljs.core.PersistentArrayMap(null, 1, ["event","connected"], null));
}),new cljs.core.Keyword(null,"ondisconnect","ondisconnect",2891435821),(function (){return cljs.core.async.put_BANG_.call(null,chan,new cljs.core.PersistentArrayMap(null, 1, ["event","disconnected"], null));
})], null));
});
utils.websocket.send_client_events = (function send_client_events(ws,chan){var c__6049__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6050__auto__ = (function (){var switch__6034__auto__ = (function (state_15493){var state_val_15494 = (state_15493[1]);if((state_val_15494 === 4))
{var inst_15483 = (state_15493[2]);var inst_15484 = [inst_15483];var inst_15485 = (new cljs.core.PersistentVector(null,1,5,cljs.core.PersistentVector.EMPTY_NODE,inst_15484,null));var inst_15486 = cljs.core.clj__GT_js.call(null,inst_15485);var inst_15487 = JSON.stringify.call(null,inst_15486);var inst_15488 = ws.send(inst_15487);var state_15493__$1 = (function (){var statearr_15495 = state_15493;(statearr_15495[7] = inst_15488);
return statearr_15495;
})();var statearr_15496_15505 = state_15493__$1;(statearr_15496_15505[2] = null);
(statearr_15496_15505[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15494 === 3))
{var inst_15491 = (state_15493[2]);var state_15493__$1 = state_15493;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15493__$1,inst_15491);
} else
{if((state_val_15494 === 2))
{var state_15493__$1 = state_15493;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15493__$1,4,chan);
} else
{if((state_val_15494 === 1))
{var state_15493__$1 = state_15493;var statearr_15497_15506 = state_15493__$1;(statearr_15497_15506[2] = null);
(statearr_15497_15506[1] = 2);
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
var state_machine__6035__auto____0 = (function (){var statearr_15501 = [null,null,null,null,null,null,null,null];(statearr_15501[0] = state_machine__6035__auto__);
(statearr_15501[1] = 1);
return statearr_15501;
});
var state_machine__6035__auto____1 = (function (state_15493){while(true){
var ret_value__6036__auto__ = (function (){try{while(true){
var result__6037__auto__ = switch__6034__auto__.call(null,state_15493);if(cljs.core.keyword_identical_QMARK_.call(null,result__6037__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6037__auto__;
}
break;
}
}catch (e15502){if((e15502 instanceof Object))
{var ex__6038__auto__ = e15502;var statearr_15503_15507 = state_15493;(statearr_15503_15507[5] = ex__6038__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15493);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e15502;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6036__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__15508 = state_15493;
state_15493 = G__15508;
continue;
}
} else
{return ret_value__6036__auto__;
}
break;
}
});
state_machine__6035__auto__ = function(state_15493){
switch(arguments.length){
case 0:
return state_machine__6035__auto____0.call(this);
case 1:
return state_machine__6035__auto____1.call(this,state_15493);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6035__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6035__auto____0;
state_machine__6035__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6035__auto____1;
return state_machine__6035__auto__;
})()
;})(switch__6034__auto__))
})();var state__6051__auto__ = (function (){var statearr_15504 = f__6050__auto__.call(null);(statearr_15504[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6049__auto__);
return statearr_15504;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6051__auto__);
}));
return c__6049__auto__;
});
