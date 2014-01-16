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
cljs.core.async.fn_handler = (function fn_handler(f){if(typeof cljs.core.async.t9745 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t9745 = (function (f,fn_handler,meta9746){
this.f = f;
this.fn_handler = fn_handler;
this.meta9746 = meta9746;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t9745.cljs$lang$type = true;
cljs.core.async.t9745.cljs$lang$ctorStr = "cljs.core.async/t9745";
cljs.core.async.t9745.cljs$lang$ctorPrWriter = (function (this__3970__auto__,writer__3971__auto__,opt__3972__auto__){return cljs.core._write.call(null,writer__3971__auto__,"cljs.core.async/t9745");
});
cljs.core.async.t9745.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t9745.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return true;
});
cljs.core.async.t9745.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.f;
});
cljs.core.async.t9745.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_9747){var self__ = this;
var _9747__$1 = this;return self__.meta9746;
});
cljs.core.async.t9745.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_9747,meta9746__$1){var self__ = this;
var _9747__$1 = this;return (new cljs.core.async.t9745(self__.f,self__.fn_handler,meta9746__$1));
});
cljs.core.async.__GT_t9745 = (function __GT_t9745(f__$1,fn_handler__$1,meta9746){return (new cljs.core.async.t9745(f__$1,fn_handler__$1,meta9746));
});
}
return (new cljs.core.async.t9745(f,fn_handler,null));
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
cljs.core.async.unblocking_buffer_QMARK_ = (function unblocking_buffer_QMARK_(buff){var G__9749 = buff;if(G__9749)
{var bit__4052__auto__ = null;if(cljs.core.truth_((function (){var or__3408__auto__ = bit__4052__auto__;if(cljs.core.truth_(or__3408__auto__))
{return or__3408__auto__;
} else
{return G__9749.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})()))
{return true;
} else
{if((!G__9749.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__9749);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__9749);
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
{var val_9750 = cljs.core.deref.call(null,ret);if(cljs.core.truth_(on_caller_QMARK_))
{fn1.call(null,val_9750);
} else
{cljs.core.async.impl.dispatch.run.call(null,(function (){return fn1.call(null,val_9750);
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
cljs.core.async.random_array = (function random_array(n){var a = (new Array(n));var n__4250__auto___9751 = n;var x_9752 = 0;while(true){
if((x_9752 < n__4250__auto___9751))
{(a[x_9752] = 0);
{
var G__9753 = (x_9752 + 1);
x_9752 = G__9753;
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
var G__9754 = (i + 1);
i = G__9754;
continue;
}
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){var flag = cljs.core.atom.call(null,true);if(typeof cljs.core.async.t9758 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t9758 = (function (flag,alt_flag,meta9759){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta9759 = meta9759;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t9758.cljs$lang$type = true;
cljs.core.async.t9758.cljs$lang$ctorStr = "cljs.core.async/t9758";
cljs.core.async.t9758.cljs$lang$ctorPrWriter = (function (this__3970__auto__,writer__3971__auto__,opt__3972__auto__){return cljs.core._write.call(null,writer__3971__auto__,"cljs.core.async/t9758");
});
cljs.core.async.t9758.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t9758.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.deref.call(null,self__.flag);
});
cljs.core.async.t9758.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.flag,null);
return true;
});
cljs.core.async.t9758.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_9760){var self__ = this;
var _9760__$1 = this;return self__.meta9759;
});
cljs.core.async.t9758.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_9760,meta9759__$1){var self__ = this;
var _9760__$1 = this;return (new cljs.core.async.t9758(self__.flag,self__.alt_flag,meta9759__$1));
});
cljs.core.async.__GT_t9758 = (function __GT_t9758(flag__$1,alt_flag__$1,meta9759){return (new cljs.core.async.t9758(flag__$1,alt_flag__$1,meta9759));
});
}
return (new cljs.core.async.t9758(flag,alt_flag,null));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){if(typeof cljs.core.async.t9764 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t9764 = (function (cb,flag,alt_handler,meta9765){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta9765 = meta9765;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t9764.cljs$lang$type = true;
cljs.core.async.t9764.cljs$lang$ctorStr = "cljs.core.async/t9764";
cljs.core.async.t9764.cljs$lang$ctorPrWriter = (function (this__3970__auto__,writer__3971__auto__,opt__3972__auto__){return cljs.core._write.call(null,writer__3971__auto__,"cljs.core.async/t9764");
});
cljs.core.async.t9764.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t9764.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});
cljs.core.async.t9764.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.async.impl.protocols.commit.call(null,self__.flag);
return self__.cb;
});
cljs.core.async.t9764.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_9766){var self__ = this;
var _9766__$1 = this;return self__.meta9765;
});
cljs.core.async.t9764.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_9766,meta9765__$1){var self__ = this;
var _9766__$1 = this;return (new cljs.core.async.t9764(self__.cb,self__.flag,self__.alt_handler,meta9765__$1));
});
cljs.core.async.__GT_t9764 = (function __GT_t9764(cb__$1,flag__$1,alt_handler__$1,meta9765){return (new cljs.core.async.t9764(cb__$1,flag__$1,alt_handler__$1,meta9765));
});
}
return (new cljs.core.async.t9764(cb,flag,alt_handler,null));
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
return (function (p1__9767_SHARP_){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__9767_SHARP_,port], null));
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
var G__9768 = (i + 1);
i = G__9768;
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
var alts_BANG___delegate = function (ports,p__9769){var map__9771 = p__9769;var map__9771__$1 = ((cljs.core.seq_QMARK_.call(null,map__9771))?cljs.core.apply.call(null,cljs.core.hash_map,map__9771):map__9771);var opts = map__9771__$1;if(null)
{return null;
} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("alts! used not in (go ...) block"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,null))].join('')));
}
};
var alts_BANG_ = function (ports,var_args){
var p__9769 = null;if (arguments.length > 1) {
  p__9769 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return alts_BANG___delegate.call(this,ports,p__9769);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__9772){
var ports = cljs.core.first(arglist__9772);
var p__9769 = cljs.core.rest(arglist__9772);
return alts_BANG___delegate(ports,p__9769);
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
cljs.core.async.map_LT_ = (function map_LT_(f,ch){if(typeof cljs.core.async.t9780 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t9780 = (function (ch,f,map_LT_,meta9781){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta9781 = meta9781;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t9780.cljs$lang$type = true;
cljs.core.async.t9780.cljs$lang$ctorStr = "cljs.core.async/t9780";
cljs.core.async.t9780.cljs$lang$ctorPrWriter = (function (this__3970__auto__,writer__3971__auto__,opt__3972__auto__){return cljs.core._write.call(null,writer__3971__auto__,"cljs.core.async/t9780");
});
cljs.core.async.t9780.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t9780.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
});
cljs.core.async.t9780.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t9780.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){if(typeof cljs.core.async.t9783 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t9783 = (function (fn1,_,meta9781,ch,f,map_LT_,meta9784){
this.fn1 = fn1;
this._ = _;
this.meta9781 = meta9781;
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta9784 = meta9784;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t9783.cljs$lang$type = true;
cljs.core.async.t9783.cljs$lang$ctorStr = "cljs.core.async/t9783";
cljs.core.async.t9783.cljs$lang$ctorPrWriter = (function (this__3970__auto__,writer__3971__auto__,opt__3972__auto__){return cljs.core._write.call(null,writer__3971__auto__,"cljs.core.async/t9783");
});
cljs.core.async.t9783.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t9783.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});
cljs.core.async.t9783.prototype.cljs$core$async$impl$protocols$Handler$lock_id$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.lock_id.call(null,self__.fn1);
});
cljs.core.async.t9783.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);return ((function (f1,___$4){
return (function (p1__9773_SHARP_){return f1.call(null,(((p1__9773_SHARP_ == null))?null:self__.f.call(null,p1__9773_SHARP_)));
});
;})(f1,___$4))
});
cljs.core.async.t9783.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_9785){var self__ = this;
var _9785__$1 = this;return self__.meta9784;
});
cljs.core.async.t9783.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_9785,meta9784__$1){var self__ = this;
var _9785__$1 = this;return (new cljs.core.async.t9783(self__.fn1,self__._,self__.meta9781,self__.ch,self__.f,self__.map_LT_,meta9784__$1));
});
cljs.core.async.__GT_t9783 = (function __GT_t9783(fn1__$1,___$2,meta9781__$1,ch__$2,f__$2,map_LT___$2,meta9784){return (new cljs.core.async.t9783(fn1__$1,___$2,meta9781__$1,ch__$2,f__$2,map_LT___$2,meta9784));
});
}
return (new cljs.core.async.t9783(fn1,___$1,self__.meta9781,self__.ch,self__.f,self__.map_LT_,null));
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
cljs.core.async.t9780.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t9780.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t9780.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_9782){var self__ = this;
var _9782__$1 = this;return self__.meta9781;
});
cljs.core.async.t9780.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_9782,meta9781__$1){var self__ = this;
var _9782__$1 = this;return (new cljs.core.async.t9780(self__.ch,self__.f,self__.map_LT_,meta9781__$1));
});
cljs.core.async.__GT_t9780 = (function __GT_t9780(ch__$1,f__$1,map_LT___$1,meta9781){return (new cljs.core.async.t9780(ch__$1,f__$1,map_LT___$1,meta9781));
});
}
return (new cljs.core.async.t9780(ch,f,map_LT_,null));
});
/**
* Takes a function and a target channel, and returns a channel which
* applies f to each value before supplying it to the target channel.
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){if(typeof cljs.core.async.t9789 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t9789 = (function (ch,f,map_GT_,meta9790){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta9790 = meta9790;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t9789.cljs$lang$type = true;
cljs.core.async.t9789.cljs$lang$ctorStr = "cljs.core.async/t9789";
cljs.core.async.t9789.cljs$lang$ctorPrWriter = (function (this__3970__auto__,writer__3971__auto__,opt__3972__auto__){return cljs.core._write.call(null,writer__3971__auto__,"cljs.core.async/t9789");
});
cljs.core.async.t9789.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t9789.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn0);
});
cljs.core.async.t9789.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t9789.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t9789.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t9789.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t9789.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_9791){var self__ = this;
var _9791__$1 = this;return self__.meta9790;
});
cljs.core.async.t9789.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_9791,meta9790__$1){var self__ = this;
var _9791__$1 = this;return (new cljs.core.async.t9789(self__.ch,self__.f,self__.map_GT_,meta9790__$1));
});
cljs.core.async.__GT_t9789 = (function __GT_t9789(ch__$1,f__$1,map_GT___$1,meta9790){return (new cljs.core.async.t9789(ch__$1,f__$1,map_GT___$1,meta9790));
});
}
return (new cljs.core.async.t9789(ch,f,map_GT_,null));
});
/**
* Takes a predicate and a target channel, and returns a channel which
* supplies only the values for which the predicate returns true to the
* target channel.
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){if(typeof cljs.core.async.t9795 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t9795 = (function (ch,p,filter_GT_,meta9796){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta9796 = meta9796;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t9795.cljs$lang$type = true;
cljs.core.async.t9795.cljs$lang$ctorStr = "cljs.core.async/t9795";
cljs.core.async.t9795.cljs$lang$ctorPrWriter = (function (this__3970__auto__,writer__3971__auto__,opt__3972__auto__){return cljs.core._write.call(null,writer__3971__auto__,"cljs.core.async/t9795");
});
cljs.core.async.t9795.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t9795.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.p.call(null,val)))
{return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
} else
{return cljs.core.async.impl.channels.box.call(null,null);
}
});
cljs.core.async.t9795.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t9795.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t9795.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t9795.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t9795.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_9797){var self__ = this;
var _9797__$1 = this;return self__.meta9796;
});
cljs.core.async.t9795.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_9797,meta9796__$1){var self__ = this;
var _9797__$1 = this;return (new cljs.core.async.t9795(self__.ch,self__.p,self__.filter_GT_,meta9796__$1));
});
cljs.core.async.__GT_t9795 = (function __GT_t9795(ch__$1,p__$1,filter_GT___$1,meta9796){return (new cljs.core.async.t9795(ch__$1,p__$1,filter_GT___$1,meta9796));
});
}
return (new cljs.core.async.t9795(ch,p,filter_GT_,null));
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
var filter_LT___3 = (function (p,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5523__auto___9880 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5524__auto__ = (function (){var switch__5508__auto__ = (function (state_9859){var state_val_9860 = (state_9859[1]);if((state_val_9860 === 1))
{var state_9859__$1 = state_9859;var statearr_9861_9881 = state_9859__$1;(statearr_9861_9881[2] = null);
(statearr_9861_9881[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9860 === 2))
{var state_9859__$1 = state_9859;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_9859__$1,4,ch);
} else
{if((state_val_9860 === 3))
{var inst_9857 = (state_9859[2]);var state_9859__$1 = state_9859;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9859__$1,inst_9857);
} else
{if((state_val_9860 === 4))
{var inst_9841 = (state_9859[7]);var inst_9841__$1 = (state_9859[2]);var inst_9842 = (inst_9841__$1 == null);var state_9859__$1 = (function (){var statearr_9862 = state_9859;(statearr_9862[7] = inst_9841__$1);
return statearr_9862;
})();if(cljs.core.truth_(inst_9842))
{var statearr_9863_9882 = state_9859__$1;(statearr_9863_9882[1] = 5);
} else
{var statearr_9864_9883 = state_9859__$1;(statearr_9864_9883[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9860 === 5))
{var inst_9844 = cljs.core.async.close_BANG_.call(null,out);var state_9859__$1 = state_9859;var statearr_9865_9884 = state_9859__$1;(statearr_9865_9884[2] = inst_9844);
(statearr_9865_9884[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9860 === 6))
{var inst_9841 = (state_9859[7]);var inst_9846 = p.call(null,inst_9841);var state_9859__$1 = state_9859;if(cljs.core.truth_(inst_9846))
{var statearr_9866_9885 = state_9859__$1;(statearr_9866_9885[1] = 8);
} else
{var statearr_9867_9886 = state_9859__$1;(statearr_9867_9886[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9860 === 7))
{var inst_9855 = (state_9859[2]);var state_9859__$1 = state_9859;var statearr_9868_9887 = state_9859__$1;(statearr_9868_9887[2] = inst_9855);
(statearr_9868_9887[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9860 === 8))
{var inst_9841 = (state_9859[7]);var state_9859__$1 = state_9859;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_9859__$1,11,out,inst_9841);
} else
{if((state_val_9860 === 9))
{var state_9859__$1 = state_9859;var statearr_9869_9888 = state_9859__$1;(statearr_9869_9888[2] = null);
(statearr_9869_9888[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9860 === 10))
{var inst_9852 = (state_9859[2]);var state_9859__$1 = (function (){var statearr_9870 = state_9859;(statearr_9870[8] = inst_9852);
return statearr_9870;
})();var statearr_9871_9889 = state_9859__$1;(statearr_9871_9889[2] = null);
(statearr_9871_9889[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9860 === 11))
{var inst_9849 = (state_9859[2]);var state_9859__$1 = state_9859;var statearr_9872_9890 = state_9859__$1;(statearr_9872_9890[2] = inst_9849);
(statearr_9872_9890[1] = 10);
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
var state_machine__5509__auto____0 = (function (){var statearr_9876 = [null,null,null,null,null,null,null,null,null];(statearr_9876[0] = state_machine__5509__auto__);
(statearr_9876[1] = 1);
return statearr_9876;
});
var state_machine__5509__auto____1 = (function (state_9859){while(true){
var ret_value__5510__auto__ = (function (){try{while(true){
var result__5511__auto__ = switch__5508__auto__.call(null,state_9859);if(cljs.core.keyword_identical_QMARK_.call(null,result__5511__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5511__auto__;
}
break;
}
}catch (e9877){if((e9877 instanceof Object))
{var ex__5512__auto__ = e9877;var statearr_9878_9891 = state_9859;(statearr_9878_9891[5] = ex__5512__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9859);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e9877;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5510__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__9892 = state_9859;
state_9859 = G__9892;
continue;
}
} else
{return ret_value__5510__auto__;
}
break;
}
});
state_machine__5509__auto__ = function(state_9859){
switch(arguments.length){
case 0:
return state_machine__5509__auto____0.call(this);
case 1:
return state_machine__5509__auto____1.call(this,state_9859);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5509__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5509__auto____0;
state_machine__5509__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5509__auto____1;
return state_machine__5509__auto__;
})()
;})(switch__5508__auto__))
})();var state__5525__auto__ = (function (){var statearr_9879 = f__5524__auto__.call(null);(statearr_9879[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5523__auto___9880);
return statearr_9879;
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
cljs.core.async.mapcat_STAR_ = (function mapcat_STAR_(f,in$,out){var c__5523__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5524__auto__ = (function (){var switch__5508__auto__ = (function (state_10044){var state_val_10045 = (state_10044[1]);if((state_val_10045 === 1))
{var state_10044__$1 = state_10044;var statearr_10046_10083 = state_10044__$1;(statearr_10046_10083[2] = null);
(statearr_10046_10083[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10045 === 2))
{var state_10044__$1 = state_10044;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10044__$1,4,in$);
} else
{if((state_val_10045 === 3))
{var inst_10042 = (state_10044[2]);var state_10044__$1 = state_10044;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10044__$1,inst_10042);
} else
{if((state_val_10045 === 4))
{var inst_9990 = (state_10044[7]);var inst_9990__$1 = (state_10044[2]);var inst_9991 = (inst_9990__$1 == null);var state_10044__$1 = (function (){var statearr_10047 = state_10044;(statearr_10047[7] = inst_9990__$1);
return statearr_10047;
})();if(cljs.core.truth_(inst_9991))
{var statearr_10048_10084 = state_10044__$1;(statearr_10048_10084[1] = 5);
} else
{var statearr_10049_10085 = state_10044__$1;(statearr_10049_10085[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10045 === 5))
{var inst_9993 = cljs.core.async.close_BANG_.call(null,out);var state_10044__$1 = state_10044;var statearr_10050_10086 = state_10044__$1;(statearr_10050_10086[2] = inst_9993);
(statearr_10050_10086[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10045 === 6))
{var inst_9990 = (state_10044[7]);var inst_9995 = f.call(null,inst_9990);var inst_10000 = cljs.core.seq.call(null,inst_9995);var inst_10001 = inst_10000;var inst_10002 = null;var inst_10003 = 0;var inst_10004 = 0;var state_10044__$1 = (function (){var statearr_10051 = state_10044;(statearr_10051[8] = inst_10004);
(statearr_10051[9] = inst_10003);
(statearr_10051[10] = inst_10002);
(statearr_10051[11] = inst_10001);
return statearr_10051;
})();var statearr_10052_10087 = state_10044__$1;(statearr_10052_10087[2] = null);
(statearr_10052_10087[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10045 === 7))
{var inst_10040 = (state_10044[2]);var state_10044__$1 = state_10044;var statearr_10053_10088 = state_10044__$1;(statearr_10053_10088[2] = inst_10040);
(statearr_10053_10088[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10045 === 8))
{var inst_10004 = (state_10044[8]);var inst_10003 = (state_10044[9]);var inst_10006 = (inst_10004 < inst_10003);var inst_10007 = inst_10006;var state_10044__$1 = state_10044;if(cljs.core.truth_(inst_10007))
{var statearr_10054_10089 = state_10044__$1;(statearr_10054_10089[1] = 10);
} else
{var statearr_10055_10090 = state_10044__$1;(statearr_10055_10090[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10045 === 9))
{var inst_10037 = (state_10044[2]);var state_10044__$1 = (function (){var statearr_10056 = state_10044;(statearr_10056[12] = inst_10037);
return statearr_10056;
})();var statearr_10057_10091 = state_10044__$1;(statearr_10057_10091[2] = null);
(statearr_10057_10091[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10045 === 10))
{var inst_10004 = (state_10044[8]);var inst_10002 = (state_10044[10]);var inst_10009 = cljs.core._nth.call(null,inst_10002,inst_10004);var state_10044__$1 = state_10044;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_10044__$1,13,out,inst_10009);
} else
{if((state_val_10045 === 11))
{var inst_10001 = (state_10044[11]);var inst_10015 = (state_10044[13]);var inst_10015__$1 = cljs.core.seq.call(null,inst_10001);var state_10044__$1 = (function (){var statearr_10061 = state_10044;(statearr_10061[13] = inst_10015__$1);
return statearr_10061;
})();if(inst_10015__$1)
{var statearr_10062_10092 = state_10044__$1;(statearr_10062_10092[1] = 14);
} else
{var statearr_10063_10093 = state_10044__$1;(statearr_10063_10093[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10045 === 12))
{var inst_10035 = (state_10044[2]);var state_10044__$1 = state_10044;var statearr_10064_10094 = state_10044__$1;(statearr_10064_10094[2] = inst_10035);
(statearr_10064_10094[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10045 === 13))
{var inst_10004 = (state_10044[8]);var inst_10003 = (state_10044[9]);var inst_10002 = (state_10044[10]);var inst_10001 = (state_10044[11]);var inst_10011 = (state_10044[2]);var inst_10012 = (inst_10004 + 1);var tmp10058 = inst_10003;var tmp10059 = inst_10002;var tmp10060 = inst_10001;var inst_10001__$1 = tmp10060;var inst_10002__$1 = tmp10059;var inst_10003__$1 = tmp10058;var inst_10004__$1 = inst_10012;var state_10044__$1 = (function (){var statearr_10065 = state_10044;(statearr_10065[8] = inst_10004__$1);
(statearr_10065[14] = inst_10011);
(statearr_10065[9] = inst_10003__$1);
(statearr_10065[10] = inst_10002__$1);
(statearr_10065[11] = inst_10001__$1);
return statearr_10065;
})();var statearr_10066_10095 = state_10044__$1;(statearr_10066_10095[2] = null);
(statearr_10066_10095[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10045 === 14))
{var inst_10015 = (state_10044[13]);var inst_10017 = cljs.core.chunked_seq_QMARK_.call(null,inst_10015);var state_10044__$1 = state_10044;if(inst_10017)
{var statearr_10067_10096 = state_10044__$1;(statearr_10067_10096[1] = 17);
} else
{var statearr_10068_10097 = state_10044__$1;(statearr_10068_10097[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10045 === 15))
{var state_10044__$1 = state_10044;var statearr_10069_10098 = state_10044__$1;(statearr_10069_10098[2] = null);
(statearr_10069_10098[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10045 === 16))
{var inst_10033 = (state_10044[2]);var state_10044__$1 = state_10044;var statearr_10070_10099 = state_10044__$1;(statearr_10070_10099[2] = inst_10033);
(statearr_10070_10099[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10045 === 17))
{var inst_10015 = (state_10044[13]);var inst_10019 = cljs.core.chunk_first.call(null,inst_10015);var inst_10020 = cljs.core.chunk_rest.call(null,inst_10015);var inst_10021 = cljs.core.count.call(null,inst_10019);var inst_10001 = inst_10020;var inst_10002 = inst_10019;var inst_10003 = inst_10021;var inst_10004 = 0;var state_10044__$1 = (function (){var statearr_10071 = state_10044;(statearr_10071[8] = inst_10004);
(statearr_10071[9] = inst_10003);
(statearr_10071[10] = inst_10002);
(statearr_10071[11] = inst_10001);
return statearr_10071;
})();var statearr_10072_10100 = state_10044__$1;(statearr_10072_10100[2] = null);
(statearr_10072_10100[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10045 === 18))
{var inst_10015 = (state_10044[13]);var inst_10024 = cljs.core.first.call(null,inst_10015);var state_10044__$1 = state_10044;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_10044__$1,20,out,inst_10024);
} else
{if((state_val_10045 === 19))
{var inst_10030 = (state_10044[2]);var state_10044__$1 = state_10044;var statearr_10073_10101 = state_10044__$1;(statearr_10073_10101[2] = inst_10030);
(statearr_10073_10101[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10045 === 20))
{var inst_10015 = (state_10044[13]);var inst_10026 = (state_10044[2]);var inst_10027 = cljs.core.next.call(null,inst_10015);var inst_10001 = inst_10027;var inst_10002 = null;var inst_10003 = 0;var inst_10004 = 0;var state_10044__$1 = (function (){var statearr_10074 = state_10044;(statearr_10074[8] = inst_10004);
(statearr_10074[9] = inst_10003);
(statearr_10074[10] = inst_10002);
(statearr_10074[11] = inst_10001);
(statearr_10074[15] = inst_10026);
return statearr_10074;
})();var statearr_10075_10102 = state_10044__$1;(statearr_10075_10102[2] = null);
(statearr_10075_10102[1] = 8);
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
var state_machine__5509__auto____0 = (function (){var statearr_10079 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_10079[0] = state_machine__5509__auto__);
(statearr_10079[1] = 1);
return statearr_10079;
});
var state_machine__5509__auto____1 = (function (state_10044){while(true){
var ret_value__5510__auto__ = (function (){try{while(true){
var result__5511__auto__ = switch__5508__auto__.call(null,state_10044);if(cljs.core.keyword_identical_QMARK_.call(null,result__5511__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5511__auto__;
}
break;
}
}catch (e10080){if((e10080 instanceof Object))
{var ex__5512__auto__ = e10080;var statearr_10081_10103 = state_10044;(statearr_10081_10103[5] = ex__5512__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10044);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e10080;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5510__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__10104 = state_10044;
state_10044 = G__10104;
continue;
}
} else
{return ret_value__5510__auto__;
}
break;
}
});
state_machine__5509__auto__ = function(state_10044){
switch(arguments.length){
case 0:
return state_machine__5509__auto____0.call(this);
case 1:
return state_machine__5509__auto____1.call(this,state_10044);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5509__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5509__auto____0;
state_machine__5509__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5509__auto____1;
return state_machine__5509__auto__;
})()
;})(switch__5508__auto__))
})();var state__5525__auto__ = (function (){var statearr_10082 = f__5524__auto__.call(null);(statearr_10082[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5523__auto__);
return statearr_10082;
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
var pipe__3 = (function (from,to,close_QMARK_){var c__5523__auto___10185 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5524__auto__ = (function (){var switch__5508__auto__ = (function (state_10164){var state_val_10165 = (state_10164[1]);if((state_val_10165 === 1))
{var state_10164__$1 = state_10164;var statearr_10166_10186 = state_10164__$1;(statearr_10166_10186[2] = null);
(statearr_10166_10186[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10165 === 2))
{var state_10164__$1 = state_10164;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10164__$1,4,from);
} else
{if((state_val_10165 === 3))
{var inst_10162 = (state_10164[2]);var state_10164__$1 = state_10164;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10164__$1,inst_10162);
} else
{if((state_val_10165 === 4))
{var inst_10147 = (state_10164[7]);var inst_10147__$1 = (state_10164[2]);var inst_10148 = (inst_10147__$1 == null);var state_10164__$1 = (function (){var statearr_10167 = state_10164;(statearr_10167[7] = inst_10147__$1);
return statearr_10167;
})();if(cljs.core.truth_(inst_10148))
{var statearr_10168_10187 = state_10164__$1;(statearr_10168_10187[1] = 5);
} else
{var statearr_10169_10188 = state_10164__$1;(statearr_10169_10188[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10165 === 5))
{var state_10164__$1 = state_10164;if(cljs.core.truth_(close_QMARK_))
{var statearr_10170_10189 = state_10164__$1;(statearr_10170_10189[1] = 8);
} else
{var statearr_10171_10190 = state_10164__$1;(statearr_10171_10190[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10165 === 6))
{var inst_10147 = (state_10164[7]);var state_10164__$1 = state_10164;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_10164__$1,11,to,inst_10147);
} else
{if((state_val_10165 === 7))
{var inst_10160 = (state_10164[2]);var state_10164__$1 = state_10164;var statearr_10172_10191 = state_10164__$1;(statearr_10172_10191[2] = inst_10160);
(statearr_10172_10191[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10165 === 8))
{var inst_10151 = cljs.core.async.close_BANG_.call(null,to);var state_10164__$1 = state_10164;var statearr_10173_10192 = state_10164__$1;(statearr_10173_10192[2] = inst_10151);
(statearr_10173_10192[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10165 === 9))
{var state_10164__$1 = state_10164;var statearr_10174_10193 = state_10164__$1;(statearr_10174_10193[2] = null);
(statearr_10174_10193[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10165 === 10))
{var inst_10154 = (state_10164[2]);var state_10164__$1 = state_10164;var statearr_10175_10194 = state_10164__$1;(statearr_10175_10194[2] = inst_10154);
(statearr_10175_10194[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10165 === 11))
{var inst_10157 = (state_10164[2]);var state_10164__$1 = (function (){var statearr_10176 = state_10164;(statearr_10176[8] = inst_10157);
return statearr_10176;
})();var statearr_10177_10195 = state_10164__$1;(statearr_10177_10195[2] = null);
(statearr_10177_10195[1] = 2);
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
var state_machine__5509__auto____0 = (function (){var statearr_10181 = [null,null,null,null,null,null,null,null,null];(statearr_10181[0] = state_machine__5509__auto__);
(statearr_10181[1] = 1);
return statearr_10181;
});
var state_machine__5509__auto____1 = (function (state_10164){while(true){
var ret_value__5510__auto__ = (function (){try{while(true){
var result__5511__auto__ = switch__5508__auto__.call(null,state_10164);if(cljs.core.keyword_identical_QMARK_.call(null,result__5511__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5511__auto__;
}
break;
}
}catch (e10182){if((e10182 instanceof Object))
{var ex__5512__auto__ = e10182;var statearr_10183_10196 = state_10164;(statearr_10183_10196[5] = ex__5512__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10164);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e10182;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5510__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__10197 = state_10164;
state_10164 = G__10197;
continue;
}
} else
{return ret_value__5510__auto__;
}
break;
}
});
state_machine__5509__auto__ = function(state_10164){
switch(arguments.length){
case 0:
return state_machine__5509__auto____0.call(this);
case 1:
return state_machine__5509__auto____1.call(this,state_10164);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5509__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5509__auto____0;
state_machine__5509__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5509__auto____1;
return state_machine__5509__auto__;
})()
;})(switch__5508__auto__))
})();var state__5525__auto__ = (function (){var statearr_10184 = f__5524__auto__.call(null);(statearr_10184[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5523__auto___10185);
return statearr_10184;
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
var split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){var tc = cljs.core.async.chan.call(null,t_buf_or_n);var fc = cljs.core.async.chan.call(null,f_buf_or_n);var c__5523__auto___10284 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5524__auto__ = (function (){var switch__5508__auto__ = (function (state_10262){var state_val_10263 = (state_10262[1]);if((state_val_10263 === 1))
{var state_10262__$1 = state_10262;var statearr_10264_10285 = state_10262__$1;(statearr_10264_10285[2] = null);
(statearr_10264_10285[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10263 === 2))
{var state_10262__$1 = state_10262;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10262__$1,4,ch);
} else
{if((state_val_10263 === 3))
{var inst_10260 = (state_10262[2]);var state_10262__$1 = state_10262;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10262__$1,inst_10260);
} else
{if((state_val_10263 === 4))
{var inst_10243 = (state_10262[7]);var inst_10243__$1 = (state_10262[2]);var inst_10244 = (inst_10243__$1 == null);var state_10262__$1 = (function (){var statearr_10265 = state_10262;(statearr_10265[7] = inst_10243__$1);
return statearr_10265;
})();if(cljs.core.truth_(inst_10244))
{var statearr_10266_10286 = state_10262__$1;(statearr_10266_10286[1] = 5);
} else
{var statearr_10267_10287 = state_10262__$1;(statearr_10267_10287[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10263 === 5))
{var inst_10246 = cljs.core.async.close_BANG_.call(null,tc);var inst_10247 = cljs.core.async.close_BANG_.call(null,fc);var state_10262__$1 = (function (){var statearr_10268 = state_10262;(statearr_10268[8] = inst_10246);
return statearr_10268;
})();var statearr_10269_10288 = state_10262__$1;(statearr_10269_10288[2] = inst_10247);
(statearr_10269_10288[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10263 === 6))
{var inst_10243 = (state_10262[7]);var inst_10249 = p.call(null,inst_10243);var state_10262__$1 = state_10262;if(cljs.core.truth_(inst_10249))
{var statearr_10270_10289 = state_10262__$1;(statearr_10270_10289[1] = 9);
} else
{var statearr_10271_10290 = state_10262__$1;(statearr_10271_10290[1] = 10);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10263 === 7))
{var inst_10258 = (state_10262[2]);var state_10262__$1 = state_10262;var statearr_10272_10291 = state_10262__$1;(statearr_10272_10291[2] = inst_10258);
(statearr_10272_10291[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10263 === 8))
{var inst_10255 = (state_10262[2]);var state_10262__$1 = (function (){var statearr_10273 = state_10262;(statearr_10273[9] = inst_10255);
return statearr_10273;
})();var statearr_10274_10292 = state_10262__$1;(statearr_10274_10292[2] = null);
(statearr_10274_10292[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10263 === 9))
{var state_10262__$1 = state_10262;var statearr_10275_10293 = state_10262__$1;(statearr_10275_10293[2] = tc);
(statearr_10275_10293[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10263 === 10))
{var state_10262__$1 = state_10262;var statearr_10276_10294 = state_10262__$1;(statearr_10276_10294[2] = fc);
(statearr_10276_10294[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10263 === 11))
{var inst_10243 = (state_10262[7]);var inst_10253 = (state_10262[2]);var state_10262__$1 = state_10262;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_10262__$1,8,inst_10253,inst_10243);
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
var state_machine__5509__auto____0 = (function (){var statearr_10280 = [null,null,null,null,null,null,null,null,null,null];(statearr_10280[0] = state_machine__5509__auto__);
(statearr_10280[1] = 1);
return statearr_10280;
});
var state_machine__5509__auto____1 = (function (state_10262){while(true){
var ret_value__5510__auto__ = (function (){try{while(true){
var result__5511__auto__ = switch__5508__auto__.call(null,state_10262);if(cljs.core.keyword_identical_QMARK_.call(null,result__5511__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5511__auto__;
}
break;
}
}catch (e10281){if((e10281 instanceof Object))
{var ex__5512__auto__ = e10281;var statearr_10282_10295 = state_10262;(statearr_10282_10295[5] = ex__5512__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10262);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e10281;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5510__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__10296 = state_10262;
state_10262 = G__10296;
continue;
}
} else
{return ret_value__5510__auto__;
}
break;
}
});
state_machine__5509__auto__ = function(state_10262){
switch(arguments.length){
case 0:
return state_machine__5509__auto____0.call(this);
case 1:
return state_machine__5509__auto____1.call(this,state_10262);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5509__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5509__auto____0;
state_machine__5509__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5509__auto____1;
return state_machine__5509__auto__;
})()
;})(switch__5508__auto__))
})();var state__5525__auto__ = (function (){var statearr_10283 = f__5524__auto__.call(null);(statearr_10283[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5523__auto___10284);
return statearr_10283;
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
cljs.core.async.reduce = (function reduce(f,init,ch){var c__5523__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5524__auto__ = (function (){var switch__5508__auto__ = (function (state_10343){var state_val_10344 = (state_10343[1]);if((state_val_10344 === 7))
{var inst_10339 = (state_10343[2]);var state_10343__$1 = state_10343;var statearr_10345_10361 = state_10343__$1;(statearr_10345_10361[2] = inst_10339);
(statearr_10345_10361[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10344 === 6))
{var inst_10332 = (state_10343[7]);var inst_10329 = (state_10343[8]);var inst_10336 = f.call(null,inst_10329,inst_10332);var inst_10329__$1 = inst_10336;var state_10343__$1 = (function (){var statearr_10346 = state_10343;(statearr_10346[8] = inst_10329__$1);
return statearr_10346;
})();var statearr_10347_10362 = state_10343__$1;(statearr_10347_10362[2] = null);
(statearr_10347_10362[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10344 === 5))
{var inst_10329 = (state_10343[8]);var state_10343__$1 = state_10343;var statearr_10348_10363 = state_10343__$1;(statearr_10348_10363[2] = inst_10329);
(statearr_10348_10363[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10344 === 4))
{var inst_10332 = (state_10343[7]);var inst_10332__$1 = (state_10343[2]);var inst_10333 = (inst_10332__$1 == null);var state_10343__$1 = (function (){var statearr_10349 = state_10343;(statearr_10349[7] = inst_10332__$1);
return statearr_10349;
})();if(cljs.core.truth_(inst_10333))
{var statearr_10350_10364 = state_10343__$1;(statearr_10350_10364[1] = 5);
} else
{var statearr_10351_10365 = state_10343__$1;(statearr_10351_10365[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10344 === 3))
{var inst_10341 = (state_10343[2]);var state_10343__$1 = state_10343;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10343__$1,inst_10341);
} else
{if((state_val_10344 === 2))
{var state_10343__$1 = state_10343;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10343__$1,4,ch);
} else
{if((state_val_10344 === 1))
{var inst_10329 = init;var state_10343__$1 = (function (){var statearr_10352 = state_10343;(statearr_10352[8] = inst_10329);
return statearr_10352;
})();var statearr_10353_10366 = state_10343__$1;(statearr_10353_10366[2] = null);
(statearr_10353_10366[1] = 2);
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
var state_machine__5509__auto____0 = (function (){var statearr_10357 = [null,null,null,null,null,null,null,null,null];(statearr_10357[0] = state_machine__5509__auto__);
(statearr_10357[1] = 1);
return statearr_10357;
});
var state_machine__5509__auto____1 = (function (state_10343){while(true){
var ret_value__5510__auto__ = (function (){try{while(true){
var result__5511__auto__ = switch__5508__auto__.call(null,state_10343);if(cljs.core.keyword_identical_QMARK_.call(null,result__5511__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5511__auto__;
}
break;
}
}catch (e10358){if((e10358 instanceof Object))
{var ex__5512__auto__ = e10358;var statearr_10359_10367 = state_10343;(statearr_10359_10367[5] = ex__5512__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10343);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e10358;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5510__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__10368 = state_10343;
state_10343 = G__10368;
continue;
}
} else
{return ret_value__5510__auto__;
}
break;
}
});
state_machine__5509__auto__ = function(state_10343){
switch(arguments.length){
case 0:
return state_machine__5509__auto____0.call(this);
case 1:
return state_machine__5509__auto____1.call(this,state_10343);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5509__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5509__auto____0;
state_machine__5509__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5509__auto____1;
return state_machine__5509__auto__;
})()
;})(switch__5508__auto__))
})();var state__5525__auto__ = (function (){var statearr_10360 = f__5524__auto__.call(null);(statearr_10360[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5523__auto__);
return statearr_10360;
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
var onto_chan__3 = (function (ch,coll,close_QMARK_){var c__5523__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5524__auto__ = (function (){var switch__5508__auto__ = (function (state_10430){var state_val_10431 = (state_10430[1]);if((state_val_10431 === 1))
{var inst_10410 = cljs.core.seq.call(null,coll);var inst_10411 = inst_10410;var state_10430__$1 = (function (){var statearr_10432 = state_10430;(statearr_10432[7] = inst_10411);
return statearr_10432;
})();var statearr_10433_10451 = state_10430__$1;(statearr_10433_10451[2] = null);
(statearr_10433_10451[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10431 === 2))
{var inst_10411 = (state_10430[7]);var state_10430__$1 = state_10430;if(cljs.core.truth_(inst_10411))
{var statearr_10434_10452 = state_10430__$1;(statearr_10434_10452[1] = 4);
} else
{var statearr_10435_10453 = state_10430__$1;(statearr_10435_10453[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10431 === 3))
{var inst_10428 = (state_10430[2]);var state_10430__$1 = state_10430;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10430__$1,inst_10428);
} else
{if((state_val_10431 === 4))
{var inst_10411 = (state_10430[7]);var inst_10414 = cljs.core.first.call(null,inst_10411);var state_10430__$1 = state_10430;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_10430__$1,7,ch,inst_10414);
} else
{if((state_val_10431 === 5))
{var state_10430__$1 = state_10430;if(cljs.core.truth_(close_QMARK_))
{var statearr_10436_10454 = state_10430__$1;(statearr_10436_10454[1] = 8);
} else
{var statearr_10437_10455 = state_10430__$1;(statearr_10437_10455[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10431 === 6))
{var inst_10426 = (state_10430[2]);var state_10430__$1 = state_10430;var statearr_10438_10456 = state_10430__$1;(statearr_10438_10456[2] = inst_10426);
(statearr_10438_10456[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10431 === 7))
{var inst_10411 = (state_10430[7]);var inst_10416 = (state_10430[2]);var inst_10417 = cljs.core.next.call(null,inst_10411);var inst_10411__$1 = inst_10417;var state_10430__$1 = (function (){var statearr_10439 = state_10430;(statearr_10439[8] = inst_10416);
(statearr_10439[7] = inst_10411__$1);
return statearr_10439;
})();var statearr_10440_10457 = state_10430__$1;(statearr_10440_10457[2] = null);
(statearr_10440_10457[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10431 === 8))
{var inst_10421 = cljs.core.async.close_BANG_.call(null,ch);var state_10430__$1 = state_10430;var statearr_10441_10458 = state_10430__$1;(statearr_10441_10458[2] = inst_10421);
(statearr_10441_10458[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10431 === 9))
{var state_10430__$1 = state_10430;var statearr_10442_10459 = state_10430__$1;(statearr_10442_10459[2] = null);
(statearr_10442_10459[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10431 === 10))
{var inst_10424 = (state_10430[2]);var state_10430__$1 = state_10430;var statearr_10443_10460 = state_10430__$1;(statearr_10443_10460[2] = inst_10424);
(statearr_10443_10460[1] = 6);
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
var state_machine__5509__auto____0 = (function (){var statearr_10447 = [null,null,null,null,null,null,null,null,null];(statearr_10447[0] = state_machine__5509__auto__);
(statearr_10447[1] = 1);
return statearr_10447;
});
var state_machine__5509__auto____1 = (function (state_10430){while(true){
var ret_value__5510__auto__ = (function (){try{while(true){
var result__5511__auto__ = switch__5508__auto__.call(null,state_10430);if(cljs.core.keyword_identical_QMARK_.call(null,result__5511__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5511__auto__;
}
break;
}
}catch (e10448){if((e10448 instanceof Object))
{var ex__5512__auto__ = e10448;var statearr_10449_10461 = state_10430;(statearr_10449_10461[5] = ex__5512__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10430);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e10448;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5510__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__10462 = state_10430;
state_10430 = G__10462;
continue;
}
} else
{return ret_value__5510__auto__;
}
break;
}
});
state_machine__5509__auto__ = function(state_10430){
switch(arguments.length){
case 0:
return state_machine__5509__auto____0.call(this);
case 1:
return state_machine__5509__auto____1.call(this,state_10430);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5509__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5509__auto____0;
state_machine__5509__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5509__auto____1;
return state_machine__5509__auto__;
})()
;})(switch__5508__auto__))
})();var state__5525__auto__ = (function (){var statearr_10450 = f__5524__auto__.call(null);(statearr_10450[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5523__auto__);
return statearr_10450;
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
cljs.core.async.Mux = (function (){var obj10464 = {};return obj10464;
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
cljs.core.async.Mult = (function (){var obj10466 = {};return obj10466;
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
cljs.core.async.mult = (function mult(ch){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var m = (function (){if(typeof cljs.core.async.t10690 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t10690 = (function (cs,ch,mult,meta10691){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta10691 = meta10691;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t10690.cljs$lang$type = true;
cljs.core.async.t10690.cljs$lang$ctorStr = "cljs.core.async/t10690";
cljs.core.async.t10690.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__3970__auto__,writer__3971__auto__,opt__3972__auto__){return cljs.core._write.call(null,writer__3971__auto__,"cljs.core.async/t10690");
});})(cs))
;
cljs.core.async.t10690.prototype.cljs$core$async$Mult$ = true;
cljs.core.async.t10690.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$2,close_QMARK_){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$2,close_QMARK_);
return null;
});})(cs))
;
cljs.core.async.t10690.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$2){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$2);
return null;
});})(cs))
;
cljs.core.async.t10690.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return null;
});})(cs))
;
cljs.core.async.t10690.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t10690.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(cs))
;
cljs.core.async.t10690.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_10692){var self__ = this;
var _10692__$1 = this;return self__.meta10691;
});})(cs))
;
cljs.core.async.t10690.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_10692,meta10691__$1){var self__ = this;
var _10692__$1 = this;return (new cljs.core.async.t10690(self__.cs,self__.ch,self__.mult,meta10691__$1));
});})(cs))
;
cljs.core.async.__GT_t10690 = ((function (cs){
return (function __GT_t10690(cs__$1,ch__$1,mult__$1,meta10691){return (new cljs.core.async.t10690(cs__$1,ch__$1,mult__$1,meta10691));
});})(cs))
;
}
return (new cljs.core.async.t10690(cs,ch,mult,null));
})();var dchan = cljs.core.async.chan.call(null,1);var dctr = cljs.core.atom.call(null,null);var done = ((function (cs,m,dchan,dctr){
return (function (){if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === 0))
{return cljs.core.async.put_BANG_.call(null,dchan,true);
} else
{return null;
}
});})(cs,m,dchan,dctr))
;var c__5523__auto___10913 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5524__auto__ = (function (){var switch__5508__auto__ = (function (state_10827){var state_val_10828 = (state_10827[1]);if((state_val_10828 === 32))
{var inst_10695 = (state_10827[7]);var inst_10771 = (state_10827[8]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_10827,31,Object,null,30);var inst_10778 = cljs.core.async.put_BANG_.call(null,inst_10771,inst_10695,done);var state_10827__$1 = state_10827;var statearr_10829_10914 = state_10827__$1;(statearr_10829_10914[2] = inst_10778);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10827__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10828 === 1))
{var state_10827__$1 = state_10827;var statearr_10830_10915 = state_10827__$1;(statearr_10830_10915[2] = null);
(statearr_10830_10915[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10828 === 33))
{var inst_10784 = (state_10827[9]);var inst_10786 = cljs.core.chunked_seq_QMARK_.call(null,inst_10784);var state_10827__$1 = state_10827;if(inst_10786)
{var statearr_10831_10916 = state_10827__$1;(statearr_10831_10916[1] = 36);
} else
{var statearr_10832_10917 = state_10827__$1;(statearr_10832_10917[1] = 37);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10828 === 2))
{var state_10827__$1 = state_10827;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10827__$1,4,ch);
} else
{if((state_val_10828 === 34))
{var state_10827__$1 = state_10827;var statearr_10833_10918 = state_10827__$1;(statearr_10833_10918[2] = null);
(statearr_10833_10918[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10828 === 3))
{var inst_10825 = (state_10827[2]);var state_10827__$1 = state_10827;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10827__$1,inst_10825);
} else
{if((state_val_10828 === 35))
{var inst_10809 = (state_10827[2]);var state_10827__$1 = state_10827;var statearr_10834_10919 = state_10827__$1;(statearr_10834_10919[2] = inst_10809);
(statearr_10834_10919[1] = 29);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10828 === 4))
{var inst_10695 = (state_10827[7]);var inst_10695__$1 = (state_10827[2]);var inst_10696 = (inst_10695__$1 == null);var state_10827__$1 = (function (){var statearr_10835 = state_10827;(statearr_10835[7] = inst_10695__$1);
return statearr_10835;
})();if(cljs.core.truth_(inst_10696))
{var statearr_10836_10920 = state_10827__$1;(statearr_10836_10920[1] = 5);
} else
{var statearr_10837_10921 = state_10827__$1;(statearr_10837_10921[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10828 === 36))
{var inst_10784 = (state_10827[9]);var inst_10788 = cljs.core.chunk_first.call(null,inst_10784);var inst_10789 = cljs.core.chunk_rest.call(null,inst_10784);var inst_10790 = cljs.core.count.call(null,inst_10788);var inst_10763 = inst_10789;var inst_10764 = inst_10788;var inst_10765 = inst_10790;var inst_10766 = 0;var state_10827__$1 = (function (){var statearr_10838 = state_10827;(statearr_10838[10] = inst_10763);
(statearr_10838[11] = inst_10764);
(statearr_10838[12] = inst_10765);
(statearr_10838[13] = inst_10766);
return statearr_10838;
})();var statearr_10839_10922 = state_10827__$1;(statearr_10839_10922[2] = null);
(statearr_10839_10922[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10828 === 5))
{var inst_10702 = cljs.core.deref.call(null,cs);var inst_10703 = cljs.core.seq.call(null,inst_10702);var inst_10704 = inst_10703;var inst_10705 = null;var inst_10706 = 0;var inst_10707 = 0;var state_10827__$1 = (function (){var statearr_10840 = state_10827;(statearr_10840[14] = inst_10704);
(statearr_10840[15] = inst_10707);
(statearr_10840[16] = inst_10705);
(statearr_10840[17] = inst_10706);
return statearr_10840;
})();var statearr_10841_10923 = state_10827__$1;(statearr_10841_10923[2] = null);
(statearr_10841_10923[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10828 === 37))
{var inst_10784 = (state_10827[9]);var inst_10793 = cljs.core.first.call(null,inst_10784);var state_10827__$1 = (function (){var statearr_10842 = state_10827;(statearr_10842[18] = inst_10793);
return statearr_10842;
})();var statearr_10843_10924 = state_10827__$1;(statearr_10843_10924[2] = null);
(statearr_10843_10924[1] = 41);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10828 === 6))
{var inst_10755 = (state_10827[19]);var inst_10754 = cljs.core.deref.call(null,cs);var inst_10755__$1 = cljs.core.keys.call(null,inst_10754);var inst_10756 = cljs.core.count.call(null,inst_10755__$1);var inst_10757 = cljs.core.reset_BANG_.call(null,dctr,inst_10756);var inst_10762 = cljs.core.seq.call(null,inst_10755__$1);var inst_10763 = inst_10762;var inst_10764 = null;var inst_10765 = 0;var inst_10766 = 0;var state_10827__$1 = (function (){var statearr_10844 = state_10827;(statearr_10844[10] = inst_10763);
(statearr_10844[11] = inst_10764);
(statearr_10844[12] = inst_10765);
(statearr_10844[13] = inst_10766);
(statearr_10844[19] = inst_10755__$1);
(statearr_10844[20] = inst_10757);
return statearr_10844;
})();var statearr_10845_10925 = state_10827__$1;(statearr_10845_10925[2] = null);
(statearr_10845_10925[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10828 === 38))
{var inst_10806 = (state_10827[2]);var state_10827__$1 = state_10827;var statearr_10846_10926 = state_10827__$1;(statearr_10846_10926[2] = inst_10806);
(statearr_10846_10926[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10828 === 7))
{var inst_10823 = (state_10827[2]);var state_10827__$1 = state_10827;var statearr_10847_10927 = state_10827__$1;(statearr_10847_10927[2] = inst_10823);
(statearr_10847_10927[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10828 === 39))
{var inst_10784 = (state_10827[9]);var inst_10802 = (state_10827[2]);var inst_10803 = cljs.core.next.call(null,inst_10784);var inst_10763 = inst_10803;var inst_10764 = null;var inst_10765 = 0;var inst_10766 = 0;var state_10827__$1 = (function (){var statearr_10848 = state_10827;(statearr_10848[10] = inst_10763);
(statearr_10848[11] = inst_10764);
(statearr_10848[12] = inst_10765);
(statearr_10848[13] = inst_10766);
(statearr_10848[21] = inst_10802);
return statearr_10848;
})();var statearr_10849_10928 = state_10827__$1;(statearr_10849_10928[2] = null);
(statearr_10849_10928[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10828 === 8))
{var inst_10707 = (state_10827[15]);var inst_10706 = (state_10827[17]);var inst_10709 = (inst_10707 < inst_10706);var inst_10710 = inst_10709;var state_10827__$1 = state_10827;if(cljs.core.truth_(inst_10710))
{var statearr_10850_10929 = state_10827__$1;(statearr_10850_10929[1] = 10);
} else
{var statearr_10851_10930 = state_10827__$1;(statearr_10851_10930[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10828 === 40))
{var inst_10793 = (state_10827[18]);var inst_10794 = (state_10827[2]);var inst_10795 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_10796 = cljs.core.async.untap_STAR_.call(null,m,inst_10793);var state_10827__$1 = (function (){var statearr_10852 = state_10827;(statearr_10852[22] = inst_10795);
(statearr_10852[23] = inst_10794);
return statearr_10852;
})();var statearr_10853_10931 = state_10827__$1;(statearr_10853_10931[2] = inst_10796);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10827__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10828 === 9))
{var inst_10752 = (state_10827[2]);var state_10827__$1 = state_10827;var statearr_10854_10932 = state_10827__$1;(statearr_10854_10932[2] = inst_10752);
(statearr_10854_10932[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10828 === 41))
{var inst_10695 = (state_10827[7]);var inst_10793 = (state_10827[18]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_10827,40,Object,null,39);var inst_10800 = cljs.core.async.put_BANG_.call(null,inst_10793,inst_10695,done);var state_10827__$1 = state_10827;var statearr_10855_10933 = state_10827__$1;(statearr_10855_10933[2] = inst_10800);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10827__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10828 === 10))
{var inst_10707 = (state_10827[15]);var inst_10705 = (state_10827[16]);var inst_10713 = cljs.core._nth.call(null,inst_10705,inst_10707);var inst_10714 = cljs.core.nth.call(null,inst_10713,0,null);var inst_10715 = cljs.core.nth.call(null,inst_10713,1,null);var state_10827__$1 = (function (){var statearr_10856 = state_10827;(statearr_10856[24] = inst_10714);
return statearr_10856;
})();if(cljs.core.truth_(inst_10715))
{var statearr_10857_10934 = state_10827__$1;(statearr_10857_10934[1] = 13);
} else
{var statearr_10858_10935 = state_10827__$1;(statearr_10858_10935[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10828 === 42))
{var state_10827__$1 = state_10827;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10827__$1,45,dchan);
} else
{if((state_val_10828 === 11))
{var inst_10704 = (state_10827[14]);var inst_10724 = (state_10827[25]);var inst_10724__$1 = cljs.core.seq.call(null,inst_10704);var state_10827__$1 = (function (){var statearr_10859 = state_10827;(statearr_10859[25] = inst_10724__$1);
return statearr_10859;
})();if(inst_10724__$1)
{var statearr_10860_10936 = state_10827__$1;(statearr_10860_10936[1] = 16);
} else
{var statearr_10861_10937 = state_10827__$1;(statearr_10861_10937[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10828 === 43))
{var state_10827__$1 = state_10827;var statearr_10862_10938 = state_10827__$1;(statearr_10862_10938[2] = null);
(statearr_10862_10938[1] = 44);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10828 === 12))
{var inst_10750 = (state_10827[2]);var state_10827__$1 = state_10827;var statearr_10863_10939 = state_10827__$1;(statearr_10863_10939[2] = inst_10750);
(statearr_10863_10939[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10828 === 44))
{var inst_10820 = (state_10827[2]);var state_10827__$1 = (function (){var statearr_10864 = state_10827;(statearr_10864[26] = inst_10820);
return statearr_10864;
})();var statearr_10865_10940 = state_10827__$1;(statearr_10865_10940[2] = null);
(statearr_10865_10940[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10828 === 13))
{var inst_10714 = (state_10827[24]);var inst_10717 = cljs.core.async.close_BANG_.call(null,inst_10714);var state_10827__$1 = state_10827;var statearr_10866_10941 = state_10827__$1;(statearr_10866_10941[2] = inst_10717);
(statearr_10866_10941[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10828 === 45))
{var inst_10817 = (state_10827[2]);var state_10827__$1 = state_10827;var statearr_10870_10942 = state_10827__$1;(statearr_10870_10942[2] = inst_10817);
(statearr_10870_10942[1] = 44);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10828 === 14))
{var state_10827__$1 = state_10827;var statearr_10871_10943 = state_10827__$1;(statearr_10871_10943[2] = null);
(statearr_10871_10943[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10828 === 15))
{var inst_10704 = (state_10827[14]);var inst_10707 = (state_10827[15]);var inst_10705 = (state_10827[16]);var inst_10706 = (state_10827[17]);var inst_10720 = (state_10827[2]);var inst_10721 = (inst_10707 + 1);var tmp10867 = inst_10704;var tmp10868 = inst_10705;var tmp10869 = inst_10706;var inst_10704__$1 = tmp10867;var inst_10705__$1 = tmp10868;var inst_10706__$1 = tmp10869;var inst_10707__$1 = inst_10721;var state_10827__$1 = (function (){var statearr_10872 = state_10827;(statearr_10872[27] = inst_10720);
(statearr_10872[14] = inst_10704__$1);
(statearr_10872[15] = inst_10707__$1);
(statearr_10872[16] = inst_10705__$1);
(statearr_10872[17] = inst_10706__$1);
return statearr_10872;
})();var statearr_10873_10944 = state_10827__$1;(statearr_10873_10944[2] = null);
(statearr_10873_10944[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10828 === 16))
{var inst_10724 = (state_10827[25]);var inst_10726 = cljs.core.chunked_seq_QMARK_.call(null,inst_10724);var state_10827__$1 = state_10827;if(inst_10726)
{var statearr_10874_10945 = state_10827__$1;(statearr_10874_10945[1] = 19);
} else
{var statearr_10875_10946 = state_10827__$1;(statearr_10875_10946[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10828 === 17))
{var state_10827__$1 = state_10827;var statearr_10876_10947 = state_10827__$1;(statearr_10876_10947[2] = null);
(statearr_10876_10947[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10828 === 18))
{var inst_10748 = (state_10827[2]);var state_10827__$1 = state_10827;var statearr_10877_10948 = state_10827__$1;(statearr_10877_10948[2] = inst_10748);
(statearr_10877_10948[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10828 === 19))
{var inst_10724 = (state_10827[25]);var inst_10728 = cljs.core.chunk_first.call(null,inst_10724);var inst_10729 = cljs.core.chunk_rest.call(null,inst_10724);var inst_10730 = cljs.core.count.call(null,inst_10728);var inst_10704 = inst_10729;var inst_10705 = inst_10728;var inst_10706 = inst_10730;var inst_10707 = 0;var state_10827__$1 = (function (){var statearr_10878 = state_10827;(statearr_10878[14] = inst_10704);
(statearr_10878[15] = inst_10707);
(statearr_10878[16] = inst_10705);
(statearr_10878[17] = inst_10706);
return statearr_10878;
})();var statearr_10879_10949 = state_10827__$1;(statearr_10879_10949[2] = null);
(statearr_10879_10949[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10828 === 20))
{var inst_10724 = (state_10827[25]);var inst_10734 = cljs.core.first.call(null,inst_10724);var inst_10735 = cljs.core.nth.call(null,inst_10734,0,null);var inst_10736 = cljs.core.nth.call(null,inst_10734,1,null);var state_10827__$1 = (function (){var statearr_10880 = state_10827;(statearr_10880[28] = inst_10735);
return statearr_10880;
})();if(cljs.core.truth_(inst_10736))
{var statearr_10881_10950 = state_10827__$1;(statearr_10881_10950[1] = 22);
} else
{var statearr_10882_10951 = state_10827__$1;(statearr_10882_10951[1] = 23);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10828 === 21))
{var inst_10745 = (state_10827[2]);var state_10827__$1 = state_10827;var statearr_10883_10952 = state_10827__$1;(statearr_10883_10952[2] = inst_10745);
(statearr_10883_10952[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10828 === 22))
{var inst_10735 = (state_10827[28]);var inst_10738 = cljs.core.async.close_BANG_.call(null,inst_10735);var state_10827__$1 = state_10827;var statearr_10884_10953 = state_10827__$1;(statearr_10884_10953[2] = inst_10738);
(statearr_10884_10953[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10828 === 23))
{var state_10827__$1 = state_10827;var statearr_10885_10954 = state_10827__$1;(statearr_10885_10954[2] = null);
(statearr_10885_10954[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10828 === 24))
{var inst_10724 = (state_10827[25]);var inst_10741 = (state_10827[2]);var inst_10742 = cljs.core.next.call(null,inst_10724);var inst_10704 = inst_10742;var inst_10705 = null;var inst_10706 = 0;var inst_10707 = 0;var state_10827__$1 = (function (){var statearr_10886 = state_10827;(statearr_10886[14] = inst_10704);
(statearr_10886[15] = inst_10707);
(statearr_10886[16] = inst_10705);
(statearr_10886[17] = inst_10706);
(statearr_10886[29] = inst_10741);
return statearr_10886;
})();var statearr_10887_10955 = state_10827__$1;(statearr_10887_10955[2] = null);
(statearr_10887_10955[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10828 === 25))
{var inst_10765 = (state_10827[12]);var inst_10766 = (state_10827[13]);var inst_10768 = (inst_10766 < inst_10765);var inst_10769 = inst_10768;var state_10827__$1 = state_10827;if(cljs.core.truth_(inst_10769))
{var statearr_10888_10956 = state_10827__$1;(statearr_10888_10956[1] = 27);
} else
{var statearr_10889_10957 = state_10827__$1;(statearr_10889_10957[1] = 28);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10828 === 26))
{var inst_10755 = (state_10827[19]);var inst_10813 = (state_10827[2]);var inst_10814 = cljs.core.seq.call(null,inst_10755);var state_10827__$1 = (function (){var statearr_10890 = state_10827;(statearr_10890[30] = inst_10813);
return statearr_10890;
})();if(inst_10814)
{var statearr_10891_10958 = state_10827__$1;(statearr_10891_10958[1] = 42);
} else
{var statearr_10892_10959 = state_10827__$1;(statearr_10892_10959[1] = 43);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10828 === 27))
{var inst_10764 = (state_10827[11]);var inst_10766 = (state_10827[13]);var inst_10771 = cljs.core._nth.call(null,inst_10764,inst_10766);var state_10827__$1 = (function (){var statearr_10893 = state_10827;(statearr_10893[8] = inst_10771);
return statearr_10893;
})();var statearr_10894_10960 = state_10827__$1;(statearr_10894_10960[2] = null);
(statearr_10894_10960[1] = 32);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10828 === 28))
{var inst_10763 = (state_10827[10]);var inst_10784 = (state_10827[9]);var inst_10784__$1 = cljs.core.seq.call(null,inst_10763);var state_10827__$1 = (function (){var statearr_10898 = state_10827;(statearr_10898[9] = inst_10784__$1);
return statearr_10898;
})();if(inst_10784__$1)
{var statearr_10899_10961 = state_10827__$1;(statearr_10899_10961[1] = 33);
} else
{var statearr_10900_10962 = state_10827__$1;(statearr_10900_10962[1] = 34);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10828 === 29))
{var inst_10811 = (state_10827[2]);var state_10827__$1 = state_10827;var statearr_10901_10963 = state_10827__$1;(statearr_10901_10963[2] = inst_10811);
(statearr_10901_10963[1] = 26);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10828 === 30))
{var inst_10763 = (state_10827[10]);var inst_10764 = (state_10827[11]);var inst_10765 = (state_10827[12]);var inst_10766 = (state_10827[13]);var inst_10780 = (state_10827[2]);var inst_10781 = (inst_10766 + 1);var tmp10895 = inst_10763;var tmp10896 = inst_10764;var tmp10897 = inst_10765;var inst_10763__$1 = tmp10895;var inst_10764__$1 = tmp10896;var inst_10765__$1 = tmp10897;var inst_10766__$1 = inst_10781;var state_10827__$1 = (function (){var statearr_10902 = state_10827;(statearr_10902[10] = inst_10763__$1);
(statearr_10902[11] = inst_10764__$1);
(statearr_10902[12] = inst_10765__$1);
(statearr_10902[13] = inst_10766__$1);
(statearr_10902[31] = inst_10780);
return statearr_10902;
})();var statearr_10903_10964 = state_10827__$1;(statearr_10903_10964[2] = null);
(statearr_10903_10964[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10828 === 31))
{var inst_10771 = (state_10827[8]);var inst_10772 = (state_10827[2]);var inst_10773 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_10774 = cljs.core.async.untap_STAR_.call(null,m,inst_10771);var state_10827__$1 = (function (){var statearr_10904 = state_10827;(statearr_10904[32] = inst_10773);
(statearr_10904[33] = inst_10772);
return statearr_10904;
})();var statearr_10905_10965 = state_10827__$1;(statearr_10905_10965[2] = inst_10774);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10827__$1);
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
var state_machine__5509__auto____0 = (function (){var statearr_10909 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_10909[0] = state_machine__5509__auto__);
(statearr_10909[1] = 1);
return statearr_10909;
});
var state_machine__5509__auto____1 = (function (state_10827){while(true){
var ret_value__5510__auto__ = (function (){try{while(true){
var result__5511__auto__ = switch__5508__auto__.call(null,state_10827);if(cljs.core.keyword_identical_QMARK_.call(null,result__5511__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5511__auto__;
}
break;
}
}catch (e10910){if((e10910 instanceof Object))
{var ex__5512__auto__ = e10910;var statearr_10911_10966 = state_10827;(statearr_10911_10966[5] = ex__5512__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10827);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e10910;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5510__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__10967 = state_10827;
state_10827 = G__10967;
continue;
}
} else
{return ret_value__5510__auto__;
}
break;
}
});
state_machine__5509__auto__ = function(state_10827){
switch(arguments.length){
case 0:
return state_machine__5509__auto____0.call(this);
case 1:
return state_machine__5509__auto____1.call(this,state_10827);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5509__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5509__auto____0;
state_machine__5509__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5509__auto____1;
return state_machine__5509__auto__;
})()
;})(switch__5508__auto__))
})();var state__5525__auto__ = (function (){var statearr_10912 = f__5524__auto__.call(null);(statearr_10912[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5523__auto___10913);
return statearr_10912;
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
cljs.core.async.Mix = (function (){var obj10969 = {};return obj10969;
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
;var m = (function (){if(typeof cljs.core.async.t11079 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t11079 = (function (pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,meta11080){
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
this.meta11080 = meta11080;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t11079.cljs$lang$type = true;
cljs.core.async.t11079.cljs$lang$ctorStr = "cljs.core.async/t11079";
cljs.core.async.t11079.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__3970__auto__,writer__3971__auto__,opt__3972__auto__){return cljs.core._write.call(null,writer__3971__auto__,"cljs.core.async/t11079");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t11079.prototype.cljs$core$async$Mix$ = true;
cljs.core.async.t11079.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t11079.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t11079.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t11079.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t11079.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.solo_modes.call(null,mode)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",-1162732933,null),new cljs.core.Symbol(null,"mode","mode",-1637174436,null))))].join('')));
}
cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t11079.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t11079.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t11079.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_11081){var self__ = this;
var _11081__$1 = this;return self__.meta11080;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t11079.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_11081,meta11080__$1){var self__ = this;
var _11081__$1 = this;return (new cljs.core.async.t11079(self__.pick,self__.out,self__.attrs,self__.cs,self__.calc_state,self__.solo_modes,self__.mix,self__.changed,self__.change,self__.solo_mode,meta11080__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.__GT_t11079 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t11079(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta11080){return (new cljs.core.async.t11079(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta11080));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
}
return (new cljs.core.async.t11079(pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,null));
})();var c__5523__auto___11188 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5524__auto__ = (function (){var switch__5508__auto__ = (function (state_11146){var state_val_11147 = (state_11146[1]);if((state_val_11147 === 1))
{var inst_11085 = (state_11146[7]);var inst_11085__$1 = calc_state.call(null);var inst_11086 = cljs.core.seq_QMARK_.call(null,inst_11085__$1);var state_11146__$1 = (function (){var statearr_11148 = state_11146;(statearr_11148[7] = inst_11085__$1);
return statearr_11148;
})();if(inst_11086)
{var statearr_11149_11189 = state_11146__$1;(statearr_11149_11189[1] = 2);
} else
{var statearr_11150_11190 = state_11146__$1;(statearr_11150_11190[1] = 3);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11147 === 2))
{var inst_11085 = (state_11146[7]);var inst_11088 = cljs.core.apply.call(null,cljs.core.hash_map,inst_11085);var state_11146__$1 = state_11146;var statearr_11151_11191 = state_11146__$1;(statearr_11151_11191[2] = inst_11088);
(statearr_11151_11191[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11147 === 3))
{var inst_11085 = (state_11146[7]);var state_11146__$1 = state_11146;var statearr_11152_11192 = state_11146__$1;(statearr_11152_11192[2] = inst_11085);
(statearr_11152_11192[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11147 === 4))
{var inst_11085 = (state_11146[7]);var inst_11091 = (state_11146[2]);var inst_11092 = cljs.core.get.call(null,inst_11091,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_11093 = cljs.core.get.call(null,inst_11091,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_11094 = cljs.core.get.call(null,inst_11091,new cljs.core.Keyword(null,"solos","solos",1123523302));var inst_11095 = inst_11085;var state_11146__$1 = (function (){var statearr_11153 = state_11146;(statearr_11153[8] = inst_11093);
(statearr_11153[9] = inst_11092);
(statearr_11153[10] = inst_11095);
(statearr_11153[11] = inst_11094);
return statearr_11153;
})();var statearr_11154_11193 = state_11146__$1;(statearr_11154_11193[2] = null);
(statearr_11154_11193[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11147 === 5))
{var inst_11095 = (state_11146[10]);var inst_11098 = cljs.core.seq_QMARK_.call(null,inst_11095);var state_11146__$1 = state_11146;if(inst_11098)
{var statearr_11155_11194 = state_11146__$1;(statearr_11155_11194[1] = 7);
} else
{var statearr_11156_11195 = state_11146__$1;(statearr_11156_11195[1] = 8);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11147 === 6))
{var inst_11144 = (state_11146[2]);var state_11146__$1 = state_11146;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11146__$1,inst_11144);
} else
{if((state_val_11147 === 7))
{var inst_11095 = (state_11146[10]);var inst_11100 = cljs.core.apply.call(null,cljs.core.hash_map,inst_11095);var state_11146__$1 = state_11146;var statearr_11157_11196 = state_11146__$1;(statearr_11157_11196[2] = inst_11100);
(statearr_11157_11196[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11147 === 8))
{var inst_11095 = (state_11146[10]);var state_11146__$1 = state_11146;var statearr_11158_11197 = state_11146__$1;(statearr_11158_11197[2] = inst_11095);
(statearr_11158_11197[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11147 === 9))
{var inst_11103 = (state_11146[12]);var inst_11103__$1 = (state_11146[2]);var inst_11104 = cljs.core.get.call(null,inst_11103__$1,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_11105 = cljs.core.get.call(null,inst_11103__$1,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_11106 = cljs.core.get.call(null,inst_11103__$1,new cljs.core.Keyword(null,"solos","solos",1123523302));var state_11146__$1 = (function (){var statearr_11159 = state_11146;(statearr_11159[12] = inst_11103__$1);
(statearr_11159[13] = inst_11105);
(statearr_11159[14] = inst_11106);
return statearr_11159;
})();return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_11146__$1,10,inst_11104);
} else
{if((state_val_11147 === 10))
{var inst_11110 = (state_11146[15]);var inst_11111 = (state_11146[16]);var inst_11109 = (state_11146[2]);var inst_11110__$1 = cljs.core.nth.call(null,inst_11109,0,null);var inst_11111__$1 = cljs.core.nth.call(null,inst_11109,1,null);var inst_11112 = (inst_11110__$1 == null);var inst_11113 = cljs.core._EQ_.call(null,inst_11111__$1,change);var inst_11114 = (inst_11112) || (inst_11113);var state_11146__$1 = (function (){var statearr_11160 = state_11146;(statearr_11160[15] = inst_11110__$1);
(statearr_11160[16] = inst_11111__$1);
return statearr_11160;
})();if(cljs.core.truth_(inst_11114))
{var statearr_11161_11198 = state_11146__$1;(statearr_11161_11198[1] = 11);
} else
{var statearr_11162_11199 = state_11146__$1;(statearr_11162_11199[1] = 12);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11147 === 11))
{var inst_11110 = (state_11146[15]);var inst_11116 = (inst_11110 == null);var state_11146__$1 = state_11146;if(cljs.core.truth_(inst_11116))
{var statearr_11163_11200 = state_11146__$1;(statearr_11163_11200[1] = 14);
} else
{var statearr_11164_11201 = state_11146__$1;(statearr_11164_11201[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11147 === 12))
{var inst_11125 = (state_11146[17]);var inst_11106 = (state_11146[14]);var inst_11111 = (state_11146[16]);var inst_11125__$1 = inst_11106.call(null,inst_11111);var state_11146__$1 = (function (){var statearr_11165 = state_11146;(statearr_11165[17] = inst_11125__$1);
return statearr_11165;
})();if(cljs.core.truth_(inst_11125__$1))
{var statearr_11166_11202 = state_11146__$1;(statearr_11166_11202[1] = 17);
} else
{var statearr_11167_11203 = state_11146__$1;(statearr_11167_11203[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11147 === 13))
{var inst_11142 = (state_11146[2]);var state_11146__$1 = state_11146;var statearr_11168_11204 = state_11146__$1;(statearr_11168_11204[2] = inst_11142);
(statearr_11168_11204[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11147 === 14))
{var inst_11111 = (state_11146[16]);var inst_11118 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_11111);var state_11146__$1 = state_11146;var statearr_11169_11205 = state_11146__$1;(statearr_11169_11205[2] = inst_11118);
(statearr_11169_11205[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11147 === 15))
{var state_11146__$1 = state_11146;var statearr_11170_11206 = state_11146__$1;(statearr_11170_11206[2] = null);
(statearr_11170_11206[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11147 === 16))
{var inst_11121 = (state_11146[2]);var inst_11122 = calc_state.call(null);var inst_11095 = inst_11122;var state_11146__$1 = (function (){var statearr_11171 = state_11146;(statearr_11171[10] = inst_11095);
(statearr_11171[18] = inst_11121);
return statearr_11171;
})();var statearr_11172_11207 = state_11146__$1;(statearr_11172_11207[2] = null);
(statearr_11172_11207[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11147 === 17))
{var inst_11125 = (state_11146[17]);var state_11146__$1 = state_11146;var statearr_11173_11208 = state_11146__$1;(statearr_11173_11208[2] = inst_11125);
(statearr_11173_11208[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11147 === 18))
{var inst_11105 = (state_11146[13]);var inst_11106 = (state_11146[14]);var inst_11111 = (state_11146[16]);var inst_11128 = cljs.core.empty_QMARK_.call(null,inst_11106);var inst_11129 = inst_11105.call(null,inst_11111);var inst_11130 = cljs.core.not.call(null,inst_11129);var inst_11131 = (inst_11128) && (inst_11130);var state_11146__$1 = state_11146;var statearr_11174_11209 = state_11146__$1;(statearr_11174_11209[2] = inst_11131);
(statearr_11174_11209[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11147 === 19))
{var inst_11133 = (state_11146[2]);var state_11146__$1 = state_11146;if(cljs.core.truth_(inst_11133))
{var statearr_11175_11210 = state_11146__$1;(statearr_11175_11210[1] = 20);
} else
{var statearr_11176_11211 = state_11146__$1;(statearr_11176_11211[1] = 21);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11147 === 20))
{var inst_11110 = (state_11146[15]);var state_11146__$1 = state_11146;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11146__$1,23,out,inst_11110);
} else
{if((state_val_11147 === 21))
{var state_11146__$1 = state_11146;var statearr_11177_11212 = state_11146__$1;(statearr_11177_11212[2] = null);
(statearr_11177_11212[1] = 22);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11147 === 22))
{var inst_11103 = (state_11146[12]);var inst_11139 = (state_11146[2]);var inst_11095 = inst_11103;var state_11146__$1 = (function (){var statearr_11178 = state_11146;(statearr_11178[10] = inst_11095);
(statearr_11178[19] = inst_11139);
return statearr_11178;
})();var statearr_11179_11213 = state_11146__$1;(statearr_11179_11213[2] = null);
(statearr_11179_11213[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11147 === 23))
{var inst_11136 = (state_11146[2]);var state_11146__$1 = state_11146;var statearr_11180_11214 = state_11146__$1;(statearr_11180_11214[2] = inst_11136);
(statearr_11180_11214[1] = 22);
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
var state_machine__5509__auto____0 = (function (){var statearr_11184 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_11184[0] = state_machine__5509__auto__);
(statearr_11184[1] = 1);
return statearr_11184;
});
var state_machine__5509__auto____1 = (function (state_11146){while(true){
var ret_value__5510__auto__ = (function (){try{while(true){
var result__5511__auto__ = switch__5508__auto__.call(null,state_11146);if(cljs.core.keyword_identical_QMARK_.call(null,result__5511__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5511__auto__;
}
break;
}
}catch (e11185){if((e11185 instanceof Object))
{var ex__5512__auto__ = e11185;var statearr_11186_11215 = state_11146;(statearr_11186_11215[5] = ex__5512__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11146);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e11185;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5510__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__11216 = state_11146;
state_11146 = G__11216;
continue;
}
} else
{return ret_value__5510__auto__;
}
break;
}
});
state_machine__5509__auto__ = function(state_11146){
switch(arguments.length){
case 0:
return state_machine__5509__auto____0.call(this);
case 1:
return state_machine__5509__auto____1.call(this,state_11146);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5509__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5509__auto____0;
state_machine__5509__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5509__auto____1;
return state_machine__5509__auto__;
})()
;})(switch__5508__auto__))
})();var state__5525__auto__ = (function (){var statearr_11187 = f__5524__auto__.call(null);(statearr_11187[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5523__auto___11188);
return statearr_11187;
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
cljs.core.async.Pub = (function (){var obj11218 = {};return obj11218;
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
return (function (p1__11219_SHARP_){if(cljs.core.truth_(p1__11219_SHARP_.call(null,topic)))
{return p1__11219_SHARP_;
} else
{return cljs.core.assoc.call(null,p1__11219_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__3408__auto__,mults))
),topic);
}
});})(mults))
;var p = (function (){if(typeof cljs.core.async.t11344 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t11344 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta11345){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta11345 = meta11345;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t11344.cljs$lang$type = true;
cljs.core.async.t11344.cljs$lang$ctorStr = "cljs.core.async/t11344";
cljs.core.async.t11344.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__3970__auto__,writer__3971__auto__,opt__3972__auto__){return cljs.core._write.call(null,writer__3971__auto__,"cljs.core.async/t11344");
});})(mults,ensure_mult))
;
cljs.core.async.t11344.prototype.cljs$core$async$Pub$ = true;
cljs.core.async.t11344.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2,close_QMARK_){var self__ = this;
var p__$1 = this;var m = self__.ensure_mult.call(null,topic);return cljs.core.async.tap.call(null,m,ch__$2,close_QMARK_);
});})(mults,ensure_mult))
;
cljs.core.async.t11344.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2){var self__ = this;
var p__$1 = this;var temp__4092__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);if(cljs.core.truth_(temp__4092__auto__))
{var m = temp__4092__auto__;return cljs.core.async.untap.call(null,m,ch__$2);
} else
{return null;
}
});})(mults,ensure_mult))
;
cljs.core.async.t11344.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;
cljs.core.async.t11344.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){var self__ = this;
var ___$1 = this;return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;
cljs.core.async.t11344.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t11344.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(mults,ensure_mult))
;
cljs.core.async.t11344.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_11346){var self__ = this;
var _11346__$1 = this;return self__.meta11345;
});})(mults,ensure_mult))
;
cljs.core.async.t11344.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_11346,meta11345__$1){var self__ = this;
var _11346__$1 = this;return (new cljs.core.async.t11344(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta11345__$1));
});})(mults,ensure_mult))
;
cljs.core.async.__GT_t11344 = ((function (mults,ensure_mult){
return (function __GT_t11344(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta11345){return (new cljs.core.async.t11344(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta11345));
});})(mults,ensure_mult))
;
}
return (new cljs.core.async.t11344(ensure_mult,mults,buf_fn,topic_fn,ch,pub,null));
})();var c__5523__auto___11468 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5524__auto__ = (function (){var switch__5508__auto__ = (function (state_11420){var state_val_11421 = (state_11420[1]);if((state_val_11421 === 1))
{var state_11420__$1 = state_11420;var statearr_11422_11469 = state_11420__$1;(statearr_11422_11469[2] = null);
(statearr_11422_11469[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11421 === 2))
{var state_11420__$1 = state_11420;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11420__$1,4,ch);
} else
{if((state_val_11421 === 3))
{var inst_11418 = (state_11420[2]);var state_11420__$1 = state_11420;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11420__$1,inst_11418);
} else
{if((state_val_11421 === 4))
{var inst_11349 = (state_11420[7]);var inst_11349__$1 = (state_11420[2]);var inst_11350 = (inst_11349__$1 == null);var state_11420__$1 = (function (){var statearr_11423 = state_11420;(statearr_11423[7] = inst_11349__$1);
return statearr_11423;
})();if(cljs.core.truth_(inst_11350))
{var statearr_11424_11470 = state_11420__$1;(statearr_11424_11470[1] = 5);
} else
{var statearr_11425_11471 = state_11420__$1;(statearr_11425_11471[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11421 === 5))
{var inst_11356 = cljs.core.deref.call(null,mults);var inst_11357 = cljs.core.vals.call(null,inst_11356);var inst_11358 = cljs.core.seq.call(null,inst_11357);var inst_11359 = inst_11358;var inst_11360 = null;var inst_11361 = 0;var inst_11362 = 0;var state_11420__$1 = (function (){var statearr_11426 = state_11420;(statearr_11426[8] = inst_11359);
(statearr_11426[9] = inst_11362);
(statearr_11426[10] = inst_11360);
(statearr_11426[11] = inst_11361);
return statearr_11426;
})();var statearr_11427_11472 = state_11420__$1;(statearr_11427_11472[2] = null);
(statearr_11427_11472[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11421 === 6))
{var inst_11399 = (state_11420[12]);var inst_11397 = (state_11420[13]);var inst_11349 = (state_11420[7]);var inst_11397__$1 = topic_fn.call(null,inst_11349);var inst_11398 = cljs.core.deref.call(null,mults);var inst_11399__$1 = cljs.core.get.call(null,inst_11398,inst_11397__$1);var state_11420__$1 = (function (){var statearr_11428 = state_11420;(statearr_11428[12] = inst_11399__$1);
(statearr_11428[13] = inst_11397__$1);
return statearr_11428;
})();if(cljs.core.truth_(inst_11399__$1))
{var statearr_11429_11473 = state_11420__$1;(statearr_11429_11473[1] = 19);
} else
{var statearr_11430_11474 = state_11420__$1;(statearr_11430_11474[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11421 === 7))
{var inst_11416 = (state_11420[2]);var state_11420__$1 = state_11420;var statearr_11431_11475 = state_11420__$1;(statearr_11431_11475[2] = inst_11416);
(statearr_11431_11475[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11421 === 8))
{var inst_11362 = (state_11420[9]);var inst_11361 = (state_11420[11]);var inst_11364 = (inst_11362 < inst_11361);var inst_11365 = inst_11364;var state_11420__$1 = state_11420;if(cljs.core.truth_(inst_11365))
{var statearr_11435_11476 = state_11420__$1;(statearr_11435_11476[1] = 10);
} else
{var statearr_11436_11477 = state_11420__$1;(statearr_11436_11477[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11421 === 9))
{var inst_11395 = (state_11420[2]);var state_11420__$1 = state_11420;var statearr_11437_11478 = state_11420__$1;(statearr_11437_11478[2] = inst_11395);
(statearr_11437_11478[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11421 === 10))
{var inst_11359 = (state_11420[8]);var inst_11362 = (state_11420[9]);var inst_11360 = (state_11420[10]);var inst_11361 = (state_11420[11]);var inst_11367 = cljs.core._nth.call(null,inst_11360,inst_11362);var inst_11368 = cljs.core.async.muxch_STAR_.call(null,inst_11367);var inst_11369 = cljs.core.async.close_BANG_.call(null,inst_11368);var inst_11370 = (inst_11362 + 1);var tmp11432 = inst_11359;var tmp11433 = inst_11360;var tmp11434 = inst_11361;var inst_11359__$1 = tmp11432;var inst_11360__$1 = tmp11433;var inst_11361__$1 = tmp11434;var inst_11362__$1 = inst_11370;var state_11420__$1 = (function (){var statearr_11438 = state_11420;(statearr_11438[14] = inst_11369);
(statearr_11438[8] = inst_11359__$1);
(statearr_11438[9] = inst_11362__$1);
(statearr_11438[10] = inst_11360__$1);
(statearr_11438[11] = inst_11361__$1);
return statearr_11438;
})();var statearr_11439_11479 = state_11420__$1;(statearr_11439_11479[2] = null);
(statearr_11439_11479[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11421 === 11))
{var inst_11373 = (state_11420[15]);var inst_11359 = (state_11420[8]);var inst_11373__$1 = cljs.core.seq.call(null,inst_11359);var state_11420__$1 = (function (){var statearr_11440 = state_11420;(statearr_11440[15] = inst_11373__$1);
return statearr_11440;
})();if(inst_11373__$1)
{var statearr_11441_11480 = state_11420__$1;(statearr_11441_11480[1] = 13);
} else
{var statearr_11442_11481 = state_11420__$1;(statearr_11442_11481[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11421 === 12))
{var inst_11393 = (state_11420[2]);var state_11420__$1 = state_11420;var statearr_11443_11482 = state_11420__$1;(statearr_11443_11482[2] = inst_11393);
(statearr_11443_11482[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11421 === 13))
{var inst_11373 = (state_11420[15]);var inst_11375 = cljs.core.chunked_seq_QMARK_.call(null,inst_11373);var state_11420__$1 = state_11420;if(inst_11375)
{var statearr_11444_11483 = state_11420__$1;(statearr_11444_11483[1] = 16);
} else
{var statearr_11445_11484 = state_11420__$1;(statearr_11445_11484[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11421 === 14))
{var state_11420__$1 = state_11420;var statearr_11446_11485 = state_11420__$1;(statearr_11446_11485[2] = null);
(statearr_11446_11485[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11421 === 15))
{var inst_11391 = (state_11420[2]);var state_11420__$1 = state_11420;var statearr_11447_11486 = state_11420__$1;(statearr_11447_11486[2] = inst_11391);
(statearr_11447_11486[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11421 === 16))
{var inst_11373 = (state_11420[15]);var inst_11377 = cljs.core.chunk_first.call(null,inst_11373);var inst_11378 = cljs.core.chunk_rest.call(null,inst_11373);var inst_11379 = cljs.core.count.call(null,inst_11377);var inst_11359 = inst_11378;var inst_11360 = inst_11377;var inst_11361 = inst_11379;var inst_11362 = 0;var state_11420__$1 = (function (){var statearr_11448 = state_11420;(statearr_11448[8] = inst_11359);
(statearr_11448[9] = inst_11362);
(statearr_11448[10] = inst_11360);
(statearr_11448[11] = inst_11361);
return statearr_11448;
})();var statearr_11449_11487 = state_11420__$1;(statearr_11449_11487[2] = null);
(statearr_11449_11487[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11421 === 17))
{var inst_11373 = (state_11420[15]);var inst_11382 = cljs.core.first.call(null,inst_11373);var inst_11383 = cljs.core.async.muxch_STAR_.call(null,inst_11382);var inst_11384 = cljs.core.async.close_BANG_.call(null,inst_11383);var inst_11385 = cljs.core.next.call(null,inst_11373);var inst_11359 = inst_11385;var inst_11360 = null;var inst_11361 = 0;var inst_11362 = 0;var state_11420__$1 = (function (){var statearr_11450 = state_11420;(statearr_11450[16] = inst_11384);
(statearr_11450[8] = inst_11359);
(statearr_11450[9] = inst_11362);
(statearr_11450[10] = inst_11360);
(statearr_11450[11] = inst_11361);
return statearr_11450;
})();var statearr_11451_11488 = state_11420__$1;(statearr_11451_11488[2] = null);
(statearr_11451_11488[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11421 === 18))
{var inst_11388 = (state_11420[2]);var state_11420__$1 = state_11420;var statearr_11452_11489 = state_11420__$1;(statearr_11452_11489[2] = inst_11388);
(statearr_11452_11489[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11421 === 19))
{var state_11420__$1 = state_11420;var statearr_11453_11490 = state_11420__$1;(statearr_11453_11490[2] = null);
(statearr_11453_11490[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11421 === 20))
{var state_11420__$1 = state_11420;var statearr_11454_11491 = state_11420__$1;(statearr_11454_11491[2] = null);
(statearr_11454_11491[1] = 21);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11421 === 21))
{var inst_11413 = (state_11420[2]);var state_11420__$1 = (function (){var statearr_11455 = state_11420;(statearr_11455[17] = inst_11413);
return statearr_11455;
})();var statearr_11456_11492 = state_11420__$1;(statearr_11456_11492[2] = null);
(statearr_11456_11492[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11421 === 22))
{var inst_11410 = (state_11420[2]);var state_11420__$1 = state_11420;var statearr_11457_11493 = state_11420__$1;(statearr_11457_11493[2] = inst_11410);
(statearr_11457_11493[1] = 21);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11421 === 23))
{var inst_11397 = (state_11420[13]);var inst_11401 = (state_11420[2]);var inst_11402 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_11397);var state_11420__$1 = (function (){var statearr_11458 = state_11420;(statearr_11458[18] = inst_11401);
return statearr_11458;
})();var statearr_11459_11494 = state_11420__$1;(statearr_11459_11494[2] = inst_11402);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11420__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11421 === 24))
{var inst_11399 = (state_11420[12]);var inst_11349 = (state_11420[7]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_11420,23,Object,null,22);var inst_11406 = cljs.core.async.muxch_STAR_.call(null,inst_11399);var state_11420__$1 = state_11420;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11420__$1,25,inst_11406,inst_11349);
} else
{if((state_val_11421 === 25))
{var inst_11408 = (state_11420[2]);var state_11420__$1 = state_11420;var statearr_11460_11495 = state_11420__$1;(statearr_11460_11495[2] = inst_11408);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11420__$1);
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
var state_machine__5509__auto____0 = (function (){var statearr_11464 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_11464[0] = state_machine__5509__auto__);
(statearr_11464[1] = 1);
return statearr_11464;
});
var state_machine__5509__auto____1 = (function (state_11420){while(true){
var ret_value__5510__auto__ = (function (){try{while(true){
var result__5511__auto__ = switch__5508__auto__.call(null,state_11420);if(cljs.core.keyword_identical_QMARK_.call(null,result__5511__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5511__auto__;
}
break;
}
}catch (e11465){if((e11465 instanceof Object))
{var ex__5512__auto__ = e11465;var statearr_11466_11496 = state_11420;(statearr_11466_11496[5] = ex__5512__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11420);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e11465;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5510__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__11497 = state_11420;
state_11420 = G__11497;
continue;
}
} else
{return ret_value__5510__auto__;
}
break;
}
});
state_machine__5509__auto__ = function(state_11420){
switch(arguments.length){
case 0:
return state_machine__5509__auto____0.call(this);
case 1:
return state_machine__5509__auto____1.call(this,state_11420);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5509__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5509__auto____0;
state_machine__5509__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5509__auto____1;
return state_machine__5509__auto__;
})()
;})(switch__5508__auto__))
})();var state__5525__auto__ = (function (){var statearr_11467 = f__5524__auto__.call(null);(statearr_11467[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5523__auto___11468);
return statearr_11467;
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
,cljs.core.range.call(null,cnt));var c__5523__auto___11634 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5524__auto__ = (function (){var switch__5508__auto__ = (function (state_11604){var state_val_11605 = (state_11604[1]);if((state_val_11605 === 1))
{var state_11604__$1 = state_11604;var statearr_11606_11635 = state_11604__$1;(statearr_11606_11635[2] = null);
(statearr_11606_11635[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11605 === 2))
{var inst_11567 = cljs.core.reset_BANG_.call(null,dctr,cnt);var inst_11568 = 0;var state_11604__$1 = (function (){var statearr_11607 = state_11604;(statearr_11607[7] = inst_11567);
(statearr_11607[8] = inst_11568);
return statearr_11607;
})();var statearr_11608_11636 = state_11604__$1;(statearr_11608_11636[2] = null);
(statearr_11608_11636[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11605 === 3))
{var inst_11602 = (state_11604[2]);var state_11604__$1 = state_11604;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11604__$1,inst_11602);
} else
{if((state_val_11605 === 4))
{var inst_11568 = (state_11604[8]);var inst_11570 = (inst_11568 < cnt);var state_11604__$1 = state_11604;if(cljs.core.truth_(inst_11570))
{var statearr_11609_11637 = state_11604__$1;(statearr_11609_11637[1] = 6);
} else
{var statearr_11610_11638 = state_11604__$1;(statearr_11610_11638[1] = 7);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11605 === 5))
{var inst_11588 = (state_11604[2]);var state_11604__$1 = (function (){var statearr_11611 = state_11604;(statearr_11611[9] = inst_11588);
return statearr_11611;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11604__$1,12,dchan);
} else
{if((state_val_11605 === 6))
{var state_11604__$1 = state_11604;var statearr_11612_11639 = state_11604__$1;(statearr_11612_11639[2] = null);
(statearr_11612_11639[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11605 === 7))
{var state_11604__$1 = state_11604;var statearr_11613_11640 = state_11604__$1;(statearr_11613_11640[2] = null);
(statearr_11613_11640[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11605 === 8))
{var inst_11586 = (state_11604[2]);var state_11604__$1 = state_11604;var statearr_11614_11641 = state_11604__$1;(statearr_11614_11641[2] = inst_11586);
(statearr_11614_11641[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11605 === 9))
{var inst_11568 = (state_11604[8]);var inst_11581 = (state_11604[2]);var inst_11582 = (inst_11568 + 1);var inst_11568__$1 = inst_11582;var state_11604__$1 = (function (){var statearr_11615 = state_11604;(statearr_11615[10] = inst_11581);
(statearr_11615[8] = inst_11568__$1);
return statearr_11615;
})();var statearr_11616_11642 = state_11604__$1;(statearr_11616_11642[2] = null);
(statearr_11616_11642[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11605 === 10))
{var inst_11572 = (state_11604[2]);var inst_11573 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var state_11604__$1 = (function (){var statearr_11617 = state_11604;(statearr_11617[11] = inst_11572);
return statearr_11617;
})();var statearr_11618_11643 = state_11604__$1;(statearr_11618_11643[2] = inst_11573);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11604__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11605 === 11))
{var inst_11568 = (state_11604[8]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_11604,10,Object,null,9);var inst_11577 = chs__$1.call(null,inst_11568);var inst_11578 = done.call(null,inst_11568);var inst_11579 = cljs.core.async.take_BANG_.call(null,inst_11577,inst_11578);var state_11604__$1 = state_11604;var statearr_11619_11644 = state_11604__$1;(statearr_11619_11644[2] = inst_11579);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11604__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11605 === 12))
{var inst_11590 = (state_11604[12]);var inst_11590__$1 = (state_11604[2]);var inst_11591 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_11590__$1);var state_11604__$1 = (function (){var statearr_11620 = state_11604;(statearr_11620[12] = inst_11590__$1);
return statearr_11620;
})();if(cljs.core.truth_(inst_11591))
{var statearr_11621_11645 = state_11604__$1;(statearr_11621_11645[1] = 13);
} else
{var statearr_11622_11646 = state_11604__$1;(statearr_11622_11646[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11605 === 13))
{var inst_11593 = cljs.core.async.close_BANG_.call(null,out);var state_11604__$1 = state_11604;var statearr_11623_11647 = state_11604__$1;(statearr_11623_11647[2] = inst_11593);
(statearr_11623_11647[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11605 === 14))
{var inst_11590 = (state_11604[12]);var inst_11595 = cljs.core.apply.call(null,f,inst_11590);var state_11604__$1 = state_11604;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11604__$1,16,out,inst_11595);
} else
{if((state_val_11605 === 15))
{var inst_11600 = (state_11604[2]);var state_11604__$1 = state_11604;var statearr_11624_11648 = state_11604__$1;(statearr_11624_11648[2] = inst_11600);
(statearr_11624_11648[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11605 === 16))
{var inst_11597 = (state_11604[2]);var state_11604__$1 = (function (){var statearr_11625 = state_11604;(statearr_11625[13] = inst_11597);
return statearr_11625;
})();var statearr_11626_11649 = state_11604__$1;(statearr_11626_11649[2] = null);
(statearr_11626_11649[1] = 2);
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
var state_machine__5509__auto____0 = (function (){var statearr_11630 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_11630[0] = state_machine__5509__auto__);
(statearr_11630[1] = 1);
return statearr_11630;
});
var state_machine__5509__auto____1 = (function (state_11604){while(true){
var ret_value__5510__auto__ = (function (){try{while(true){
var result__5511__auto__ = switch__5508__auto__.call(null,state_11604);if(cljs.core.keyword_identical_QMARK_.call(null,result__5511__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5511__auto__;
}
break;
}
}catch (e11631){if((e11631 instanceof Object))
{var ex__5512__auto__ = e11631;var statearr_11632_11650 = state_11604;(statearr_11632_11650[5] = ex__5512__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11604);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e11631;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5510__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__11651 = state_11604;
state_11604 = G__11651;
continue;
}
} else
{return ret_value__5510__auto__;
}
break;
}
});
state_machine__5509__auto__ = function(state_11604){
switch(arguments.length){
case 0:
return state_machine__5509__auto____0.call(this);
case 1:
return state_machine__5509__auto____1.call(this,state_11604);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5509__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5509__auto____0;
state_machine__5509__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5509__auto____1;
return state_machine__5509__auto__;
})()
;})(switch__5508__auto__))
})();var state__5525__auto__ = (function (){var statearr_11633 = f__5524__auto__.call(null);(statearr_11633[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5523__auto___11634);
return statearr_11633;
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
var merge__2 = (function (chs,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5523__auto___11759 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5524__auto__ = (function (){var switch__5508__auto__ = (function (state_11735){var state_val_11736 = (state_11735[1]);if((state_val_11736 === 1))
{var inst_11706 = cljs.core.vec.call(null,chs);var inst_11707 = inst_11706;var state_11735__$1 = (function (){var statearr_11737 = state_11735;(statearr_11737[7] = inst_11707);
return statearr_11737;
})();var statearr_11738_11760 = state_11735__$1;(statearr_11738_11760[2] = null);
(statearr_11738_11760[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11736 === 2))
{var inst_11707 = (state_11735[7]);var inst_11709 = cljs.core.count.call(null,inst_11707);var inst_11710 = (inst_11709 > 0);var state_11735__$1 = state_11735;if(cljs.core.truth_(inst_11710))
{var statearr_11739_11761 = state_11735__$1;(statearr_11739_11761[1] = 4);
} else
{var statearr_11740_11762 = state_11735__$1;(statearr_11740_11762[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11736 === 3))
{var inst_11733 = (state_11735[2]);var state_11735__$1 = state_11735;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11735__$1,inst_11733);
} else
{if((state_val_11736 === 4))
{var inst_11707 = (state_11735[7]);var state_11735__$1 = state_11735;return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_11735__$1,7,inst_11707);
} else
{if((state_val_11736 === 5))
{var inst_11729 = cljs.core.async.close_BANG_.call(null,out);var state_11735__$1 = state_11735;var statearr_11741_11763 = state_11735__$1;(statearr_11741_11763[2] = inst_11729);
(statearr_11741_11763[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11736 === 6))
{var inst_11731 = (state_11735[2]);var state_11735__$1 = state_11735;var statearr_11742_11764 = state_11735__$1;(statearr_11742_11764[2] = inst_11731);
(statearr_11742_11764[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11736 === 7))
{var inst_11714 = (state_11735[8]);var inst_11715 = (state_11735[9]);var inst_11714__$1 = (state_11735[2]);var inst_11715__$1 = cljs.core.nth.call(null,inst_11714__$1,0,null);var inst_11716 = cljs.core.nth.call(null,inst_11714__$1,1,null);var inst_11717 = (inst_11715__$1 == null);var state_11735__$1 = (function (){var statearr_11743 = state_11735;(statearr_11743[8] = inst_11714__$1);
(statearr_11743[10] = inst_11716);
(statearr_11743[9] = inst_11715__$1);
return statearr_11743;
})();if(cljs.core.truth_(inst_11717))
{var statearr_11744_11765 = state_11735__$1;(statearr_11744_11765[1] = 8);
} else
{var statearr_11745_11766 = state_11735__$1;(statearr_11745_11766[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11736 === 8))
{var inst_11707 = (state_11735[7]);var inst_11714 = (state_11735[8]);var inst_11716 = (state_11735[10]);var inst_11715 = (state_11735[9]);var inst_11719 = (function (){var c = inst_11716;var v = inst_11715;var vec__11712 = inst_11714;var cs = inst_11707;return ((function (c,v,vec__11712,cs,inst_11707,inst_11714,inst_11716,inst_11715,state_val_11736){
return (function (p1__11652_SHARP_){return cljs.core.not_EQ_.call(null,c,p1__11652_SHARP_);
});
;})(c,v,vec__11712,cs,inst_11707,inst_11714,inst_11716,inst_11715,state_val_11736))
})();var inst_11720 = cljs.core.filterv.call(null,inst_11719,inst_11707);var inst_11707__$1 = inst_11720;var state_11735__$1 = (function (){var statearr_11746 = state_11735;(statearr_11746[7] = inst_11707__$1);
return statearr_11746;
})();var statearr_11747_11767 = state_11735__$1;(statearr_11747_11767[2] = null);
(statearr_11747_11767[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11736 === 9))
{var inst_11715 = (state_11735[9]);var state_11735__$1 = state_11735;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11735__$1,11,out,inst_11715);
} else
{if((state_val_11736 === 10))
{var inst_11727 = (state_11735[2]);var state_11735__$1 = state_11735;var statearr_11749_11768 = state_11735__$1;(statearr_11749_11768[2] = inst_11727);
(statearr_11749_11768[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11736 === 11))
{var inst_11707 = (state_11735[7]);var inst_11724 = (state_11735[2]);var tmp11748 = inst_11707;var inst_11707__$1 = tmp11748;var state_11735__$1 = (function (){var statearr_11750 = state_11735;(statearr_11750[7] = inst_11707__$1);
(statearr_11750[11] = inst_11724);
return statearr_11750;
})();var statearr_11751_11769 = state_11735__$1;(statearr_11751_11769[2] = null);
(statearr_11751_11769[1] = 2);
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
var state_machine__5509__auto____0 = (function (){var statearr_11755 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_11755[0] = state_machine__5509__auto__);
(statearr_11755[1] = 1);
return statearr_11755;
});
var state_machine__5509__auto____1 = (function (state_11735){while(true){
var ret_value__5510__auto__ = (function (){try{while(true){
var result__5511__auto__ = switch__5508__auto__.call(null,state_11735);if(cljs.core.keyword_identical_QMARK_.call(null,result__5511__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5511__auto__;
}
break;
}
}catch (e11756){if((e11756 instanceof Object))
{var ex__5512__auto__ = e11756;var statearr_11757_11770 = state_11735;(statearr_11757_11770[5] = ex__5512__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11735);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e11756;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5510__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__11771 = state_11735;
state_11735 = G__11771;
continue;
}
} else
{return ret_value__5510__auto__;
}
break;
}
});
state_machine__5509__auto__ = function(state_11735){
switch(arguments.length){
case 0:
return state_machine__5509__auto____0.call(this);
case 1:
return state_machine__5509__auto____1.call(this,state_11735);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5509__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5509__auto____0;
state_machine__5509__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5509__auto____1;
return state_machine__5509__auto__;
})()
;})(switch__5508__auto__))
})();var state__5525__auto__ = (function (){var statearr_11758 = f__5524__auto__.call(null);(statearr_11758[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5523__auto___11759);
return statearr_11758;
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
var take__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5523__auto___11864 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5524__auto__ = (function (){var switch__5508__auto__ = (function (state_11841){var state_val_11842 = (state_11841[1]);if((state_val_11842 === 1))
{var inst_11818 = 0;var state_11841__$1 = (function (){var statearr_11843 = state_11841;(statearr_11843[7] = inst_11818);
return statearr_11843;
})();var statearr_11844_11865 = state_11841__$1;(statearr_11844_11865[2] = null);
(statearr_11844_11865[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11842 === 2))
{var inst_11818 = (state_11841[7]);var inst_11820 = (inst_11818 < n);var state_11841__$1 = state_11841;if(cljs.core.truth_(inst_11820))
{var statearr_11845_11866 = state_11841__$1;(statearr_11845_11866[1] = 4);
} else
{var statearr_11846_11867 = state_11841__$1;(statearr_11846_11867[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11842 === 3))
{var inst_11838 = (state_11841[2]);var inst_11839 = cljs.core.async.close_BANG_.call(null,out);var state_11841__$1 = (function (){var statearr_11847 = state_11841;(statearr_11847[8] = inst_11838);
return statearr_11847;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11841__$1,inst_11839);
} else
{if((state_val_11842 === 4))
{var state_11841__$1 = state_11841;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11841__$1,7,ch);
} else
{if((state_val_11842 === 5))
{var state_11841__$1 = state_11841;var statearr_11848_11868 = state_11841__$1;(statearr_11848_11868[2] = null);
(statearr_11848_11868[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11842 === 6))
{var inst_11836 = (state_11841[2]);var state_11841__$1 = state_11841;var statearr_11849_11869 = state_11841__$1;(statearr_11849_11869[2] = inst_11836);
(statearr_11849_11869[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11842 === 7))
{var inst_11823 = (state_11841[9]);var inst_11823__$1 = (state_11841[2]);var inst_11824 = (inst_11823__$1 == null);var inst_11825 = cljs.core.not.call(null,inst_11824);var state_11841__$1 = (function (){var statearr_11850 = state_11841;(statearr_11850[9] = inst_11823__$1);
return statearr_11850;
})();if(inst_11825)
{var statearr_11851_11870 = state_11841__$1;(statearr_11851_11870[1] = 8);
} else
{var statearr_11852_11871 = state_11841__$1;(statearr_11852_11871[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11842 === 8))
{var inst_11823 = (state_11841[9]);var state_11841__$1 = state_11841;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11841__$1,11,out,inst_11823);
} else
{if((state_val_11842 === 9))
{var state_11841__$1 = state_11841;var statearr_11853_11872 = state_11841__$1;(statearr_11853_11872[2] = null);
(statearr_11853_11872[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11842 === 10))
{var inst_11833 = (state_11841[2]);var state_11841__$1 = state_11841;var statearr_11854_11873 = state_11841__$1;(statearr_11854_11873[2] = inst_11833);
(statearr_11854_11873[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11842 === 11))
{var inst_11818 = (state_11841[7]);var inst_11828 = (state_11841[2]);var inst_11829 = (inst_11818 + 1);var inst_11818__$1 = inst_11829;var state_11841__$1 = (function (){var statearr_11855 = state_11841;(statearr_11855[10] = inst_11828);
(statearr_11855[7] = inst_11818__$1);
return statearr_11855;
})();var statearr_11856_11874 = state_11841__$1;(statearr_11856_11874[2] = null);
(statearr_11856_11874[1] = 2);
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
var state_machine__5509__auto____0 = (function (){var statearr_11860 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_11860[0] = state_machine__5509__auto__);
(statearr_11860[1] = 1);
return statearr_11860;
});
var state_machine__5509__auto____1 = (function (state_11841){while(true){
var ret_value__5510__auto__ = (function (){try{while(true){
var result__5511__auto__ = switch__5508__auto__.call(null,state_11841);if(cljs.core.keyword_identical_QMARK_.call(null,result__5511__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5511__auto__;
}
break;
}
}catch (e11861){if((e11861 instanceof Object))
{var ex__5512__auto__ = e11861;var statearr_11862_11875 = state_11841;(statearr_11862_11875[5] = ex__5512__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11841);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e11861;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5510__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__11876 = state_11841;
state_11841 = G__11876;
continue;
}
} else
{return ret_value__5510__auto__;
}
break;
}
});
state_machine__5509__auto__ = function(state_11841){
switch(arguments.length){
case 0:
return state_machine__5509__auto____0.call(this);
case 1:
return state_machine__5509__auto____1.call(this,state_11841);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5509__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5509__auto____0;
state_machine__5509__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5509__auto____1;
return state_machine__5509__auto__;
})()
;})(switch__5508__auto__))
})();var state__5525__auto__ = (function (){var statearr_11863 = f__5524__auto__.call(null);(statearr_11863[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5523__auto___11864);
return statearr_11863;
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
var unique__2 = (function (ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5523__auto___11973 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5524__auto__ = (function (){var switch__5508__auto__ = (function (state_11948){var state_val_11949 = (state_11948[1]);if((state_val_11949 === 1))
{var inst_11925 = null;var state_11948__$1 = (function (){var statearr_11950 = state_11948;(statearr_11950[7] = inst_11925);
return statearr_11950;
})();var statearr_11951_11974 = state_11948__$1;(statearr_11951_11974[2] = null);
(statearr_11951_11974[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11949 === 2))
{var state_11948__$1 = state_11948;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11948__$1,4,ch);
} else
{if((state_val_11949 === 3))
{var inst_11945 = (state_11948[2]);var inst_11946 = cljs.core.async.close_BANG_.call(null,out);var state_11948__$1 = (function (){var statearr_11952 = state_11948;(statearr_11952[8] = inst_11945);
return statearr_11952;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11948__$1,inst_11946);
} else
{if((state_val_11949 === 4))
{var inst_11928 = (state_11948[9]);var inst_11928__$1 = (state_11948[2]);var inst_11929 = (inst_11928__$1 == null);var inst_11930 = cljs.core.not.call(null,inst_11929);var state_11948__$1 = (function (){var statearr_11953 = state_11948;(statearr_11953[9] = inst_11928__$1);
return statearr_11953;
})();if(inst_11930)
{var statearr_11954_11975 = state_11948__$1;(statearr_11954_11975[1] = 5);
} else
{var statearr_11955_11976 = state_11948__$1;(statearr_11955_11976[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11949 === 5))
{var inst_11925 = (state_11948[7]);var inst_11928 = (state_11948[9]);var inst_11932 = cljs.core._EQ_.call(null,inst_11928,inst_11925);var state_11948__$1 = state_11948;if(inst_11932)
{var statearr_11956_11977 = state_11948__$1;(statearr_11956_11977[1] = 8);
} else
{var statearr_11957_11978 = state_11948__$1;(statearr_11957_11978[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11949 === 6))
{var state_11948__$1 = state_11948;var statearr_11959_11979 = state_11948__$1;(statearr_11959_11979[2] = null);
(statearr_11959_11979[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11949 === 7))
{var inst_11943 = (state_11948[2]);var state_11948__$1 = state_11948;var statearr_11960_11980 = state_11948__$1;(statearr_11960_11980[2] = inst_11943);
(statearr_11960_11980[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11949 === 8))
{var inst_11925 = (state_11948[7]);var tmp11958 = inst_11925;var inst_11925__$1 = tmp11958;var state_11948__$1 = (function (){var statearr_11961 = state_11948;(statearr_11961[7] = inst_11925__$1);
return statearr_11961;
})();var statearr_11962_11981 = state_11948__$1;(statearr_11962_11981[2] = null);
(statearr_11962_11981[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11949 === 9))
{var inst_11928 = (state_11948[9]);var state_11948__$1 = state_11948;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11948__$1,11,out,inst_11928);
} else
{if((state_val_11949 === 10))
{var inst_11940 = (state_11948[2]);var state_11948__$1 = state_11948;var statearr_11963_11982 = state_11948__$1;(statearr_11963_11982[2] = inst_11940);
(statearr_11963_11982[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11949 === 11))
{var inst_11928 = (state_11948[9]);var inst_11937 = (state_11948[2]);var inst_11925 = inst_11928;var state_11948__$1 = (function (){var statearr_11964 = state_11948;(statearr_11964[7] = inst_11925);
(statearr_11964[10] = inst_11937);
return statearr_11964;
})();var statearr_11965_11983 = state_11948__$1;(statearr_11965_11983[2] = null);
(statearr_11965_11983[1] = 2);
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
var state_machine__5509__auto____0 = (function (){var statearr_11969 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_11969[0] = state_machine__5509__auto__);
(statearr_11969[1] = 1);
return statearr_11969;
});
var state_machine__5509__auto____1 = (function (state_11948){while(true){
var ret_value__5510__auto__ = (function (){try{while(true){
var result__5511__auto__ = switch__5508__auto__.call(null,state_11948);if(cljs.core.keyword_identical_QMARK_.call(null,result__5511__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5511__auto__;
}
break;
}
}catch (e11970){if((e11970 instanceof Object))
{var ex__5512__auto__ = e11970;var statearr_11971_11984 = state_11948;(statearr_11971_11984[5] = ex__5512__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11948);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e11970;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5510__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__11985 = state_11948;
state_11948 = G__11985;
continue;
}
} else
{return ret_value__5510__auto__;
}
break;
}
});
state_machine__5509__auto__ = function(state_11948){
switch(arguments.length){
case 0:
return state_machine__5509__auto____0.call(this);
case 1:
return state_machine__5509__auto____1.call(this,state_11948);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5509__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5509__auto____0;
state_machine__5509__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5509__auto____1;
return state_machine__5509__auto__;
})()
;})(switch__5508__auto__))
})();var state__5525__auto__ = (function (){var statearr_11972 = f__5524__auto__.call(null);(statearr_11972[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5523__auto___11973);
return statearr_11972;
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
var partition__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5523__auto___12120 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5524__auto__ = (function (){var switch__5508__auto__ = (function (state_12090){var state_val_12091 = (state_12090[1]);if((state_val_12091 === 1))
{var inst_12053 = (new Array(n));var inst_12054 = inst_12053;var inst_12055 = 0;var state_12090__$1 = (function (){var statearr_12092 = state_12090;(statearr_12092[7] = inst_12055);
(statearr_12092[8] = inst_12054);
return statearr_12092;
})();var statearr_12093_12121 = state_12090__$1;(statearr_12093_12121[2] = null);
(statearr_12093_12121[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12091 === 2))
{var state_12090__$1 = state_12090;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12090__$1,4,ch);
} else
{if((state_val_12091 === 3))
{var inst_12088 = (state_12090[2]);var state_12090__$1 = state_12090;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12090__$1,inst_12088);
} else
{if((state_val_12091 === 4))
{var inst_12058 = (state_12090[9]);var inst_12058__$1 = (state_12090[2]);var inst_12059 = (inst_12058__$1 == null);var inst_12060 = cljs.core.not.call(null,inst_12059);var state_12090__$1 = (function (){var statearr_12094 = state_12090;(statearr_12094[9] = inst_12058__$1);
return statearr_12094;
})();if(inst_12060)
{var statearr_12095_12122 = state_12090__$1;(statearr_12095_12122[1] = 5);
} else
{var statearr_12096_12123 = state_12090__$1;(statearr_12096_12123[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12091 === 5))
{var inst_12063 = (state_12090[10]);var inst_12058 = (state_12090[9]);var inst_12055 = (state_12090[7]);var inst_12054 = (state_12090[8]);var inst_12062 = (inst_12054[inst_12055] = inst_12058);var inst_12063__$1 = (inst_12055 + 1);var inst_12064 = (inst_12063__$1 < n);var state_12090__$1 = (function (){var statearr_12097 = state_12090;(statearr_12097[10] = inst_12063__$1);
(statearr_12097[11] = inst_12062);
return statearr_12097;
})();if(cljs.core.truth_(inst_12064))
{var statearr_12098_12124 = state_12090__$1;(statearr_12098_12124[1] = 8);
} else
{var statearr_12099_12125 = state_12090__$1;(statearr_12099_12125[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12091 === 6))
{var inst_12055 = (state_12090[7]);var inst_12076 = (inst_12055 > 0);var state_12090__$1 = state_12090;if(cljs.core.truth_(inst_12076))
{var statearr_12101_12126 = state_12090__$1;(statearr_12101_12126[1] = 12);
} else
{var statearr_12102_12127 = state_12090__$1;(statearr_12102_12127[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12091 === 7))
{var inst_12086 = (state_12090[2]);var state_12090__$1 = state_12090;var statearr_12103_12128 = state_12090__$1;(statearr_12103_12128[2] = inst_12086);
(statearr_12103_12128[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12091 === 8))
{var inst_12063 = (state_12090[10]);var inst_12054 = (state_12090[8]);var tmp12100 = inst_12054;var inst_12054__$1 = tmp12100;var inst_12055 = inst_12063;var state_12090__$1 = (function (){var statearr_12104 = state_12090;(statearr_12104[7] = inst_12055);
(statearr_12104[8] = inst_12054__$1);
return statearr_12104;
})();var statearr_12105_12129 = state_12090__$1;(statearr_12105_12129[2] = null);
(statearr_12105_12129[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12091 === 9))
{var inst_12054 = (state_12090[8]);var inst_12068 = cljs.core.vec.call(null,inst_12054);var state_12090__$1 = state_12090;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12090__$1,11,out,inst_12068);
} else
{if((state_val_12091 === 10))
{var inst_12074 = (state_12090[2]);var state_12090__$1 = state_12090;var statearr_12106_12130 = state_12090__$1;(statearr_12106_12130[2] = inst_12074);
(statearr_12106_12130[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12091 === 11))
{var inst_12070 = (state_12090[2]);var inst_12071 = (new Array(n));var inst_12054 = inst_12071;var inst_12055 = 0;var state_12090__$1 = (function (){var statearr_12107 = state_12090;(statearr_12107[12] = inst_12070);
(statearr_12107[7] = inst_12055);
(statearr_12107[8] = inst_12054);
return statearr_12107;
})();var statearr_12108_12131 = state_12090__$1;(statearr_12108_12131[2] = null);
(statearr_12108_12131[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12091 === 12))
{var inst_12054 = (state_12090[8]);var inst_12078 = cljs.core.vec.call(null,inst_12054);var state_12090__$1 = state_12090;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12090__$1,15,out,inst_12078);
} else
{if((state_val_12091 === 13))
{var state_12090__$1 = state_12090;var statearr_12109_12132 = state_12090__$1;(statearr_12109_12132[2] = null);
(statearr_12109_12132[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12091 === 14))
{var inst_12083 = (state_12090[2]);var inst_12084 = cljs.core.async.close_BANG_.call(null,out);var state_12090__$1 = (function (){var statearr_12110 = state_12090;(statearr_12110[13] = inst_12083);
return statearr_12110;
})();var statearr_12111_12133 = state_12090__$1;(statearr_12111_12133[2] = inst_12084);
(statearr_12111_12133[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12091 === 15))
{var inst_12080 = (state_12090[2]);var state_12090__$1 = state_12090;var statearr_12112_12134 = state_12090__$1;(statearr_12112_12134[2] = inst_12080);
(statearr_12112_12134[1] = 14);
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
var state_machine__5509__auto____0 = (function (){var statearr_12116 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_12116[0] = state_machine__5509__auto__);
(statearr_12116[1] = 1);
return statearr_12116;
});
var state_machine__5509__auto____1 = (function (state_12090){while(true){
var ret_value__5510__auto__ = (function (){try{while(true){
var result__5511__auto__ = switch__5508__auto__.call(null,state_12090);if(cljs.core.keyword_identical_QMARK_.call(null,result__5511__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5511__auto__;
}
break;
}
}catch (e12117){if((e12117 instanceof Object))
{var ex__5512__auto__ = e12117;var statearr_12118_12135 = state_12090;(statearr_12118_12135[5] = ex__5512__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12090);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e12117;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5510__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__12136 = state_12090;
state_12090 = G__12136;
continue;
}
} else
{return ret_value__5510__auto__;
}
break;
}
});
state_machine__5509__auto__ = function(state_12090){
switch(arguments.length){
case 0:
return state_machine__5509__auto____0.call(this);
case 1:
return state_machine__5509__auto____1.call(this,state_12090);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5509__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5509__auto____0;
state_machine__5509__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5509__auto____1;
return state_machine__5509__auto__;
})()
;})(switch__5508__auto__))
})();var state__5525__auto__ = (function (){var statearr_12119 = f__5524__auto__.call(null);(statearr_12119[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5523__auto___12120);
return statearr_12119;
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
var partition_by__3 = (function (f,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5523__auto___12279 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5524__auto__ = (function (){var switch__5508__auto__ = (function (state_12249){var state_val_12250 = (state_12249[1]);if((state_val_12250 === 1))
{var inst_12208 = [];var inst_12209 = inst_12208;var inst_12210 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",4382193538);var state_12249__$1 = (function (){var statearr_12251 = state_12249;(statearr_12251[7] = inst_12209);
(statearr_12251[8] = inst_12210);
return statearr_12251;
})();var statearr_12252_12280 = state_12249__$1;(statearr_12252_12280[2] = null);
(statearr_12252_12280[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12250 === 2))
{var state_12249__$1 = state_12249;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12249__$1,4,ch);
} else
{if((state_val_12250 === 3))
{var inst_12247 = (state_12249[2]);var state_12249__$1 = state_12249;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12249__$1,inst_12247);
} else
{if((state_val_12250 === 4))
{var inst_12213 = (state_12249[9]);var inst_12213__$1 = (state_12249[2]);var inst_12214 = (inst_12213__$1 == null);var inst_12215 = cljs.core.not.call(null,inst_12214);var state_12249__$1 = (function (){var statearr_12253 = state_12249;(statearr_12253[9] = inst_12213__$1);
return statearr_12253;
})();if(inst_12215)
{var statearr_12254_12281 = state_12249__$1;(statearr_12254_12281[1] = 5);
} else
{var statearr_12255_12282 = state_12249__$1;(statearr_12255_12282[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12250 === 5))
{var inst_12217 = (state_12249[10]);var inst_12213 = (state_12249[9]);var inst_12210 = (state_12249[8]);var inst_12217__$1 = f.call(null,inst_12213);var inst_12218 = cljs.core._EQ_.call(null,inst_12217__$1,inst_12210);var inst_12219 = cljs.core.keyword_identical_QMARK_.call(null,inst_12210,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",4382193538));var inst_12220 = (inst_12218) || (inst_12219);var state_12249__$1 = (function (){var statearr_12256 = state_12249;(statearr_12256[10] = inst_12217__$1);
return statearr_12256;
})();if(cljs.core.truth_(inst_12220))
{var statearr_12257_12283 = state_12249__$1;(statearr_12257_12283[1] = 8);
} else
{var statearr_12258_12284 = state_12249__$1;(statearr_12258_12284[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12250 === 6))
{var inst_12209 = (state_12249[7]);var inst_12234 = inst_12209.length;var inst_12235 = (inst_12234 > 0);var state_12249__$1 = state_12249;if(cljs.core.truth_(inst_12235))
{var statearr_12260_12285 = state_12249__$1;(statearr_12260_12285[1] = 12);
} else
{var statearr_12261_12286 = state_12249__$1;(statearr_12261_12286[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12250 === 7))
{var inst_12245 = (state_12249[2]);var state_12249__$1 = state_12249;var statearr_12262_12287 = state_12249__$1;(statearr_12262_12287[2] = inst_12245);
(statearr_12262_12287[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12250 === 8))
{var inst_12209 = (state_12249[7]);var inst_12217 = (state_12249[10]);var inst_12213 = (state_12249[9]);var inst_12222 = inst_12209.push(inst_12213);var tmp12259 = inst_12209;var inst_12209__$1 = tmp12259;var inst_12210 = inst_12217;var state_12249__$1 = (function (){var statearr_12263 = state_12249;(statearr_12263[7] = inst_12209__$1);
(statearr_12263[11] = inst_12222);
(statearr_12263[8] = inst_12210);
return statearr_12263;
})();var statearr_12264_12288 = state_12249__$1;(statearr_12264_12288[2] = null);
(statearr_12264_12288[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12250 === 9))
{var inst_12209 = (state_12249[7]);var inst_12225 = cljs.core.vec.call(null,inst_12209);var state_12249__$1 = state_12249;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12249__$1,11,out,inst_12225);
} else
{if((state_val_12250 === 10))
{var inst_12232 = (state_12249[2]);var state_12249__$1 = state_12249;var statearr_12265_12289 = state_12249__$1;(statearr_12265_12289[2] = inst_12232);
(statearr_12265_12289[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12250 === 11))
{var inst_12217 = (state_12249[10]);var inst_12213 = (state_12249[9]);var inst_12227 = (state_12249[2]);var inst_12228 = [];var inst_12229 = inst_12228.push(inst_12213);var inst_12209 = inst_12228;var inst_12210 = inst_12217;var state_12249__$1 = (function (){var statearr_12266 = state_12249;(statearr_12266[12] = inst_12227);
(statearr_12266[13] = inst_12229);
(statearr_12266[7] = inst_12209);
(statearr_12266[8] = inst_12210);
return statearr_12266;
})();var statearr_12267_12290 = state_12249__$1;(statearr_12267_12290[2] = null);
(statearr_12267_12290[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12250 === 12))
{var inst_12209 = (state_12249[7]);var inst_12237 = cljs.core.vec.call(null,inst_12209);var state_12249__$1 = state_12249;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12249__$1,15,out,inst_12237);
} else
{if((state_val_12250 === 13))
{var state_12249__$1 = state_12249;var statearr_12268_12291 = state_12249__$1;(statearr_12268_12291[2] = null);
(statearr_12268_12291[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12250 === 14))
{var inst_12242 = (state_12249[2]);var inst_12243 = cljs.core.async.close_BANG_.call(null,out);var state_12249__$1 = (function (){var statearr_12269 = state_12249;(statearr_12269[14] = inst_12242);
return statearr_12269;
})();var statearr_12270_12292 = state_12249__$1;(statearr_12270_12292[2] = inst_12243);
(statearr_12270_12292[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12250 === 15))
{var inst_12239 = (state_12249[2]);var state_12249__$1 = state_12249;var statearr_12271_12293 = state_12249__$1;(statearr_12271_12293[2] = inst_12239);
(statearr_12271_12293[1] = 14);
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
var state_machine__5509__auto____0 = (function (){var statearr_12275 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_12275[0] = state_machine__5509__auto__);
(statearr_12275[1] = 1);
return statearr_12275;
});
var state_machine__5509__auto____1 = (function (state_12249){while(true){
var ret_value__5510__auto__ = (function (){try{while(true){
var result__5511__auto__ = switch__5508__auto__.call(null,state_12249);if(cljs.core.keyword_identical_QMARK_.call(null,result__5511__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5511__auto__;
}
break;
}
}catch (e12276){if((e12276 instanceof Object))
{var ex__5512__auto__ = e12276;var statearr_12277_12294 = state_12249;(statearr_12277_12294[5] = ex__5512__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12249);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e12276;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5510__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__12295 = state_12249;
state_12249 = G__12295;
continue;
}
} else
{return ret_value__5510__auto__;
}
break;
}
});
state_machine__5509__auto__ = function(state_12249){
switch(arguments.length){
case 0:
return state_machine__5509__auto____0.call(this);
case 1:
return state_machine__5509__auto____1.call(this,state_12249);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5509__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5509__auto____0;
state_machine__5509__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5509__auto____1;
return state_machine__5509__auto__;
})()
;})(switch__5508__auto__))
})();var state__5525__auto__ = (function (){var statearr_12278 = f__5524__auto__.call(null);(statearr_12278[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5523__auto___12279);
return statearr_12278;
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
