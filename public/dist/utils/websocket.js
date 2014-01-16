// Compiled by ClojureScript 0.0-2138
goog.provide('utils.websocket');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('cljs.core.async');
utils.websocket.create = (function create(url){return $.bullet(url);
});
utils.websocket.configure = (function configure(ws,config){var seq__8645_8651 = cljs.core.seq.call(null,config);var chunk__8646_8652 = null;var count__8647_8653 = 0;var i__8648_8654 = 0;while(true){
if((i__8648_8654 < count__8647_8653))
{var vec__8649_8655 = cljs.core._nth.call(null,chunk__8646_8652,i__8648_8654);var k_8656 = cljs.core.nth.call(null,vec__8649_8655,0,null);var v_8657 = cljs.core.nth.call(null,vec__8649_8655,1,null);(ws[cljs.core.name.call(null,k_8656)] = v_8657);
{
var G__8658 = seq__8645_8651;
var G__8659 = chunk__8646_8652;
var G__8660 = count__8647_8653;
var G__8661 = (i__8648_8654 + 1);
seq__8645_8651 = G__8658;
chunk__8646_8652 = G__8659;
count__8647_8653 = G__8660;
i__8648_8654 = G__8661;
continue;
}
} else
{var temp__4092__auto___8662 = cljs.core.seq.call(null,seq__8645_8651);if(temp__4092__auto___8662)
{var seq__8645_8663__$1 = temp__4092__auto___8662;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8645_8663__$1))
{var c__4150__auto___8664 = cljs.core.chunk_first.call(null,seq__8645_8663__$1);{
var G__8665 = cljs.core.chunk_rest.call(null,seq__8645_8663__$1);
var G__8666 = c__4150__auto___8664;
var G__8667 = cljs.core.count.call(null,c__4150__auto___8664);
var G__8668 = 0;
seq__8645_8651 = G__8665;
chunk__8646_8652 = G__8666;
count__8647_8653 = G__8667;
i__8648_8654 = G__8668;
continue;
}
} else
{var vec__8650_8669 = cljs.core.first.call(null,seq__8645_8663__$1);var k_8670 = cljs.core.nth.call(null,vec__8650_8669,0,null);var v_8671 = cljs.core.nth.call(null,vec__8650_8669,1,null);(ws[cljs.core.name.call(null,k_8670)] = v_8671);
{
var G__8672 = cljs.core.next.call(null,seq__8645_8663__$1);
var G__8673 = null;
var G__8674 = 0;
var G__8675 = 0;
seq__8645_8651 = G__8672;
chunk__8646_8652 = G__8673;
count__8647_8653 = G__8674;
i__8648_8654 = G__8675;
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
utils.websocket.connect_to_server = (function connect_to_server(url,chan){var ws = utils.websocket.create.call(null,url);return utils.websocket.configure.call(null,ws,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"onmessage","onmessage",1640455354),(function (e){return cljs.core.async.put_BANG_.call(null,chan,cljs.core.js__GT_clj.call(null,JSON.parse.call(null,e.data)));
}),new cljs.core.Keyword(null,"onopen","onopen",4296744987),(function (){return cljs.core.async.put_BANG_.call(null,chan,new cljs.core.PersistentArrayMap(null, 1, ["event","connected"], null));
})], null));
});
utils.websocket.send_client_events = (function send_client_events(ws,chan){var c__5523__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5524__auto__ = (function (){var switch__5508__auto__ = (function (state_8708){var state_val_8709 = (state_8708[1]);if((state_val_8709 === 4))
{var inst_8700 = (state_8708[2]);var inst_8701 = cljs.core.clj__GT_js.call(null,inst_8700);var inst_8702 = JSON.stringify.call(null,inst_8701);var inst_8703 = ws.send(inst_8702);var state_8708__$1 = (function (){var statearr_8710 = state_8708;(statearr_8710[7] = inst_8703);
return statearr_8710;
})();var statearr_8711_8720 = state_8708__$1;(statearr_8711_8720[2] = null);
(statearr_8711_8720[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_8709 === 3))
{var inst_8706 = (state_8708[2]);var state_8708__$1 = state_8708;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_8708__$1,inst_8706);
} else
{if((state_val_8709 === 2))
{var state_8708__$1 = state_8708;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_8708__$1,4,chan);
} else
{if((state_val_8709 === 1))
{var state_8708__$1 = state_8708;var statearr_8712_8721 = state_8708__$1;(statearr_8712_8721[2] = null);
(statearr_8712_8721[1] = 2);
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
var state_machine__5509__auto____0 = (function (){var statearr_8716 = [null,null,null,null,null,null,null,null];(statearr_8716[0] = state_machine__5509__auto__);
(statearr_8716[1] = 1);
return statearr_8716;
});
var state_machine__5509__auto____1 = (function (state_8708){while(true){
var ret_value__5510__auto__ = (function (){try{while(true){
var result__5511__auto__ = switch__5508__auto__.call(null,state_8708);if(cljs.core.keyword_identical_QMARK_.call(null,result__5511__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5511__auto__;
}
break;
}
}catch (e8717){if((e8717 instanceof Object))
{var ex__5512__auto__ = e8717;var statearr_8718_8722 = state_8708;(statearr_8718_8722[5] = ex__5512__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_8708);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e8717;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5510__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__8723 = state_8708;
state_8708 = G__8723;
continue;
}
} else
{return ret_value__5510__auto__;
}
break;
}
});
state_machine__5509__auto__ = function(state_8708){
switch(arguments.length){
case 0:
return state_machine__5509__auto____0.call(this);
case 1:
return state_machine__5509__auto____1.call(this,state_8708);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5509__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5509__auto____0;
state_machine__5509__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5509__auto____1;
return state_machine__5509__auto__;
})()
;})(switch__5508__auto__))
})();var state__5525__auto__ = (function (){var statearr_8719 = f__5524__auto__.call(null);(statearr_8719[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5523__auto__);
return statearr_8719;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5525__auto__);
}));
return c__5523__auto__;
});
