// Compiled by ClojureScript 0.0-2138
goog.provide('utils.websocket');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('cljs.core.async');
utils.websocket.create = (function create(url){return $.bullet(url);
});
utils.websocket.configure = (function configure(ws,config){var seq__8752_8758 = cljs.core.seq.call(null,config);var chunk__8753_8759 = null;var count__8754_8760 = 0;var i__8755_8761 = 0;while(true){
if((i__8755_8761 < count__8754_8760))
{var vec__8756_8762 = cljs.core._nth.call(null,chunk__8753_8759,i__8755_8761);var k_8763 = cljs.core.nth.call(null,vec__8756_8762,0,null);var v_8764 = cljs.core.nth.call(null,vec__8756_8762,1,null);(ws[cljs.core.name.call(null,k_8763)] = v_8764);
{
var G__8765 = seq__8752_8758;
var G__8766 = chunk__8753_8759;
var G__8767 = count__8754_8760;
var G__8768 = (i__8755_8761 + 1);
seq__8752_8758 = G__8765;
chunk__8753_8759 = G__8766;
count__8754_8760 = G__8767;
i__8755_8761 = G__8768;
continue;
}
} else
{var temp__4092__auto___8769 = cljs.core.seq.call(null,seq__8752_8758);if(temp__4092__auto___8769)
{var seq__8752_8770__$1 = temp__4092__auto___8769;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8752_8770__$1))
{var c__4150__auto___8771 = cljs.core.chunk_first.call(null,seq__8752_8770__$1);{
var G__8772 = cljs.core.chunk_rest.call(null,seq__8752_8770__$1);
var G__8773 = c__4150__auto___8771;
var G__8774 = cljs.core.count.call(null,c__4150__auto___8771);
var G__8775 = 0;
seq__8752_8758 = G__8772;
chunk__8753_8759 = G__8773;
count__8754_8760 = G__8774;
i__8755_8761 = G__8775;
continue;
}
} else
{var vec__8757_8776 = cljs.core.first.call(null,seq__8752_8770__$1);var k_8777 = cljs.core.nth.call(null,vec__8757_8776,0,null);var v_8778 = cljs.core.nth.call(null,vec__8757_8776,1,null);(ws[cljs.core.name.call(null,k_8777)] = v_8778);
{
var G__8779 = cljs.core.next.call(null,seq__8752_8770__$1);
var G__8780 = null;
var G__8781 = 0;
var G__8782 = 0;
seq__8752_8758 = G__8779;
chunk__8753_8759 = G__8780;
count__8754_8760 = G__8781;
i__8755_8761 = G__8782;
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
utils.websocket.send_client_events = (function send_client_events(ws,chan){var c__6049__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6050__auto__ = (function (){var switch__6034__auto__ = (function (state_8819){var state_val_8820 = (state_8819[1]);if((state_val_8820 === 4))
{var inst_8809 = (state_8819[2]);var inst_8810 = [inst_8809];var inst_8811 = (new cljs.core.PersistentVector(null,1,5,cljs.core.PersistentVector.EMPTY_NODE,inst_8810,null));var inst_8812 = cljs.core.clj__GT_js.call(null,inst_8811);var inst_8813 = JSON.stringify.call(null,inst_8812);var inst_8814 = ws.send(inst_8813);var state_8819__$1 = (function (){var statearr_8821 = state_8819;(statearr_8821[7] = inst_8814);
return statearr_8821;
})();var statearr_8822_8831 = state_8819__$1;(statearr_8822_8831[2] = null);
(statearr_8822_8831[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_8820 === 3))
{var inst_8817 = (state_8819[2]);var state_8819__$1 = state_8819;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_8819__$1,inst_8817);
} else
{if((state_val_8820 === 2))
{var state_8819__$1 = state_8819;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_8819__$1,4,chan);
} else
{if((state_val_8820 === 1))
{var state_8819__$1 = state_8819;var statearr_8823_8832 = state_8819__$1;(statearr_8823_8832[2] = null);
(statearr_8823_8832[1] = 2);
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
var state_machine__6035__auto____0 = (function (){var statearr_8827 = [null,null,null,null,null,null,null,null];(statearr_8827[0] = state_machine__6035__auto__);
(statearr_8827[1] = 1);
return statearr_8827;
});
var state_machine__6035__auto____1 = (function (state_8819){while(true){
var ret_value__6036__auto__ = (function (){try{while(true){
var result__6037__auto__ = switch__6034__auto__.call(null,state_8819);if(cljs.core.keyword_identical_QMARK_.call(null,result__6037__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6037__auto__;
}
break;
}
}catch (e8828){if((e8828 instanceof Object))
{var ex__6038__auto__ = e8828;var statearr_8829_8833 = state_8819;(statearr_8829_8833[5] = ex__6038__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_8819);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e8828;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6036__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__8834 = state_8819;
state_8819 = G__8834;
continue;
}
} else
{return ret_value__6036__auto__;
}
break;
}
});
state_machine__6035__auto__ = function(state_8819){
switch(arguments.length){
case 0:
return state_machine__6035__auto____0.call(this);
case 1:
return state_machine__6035__auto____1.call(this,state_8819);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6035__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6035__auto____0;
state_machine__6035__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6035__auto____1;
return state_machine__6035__auto__;
})()
;})(switch__6034__auto__))
})();var state__6051__auto__ = (function (){var statearr_8830 = f__6050__auto__.call(null);(statearr_8830[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6049__auto__);
return statearr_8830;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6051__auto__);
}));
return c__6049__auto__;
});
