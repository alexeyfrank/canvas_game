// Compiled by ClojureScript 0.0-2138
goog.provide('cloact.ratom');
goog.require('cljs.core');
cloact.ratom._running = cljs.core.atom.call(null,0);
cloact.ratom.running = (function running(){return cljs.core.deref.call(null,cloact.ratom._running);
});
cloact.ratom.capture_derefed = (function capture_derefed(f){var _STAR_ratom_context_STAR_12562 = cloact.ratom._STAR_ratom_context_STAR_;try{cloact.ratom._STAR_ratom_context_STAR_ = cljs.core.atom.call(null,cljs.core.PersistentHashSet.EMPTY);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [f.call(null),cljs.core.deref.call(null,cloact.ratom._STAR_ratom_context_STAR_)], null);
}finally {cloact.ratom._STAR_ratom_context_STAR_ = _STAR_ratom_context_STAR_12562;
}});
cloact.ratom.notify_deref_watcher_BANG_ = (function notify_deref_watcher_BANG_(derefable){if((cloact.ratom._STAR_ratom_context_STAR_ == null))
{return null;
} else
{return cljs.core.swap_BANG_.call(null,cloact.ratom._STAR_ratom_context_STAR_,cljs.core.conj,derefable);
}
});

/**
* @constructor
*/
cloact.ratom.RAtom = (function (state,meta,validator,watches){
this.state = state;
this.meta = meta;
this.validator = validator;
this.watches = watches;
this.cljs$lang$protocol_mask$partition0$ = 2153938944;
this.cljs$lang$protocol_mask$partition1$ = 2;
})
cloact.ratom.RAtom.cljs$lang$type = true;
cloact.ratom.RAtom.cljs$lang$ctorStr = "cloact.ratom/RAtom";
cloact.ratom.RAtom.cljs$lang$ctorPrWriter = (function (this__3970__auto__,writer__3971__auto__,opt__3972__auto__){return cljs.core._write.call(null,writer__3971__auto__,"cloact.ratom/RAtom");
});
cloact.ratom.RAtom.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return goog.getUid(this$__$1);
});
cloact.ratom.RAtom.prototype.cljs$core$IWatchable$_notify_watches$arity$3 = (function (this$,oldval,newval){var self__ = this;
var this$__$1 = this;var seq__12563 = cljs.core.seq.call(null,self__.watches);var chunk__12564 = null;var count__12565 = 0;var i__12566 = 0;while(true){
if((i__12566 < count__12565))
{var vec__12567 = cljs.core._nth.call(null,chunk__12564,i__12566);var key = cljs.core.nth.call(null,vec__12567,0,null);var f = cljs.core.nth.call(null,vec__12567,1,null);f.call(null,key,this$__$1,oldval,newval);
{
var G__12569 = seq__12563;
var G__12570 = chunk__12564;
var G__12571 = count__12565;
var G__12572 = (i__12566 + 1);
seq__12563 = G__12569;
chunk__12564 = G__12570;
count__12565 = G__12571;
i__12566 = G__12572;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__12563);if(temp__4092__auto__)
{var seq__12563__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__12563__$1))
{var c__4150__auto__ = cljs.core.chunk_first.call(null,seq__12563__$1);{
var G__12573 = cljs.core.chunk_rest.call(null,seq__12563__$1);
var G__12574 = c__4150__auto__;
var G__12575 = cljs.core.count.call(null,c__4150__auto__);
var G__12576 = 0;
seq__12563 = G__12573;
chunk__12564 = G__12574;
count__12565 = G__12575;
i__12566 = G__12576;
continue;
}
} else
{var vec__12568 = cljs.core.first.call(null,seq__12563__$1);var key = cljs.core.nth.call(null,vec__12568,0,null);var f = cljs.core.nth.call(null,vec__12568,1,null);f.call(null,key,this$__$1,oldval,newval);
{
var G__12577 = cljs.core.next.call(null,seq__12563__$1);
var G__12578 = null;
var G__12579 = 0;
var G__12580 = 0;
seq__12563 = G__12577;
chunk__12564 = G__12578;
count__12565 = G__12579;
i__12566 = G__12580;
continue;
}
}
} else
{return null;
}
}
break;
}
});
cloact.ratom.RAtom.prototype.cljs$core$IWatchable$_add_watch$arity$3 = (function (this$,key,f){var self__ = this;
var this$__$1 = this;return this$__$1.watches = cljs.core.assoc.call(null,self__.watches,key,f);
});
cloact.ratom.RAtom.prototype.cljs$core$IWatchable$_remove_watch$arity$2 = (function (this$,key){var self__ = this;
var this$__$1 = this;return this$__$1.watches = cljs.core.dissoc.call(null,self__.watches,key);
});
cloact.ratom.RAtom.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (a,writer,opts){var self__ = this;
var a__$1 = this;cljs.core._write.call(null,writer,"#<Atom: ");
cljs.core.pr_writer.call(null,self__.state,writer,opts);
return cljs.core._write.call(null,writer,">");
});
cloact.ratom.RAtom.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.meta;
});
cloact.ratom.RAtom.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;cloact.ratom.notify_deref_watcher_BANG_.call(null,this$__$1);
return self__.state;
});
cloact.ratom.RAtom.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (o,other){var self__ = this;
var o__$1 = this;return (o__$1 === other);
});
cloact.ratom.__GT_RAtom = (function __GT_RAtom(state,meta,validator,watches){return (new cloact.ratom.RAtom(state,meta,validator,watches));
});
/**
* Like clojure.core/atom, except that it keeps track of derefs.
* @param {...*} var_args
*/
cloact.ratom.atom = (function() {
var atom = null;
var atom__1 = (function (x){return (new cloact.ratom.RAtom(x,null,null,null));
});
var atom__2 = (function() { 
var G__12584__delegate = function (x,p__12581){var map__12583 = p__12581;var map__12583__$1 = ((cljs.core.seq_QMARK_.call(null,map__12583))?cljs.core.apply.call(null,cljs.core.hash_map,map__12583):map__12583);var validator = cljs.core.get.call(null,map__12583__$1,new cljs.core.Keyword(null,"validator","validator",4199087812));var meta = cljs.core.get.call(null,map__12583__$1,new cljs.core.Keyword(null,"meta","meta",1017252215));return (new cloact.ratom.RAtom(x,meta,validator,null));
};
var G__12584 = function (x,var_args){
var p__12581 = null;if (arguments.length > 1) {
  p__12581 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return G__12584__delegate.call(this,x,p__12581);};
G__12584.cljs$lang$maxFixedArity = 1;
G__12584.cljs$lang$applyTo = (function (arglist__12585){
var x = cljs.core.first(arglist__12585);
var p__12581 = cljs.core.rest(arglist__12585);
return G__12584__delegate(x,p__12581);
});
G__12584.cljs$core$IFn$_invoke$arity$variadic = G__12584__delegate;
return G__12584;
})()
;
atom = function(x,var_args){
var p__12581 = var_args;
switch(arguments.length){
case 1:
return atom__1.call(this,x);
default:
return atom__2.cljs$core$IFn$_invoke$arity$variadic(x, cljs.core.array_seq(arguments, 1));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
atom.cljs$lang$maxFixedArity = 1;
atom.cljs$lang$applyTo = atom__2.cljs$lang$applyTo;
atom.cljs$core$IFn$_invoke$arity$1 = atom__1;
atom.cljs$core$IFn$_invoke$arity$variadic = atom__2.cljs$core$IFn$_invoke$arity$variadic;
return atom;
})()
;
cloact.ratom.IDisposable = (function (){var obj12587 = {};return obj12587;
})();
cloact.ratom.dispose_BANG_ = (function dispose_BANG_(this$){if((function (){var and__3396__auto__ = this$;if(and__3396__auto__)
{return this$.cloact$ratom$IDisposable$dispose_BANG_$arity$1;
} else
{return and__3396__auto__;
}
})())
{return this$.cloact$ratom$IDisposable$dispose_BANG_$arity$1(this$);
} else
{var x__4029__auto__ = (((this$ == null))?null:this$);return (function (){var or__3408__auto__ = (cloact.ratom.dispose_BANG_[goog.typeOf(x__4029__auto__)]);if(or__3408__auto__)
{return or__3408__auto__;
} else
{var or__3408__auto____$1 = (cloact.ratom.dispose_BANG_["_"]);if(or__3408__auto____$1)
{return or__3408__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IDisposable.dispose!",this$);
}
}
})().call(null,this$);
}
});
cloact.ratom.IRunnable = (function (){var obj12589 = {};return obj12589;
})();
cloact.ratom.run = (function run(this$){if((function (){var and__3396__auto__ = this$;if(and__3396__auto__)
{return this$.cloact$ratom$IRunnable$run$arity$1;
} else
{return and__3396__auto__;
}
})())
{return this$.cloact$ratom$IRunnable$run$arity$1(this$);
} else
{var x__4029__auto__ = (((this$ == null))?null:this$);return (function (){var or__3408__auto__ = (cloact.ratom.run[goog.typeOf(x__4029__auto__)]);if(or__3408__auto__)
{return or__3408__auto__;
} else
{var or__3408__auto____$1 = (cloact.ratom.run["_"]);if(or__3408__auto____$1)
{return or__3408__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IRunnable.run",this$);
}
}
})().call(null,this$);
}
});
cloact.ratom.IComputedImpl = (function (){var obj12591 = {};return obj12591;
})();
cloact.ratom._update_watching = (function _update_watching(this$,derefed){if((function (){var and__3396__auto__ = this$;if(and__3396__auto__)
{return this$.cloact$ratom$IComputedImpl$_update_watching$arity$2;
} else
{return and__3396__auto__;
}
})())
{return this$.cloact$ratom$IComputedImpl$_update_watching$arity$2(this$,derefed);
} else
{var x__4029__auto__ = (((this$ == null))?null:this$);return (function (){var or__3408__auto__ = (cloact.ratom._update_watching[goog.typeOf(x__4029__auto__)]);if(or__3408__auto__)
{return or__3408__auto__;
} else
{var or__3408__auto____$1 = (cloact.ratom._update_watching["_"]);if(or__3408__auto____$1)
{return or__3408__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IComputedImpl.-update-watching",this$);
}
}
})().call(null,this$,derefed);
}
});
cloact.ratom._handle_change = (function _handle_change(k,sender,oldval,newval){if((function (){var and__3396__auto__ = k;if(and__3396__auto__)
{return k.cloact$ratom$IComputedImpl$_handle_change$arity$4;
} else
{return and__3396__auto__;
}
})())
{return k.cloact$ratom$IComputedImpl$_handle_change$arity$4(k,sender,oldval,newval);
} else
{var x__4029__auto__ = (((k == null))?null:k);return (function (){var or__3408__auto__ = (cloact.ratom._handle_change[goog.typeOf(x__4029__auto__)]);if(or__3408__auto__)
{return or__3408__auto__;
} else
{var or__3408__auto____$1 = (cloact.ratom._handle_change["_"]);if(or__3408__auto____$1)
{return or__3408__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IComputedImpl.-handle-change",k);
}
}
})().call(null,k,sender,oldval,newval);
}
});
cloact.ratom.call_watches = (function call_watches(obs,watches,oldval,newval){var seq__12598 = cljs.core.seq.call(null,watches);var chunk__12599 = null;var count__12600 = 0;var i__12601 = 0;while(true){
if((i__12601 < count__12600))
{var vec__12602 = cljs.core._nth.call(null,chunk__12599,i__12601);var k = cljs.core.nth.call(null,vec__12602,0,null);var wf = cljs.core.nth.call(null,vec__12602,1,null);wf.call(null,k,obs,oldval,newval);
{
var G__12604 = seq__12598;
var G__12605 = chunk__12599;
var G__12606 = count__12600;
var G__12607 = (i__12601 + 1);
seq__12598 = G__12604;
chunk__12599 = G__12605;
count__12600 = G__12606;
i__12601 = G__12607;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__12598);if(temp__4092__auto__)
{var seq__12598__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__12598__$1))
{var c__4150__auto__ = cljs.core.chunk_first.call(null,seq__12598__$1);{
var G__12608 = cljs.core.chunk_rest.call(null,seq__12598__$1);
var G__12609 = c__4150__auto__;
var G__12610 = cljs.core.count.call(null,c__4150__auto__);
var G__12611 = 0;
seq__12598 = G__12608;
chunk__12599 = G__12609;
count__12600 = G__12610;
i__12601 = G__12611;
continue;
}
} else
{var vec__12603 = cljs.core.first.call(null,seq__12598__$1);var k = cljs.core.nth.call(null,vec__12603,0,null);var wf = cljs.core.nth.call(null,vec__12603,1,null);wf.call(null,k,obs,oldval,newval);
{
var G__12612 = cljs.core.next.call(null,seq__12598__$1);
var G__12613 = null;
var G__12614 = 0;
var G__12615 = 0;
seq__12598 = G__12612;
chunk__12599 = G__12613;
count__12600 = G__12614;
i__12601 = G__12615;
continue;
}
}
} else
{return null;
}
}
break;
}
});

/**
* @constructor
*/
cloact.ratom.Reaction = (function (f,state,dirty_QMARK_,active_QMARK_,watching,watches,auto_run,on_set,on_dispose){
this.f = f;
this.state = state;
this.dirty_QMARK_ = dirty_QMARK_;
this.active_QMARK_ = active_QMARK_;
this.watching = watching;
this.watches = watches;
this.auto_run = auto_run;
this.on_set = on_set;
this.on_dispose = on_dispose;
this.cljs$lang$protocol_mask$partition0$ = 2153807872;
this.cljs$lang$protocol_mask$partition1$ = 2;
})
cloact.ratom.Reaction.cljs$lang$type = true;
cloact.ratom.Reaction.cljs$lang$ctorStr = "cloact.ratom/Reaction";
cloact.ratom.Reaction.cljs$lang$ctorPrWriter = (function (this__3970__auto__,writer__3971__auto__,opt__3972__auto__){return cljs.core._write.call(null,writer__3971__auto__,"cloact.ratom/Reaction");
});
cloact.ratom.Reaction.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return goog.getUid(this$__$1);
});
cloact.ratom.Reaction.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this$,writer,opts){var self__ = this;
var this$__$1 = this;cljs.core._write.call(null,writer,[cljs.core.str("#<Reaction "),cljs.core.str(cljs.core.hash.call(null,this$__$1)),cljs.core.str(": ")].join(''));
cljs.core.pr_writer.call(null,self__.state,writer,opts);
return cljs.core._write.call(null,writer,">");
});
cloact.ratom.Reaction.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (o,other){var self__ = this;
var o__$1 = this;return (o__$1 === other);
});
cloact.ratom.Reaction.prototype.cloact$ratom$IDisposable$ = true;
cloact.ratom.Reaction.prototype.cloact$ratom$IDisposable$dispose_BANG_$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;var seq__12616_12629 = cljs.core.seq.call(null,self__.watching);var chunk__12617_12630 = null;var count__12618_12631 = 0;var i__12619_12632 = 0;while(true){
if((i__12619_12632 < count__12618_12631))
{var w_12633 = cljs.core._nth.call(null,chunk__12617_12630,i__12619_12632);cljs.core.remove_watch.call(null,w_12633,this$__$1);
{
var G__12634 = seq__12616_12629;
var G__12635 = chunk__12617_12630;
var G__12636 = count__12618_12631;
var G__12637 = (i__12619_12632 + 1);
seq__12616_12629 = G__12634;
chunk__12617_12630 = G__12635;
count__12618_12631 = G__12636;
i__12619_12632 = G__12637;
continue;
}
} else
{var temp__4092__auto___12638 = cljs.core.seq.call(null,seq__12616_12629);if(temp__4092__auto___12638)
{var seq__12616_12639__$1 = temp__4092__auto___12638;if(cljs.core.chunked_seq_QMARK_.call(null,seq__12616_12639__$1))
{var c__4150__auto___12640 = cljs.core.chunk_first.call(null,seq__12616_12639__$1);{
var G__12641 = cljs.core.chunk_rest.call(null,seq__12616_12639__$1);
var G__12642 = c__4150__auto___12640;
var G__12643 = cljs.core.count.call(null,c__4150__auto___12640);
var G__12644 = 0;
seq__12616_12629 = G__12641;
chunk__12617_12630 = G__12642;
count__12618_12631 = G__12643;
i__12619_12632 = G__12644;
continue;
}
} else
{var w_12645 = cljs.core.first.call(null,seq__12616_12639__$1);cljs.core.remove_watch.call(null,w_12645,this$__$1);
{
var G__12646 = cljs.core.next.call(null,seq__12616_12639__$1);
var G__12647 = null;
var G__12648 = 0;
var G__12649 = 0;
seq__12616_12629 = G__12646;
chunk__12617_12630 = G__12647;
count__12618_12631 = G__12648;
i__12619_12632 = G__12649;
continue;
}
}
} else
{}
}
break;
}
self__.watching = cljs.core.PersistentHashSet.EMPTY;
self__.state = null;
self__.dirty_QMARK_ = true;
if(cljs.core.truth_(self__.active_QMARK_))
{cljs.core.swap_BANG_.call(null,cloact.ratom._running,cljs.core.dec);
self__.active_QMARK_ = false;
} else
{}
if(cljs.core.truth_(self__.on_dispose))
{return self__.on_dispose.call(null);
} else
{return null;
}
});
cloact.ratom.Reaction.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;if(cljs.core.not.call(null,(function (){var or__3408__auto__ = self__.auto_run;if(cljs.core.truth_(or__3408__auto__))
{return or__3408__auto__;
} else
{return cloact.ratom._STAR_ratom_context_STAR_;
}
})()))
{var x__8567__auto___12650 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.auto_run,cloact.ratom._STAR_ratom_context_STAR_], null);if(!((console.log == null)))
{console.log([cljs.core.str([cljs.core.str("dbg "),cljs.core.str("cloact.ratom"),cljs.core.str(":"),cljs.core.str(119),cljs.core.str(": "),cljs.core.str("[auto-run *ratom-context*]"),cljs.core.str(": "),cljs.core.str(cljs.core.pr_str.call(null,x__8567__auto___12650))].join(''))].join(''));
} else
{}
} else
{}
if(cljs.core.truth_((function (){var or__3408__auto__ = self__.auto_run;if(cljs.core.truth_(or__3408__auto__))
{return or__3408__auto__;
} else
{return cloact.ratom._STAR_ratom_context_STAR_;
}
})()))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("Reaction derefed outside auto-running context"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"or","or",-1640527972,null),new cljs.core.Symbol(null,"auto-run","auto-run",-202959066,null),new cljs.core.Symbol(null,"*ratom-context*","*ratom-context*",1304741512,null))))].join('')));
}
cloact.ratom.notify_deref_watcher_BANG_.call(null,this$__$1);
if(cljs.core.truth_(self__.dirty_QMARK_))
{return cloact.ratom.run.call(null,this$__$1);
} else
{return self__.state;
}
});
cloact.ratom.Reaction.prototype.cloact$ratom$IRunnable$ = true;
cloact.ratom.Reaction.prototype.cloact$ratom$IRunnable$run$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;var oldstate = self__.state;var vec__12620 = cloact.ratom.capture_derefed.call(null,self__.f);var res = cljs.core.nth.call(null,vec__12620,0,null);var derefed = cljs.core.nth.call(null,vec__12620,1,null);if(cljs.core.not_EQ_.call(null,derefed,self__.watching))
{cloact.ratom._update_watching.call(null,this$__$1,derefed);
} else
{}
if(cljs.core.truth_(self__.active_QMARK_))
{} else
{cljs.core.swap_BANG_.call(null,cloact.ratom._running,cljs.core.inc);
self__.active_QMARK_ = true;
}
self__.dirty_QMARK_ = false;
self__.state = res;
cloact.ratom.call_watches.call(null,this$__$1,self__.watches,oldstate,self__.state);
return res;
});
cloact.ratom.Reaction.prototype.cloact$ratom$IComputedImpl$ = true;
cloact.ratom.Reaction.prototype.cloact$ratom$IComputedImpl$_handle_change$arity$4 = (function (this$,sender,oldval,newval){var self__ = this;
var this$__$1 = this;if(cljs.core.truth_((function (){var and__3396__auto__ = self__.active_QMARK_;if(cljs.core.truth_(and__3396__auto__))
{return (cljs.core.not.call(null,self__.dirty_QMARK_)) && (!((oldval === newval)));
} else
{return and__3396__auto__;
}
})()))
{self__.dirty_QMARK_ = true;
return (function (){var or__3408__auto__ = self__.auto_run;if(cljs.core.truth_(or__3408__auto__))
{return or__3408__auto__;
} else
{return cloact.ratom.run;
}
})().call(null,this$__$1);
} else
{return null;
}
});
cloact.ratom.Reaction.prototype.cloact$ratom$IComputedImpl$_update_watching$arity$2 = (function (this$,derefed){var self__ = this;
var this$__$1 = this;var seq__12621_12651 = cljs.core.seq.call(null,derefed);var chunk__12622_12652 = null;var count__12623_12653 = 0;var i__12624_12654 = 0;while(true){
if((i__12624_12654 < count__12623_12653))
{var w_12655 = cljs.core._nth.call(null,chunk__12622_12652,i__12624_12654);if(cljs.core.contains_QMARK_.call(null,self__.watching,w_12655))
{} else
{cljs.core.add_watch.call(null,w_12655,this$__$1,cloact.ratom._handle_change);
}
{
var G__12656 = seq__12621_12651;
var G__12657 = chunk__12622_12652;
var G__12658 = count__12623_12653;
var G__12659 = (i__12624_12654 + 1);
seq__12621_12651 = G__12656;
chunk__12622_12652 = G__12657;
count__12623_12653 = G__12658;
i__12624_12654 = G__12659;
continue;
}
} else
{var temp__4092__auto___12660 = cljs.core.seq.call(null,seq__12621_12651);if(temp__4092__auto___12660)
{var seq__12621_12661__$1 = temp__4092__auto___12660;if(cljs.core.chunked_seq_QMARK_.call(null,seq__12621_12661__$1))
{var c__4150__auto___12662 = cljs.core.chunk_first.call(null,seq__12621_12661__$1);{
var G__12663 = cljs.core.chunk_rest.call(null,seq__12621_12661__$1);
var G__12664 = c__4150__auto___12662;
var G__12665 = cljs.core.count.call(null,c__4150__auto___12662);
var G__12666 = 0;
seq__12621_12651 = G__12663;
chunk__12622_12652 = G__12664;
count__12623_12653 = G__12665;
i__12624_12654 = G__12666;
continue;
}
} else
{var w_12667 = cljs.core.first.call(null,seq__12621_12661__$1);if(cljs.core.contains_QMARK_.call(null,self__.watching,w_12667))
{} else
{cljs.core.add_watch.call(null,w_12667,this$__$1,cloact.ratom._handle_change);
}
{
var G__12668 = cljs.core.next.call(null,seq__12621_12661__$1);
var G__12669 = null;
var G__12670 = 0;
var G__12671 = 0;
seq__12621_12651 = G__12668;
chunk__12622_12652 = G__12669;
count__12623_12653 = G__12670;
i__12624_12654 = G__12671;
continue;
}
}
} else
{}
}
break;
}
var seq__12625_12672 = cljs.core.seq.call(null,self__.watching);var chunk__12626_12673 = null;var count__12627_12674 = 0;var i__12628_12675 = 0;while(true){
if((i__12628_12675 < count__12627_12674))
{var w_12676 = cljs.core._nth.call(null,chunk__12626_12673,i__12628_12675);if(cljs.core.contains_QMARK_.call(null,derefed,w_12676))
{} else
{cljs.core.remove_watch.call(null,w_12676,this$__$1);
}
{
var G__12677 = seq__12625_12672;
var G__12678 = chunk__12626_12673;
var G__12679 = count__12627_12674;
var G__12680 = (i__12628_12675 + 1);
seq__12625_12672 = G__12677;
chunk__12626_12673 = G__12678;
count__12627_12674 = G__12679;
i__12628_12675 = G__12680;
continue;
}
} else
{var temp__4092__auto___12681 = cljs.core.seq.call(null,seq__12625_12672);if(temp__4092__auto___12681)
{var seq__12625_12682__$1 = temp__4092__auto___12681;if(cljs.core.chunked_seq_QMARK_.call(null,seq__12625_12682__$1))
{var c__4150__auto___12683 = cljs.core.chunk_first.call(null,seq__12625_12682__$1);{
var G__12684 = cljs.core.chunk_rest.call(null,seq__12625_12682__$1);
var G__12685 = c__4150__auto___12683;
var G__12686 = cljs.core.count.call(null,c__4150__auto___12683);
var G__12687 = 0;
seq__12625_12672 = G__12684;
chunk__12626_12673 = G__12685;
count__12627_12674 = G__12686;
i__12628_12675 = G__12687;
continue;
}
} else
{var w_12688 = cljs.core.first.call(null,seq__12625_12682__$1);if(cljs.core.contains_QMARK_.call(null,derefed,w_12688))
{} else
{cljs.core.remove_watch.call(null,w_12688,this$__$1);
}
{
var G__12689 = cljs.core.next.call(null,seq__12625_12682__$1);
var G__12690 = null;
var G__12691 = 0;
var G__12692 = 0;
seq__12625_12672 = G__12689;
chunk__12626_12673 = G__12690;
count__12627_12674 = G__12691;
i__12628_12675 = G__12692;
continue;
}
}
} else
{}
}
break;
}
return self__.watching = derefed;
});
cloact.ratom.Reaction.prototype.cljs$core$IWatchable$_notify_watches$arity$3 = (function (this$,oldval,newval){var self__ = this;
var this$__$1 = this;if(cljs.core.truth_(self__.on_set))
{self__.on_set.call(null,oldval,newval);
} else
{}
return cloact.ratom.call_watches.call(null,this$__$1,self__.watches,oldval,newval);
});
cloact.ratom.Reaction.prototype.cljs$core$IWatchable$_add_watch$arity$3 = (function (this$,k,wf){var self__ = this;
var this$__$1 = this;return self__.watches = cljs.core.assoc.call(null,self__.watches,k,wf);
});
cloact.ratom.Reaction.prototype.cljs$core$IWatchable$_remove_watch$arity$2 = (function (this$,k){var self__ = this;
var this$__$1 = this;self__.watches = cljs.core.dissoc.call(null,self__.watches,k);
if(cljs.core.empty_QMARK_.call(null,self__.watches))
{return cloact.ratom.dispose_BANG_.call(null,this$__$1);
} else
{return null;
}
});
cloact.ratom.__GT_Reaction = (function __GT_Reaction(f,state,dirty_QMARK_,active_QMARK_,watching,watches,auto_run,on_set,on_dispose){return (new cloact.ratom.Reaction(f,state,dirty_QMARK_,active_QMARK_,watching,watches,auto_run,on_set,on_dispose));
});
/**
* @param {...*} var_args
*/
cloact.ratom.make_reaction = (function() { 
var make_reaction__delegate = function (f,p__12693){var map__12695 = p__12693;var map__12695__$1 = ((cljs.core.seq_QMARK_.call(null,map__12695))?cljs.core.apply.call(null,cljs.core.hash_map,map__12695):map__12695);var on_dispose = cljs.core.get.call(null,map__12695__$1,new cljs.core.Keyword(null,"on-dispose","on-dispose",2213067683));var on_set = cljs.core.get.call(null,map__12695__$1,new cljs.core.Keyword(null,"on-set","on-set",4294781670));var auto_run = cljs.core.get.call(null,map__12695__$1,new cljs.core.Keyword(null,"auto-run","auto-run",2451476703));var runner = ((cljs.core._EQ_.call(null,auto_run,true))?cloact.ratom.run:auto_run);return (new cloact.ratom.Reaction(f,null,true,false,cljs.core.PersistentHashSet.EMPTY,cljs.core.PersistentArrayMap.EMPTY,runner,on_set,on_dispose));
};
var make_reaction = function (f,var_args){
var p__12693 = null;if (arguments.length > 1) {
  p__12693 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return make_reaction__delegate.call(this,f,p__12693);};
make_reaction.cljs$lang$maxFixedArity = 1;
make_reaction.cljs$lang$applyTo = (function (arglist__12696){
var f = cljs.core.first(arglist__12696);
var p__12693 = cljs.core.rest(arglist__12696);
return make_reaction__delegate(f,p__12693);
});
make_reaction.cljs$core$IFn$_invoke$arity$variadic = make_reaction__delegate;
return make_reaction;
})()
;
