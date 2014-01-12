// Compiled by ClojureScript 0.0-2138
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.ioc_helpers');
cljs.core.async.fn_handler = (function fn_handler(f){if(typeof cljs.core.async.t9494 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t9494 = (function (f,fn_handler,meta9495){
this.f = f;
this.fn_handler = fn_handler;
this.meta9495 = meta9495;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t9494.cljs$lang$type = true;
cljs.core.async.t9494.cljs$lang$ctorStr = "cljs.core.async/t9494";
cljs.core.async.t9494.cljs$lang$ctorPrWriter = (function (this__3970__auto__,writer__3971__auto__,opt__3972__auto__){return cljs.core._write.call(null,writer__3971__auto__,"cljs.core.async/t9494");
});
cljs.core.async.t9494.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t9494.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return true;
});
cljs.core.async.t9494.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.f;
});
cljs.core.async.t9494.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_9496){var self__ = this;
var _9496__$1 = this;return self__.meta9495;
});
cljs.core.async.t9494.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_9496,meta9495__$1){var self__ = this;
var _9496__$1 = this;return (new cljs.core.async.t9494(self__.f,self__.fn_handler,meta9495__$1));
});
cljs.core.async.__GT_t9494 = (function __GT_t9494(f__$1,fn_handler__$1,meta9495){return (new cljs.core.async.t9494(f__$1,fn_handler__$1,meta9495));
});
}
return (new cljs.core.async.t9494(f,fn_handler,null));
});
/**
* Returns a fixed buffer of size n. When full, puts will block/park.
*/
cljs.core.async.buffer = (function buffer(n){return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
* Returns a buffer of size n. When full, puts will complete but
* val will be dropped (no transfer).
*/
cljs.core.async.dropping_buffer = (function dropping_buffer(n){return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
* Returns a buffer of size n. When full, puts will complete, and be
* buffered, but oldest elements in buffer will be dropped (not
* transferred).
*/
cljs.core.async.sliding_buffer = (function sliding_buffer(n){return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
* Returns true if a channel created with buff will never block. That is to say,
* puts into this buffer will never cause the buffer to be full.
*/
cljs.core.async.unblocking_buffer_QMARK_ = (function unblocking_buffer_QMARK_(buff){var G__9498 = buff;if(G__9498)
{var bit__4052__auto__ = null;if(cljs.core.truth_((function (){var or__3408__auto__ = bit__4052__auto__;if(cljs.core.truth_(or__3408__auto__))
{return or__3408__auto__;
} else
{return G__9498.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})()))
{return true;
} else
{if((!G__9498.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__9498);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__9498);
}
});
/**
* Creates a channel with an optional buffer. If buf-or-n is a number,
* will create and use a fixed buffer of that size.
*/
cljs.core.async.chan = (function() {
var chan = null;
var chan__0 = (function (){return chan.call(null,null);
});
var chan__1 = (function (buf_or_n){var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,0))?null:buf_or_n);return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1));
});
chan = function(buf_or_n){
switch(arguments.length){
case 0:
return chan__0.call(this);
case 1:
return chan__1.call(this,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
chan.cljs$core$IFn$_invoke$arity$0 = chan__0;
chan.cljs$core$IFn$_invoke$arity$1 = chan__1;
return chan;
})()
;
/**
* Returns a channel that will close after msecs
*/
cljs.core.async.timeout = (function timeout(msecs){return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
* takes a val from port. Must be called inside a (go ...) block. Will
* return nil if closed. Will park if nothing is available.
*/
cljs.core.async._LT__BANG_ = (function _LT__BANG_(port){if(null)
{return null;
} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("<! used not in (go ...) block"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,null))].join('')));
}
});
/**
* Asynchronously takes a val from port, passing to fn1. Will pass nil
* if closed. If on-caller? (default true) is true, and value is
* immediately available, will call fn1 on calling thread.
* Returns nil.
*/
cljs.core.async.take_BANG_ = (function() {
var take_BANG_ = null;
var take_BANG___2 = (function (port,fn1){return take_BANG_.call(null,port,fn1,true);
});
var take_BANG___3 = (function (port,fn1,on_caller_QMARK_){var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));if(cljs.core.truth_(ret))
{var val_9499 = cljs.core.deref.call(null,ret);if(cljs.core.truth_(on_caller_QMARK_))
{fn1.call(null,val_9499);
} else
{cljs.core.async.impl.dispatch.run.call(null,(function (){return fn1.call(null,val_9499);
}));
}
} else
{}
return null;
});
take_BANG_ = function(port,fn1,on_caller_QMARK_){
switch(arguments.length){
case 2:
return take_BANG___2.call(this,port,fn1);
case 3:
return take_BANG___3.call(this,port,fn1,on_caller_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
take_BANG_.cljs$core$IFn$_invoke$arity$2 = take_BANG___2;
take_BANG_.cljs$core$IFn$_invoke$arity$3 = take_BANG___3;
return take_BANG_;
})()
;
cljs.core.async.nop = (function nop(){return null;
});
/**
* puts a val into port. nil values are not allowed. Must be called
* inside a (go ...) block. Will park if no buffer space is available.
*/
cljs.core.async._GT__BANG_ = (function _GT__BANG_(port,val){if(null)
{return null;
} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(">! used not in (go ...) block"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,null))].join('')));
}
});
/**
* Asynchronously puts a val into port, calling fn0 (if supplied) when
* complete. nil values are not allowed. Will throw if closed. If
* on-caller? (default true) is true, and the put is immediately
* accepted, will call fn0 on calling thread.  Returns nil.
*/
cljs.core.async.put_BANG_ = (function() {
var put_BANG_ = null;
var put_BANG___2 = (function (port,val){return put_BANG_.call(null,port,val,cljs.core.async.nop);
});
var put_BANG___3 = (function (port,val,fn0){return put_BANG_.call(null,port,val,fn0,true);
});
var put_BANG___4 = (function (port,val,fn0,on_caller_QMARK_){var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn0));if(cljs.core.truth_((function (){var and__3396__auto__ = ret;if(cljs.core.truth_(and__3396__auto__))
{return cljs.core.not_EQ_.call(null,fn0,cljs.core.async.nop);
} else
{return and__3396__auto__;
}
})()))
{if(cljs.core.truth_(on_caller_QMARK_))
{fn0.call(null);
} else
{cljs.core.async.impl.dispatch.run.call(null,fn0);
}
} else
{}
return null;
});
put_BANG_ = function(port,val,fn0,on_caller_QMARK_){
switch(arguments.length){
case 2:
return put_BANG___2.call(this,port,val);
case 3:
return put_BANG___3.call(this,port,val,fn0);
case 4:
return put_BANG___4.call(this,port,val,fn0,on_caller_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
put_BANG_.cljs$core$IFn$_invoke$arity$2 = put_BANG___2;
put_BANG_.cljs$core$IFn$_invoke$arity$3 = put_BANG___3;
put_BANG_.cljs$core$IFn$_invoke$arity$4 = put_BANG___4;
return put_BANG_;
})()
;
cljs.core.async.close_BANG_ = (function close_BANG_(port){return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function random_array(n){var a = (new Array(n));var n__4250__auto___9500 = n;var x_9501 = 0;while(true){
if((x_9501 < n__4250__auto___9500))
{(a[x_9501] = 0);
{
var G__9502 = (x_9501 + 1);
x_9501 = G__9502;
continue;
}
} else
{}
break;
}
var i = 1;while(true){
if(cljs.core._EQ_.call(null,i,n))
{return a;
} else
{var j = cljs.core.rand_int.call(null,i);(a[i] = (a[j]));
(a[j] = i);
{
var G__9503 = (i + 1);
i = G__9503;
continue;
}
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){var flag = cljs.core.atom.call(null,true);if(typeof cljs.core.async.t9507 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t9507 = (function (flag,alt_flag,meta9508){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta9508 = meta9508;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t9507.cljs$lang$type = true;
cljs.core.async.t9507.cljs$lang$ctorStr = "cljs.core.async/t9507";
cljs.core.async.t9507.cljs$lang$ctorPrWriter = (function (this__3970__auto__,writer__3971__auto__,opt__3972__auto__){return cljs.core._write.call(null,writer__3971__auto__,"cljs.core.async/t9507");
});
cljs.core.async.t9507.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t9507.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.deref.call(null,self__.flag);
});
cljs.core.async.t9507.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.flag,null);
return true;
});
cljs.core.async.t9507.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_9509){var self__ = this;
var _9509__$1 = this;return self__.meta9508;
});
cljs.core.async.t9507.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_9509,meta9508__$1){var self__ = this;
var _9509__$1 = this;return (new cljs.core.async.t9507(self__.flag,self__.alt_flag,meta9508__$1));
});
cljs.core.async.__GT_t9507 = (function __GT_t9507(flag__$1,alt_flag__$1,meta9508){return (new cljs.core.async.t9507(flag__$1,alt_flag__$1,meta9508));
});
}
return (new cljs.core.async.t9507(flag,alt_flag,null));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){if(typeof cljs.core.async.t9513 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t9513 = (function (cb,flag,alt_handler,meta9514){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta9514 = meta9514;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t9513.cljs$lang$type = true;
cljs.core.async.t9513.cljs$lang$ctorStr = "cljs.core.async/t9513";
cljs.core.async.t9513.cljs$lang$ctorPrWriter = (function (this__3970__auto__,writer__3971__auto__,opt__3972__auto__){return cljs.core._write.call(null,writer__3971__auto__,"cljs.core.async/t9513");
});
cljs.core.async.t9513.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t9513.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});
cljs.core.async.t9513.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.async.impl.protocols.commit.call(null,self__.flag);
return self__.cb;
});
cljs.core.async.t9513.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_9515){var self__ = this;
var _9515__$1 = this;return self__.meta9514;
});
cljs.core.async.t9513.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_9515,meta9514__$1){var self__ = this;
var _9515__$1 = this;return (new cljs.core.async.t9513(self__.cb,self__.flag,self__.alt_handler,meta9514__$1));
});
cljs.core.async.__GT_t9513 = (function __GT_t9513(cb__$1,flag__$1,alt_handler__$1,meta9514){return (new cljs.core.async.t9513(cb__$1,flag__$1,alt_handler__$1,meta9514));
});
}
return (new cljs.core.async.t9513(cb,flag,alt_handler,null));
});
/**
* returns derefable [val port] if immediate, nil if enqueued
*/
cljs.core.async.do_alts = (function do_alts(fret,ports,opts){var flag = cljs.core.async.alt_flag.call(null);var n = cljs.core.count.call(null,ports);var idxs = cljs.core.async.random_array.call(null,n);var priority = new cljs.core.Keyword(null,"priority","priority",4143410454).cljs$core$IFn$_invoke$arity$1(opts);var ret = (function (){var i = 0;while(true){
if((i < n))
{var idx = (cljs.core.truth_(priority)?i:(idxs[i]));var port = cljs.core.nth.call(null,ports,idx);var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,0):null);var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,1);return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__9516_SHARP_){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__9516_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));if(cljs.core.truth_(vbox))
{return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__3408__auto__ = wport;if(cljs.core.truth_(or__3408__auto__))
{return or__3408__auto__;
} else
{return port;
}
})()], null));
} else
{{
var G__9517 = (i + 1);
i = G__9517;
continue;
}
}
} else
{return null;
}
break;
}
})();var or__3408__auto__ = ret;if(cljs.core.truth_(or__3408__auto__))
{return or__3408__auto__;
} else
{if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",2558708147)))
{var temp__4092__auto__ = (function (){var and__3396__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);if(cljs.core.truth_(and__3396__auto__))
{return cljs.core.async.impl.protocols.commit.call(null,flag);
} else
{return and__3396__auto__;
}
})();if(cljs.core.truth_(temp__4092__auto__))
{var got = temp__4092__auto__;return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",2558708147).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",2558708147)], null));
} else
{return null;
}
} else
{return null;
}
}
});
/**
* Completes at most one of several channel operations. Must be called
* inside a (go ...) block. ports is a vector of channel endpoints, which
* can be either a channel to take from or a vector of
* [channel-to-put-to val-to-put], in any combination. Takes will be
* made as if by <!, and puts will be made as if by >!. Unless
* the :priority option is true, if more than one port operation is
* ready a non-deterministic choice will be made. If no operation is
* ready and a :default value is supplied, [default-val :default] will
* be returned, otherwise alts! will park until the first operation to
* become ready completes. Returns [val port] of the completed
* operation, where val is the value taken for takes, and nil for puts.
* 
* opts are passed as :key val ... Supported options:
* 
* :default val - the value to use if none of the operations are immediately ready
* :priority true - (default nil) when true, the operations will be tried in order.
* 
* Note: there is no guarantee that the port exps or val exprs will be
* used, nor in what order should they be, so they should not be
* depended upon for side effects.
* @param {...*} var_args
*/
cljs.core.async.alts_BANG_ = (function() { 
var alts_BANG___delegate = function (ports,p__9518){var map__9520 = p__9518;var map__9520__$1 = ((cljs.core.seq_QMARK_.call(null,map__9520))?cljs.core.apply.call(null,cljs.core.hash_map,map__9520):map__9520);var opts = map__9520__$1;if(null)
{return null;
} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("alts! used not in (go ...) block"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,null))].join('')));
}
};
var alts_BANG_ = function (ports,var_args){
var p__9518 = null;if (arguments.length > 1) {
  p__9518 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return alts_BANG___delegate.call(this,ports,p__9518);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__9521){
var ports = cljs.core.first(arglist__9521);
var p__9518 = cljs.core.rest(arglist__9521);
return alts_BANG___delegate(ports,p__9518);
});
alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = alts_BANG___delegate;
return alts_BANG_;
})()
;
/**
* Takes a function and a source channel, and returns a channel which
* contains the values produced by applying f to each value taken from
* the source channel
*/
cljs.core.async.map_LT_ = (function map_LT_(f,ch){if(typeof cljs.core.async.t9529 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t9529 = (function (ch,f,map_LT_,meta9530){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta9530 = meta9530;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t9529.cljs$lang$type = true;
cljs.core.async.t9529.cljs$lang$ctorStr = "cljs.core.async/t9529";
cljs.core.async.t9529.cljs$lang$ctorPrWriter = (function (this__3970__auto__,writer__3971__auto__,opt__3972__auto__){return cljs.core._write.call(null,writer__3971__auto__,"cljs.core.async/t9529");
});
cljs.core.async.t9529.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t9529.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
});
cljs.core.async.t9529.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t9529.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){if(typeof cljs.core.async.t9532 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t9532 = (function (fn1,_,meta9530,ch,f,map_LT_,meta9533){
this.fn1 = fn1;
this._ = _;
this.meta9530 = meta9530;
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta9533 = meta9533;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t9532.cljs$lang$type = true;
cljs.core.async.t9532.cljs$lang$ctorStr = "cljs.core.async/t9532";
cljs.core.async.t9532.cljs$lang$ctorPrWriter = (function (this__3970__auto__,writer__3971__auto__,opt__3972__auto__){return cljs.core._write.call(null,writer__3971__auto__,"cljs.core.async/t9532");
});
cljs.core.async.t9532.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t9532.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});
cljs.core.async.t9532.prototype.cljs$core$async$impl$protocols$Handler$lock_id$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.lock_id.call(null,self__.fn1);
});
cljs.core.async.t9532.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);return ((function (f1,___$4){
return (function (p1__9522_SHARP_){return f1.call(null,(((p1__9522_SHARP_ == null))?null:self__.f.call(null,p1__9522_SHARP_)));
});
;})(f1,___$4))
});
cljs.core.async.t9532.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_9534){var self__ = this;
var _9534__$1 = this;return self__.meta9533;
});
cljs.core.async.t9532.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_9534,meta9533__$1){var self__ = this;
var _9534__$1 = this;return (new cljs.core.async.t9532(self__.fn1,self__._,self__.meta9530,self__.ch,self__.f,self__.map_LT_,meta9533__$1));
});
cljs.core.async.__GT_t9532 = (function __GT_t9532(fn1__$1,___$2,meta9530__$1,ch__$2,f__$2,map_LT___$2,meta9533){return (new cljs.core.async.t9532(fn1__$1,___$2,meta9530__$1,ch__$2,f__$2,map_LT___$2,meta9533));
});
}
return (new cljs.core.async.t9532(fn1,___$1,self__.meta9530,self__.ch,self__.f,self__.map_LT_,null));
})());if(cljs.core.truth_((function (){var and__3396__auto__ = ret;if(cljs.core.truth_(and__3396__auto__))
{return !((cljs.core.deref.call(null,ret) == null));
} else
{return and__3396__auto__;
}
})()))
{return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else
{return ret;
}
});
cljs.core.async.t9529.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t9529.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t9529.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_9531){var self__ = this;
var _9531__$1 = this;return self__.meta9530;
});
cljs.core.async.t9529.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_9531,meta9530__$1){var self__ = this;
var _9531__$1 = this;return (new cljs.core.async.t9529(self__.ch,self__.f,self__.map_LT_,meta9530__$1));
});
cljs.core.async.__GT_t9529 = (function __GT_t9529(ch__$1,f__$1,map_LT___$1,meta9530){return (new cljs.core.async.t9529(ch__$1,f__$1,map_LT___$1,meta9530));
});
}
return (new cljs.core.async.t9529(ch,f,map_LT_,null));
});
/**
* Takes a function and a target channel, and returns a channel which
* applies f to each value before supplying it to the target channel.
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){if(typeof cljs.core.async.t9538 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t9538 = (function (ch,f,map_GT_,meta9539){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta9539 = meta9539;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t9538.cljs$lang$type = true;
cljs.core.async.t9538.cljs$lang$ctorStr = "cljs.core.async/t9538";
cljs.core.async.t9538.cljs$lang$ctorPrWriter = (function (this__3970__auto__,writer__3971__auto__,opt__3972__auto__){return cljs.core._write.call(null,writer__3971__auto__,"cljs.core.async/t9538");
});
cljs.core.async.t9538.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t9538.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn0);
});
cljs.core.async.t9538.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t9538.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t9538.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t9538.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t9538.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_9540){var self__ = this;
var _9540__$1 = this;return self__.meta9539;
});
cljs.core.async.t9538.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_9540,meta9539__$1){var self__ = this;
var _9540__$1 = this;return (new cljs.core.async.t9538(self__.ch,self__.f,self__.map_GT_,meta9539__$1));
});
cljs.core.async.__GT_t9538 = (function __GT_t9538(ch__$1,f__$1,map_GT___$1,meta9539){return (new cljs.core.async.t9538(ch__$1,f__$1,map_GT___$1,meta9539));
});
}
return (new cljs.core.async.t9538(ch,f,map_GT_,null));
});
/**
* Takes a predicate and a target channel, and returns a channel which
* supplies only the values for which the predicate returns true to the
* target channel.
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){if(typeof cljs.core.async.t9544 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t9544 = (function (ch,p,filter_GT_,meta9545){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta9545 = meta9545;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t9544.cljs$lang$type = true;
cljs.core.async.t9544.cljs$lang$ctorStr = "cljs.core.async/t9544";
cljs.core.async.t9544.cljs$lang$ctorPrWriter = (function (this__3970__auto__,writer__3971__auto__,opt__3972__auto__){return cljs.core._write.call(null,writer__3971__auto__,"cljs.core.async/t9544");
});
cljs.core.async.t9544.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t9544.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.p.call(null,val)))
{return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
} else
{return cljs.core.async.impl.channels.box.call(null,null);
}
});
cljs.core.async.t9544.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t9544.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t9544.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t9544.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t9544.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_9546){var self__ = this;
var _9546__$1 = this;return self__.meta9545;
});
cljs.core.async.t9544.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_9546,meta9545__$1){var self__ = this;
var _9546__$1 = this;return (new cljs.core.async.t9544(self__.ch,self__.p,self__.filter_GT_,meta9545__$1));
});
cljs.core.async.__GT_t9544 = (function __GT_t9544(ch__$1,p__$1,filter_GT___$1,meta9545){return (new cljs.core.async.t9544(ch__$1,p__$1,filter_GT___$1,meta9545));
});
}
return (new cljs.core.async.t9544(ch,p,filter_GT_,null));
});
/**
* Takes a predicate and a target channel, and returns a channel which
* supplies only the values for which the predicate returns false to the
* target channel.
*/
cljs.core.async.remove_GT_ = (function remove_GT_(p,ch){return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
* Takes a predicate and a source channel, and returns a channel which
* contains only the values taken from the source channel for which the
* predicate returns true. The returned channel will be unbuffered by
* default, or a buf-or-n can be supplied. The channel will close
* when the source channel closes.
*/
cljs.core.async.filter_LT_ = (function() {
var filter_LT_ = null;
var filter_LT___2 = (function (p,ch){return filter_LT_.call(null,p,ch,null);
});
var filter_LT___3 = (function (p,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5523__auto___9629 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5524__auto__ = (function (){var switch__5508__auto__ = (function (state_9608){var state_val_9609 = (state_9608[1]);if((state_val_9609 === 1))
{var state_9608__$1 = state_9608;var statearr_9610_9630 = state_9608__$1;(statearr_9610_9630[2] = null);
(statearr_9610_9630[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9609 === 2))
{var state_9608__$1 = state_9608;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_9608__$1,4,ch);
} else
{if((state_val_9609 === 3))
{var inst_9606 = (state_9608[2]);var state_9608__$1 = state_9608;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9608__$1,inst_9606);
} else
{if((state_val_9609 === 4))
{var inst_9590 = (state_9608[7]);var inst_9590__$1 = (state_9608[2]);var inst_9591 = (inst_9590__$1 == null);var state_9608__$1 = (function (){var statearr_9611 = state_9608;(statearr_9611[7] = inst_9590__$1);
return statearr_9611;
})();if(cljs.core.truth_(inst_9591))
{var statearr_9612_9631 = state_9608__$1;(statearr_9612_9631[1] = 5);
} else
{var statearr_9613_9632 = state_9608__$1;(statearr_9613_9632[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9609 === 5))
{var inst_9593 = cljs.core.async.close_BANG_.call(null,out);var state_9608__$1 = state_9608;var statearr_9614_9633 = state_9608__$1;(statearr_9614_9633[2] = inst_9593);
(statearr_9614_9633[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9609 === 6))
{var inst_9590 = (state_9608[7]);var inst_9595 = p.call(null,inst_9590);var state_9608__$1 = state_9608;if(cljs.core.truth_(inst_9595))
{var statearr_9615_9634 = state_9608__$1;(statearr_9615_9634[1] = 8);
} else
{var statearr_9616_9635 = state_9608__$1;(statearr_9616_9635[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9609 === 7))
{var inst_9604 = (state_9608[2]);var state_9608__$1 = state_9608;var statearr_9617_9636 = state_9608__$1;(statearr_9617_9636[2] = inst_9604);
(statearr_9617_9636[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9609 === 8))
{var inst_9590 = (state_9608[7]);var state_9608__$1 = state_9608;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_9608__$1,11,out,inst_9590);
} else
{if((state_val_9609 === 9))
{var state_9608__$1 = state_9608;var statearr_9618_9637 = state_9608__$1;(statearr_9618_9637[2] = null);
(statearr_9618_9637[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9609 === 10))
{var inst_9601 = (state_9608[2]);var state_9608__$1 = (function (){var statearr_9619 = state_9608;(statearr_9619[8] = inst_9601);
return statearr_9619;
})();var statearr_9620_9638 = state_9608__$1;(statearr_9620_9638[2] = null);
(statearr_9620_9638[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9609 === 11))
{var inst_9598 = (state_9608[2]);var state_9608__$1 = state_9608;var statearr_9621_9639 = state_9608__$1;(statearr_9621_9639[2] = inst_9598);
(statearr_9621_9639[1] = 10);
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
}
}
}
}
});return ((function (switch__5508__auto__){
return (function() {
var state_machine__5509__auto__ = null;
var state_machine__5509__auto____0 = (function (){var statearr_9625 = [null,null,null,null,null,null,null,null,null];(statearr_9625[0] = state_machine__5509__auto__);
(statearr_9625[1] = 1);
return statearr_9625;
});
var state_machine__5509__auto____1 = (function (state_9608){while(true){
var ret_value__5510__auto__ = (function (){try{while(true){
var result__5511__auto__ = switch__5508__auto__.call(null,state_9608);if(cljs.core.keyword_identical_QMARK_.call(null,result__5511__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5511__auto__;
}
break;
}
}catch (e9626){if((e9626 instanceof Object))
{var ex__5512__auto__ = e9626;var statearr_9627_9640 = state_9608;(statearr_9627_9640[5] = ex__5512__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9608);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e9626;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5510__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__9641 = state_9608;
state_9608 = G__9641;
continue;
}
} else
{return ret_value__5510__auto__;
}
break;
}
});
state_machine__5509__auto__ = function(state_9608){
switch(arguments.length){
case 0:
return state_machine__5509__auto____0.call(this);
case 1:
return state_machine__5509__auto____1.call(this,state_9608);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5509__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5509__auto____0;
state_machine__5509__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5509__auto____1;
return state_machine__5509__auto__;
})()
;})(switch__5508__auto__))
})();var state__5525__auto__ = (function (){var statearr_9628 = f__5524__auto__.call(null);(statearr_9628[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5523__auto___9629);
return statearr_9628;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5525__auto__);
}));
return out;
});
filter_LT_ = function(p,ch,buf_or_n){
switch(arguments.length){
case 2:
return filter_LT___2.call(this,p,ch);
case 3:
return filter_LT___3.call(this,p,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
filter_LT_.cljs$core$IFn$_invoke$arity$2 = filter_LT___2;
filter_LT_.cljs$core$IFn$_invoke$arity$3 = filter_LT___3;
return filter_LT_;
})()
;
/**
* Takes a predicate and a source channel, and returns a channel which
* contains only the values taken from the source channel for which the
* predicate returns false. The returned channel will be unbuffered by
* default, or a buf-or-n can be supplied. The channel will close
* when the source channel closes.
*/
cljs.core.async.remove_LT_ = (function() {
var remove_LT_ = null;
var remove_LT___2 = (function (p,ch){return remove_LT_.call(null,p,ch,null);
});
var remove_LT___3 = (function (p,ch,buf_or_n){return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});
remove_LT_ = function(p,ch,buf_or_n){
switch(arguments.length){
case 2:
return remove_LT___2.call(this,p,ch);
case 3:
return remove_LT___3.call(this,p,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
remove_LT_.cljs$core$IFn$_invoke$arity$2 = remove_LT___2;
remove_LT_.cljs$core$IFn$_invoke$arity$3 = remove_LT___3;
return remove_LT_;
})()
;
cljs.core.async.mapcat_STAR_ = (function mapcat_STAR_(f,in$,out){var c__5523__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5524__auto__ = (function (){var switch__5508__auto__ = (function (state_9793){var state_val_9794 = (state_9793[1]);if((state_val_9794 === 1))
{var state_9793__$1 = state_9793;var statearr_9795_9832 = state_9793__$1;(statearr_9795_9832[2] = null);
(statearr_9795_9832[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9794 === 2))
{var state_9793__$1 = state_9793;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_9793__$1,4,in$);
} else
{if((state_val_9794 === 3))
{var inst_9791 = (state_9793[2]);var state_9793__$1 = state_9793;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9793__$1,inst_9791);
} else
{if((state_val_9794 === 4))
{var inst_9739 = (state_9793[7]);var inst_9739__$1 = (state_9793[2]);var inst_9740 = (inst_9739__$1 == null);var state_9793__$1 = (function (){var statearr_9796 = state_9793;(statearr_9796[7] = inst_9739__$1);
return statearr_9796;
})();if(cljs.core.truth_(inst_9740))
{var statearr_9797_9833 = state_9793__$1;(statearr_9797_9833[1] = 5);
} else
{var statearr_9798_9834 = state_9793__$1;(statearr_9798_9834[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9794 === 5))
{var inst_9742 = cljs.core.async.close_BANG_.call(null,out);var state_9793__$1 = state_9793;var statearr_9799_9835 = state_9793__$1;(statearr_9799_9835[2] = inst_9742);
(statearr_9799_9835[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9794 === 6))
{var inst_9739 = (state_9793[7]);var inst_9744 = f.call(null,inst_9739);var inst_9749 = cljs.core.seq.call(null,inst_9744);var inst_9750 = inst_9749;var inst_9751 = null;var inst_9752 = 0;var inst_9753 = 0;var state_9793__$1 = (function (){var statearr_9800 = state_9793;(statearr_9800[8] = inst_9752);
(statearr_9800[9] = inst_9753);
(statearr_9800[10] = inst_9751);
(statearr_9800[11] = inst_9750);
return statearr_9800;
})();var statearr_9801_9836 = state_9793__$1;(statearr_9801_9836[2] = null);
(statearr_9801_9836[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9794 === 7))
{var inst_9789 = (state_9793[2]);var state_9793__$1 = state_9793;var statearr_9802_9837 = state_9793__$1;(statearr_9802_9837[2] = inst_9789);
(statearr_9802_9837[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9794 === 8))
{var inst_9752 = (state_9793[8]);var inst_9753 = (state_9793[9]);var inst_9755 = (inst_9753 < inst_9752);var inst_9756 = inst_9755;var state_9793__$1 = state_9793;if(cljs.core.truth_(inst_9756))
{var statearr_9803_9838 = state_9793__$1;(statearr_9803_9838[1] = 10);
} else
{var statearr_9804_9839 = state_9793__$1;(statearr_9804_9839[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9794 === 9))
{var inst_9786 = (state_9793[2]);var state_9793__$1 = (function (){var statearr_9805 = state_9793;(statearr_9805[12] = inst_9786);
return statearr_9805;
})();var statearr_9806_9840 = state_9793__$1;(statearr_9806_9840[2] = null);
(statearr_9806_9840[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9794 === 10))
{var inst_9753 = (state_9793[9]);var inst_9751 = (state_9793[10]);var inst_9758 = cljs.core._nth.call(null,inst_9751,inst_9753);var state_9793__$1 = state_9793;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_9793__$1,13,out,inst_9758);
} else
{if((state_val_9794 === 11))
{var inst_9750 = (state_9793[11]);var inst_9764 = (state_9793[13]);var inst_9764__$1 = cljs.core.seq.call(null,inst_9750);var state_9793__$1 = (function (){var statearr_9810 = state_9793;(statearr_9810[13] = inst_9764__$1);
return statearr_9810;
})();if(inst_9764__$1)
{var statearr_9811_9841 = state_9793__$1;(statearr_9811_9841[1] = 14);
} else
{var statearr_9812_9842 = state_9793__$1;(statearr_9812_9842[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9794 === 12))
{var inst_9784 = (state_9793[2]);var state_9793__$1 = state_9793;var statearr_9813_9843 = state_9793__$1;(statearr_9813_9843[2] = inst_9784);
(statearr_9813_9843[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9794 === 13))
{var inst_9752 = (state_9793[8]);var inst_9753 = (state_9793[9]);var inst_9751 = (state_9793[10]);var inst_9750 = (state_9793[11]);var inst_9760 = (state_9793[2]);var inst_9761 = (inst_9753 + 1);var tmp9807 = inst_9752;var tmp9808 = inst_9751;var tmp9809 = inst_9750;var inst_9750__$1 = tmp9809;var inst_9751__$1 = tmp9808;var inst_9752__$1 = tmp9807;var inst_9753__$1 = inst_9761;var state_9793__$1 = (function (){var statearr_9814 = state_9793;(statearr_9814[8] = inst_9752__$1);
(statearr_9814[9] = inst_9753__$1);
(statearr_9814[10] = inst_9751__$1);
(statearr_9814[11] = inst_9750__$1);
(statearr_9814[14] = inst_9760);
return statearr_9814;
})();var statearr_9815_9844 = state_9793__$1;(statearr_9815_9844[2] = null);
(statearr_9815_9844[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9794 === 14))
{var inst_9764 = (state_9793[13]);var inst_9766 = cljs.core.chunked_seq_QMARK_.call(null,inst_9764);var state_9793__$1 = state_9793;if(inst_9766)
{var statearr_9816_9845 = state_9793__$1;(statearr_9816_9845[1] = 17);
} else
{var statearr_9817_9846 = state_9793__$1;(statearr_9817_9846[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9794 === 15))
{var state_9793__$1 = state_9793;var statearr_9818_9847 = state_9793__$1;(statearr_9818_9847[2] = null);
(statearr_9818_9847[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9794 === 16))
{var inst_9782 = (state_9793[2]);var state_9793__$1 = state_9793;var statearr_9819_9848 = state_9793__$1;(statearr_9819_9848[2] = inst_9782);
(statearr_9819_9848[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9794 === 17))
{var inst_9764 = (state_9793[13]);var inst_9768 = cljs.core.chunk_first.call(null,inst_9764);var inst_9769 = cljs.core.chunk_rest.call(null,inst_9764);var inst_9770 = cljs.core.count.call(null,inst_9768);var inst_9750 = inst_9769;var inst_9751 = inst_9768;var inst_9752 = inst_9770;var inst_9753 = 0;var state_9793__$1 = (function (){var statearr_9820 = state_9793;(statearr_9820[8] = inst_9752);
(statearr_9820[9] = inst_9753);
(statearr_9820[10] = inst_9751);
(statearr_9820[11] = inst_9750);
return statearr_9820;
})();var statearr_9821_9849 = state_9793__$1;(statearr_9821_9849[2] = null);
(statearr_9821_9849[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9794 === 18))
{var inst_9764 = (state_9793[13]);var inst_9773 = cljs.core.first.call(null,inst_9764);var state_9793__$1 = state_9793;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_9793__$1,20,out,inst_9773);
} else
{if((state_val_9794 === 19))
{var inst_9779 = (state_9793[2]);var state_9793__$1 = state_9793;var statearr_9822_9850 = state_9793__$1;(statearr_9822_9850[2] = inst_9779);
(statearr_9822_9850[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9794 === 20))
{var inst_9764 = (state_9793[13]);var inst_9775 = (state_9793[2]);var inst_9776 = cljs.core.next.call(null,inst_9764);var inst_9750 = inst_9776;var inst_9751 = null;var inst_9752 = 0;var inst_9753 = 0;var state_9793__$1 = (function (){var statearr_9823 = state_9793;(statearr_9823[8] = inst_9752);
(statearr_9823[9] = inst_9753);
(statearr_9823[10] = inst_9751);
(statearr_9823[11] = inst_9750);
(statearr_9823[15] = inst_9775);
return statearr_9823;
})();var statearr_9824_9851 = state_9793__$1;(statearr_9824_9851[2] = null);
(statearr_9824_9851[1] = 8);
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
}
}
}
}
}
}
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
var state_machine__5509__auto____0 = (function (){var statearr_9828 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_9828[0] = state_machine__5509__auto__);
(statearr_9828[1] = 1);
return statearr_9828;
});
var state_machine__5509__auto____1 = (function (state_9793){while(true){
var ret_value__5510__auto__ = (function (){try{while(true){
var result__5511__auto__ = switch__5508__auto__.call(null,state_9793);if(cljs.core.keyword_identical_QMARK_.call(null,result__5511__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5511__auto__;
}
break;
}
}catch (e9829){if((e9829 instanceof Object))
{var ex__5512__auto__ = e9829;var statearr_9830_9852 = state_9793;(statearr_9830_9852[5] = ex__5512__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9793);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e9829;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5510__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__9853 = state_9793;
state_9793 = G__9853;
continue;
}
} else
{return ret_value__5510__auto__;
}
break;
}
});
state_machine__5509__auto__ = function(state_9793){
switch(arguments.length){
case 0:
return state_machine__5509__auto____0.call(this);
case 1:
return state_machine__5509__auto____1.call(this,state_9793);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5509__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5509__auto____0;
state_machine__5509__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5509__auto____1;
return state_machine__5509__auto__;
})()
;})(switch__5508__auto__))
})();var state__5525__auto__ = (function (){var statearr_9831 = f__5524__auto__.call(null);(statearr_9831[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5523__auto__);
return statearr_9831;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5525__auto__);
}));
return c__5523__auto__;
});
/**
* Takes a function and a source channel, and returns a channel which
* contains the values in each collection produced by applying f to
* each value taken from the source channel. f must return a
* collection.
* 
* The returned channel will be unbuffered by default, or a buf-or-n
* can be supplied. The channel will close when the source channel
* closes.
*/
cljs.core.async.mapcat_LT_ = (function() {
var mapcat_LT_ = null;
var mapcat_LT___2 = (function (f,in$){return mapcat_LT_.call(null,f,in$,null);
});
var mapcat_LT___3 = (function (f,in$,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);cljs.core.async.mapcat_STAR_.call(null,f,in$,out);
return out;
});
mapcat_LT_ = function(f,in$,buf_or_n){
switch(arguments.length){
case 2:
return mapcat_LT___2.call(this,f,in$);
case 3:
return mapcat_LT___3.call(this,f,in$,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = mapcat_LT___2;
mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = mapcat_LT___3;
return mapcat_LT_;
})()
;
/**
* Takes a function and a target channel, and returns a channel which
* applies f to each value put, then supplies each element of the result
* to the target channel. f must return a collection.
* 
* The returned channel will be unbuffered by default, or a buf-or-n
* can be supplied. The target channel will be closed when the source
* channel closes.
*/
cljs.core.async.mapcat_GT_ = (function() {
var mapcat_GT_ = null;
var mapcat_GT___2 = (function (f,out){return mapcat_GT_.call(null,f,out,null);
});
var mapcat_GT___3 = (function (f,out,buf_or_n){var in$ = cljs.core.async.chan.call(null,buf_or_n);cljs.core.async.mapcat_STAR_.call(null,f,in$,out);
return in$;
});
mapcat_GT_ = function(f,out,buf_or_n){
switch(arguments.length){
case 2:
return mapcat_GT___2.call(this,f,out);
case 3:
return mapcat_GT___3.call(this,f,out,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = mapcat_GT___2;
mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = mapcat_GT___3;
return mapcat_GT_;
})()
;
/**
* Takes elements from the from channel and supplies them to the to
* channel. By default, the to channel will be closed when the
* from channel closes, but can be determined by the close?
* parameter.
*/
cljs.core.async.pipe = (function() {
var pipe = null;
var pipe__2 = (function (from,to){return pipe.call(null,from,to,true);
});
var pipe__3 = (function (from,to,close_QMARK_){var c__5523__auto___9934 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5524__auto__ = (function (){var switch__5508__auto__ = (function (state_9913){var state_val_9914 = (state_9913[1]);if((state_val_9914 === 1))
{var state_9913__$1 = state_9913;var statearr_9915_9935 = state_9913__$1;(statearr_9915_9935[2] = null);
(statearr_9915_9935[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9914 === 2))
{var state_9913__$1 = state_9913;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_9913__$1,4,from);
} else
{if((state_val_9914 === 3))
{var inst_9911 = (state_9913[2]);var state_9913__$1 = state_9913;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9913__$1,inst_9911);
} else
{if((state_val_9914 === 4))
{var inst_9896 = (state_9913[7]);var inst_9896__$1 = (state_9913[2]);var inst_9897 = (inst_9896__$1 == null);var state_9913__$1 = (function (){var statearr_9916 = state_9913;(statearr_9916[7] = inst_9896__$1);
return statearr_9916;
})();if(cljs.core.truth_(inst_9897))
{var statearr_9917_9936 = state_9913__$1;(statearr_9917_9936[1] = 5);
} else
{var statearr_9918_9937 = state_9913__$1;(statearr_9918_9937[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9914 === 5))
{var state_9913__$1 = state_9913;if(cljs.core.truth_(close_QMARK_))
{var statearr_9919_9938 = state_9913__$1;(statearr_9919_9938[1] = 8);
} else
{var statearr_9920_9939 = state_9913__$1;(statearr_9920_9939[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9914 === 6))
{var inst_9896 = (state_9913[7]);var state_9913__$1 = state_9913;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_9913__$1,11,to,inst_9896);
} else
{if((state_val_9914 === 7))
{var inst_9909 = (state_9913[2]);var state_9913__$1 = state_9913;var statearr_9921_9940 = state_9913__$1;(statearr_9921_9940[2] = inst_9909);
(statearr_9921_9940[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9914 === 8))
{var inst_9900 = cljs.core.async.close_BANG_.call(null,to);var state_9913__$1 = state_9913;var statearr_9922_9941 = state_9913__$1;(statearr_9922_9941[2] = inst_9900);
(statearr_9922_9941[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9914 === 9))
{var state_9913__$1 = state_9913;var statearr_9923_9942 = state_9913__$1;(statearr_9923_9942[2] = null);
(statearr_9923_9942[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9914 === 10))
{var inst_9903 = (state_9913[2]);var state_9913__$1 = state_9913;var statearr_9924_9943 = state_9913__$1;(statearr_9924_9943[2] = inst_9903);
(statearr_9924_9943[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9914 === 11))
{var inst_9906 = (state_9913[2]);var state_9913__$1 = (function (){var statearr_9925 = state_9913;(statearr_9925[8] = inst_9906);
return statearr_9925;
})();var statearr_9926_9944 = state_9913__$1;(statearr_9926_9944[2] = null);
(statearr_9926_9944[1] = 2);
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
}
}
}
}
});return ((function (switch__5508__auto__){
return (function() {
var state_machine__5509__auto__ = null;
var state_machine__5509__auto____0 = (function (){var statearr_9930 = [null,null,null,null,null,null,null,null,null];(statearr_9930[0] = state_machine__5509__auto__);
(statearr_9930[1] = 1);
return statearr_9930;
});
var state_machine__5509__auto____1 = (function (state_9913){while(true){
var ret_value__5510__auto__ = (function (){try{while(true){
var result__5511__auto__ = switch__5508__auto__.call(null,state_9913);if(cljs.core.keyword_identical_QMARK_.call(null,result__5511__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5511__auto__;
}
break;
}
}catch (e9931){if((e9931 instanceof Object))
{var ex__5512__auto__ = e9931;var statearr_9932_9945 = state_9913;(statearr_9932_9945[5] = ex__5512__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9913);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e9931;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5510__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__9946 = state_9913;
state_9913 = G__9946;
continue;
}
} else
{return ret_value__5510__auto__;
}
break;
}
});
state_machine__5509__auto__ = function(state_9913){
switch(arguments.length){
case 0:
return state_machine__5509__auto____0.call(this);
case 1:
return state_machine__5509__auto____1.call(this,state_9913);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5509__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5509__auto____0;
state_machine__5509__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5509__auto____1;
return state_machine__5509__auto__;
})()
;})(switch__5508__auto__))
})();var state__5525__auto__ = (function (){var statearr_9933 = f__5524__auto__.call(null);(statearr_9933[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5523__auto___9934);
return statearr_9933;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5525__auto__);
}));
return to;
});
pipe = function(from,to,close_QMARK_){
switch(arguments.length){
case 2:
return pipe__2.call(this,from,to);
case 3:
return pipe__3.call(this,from,to,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
pipe.cljs$core$IFn$_invoke$arity$2 = pipe__2;
pipe.cljs$core$IFn$_invoke$arity$3 = pipe__3;
return pipe;
})()
;
/**
* Takes a predicate and a source channel and returns a vector of two
* channels, the first of which will contain the values for which the
* predicate returned true, the second those for which it returned
* false.
* 
* The out channels will be unbuffered by default, or two buf-or-ns can
* be supplied. The channels will close after the source channel has
* closed.
*/
cljs.core.async.split = (function() {
var split = null;
var split__2 = (function (p,ch){return split.call(null,p,ch,null,null);
});
var split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){var tc = cljs.core.async.chan.call(null,t_buf_or_n);var fc = cljs.core.async.chan.call(null,f_buf_or_n);var c__5523__auto___10033 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5524__auto__ = (function (){var switch__5508__auto__ = (function (state_10011){var state_val_10012 = (state_10011[1]);if((state_val_10012 === 1))
{var state_10011__$1 = state_10011;var statearr_10013_10034 = state_10011__$1;(statearr_10013_10034[2] = null);
(statearr_10013_10034[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10012 === 2))
{var state_10011__$1 = state_10011;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10011__$1,4,ch);
} else
{if((state_val_10012 === 3))
{var inst_10009 = (state_10011[2]);var state_10011__$1 = state_10011;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10011__$1,inst_10009);
} else
{if((state_val_10012 === 4))
{var inst_9992 = (state_10011[7]);var inst_9992__$1 = (state_10011[2]);var inst_9993 = (inst_9992__$1 == null);var state_10011__$1 = (function (){var statearr_10014 = state_10011;(statearr_10014[7] = inst_9992__$1);
return statearr_10014;
})();if(cljs.core.truth_(inst_9993))
{var statearr_10015_10035 = state_10011__$1;(statearr_10015_10035[1] = 5);
} else
{var statearr_10016_10036 = state_10011__$1;(statearr_10016_10036[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10012 === 5))
{var inst_9995 = cljs.core.async.close_BANG_.call(null,tc);var inst_9996 = cljs.core.async.close_BANG_.call(null,fc);var state_10011__$1 = (function (){var statearr_10017 = state_10011;(statearr_10017[8] = inst_9995);
return statearr_10017;
})();var statearr_10018_10037 = state_10011__$1;(statearr_10018_10037[2] = inst_9996);
(statearr_10018_10037[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10012 === 6))
{var inst_9992 = (state_10011[7]);var inst_9998 = p.call(null,inst_9992);var state_10011__$1 = state_10011;if(cljs.core.truth_(inst_9998))
{var statearr_10019_10038 = state_10011__$1;(statearr_10019_10038[1] = 9);
} else
{var statearr_10020_10039 = state_10011__$1;(statearr_10020_10039[1] = 10);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10012 === 7))
{var inst_10007 = (state_10011[2]);var state_10011__$1 = state_10011;var statearr_10021_10040 = state_10011__$1;(statearr_10021_10040[2] = inst_10007);
(statearr_10021_10040[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10012 === 8))
{var inst_10004 = (state_10011[2]);var state_10011__$1 = (function (){var statearr_10022 = state_10011;(statearr_10022[9] = inst_10004);
return statearr_10022;
})();var statearr_10023_10041 = state_10011__$1;(statearr_10023_10041[2] = null);
(statearr_10023_10041[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10012 === 9))
{var state_10011__$1 = state_10011;var statearr_10024_10042 = state_10011__$1;(statearr_10024_10042[2] = tc);
(statearr_10024_10042[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10012 === 10))
{var state_10011__$1 = state_10011;var statearr_10025_10043 = state_10011__$1;(statearr_10025_10043[2] = fc);
(statearr_10025_10043[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10012 === 11))
{var inst_9992 = (state_10011[7]);var inst_10002 = (state_10011[2]);var state_10011__$1 = state_10011;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_10011__$1,8,inst_10002,inst_9992);
} else
{return null;
}
}
}
}
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
var state_machine__5509__auto____0 = (function (){var statearr_10029 = [null,null,null,null,null,null,null,null,null,null];(statearr_10029[0] = state_machine__5509__auto__);
(statearr_10029[1] = 1);
return statearr_10029;
});
var state_machine__5509__auto____1 = (function (state_10011){while(true){
var ret_value__5510__auto__ = (function (){try{while(true){
var result__5511__auto__ = switch__5508__auto__.call(null,state_10011);if(cljs.core.keyword_identical_QMARK_.call(null,result__5511__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5511__auto__;
}
break;
}
}catch (e10030){if((e10030 instanceof Object))
{var ex__5512__auto__ = e10030;var statearr_10031_10044 = state_10011;(statearr_10031_10044[5] = ex__5512__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10011);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e10030;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5510__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__10045 = state_10011;
state_10011 = G__10045;
continue;
}
} else
{return ret_value__5510__auto__;
}
break;
}
});
state_machine__5509__auto__ = function(state_10011){
switch(arguments.length){
case 0:
return state_machine__5509__auto____0.call(this);
case 1:
return state_machine__5509__auto____1.call(this,state_10011);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5509__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5509__auto____0;
state_machine__5509__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5509__auto____1;
return state_machine__5509__auto__;
})()
;})(switch__5508__auto__))
})();var state__5525__auto__ = (function (){var statearr_10032 = f__5524__auto__.call(null);(statearr_10032[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5523__auto___10033);
return statearr_10032;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5525__auto__);
}));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});
split = function(p,ch,t_buf_or_n,f_buf_or_n){
switch(arguments.length){
case 2:
return split__2.call(this,p,ch);
case 4:
return split__4.call(this,p,ch,t_buf_or_n,f_buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
split.cljs$core$IFn$_invoke$arity$2 = split__2;
split.cljs$core$IFn$_invoke$arity$4 = split__4;
return split;
})()
;
/**
* f should be a function of 2 arguments. Returns a channel containing
* the single result of applying f to init and the first item from the
* channel, then applying f to that result and the 2nd item, etc. If
* the channel closes without yielding items, returns init and f is not
* called. ch must close before reduce produces a result.
*/
cljs.core.async.reduce = (function reduce(f,init,ch){var c__5523__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5524__auto__ = (function (){var switch__5508__auto__ = (function (state_10092){var state_val_10093 = (state_10092[1]);if((state_val_10093 === 7))
{var inst_10088 = (state_10092[2]);var state_10092__$1 = state_10092;var statearr_10094_10110 = state_10092__$1;(statearr_10094_10110[2] = inst_10088);
(statearr_10094_10110[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10093 === 6))
{var inst_10081 = (state_10092[7]);var inst_10078 = (state_10092[8]);var inst_10085 = f.call(null,inst_10078,inst_10081);var inst_10078__$1 = inst_10085;var state_10092__$1 = (function (){var statearr_10095 = state_10092;(statearr_10095[8] = inst_10078__$1);
return statearr_10095;
})();var statearr_10096_10111 = state_10092__$1;(statearr_10096_10111[2] = null);
(statearr_10096_10111[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10093 === 5))
{var inst_10078 = (state_10092[8]);var state_10092__$1 = state_10092;var statearr_10097_10112 = state_10092__$1;(statearr_10097_10112[2] = inst_10078);
(statearr_10097_10112[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10093 === 4))
{var inst_10081 = (state_10092[7]);var inst_10081__$1 = (state_10092[2]);var inst_10082 = (inst_10081__$1 == null);var state_10092__$1 = (function (){var statearr_10098 = state_10092;(statearr_10098[7] = inst_10081__$1);
return statearr_10098;
})();if(cljs.core.truth_(inst_10082))
{var statearr_10099_10113 = state_10092__$1;(statearr_10099_10113[1] = 5);
} else
{var statearr_10100_10114 = state_10092__$1;(statearr_10100_10114[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10093 === 3))
{var inst_10090 = (state_10092[2]);var state_10092__$1 = state_10092;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10092__$1,inst_10090);
} else
{if((state_val_10093 === 2))
{var state_10092__$1 = state_10092;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10092__$1,4,ch);
} else
{if((state_val_10093 === 1))
{var inst_10078 = init;var state_10092__$1 = (function (){var statearr_10101 = state_10092;(statearr_10101[8] = inst_10078);
return statearr_10101;
})();var statearr_10102_10115 = state_10092__$1;(statearr_10102_10115[2] = null);
(statearr_10102_10115[1] = 2);
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
var state_machine__5509__auto____0 = (function (){var statearr_10106 = [null,null,null,null,null,null,null,null,null];(statearr_10106[0] = state_machine__5509__auto__);
(statearr_10106[1] = 1);
return statearr_10106;
});
var state_machine__5509__auto____1 = (function (state_10092){while(true){
var ret_value__5510__auto__ = (function (){try{while(true){
var result__5511__auto__ = switch__5508__auto__.call(null,state_10092);if(cljs.core.keyword_identical_QMARK_.call(null,result__5511__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5511__auto__;
}
break;
}
}catch (e10107){if((e10107 instanceof Object))
{var ex__5512__auto__ = e10107;var statearr_10108_10116 = state_10092;(statearr_10108_10116[5] = ex__5512__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10092);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e10107;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5510__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__10117 = state_10092;
state_10092 = G__10117;
continue;
}
} else
{return ret_value__5510__auto__;
}
break;
}
});
state_machine__5509__auto__ = function(state_10092){
switch(arguments.length){
case 0:
return state_machine__5509__auto____0.call(this);
case 1:
return state_machine__5509__auto____1.call(this,state_10092);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5509__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5509__auto____0;
state_machine__5509__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5509__auto____1;
return state_machine__5509__auto__;
})()
;})(switch__5508__auto__))
})();var state__5525__auto__ = (function (){var statearr_10109 = f__5524__auto__.call(null);(statearr_10109[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5523__auto__);
return statearr_10109;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5525__auto__);
}));
return c__5523__auto__;
});
/**
* Puts the contents of coll into the supplied channel.
* 
* By default the channel will be closed after the items are copied,
* but can be determined by the close? parameter.
* 
* Returns a channel which will close after the items are copied.
*/
cljs.core.async.onto_chan = (function() {
var onto_chan = null;
var onto_chan__2 = (function (ch,coll){return onto_chan.call(null,ch,coll,true);
});
var onto_chan__3 = (function (ch,coll,close_QMARK_){var c__5523__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5524__auto__ = (function (){var switch__5508__auto__ = (function (state_10179){var state_val_10180 = (state_10179[1]);if((state_val_10180 === 1))
{var inst_10159 = cljs.core.seq.call(null,coll);var inst_10160 = inst_10159;var state_10179__$1 = (function (){var statearr_10181 = state_10179;(statearr_10181[7] = inst_10160);
return statearr_10181;
})();var statearr_10182_10200 = state_10179__$1;(statearr_10182_10200[2] = null);
(statearr_10182_10200[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10180 === 2))
{var inst_10160 = (state_10179[7]);var state_10179__$1 = state_10179;if(cljs.core.truth_(inst_10160))
{var statearr_10183_10201 = state_10179__$1;(statearr_10183_10201[1] = 4);
} else
{var statearr_10184_10202 = state_10179__$1;(statearr_10184_10202[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10180 === 3))
{var inst_10177 = (state_10179[2]);var state_10179__$1 = state_10179;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10179__$1,inst_10177);
} else
{if((state_val_10180 === 4))
{var inst_10160 = (state_10179[7]);var inst_10163 = cljs.core.first.call(null,inst_10160);var state_10179__$1 = state_10179;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_10179__$1,7,ch,inst_10163);
} else
{if((state_val_10180 === 5))
{var state_10179__$1 = state_10179;if(cljs.core.truth_(close_QMARK_))
{var statearr_10185_10203 = state_10179__$1;(statearr_10185_10203[1] = 8);
} else
{var statearr_10186_10204 = state_10179__$1;(statearr_10186_10204[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10180 === 6))
{var inst_10175 = (state_10179[2]);var state_10179__$1 = state_10179;var statearr_10187_10205 = state_10179__$1;(statearr_10187_10205[2] = inst_10175);
(statearr_10187_10205[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10180 === 7))
{var inst_10160 = (state_10179[7]);var inst_10165 = (state_10179[2]);var inst_10166 = cljs.core.next.call(null,inst_10160);var inst_10160__$1 = inst_10166;var state_10179__$1 = (function (){var statearr_10188 = state_10179;(statearr_10188[7] = inst_10160__$1);
(statearr_10188[8] = inst_10165);
return statearr_10188;
})();var statearr_10189_10206 = state_10179__$1;(statearr_10189_10206[2] = null);
(statearr_10189_10206[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10180 === 8))
{var inst_10170 = cljs.core.async.close_BANG_.call(null,ch);var state_10179__$1 = state_10179;var statearr_10190_10207 = state_10179__$1;(statearr_10190_10207[2] = inst_10170);
(statearr_10190_10207[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10180 === 9))
{var state_10179__$1 = state_10179;var statearr_10191_10208 = state_10179__$1;(statearr_10191_10208[2] = null);
(statearr_10191_10208[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10180 === 10))
{var inst_10173 = (state_10179[2]);var state_10179__$1 = state_10179;var statearr_10192_10209 = state_10179__$1;(statearr_10192_10209[2] = inst_10173);
(statearr_10192_10209[1] = 6);
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
}
}
}
});return ((function (switch__5508__auto__){
return (function() {
var state_machine__5509__auto__ = null;
var state_machine__5509__auto____0 = (function (){var statearr_10196 = [null,null,null,null,null,null,null,null,null];(statearr_10196[0] = state_machine__5509__auto__);
(statearr_10196[1] = 1);
return statearr_10196;
});
var state_machine__5509__auto____1 = (function (state_10179){while(true){
var ret_value__5510__auto__ = (function (){try{while(true){
var result__5511__auto__ = switch__5508__auto__.call(null,state_10179);if(cljs.core.keyword_identical_QMARK_.call(null,result__5511__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5511__auto__;
}
break;
}
}catch (e10197){if((e10197 instanceof Object))
{var ex__5512__auto__ = e10197;var statearr_10198_10210 = state_10179;(statearr_10198_10210[5] = ex__5512__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10179);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e10197;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5510__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__10211 = state_10179;
state_10179 = G__10211;
continue;
}
} else
{return ret_value__5510__auto__;
}
break;
}
});
state_machine__5509__auto__ = function(state_10179){
switch(arguments.length){
case 0:
return state_machine__5509__auto____0.call(this);
case 1:
return state_machine__5509__auto____1.call(this,state_10179);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5509__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5509__auto____0;
state_machine__5509__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5509__auto____1;
return state_machine__5509__auto__;
})()
;})(switch__5508__auto__))
})();var state__5525__auto__ = (function (){var statearr_10199 = f__5524__auto__.call(null);(statearr_10199[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5523__auto__);
return statearr_10199;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5525__auto__);
}));
return c__5523__auto__;
});
onto_chan = function(ch,coll,close_QMARK_){
switch(arguments.length){
case 2:
return onto_chan__2.call(this,ch,coll);
case 3:
return onto_chan__3.call(this,ch,coll,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
onto_chan.cljs$core$IFn$_invoke$arity$2 = onto_chan__2;
onto_chan.cljs$core$IFn$_invoke$arity$3 = onto_chan__3;
return onto_chan;
})()
;
/**
* Creates and returns a channel which contains the contents of coll,
* closing when exhausted.
*/
cljs.core.async.to_chan = (function to_chan(coll){var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,100,coll));cljs.core.async.onto_chan.call(null,ch,coll);
return ch;
});
cljs.core.async.Mux = (function (){var obj10213 = {};return obj10213;
})();
cljs.core.async.muxch_STAR_ = (function muxch_STAR_(_){if((function (){var and__3396__auto__ = _;if(and__3396__auto__)
{return _.cljs$core$async$Mux$muxch_STAR_$arity$1;
} else
{return and__3396__auto__;
}
})())
{return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else
{var x__4029__auto__ = (((_ == null))?null:_);return (function (){var or__3408__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4029__auto__)]);if(or__3408__auto__)
{return or__3408__auto__;
} else
{var or__3408__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);if(or__3408__auto____$1)
{return or__3408__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
})().call(null,_);
}
});
cljs.core.async.Mult = (function (){var obj10215 = {};return obj10215;
})();
cljs.core.async.tap_STAR_ = (function tap_STAR_(m,ch,close_QMARK_){if((function (){var and__3396__auto__ = m;if(and__3396__auto__)
{return m.cljs$core$async$Mult$tap_STAR_$arity$3;
} else
{return and__3396__auto__;
}
})())
{return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else
{var x__4029__auto__ = (((m == null))?null:m);return (function (){var or__3408__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4029__auto__)]);if(or__3408__auto__)
{return or__3408__auto__;
} else
{var or__3408__auto____$1 = (cljs.core.async.tap_STAR_["_"]);if(or__3408__auto____$1)
{return or__3408__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
})().call(null,m,ch,close_QMARK_);
}
});
cljs.core.async.untap_STAR_ = (function untap_STAR_(m,ch){if((function (){var and__3396__auto__ = m;if(and__3396__auto__)
{return m.cljs$core$async$Mult$untap_STAR_$arity$2;
} else
{return and__3396__auto__;
}
})())
{return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else
{var x__4029__auto__ = (((m == null))?null:m);return (function (){var or__3408__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4029__auto__)]);if(or__3408__auto__)
{return or__3408__auto__;
} else
{var or__3408__auto____$1 = (cljs.core.async.untap_STAR_["_"]);if(or__3408__auto____$1)
{return or__3408__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.untap_all_STAR_ = (function untap_all_STAR_(m){if((function (){var and__3396__auto__ = m;if(and__3396__auto__)
{return m.cljs$core$async$Mult$untap_all_STAR_$arity$1;
} else
{return and__3396__auto__;
}
})())
{return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else
{var x__4029__auto__ = (((m == null))?null:m);return (function (){var or__3408__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4029__auto__)]);if(or__3408__auto__)
{return or__3408__auto__;
} else
{var or__3408__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);if(or__3408__auto____$1)
{return or__3408__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
})().call(null,m);
}
});
/**
* Creates and returns a mult(iple) of the supplied channel. Channels
* containing copies of the channel can be created with 'tap', and
* detached with 'untap'.
* 
* Each item is distributed to all taps in parallel and synchronously,
* i.e. each tap must accept before the next item is distributed. Use
* buffering/windowing to prevent slow taps from holding up the mult.
* 
* Items received when there are no taps get dropped.
* 
* If a tap put throws an exception, it will be removed from the mult.
*/
cljs.core.async.mult = (function mult(ch){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var m = (function (){if(typeof cljs.core.async.t10439 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t10439 = (function (cs,ch,mult,meta10440){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta10440 = meta10440;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t10439.cljs$lang$type = true;
cljs.core.async.t10439.cljs$lang$ctorStr = "cljs.core.async/t10439";
cljs.core.async.t10439.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__3970__auto__,writer__3971__auto__,opt__3972__auto__){return cljs.core._write.call(null,writer__3971__auto__,"cljs.core.async/t10439");
});})(cs))
;
cljs.core.async.t10439.prototype.cljs$core$async$Mult$ = true;
cljs.core.async.t10439.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$2,close_QMARK_){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$2,close_QMARK_);
return null;
});})(cs))
;
cljs.core.async.t10439.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$2){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$2);
return null;
});})(cs))
;
cljs.core.async.t10439.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return null;
});})(cs))
;
cljs.core.async.t10439.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t10439.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(cs))
;
cljs.core.async.t10439.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_10441){var self__ = this;
var _10441__$1 = this;return self__.meta10440;
});})(cs))
;
cljs.core.async.t10439.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_10441,meta10440__$1){var self__ = this;
var _10441__$1 = this;return (new cljs.core.async.t10439(self__.cs,self__.ch,self__.mult,meta10440__$1));
});})(cs))
;
cljs.core.async.__GT_t10439 = ((function (cs){
return (function __GT_t10439(cs__$1,ch__$1,mult__$1,meta10440){return (new cljs.core.async.t10439(cs__$1,ch__$1,mult__$1,meta10440));
});})(cs))
;
}
return (new cljs.core.async.t10439(cs,ch,mult,null));
})();var dchan = cljs.core.async.chan.call(null,1);var dctr = cljs.core.atom.call(null,null);var done = ((function (cs,m,dchan,dctr){
return (function (){if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === 0))
{return cljs.core.async.put_BANG_.call(null,dchan,true);
} else
{return null;
}
});})(cs,m,dchan,dctr))
;var c__5523__auto___10662 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5524__auto__ = (function (){var switch__5508__auto__ = (function (state_10576){var state_val_10577 = (state_10576[1]);if((state_val_10577 === 32))
{var inst_10444 = (state_10576[7]);var inst_10520 = (state_10576[8]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_10576,31,Object,null,30);var inst_10527 = cljs.core.async.put_BANG_.call(null,inst_10520,inst_10444,done);var state_10576__$1 = state_10576;var statearr_10578_10663 = state_10576__$1;(statearr_10578_10663[2] = inst_10527);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10576__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10577 === 1))
{var state_10576__$1 = state_10576;var statearr_10579_10664 = state_10576__$1;(statearr_10579_10664[2] = null);
(statearr_10579_10664[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10577 === 33))
{var inst_10533 = (state_10576[9]);var inst_10535 = cljs.core.chunked_seq_QMARK_.call(null,inst_10533);var state_10576__$1 = state_10576;if(inst_10535)
{var statearr_10580_10665 = state_10576__$1;(statearr_10580_10665[1] = 36);
} else
{var statearr_10581_10666 = state_10576__$1;(statearr_10581_10666[1] = 37);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10577 === 2))
{var state_10576__$1 = state_10576;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10576__$1,4,ch);
} else
{if((state_val_10577 === 34))
{var state_10576__$1 = state_10576;var statearr_10582_10667 = state_10576__$1;(statearr_10582_10667[2] = null);
(statearr_10582_10667[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10577 === 3))
{var inst_10574 = (state_10576[2]);var state_10576__$1 = state_10576;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10576__$1,inst_10574);
} else
{if((state_val_10577 === 35))
{var inst_10558 = (state_10576[2]);var state_10576__$1 = state_10576;var statearr_10583_10668 = state_10576__$1;(statearr_10583_10668[2] = inst_10558);
(statearr_10583_10668[1] = 29);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10577 === 4))
{var inst_10444 = (state_10576[7]);var inst_10444__$1 = (state_10576[2]);var inst_10445 = (inst_10444__$1 == null);var state_10576__$1 = (function (){var statearr_10584 = state_10576;(statearr_10584[7] = inst_10444__$1);
return statearr_10584;
})();if(cljs.core.truth_(inst_10445))
{var statearr_10585_10669 = state_10576__$1;(statearr_10585_10669[1] = 5);
} else
{var statearr_10586_10670 = state_10576__$1;(statearr_10586_10670[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10577 === 36))
{var inst_10533 = (state_10576[9]);var inst_10537 = cljs.core.chunk_first.call(null,inst_10533);var inst_10538 = cljs.core.chunk_rest.call(null,inst_10533);var inst_10539 = cljs.core.count.call(null,inst_10537);var inst_10512 = inst_10538;var inst_10513 = inst_10537;var inst_10514 = inst_10539;var inst_10515 = 0;var state_10576__$1 = (function (){var statearr_10587 = state_10576;(statearr_10587[10] = inst_10512);
(statearr_10587[11] = inst_10513);
(statearr_10587[12] = inst_10515);
(statearr_10587[13] = inst_10514);
return statearr_10587;
})();var statearr_10588_10671 = state_10576__$1;(statearr_10588_10671[2] = null);
(statearr_10588_10671[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10577 === 5))
{var inst_10451 = cljs.core.deref.call(null,cs);var inst_10452 = cljs.core.seq.call(null,inst_10451);var inst_10453 = inst_10452;var inst_10454 = null;var inst_10455 = 0;var inst_10456 = 0;var state_10576__$1 = (function (){var statearr_10589 = state_10576;(statearr_10589[14] = inst_10454);
(statearr_10589[15] = inst_10453);
(statearr_10589[16] = inst_10455);
(statearr_10589[17] = inst_10456);
return statearr_10589;
})();var statearr_10590_10672 = state_10576__$1;(statearr_10590_10672[2] = null);
(statearr_10590_10672[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10577 === 37))
{var inst_10533 = (state_10576[9]);var inst_10542 = cljs.core.first.call(null,inst_10533);var state_10576__$1 = (function (){var statearr_10591 = state_10576;(statearr_10591[18] = inst_10542);
return statearr_10591;
})();var statearr_10592_10673 = state_10576__$1;(statearr_10592_10673[2] = null);
(statearr_10592_10673[1] = 41);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10577 === 6))
{var inst_10504 = (state_10576[19]);var inst_10503 = cljs.core.deref.call(null,cs);var inst_10504__$1 = cljs.core.keys.call(null,inst_10503);var inst_10505 = cljs.core.count.call(null,inst_10504__$1);var inst_10506 = cljs.core.reset_BANG_.call(null,dctr,inst_10505);var inst_10511 = cljs.core.seq.call(null,inst_10504__$1);var inst_10512 = inst_10511;var inst_10513 = null;var inst_10514 = 0;var inst_10515 = 0;var state_10576__$1 = (function (){var statearr_10593 = state_10576;(statearr_10593[19] = inst_10504__$1);
(statearr_10593[20] = inst_10506);
(statearr_10593[10] = inst_10512);
(statearr_10593[11] = inst_10513);
(statearr_10593[12] = inst_10515);
(statearr_10593[13] = inst_10514);
return statearr_10593;
})();var statearr_10594_10674 = state_10576__$1;(statearr_10594_10674[2] = null);
(statearr_10594_10674[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10577 === 38))
{var inst_10555 = (state_10576[2]);var state_10576__$1 = state_10576;var statearr_10595_10675 = state_10576__$1;(statearr_10595_10675[2] = inst_10555);
(statearr_10595_10675[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10577 === 7))
{var inst_10572 = (state_10576[2]);var state_10576__$1 = state_10576;var statearr_10596_10676 = state_10576__$1;(statearr_10596_10676[2] = inst_10572);
(statearr_10596_10676[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10577 === 39))
{var inst_10533 = (state_10576[9]);var inst_10551 = (state_10576[2]);var inst_10552 = cljs.core.next.call(null,inst_10533);var inst_10512 = inst_10552;var inst_10513 = null;var inst_10514 = 0;var inst_10515 = 0;var state_10576__$1 = (function (){var statearr_10597 = state_10576;(statearr_10597[10] = inst_10512);
(statearr_10597[11] = inst_10513);
(statearr_10597[12] = inst_10515);
(statearr_10597[13] = inst_10514);
(statearr_10597[21] = inst_10551);
return statearr_10597;
})();var statearr_10598_10677 = state_10576__$1;(statearr_10598_10677[2] = null);
(statearr_10598_10677[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10577 === 8))
{var inst_10455 = (state_10576[16]);var inst_10456 = (state_10576[17]);var inst_10458 = (inst_10456 < inst_10455);var inst_10459 = inst_10458;var state_10576__$1 = state_10576;if(cljs.core.truth_(inst_10459))
{var statearr_10599_10678 = state_10576__$1;(statearr_10599_10678[1] = 10);
} else
{var statearr_10600_10679 = state_10576__$1;(statearr_10600_10679[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10577 === 40))
{var inst_10542 = (state_10576[18]);var inst_10543 = (state_10576[2]);var inst_10544 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_10545 = cljs.core.async.untap_STAR_.call(null,m,inst_10542);var state_10576__$1 = (function (){var statearr_10601 = state_10576;(statearr_10601[22] = inst_10543);
(statearr_10601[23] = inst_10544);
return statearr_10601;
})();var statearr_10602_10680 = state_10576__$1;(statearr_10602_10680[2] = inst_10545);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10576__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10577 === 9))
{var inst_10501 = (state_10576[2]);var state_10576__$1 = state_10576;var statearr_10603_10681 = state_10576__$1;(statearr_10603_10681[2] = inst_10501);
(statearr_10603_10681[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10577 === 41))
{var inst_10444 = (state_10576[7]);var inst_10542 = (state_10576[18]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_10576,40,Object,null,39);var inst_10549 = cljs.core.async.put_BANG_.call(null,inst_10542,inst_10444,done);var state_10576__$1 = state_10576;var statearr_10604_10682 = state_10576__$1;(statearr_10604_10682[2] = inst_10549);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10576__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10577 === 10))
{var inst_10454 = (state_10576[14]);var inst_10456 = (state_10576[17]);var inst_10462 = cljs.core._nth.call(null,inst_10454,inst_10456);var inst_10463 = cljs.core.nth.call(null,inst_10462,0,null);var inst_10464 = cljs.core.nth.call(null,inst_10462,1,null);var state_10576__$1 = (function (){var statearr_10605 = state_10576;(statearr_10605[24] = inst_10463);
return statearr_10605;
})();if(cljs.core.truth_(inst_10464))
{var statearr_10606_10683 = state_10576__$1;(statearr_10606_10683[1] = 13);
} else
{var statearr_10607_10684 = state_10576__$1;(statearr_10607_10684[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10577 === 42))
{var state_10576__$1 = state_10576;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10576__$1,45,dchan);
} else
{if((state_val_10577 === 11))
{var inst_10453 = (state_10576[15]);var inst_10473 = (state_10576[25]);var inst_10473__$1 = cljs.core.seq.call(null,inst_10453);var state_10576__$1 = (function (){var statearr_10608 = state_10576;(statearr_10608[25] = inst_10473__$1);
return statearr_10608;
})();if(inst_10473__$1)
{var statearr_10609_10685 = state_10576__$1;(statearr_10609_10685[1] = 16);
} else
{var statearr_10610_10686 = state_10576__$1;(statearr_10610_10686[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10577 === 43))
{var state_10576__$1 = state_10576;var statearr_10611_10687 = state_10576__$1;(statearr_10611_10687[2] = null);
(statearr_10611_10687[1] = 44);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10577 === 12))
{var inst_10499 = (state_10576[2]);var state_10576__$1 = state_10576;var statearr_10612_10688 = state_10576__$1;(statearr_10612_10688[2] = inst_10499);
(statearr_10612_10688[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10577 === 44))
{var inst_10569 = (state_10576[2]);var state_10576__$1 = (function (){var statearr_10613 = state_10576;(statearr_10613[26] = inst_10569);
return statearr_10613;
})();var statearr_10614_10689 = state_10576__$1;(statearr_10614_10689[2] = null);
(statearr_10614_10689[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10577 === 13))
{var inst_10463 = (state_10576[24]);var inst_10466 = cljs.core.async.close_BANG_.call(null,inst_10463);var state_10576__$1 = state_10576;var statearr_10615_10690 = state_10576__$1;(statearr_10615_10690[2] = inst_10466);
(statearr_10615_10690[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10577 === 45))
{var inst_10566 = (state_10576[2]);var state_10576__$1 = state_10576;var statearr_10619_10691 = state_10576__$1;(statearr_10619_10691[2] = inst_10566);
(statearr_10619_10691[1] = 44);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10577 === 14))
{var state_10576__$1 = state_10576;var statearr_10620_10692 = state_10576__$1;(statearr_10620_10692[2] = null);
(statearr_10620_10692[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10577 === 15))
{var inst_10454 = (state_10576[14]);var inst_10453 = (state_10576[15]);var inst_10455 = (state_10576[16]);var inst_10456 = (state_10576[17]);var inst_10469 = (state_10576[2]);var inst_10470 = (inst_10456 + 1);var tmp10616 = inst_10454;var tmp10617 = inst_10453;var tmp10618 = inst_10455;var inst_10453__$1 = tmp10617;var inst_10454__$1 = tmp10616;var inst_10455__$1 = tmp10618;var inst_10456__$1 = inst_10470;var state_10576__$1 = (function (){var statearr_10621 = state_10576;(statearr_10621[14] = inst_10454__$1);
(statearr_10621[15] = inst_10453__$1);
(statearr_10621[27] = inst_10469);
(statearr_10621[16] = inst_10455__$1);
(statearr_10621[17] = inst_10456__$1);
return statearr_10621;
})();var statearr_10622_10693 = state_10576__$1;(statearr_10622_10693[2] = null);
(statearr_10622_10693[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10577 === 16))
{var inst_10473 = (state_10576[25]);var inst_10475 = cljs.core.chunked_seq_QMARK_.call(null,inst_10473);var state_10576__$1 = state_10576;if(inst_10475)
{var statearr_10623_10694 = state_10576__$1;(statearr_10623_10694[1] = 19);
} else
{var statearr_10624_10695 = state_10576__$1;(statearr_10624_10695[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10577 === 17))
{var state_10576__$1 = state_10576;var statearr_10625_10696 = state_10576__$1;(statearr_10625_10696[2] = null);
(statearr_10625_10696[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10577 === 18))
{var inst_10497 = (state_10576[2]);var state_10576__$1 = state_10576;var statearr_10626_10697 = state_10576__$1;(statearr_10626_10697[2] = inst_10497);
(statearr_10626_10697[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10577 === 19))
{var inst_10473 = (state_10576[25]);var inst_10477 = cljs.core.chunk_first.call(null,inst_10473);var inst_10478 = cljs.core.chunk_rest.call(null,inst_10473);var inst_10479 = cljs.core.count.call(null,inst_10477);var inst_10453 = inst_10478;var inst_10454 = inst_10477;var inst_10455 = inst_10479;var inst_10456 = 0;var state_10576__$1 = (function (){var statearr_10627 = state_10576;(statearr_10627[14] = inst_10454);
(statearr_10627[15] = inst_10453);
(statearr_10627[16] = inst_10455);
(statearr_10627[17] = inst_10456);
return statearr_10627;
})();var statearr_10628_10698 = state_10576__$1;(statearr_10628_10698[2] = null);
(statearr_10628_10698[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10577 === 20))
{var inst_10473 = (state_10576[25]);var inst_10483 = cljs.core.first.call(null,inst_10473);var inst_10484 = cljs.core.nth.call(null,inst_10483,0,null);var inst_10485 = cljs.core.nth.call(null,inst_10483,1,null);var state_10576__$1 = (function (){var statearr_10629 = state_10576;(statearr_10629[28] = inst_10484);
return statearr_10629;
})();if(cljs.core.truth_(inst_10485))
{var statearr_10630_10699 = state_10576__$1;(statearr_10630_10699[1] = 22);
} else
{var statearr_10631_10700 = state_10576__$1;(statearr_10631_10700[1] = 23);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10577 === 21))
{var inst_10494 = (state_10576[2]);var state_10576__$1 = state_10576;var statearr_10632_10701 = state_10576__$1;(statearr_10632_10701[2] = inst_10494);
(statearr_10632_10701[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10577 === 22))
{var inst_10484 = (state_10576[28]);var inst_10487 = cljs.core.async.close_BANG_.call(null,inst_10484);var state_10576__$1 = state_10576;var statearr_10633_10702 = state_10576__$1;(statearr_10633_10702[2] = inst_10487);
(statearr_10633_10702[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10577 === 23))
{var state_10576__$1 = state_10576;var statearr_10634_10703 = state_10576__$1;(statearr_10634_10703[2] = null);
(statearr_10634_10703[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10577 === 24))
{var inst_10473 = (state_10576[25]);var inst_10490 = (state_10576[2]);var inst_10491 = cljs.core.next.call(null,inst_10473);var inst_10453 = inst_10491;var inst_10454 = null;var inst_10455 = 0;var inst_10456 = 0;var state_10576__$1 = (function (){var statearr_10635 = state_10576;(statearr_10635[14] = inst_10454);
(statearr_10635[15] = inst_10453);
(statearr_10635[29] = inst_10490);
(statearr_10635[16] = inst_10455);
(statearr_10635[17] = inst_10456);
return statearr_10635;
})();var statearr_10636_10704 = state_10576__$1;(statearr_10636_10704[2] = null);
(statearr_10636_10704[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10577 === 25))
{var inst_10515 = (state_10576[12]);var inst_10514 = (state_10576[13]);var inst_10517 = (inst_10515 < inst_10514);var inst_10518 = inst_10517;var state_10576__$1 = state_10576;if(cljs.core.truth_(inst_10518))
{var statearr_10637_10705 = state_10576__$1;(statearr_10637_10705[1] = 27);
} else
{var statearr_10638_10706 = state_10576__$1;(statearr_10638_10706[1] = 28);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10577 === 26))
{var inst_10504 = (state_10576[19]);var inst_10562 = (state_10576[2]);var inst_10563 = cljs.core.seq.call(null,inst_10504);var state_10576__$1 = (function (){var statearr_10639 = state_10576;(statearr_10639[30] = inst_10562);
return statearr_10639;
})();if(inst_10563)
{var statearr_10640_10707 = state_10576__$1;(statearr_10640_10707[1] = 42);
} else
{var statearr_10641_10708 = state_10576__$1;(statearr_10641_10708[1] = 43);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10577 === 27))
{var inst_10513 = (state_10576[11]);var inst_10515 = (state_10576[12]);var inst_10520 = cljs.core._nth.call(null,inst_10513,inst_10515);var state_10576__$1 = (function (){var statearr_10642 = state_10576;(statearr_10642[8] = inst_10520);
return statearr_10642;
})();var statearr_10643_10709 = state_10576__$1;(statearr_10643_10709[2] = null);
(statearr_10643_10709[1] = 32);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10577 === 28))
{var inst_10512 = (state_10576[10]);var inst_10533 = (state_10576[9]);var inst_10533__$1 = cljs.core.seq.call(null,inst_10512);var state_10576__$1 = (function (){var statearr_10647 = state_10576;(statearr_10647[9] = inst_10533__$1);
return statearr_10647;
})();if(inst_10533__$1)
{var statearr_10648_10710 = state_10576__$1;(statearr_10648_10710[1] = 33);
} else
{var statearr_10649_10711 = state_10576__$1;(statearr_10649_10711[1] = 34);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10577 === 29))
{var inst_10560 = (state_10576[2]);var state_10576__$1 = state_10576;var statearr_10650_10712 = state_10576__$1;(statearr_10650_10712[2] = inst_10560);
(statearr_10650_10712[1] = 26);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10577 === 30))
{var inst_10512 = (state_10576[10]);var inst_10513 = (state_10576[11]);var inst_10515 = (state_10576[12]);var inst_10514 = (state_10576[13]);var inst_10529 = (state_10576[2]);var inst_10530 = (inst_10515 + 1);var tmp10644 = inst_10512;var tmp10645 = inst_10513;var tmp10646 = inst_10514;var inst_10512__$1 = tmp10644;var inst_10513__$1 = tmp10645;var inst_10514__$1 = tmp10646;var inst_10515__$1 = inst_10530;var state_10576__$1 = (function (){var statearr_10651 = state_10576;(statearr_10651[10] = inst_10512__$1);
(statearr_10651[11] = inst_10513__$1);
(statearr_10651[12] = inst_10515__$1);
(statearr_10651[13] = inst_10514__$1);
(statearr_10651[31] = inst_10529);
return statearr_10651;
})();var statearr_10652_10713 = state_10576__$1;(statearr_10652_10713[2] = null);
(statearr_10652_10713[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10577 === 31))
{var inst_10520 = (state_10576[8]);var inst_10521 = (state_10576[2]);var inst_10522 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_10523 = cljs.core.async.untap_STAR_.call(null,m,inst_10520);var state_10576__$1 = (function (){var statearr_10653 = state_10576;(statearr_10653[32] = inst_10521);
(statearr_10653[33] = inst_10522);
return statearr_10653;
})();var statearr_10654_10714 = state_10576__$1;(statearr_10654_10714[2] = inst_10523);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10576__$1);
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
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
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
var state_machine__5509__auto____0 = (function (){var statearr_10658 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_10658[0] = state_machine__5509__auto__);
(statearr_10658[1] = 1);
return statearr_10658;
});
var state_machine__5509__auto____1 = (function (state_10576){while(true){
var ret_value__5510__auto__ = (function (){try{while(true){
var result__5511__auto__ = switch__5508__auto__.call(null,state_10576);if(cljs.core.keyword_identical_QMARK_.call(null,result__5511__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5511__auto__;
}
break;
}
}catch (e10659){if((e10659 instanceof Object))
{var ex__5512__auto__ = e10659;var statearr_10660_10715 = state_10576;(statearr_10660_10715[5] = ex__5512__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10576);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e10659;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5510__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__10716 = state_10576;
state_10576 = G__10716;
continue;
}
} else
{return ret_value__5510__auto__;
}
break;
}
});
state_machine__5509__auto__ = function(state_10576){
switch(arguments.length){
case 0:
return state_machine__5509__auto____0.call(this);
case 1:
return state_machine__5509__auto____1.call(this,state_10576);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5509__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5509__auto____0;
state_machine__5509__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5509__auto____1;
return state_machine__5509__auto__;
})()
;})(switch__5508__auto__))
})();var state__5525__auto__ = (function (){var statearr_10661 = f__5524__auto__.call(null);(statearr_10661[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5523__auto___10662);
return statearr_10661;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5525__auto__);
}));
return m;
});
/**
* Copies the mult source onto the supplied channel.
* 
* By default the channel will be closed when the source closes,
* but can be determined by the close? parameter.
*/
cljs.core.async.tap = (function() {
var tap = null;
var tap__2 = (function (mult,ch){return tap.call(null,mult,ch,true);
});
var tap__3 = (function (mult,ch,close_QMARK_){cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);
return ch;
});
tap = function(mult,ch,close_QMARK_){
switch(arguments.length){
case 2:
return tap__2.call(this,mult,ch);
case 3:
return tap__3.call(this,mult,ch,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
tap.cljs$core$IFn$_invoke$arity$2 = tap__2;
tap.cljs$core$IFn$_invoke$arity$3 = tap__3;
return tap;
})()
;
/**
* Disconnects a target channel from a mult
*/
cljs.core.async.untap = (function untap(mult,ch){return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
* Disconnects all target channels from a mult
*/
cljs.core.async.untap_all = (function untap_all(mult){return cljs.core.async.untap_all_STAR_.call(null,mult);
});
cljs.core.async.Mix = (function (){var obj10718 = {};return obj10718;
})();
cljs.core.async.admix_STAR_ = (function admix_STAR_(m,ch){if((function (){var and__3396__auto__ = m;if(and__3396__auto__)
{return m.cljs$core$async$Mix$admix_STAR_$arity$2;
} else
{return and__3396__auto__;
}
})())
{return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else
{var x__4029__auto__ = (((m == null))?null:m);return (function (){var or__3408__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4029__auto__)]);if(or__3408__auto__)
{return or__3408__auto__;
} else
{var or__3408__auto____$1 = (cljs.core.async.admix_STAR_["_"]);if(or__3408__auto____$1)
{return or__3408__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.unmix_STAR_ = (function unmix_STAR_(m,ch){if((function (){var and__3396__auto__ = m;if(and__3396__auto__)
{return m.cljs$core$async$Mix$unmix_STAR_$arity$2;
} else
{return and__3396__auto__;
}
})())
{return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else
{var x__4029__auto__ = (((m == null))?null:m);return (function (){var or__3408__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4029__auto__)]);if(or__3408__auto__)
{return or__3408__auto__;
} else
{var or__3408__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);if(or__3408__auto____$1)
{return or__3408__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.unmix_all_STAR_ = (function unmix_all_STAR_(m){if((function (){var and__3396__auto__ = m;if(and__3396__auto__)
{return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1;
} else
{return and__3396__auto__;
}
})())
{return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else
{var x__4029__auto__ = (((m == null))?null:m);return (function (){var or__3408__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4029__auto__)]);if(or__3408__auto__)
{return or__3408__auto__;
} else
{var or__3408__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);if(or__3408__auto____$1)
{return or__3408__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
})().call(null,m);
}
});
cljs.core.async.toggle_STAR_ = (function toggle_STAR_(m,state_map){if((function (){var and__3396__auto__ = m;if(and__3396__auto__)
{return m.cljs$core$async$Mix$toggle_STAR_$arity$2;
} else
{return and__3396__auto__;
}
})())
{return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else
{var x__4029__auto__ = (((m == null))?null:m);return (function (){var or__3408__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4029__auto__)]);if(or__3408__auto__)
{return or__3408__auto__;
} else
{var or__3408__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);if(or__3408__auto____$1)
{return or__3408__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
})().call(null,m,state_map);
}
});
cljs.core.async.solo_mode_STAR_ = (function solo_mode_STAR_(m,mode){if((function (){var and__3396__auto__ = m;if(and__3396__auto__)
{return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2;
} else
{return and__3396__auto__;
}
})())
{return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else
{var x__4029__auto__ = (((m == null))?null:m);return (function (){var or__3408__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4029__auto__)]);if(or__3408__auto__)
{return or__3408__auto__;
} else
{var or__3408__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);if(or__3408__auto____$1)
{return or__3408__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
})().call(null,m,mode);
}
});
/**
* Creates and returns a mix of one or more input channels which will
* be put on the supplied out channel. Input sources can be added to
* the mix with 'admix', and removed with 'unmix'. A mix supports
* soloing, muting and pausing multiple inputs atomically using
* 'toggle', and can solo using either muting or pausing as determined
* by 'solo-mode'.
* 
* Each channel can have zero or more boolean modes set via 'toggle':
* 
* :solo - when true, only this (ond other soloed) channel(s) will appear
* in the mix output channel. :mute and :pause states of soloed
* channels are ignored. If solo-mode is :mute, non-soloed
* channels are muted, if :pause, non-soloed channels are
* paused.
* 
* :mute - muted channels will have their contents consumed but not included in the mix
* :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
*/
cljs.core.async.mix = (function mix(out){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",1120344424),null,new cljs.core.Keyword(null,"mute","mute",1017267595),null], null), null);var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",1017440337));var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1017267595));var change = cljs.core.async.chan.call(null);var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){if(cljs.core.truth_(attr.call(null,v)))
{return cljs.core.conj.call(null,ret,c);
} else
{return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){var chs = cljs.core.deref.call(null,cs);var mode = cljs.core.deref.call(null,solo_mode);var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",1017440337),chs);var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",1120344424),chs);return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1123523302),solos,new cljs.core.Keyword(null,"mutes","mutes",1118168300),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1017267595),chs),new cljs.core.Keyword(null,"reads","reads",1122290959),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",1120344424))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;var m = (function (){if(typeof cljs.core.async.t10828 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t10828 = (function (pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,meta10829){
this.pick = pick;
this.out = out;
this.attrs = attrs;
this.cs = cs;
this.calc_state = calc_state;
this.solo_modes = solo_modes;
this.mix = mix;
this.changed = changed;
this.change = change;
this.solo_mode = solo_mode;
this.meta10829 = meta10829;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t10828.cljs$lang$type = true;
cljs.core.async.t10828.cljs$lang$ctorStr = "cljs.core.async/t10828";
cljs.core.async.t10828.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__3970__auto__,writer__3971__auto__,opt__3972__auto__){return cljs.core._write.call(null,writer__3971__auto__,"cljs.core.async/t10828");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t10828.prototype.cljs$core$async$Mix$ = true;
cljs.core.async.t10828.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t10828.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t10828.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t10828.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t10828.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.solo_modes.call(null,mode)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",-1162732933,null),new cljs.core.Symbol(null,"mode","mode",-1637174436,null))))].join('')));
}
cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t10828.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t10828.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t10828.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_10830){var self__ = this;
var _10830__$1 = this;return self__.meta10829;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t10828.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_10830,meta10829__$1){var self__ = this;
var _10830__$1 = this;return (new cljs.core.async.t10828(self__.pick,self__.out,self__.attrs,self__.cs,self__.calc_state,self__.solo_modes,self__.mix,self__.changed,self__.change,self__.solo_mode,meta10829__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.__GT_t10828 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t10828(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta10829){return (new cljs.core.async.t10828(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta10829));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
}
return (new cljs.core.async.t10828(pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,null));
})();var c__5523__auto___10937 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5524__auto__ = (function (){var switch__5508__auto__ = (function (state_10895){var state_val_10896 = (state_10895[1]);if((state_val_10896 === 1))
{var inst_10834 = (state_10895[7]);var inst_10834__$1 = calc_state.call(null);var inst_10835 = cljs.core.seq_QMARK_.call(null,inst_10834__$1);var state_10895__$1 = (function (){var statearr_10897 = state_10895;(statearr_10897[7] = inst_10834__$1);
return statearr_10897;
})();if(inst_10835)
{var statearr_10898_10938 = state_10895__$1;(statearr_10898_10938[1] = 2);
} else
{var statearr_10899_10939 = state_10895__$1;(statearr_10899_10939[1] = 3);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10896 === 2))
{var inst_10834 = (state_10895[7]);var inst_10837 = cljs.core.apply.call(null,cljs.core.hash_map,inst_10834);var state_10895__$1 = state_10895;var statearr_10900_10940 = state_10895__$1;(statearr_10900_10940[2] = inst_10837);
(statearr_10900_10940[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10896 === 3))
{var inst_10834 = (state_10895[7]);var state_10895__$1 = state_10895;var statearr_10901_10941 = state_10895__$1;(statearr_10901_10941[2] = inst_10834);
(statearr_10901_10941[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10896 === 4))
{var inst_10834 = (state_10895[7]);var inst_10840 = (state_10895[2]);var inst_10841 = cljs.core.get.call(null,inst_10840,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_10842 = cljs.core.get.call(null,inst_10840,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_10843 = cljs.core.get.call(null,inst_10840,new cljs.core.Keyword(null,"solos","solos",1123523302));var inst_10844 = inst_10834;var state_10895__$1 = (function (){var statearr_10902 = state_10895;(statearr_10902[8] = inst_10841);
(statearr_10902[9] = inst_10842);
(statearr_10902[10] = inst_10843);
(statearr_10902[11] = inst_10844);
return statearr_10902;
})();var statearr_10903_10942 = state_10895__$1;(statearr_10903_10942[2] = null);
(statearr_10903_10942[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10896 === 5))
{var inst_10844 = (state_10895[11]);var inst_10847 = cljs.core.seq_QMARK_.call(null,inst_10844);var state_10895__$1 = state_10895;if(inst_10847)
{var statearr_10904_10943 = state_10895__$1;(statearr_10904_10943[1] = 7);
} else
{var statearr_10905_10944 = state_10895__$1;(statearr_10905_10944[1] = 8);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10896 === 6))
{var inst_10893 = (state_10895[2]);var state_10895__$1 = state_10895;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10895__$1,inst_10893);
} else
{if((state_val_10896 === 7))
{var inst_10844 = (state_10895[11]);var inst_10849 = cljs.core.apply.call(null,cljs.core.hash_map,inst_10844);var state_10895__$1 = state_10895;var statearr_10906_10945 = state_10895__$1;(statearr_10906_10945[2] = inst_10849);
(statearr_10906_10945[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10896 === 8))
{var inst_10844 = (state_10895[11]);var state_10895__$1 = state_10895;var statearr_10907_10946 = state_10895__$1;(statearr_10907_10946[2] = inst_10844);
(statearr_10907_10946[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10896 === 9))
{var inst_10852 = (state_10895[12]);var inst_10852__$1 = (state_10895[2]);var inst_10853 = cljs.core.get.call(null,inst_10852__$1,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_10854 = cljs.core.get.call(null,inst_10852__$1,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_10855 = cljs.core.get.call(null,inst_10852__$1,new cljs.core.Keyword(null,"solos","solos",1123523302));var state_10895__$1 = (function (){var statearr_10908 = state_10895;(statearr_10908[13] = inst_10855);
(statearr_10908[12] = inst_10852__$1);
(statearr_10908[14] = inst_10854);
return statearr_10908;
})();return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_10895__$1,10,inst_10853);
} else
{if((state_val_10896 === 10))
{var inst_10859 = (state_10895[15]);var inst_10860 = (state_10895[16]);var inst_10858 = (state_10895[2]);var inst_10859__$1 = cljs.core.nth.call(null,inst_10858,0,null);var inst_10860__$1 = cljs.core.nth.call(null,inst_10858,1,null);var inst_10861 = (inst_10859__$1 == null);var inst_10862 = cljs.core._EQ_.call(null,inst_10860__$1,change);var inst_10863 = (inst_10861) || (inst_10862);var state_10895__$1 = (function (){var statearr_10909 = state_10895;(statearr_10909[15] = inst_10859__$1);
(statearr_10909[16] = inst_10860__$1);
return statearr_10909;
})();if(cljs.core.truth_(inst_10863))
{var statearr_10910_10947 = state_10895__$1;(statearr_10910_10947[1] = 11);
} else
{var statearr_10911_10948 = state_10895__$1;(statearr_10911_10948[1] = 12);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10896 === 11))
{var inst_10859 = (state_10895[15]);var inst_10865 = (inst_10859 == null);var state_10895__$1 = state_10895;if(cljs.core.truth_(inst_10865))
{var statearr_10912_10949 = state_10895__$1;(statearr_10912_10949[1] = 14);
} else
{var statearr_10913_10950 = state_10895__$1;(statearr_10913_10950[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10896 === 12))
{var inst_10855 = (state_10895[13]);var inst_10874 = (state_10895[17]);var inst_10860 = (state_10895[16]);var inst_10874__$1 = inst_10855.call(null,inst_10860);var state_10895__$1 = (function (){var statearr_10914 = state_10895;(statearr_10914[17] = inst_10874__$1);
return statearr_10914;
})();if(cljs.core.truth_(inst_10874__$1))
{var statearr_10915_10951 = state_10895__$1;(statearr_10915_10951[1] = 17);
} else
{var statearr_10916_10952 = state_10895__$1;(statearr_10916_10952[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10896 === 13))
{var inst_10891 = (state_10895[2]);var state_10895__$1 = state_10895;var statearr_10917_10953 = state_10895__$1;(statearr_10917_10953[2] = inst_10891);
(statearr_10917_10953[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10896 === 14))
{var inst_10860 = (state_10895[16]);var inst_10867 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_10860);var state_10895__$1 = state_10895;var statearr_10918_10954 = state_10895__$1;(statearr_10918_10954[2] = inst_10867);
(statearr_10918_10954[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10896 === 15))
{var state_10895__$1 = state_10895;var statearr_10919_10955 = state_10895__$1;(statearr_10919_10955[2] = null);
(statearr_10919_10955[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10896 === 16))
{var inst_10870 = (state_10895[2]);var inst_10871 = calc_state.call(null);var inst_10844 = inst_10871;var state_10895__$1 = (function (){var statearr_10920 = state_10895;(statearr_10920[18] = inst_10870);
(statearr_10920[11] = inst_10844);
return statearr_10920;
})();var statearr_10921_10956 = state_10895__$1;(statearr_10921_10956[2] = null);
(statearr_10921_10956[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10896 === 17))
{var inst_10874 = (state_10895[17]);var state_10895__$1 = state_10895;var statearr_10922_10957 = state_10895__$1;(statearr_10922_10957[2] = inst_10874);
(statearr_10922_10957[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10896 === 18))
{var inst_10855 = (state_10895[13]);var inst_10860 = (state_10895[16]);var inst_10854 = (state_10895[14]);var inst_10877 = cljs.core.empty_QMARK_.call(null,inst_10855);var inst_10878 = inst_10854.call(null,inst_10860);var inst_10879 = cljs.core.not.call(null,inst_10878);var inst_10880 = (inst_10877) && (inst_10879);var state_10895__$1 = state_10895;var statearr_10923_10958 = state_10895__$1;(statearr_10923_10958[2] = inst_10880);
(statearr_10923_10958[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10896 === 19))
{var inst_10882 = (state_10895[2]);var state_10895__$1 = state_10895;if(cljs.core.truth_(inst_10882))
{var statearr_10924_10959 = state_10895__$1;(statearr_10924_10959[1] = 20);
} else
{var statearr_10925_10960 = state_10895__$1;(statearr_10925_10960[1] = 21);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10896 === 20))
{var inst_10859 = (state_10895[15]);var state_10895__$1 = state_10895;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_10895__$1,23,out,inst_10859);
} else
{if((state_val_10896 === 21))
{var state_10895__$1 = state_10895;var statearr_10926_10961 = state_10895__$1;(statearr_10926_10961[2] = null);
(statearr_10926_10961[1] = 22);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10896 === 22))
{var inst_10852 = (state_10895[12]);var inst_10888 = (state_10895[2]);var inst_10844 = inst_10852;var state_10895__$1 = (function (){var statearr_10927 = state_10895;(statearr_10927[19] = inst_10888);
(statearr_10927[11] = inst_10844);
return statearr_10927;
})();var statearr_10928_10962 = state_10895__$1;(statearr_10928_10962[2] = null);
(statearr_10928_10962[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10896 === 23))
{var inst_10885 = (state_10895[2]);var state_10895__$1 = state_10895;var statearr_10929_10963 = state_10895__$1;(statearr_10929_10963[2] = inst_10885);
(statearr_10929_10963[1] = 22);
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
}
}
}
}
}
}
}
}
}
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
var state_machine__5509__auto____0 = (function (){var statearr_10933 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_10933[0] = state_machine__5509__auto__);
(statearr_10933[1] = 1);
return statearr_10933;
});
var state_machine__5509__auto____1 = (function (state_10895){while(true){
var ret_value__5510__auto__ = (function (){try{while(true){
var result__5511__auto__ = switch__5508__auto__.call(null,state_10895);if(cljs.core.keyword_identical_QMARK_.call(null,result__5511__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5511__auto__;
}
break;
}
}catch (e10934){if((e10934 instanceof Object))
{var ex__5512__auto__ = e10934;var statearr_10935_10964 = state_10895;(statearr_10935_10964[5] = ex__5512__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10895);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e10934;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5510__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__10965 = state_10895;
state_10895 = G__10965;
continue;
}
} else
{return ret_value__5510__auto__;
}
break;
}
});
state_machine__5509__auto__ = function(state_10895){
switch(arguments.length){
case 0:
return state_machine__5509__auto____0.call(this);
case 1:
return state_machine__5509__auto____1.call(this,state_10895);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5509__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5509__auto____0;
state_machine__5509__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5509__auto____1;
return state_machine__5509__auto__;
})()
;})(switch__5508__auto__))
})();var state__5525__auto__ = (function (){var statearr_10936 = f__5524__auto__.call(null);(statearr_10936[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5523__auto___10937);
return statearr_10936;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5525__auto__);
}));
return m;
});
/**
* Adds ch as an input to the mix
*/
cljs.core.async.admix = (function admix(mix,ch){return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
* Removes ch as an input to the mix
*/
cljs.core.async.unmix = (function unmix(mix,ch){return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
* removes all inputs from the mix
*/
cljs.core.async.unmix_all = (function unmix_all(mix){return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
* Atomically sets the state(s) of one or more channels in a mix. The
* state map is a map of channels -> channel-state-map. A
* channel-state-map is a map of attrs -> boolean, where attr is one or
* more of :mute, :pause or :solo. Any states supplied are merged with
* the current state.
* 
* Note that channels can be added to a mix via toggle, which can be
* used to add channels in a particular (e.g. paused) state.
*/
cljs.core.async.toggle = (function toggle(mix,state_map){return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
* Sets the solo mode of the mix. mode must be one of :mute or :pause
*/
cljs.core.async.solo_mode = (function solo_mode(mix,mode){return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});
cljs.core.async.Pub = (function (){var obj10967 = {};return obj10967;
})();
cljs.core.async.sub_STAR_ = (function sub_STAR_(p,v,ch,close_QMARK_){if((function (){var and__3396__auto__ = p;if(and__3396__auto__)
{return p.cljs$core$async$Pub$sub_STAR_$arity$4;
} else
{return and__3396__auto__;
}
})())
{return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else
{var x__4029__auto__ = (((p == null))?null:p);return (function (){var or__3408__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4029__auto__)]);if(or__3408__auto__)
{return or__3408__auto__;
} else
{var or__3408__auto____$1 = (cljs.core.async.sub_STAR_["_"]);if(or__3408__auto____$1)
{return or__3408__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
})().call(null,p,v,ch,close_QMARK_);
}
});
cljs.core.async.unsub_STAR_ = (function unsub_STAR_(p,v,ch){if((function (){var and__3396__auto__ = p;if(and__3396__auto__)
{return p.cljs$core$async$Pub$unsub_STAR_$arity$3;
} else
{return and__3396__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else
{var x__4029__auto__ = (((p == null))?null:p);return (function (){var or__3408__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4029__auto__)]);if(or__3408__auto__)
{return or__3408__auto__;
} else
{var or__3408__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);if(or__3408__auto____$1)
{return or__3408__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
})().call(null,p,v,ch);
}
});
cljs.core.async.unsub_all_STAR_ = (function() {
var unsub_all_STAR_ = null;
var unsub_all_STAR___1 = (function (p){if((function (){var and__3396__auto__ = p;if(and__3396__auto__)
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1;
} else
{return and__3396__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else
{var x__4029__auto__ = (((p == null))?null:p);return (function (){var or__3408__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4029__auto__)]);if(or__3408__auto__)
{return or__3408__auto__;
} else
{var or__3408__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);if(or__3408__auto____$1)
{return or__3408__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p);
}
});
var unsub_all_STAR___2 = (function (p,v){if((function (){var and__3396__auto__ = p;if(and__3396__auto__)
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2;
} else
{return and__3396__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else
{var x__4029__auto__ = (((p == null))?null:p);return (function (){var or__3408__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4029__auto__)]);if(or__3408__auto__)
{return or__3408__auto__;
} else
{var or__3408__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);if(or__3408__auto____$1)
{return or__3408__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p,v);
}
});
unsub_all_STAR_ = function(p,v){
switch(arguments.length){
case 1:
return unsub_all_STAR___1.call(this,p);
case 2:
return unsub_all_STAR___2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = unsub_all_STAR___1;
unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = unsub_all_STAR___2;
return unsub_all_STAR_;
})()
;
/**
* Creates and returns a pub(lication) of the supplied channel,
* partitioned into topics by the topic-fn. topic-fn will be applied to
* each value on the channel and the result will determine the 'topic'
* on which that value will be put. Channels can be subscribed to
* receive copies of topics using 'sub', and unsubscribed using
* 'unsub'. Each topic will be handled by an internal mult on a
* dedicated channel. By default these internal channels are
* unbuffered, but a buf-fn can be supplied which, given a topic,
* creates a buffer with desired properties.
* 
* Each item is distributed to all subs in parallel and synchronously,
* i.e. each sub must accept before the next item is distributed. Use
* buffering/windowing to prevent slow subs from holding up the pub.
* 
* Items received when there are no matching subs get dropped.
* 
* Note that if buf-fns are used then each topic is handled
* asynchronously, i.e. if a channel is subscribed to more than one
* topic it should not expect them to be interleaved identically with
* the source.
*/
cljs.core.async.pub = (function() {
var pub = null;
var pub__2 = (function (ch,topic_fn){return pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});
var pub__3 = (function (ch,topic_fn,buf_fn){var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var ensure_mult = ((function (mults){
return (function (topic){var or__3408__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);if(cljs.core.truth_(or__3408__auto__))
{return or__3408__auto__;
} else
{return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__3408__auto__,mults){
return (function (p1__10968_SHARP_){if(cljs.core.truth_(p1__10968_SHARP_.call(null,topic)))
{return p1__10968_SHARP_;
} else
{return cljs.core.assoc.call(null,p1__10968_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__3408__auto__,mults))
),topic);
}
});})(mults))
;var p = (function (){if(typeof cljs.core.async.t11093 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t11093 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta11094){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta11094 = meta11094;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t11093.cljs$lang$type = true;
cljs.core.async.t11093.cljs$lang$ctorStr = "cljs.core.async/t11093";
cljs.core.async.t11093.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__3970__auto__,writer__3971__auto__,opt__3972__auto__){return cljs.core._write.call(null,writer__3971__auto__,"cljs.core.async/t11093");
});})(mults,ensure_mult))
;
cljs.core.async.t11093.prototype.cljs$core$async$Pub$ = true;
cljs.core.async.t11093.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2,close_QMARK_){var self__ = this;
var p__$1 = this;var m = self__.ensure_mult.call(null,topic);return cljs.core.async.tap.call(null,m,ch__$2,close_QMARK_);
});})(mults,ensure_mult))
;
cljs.core.async.t11093.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2){var self__ = this;
var p__$1 = this;var temp__4092__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);if(cljs.core.truth_(temp__4092__auto__))
{var m = temp__4092__auto__;return cljs.core.async.untap.call(null,m,ch__$2);
} else
{return null;
}
});})(mults,ensure_mult))
;
cljs.core.async.t11093.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;
cljs.core.async.t11093.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){var self__ = this;
var ___$1 = this;return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;
cljs.core.async.t11093.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t11093.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(mults,ensure_mult))
;
cljs.core.async.t11093.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_11095){var self__ = this;
var _11095__$1 = this;return self__.meta11094;
});})(mults,ensure_mult))
;
cljs.core.async.t11093.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_11095,meta11094__$1){var self__ = this;
var _11095__$1 = this;return (new cljs.core.async.t11093(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta11094__$1));
});})(mults,ensure_mult))
;
cljs.core.async.__GT_t11093 = ((function (mults,ensure_mult){
return (function __GT_t11093(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta11094){return (new cljs.core.async.t11093(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta11094));
});})(mults,ensure_mult))
;
}
return (new cljs.core.async.t11093(ensure_mult,mults,buf_fn,topic_fn,ch,pub,null));
})();var c__5523__auto___11217 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5524__auto__ = (function (){var switch__5508__auto__ = (function (state_11169){var state_val_11170 = (state_11169[1]);if((state_val_11170 === 1))
{var state_11169__$1 = state_11169;var statearr_11171_11218 = state_11169__$1;(statearr_11171_11218[2] = null);
(statearr_11171_11218[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11170 === 2))
{var state_11169__$1 = state_11169;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11169__$1,4,ch);
} else
{if((state_val_11170 === 3))
{var inst_11167 = (state_11169[2]);var state_11169__$1 = state_11169;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11169__$1,inst_11167);
} else
{if((state_val_11170 === 4))
{var inst_11098 = (state_11169[7]);var inst_11098__$1 = (state_11169[2]);var inst_11099 = (inst_11098__$1 == null);var state_11169__$1 = (function (){var statearr_11172 = state_11169;(statearr_11172[7] = inst_11098__$1);
return statearr_11172;
})();if(cljs.core.truth_(inst_11099))
{var statearr_11173_11219 = state_11169__$1;(statearr_11173_11219[1] = 5);
} else
{var statearr_11174_11220 = state_11169__$1;(statearr_11174_11220[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11170 === 5))
{var inst_11105 = cljs.core.deref.call(null,mults);var inst_11106 = cljs.core.vals.call(null,inst_11105);var inst_11107 = cljs.core.seq.call(null,inst_11106);var inst_11108 = inst_11107;var inst_11109 = null;var inst_11110 = 0;var inst_11111 = 0;var state_11169__$1 = (function (){var statearr_11175 = state_11169;(statearr_11175[8] = inst_11109);
(statearr_11175[9] = inst_11108);
(statearr_11175[10] = inst_11110);
(statearr_11175[11] = inst_11111);
return statearr_11175;
})();var statearr_11176_11221 = state_11169__$1;(statearr_11176_11221[2] = null);
(statearr_11176_11221[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11170 === 6))
{var inst_11098 = (state_11169[7]);var inst_11146 = (state_11169[12]);var inst_11148 = (state_11169[13]);var inst_11146__$1 = topic_fn.call(null,inst_11098);var inst_11147 = cljs.core.deref.call(null,mults);var inst_11148__$1 = cljs.core.get.call(null,inst_11147,inst_11146__$1);var state_11169__$1 = (function (){var statearr_11177 = state_11169;(statearr_11177[12] = inst_11146__$1);
(statearr_11177[13] = inst_11148__$1);
return statearr_11177;
})();if(cljs.core.truth_(inst_11148__$1))
{var statearr_11178_11222 = state_11169__$1;(statearr_11178_11222[1] = 19);
} else
{var statearr_11179_11223 = state_11169__$1;(statearr_11179_11223[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11170 === 7))
{var inst_11165 = (state_11169[2]);var state_11169__$1 = state_11169;var statearr_11180_11224 = state_11169__$1;(statearr_11180_11224[2] = inst_11165);
(statearr_11180_11224[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11170 === 8))
{var inst_11110 = (state_11169[10]);var inst_11111 = (state_11169[11]);var inst_11113 = (inst_11111 < inst_11110);var inst_11114 = inst_11113;var state_11169__$1 = state_11169;if(cljs.core.truth_(inst_11114))
{var statearr_11184_11225 = state_11169__$1;(statearr_11184_11225[1] = 10);
} else
{var statearr_11185_11226 = state_11169__$1;(statearr_11185_11226[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11170 === 9))
{var inst_11144 = (state_11169[2]);var state_11169__$1 = state_11169;var statearr_11186_11227 = state_11169__$1;(statearr_11186_11227[2] = inst_11144);
(statearr_11186_11227[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11170 === 10))
{var inst_11109 = (state_11169[8]);var inst_11108 = (state_11169[9]);var inst_11110 = (state_11169[10]);var inst_11111 = (state_11169[11]);var inst_11116 = cljs.core._nth.call(null,inst_11109,inst_11111);var inst_11117 = cljs.core.async.muxch_STAR_.call(null,inst_11116);var inst_11118 = cljs.core.async.close_BANG_.call(null,inst_11117);var inst_11119 = (inst_11111 + 1);var tmp11181 = inst_11109;var tmp11182 = inst_11108;var tmp11183 = inst_11110;var inst_11108__$1 = tmp11182;var inst_11109__$1 = tmp11181;var inst_11110__$1 = tmp11183;var inst_11111__$1 = inst_11119;var state_11169__$1 = (function (){var statearr_11187 = state_11169;(statearr_11187[8] = inst_11109__$1);
(statearr_11187[9] = inst_11108__$1);
(statearr_11187[10] = inst_11110__$1);
(statearr_11187[14] = inst_11118);
(statearr_11187[11] = inst_11111__$1);
return statearr_11187;
})();var statearr_11188_11228 = state_11169__$1;(statearr_11188_11228[2] = null);
(statearr_11188_11228[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11170 === 11))
{var inst_11108 = (state_11169[9]);var inst_11122 = (state_11169[15]);var inst_11122__$1 = cljs.core.seq.call(null,inst_11108);var state_11169__$1 = (function (){var statearr_11189 = state_11169;(statearr_11189[15] = inst_11122__$1);
return statearr_11189;
})();if(inst_11122__$1)
{var statearr_11190_11229 = state_11169__$1;(statearr_11190_11229[1] = 13);
} else
{var statearr_11191_11230 = state_11169__$1;(statearr_11191_11230[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11170 === 12))
{var inst_11142 = (state_11169[2]);var state_11169__$1 = state_11169;var statearr_11192_11231 = state_11169__$1;(statearr_11192_11231[2] = inst_11142);
(statearr_11192_11231[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11170 === 13))
{var inst_11122 = (state_11169[15]);var inst_11124 = cljs.core.chunked_seq_QMARK_.call(null,inst_11122);var state_11169__$1 = state_11169;if(inst_11124)
{var statearr_11193_11232 = state_11169__$1;(statearr_11193_11232[1] = 16);
} else
{var statearr_11194_11233 = state_11169__$1;(statearr_11194_11233[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11170 === 14))
{var state_11169__$1 = state_11169;var statearr_11195_11234 = state_11169__$1;(statearr_11195_11234[2] = null);
(statearr_11195_11234[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11170 === 15))
{var inst_11140 = (state_11169[2]);var state_11169__$1 = state_11169;var statearr_11196_11235 = state_11169__$1;(statearr_11196_11235[2] = inst_11140);
(statearr_11196_11235[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11170 === 16))
{var inst_11122 = (state_11169[15]);var inst_11126 = cljs.core.chunk_first.call(null,inst_11122);var inst_11127 = cljs.core.chunk_rest.call(null,inst_11122);var inst_11128 = cljs.core.count.call(null,inst_11126);var inst_11108 = inst_11127;var inst_11109 = inst_11126;var inst_11110 = inst_11128;var inst_11111 = 0;var state_11169__$1 = (function (){var statearr_11197 = state_11169;(statearr_11197[8] = inst_11109);
(statearr_11197[9] = inst_11108);
(statearr_11197[10] = inst_11110);
(statearr_11197[11] = inst_11111);
return statearr_11197;
})();var statearr_11198_11236 = state_11169__$1;(statearr_11198_11236[2] = null);
(statearr_11198_11236[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11170 === 17))
{var inst_11122 = (state_11169[15]);var inst_11131 = cljs.core.first.call(null,inst_11122);var inst_11132 = cljs.core.async.muxch_STAR_.call(null,inst_11131);var inst_11133 = cljs.core.async.close_BANG_.call(null,inst_11132);var inst_11134 = cljs.core.next.call(null,inst_11122);var inst_11108 = inst_11134;var inst_11109 = null;var inst_11110 = 0;var inst_11111 = 0;var state_11169__$1 = (function (){var statearr_11199 = state_11169;(statearr_11199[8] = inst_11109);
(statearr_11199[9] = inst_11108);
(statearr_11199[16] = inst_11133);
(statearr_11199[10] = inst_11110);
(statearr_11199[11] = inst_11111);
return statearr_11199;
})();var statearr_11200_11237 = state_11169__$1;(statearr_11200_11237[2] = null);
(statearr_11200_11237[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11170 === 18))
{var inst_11137 = (state_11169[2]);var state_11169__$1 = state_11169;var statearr_11201_11238 = state_11169__$1;(statearr_11201_11238[2] = inst_11137);
(statearr_11201_11238[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11170 === 19))
{var state_11169__$1 = state_11169;var statearr_11202_11239 = state_11169__$1;(statearr_11202_11239[2] = null);
(statearr_11202_11239[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11170 === 20))
{var state_11169__$1 = state_11169;var statearr_11203_11240 = state_11169__$1;(statearr_11203_11240[2] = null);
(statearr_11203_11240[1] = 21);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11170 === 21))
{var inst_11162 = (state_11169[2]);var state_11169__$1 = (function (){var statearr_11204 = state_11169;(statearr_11204[17] = inst_11162);
return statearr_11204;
})();var statearr_11205_11241 = state_11169__$1;(statearr_11205_11241[2] = null);
(statearr_11205_11241[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11170 === 22))
{var inst_11159 = (state_11169[2]);var state_11169__$1 = state_11169;var statearr_11206_11242 = state_11169__$1;(statearr_11206_11242[2] = inst_11159);
(statearr_11206_11242[1] = 21);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11170 === 23))
{var inst_11146 = (state_11169[12]);var inst_11150 = (state_11169[2]);var inst_11151 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_11146);var state_11169__$1 = (function (){var statearr_11207 = state_11169;(statearr_11207[18] = inst_11150);
return statearr_11207;
})();var statearr_11208_11243 = state_11169__$1;(statearr_11208_11243[2] = inst_11151);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11169__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11170 === 24))
{var inst_11098 = (state_11169[7]);var inst_11148 = (state_11169[13]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_11169,23,Object,null,22);var inst_11155 = cljs.core.async.muxch_STAR_.call(null,inst_11148);var state_11169__$1 = state_11169;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11169__$1,25,inst_11155,inst_11098);
} else
{if((state_val_11170 === 25))
{var inst_11157 = (state_11169[2]);var state_11169__$1 = state_11169;var statearr_11209_11244 = state_11169__$1;(statearr_11209_11244[2] = inst_11157);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11169__$1);
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
}
}
}
}
}
}
}
}
}
}
}
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
var state_machine__5509__auto____0 = (function (){var statearr_11213 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_11213[0] = state_machine__5509__auto__);
(statearr_11213[1] = 1);
return statearr_11213;
});
var state_machine__5509__auto____1 = (function (state_11169){while(true){
var ret_value__5510__auto__ = (function (){try{while(true){
var result__5511__auto__ = switch__5508__auto__.call(null,state_11169);if(cljs.core.keyword_identical_QMARK_.call(null,result__5511__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5511__auto__;
}
break;
}
}catch (e11214){if((e11214 instanceof Object))
{var ex__5512__auto__ = e11214;var statearr_11215_11245 = state_11169;(statearr_11215_11245[5] = ex__5512__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11169);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e11214;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5510__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__11246 = state_11169;
state_11169 = G__11246;
continue;
}
} else
{return ret_value__5510__auto__;
}
break;
}
});
state_machine__5509__auto__ = function(state_11169){
switch(arguments.length){
case 0:
return state_machine__5509__auto____0.call(this);
case 1:
return state_machine__5509__auto____1.call(this,state_11169);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5509__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5509__auto____0;
state_machine__5509__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5509__auto____1;
return state_machine__5509__auto__;
})()
;})(switch__5508__auto__))
})();var state__5525__auto__ = (function (){var statearr_11216 = f__5524__auto__.call(null);(statearr_11216[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5523__auto___11217);
return statearr_11216;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5525__auto__);
}));
return p;
});
pub = function(ch,topic_fn,buf_fn){
switch(arguments.length){
case 2:
return pub__2.call(this,ch,topic_fn);
case 3:
return pub__3.call(this,ch,topic_fn,buf_fn);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
pub.cljs$core$IFn$_invoke$arity$2 = pub__2;
pub.cljs$core$IFn$_invoke$arity$3 = pub__3;
return pub;
})()
;
/**
* Subscribes a channel to a topic of a pub.
* 
* By default the channel will be closed when the source closes,
* but can be determined by the close? parameter.
*/
cljs.core.async.sub = (function() {
var sub = null;
var sub__3 = (function (p,topic,ch){return sub.call(null,p,topic,ch,true);
});
var sub__4 = (function (p,topic,ch,close_QMARK_){return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});
sub = function(p,topic,ch,close_QMARK_){
switch(arguments.length){
case 3:
return sub__3.call(this,p,topic,ch);
case 4:
return sub__4.call(this,p,topic,ch,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
sub.cljs$core$IFn$_invoke$arity$3 = sub__3;
sub.cljs$core$IFn$_invoke$arity$4 = sub__4;
return sub;
})()
;
/**
* Unsubscribes a channel from a topic of a pub
*/
cljs.core.async.unsub = (function unsub(p,topic,ch){return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
* Unsubscribes all channels from a pub, or a topic of a pub
*/
cljs.core.async.unsub_all = (function() {
var unsub_all = null;
var unsub_all__1 = (function (p){return cljs.core.async.unsub_all_STAR_.call(null,p);
});
var unsub_all__2 = (function (p,topic){return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});
unsub_all = function(p,topic){
switch(arguments.length){
case 1:
return unsub_all__1.call(this,p);
case 2:
return unsub_all__2.call(this,p,topic);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unsub_all.cljs$core$IFn$_invoke$arity$1 = unsub_all__1;
unsub_all.cljs$core$IFn$_invoke$arity$2 = unsub_all__2;
return unsub_all;
})()
;
/**
* Takes a function and a collection of source channels, and returns a
* channel which contains the values produced by applying f to the set
* of first items taken from each source channel, followed by applying
* f to the set of second items from each channel, until any one of the
* channels is closed, at which point the output channel will be
* closed. The returned channel will be unbuffered by default, or a
* buf-or-n can be supplied
*/
cljs.core.async.map = (function() {
var map = null;
var map__2 = (function (f,chs){return map.call(null,f,chs,null);
});
var map__3 = (function (f,chs,buf_or_n){var chs__$1 = cljs.core.vec.call(null,chs);var out = cljs.core.async.chan.call(null,buf_or_n);var cnt = cljs.core.count.call(null,chs__$1);var rets = cljs.core.object_array.call(null,cnt);var dchan = cljs.core.async.chan.call(null,1);var dctr = cljs.core.atom.call(null,null);var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){(rets[i] = ret);
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === 0))
{return cljs.core.async.put_BANG_.call(null,dchan,rets.slice(0));
} else
{return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));var c__5523__auto___11383 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5524__auto__ = (function (){var switch__5508__auto__ = (function (state_11353){var state_val_11354 = (state_11353[1]);if((state_val_11354 === 1))
{var state_11353__$1 = state_11353;var statearr_11355_11384 = state_11353__$1;(statearr_11355_11384[2] = null);
(statearr_11355_11384[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11354 === 2))
{var inst_11316 = cljs.core.reset_BANG_.call(null,dctr,cnt);var inst_11317 = 0;var state_11353__$1 = (function (){var statearr_11356 = state_11353;(statearr_11356[7] = inst_11317);
(statearr_11356[8] = inst_11316);
return statearr_11356;
})();var statearr_11357_11385 = state_11353__$1;(statearr_11357_11385[2] = null);
(statearr_11357_11385[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11354 === 3))
{var inst_11351 = (state_11353[2]);var state_11353__$1 = state_11353;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11353__$1,inst_11351);
} else
{if((state_val_11354 === 4))
{var inst_11317 = (state_11353[7]);var inst_11319 = (inst_11317 < cnt);var state_11353__$1 = state_11353;if(cljs.core.truth_(inst_11319))
{var statearr_11358_11386 = state_11353__$1;(statearr_11358_11386[1] = 6);
} else
{var statearr_11359_11387 = state_11353__$1;(statearr_11359_11387[1] = 7);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11354 === 5))
{var inst_11337 = (state_11353[2]);var state_11353__$1 = (function (){var statearr_11360 = state_11353;(statearr_11360[9] = inst_11337);
return statearr_11360;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11353__$1,12,dchan);
} else
{if((state_val_11354 === 6))
{var state_11353__$1 = state_11353;var statearr_11361_11388 = state_11353__$1;(statearr_11361_11388[2] = null);
(statearr_11361_11388[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11354 === 7))
{var state_11353__$1 = state_11353;var statearr_11362_11389 = state_11353__$1;(statearr_11362_11389[2] = null);
(statearr_11362_11389[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11354 === 8))
{var inst_11335 = (state_11353[2]);var state_11353__$1 = state_11353;var statearr_11363_11390 = state_11353__$1;(statearr_11363_11390[2] = inst_11335);
(statearr_11363_11390[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11354 === 9))
{var inst_11317 = (state_11353[7]);var inst_11330 = (state_11353[2]);var inst_11331 = (inst_11317 + 1);var inst_11317__$1 = inst_11331;var state_11353__$1 = (function (){var statearr_11364 = state_11353;(statearr_11364[10] = inst_11330);
(statearr_11364[7] = inst_11317__$1);
return statearr_11364;
})();var statearr_11365_11391 = state_11353__$1;(statearr_11365_11391[2] = null);
(statearr_11365_11391[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11354 === 10))
{var inst_11321 = (state_11353[2]);var inst_11322 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var state_11353__$1 = (function (){var statearr_11366 = state_11353;(statearr_11366[11] = inst_11321);
return statearr_11366;
})();var statearr_11367_11392 = state_11353__$1;(statearr_11367_11392[2] = inst_11322);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11353__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11354 === 11))
{var inst_11317 = (state_11353[7]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_11353,10,Object,null,9);var inst_11326 = chs__$1.call(null,inst_11317);var inst_11327 = done.call(null,inst_11317);var inst_11328 = cljs.core.async.take_BANG_.call(null,inst_11326,inst_11327);var state_11353__$1 = state_11353;var statearr_11368_11393 = state_11353__$1;(statearr_11368_11393[2] = inst_11328);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11353__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11354 === 12))
{var inst_11339 = (state_11353[12]);var inst_11339__$1 = (state_11353[2]);var inst_11340 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_11339__$1);var state_11353__$1 = (function (){var statearr_11369 = state_11353;(statearr_11369[12] = inst_11339__$1);
return statearr_11369;
})();if(cljs.core.truth_(inst_11340))
{var statearr_11370_11394 = state_11353__$1;(statearr_11370_11394[1] = 13);
} else
{var statearr_11371_11395 = state_11353__$1;(statearr_11371_11395[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11354 === 13))
{var inst_11342 = cljs.core.async.close_BANG_.call(null,out);var state_11353__$1 = state_11353;var statearr_11372_11396 = state_11353__$1;(statearr_11372_11396[2] = inst_11342);
(statearr_11372_11396[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11354 === 14))
{var inst_11339 = (state_11353[12]);var inst_11344 = cljs.core.apply.call(null,f,inst_11339);var state_11353__$1 = state_11353;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11353__$1,16,out,inst_11344);
} else
{if((state_val_11354 === 15))
{var inst_11349 = (state_11353[2]);var state_11353__$1 = state_11353;var statearr_11373_11397 = state_11353__$1;(statearr_11373_11397[2] = inst_11349);
(statearr_11373_11397[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11354 === 16))
{var inst_11346 = (state_11353[2]);var state_11353__$1 = (function (){var statearr_11374 = state_11353;(statearr_11374[13] = inst_11346);
return statearr_11374;
})();var statearr_11375_11398 = state_11353__$1;(statearr_11375_11398[2] = null);
(statearr_11375_11398[1] = 2);
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
}
}
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
var state_machine__5509__auto____0 = (function (){var statearr_11379 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_11379[0] = state_machine__5509__auto__);
(statearr_11379[1] = 1);
return statearr_11379;
});
var state_machine__5509__auto____1 = (function (state_11353){while(true){
var ret_value__5510__auto__ = (function (){try{while(true){
var result__5511__auto__ = switch__5508__auto__.call(null,state_11353);if(cljs.core.keyword_identical_QMARK_.call(null,result__5511__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5511__auto__;
}
break;
}
}catch (e11380){if((e11380 instanceof Object))
{var ex__5512__auto__ = e11380;var statearr_11381_11399 = state_11353;(statearr_11381_11399[5] = ex__5512__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11353);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e11380;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5510__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__11400 = state_11353;
state_11353 = G__11400;
continue;
}
} else
{return ret_value__5510__auto__;
}
break;
}
});
state_machine__5509__auto__ = function(state_11353){
switch(arguments.length){
case 0:
return state_machine__5509__auto____0.call(this);
case 1:
return state_machine__5509__auto____1.call(this,state_11353);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5509__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5509__auto____0;
state_machine__5509__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5509__auto____1;
return state_machine__5509__auto__;
})()
;})(switch__5508__auto__))
})();var state__5525__auto__ = (function (){var statearr_11382 = f__5524__auto__.call(null);(statearr_11382[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5523__auto___11383);
return statearr_11382;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5525__auto__);
}));
return out;
});
map = function(f,chs,buf_or_n){
switch(arguments.length){
case 2:
return map__2.call(this,f,chs);
case 3:
return map__3.call(this,f,chs,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
map.cljs$core$IFn$_invoke$arity$2 = map__2;
map.cljs$core$IFn$_invoke$arity$3 = map__3;
return map;
})()
;
/**
* Takes a collection of source channels and returns a channel which
* contains all values taken from them. The returned channel will be
* unbuffered by default, or a buf-or-n can be supplied. The channel
* will close after all the source channels have closed.
*/
cljs.core.async.merge = (function() {
var merge = null;
var merge__1 = (function (chs){return merge.call(null,chs,null);
});
var merge__2 = (function (chs,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5523__auto___11508 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5524__auto__ = (function (){var switch__5508__auto__ = (function (state_11484){var state_val_11485 = (state_11484[1]);if((state_val_11485 === 1))
{var inst_11455 = cljs.core.vec.call(null,chs);var inst_11456 = inst_11455;var state_11484__$1 = (function (){var statearr_11486 = state_11484;(statearr_11486[7] = inst_11456);
return statearr_11486;
})();var statearr_11487_11509 = state_11484__$1;(statearr_11487_11509[2] = null);
(statearr_11487_11509[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11485 === 2))
{var inst_11456 = (state_11484[7]);var inst_11458 = cljs.core.count.call(null,inst_11456);var inst_11459 = (inst_11458 > 0);var state_11484__$1 = state_11484;if(cljs.core.truth_(inst_11459))
{var statearr_11488_11510 = state_11484__$1;(statearr_11488_11510[1] = 4);
} else
{var statearr_11489_11511 = state_11484__$1;(statearr_11489_11511[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11485 === 3))
{var inst_11482 = (state_11484[2]);var state_11484__$1 = state_11484;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11484__$1,inst_11482);
} else
{if((state_val_11485 === 4))
{var inst_11456 = (state_11484[7]);var state_11484__$1 = state_11484;return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_11484__$1,7,inst_11456);
} else
{if((state_val_11485 === 5))
{var inst_11478 = cljs.core.async.close_BANG_.call(null,out);var state_11484__$1 = state_11484;var statearr_11490_11512 = state_11484__$1;(statearr_11490_11512[2] = inst_11478);
(statearr_11490_11512[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11485 === 6))
{var inst_11480 = (state_11484[2]);var state_11484__$1 = state_11484;var statearr_11491_11513 = state_11484__$1;(statearr_11491_11513[2] = inst_11480);
(statearr_11491_11513[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11485 === 7))
{var inst_11464 = (state_11484[8]);var inst_11463 = (state_11484[9]);var inst_11463__$1 = (state_11484[2]);var inst_11464__$1 = cljs.core.nth.call(null,inst_11463__$1,0,null);var inst_11465 = cljs.core.nth.call(null,inst_11463__$1,1,null);var inst_11466 = (inst_11464__$1 == null);var state_11484__$1 = (function (){var statearr_11492 = state_11484;(statearr_11492[10] = inst_11465);
(statearr_11492[8] = inst_11464__$1);
(statearr_11492[9] = inst_11463__$1);
return statearr_11492;
})();if(cljs.core.truth_(inst_11466))
{var statearr_11493_11514 = state_11484__$1;(statearr_11493_11514[1] = 8);
} else
{var statearr_11494_11515 = state_11484__$1;(statearr_11494_11515[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11485 === 8))
{var inst_11456 = (state_11484[7]);var inst_11465 = (state_11484[10]);var inst_11464 = (state_11484[8]);var inst_11463 = (state_11484[9]);var inst_11468 = (function (){var c = inst_11465;var v = inst_11464;var vec__11461 = inst_11463;var cs = inst_11456;return ((function (c,v,vec__11461,cs,inst_11456,inst_11465,inst_11464,inst_11463,state_val_11485){
return (function (p1__11401_SHARP_){return cljs.core.not_EQ_.call(null,c,p1__11401_SHARP_);
});
;})(c,v,vec__11461,cs,inst_11456,inst_11465,inst_11464,inst_11463,state_val_11485))
})();var inst_11469 = cljs.core.filterv.call(null,inst_11468,inst_11456);var inst_11456__$1 = inst_11469;var state_11484__$1 = (function (){var statearr_11495 = state_11484;(statearr_11495[7] = inst_11456__$1);
return statearr_11495;
})();var statearr_11496_11516 = state_11484__$1;(statearr_11496_11516[2] = null);
(statearr_11496_11516[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11485 === 9))
{var inst_11464 = (state_11484[8]);var state_11484__$1 = state_11484;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11484__$1,11,out,inst_11464);
} else
{if((state_val_11485 === 10))
{var inst_11476 = (state_11484[2]);var state_11484__$1 = state_11484;var statearr_11498_11517 = state_11484__$1;(statearr_11498_11517[2] = inst_11476);
(statearr_11498_11517[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11485 === 11))
{var inst_11456 = (state_11484[7]);var inst_11473 = (state_11484[2]);var tmp11497 = inst_11456;var inst_11456__$1 = tmp11497;var state_11484__$1 = (function (){var statearr_11499 = state_11484;(statearr_11499[7] = inst_11456__$1);
(statearr_11499[11] = inst_11473);
return statearr_11499;
})();var statearr_11500_11518 = state_11484__$1;(statearr_11500_11518[2] = null);
(statearr_11500_11518[1] = 2);
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
}
}
}
}
});return ((function (switch__5508__auto__){
return (function() {
var state_machine__5509__auto__ = null;
var state_machine__5509__auto____0 = (function (){var statearr_11504 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_11504[0] = state_machine__5509__auto__);
(statearr_11504[1] = 1);
return statearr_11504;
});
var state_machine__5509__auto____1 = (function (state_11484){while(true){
var ret_value__5510__auto__ = (function (){try{while(true){
var result__5511__auto__ = switch__5508__auto__.call(null,state_11484);if(cljs.core.keyword_identical_QMARK_.call(null,result__5511__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5511__auto__;
}
break;
}
}catch (e11505){if((e11505 instanceof Object))
{var ex__5512__auto__ = e11505;var statearr_11506_11519 = state_11484;(statearr_11506_11519[5] = ex__5512__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11484);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e11505;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5510__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__11520 = state_11484;
state_11484 = G__11520;
continue;
}
} else
{return ret_value__5510__auto__;
}
break;
}
});
state_machine__5509__auto__ = function(state_11484){
switch(arguments.length){
case 0:
return state_machine__5509__auto____0.call(this);
case 1:
return state_machine__5509__auto____1.call(this,state_11484);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5509__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5509__auto____0;
state_machine__5509__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5509__auto____1;
return state_machine__5509__auto__;
})()
;})(switch__5508__auto__))
})();var state__5525__auto__ = (function (){var statearr_11507 = f__5524__auto__.call(null);(statearr_11507[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5523__auto___11508);
return statearr_11507;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5525__auto__);
}));
return out;
});
merge = function(chs,buf_or_n){
switch(arguments.length){
case 1:
return merge__1.call(this,chs);
case 2:
return merge__2.call(this,chs,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
merge.cljs$core$IFn$_invoke$arity$1 = merge__1;
merge.cljs$core$IFn$_invoke$arity$2 = merge__2;
return merge;
})()
;
/**
* Returns a channel containing the single (collection) result of the
* items taken from the channel conjoined to the supplied
* collection. ch must close before into produces a result.
*/
cljs.core.async.into = (function into(coll,ch){return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
* Returns a channel that will return, at most, n items from ch. After n items
* have been returned, or ch has been closed, the return chanel will close.
* 
* The output channel is unbuffered by default, unless buf-or-n is given.
*/
cljs.core.async.take = (function() {
var take = null;
var take__2 = (function (n,ch){return take.call(null,n,ch,null);
});
var take__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5523__auto___11613 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5524__auto__ = (function (){var switch__5508__auto__ = (function (state_11590){var state_val_11591 = (state_11590[1]);if((state_val_11591 === 1))
{var inst_11567 = 0;var state_11590__$1 = (function (){var statearr_11592 = state_11590;(statearr_11592[7] = inst_11567);
return statearr_11592;
})();var statearr_11593_11614 = state_11590__$1;(statearr_11593_11614[2] = null);
(statearr_11593_11614[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11591 === 2))
{var inst_11567 = (state_11590[7]);var inst_11569 = (inst_11567 < n);var state_11590__$1 = state_11590;if(cljs.core.truth_(inst_11569))
{var statearr_11594_11615 = state_11590__$1;(statearr_11594_11615[1] = 4);
} else
{var statearr_11595_11616 = state_11590__$1;(statearr_11595_11616[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11591 === 3))
{var inst_11587 = (state_11590[2]);var inst_11588 = cljs.core.async.close_BANG_.call(null,out);var state_11590__$1 = (function (){var statearr_11596 = state_11590;(statearr_11596[8] = inst_11587);
return statearr_11596;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11590__$1,inst_11588);
} else
{if((state_val_11591 === 4))
{var state_11590__$1 = state_11590;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11590__$1,7,ch);
} else
{if((state_val_11591 === 5))
{var state_11590__$1 = state_11590;var statearr_11597_11617 = state_11590__$1;(statearr_11597_11617[2] = null);
(statearr_11597_11617[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11591 === 6))
{var inst_11585 = (state_11590[2]);var state_11590__$1 = state_11590;var statearr_11598_11618 = state_11590__$1;(statearr_11598_11618[2] = inst_11585);
(statearr_11598_11618[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11591 === 7))
{var inst_11572 = (state_11590[9]);var inst_11572__$1 = (state_11590[2]);var inst_11573 = (inst_11572__$1 == null);var inst_11574 = cljs.core.not.call(null,inst_11573);var state_11590__$1 = (function (){var statearr_11599 = state_11590;(statearr_11599[9] = inst_11572__$1);
return statearr_11599;
})();if(inst_11574)
{var statearr_11600_11619 = state_11590__$1;(statearr_11600_11619[1] = 8);
} else
{var statearr_11601_11620 = state_11590__$1;(statearr_11601_11620[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11591 === 8))
{var inst_11572 = (state_11590[9]);var state_11590__$1 = state_11590;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11590__$1,11,out,inst_11572);
} else
{if((state_val_11591 === 9))
{var state_11590__$1 = state_11590;var statearr_11602_11621 = state_11590__$1;(statearr_11602_11621[2] = null);
(statearr_11602_11621[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11591 === 10))
{var inst_11582 = (state_11590[2]);var state_11590__$1 = state_11590;var statearr_11603_11622 = state_11590__$1;(statearr_11603_11622[2] = inst_11582);
(statearr_11603_11622[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11591 === 11))
{var inst_11567 = (state_11590[7]);var inst_11577 = (state_11590[2]);var inst_11578 = (inst_11567 + 1);var inst_11567__$1 = inst_11578;var state_11590__$1 = (function (){var statearr_11604 = state_11590;(statearr_11604[10] = inst_11577);
(statearr_11604[7] = inst_11567__$1);
return statearr_11604;
})();var statearr_11605_11623 = state_11590__$1;(statearr_11605_11623[2] = null);
(statearr_11605_11623[1] = 2);
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
}
}
}
}
});return ((function (switch__5508__auto__){
return (function() {
var state_machine__5509__auto__ = null;
var state_machine__5509__auto____0 = (function (){var statearr_11609 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_11609[0] = state_machine__5509__auto__);
(statearr_11609[1] = 1);
return statearr_11609;
});
var state_machine__5509__auto____1 = (function (state_11590){while(true){
var ret_value__5510__auto__ = (function (){try{while(true){
var result__5511__auto__ = switch__5508__auto__.call(null,state_11590);if(cljs.core.keyword_identical_QMARK_.call(null,result__5511__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5511__auto__;
}
break;
}
}catch (e11610){if((e11610 instanceof Object))
{var ex__5512__auto__ = e11610;var statearr_11611_11624 = state_11590;(statearr_11611_11624[5] = ex__5512__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11590);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e11610;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5510__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__11625 = state_11590;
state_11590 = G__11625;
continue;
}
} else
{return ret_value__5510__auto__;
}
break;
}
});
state_machine__5509__auto__ = function(state_11590){
switch(arguments.length){
case 0:
return state_machine__5509__auto____0.call(this);
case 1:
return state_machine__5509__auto____1.call(this,state_11590);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5509__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5509__auto____0;
state_machine__5509__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5509__auto____1;
return state_machine__5509__auto__;
})()
;})(switch__5508__auto__))
})();var state__5525__auto__ = (function (){var statearr_11612 = f__5524__auto__.call(null);(statearr_11612[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5523__auto___11613);
return statearr_11612;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5525__auto__);
}));
return out;
});
take = function(n,ch,buf_or_n){
switch(arguments.length){
case 2:
return take__2.call(this,n,ch);
case 3:
return take__3.call(this,n,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
take.cljs$core$IFn$_invoke$arity$2 = take__2;
take.cljs$core$IFn$_invoke$arity$3 = take__3;
return take;
})()
;
/**
* Returns a channel that will contain values from ch. Consecutive duplicate
* values will be dropped.
* 
* The output channel is unbuffered by default, unless buf-or-n is given.
*/
cljs.core.async.unique = (function() {
var unique = null;
var unique__1 = (function (ch){return unique.call(null,ch,null);
});
var unique__2 = (function (ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5523__auto___11722 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5524__auto__ = (function (){var switch__5508__auto__ = (function (state_11697){var state_val_11698 = (state_11697[1]);if((state_val_11698 === 1))
{var inst_11674 = null;var state_11697__$1 = (function (){var statearr_11699 = state_11697;(statearr_11699[7] = inst_11674);
return statearr_11699;
})();var statearr_11700_11723 = state_11697__$1;(statearr_11700_11723[2] = null);
(statearr_11700_11723[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11698 === 2))
{var state_11697__$1 = state_11697;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11697__$1,4,ch);
} else
{if((state_val_11698 === 3))
{var inst_11694 = (state_11697[2]);var inst_11695 = cljs.core.async.close_BANG_.call(null,out);var state_11697__$1 = (function (){var statearr_11701 = state_11697;(statearr_11701[8] = inst_11694);
return statearr_11701;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11697__$1,inst_11695);
} else
{if((state_val_11698 === 4))
{var inst_11677 = (state_11697[9]);var inst_11677__$1 = (state_11697[2]);var inst_11678 = (inst_11677__$1 == null);var inst_11679 = cljs.core.not.call(null,inst_11678);var state_11697__$1 = (function (){var statearr_11702 = state_11697;(statearr_11702[9] = inst_11677__$1);
return statearr_11702;
})();if(inst_11679)
{var statearr_11703_11724 = state_11697__$1;(statearr_11703_11724[1] = 5);
} else
{var statearr_11704_11725 = state_11697__$1;(statearr_11704_11725[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11698 === 5))
{var inst_11677 = (state_11697[9]);var inst_11674 = (state_11697[7]);var inst_11681 = cljs.core._EQ_.call(null,inst_11677,inst_11674);var state_11697__$1 = state_11697;if(inst_11681)
{var statearr_11705_11726 = state_11697__$1;(statearr_11705_11726[1] = 8);
} else
{var statearr_11706_11727 = state_11697__$1;(statearr_11706_11727[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11698 === 6))
{var state_11697__$1 = state_11697;var statearr_11708_11728 = state_11697__$1;(statearr_11708_11728[2] = null);
(statearr_11708_11728[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11698 === 7))
{var inst_11692 = (state_11697[2]);var state_11697__$1 = state_11697;var statearr_11709_11729 = state_11697__$1;(statearr_11709_11729[2] = inst_11692);
(statearr_11709_11729[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11698 === 8))
{var inst_11674 = (state_11697[7]);var tmp11707 = inst_11674;var inst_11674__$1 = tmp11707;var state_11697__$1 = (function (){var statearr_11710 = state_11697;(statearr_11710[7] = inst_11674__$1);
return statearr_11710;
})();var statearr_11711_11730 = state_11697__$1;(statearr_11711_11730[2] = null);
(statearr_11711_11730[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11698 === 9))
{var inst_11677 = (state_11697[9]);var state_11697__$1 = state_11697;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11697__$1,11,out,inst_11677);
} else
{if((state_val_11698 === 10))
{var inst_11689 = (state_11697[2]);var state_11697__$1 = state_11697;var statearr_11712_11731 = state_11697__$1;(statearr_11712_11731[2] = inst_11689);
(statearr_11712_11731[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11698 === 11))
{var inst_11677 = (state_11697[9]);var inst_11686 = (state_11697[2]);var inst_11674 = inst_11677;var state_11697__$1 = (function (){var statearr_11713 = state_11697;(statearr_11713[10] = inst_11686);
(statearr_11713[7] = inst_11674);
return statearr_11713;
})();var statearr_11714_11732 = state_11697__$1;(statearr_11714_11732[2] = null);
(statearr_11714_11732[1] = 2);
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
}
}
}
}
});return ((function (switch__5508__auto__){
return (function() {
var state_machine__5509__auto__ = null;
var state_machine__5509__auto____0 = (function (){var statearr_11718 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_11718[0] = state_machine__5509__auto__);
(statearr_11718[1] = 1);
return statearr_11718;
});
var state_machine__5509__auto____1 = (function (state_11697){while(true){
var ret_value__5510__auto__ = (function (){try{while(true){
var result__5511__auto__ = switch__5508__auto__.call(null,state_11697);if(cljs.core.keyword_identical_QMARK_.call(null,result__5511__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5511__auto__;
}
break;
}
}catch (e11719){if((e11719 instanceof Object))
{var ex__5512__auto__ = e11719;var statearr_11720_11733 = state_11697;(statearr_11720_11733[5] = ex__5512__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11697);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e11719;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5510__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__11734 = state_11697;
state_11697 = G__11734;
continue;
}
} else
{return ret_value__5510__auto__;
}
break;
}
});
state_machine__5509__auto__ = function(state_11697){
switch(arguments.length){
case 0:
return state_machine__5509__auto____0.call(this);
case 1:
return state_machine__5509__auto____1.call(this,state_11697);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5509__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5509__auto____0;
state_machine__5509__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5509__auto____1;
return state_machine__5509__auto__;
})()
;})(switch__5508__auto__))
})();var state__5525__auto__ = (function (){var statearr_11721 = f__5524__auto__.call(null);(statearr_11721[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5523__auto___11722);
return statearr_11721;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5525__auto__);
}));
return out;
});
unique = function(ch,buf_or_n){
switch(arguments.length){
case 1:
return unique__1.call(this,ch);
case 2:
return unique__2.call(this,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unique.cljs$core$IFn$_invoke$arity$1 = unique__1;
unique.cljs$core$IFn$_invoke$arity$2 = unique__2;
return unique;
})()
;
/**
* Returns a channel that will contain vectors of n items taken from ch. The
* final vector in the return channel may be smaller than n if ch closed before
* the vector could be completely filled.
* 
* The output channel is unbuffered by default, unless buf-or-n is given
*/
cljs.core.async.partition = (function() {
var partition = null;
var partition__2 = (function (n,ch){return partition.call(null,n,ch,null);
});
var partition__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5523__auto___11869 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5524__auto__ = (function (){var switch__5508__auto__ = (function (state_11839){var state_val_11840 = (state_11839[1]);if((state_val_11840 === 1))
{var inst_11802 = (new Array(n));var inst_11803 = inst_11802;var inst_11804 = 0;var state_11839__$1 = (function (){var statearr_11841 = state_11839;(statearr_11841[7] = inst_11804);
(statearr_11841[8] = inst_11803);
return statearr_11841;
})();var statearr_11842_11870 = state_11839__$1;(statearr_11842_11870[2] = null);
(statearr_11842_11870[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11840 === 2))
{var state_11839__$1 = state_11839;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11839__$1,4,ch);
} else
{if((state_val_11840 === 3))
{var inst_11837 = (state_11839[2]);var state_11839__$1 = state_11839;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11839__$1,inst_11837);
} else
{if((state_val_11840 === 4))
{var inst_11807 = (state_11839[9]);var inst_11807__$1 = (state_11839[2]);var inst_11808 = (inst_11807__$1 == null);var inst_11809 = cljs.core.not.call(null,inst_11808);var state_11839__$1 = (function (){var statearr_11843 = state_11839;(statearr_11843[9] = inst_11807__$1);
return statearr_11843;
})();if(inst_11809)
{var statearr_11844_11871 = state_11839__$1;(statearr_11844_11871[1] = 5);
} else
{var statearr_11845_11872 = state_11839__$1;(statearr_11845_11872[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11840 === 5))
{var inst_11804 = (state_11839[7]);var inst_11803 = (state_11839[8]);var inst_11807 = (state_11839[9]);var inst_11812 = (state_11839[10]);var inst_11811 = (inst_11803[inst_11804] = inst_11807);var inst_11812__$1 = (inst_11804 + 1);var inst_11813 = (inst_11812__$1 < n);var state_11839__$1 = (function (){var statearr_11846 = state_11839;(statearr_11846[11] = inst_11811);
(statearr_11846[10] = inst_11812__$1);
return statearr_11846;
})();if(cljs.core.truth_(inst_11813))
{var statearr_11847_11873 = state_11839__$1;(statearr_11847_11873[1] = 8);
} else
{var statearr_11848_11874 = state_11839__$1;(statearr_11848_11874[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11840 === 6))
{var inst_11804 = (state_11839[7]);var inst_11825 = (inst_11804 > 0);var state_11839__$1 = state_11839;if(cljs.core.truth_(inst_11825))
{var statearr_11850_11875 = state_11839__$1;(statearr_11850_11875[1] = 12);
} else
{var statearr_11851_11876 = state_11839__$1;(statearr_11851_11876[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11840 === 7))
{var inst_11835 = (state_11839[2]);var state_11839__$1 = state_11839;var statearr_11852_11877 = state_11839__$1;(statearr_11852_11877[2] = inst_11835);
(statearr_11852_11877[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11840 === 8))
{var inst_11803 = (state_11839[8]);var inst_11812 = (state_11839[10]);var tmp11849 = inst_11803;var inst_11803__$1 = tmp11849;var inst_11804 = inst_11812;var state_11839__$1 = (function (){var statearr_11853 = state_11839;(statearr_11853[7] = inst_11804);
(statearr_11853[8] = inst_11803__$1);
return statearr_11853;
})();var statearr_11854_11878 = state_11839__$1;(statearr_11854_11878[2] = null);
(statearr_11854_11878[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11840 === 9))
{var inst_11803 = (state_11839[8]);var inst_11817 = cljs.core.vec.call(null,inst_11803);var state_11839__$1 = state_11839;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11839__$1,11,out,inst_11817);
} else
{if((state_val_11840 === 10))
{var inst_11823 = (state_11839[2]);var state_11839__$1 = state_11839;var statearr_11855_11879 = state_11839__$1;(statearr_11855_11879[2] = inst_11823);
(statearr_11855_11879[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11840 === 11))
{var inst_11819 = (state_11839[2]);var inst_11820 = (new Array(n));var inst_11803 = inst_11820;var inst_11804 = 0;var state_11839__$1 = (function (){var statearr_11856 = state_11839;(statearr_11856[7] = inst_11804);
(statearr_11856[8] = inst_11803);
(statearr_11856[12] = inst_11819);
return statearr_11856;
})();var statearr_11857_11880 = state_11839__$1;(statearr_11857_11880[2] = null);
(statearr_11857_11880[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11840 === 12))
{var inst_11803 = (state_11839[8]);var inst_11827 = cljs.core.vec.call(null,inst_11803);var state_11839__$1 = state_11839;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11839__$1,15,out,inst_11827);
} else
{if((state_val_11840 === 13))
{var state_11839__$1 = state_11839;var statearr_11858_11881 = state_11839__$1;(statearr_11858_11881[2] = null);
(statearr_11858_11881[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11840 === 14))
{var inst_11832 = (state_11839[2]);var inst_11833 = cljs.core.async.close_BANG_.call(null,out);var state_11839__$1 = (function (){var statearr_11859 = state_11839;(statearr_11859[13] = inst_11832);
return statearr_11859;
})();var statearr_11860_11882 = state_11839__$1;(statearr_11860_11882[2] = inst_11833);
(statearr_11860_11882[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11840 === 15))
{var inst_11829 = (state_11839[2]);var state_11839__$1 = state_11839;var statearr_11861_11883 = state_11839__$1;(statearr_11861_11883[2] = inst_11829);
(statearr_11861_11883[1] = 14);
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
}
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
var state_machine__5509__auto____0 = (function (){var statearr_11865 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_11865[0] = state_machine__5509__auto__);
(statearr_11865[1] = 1);
return statearr_11865;
});
var state_machine__5509__auto____1 = (function (state_11839){while(true){
var ret_value__5510__auto__ = (function (){try{while(true){
var result__5511__auto__ = switch__5508__auto__.call(null,state_11839);if(cljs.core.keyword_identical_QMARK_.call(null,result__5511__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5511__auto__;
}
break;
}
}catch (e11866){if((e11866 instanceof Object))
{var ex__5512__auto__ = e11866;var statearr_11867_11884 = state_11839;(statearr_11867_11884[5] = ex__5512__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11839);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e11866;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5510__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__11885 = state_11839;
state_11839 = G__11885;
continue;
}
} else
{return ret_value__5510__auto__;
}
break;
}
});
state_machine__5509__auto__ = function(state_11839){
switch(arguments.length){
case 0:
return state_machine__5509__auto____0.call(this);
case 1:
return state_machine__5509__auto____1.call(this,state_11839);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5509__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5509__auto____0;
state_machine__5509__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5509__auto____1;
return state_machine__5509__auto__;
})()
;})(switch__5508__auto__))
})();var state__5525__auto__ = (function (){var statearr_11868 = f__5524__auto__.call(null);(statearr_11868[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5523__auto___11869);
return statearr_11868;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5525__auto__);
}));
return out;
});
partition = function(n,ch,buf_or_n){
switch(arguments.length){
case 2:
return partition__2.call(this,n,ch);
case 3:
return partition__3.call(this,n,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
partition.cljs$core$IFn$_invoke$arity$2 = partition__2;
partition.cljs$core$IFn$_invoke$arity$3 = partition__3;
return partition;
})()
;
/**
* Returns a channel that will contain vectors of items taken from ch. New
* vectors will be created whenever (f itm) returns a value that differs from
* the previous item's (f itm).
* 
* The output channel is unbuffered, unless buf-or-n is given
*/
cljs.core.async.partition_by = (function() {
var partition_by = null;
var partition_by__2 = (function (f,ch){return partition_by.call(null,f,ch,null);
});
var partition_by__3 = (function (f,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5523__auto___12028 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5524__auto__ = (function (){var switch__5508__auto__ = (function (state_11998){var state_val_11999 = (state_11998[1]);if((state_val_11999 === 1))
{var inst_11957 = [];var inst_11958 = inst_11957;var inst_11959 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",4382193538);var state_11998__$1 = (function (){var statearr_12000 = state_11998;(statearr_12000[7] = inst_11958);
(statearr_12000[8] = inst_11959);
return statearr_12000;
})();var statearr_12001_12029 = state_11998__$1;(statearr_12001_12029[2] = null);
(statearr_12001_12029[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11999 === 2))
{var state_11998__$1 = state_11998;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11998__$1,4,ch);
} else
{if((state_val_11999 === 3))
{var inst_11996 = (state_11998[2]);var state_11998__$1 = state_11998;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11998__$1,inst_11996);
} else
{if((state_val_11999 === 4))
{var inst_11962 = (state_11998[9]);var inst_11962__$1 = (state_11998[2]);var inst_11963 = (inst_11962__$1 == null);var inst_11964 = cljs.core.not.call(null,inst_11963);var state_11998__$1 = (function (){var statearr_12002 = state_11998;(statearr_12002[9] = inst_11962__$1);
return statearr_12002;
})();if(inst_11964)
{var statearr_12003_12030 = state_11998__$1;(statearr_12003_12030[1] = 5);
} else
{var statearr_12004_12031 = state_11998__$1;(statearr_12004_12031[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11999 === 5))
{var inst_11962 = (state_11998[9]);var inst_11959 = (state_11998[8]);var inst_11966 = (state_11998[10]);var inst_11966__$1 = f.call(null,inst_11962);var inst_11967 = cljs.core._EQ_.call(null,inst_11966__$1,inst_11959);var inst_11968 = cljs.core.keyword_identical_QMARK_.call(null,inst_11959,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",4382193538));var inst_11969 = (inst_11967) || (inst_11968);var state_11998__$1 = (function (){var statearr_12005 = state_11998;(statearr_12005[10] = inst_11966__$1);
return statearr_12005;
})();if(cljs.core.truth_(inst_11969))
{var statearr_12006_12032 = state_11998__$1;(statearr_12006_12032[1] = 8);
} else
{var statearr_12007_12033 = state_11998__$1;(statearr_12007_12033[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11999 === 6))
{var inst_11958 = (state_11998[7]);var inst_11983 = inst_11958.length;var inst_11984 = (inst_11983 > 0);var state_11998__$1 = state_11998;if(cljs.core.truth_(inst_11984))
{var statearr_12009_12034 = state_11998__$1;(statearr_12009_12034[1] = 12);
} else
{var statearr_12010_12035 = state_11998__$1;(statearr_12010_12035[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11999 === 7))
{var inst_11994 = (state_11998[2]);var state_11998__$1 = state_11998;var statearr_12011_12036 = state_11998__$1;(statearr_12011_12036[2] = inst_11994);
(statearr_12011_12036[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11999 === 8))
{var inst_11958 = (state_11998[7]);var inst_11962 = (state_11998[9]);var inst_11966 = (state_11998[10]);var inst_11971 = inst_11958.push(inst_11962);var tmp12008 = inst_11958;var inst_11958__$1 = tmp12008;var inst_11959 = inst_11966;var state_11998__$1 = (function (){var statearr_12012 = state_11998;(statearr_12012[7] = inst_11958__$1);
(statearr_12012[11] = inst_11971);
(statearr_12012[8] = inst_11959);
return statearr_12012;
})();var statearr_12013_12037 = state_11998__$1;(statearr_12013_12037[2] = null);
(statearr_12013_12037[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11999 === 9))
{var inst_11958 = (state_11998[7]);var inst_11974 = cljs.core.vec.call(null,inst_11958);var state_11998__$1 = state_11998;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11998__$1,11,out,inst_11974);
} else
{if((state_val_11999 === 10))
{var inst_11981 = (state_11998[2]);var state_11998__$1 = state_11998;var statearr_12014_12038 = state_11998__$1;(statearr_12014_12038[2] = inst_11981);
(statearr_12014_12038[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11999 === 11))
{var inst_11962 = (state_11998[9]);var inst_11966 = (state_11998[10]);var inst_11976 = (state_11998[2]);var inst_11977 = [];var inst_11978 = inst_11977.push(inst_11962);var inst_11958 = inst_11977;var inst_11959 = inst_11966;var state_11998__$1 = (function (){var statearr_12015 = state_11998;(statearr_12015[12] = inst_11976);
(statearr_12015[7] = inst_11958);
(statearr_12015[8] = inst_11959);
(statearr_12015[13] = inst_11978);
return statearr_12015;
})();var statearr_12016_12039 = state_11998__$1;(statearr_12016_12039[2] = null);
(statearr_12016_12039[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11999 === 12))
{var inst_11958 = (state_11998[7]);var inst_11986 = cljs.core.vec.call(null,inst_11958);var state_11998__$1 = state_11998;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11998__$1,15,out,inst_11986);
} else
{if((state_val_11999 === 13))
{var state_11998__$1 = state_11998;var statearr_12017_12040 = state_11998__$1;(statearr_12017_12040[2] = null);
(statearr_12017_12040[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11999 === 14))
{var inst_11991 = (state_11998[2]);var inst_11992 = cljs.core.async.close_BANG_.call(null,out);var state_11998__$1 = (function (){var statearr_12018 = state_11998;(statearr_12018[14] = inst_11991);
return statearr_12018;
})();var statearr_12019_12041 = state_11998__$1;(statearr_12019_12041[2] = inst_11992);
(statearr_12019_12041[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11999 === 15))
{var inst_11988 = (state_11998[2]);var state_11998__$1 = state_11998;var statearr_12020_12042 = state_11998__$1;(statearr_12020_12042[2] = inst_11988);
(statearr_12020_12042[1] = 14);
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
}
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
var state_machine__5509__auto____0 = (function (){var statearr_12024 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_12024[0] = state_machine__5509__auto__);
(statearr_12024[1] = 1);
return statearr_12024;
});
var state_machine__5509__auto____1 = (function (state_11998){while(true){
var ret_value__5510__auto__ = (function (){try{while(true){
var result__5511__auto__ = switch__5508__auto__.call(null,state_11998);if(cljs.core.keyword_identical_QMARK_.call(null,result__5511__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5511__auto__;
}
break;
}
}catch (e12025){if((e12025 instanceof Object))
{var ex__5512__auto__ = e12025;var statearr_12026_12043 = state_11998;(statearr_12026_12043[5] = ex__5512__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11998);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e12025;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5510__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__12044 = state_11998;
state_11998 = G__12044;
continue;
}
} else
{return ret_value__5510__auto__;
}
break;
}
});
state_machine__5509__auto__ = function(state_11998){
switch(arguments.length){
case 0:
return state_machine__5509__auto____0.call(this);
case 1:
return state_machine__5509__auto____1.call(this,state_11998);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5509__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5509__auto____0;
state_machine__5509__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5509__auto____1;
return state_machine__5509__auto__;
})()
;})(switch__5508__auto__))
})();var state__5525__auto__ = (function (){var statearr_12027 = f__5524__auto__.call(null);(statearr_12027[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5523__auto___12028);
return statearr_12027;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5525__auto__);
}));
return out;
});
partition_by = function(f,ch,buf_or_n){
switch(arguments.length){
case 2:
return partition_by__2.call(this,f,ch);
case 3:
return partition_by__3.call(this,f,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
partition_by.cljs$core$IFn$_invoke$arity$2 = partition_by__2;
partition_by.cljs$core$IFn$_invoke$arity$3 = partition_by__3;
return partition_by;
})()
;
