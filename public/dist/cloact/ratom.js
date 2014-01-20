// Compiled by ClojureScript 0.0-2138
goog.provide('cloact.ratom');
goog.require('cljs.core');
cloact.ratom._running = cljs.core.atom.call(null,0);
cloact.ratom.running = (function running(){return cljs.core.deref.call(null,cloact.ratom._running);
});
cloact.ratom.capture_derefed = (function capture_derefed(f){var _STAR_ratom_context_STAR_12551 = cloact.ratom._STAR_ratom_context_STAR_;try{cloact.ratom._STAR_ratom_context_STAR_ = cljs.core.atom.call(null,cljs.core.PersistentHashSet.EMPTY);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [f.call(null),cljs.core.deref.call(null,cloact.ratom._STAR_ratom_context_STAR_)], null);
}finally {cloact.ratom._STAR_ratom_context_STAR_ = _STAR_ratom_context_STAR_12551;
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
var this$__$1 = this;var seq__12552 = cljs.core.seq.call(null,self__.watches);var chunk__12553 = null;var count__12554 = 0;var i__12555 = 0;while(true){
if((i__12555 < count__12554))
{var vec__12556 = cljs.core._nth.call(null,chunk__12553,i__12555);var key = cljs.core.nth.call(null,vec__12556,0,null);var f = cljs.core.nth.call(null,vec__12556,1,null);f.call(null,key,this$__$1,oldval,newval);
{
var G__12558 = seq__12552;
var G__12559 = chunk__12553;
var G__12560 = count__12554;
var G__12561 = (i__12555 + 1);
seq__12552 = G__12558;
chunk__12553 = G__12559;
count__12554 = G__12560;
i__12555 = G__12561;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__12552);if(temp__4092__auto__)
{var seq__12552__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__12552__$1))
{var c__4150__auto__ = cljs.core.chunk_first.call(null,seq__12552__$1);{
var G__12562 = cljs.core.chunk_rest.call(null,seq__12552__$1);
var G__12563 = c__4150__auto__;
var G__12564 = cljs.core.count.call(null,c__4150__auto__);
var G__12565 = 0;
seq__12552 = G__12562;
chunk__12553 = G__12563;
count__12554 = G__12564;
i__12555 = G__12565;
continue;
}
} else
{var vec__12557 = cljs.core.first.call(null,seq__12552__$1);var key = cljs.core.nth.call(null,vec__12557,0,null);var f = cljs.core.nth.call(null,vec__12557,1,null);f.call(null,key,this$__$1,oldval,newval);
{
var G__12566 = cljs.core.next.call(null,seq__12552__$1);
var G__12567 = null;
var G__12568 = 0;
var G__12569 = 0;
seq__12552 = G__12566;
chunk__12553 = G__12567;
count__12554 = G__12568;
i__12555 = G__12569;
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
var G__12573__delegate = function (x,p__12570){var map__12572 = p__12570;var map__12572__$1 = ((cljs.core.seq_QMARK_.call(null,map__12572))?cljs.core.apply.call(null,cljs.core.hash_map,map__12572):map__12572);var validator = cljs.core.get.call(null,map__12572__$1,new cljs.core.Keyword(null,"validator","validator",4199087812));var meta = cljs.core.get.call(null,map__12572__$1,new cljs.core.Keyword(null,"meta","meta",1017252215));return (new cloact.ratom.RAtom(x,meta,validator,null));
};
var G__12573 = function (x,var_args){
var p__12570 = null;if (arguments.length > 1) {
  p__12570 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return G__12573__delegate.call(this,x,p__12570);};
G__12573.cljs$lang$maxFixedArity = 1;
G__12573.cljs$lang$applyTo = (function (arglist__12574){
var x = cljs.core.first(arglist__12574);
var p__12570 = cljs.core.rest(arglist__12574);
return G__12573__delegate(x,p__12570);
});
G__12573.cljs$core$IFn$_invoke$arity$variadic = G__12573__delegate;
return G__12573;
})()
;
atom = function(x,var_args){
var p__12570 = var_args;
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
cloact.ratom.IDisposable = (function (){var obj12576 = {};return obj12576;
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
cloact.ratom.IRunnable = (function (){var obj12578 = {};return obj12578;
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
cloact.ratom.IComputedImpl = (function (){var obj12580 = {};return obj12580;
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
cloact.ratom.call_watches = (function call_watches(obs,watches,oldval,newval){var seq__12587 = cljs.core.seq.call(null,watches);var chunk__12588 = null;var count__12589 = 0;var i__12590 = 0;while(true){
if((i__12590 < count__12589))
{var vec__12591 = cljs.core._nth.call(null,chunk__12588,i__12590);var k = cljs.core.nth.call(null,vec__12591,0,null);var wf = cljs.core.nth.call(null,vec__12591,1,null);wf.call(null,k,obs,oldval,newval);
{
var G__12593 = seq__12587;
var G__12594 = chunk__12588;
var G__12595 = count__12589;
var G__12596 = (i__12590 + 1);
seq__12587 = G__12593;
chunk__12588 = G__12594;
count__12589 = G__12595;
i__12590 = G__12596;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__12587);if(temp__4092__auto__)
{var seq__12587__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__12587__$1))
{var c__4150__auto__ = cljs.core.chunk_first.call(null,seq__12587__$1);{
var G__12597 = cljs.core.chunk_rest.call(null,seq__12587__$1);
var G__12598 = c__4150__auto__;
var G__12599 = cljs.core.count.call(null,c__4150__auto__);
var G__12600 = 0;
seq__12587 = G__12597;
chunk__12588 = G__12598;
count__12589 = G__12599;
i__12590 = G__12600;
continue;
}
} else
{var vec__12592 = cljs.core.first.call(null,seq__12587__$1);var k = cljs.core.nth.call(null,vec__12592,0,null);var wf = cljs.core.nth.call(null,vec__12592,1,null);wf.call(null,k,obs,oldval,newval);
{
var G__12601 = cljs.core.next.call(null,seq__12587__$1);
var G__12602 = null;
var G__12603 = 0;
var G__12604 = 0;
seq__12587 = G__12601;
chunk__12588 = G__12602;
count__12589 = G__12603;
i__12590 = G__12604;
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
var this$__$1 = this;var seq__12605_12618 = cljs.core.seq.call(null,self__.watching);var chunk__12606_12619 = null;var count__12607_12620 = 0;var i__12608_12621 = 0;while(true){
if((i__12608_12621 < count__12607_12620))
{var w_12622 = cljs.core._nth.call(null,chunk__12606_12619,i__12608_12621);cljs.core.remove_watch.call(null,w_12622,this$__$1);
{
var G__12623 = seq__12605_12618;
var G__12624 = chunk__12606_12619;
var G__12625 = count__12607_12620;
var G__12626 = (i__12608_12621 + 1);
seq__12605_12618 = G__12623;
chunk__12606_12619 = G__12624;
count__12607_12620 = G__12625;
i__12608_12621 = G__12626;
continue;
}
} else
{var temp__4092__auto___12627 = cljs.core.seq.call(null,seq__12605_12618);if(temp__4092__auto___12627)
{var seq__12605_12628__$1 = temp__4092__auto___12627;if(cljs.core.chunked_seq_QMARK_.call(null,seq__12605_12628__$1))
{var c__4150__auto___12629 = cljs.core.chunk_first.call(null,seq__12605_12628__$1);{
var G__12630 = cljs.core.chunk_rest.call(null,seq__12605_12628__$1);
var G__12631 = c__4150__auto___12629;
var G__12632 = cljs.core.count.call(null,c__4150__auto___12629);
var G__12633 = 0;
seq__12605_12618 = G__12630;
chunk__12606_12619 = G__12631;
count__12607_12620 = G__12632;
i__12608_12621 = G__12633;
continue;
}
} else
{var w_12634 = cljs.core.first.call(null,seq__12605_12628__$1);cljs.core.remove_watch.call(null,w_12634,this$__$1);
{
var G__12635 = cljs.core.next.call(null,seq__12605_12628__$1);
var G__12636 = null;
var G__12637 = 0;
var G__12638 = 0;
seq__12605_12618 = G__12635;
chunk__12606_12619 = G__12636;
count__12607_12620 = G__12637;
i__12608_12621 = G__12638;
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
{var x__8560__auto___12639 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.auto_run,cloact.ratom._STAR_ratom_context_STAR_], null);if(!((console.log == null)))
{console.log([cljs.core.str([cljs.core.str("dbg "),cljs.core.str("cloact.ratom"),cljs.core.str(":"),cljs.core.str(119),cljs.core.str(": "),cljs.core.str("[auto-run *ratom-context*]"),cljs.core.str(": "),cljs.core.str(cljs.core.pr_str.call(null,x__8560__auto___12639))].join(''))].join(''));
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
var this$__$1 = this;var oldstate = self__.state;var vec__12609 = cloact.ratom.capture_derefed.call(null,self__.f);var res = cljs.core.nth.call(null,vec__12609,0,null);var derefed = cljs.core.nth.call(null,vec__12609,1,null);if(cljs.core.not_EQ_.call(null,derefed,self__.watching))
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
var this$__$1 = this;var seq__12610_12640 = cljs.core.seq.call(null,derefed);var chunk__12611_12641 = null;var count__12612_12642 = 0;var i__12613_12643 = 0;while(true){
if((i__12613_12643 < count__12612_12642))
{var w_12644 = cljs.core._nth.call(null,chunk__12611_12641,i__12613_12643);if(cljs.core.contains_QMARK_.call(null,self__.watching,w_12644))
{} else
{cljs.core.add_watch.call(null,w_12644,this$__$1,cloact.ratom._handle_change);
}
{
var G__12645 = seq__12610_12640;
var G__12646 = chunk__12611_12641;
var G__12647 = count__12612_12642;
var G__12648 = (i__12613_12643 + 1);
seq__12610_12640 = G__12645;
chunk__12611_12641 = G__12646;
count__12612_12642 = G__12647;
i__12613_12643 = G__12648;
continue;
}
} else
{var temp__4092__auto___12649 = cljs.core.seq.call(null,seq__12610_12640);if(temp__4092__auto___12649)
{var seq__12610_12650__$1 = temp__4092__auto___12649;if(cljs.core.chunked_seq_QMARK_.call(null,seq__12610_12650__$1))
{var c__4150__auto___12651 = cljs.core.chunk_first.call(null,seq__12610_12650__$1);{
var G__12652 = cljs.core.chunk_rest.call(null,seq__12610_12650__$1);
var G__12653 = c__4150__auto___12651;
var G__12654 = cljs.core.count.call(null,c__4150__auto___12651);
var G__12655 = 0;
seq__12610_12640 = G__12652;
chunk__12611_12641 = G__12653;
count__12612_12642 = G__12654;
i__12613_12643 = G__12655;
continue;
}
} else
{var w_12656 = cljs.core.first.call(null,seq__12610_12650__$1);if(cljs.core.contains_QMARK_.call(null,self__.watching,w_12656))
{} else
{cljs.core.add_watch.call(null,w_12656,this$__$1,cloact.ratom._handle_change);
}
{
var G__12657 = cljs.core.next.call(null,seq__12610_12650__$1);
var G__12658 = null;
var G__12659 = 0;
var G__12660 = 0;
seq__12610_12640 = G__12657;
chunk__12611_12641 = G__12658;
count__12612_12642 = G__12659;
i__12613_12643 = G__12660;
continue;
}
}
} else
{}
}
break;
}
var seq__12614_12661 = cljs.core.seq.call(null,self__.watching);var chunk__12615_12662 = null;var count__12616_12663 = 0;var i__12617_12664 = 0;while(true){
if((i__12617_12664 < count__12616_12663))
{var w_12665 = cljs.core._nth.call(null,chunk__12615_12662,i__12617_12664);if(cljs.core.contains_QMARK_.call(null,derefed,w_12665))
{} else
{cljs.core.remove_watch.call(null,w_12665,this$__$1);
}
{
var G__12666 = seq__12614_12661;
var G__12667 = chunk__12615_12662;
var G__12668 = count__12616_12663;
var G__12669 = (i__12617_12664 + 1);
seq__12614_12661 = G__12666;
chunk__12615_12662 = G__12667;
count__12616_12663 = G__12668;
i__12617_12664 = G__12669;
continue;
}
} else
{var temp__4092__auto___12670 = cljs.core.seq.call(null,seq__12614_12661);if(temp__4092__auto___12670)
{var seq__12614_12671__$1 = temp__4092__auto___12670;if(cljs.core.chunked_seq_QMARK_.call(null,seq__12614_12671__$1))
{var c__4150__auto___12672 = cljs.core.chunk_first.call(null,seq__12614_12671__$1);{
var G__12673 = cljs.core.chunk_rest.call(null,seq__12614_12671__$1);
var G__12674 = c__4150__auto___12672;
var G__12675 = cljs.core.count.call(null,c__4150__auto___12672);
var G__12676 = 0;
seq__12614_12661 = G__12673;
chunk__12615_12662 = G__12674;
count__12616_12663 = G__12675;
i__12617_12664 = G__12676;
continue;
}
} else
{var w_12677 = cljs.core.first.call(null,seq__12614_12671__$1);if(cljs.core.contains_QMARK_.call(null,derefed,w_12677))
{} else
{cljs.core.remove_watch.call(null,w_12677,this$__$1);
}
{
var G__12678 = cljs.core.next.call(null,seq__12614_12671__$1);
var G__12679 = null;
var G__12680 = 0;
var G__12681 = 0;
seq__12614_12661 = G__12678;
chunk__12615_12662 = G__12679;
count__12616_12663 = G__12680;
i__12617_12664 = G__12681;
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
var make_reaction__delegate = function (f,p__12682){var map__12684 = p__12682;var map__12684__$1 = ((cljs.core.seq_QMARK_.call(null,map__12684))?cljs.core.apply.call(null,cljs.core.hash_map,map__12684):map__12684);var on_dispose = cljs.core.get.call(null,map__12684__$1,new cljs.core.Keyword(null,"on-dispose","on-dispose",2213067683));var on_set = cljs.core.get.call(null,map__12684__$1,new cljs.core.Keyword(null,"on-set","on-set",4294781670));var auto_run = cljs.core.get.call(null,map__12684__$1,new cljs.core.Keyword(null,"auto-run","auto-run",2451476703));var runner = ((cljs.core._EQ_.call(null,auto_run,true))?cloact.ratom.run:auto_run);return (new cloact.ratom.Reaction(f,null,true,false,cljs.core.PersistentHashSet.EMPTY,cljs.core.PersistentArrayMap.EMPTY,runner,on_set,on_dispose));
};
var make_reaction = function (f,var_args){
var p__12682 = null;if (arguments.length > 1) {
  p__12682 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return make_reaction__delegate.call(this,f,p__12682);};
make_reaction.cljs$lang$maxFixedArity = 1;
make_reaction.cljs$lang$applyTo = (function (arglist__12685){
var f = cljs.core.first(arglist__12685);
var p__12682 = cljs.core.rest(arglist__12685);
return make_reaction__delegate(f,p__12682);
});
make_reaction.cljs$core$IFn$_invoke$arity$variadic = make_reaction__delegate;
return make_reaction;
})()
;
