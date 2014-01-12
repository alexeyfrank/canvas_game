// Compiled by ClojureScript 0.0-2138
goog.provide('main.core');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('cljs.core.async');
goog.require('om.dom');
goog.require('om.dom');
goog.require('om.core');
goog.require('om.core');
cljs.core.enable_console_print_BANG_.call(null);
main.core.app_state = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"counters","counters",641883497),cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.map.call(null,(function (n){return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",1013907597),n,new cljs.core.Keyword(null,"count","count",1108755585),0,new cljs.core.Keyword(null,"shared","shared",4405305303),0], null);
}),cljs.core.range.call(null,10))),new cljs.core.Keyword(null,"shared","shared",4405305303),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["A shared bit of UI!"], null)], null));
main.core.counter = (function counter(data,owner,chans){if(typeof main.core.t9237 !== 'undefined')
{} else
{
/**
* @constructor
*/
main.core.t9237 = (function (chans,owner,data,counter,meta9238){
this.chans = chans;
this.owner = owner;
this.data = data;
this.counter = counter;
this.meta9238 = meta9238;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
main.core.t9237.cljs$lang$type = true;
main.core.t9237.cljs$lang$ctorStr = "main.core/t9237";
main.core.t9237.cljs$lang$ctorPrWriter = (function (this__3970__auto__,writer__3971__auto__,opt__3972__auto__){return cljs.core._write.call(null,writer__3971__auto__,"main.core/t9237");
});
main.core.t9237.prototype.om$core$IRender$ = true;
main.core.t9237.prototype.om$core$IRender$render$arity$1 = (function (this__9037__auto__){var self__ = this;
var this__9037__auto____$1 = this;return React.DOM.div(null,React.DOM.label(null,new cljs.core.Keyword(null,"count","count",1108755585).cljs$core$IFn$_invoke$arity$1(self__.data)),React.DOM.button({"onClick": (function (e){om.core.transact_BANG_.call(null,self__.data,new cljs.core.Keyword(null,"count","count",1108755585),cljs.core.inc);
return cljs.core.async.put_BANG_.call(null,new cljs.core.Keyword(null,"last-clicked","last-clicked",1206387554).cljs$core$IFn$_invoke$arity$1(self__.chans),self__.data.path);
})},"+"),React.DOM.button({"onClick": (function (e){om.core.transact_BANG_.call(null,self__.data,new cljs.core.Keyword(null,"count","count",1108755585),cljs.core.dec);
return cljs.core.async.put_BANG_.call(null,new cljs.core.Keyword(null,"last-clicked","last-clicked",1206387554).cljs$core$IFn$_invoke$arity$1(self__.chans),self__.data.path);
})},"-"),React.DOM.label(null,new cljs.core.Keyword(null,"shared","shared",4405305303).cljs$core$IFn$_invoke$arity$1(self__.data)));
});
main.core.t9237.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_9239){var self__ = this;
var _9239__$1 = this;return self__.meta9238;
});
main.core.t9237.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_9239,meta9238__$1){var self__ = this;
var _9239__$1 = this;return (new main.core.t9237(self__.chans,self__.owner,self__.data,self__.counter,meta9238__$1));
});
main.core.__GT_t9237 = (function __GT_t9237(chans__$1,owner__$1,data__$1,counter__$1,meta9238){return (new main.core.t9237(chans__$1,owner__$1,data__$1,counter__$1,meta9238));
});
}
return (new main.core.t9237(chans,owner,data,counter,null));
});
main.core.counters = (function counters(){var last_clicked = cljs.core.async.chan.call(null,cljs.core.async.sliding_buffer.call(null,1));var chans = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"last-clicked","last-clicked",1206387554),last_clicked], null);return om.core.root.call(null,main.core.app_state,(function (app,owner){if(typeof main.core.t9272 !== 'undefined')
{} else
{
/**
* @constructor
*/
main.core.t9272 = (function (owner,app,chans,last_clicked,counters,meta9273){
this.owner = owner;
this.app = app;
this.chans = chans;
this.last_clicked = last_clicked;
this.counters = counters;
this.meta9273 = meta9273;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
main.core.t9272.cljs$lang$type = true;
main.core.t9272.cljs$lang$ctorStr = "main.core/t9272";
main.core.t9272.cljs$lang$ctorPrWriter = (function (this__3970__auto__,writer__3971__auto__,opt__3972__auto__){return cljs.core._write.call(null,writer__3971__auto__,"main.core/t9272");
});
main.core.t9272.prototype.om$core$IRender$ = true;
main.core.t9272.prototype.om$core$IRender$render$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return React.DOM.div(null,React.DOM.h1({"key": "head"},"A Counting Widget!"),React.DOM.div({"style": (cljs.core.truth_(om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"message","message",1968829305)))?{"display": "block"}:{"display": "none"}), "key": "message"},(function (){var temp__4092__auto__ = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"message","message",1968829305));if(cljs.core.truth_(temp__4092__auto__))
{var lc = temp__4092__auto__;return [cljs.core.str("Last clicked item was "),cljs.core.str(cljs.core.last.call(null,lc))].join('');
} else
{return null;
}
})()),om.core.build_all.call(null,main.core.counter,cljs.core.map.call(null,(function (counter){return cljs.core.update_in.call(null,counter,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"shared","shared",4405305303)], null),(function (p1__9240_SHARP_){return om.core.join.call(null,counter,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"shared","shared",4405305303),p1__9240_SHARP_], null));
}));
}),new cljs.core.Keyword(null,"counters","counters",641883497).cljs$core$IFn$_invoke$arity$1(self__.app)),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"opts","opts",1017322386),self__.chans,new cljs.core.Keyword(null,"key","key",1014010321),new cljs.core.Keyword(null,"id","id",1013907597)], null)));
});
main.core.t9272.prototype.om$core$IWillMount$ = true;
main.core.t9272.prototype.om$core$IWillMount$will_mount$arity$1 = (function (_){var self__ = this;
var ___$1 = this;var c__6117__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6118__auto__ = (function (){var switch__6047__auto__ = (function (state_9287){var state_val_9288 = (state_9287[1]);if((state_val_9288 === 7))
{var inst_9278 = (state_9287[2]);var inst_9279 = om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"message","message",1968829305),inst_9278);var state_9287__$1 = (function (){var statearr_9289 = state_9287;(statearr_9289[7] = inst_9279);
return statearr_9289;
})();var statearr_9290_9303 = state_9287__$1;(statearr_9290_9303[2] = null);
(statearr_9290_9303[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9288 === 6))
{var inst_9283 = (state_9287[2]);var state_9287__$1 = state_9287;var statearr_9291_9304 = state_9287__$1;(statearr_9291_9304[2] = inst_9283);
(statearr_9291_9304[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9288 === 5))
{var state_9287__$1 = state_9287;var statearr_9292_9305 = state_9287__$1;(statearr_9292_9305[2] = null);
(statearr_9292_9305[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9288 === 4))
{var state_9287__$1 = state_9287;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_9287__$1,7,self__.last_clicked);
} else
{if((state_val_9288 === 3))
{var inst_9285 = (state_9287[2]);var state_9287__$1 = state_9287;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9287__$1,inst_9285);
} else
{if((state_val_9288 === 2))
{var state_9287__$1 = state_9287;if(true)
{var statearr_9293_9306 = state_9287__$1;(statearr_9293_9306[1] = 4);
} else
{var statearr_9294_9307 = state_9287__$1;(statearr_9294_9307[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9288 === 1))
{var state_9287__$1 = state_9287;var statearr_9295_9308 = state_9287__$1;(statearr_9295_9308[2] = null);
(statearr_9295_9308[1] = 2);
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
});return ((function (switch__6047__auto__){
return (function() {
var state_machine__6048__auto__ = null;
var state_machine__6048__auto____0 = (function (){var statearr_9299 = [null,null,null,null,null,null,null,null];(statearr_9299[0] = state_machine__6048__auto__);
(statearr_9299[1] = 1);
return statearr_9299;
});
var state_machine__6048__auto____1 = (function (state_9287){while(true){
var ret_value__6049__auto__ = (function (){try{while(true){
var result__6050__auto__ = switch__6047__auto__.call(null,state_9287);if(cljs.core.keyword_identical_QMARK_.call(null,result__6050__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6050__auto__;
}
break;
}
}catch (e9300){if((e9300 instanceof Object))
{var ex__6051__auto__ = e9300;var statearr_9301_9309 = state_9287;(statearr_9301_9309[5] = ex__6051__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9287);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e9300;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6049__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__9310 = state_9287;
state_9287 = G__9310;
continue;
}
} else
{return ret_value__6049__auto__;
}
break;
}
});
state_machine__6048__auto__ = function(state_9287){
switch(arguments.length){
case 0:
return state_machine__6048__auto____0.call(this);
case 1:
return state_machine__6048__auto____1.call(this,state_9287);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6048__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6048__auto____0;
state_machine__6048__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6048__auto____1;
return state_machine__6048__auto__;
})()
;})(switch__6047__auto__))
})();var state__6119__auto__ = (function (){var statearr_9302 = f__6118__auto__.call(null);(statearr_9302[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6117__auto__);
return statearr_9302;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6119__auto__);
}));
return c__6117__auto__;
});
main.core.t9272.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_9274){var self__ = this;
var _9274__$1 = this;return self__.meta9273;
});
main.core.t9272.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_9274,meta9273__$1){var self__ = this;
var _9274__$1 = this;return (new main.core.t9272(self__.owner,self__.app,self__.chans,self__.last_clicked,self__.counters,meta9273__$1));
});
main.core.__GT_t9272 = (function __GT_t9272(owner__$1,app__$1,chans__$1,last_clicked__$1,counters__$1,meta9273){return (new main.core.t9272(owner__$1,app__$1,chans__$1,last_clicked__$1,counters__$1,meta9273));
});
}
return (new main.core.t9272(owner,app,chans,last_clicked,counters,null));
}),document.getElementById("app"));
});
