// Compiled by ClojureScript 0.0-2138
goog.provide('cloact.ratom');
goog.require('cljs.core');
cloact.ratom._running = cljs.core.atom.call(null,0);
cloact.ratom.running = (function running(){return cljs.core.deref.call(null,cloact.ratom._running);
});
cloact.ratom.capture_derefed = (function capture_derefed(f){var _STAR_ratom_context_STAR_12405 = cloact.ratom._STAR_ratom_context_STAR_;try{cloact.ratom._STAR_ratom_context_STAR_ = cljs.core.atom.call(null,cljs.core.PersistentHashSet.EMPTY);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [f.call(null),cljs.core.deref.call(null,cloact.ratom._STAR_ratom_context_STAR_)], null);
}finally {cloact.ratom._STAR_ratom_context_STAR_ = _STAR_ratom_context_STAR_12405;
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
var this$__$1 = this;var seq__12406 = cljs.core.seq.call(null,self__.watches);var chunk__12407 = null;var count__12408 = 0;var i__12409 = 0;while(true){
if((i__12409 < count__12408))
{var vec__12410 = cljs.core._nth.call(null,chunk__12407,i__12409);var key = cljs.core.nth.call(null,vec__12410,0,null);var f = cljs.core.nth.call(null,vec__12410,1,null);f.call(null,key,this$__$1,oldval,newval);
{
var G__12412 = seq__12406;
var G__12413 = chunk__12407;
var G__12414 = count__12408;
var G__12415 = (i__12409 + 1);
seq__12406 = G__12412;
chunk__12407 = G__12413;
count__12408 = G__12414;
i__12409 = G__12415;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__12406);if(temp__4092__auto__)
{var seq__12406__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__12406__$1))
{var c__4150__auto__ = cljs.core.chunk_first.call(null,seq__12406__$1);{
var G__12416 = cljs.core.chunk_rest.call(null,seq__12406__$1);
var G__12417 = c__4150__auto__;
var G__12418 = cljs.core.count.call(null,c__4150__auto__);
var G__12419 = 0;
seq__12406 = G__12416;
chunk__12407 = G__12417;
count__12408 = G__12418;
i__12409 = G__12419;
continue;
}
} else
{var vec__12411 = cljs.core.first.call(null,seq__12406__$1);var key = cljs.core.nth.call(null,vec__12411,0,null);var f = cljs.core.nth.call(null,vec__12411,1,null);f.call(null,key,this$__$1,oldval,newval);
{
var G__12420 = cljs.core.next.call(null,seq__12406__$1);
var G__12421 = null;
var G__12422 = 0;
var G__12423 = 0;
seq__12406 = G__12420;
chunk__12407 = G__12421;
count__12408 = G__12422;
i__12409 = G__12423;
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
var G__12427__delegate = function (x,p__12424){var map__12426 = p__12424;var map__12426__$1 = ((cljs.core.seq_QMARK_.call(null,map__12426))?cljs.core.apply.call(null,cljs.core.hash_map,map__12426):map__12426);var validator = cljs.core.get.call(null,map__12426__$1,new cljs.core.Keyword(null,"validator","validator",4199087812));var meta = cljs.core.get.call(null,map__12426__$1,new cljs.core.Keyword(null,"meta","meta",1017252215));return (new cloact.ratom.RAtom(x,meta,validator,null));
};
var G__12427 = function (x,var_args){
var p__12424 = null;if (arguments.length > 1) {
  p__12424 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return G__12427__delegate.call(this,x,p__12424);};
G__12427.cljs$lang$maxFixedArity = 1;
G__12427.cljs$lang$applyTo = (function (arglist__12428){
var x = cljs.core.first(arglist__12428);
var p__12424 = cljs.core.rest(arglist__12428);
return G__12427__delegate(x,p__12424);
});
G__12427.cljs$core$IFn$_invoke$arity$variadic = G__12427__delegate;
return G__12427;
})()
;
atom = function(x,var_args){
var p__12424 = var_args;
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
cloact.ratom.IDisposable = (function (){var obj12430 = {};return obj12430;
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
cloact.ratom.IRunnable = (function (){var obj12432 = {};return obj12432;
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
cloact.ratom.IComputedImpl = (function (){var obj12434 = {};return obj12434;
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
cloact.ratom.call_watches = (function call_watches(obs,watches,oldval,newval){var seq__12441 = cljs.core.seq.call(null,watches);var chunk__12442 = null;var count__12443 = 0;var i__12444 = 0;while(true){
if((i__12444 < count__12443))
{var vec__12445 = cljs.core._nth.call(null,chunk__12442,i__12444);var k = cljs.core.nth.call(null,vec__12445,0,null);var wf = cljs.core.nth.call(null,vec__12445,1,null);wf.call(null,k,obs,oldval,newval);
{
var G__12447 = seq__12441;
var G__12448 = chunk__12442;
var G__12449 = count__12443;
var G__12450 = (i__12444 + 1);
seq__12441 = G__12447;
chunk__12442 = G__12448;
count__12443 = G__12449;
i__12444 = G__12450;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__12441);if(temp__4092__auto__)
{var seq__12441__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__12441__$1))
{var c__4150__auto__ = cljs.core.chunk_first.call(null,seq__12441__$1);{
var G__12451 = cljs.core.chunk_rest.call(null,seq__12441__$1);
var G__12452 = c__4150__auto__;
var G__12453 = cljs.core.count.call(null,c__4150__auto__);
var G__12454 = 0;
seq__12441 = G__12451;
chunk__12442 = G__12452;
count__12443 = G__12453;
i__12444 = G__12454;
continue;
}
} else
{var vec__12446 = cljs.core.first.call(null,seq__12441__$1);var k = cljs.core.nth.call(null,vec__12446,0,null);var wf = cljs.core.nth.call(null,vec__12446,1,null);wf.call(null,k,obs,oldval,newval);
{
var G__12455 = cljs.core.next.call(null,seq__12441__$1);
var G__12456 = null;
var G__12457 = 0;
var G__12458 = 0;
seq__12441 = G__12455;
chunk__12442 = G__12456;
count__12443 = G__12457;
i__12444 = G__12458;
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
var this$__$1 = this;var seq__12459_12472 = cljs.core.seq.call(null,self__.watching);var chunk__12460_12473 = null;var count__12461_12474 = 0;var i__12462_12475 = 0;while(true){
if((i__12462_12475 < count__12461_12474))
{var w_12476 = cljs.core._nth.call(null,chunk__12460_12473,i__12462_12475);cljs.core.remove_watch.call(null,w_12476,this$__$1);
{
var G__12477 = seq__12459_12472;
var G__12478 = chunk__12460_12473;
var G__12479 = count__12461_12474;
var G__12480 = (i__12462_12475 + 1);
seq__12459_12472 = G__12477;
chunk__12460_12473 = G__12478;
count__12461_12474 = G__12479;
i__12462_12475 = G__12480;
continue;
}
} else
{var temp__4092__auto___12481 = cljs.core.seq.call(null,seq__12459_12472);if(temp__4092__auto___12481)
{var seq__12459_12482__$1 = temp__4092__auto___12481;if(cljs.core.chunked_seq_QMARK_.call(null,seq__12459_12482__$1))
{var c__4150__auto___12483 = cljs.core.chunk_first.call(null,seq__12459_12482__$1);{
var G__12484 = cljs.core.chunk_rest.call(null,seq__12459_12482__$1);
var G__12485 = c__4150__auto___12483;
var G__12486 = cljs.core.count.call(null,c__4150__auto___12483);
var G__12487 = 0;
seq__12459_12472 = G__12484;
chunk__12460_12473 = G__12485;
count__12461_12474 = G__12486;
i__12462_12475 = G__12487;
continue;
}
} else
{var w_12488 = cljs.core.first.call(null,seq__12459_12482__$1);cljs.core.remove_watch.call(null,w_12488,this$__$1);
{
var G__12489 = cljs.core.next.call(null,seq__12459_12482__$1);
var G__12490 = null;
var G__12491 = 0;
var G__12492 = 0;
seq__12459_12472 = G__12489;
chunk__12460_12473 = G__12490;
count__12461_12474 = G__12491;
i__12462_12475 = G__12492;
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
{var x__8461__auto___12493 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.auto_run,cloact.ratom._STAR_ratom_context_STAR_], null);if(!((console.log == null)))
{console.log([cljs.core.str([cljs.core.str("dbg "),cljs.core.str("cloact.ratom"),cljs.core.str(":"),cljs.core.str(119),cljs.core.str(": "),cljs.core.str("[auto-run *ratom-context*]"),cljs.core.str(": "),cljs.core.str(cljs.core.pr_str.call(null,x__8461__auto___12493))].join(''))].join(''));
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
var this$__$1 = this;var oldstate = self__.state;var vec__12463 = cloact.ratom.capture_derefed.call(null,self__.f);var res = cljs.core.nth.call(null,vec__12463,0,null);var derefed = cljs.core.nth.call(null,vec__12463,1,null);if(cljs.core.not_EQ_.call(null,derefed,self__.watching))
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
var this$__$1 = this;var seq__12464_12494 = cljs.core.seq.call(null,derefed);var chunk__12465_12495 = null;var count__12466_12496 = 0;var i__12467_12497 = 0;while(true){
if((i__12467_12497 < count__12466_12496))
{var w_12498 = cljs.core._nth.call(null,chunk__12465_12495,i__12467_12497);if(cljs.core.contains_QMARK_.call(null,self__.watching,w_12498))
{} else
{cljs.core.add_watch.call(null,w_12498,this$__$1,cloact.ratom._handle_change);
}
{
var G__12499 = seq__12464_12494;
var G__12500 = chunk__12465_12495;
var G__12501 = count__12466_12496;
var G__12502 = (i__12467_12497 + 1);
seq__12464_12494 = G__12499;
chunk__12465_12495 = G__12500;
count__12466_12496 = G__12501;
i__12467_12497 = G__12502;
continue;
}
} else
{var temp__4092__auto___12503 = cljs.core.seq.call(null,seq__12464_12494);if(temp__4092__auto___12503)
{var seq__12464_12504__$1 = temp__4092__auto___12503;if(cljs.core.chunked_seq_QMARK_.call(null,seq__12464_12504__$1))
{var c__4150__auto___12505 = cljs.core.chunk_first.call(null,seq__12464_12504__$1);{
var G__12506 = cljs.core.chunk_rest.call(null,seq__12464_12504__$1);
var G__12507 = c__4150__auto___12505;
var G__12508 = cljs.core.count.call(null,c__4150__auto___12505);
var G__12509 = 0;
seq__12464_12494 = G__12506;
chunk__12465_12495 = G__12507;
count__12466_12496 = G__12508;
i__12467_12497 = G__12509;
continue;
}
} else
{var w_12510 = cljs.core.first.call(null,seq__12464_12504__$1);if(cljs.core.contains_QMARK_.call(null,self__.watching,w_12510))
{} else
{cljs.core.add_watch.call(null,w_12510,this$__$1,cloact.ratom._handle_change);
}
{
var G__12511 = cljs.core.next.call(null,seq__12464_12504__$1);
var G__12512 = null;
var G__12513 = 0;
var G__12514 = 0;
seq__12464_12494 = G__12511;
chunk__12465_12495 = G__12512;
count__12466_12496 = G__12513;
i__12467_12497 = G__12514;
continue;
}
}
} else
{}
}
break;
}
var seq__12468_12515 = cljs.core.seq.call(null,self__.watching);var chunk__12469_12516 = null;var count__12470_12517 = 0;var i__12471_12518 = 0;while(true){
if((i__12471_12518 < count__12470_12517))
{var w_12519 = cljs.core._nth.call(null,chunk__12469_12516,i__12471_12518);if(cljs.core.contains_QMARK_.call(null,derefed,w_12519))
{} else
{cljs.core.remove_watch.call(null,w_12519,this$__$1);
}
{
var G__12520 = seq__12468_12515;
var G__12521 = chunk__12469_12516;
var G__12522 = count__12470_12517;
var G__12523 = (i__12471_12518 + 1);
seq__12468_12515 = G__12520;
chunk__12469_12516 = G__12521;
count__12470_12517 = G__12522;
i__12471_12518 = G__12523;
continue;
}
} else
{var temp__4092__auto___12524 = cljs.core.seq.call(null,seq__12468_12515);if(temp__4092__auto___12524)
{var seq__12468_12525__$1 = temp__4092__auto___12524;if(cljs.core.chunked_seq_QMARK_.call(null,seq__12468_12525__$1))
{var c__4150__auto___12526 = cljs.core.chunk_first.call(null,seq__12468_12525__$1);{
var G__12527 = cljs.core.chunk_rest.call(null,seq__12468_12525__$1);
var G__12528 = c__4150__auto___12526;
var G__12529 = cljs.core.count.call(null,c__4150__auto___12526);
var G__12530 = 0;
seq__12468_12515 = G__12527;
chunk__12469_12516 = G__12528;
count__12470_12517 = G__12529;
i__12471_12518 = G__12530;
continue;
}
} else
{var w_12531 = cljs.core.first.call(null,seq__12468_12525__$1);if(cljs.core.contains_QMARK_.call(null,derefed,w_12531))
{} else
{cljs.core.remove_watch.call(null,w_12531,this$__$1);
}
{
var G__12532 = cljs.core.next.call(null,seq__12468_12525__$1);
var G__12533 = null;
var G__12534 = 0;
var G__12535 = 0;
seq__12468_12515 = G__12532;
chunk__12469_12516 = G__12533;
count__12470_12517 = G__12534;
i__12471_12518 = G__12535;
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
var make_reaction__delegate = function (f,p__12536){var map__12538 = p__12536;var map__12538__$1 = ((cljs.core.seq_QMARK_.call(null,map__12538))?cljs.core.apply.call(null,cljs.core.hash_map,map__12538):map__12538);var on_dispose = cljs.core.get.call(null,map__12538__$1,new cljs.core.Keyword(null,"on-dispose","on-dispose",2213067683));var on_set = cljs.core.get.call(null,map__12538__$1,new cljs.core.Keyword(null,"on-set","on-set",4294781670));var auto_run = cljs.core.get.call(null,map__12538__$1,new cljs.core.Keyword(null,"auto-run","auto-run",2451476703));var runner = ((cljs.core._EQ_.call(null,auto_run,true))?cloact.ratom.run:auto_run);return (new cloact.ratom.Reaction(f,null,true,false,cljs.core.PersistentHashSet.EMPTY,cljs.core.PersistentArrayMap.EMPTY,runner,on_set,on_dispose));
};
var make_reaction = function (f,var_args){
var p__12536 = null;if (arguments.length > 1) {
  p__12536 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return make_reaction__delegate.call(this,f,p__12536);};
make_reaction.cljs$lang$maxFixedArity = 1;
make_reaction.cljs$lang$applyTo = (function (arglist__12539){
var f = cljs.core.first(arglist__12539);
var p__12536 = cljs.core.rest(arglist__12539);
return make_reaction__delegate(f,p__12536);
});
make_reaction.cljs$core$IFn$_invoke$arity$variadic = make_reaction__delegate;
return make_reaction;
})()
;
