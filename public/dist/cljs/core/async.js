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
cljs.core.async.fn_handler = (function fn_handler(f){if(typeof cljs.core.async.t9891 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t9891 = (function (f,fn_handler,meta9892){
this.f = f;
this.fn_handler = fn_handler;
this.meta9892 = meta9892;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t9891.cljs$lang$type = true;
cljs.core.async.t9891.cljs$lang$ctorStr = "cljs.core.async/t9891";
cljs.core.async.t9891.cljs$lang$ctorPrWriter = (function (this__3970__auto__,writer__3971__auto__,opt__3972__auto__){return cljs.core._write.call(null,writer__3971__auto__,"cljs.core.async/t9891");
});
cljs.core.async.t9891.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t9891.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return true;
});
cljs.core.async.t9891.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.f;
});
cljs.core.async.t9891.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_9893){var self__ = this;
var _9893__$1 = this;return self__.meta9892;
});
cljs.core.async.t9891.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_9893,meta9892__$1){var self__ = this;
var _9893__$1 = this;return (new cljs.core.async.t9891(self__.f,self__.fn_handler,meta9892__$1));
});
cljs.core.async.__GT_t9891 = (function __GT_t9891(f__$1,fn_handler__$1,meta9892){return (new cljs.core.async.t9891(f__$1,fn_handler__$1,meta9892));
});
}
return (new cljs.core.async.t9891(f,fn_handler,null));
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
cljs.core.async.unblocking_buffer_QMARK_ = (function unblocking_buffer_QMARK_(buff){var G__9895 = buff;if(G__9895)
{var bit__4052__auto__ = null;if(cljs.core.truth_((function (){var or__3408__auto__ = bit__4052__auto__;if(cljs.core.truth_(or__3408__auto__))
{return or__3408__auto__;
} else
{return G__9895.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})()))
{return true;
} else
{if((!G__9895.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__9895);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__9895);
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
{var val_9896 = cljs.core.deref.call(null,ret);if(cljs.core.truth_(on_caller_QMARK_))
{fn1.call(null,val_9896);
} else
{cljs.core.async.impl.dispatch.run.call(null,(function (){return fn1.call(null,val_9896);
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
cljs.core.async.random_array = (function random_array(n){var a = (new Array(n));var n__4250__auto___9897 = n;var x_9898 = 0;while(true){
if((x_9898 < n__4250__auto___9897))
{(a[x_9898] = 0);
{
var G__9899 = (x_9898 + 1);
x_9898 = G__9899;
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
var G__9900 = (i + 1);
i = G__9900;
continue;
}
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){var flag = cljs.core.atom.call(null,true);if(typeof cljs.core.async.t9904 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t9904 = (function (flag,alt_flag,meta9905){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta9905 = meta9905;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t9904.cljs$lang$type = true;
cljs.core.async.t9904.cljs$lang$ctorStr = "cljs.core.async/t9904";
cljs.core.async.t9904.cljs$lang$ctorPrWriter = (function (this__3970__auto__,writer__3971__auto__,opt__3972__auto__){return cljs.core._write.call(null,writer__3971__auto__,"cljs.core.async/t9904");
});
cljs.core.async.t9904.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t9904.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.deref.call(null,self__.flag);
});
cljs.core.async.t9904.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.flag,null);
return true;
});
cljs.core.async.t9904.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_9906){var self__ = this;
var _9906__$1 = this;return self__.meta9905;
});
cljs.core.async.t9904.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_9906,meta9905__$1){var self__ = this;
var _9906__$1 = this;return (new cljs.core.async.t9904(self__.flag,self__.alt_flag,meta9905__$1));
});
cljs.core.async.__GT_t9904 = (function __GT_t9904(flag__$1,alt_flag__$1,meta9905){return (new cljs.core.async.t9904(flag__$1,alt_flag__$1,meta9905));
});
}
return (new cljs.core.async.t9904(flag,alt_flag,null));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){if(typeof cljs.core.async.t9910 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t9910 = (function (cb,flag,alt_handler,meta9911){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta9911 = meta9911;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t9910.cljs$lang$type = true;
cljs.core.async.t9910.cljs$lang$ctorStr = "cljs.core.async/t9910";
cljs.core.async.t9910.cljs$lang$ctorPrWriter = (function (this__3970__auto__,writer__3971__auto__,opt__3972__auto__){return cljs.core._write.call(null,writer__3971__auto__,"cljs.core.async/t9910");
});
cljs.core.async.t9910.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t9910.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});
cljs.core.async.t9910.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.async.impl.protocols.commit.call(null,self__.flag);
return self__.cb;
});
cljs.core.async.t9910.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_9912){var self__ = this;
var _9912__$1 = this;return self__.meta9911;
});
cljs.core.async.t9910.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_9912,meta9911__$1){var self__ = this;
var _9912__$1 = this;return (new cljs.core.async.t9910(self__.cb,self__.flag,self__.alt_handler,meta9911__$1));
});
cljs.core.async.__GT_t9910 = (function __GT_t9910(cb__$1,flag__$1,alt_handler__$1,meta9911){return (new cljs.core.async.t9910(cb__$1,flag__$1,alt_handler__$1,meta9911));
});
}
return (new cljs.core.async.t9910(cb,flag,alt_handler,null));
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
return (function (p1__9913_SHARP_){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__9913_SHARP_,port], null));
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
var G__9914 = (i + 1);
i = G__9914;
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
var alts_BANG___delegate = function (ports,p__9915){var map__9917 = p__9915;var map__9917__$1 = ((cljs.core.seq_QMARK_.call(null,map__9917))?cljs.core.apply.call(null,cljs.core.hash_map,map__9917):map__9917);var opts = map__9917__$1;if(null)
{return null;
} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("alts! used not in (go ...) block"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,null))].join('')));
}
};
var alts_BANG_ = function (ports,var_args){
var p__9915 = null;if (arguments.length > 1) {
  p__9915 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return alts_BANG___delegate.call(this,ports,p__9915);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__9918){
var ports = cljs.core.first(arglist__9918);
var p__9915 = cljs.core.rest(arglist__9918);
return alts_BANG___delegate(ports,p__9915);
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
cljs.core.async.map_LT_ = (function map_LT_(f,ch){if(typeof cljs.core.async.t9926 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t9926 = (function (ch,f,map_LT_,meta9927){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta9927 = meta9927;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t9926.cljs$lang$type = true;
cljs.core.async.t9926.cljs$lang$ctorStr = "cljs.core.async/t9926";
cljs.core.async.t9926.cljs$lang$ctorPrWriter = (function (this__3970__auto__,writer__3971__auto__,opt__3972__auto__){return cljs.core._write.call(null,writer__3971__auto__,"cljs.core.async/t9926");
});
cljs.core.async.t9926.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t9926.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
});
cljs.core.async.t9926.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t9926.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){if(typeof cljs.core.async.t9929 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t9929 = (function (fn1,_,meta9927,ch,f,map_LT_,meta9930){
this.fn1 = fn1;
this._ = _;
this.meta9927 = meta9927;
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta9930 = meta9930;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t9929.cljs$lang$type = true;
cljs.core.async.t9929.cljs$lang$ctorStr = "cljs.core.async/t9929";
cljs.core.async.t9929.cljs$lang$ctorPrWriter = (function (this__3970__auto__,writer__3971__auto__,opt__3972__auto__){return cljs.core._write.call(null,writer__3971__auto__,"cljs.core.async/t9929");
});
cljs.core.async.t9929.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t9929.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});
cljs.core.async.t9929.prototype.cljs$core$async$impl$protocols$Handler$lock_id$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.lock_id.call(null,self__.fn1);
});
cljs.core.async.t9929.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);return ((function (f1,___$4){
return (function (p1__9919_SHARP_){return f1.call(null,(((p1__9919_SHARP_ == null))?null:self__.f.call(null,p1__9919_SHARP_)));
});
;})(f1,___$4))
});
cljs.core.async.t9929.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_9931){var self__ = this;
var _9931__$1 = this;return self__.meta9930;
});
cljs.core.async.t9929.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_9931,meta9930__$1){var self__ = this;
var _9931__$1 = this;return (new cljs.core.async.t9929(self__.fn1,self__._,self__.meta9927,self__.ch,self__.f,self__.map_LT_,meta9930__$1));
});
cljs.core.async.__GT_t9929 = (function __GT_t9929(fn1__$1,___$2,meta9927__$1,ch__$2,f__$2,map_LT___$2,meta9930){return (new cljs.core.async.t9929(fn1__$1,___$2,meta9927__$1,ch__$2,f__$2,map_LT___$2,meta9930));
});
}
return (new cljs.core.async.t9929(fn1,___$1,self__.meta9927,self__.ch,self__.f,self__.map_LT_,null));
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
cljs.core.async.t9926.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t9926.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t9926.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_9928){var self__ = this;
var _9928__$1 = this;return self__.meta9927;
});
cljs.core.async.t9926.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_9928,meta9927__$1){var self__ = this;
var _9928__$1 = this;return (new cljs.core.async.t9926(self__.ch,self__.f,self__.map_LT_,meta9927__$1));
});
cljs.core.async.__GT_t9926 = (function __GT_t9926(ch__$1,f__$1,map_LT___$1,meta9927){return (new cljs.core.async.t9926(ch__$1,f__$1,map_LT___$1,meta9927));
});
}
return (new cljs.core.async.t9926(ch,f,map_LT_,null));
});
/**
* Takes a function and a target channel, and returns a channel which
* applies f to each value before supplying it to the target channel.
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){if(typeof cljs.core.async.t9935 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t9935 = (function (ch,f,map_GT_,meta9936){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta9936 = meta9936;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t9935.cljs$lang$type = true;
cljs.core.async.t9935.cljs$lang$ctorStr = "cljs.core.async/t9935";
cljs.core.async.t9935.cljs$lang$ctorPrWriter = (function (this__3970__auto__,writer__3971__auto__,opt__3972__auto__){return cljs.core._write.call(null,writer__3971__auto__,"cljs.core.async/t9935");
});
cljs.core.async.t9935.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t9935.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn0);
});
cljs.core.async.t9935.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t9935.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t9935.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t9935.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t9935.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_9937){var self__ = this;
var _9937__$1 = this;return self__.meta9936;
});
cljs.core.async.t9935.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_9937,meta9936__$1){var self__ = this;
var _9937__$1 = this;return (new cljs.core.async.t9935(self__.ch,self__.f,self__.map_GT_,meta9936__$1));
});
cljs.core.async.__GT_t9935 = (function __GT_t9935(ch__$1,f__$1,map_GT___$1,meta9936){return (new cljs.core.async.t9935(ch__$1,f__$1,map_GT___$1,meta9936));
});
}
return (new cljs.core.async.t9935(ch,f,map_GT_,null));
});
/**
* Takes a predicate and a target channel, and returns a channel which
* supplies only the values for which the predicate returns true to the
* target channel.
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){if(typeof cljs.core.async.t9941 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t9941 = (function (ch,p,filter_GT_,meta9942){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta9942 = meta9942;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t9941.cljs$lang$type = true;
cljs.core.async.t9941.cljs$lang$ctorStr = "cljs.core.async/t9941";
cljs.core.async.t9941.cljs$lang$ctorPrWriter = (function (this__3970__auto__,writer__3971__auto__,opt__3972__auto__){return cljs.core._write.call(null,writer__3971__auto__,"cljs.core.async/t9941");
});
cljs.core.async.t9941.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t9941.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.p.call(null,val)))
{return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
} else
{return cljs.core.async.impl.channels.box.call(null,null);
}
});
cljs.core.async.t9941.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t9941.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t9941.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t9941.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t9941.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_9943){var self__ = this;
var _9943__$1 = this;return self__.meta9942;
});
cljs.core.async.t9941.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_9943,meta9942__$1){var self__ = this;
var _9943__$1 = this;return (new cljs.core.async.t9941(self__.ch,self__.p,self__.filter_GT_,meta9942__$1));
});
cljs.core.async.__GT_t9941 = (function __GT_t9941(ch__$1,p__$1,filter_GT___$1,meta9942){return (new cljs.core.async.t9941(ch__$1,p__$1,filter_GT___$1,meta9942));
});
}
return (new cljs.core.async.t9941(ch,p,filter_GT_,null));
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
var filter_LT___3 = (function (p,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__6049__auto___10026 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6050__auto__ = (function (){var switch__6034__auto__ = (function (state_10005){var state_val_10006 = (state_10005[1]);if((state_val_10006 === 1))
{var state_10005__$1 = state_10005;var statearr_10007_10027 = state_10005__$1;(statearr_10007_10027[2] = null);
(statearr_10007_10027[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10006 === 2))
{var state_10005__$1 = state_10005;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10005__$1,4,ch);
} else
{if((state_val_10006 === 3))
{var inst_10003 = (state_10005[2]);var state_10005__$1 = state_10005;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10005__$1,inst_10003);
} else
{if((state_val_10006 === 4))
{var inst_9987 = (state_10005[7]);var inst_9987__$1 = (state_10005[2]);var inst_9988 = (inst_9987__$1 == null);var state_10005__$1 = (function (){var statearr_10008 = state_10005;(statearr_10008[7] = inst_9987__$1);
return statearr_10008;
})();if(cljs.core.truth_(inst_9988))
{var statearr_10009_10028 = state_10005__$1;(statearr_10009_10028[1] = 5);
} else
{var statearr_10010_10029 = state_10005__$1;(statearr_10010_10029[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10006 === 5))
{var inst_9990 = cljs.core.async.close_BANG_.call(null,out);var state_10005__$1 = state_10005;var statearr_10011_10030 = state_10005__$1;(statearr_10011_10030[2] = inst_9990);
(statearr_10011_10030[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10006 === 6))
{var inst_9987 = (state_10005[7]);var inst_9992 = p.call(null,inst_9987);var state_10005__$1 = state_10005;if(cljs.core.truth_(inst_9992))
{var statearr_10012_10031 = state_10005__$1;(statearr_10012_10031[1] = 8);
} else
{var statearr_10013_10032 = state_10005__$1;(statearr_10013_10032[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10006 === 7))
{var inst_10001 = (state_10005[2]);var state_10005__$1 = state_10005;var statearr_10014_10033 = state_10005__$1;(statearr_10014_10033[2] = inst_10001);
(statearr_10014_10033[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10006 === 8))
{var inst_9987 = (state_10005[7]);var state_10005__$1 = state_10005;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_10005__$1,11,out,inst_9987);
} else
{if((state_val_10006 === 9))
{var state_10005__$1 = state_10005;var statearr_10015_10034 = state_10005__$1;(statearr_10015_10034[2] = null);
(statearr_10015_10034[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10006 === 10))
{var inst_9998 = (state_10005[2]);var state_10005__$1 = (function (){var statearr_10016 = state_10005;(statearr_10016[8] = inst_9998);
return statearr_10016;
})();var statearr_10017_10035 = state_10005__$1;(statearr_10017_10035[2] = null);
(statearr_10017_10035[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10006 === 11))
{var inst_9995 = (state_10005[2]);var state_10005__$1 = state_10005;var statearr_10018_10036 = state_10005__$1;(statearr_10018_10036[2] = inst_9995);
(statearr_10018_10036[1] = 10);
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
});return ((function (switch__6034__auto__){
return (function() {
var state_machine__6035__auto__ = null;
var state_machine__6035__auto____0 = (function (){var statearr_10022 = [null,null,null,null,null,null,null,null,null];(statearr_10022[0] = state_machine__6035__auto__);
(statearr_10022[1] = 1);
return statearr_10022;
});
var state_machine__6035__auto____1 = (function (state_10005){while(true){
var ret_value__6036__auto__ = (function (){try{while(true){
var result__6037__auto__ = switch__6034__auto__.call(null,state_10005);if(cljs.core.keyword_identical_QMARK_.call(null,result__6037__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6037__auto__;
}
break;
}
}catch (e10023){if((e10023 instanceof Object))
{var ex__6038__auto__ = e10023;var statearr_10024_10037 = state_10005;(statearr_10024_10037[5] = ex__6038__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10005);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e10023;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6036__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__10038 = state_10005;
state_10005 = G__10038;
continue;
}
} else
{return ret_value__6036__auto__;
}
break;
}
});
state_machine__6035__auto__ = function(state_10005){
switch(arguments.length){
case 0:
return state_machine__6035__auto____0.call(this);
case 1:
return state_machine__6035__auto____1.call(this,state_10005);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6035__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6035__auto____0;
state_machine__6035__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6035__auto____1;
return state_machine__6035__auto__;
})()
;})(switch__6034__auto__))
})();var state__6051__auto__ = (function (){var statearr_10025 = f__6050__auto__.call(null);(statearr_10025[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6049__auto___10026);
return statearr_10025;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6051__auto__);
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
cljs.core.async.mapcat_STAR_ = (function mapcat_STAR_(f,in$,out){var c__6049__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6050__auto__ = (function (){var switch__6034__auto__ = (function (state_10190){var state_val_10191 = (state_10190[1]);if((state_val_10191 === 1))
{var state_10190__$1 = state_10190;var statearr_10192_10229 = state_10190__$1;(statearr_10192_10229[2] = null);
(statearr_10192_10229[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10191 === 2))
{var state_10190__$1 = state_10190;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10190__$1,4,in$);
} else
{if((state_val_10191 === 3))
{var inst_10188 = (state_10190[2]);var state_10190__$1 = state_10190;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10190__$1,inst_10188);
} else
{if((state_val_10191 === 4))
{var inst_10136 = (state_10190[7]);var inst_10136__$1 = (state_10190[2]);var inst_10137 = (inst_10136__$1 == null);var state_10190__$1 = (function (){var statearr_10193 = state_10190;(statearr_10193[7] = inst_10136__$1);
return statearr_10193;
})();if(cljs.core.truth_(inst_10137))
{var statearr_10194_10230 = state_10190__$1;(statearr_10194_10230[1] = 5);
} else
{var statearr_10195_10231 = state_10190__$1;(statearr_10195_10231[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10191 === 5))
{var inst_10139 = cljs.core.async.close_BANG_.call(null,out);var state_10190__$1 = state_10190;var statearr_10196_10232 = state_10190__$1;(statearr_10196_10232[2] = inst_10139);
(statearr_10196_10232[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10191 === 6))
{var inst_10136 = (state_10190[7]);var inst_10141 = f.call(null,inst_10136);var inst_10146 = cljs.core.seq.call(null,inst_10141);var inst_10147 = inst_10146;var inst_10148 = null;var inst_10149 = 0;var inst_10150 = 0;var state_10190__$1 = (function (){var statearr_10197 = state_10190;(statearr_10197[8] = inst_10147);
(statearr_10197[9] = inst_10148);
(statearr_10197[10] = inst_10149);
(statearr_10197[11] = inst_10150);
return statearr_10197;
})();var statearr_10198_10233 = state_10190__$1;(statearr_10198_10233[2] = null);
(statearr_10198_10233[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10191 === 7))
{var inst_10186 = (state_10190[2]);var state_10190__$1 = state_10190;var statearr_10199_10234 = state_10190__$1;(statearr_10199_10234[2] = inst_10186);
(statearr_10199_10234[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10191 === 8))
{var inst_10149 = (state_10190[10]);var inst_10150 = (state_10190[11]);var inst_10152 = (inst_10150 < inst_10149);var inst_10153 = inst_10152;var state_10190__$1 = state_10190;if(cljs.core.truth_(inst_10153))
{var statearr_10200_10235 = state_10190__$1;(statearr_10200_10235[1] = 10);
} else
{var statearr_10201_10236 = state_10190__$1;(statearr_10201_10236[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10191 === 9))
{var inst_10183 = (state_10190[2]);var state_10190__$1 = (function (){var statearr_10202 = state_10190;(statearr_10202[12] = inst_10183);
return statearr_10202;
})();var statearr_10203_10237 = state_10190__$1;(statearr_10203_10237[2] = null);
(statearr_10203_10237[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10191 === 10))
{var inst_10148 = (state_10190[9]);var inst_10150 = (state_10190[11]);var inst_10155 = cljs.core._nth.call(null,inst_10148,inst_10150);var state_10190__$1 = state_10190;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_10190__$1,13,out,inst_10155);
} else
{if((state_val_10191 === 11))
{var inst_10161 = (state_10190[13]);var inst_10147 = (state_10190[8]);var inst_10161__$1 = cljs.core.seq.call(null,inst_10147);var state_10190__$1 = (function (){var statearr_10207 = state_10190;(statearr_10207[13] = inst_10161__$1);
return statearr_10207;
})();if(inst_10161__$1)
{var statearr_10208_10238 = state_10190__$1;(statearr_10208_10238[1] = 14);
} else
{var statearr_10209_10239 = state_10190__$1;(statearr_10209_10239[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10191 === 12))
{var inst_10181 = (state_10190[2]);var state_10190__$1 = state_10190;var statearr_10210_10240 = state_10190__$1;(statearr_10210_10240[2] = inst_10181);
(statearr_10210_10240[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10191 === 13))
{var inst_10147 = (state_10190[8]);var inst_10148 = (state_10190[9]);var inst_10149 = (state_10190[10]);var inst_10150 = (state_10190[11]);var inst_10157 = (state_10190[2]);var inst_10158 = (inst_10150 + 1);var tmp10204 = inst_10147;var tmp10205 = inst_10148;var tmp10206 = inst_10149;var inst_10147__$1 = tmp10204;var inst_10148__$1 = tmp10205;var inst_10149__$1 = tmp10206;var inst_10150__$1 = inst_10158;var state_10190__$1 = (function (){var statearr_10211 = state_10190;(statearr_10211[8] = inst_10147__$1);
(statearr_10211[14] = inst_10157);
(statearr_10211[9] = inst_10148__$1);
(statearr_10211[10] = inst_10149__$1);
(statearr_10211[11] = inst_10150__$1);
return statearr_10211;
})();var statearr_10212_10241 = state_10190__$1;(statearr_10212_10241[2] = null);
(statearr_10212_10241[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10191 === 14))
{var inst_10161 = (state_10190[13]);var inst_10163 = cljs.core.chunked_seq_QMARK_.call(null,inst_10161);var state_10190__$1 = state_10190;if(inst_10163)
{var statearr_10213_10242 = state_10190__$1;(statearr_10213_10242[1] = 17);
} else
{var statearr_10214_10243 = state_10190__$1;(statearr_10214_10243[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10191 === 15))
{var state_10190__$1 = state_10190;var statearr_10215_10244 = state_10190__$1;(statearr_10215_10244[2] = null);
(statearr_10215_10244[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10191 === 16))
{var inst_10179 = (state_10190[2]);var state_10190__$1 = state_10190;var statearr_10216_10245 = state_10190__$1;(statearr_10216_10245[2] = inst_10179);
(statearr_10216_10245[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10191 === 17))
{var inst_10161 = (state_10190[13]);var inst_10165 = cljs.core.chunk_first.call(null,inst_10161);var inst_10166 = cljs.core.chunk_rest.call(null,inst_10161);var inst_10167 = cljs.core.count.call(null,inst_10165);var inst_10147 = inst_10166;var inst_10148 = inst_10165;var inst_10149 = inst_10167;var inst_10150 = 0;var state_10190__$1 = (function (){var statearr_10217 = state_10190;(statearr_10217[8] = inst_10147);
(statearr_10217[9] = inst_10148);
(statearr_10217[10] = inst_10149);
(statearr_10217[11] = inst_10150);
return statearr_10217;
})();var statearr_10218_10246 = state_10190__$1;(statearr_10218_10246[2] = null);
(statearr_10218_10246[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10191 === 18))
{var inst_10161 = (state_10190[13]);var inst_10170 = cljs.core.first.call(null,inst_10161);var state_10190__$1 = state_10190;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_10190__$1,20,out,inst_10170);
} else
{if((state_val_10191 === 19))
{var inst_10176 = (state_10190[2]);var state_10190__$1 = state_10190;var statearr_10219_10247 = state_10190__$1;(statearr_10219_10247[2] = inst_10176);
(statearr_10219_10247[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10191 === 20))
{var inst_10161 = (state_10190[13]);var inst_10172 = (state_10190[2]);var inst_10173 = cljs.core.next.call(null,inst_10161);var inst_10147 = inst_10173;var inst_10148 = null;var inst_10149 = 0;var inst_10150 = 0;var state_10190__$1 = (function (){var statearr_10220 = state_10190;(statearr_10220[15] = inst_10172);
(statearr_10220[8] = inst_10147);
(statearr_10220[9] = inst_10148);
(statearr_10220[10] = inst_10149);
(statearr_10220[11] = inst_10150);
return statearr_10220;
})();var statearr_10221_10248 = state_10190__$1;(statearr_10221_10248[2] = null);
(statearr_10221_10248[1] = 8);
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
});return ((function (switch__6034__auto__){
return (function() {
var state_machine__6035__auto__ = null;
var state_machine__6035__auto____0 = (function (){var statearr_10225 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_10225[0] = state_machine__6035__auto__);
(statearr_10225[1] = 1);
return statearr_10225;
});
var state_machine__6035__auto____1 = (function (state_10190){while(true){
var ret_value__6036__auto__ = (function (){try{while(true){
var result__6037__auto__ = switch__6034__auto__.call(null,state_10190);if(cljs.core.keyword_identical_QMARK_.call(null,result__6037__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6037__auto__;
}
break;
}
}catch (e10226){if((e10226 instanceof Object))
{var ex__6038__auto__ = e10226;var statearr_10227_10249 = state_10190;(statearr_10227_10249[5] = ex__6038__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10190);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e10226;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6036__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__10250 = state_10190;
state_10190 = G__10250;
continue;
}
} else
{return ret_value__6036__auto__;
}
break;
}
});
state_machine__6035__auto__ = function(state_10190){
switch(arguments.length){
case 0:
return state_machine__6035__auto____0.call(this);
case 1:
return state_machine__6035__auto____1.call(this,state_10190);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6035__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6035__auto____0;
state_machine__6035__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6035__auto____1;
return state_machine__6035__auto__;
})()
;})(switch__6034__auto__))
})();var state__6051__auto__ = (function (){var statearr_10228 = f__6050__auto__.call(null);(statearr_10228[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6049__auto__);
return statearr_10228;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6051__auto__);
}));
return c__6049__auto__;
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
var pipe__3 = (function (from,to,close_QMARK_){var c__6049__auto___10331 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6050__auto__ = (function (){var switch__6034__auto__ = (function (state_10310){var state_val_10311 = (state_10310[1]);if((state_val_10311 === 1))
{var state_10310__$1 = state_10310;var statearr_10312_10332 = state_10310__$1;(statearr_10312_10332[2] = null);
(statearr_10312_10332[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10311 === 2))
{var state_10310__$1 = state_10310;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10310__$1,4,from);
} else
{if((state_val_10311 === 3))
{var inst_10308 = (state_10310[2]);var state_10310__$1 = state_10310;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10310__$1,inst_10308);
} else
{if((state_val_10311 === 4))
{var inst_10293 = (state_10310[7]);var inst_10293__$1 = (state_10310[2]);var inst_10294 = (inst_10293__$1 == null);var state_10310__$1 = (function (){var statearr_10313 = state_10310;(statearr_10313[7] = inst_10293__$1);
return statearr_10313;
})();if(cljs.core.truth_(inst_10294))
{var statearr_10314_10333 = state_10310__$1;(statearr_10314_10333[1] = 5);
} else
{var statearr_10315_10334 = state_10310__$1;(statearr_10315_10334[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10311 === 5))
{var state_10310__$1 = state_10310;if(cljs.core.truth_(close_QMARK_))
{var statearr_10316_10335 = state_10310__$1;(statearr_10316_10335[1] = 8);
} else
{var statearr_10317_10336 = state_10310__$1;(statearr_10317_10336[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10311 === 6))
{var inst_10293 = (state_10310[7]);var state_10310__$1 = state_10310;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_10310__$1,11,to,inst_10293);
} else
{if((state_val_10311 === 7))
{var inst_10306 = (state_10310[2]);var state_10310__$1 = state_10310;var statearr_10318_10337 = state_10310__$1;(statearr_10318_10337[2] = inst_10306);
(statearr_10318_10337[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10311 === 8))
{var inst_10297 = cljs.core.async.close_BANG_.call(null,to);var state_10310__$1 = state_10310;var statearr_10319_10338 = state_10310__$1;(statearr_10319_10338[2] = inst_10297);
(statearr_10319_10338[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10311 === 9))
{var state_10310__$1 = state_10310;var statearr_10320_10339 = state_10310__$1;(statearr_10320_10339[2] = null);
(statearr_10320_10339[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10311 === 10))
{var inst_10300 = (state_10310[2]);var state_10310__$1 = state_10310;var statearr_10321_10340 = state_10310__$1;(statearr_10321_10340[2] = inst_10300);
(statearr_10321_10340[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10311 === 11))
{var inst_10303 = (state_10310[2]);var state_10310__$1 = (function (){var statearr_10322 = state_10310;(statearr_10322[8] = inst_10303);
return statearr_10322;
})();var statearr_10323_10341 = state_10310__$1;(statearr_10323_10341[2] = null);
(statearr_10323_10341[1] = 2);
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
});return ((function (switch__6034__auto__){
return (function() {
var state_machine__6035__auto__ = null;
var state_machine__6035__auto____0 = (function (){var statearr_10327 = [null,null,null,null,null,null,null,null,null];(statearr_10327[0] = state_machine__6035__auto__);
(statearr_10327[1] = 1);
return statearr_10327;
});
var state_machine__6035__auto____1 = (function (state_10310){while(true){
var ret_value__6036__auto__ = (function (){try{while(true){
var result__6037__auto__ = switch__6034__auto__.call(null,state_10310);if(cljs.core.keyword_identical_QMARK_.call(null,result__6037__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6037__auto__;
}
break;
}
}catch (e10328){if((e10328 instanceof Object))
{var ex__6038__auto__ = e10328;var statearr_10329_10342 = state_10310;(statearr_10329_10342[5] = ex__6038__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10310);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e10328;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6036__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__10343 = state_10310;
state_10310 = G__10343;
continue;
}
} else
{return ret_value__6036__auto__;
}
break;
}
});
state_machine__6035__auto__ = function(state_10310){
switch(arguments.length){
case 0:
return state_machine__6035__auto____0.call(this);
case 1:
return state_machine__6035__auto____1.call(this,state_10310);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6035__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6035__auto____0;
state_machine__6035__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6035__auto____1;
return state_machine__6035__auto__;
})()
;})(switch__6034__auto__))
})();var state__6051__auto__ = (function (){var statearr_10330 = f__6050__auto__.call(null);(statearr_10330[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6049__auto___10331);
return statearr_10330;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6051__auto__);
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
var split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){var tc = cljs.core.async.chan.call(null,t_buf_or_n);var fc = cljs.core.async.chan.call(null,f_buf_or_n);var c__6049__auto___10430 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6050__auto__ = (function (){var switch__6034__auto__ = (function (state_10408){var state_val_10409 = (state_10408[1]);if((state_val_10409 === 1))
{var state_10408__$1 = state_10408;var statearr_10410_10431 = state_10408__$1;(statearr_10410_10431[2] = null);
(statearr_10410_10431[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10409 === 2))
{var state_10408__$1 = state_10408;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10408__$1,4,ch);
} else
{if((state_val_10409 === 3))
{var inst_10406 = (state_10408[2]);var state_10408__$1 = state_10408;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10408__$1,inst_10406);
} else
{if((state_val_10409 === 4))
{var inst_10389 = (state_10408[7]);var inst_10389__$1 = (state_10408[2]);var inst_10390 = (inst_10389__$1 == null);var state_10408__$1 = (function (){var statearr_10411 = state_10408;(statearr_10411[7] = inst_10389__$1);
return statearr_10411;
})();if(cljs.core.truth_(inst_10390))
{var statearr_10412_10432 = state_10408__$1;(statearr_10412_10432[1] = 5);
} else
{var statearr_10413_10433 = state_10408__$1;(statearr_10413_10433[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10409 === 5))
{var inst_10392 = cljs.core.async.close_BANG_.call(null,tc);var inst_10393 = cljs.core.async.close_BANG_.call(null,fc);var state_10408__$1 = (function (){var statearr_10414 = state_10408;(statearr_10414[8] = inst_10392);
return statearr_10414;
})();var statearr_10415_10434 = state_10408__$1;(statearr_10415_10434[2] = inst_10393);
(statearr_10415_10434[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10409 === 6))
{var inst_10389 = (state_10408[7]);var inst_10395 = p.call(null,inst_10389);var state_10408__$1 = state_10408;if(cljs.core.truth_(inst_10395))
{var statearr_10416_10435 = state_10408__$1;(statearr_10416_10435[1] = 9);
} else
{var statearr_10417_10436 = state_10408__$1;(statearr_10417_10436[1] = 10);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10409 === 7))
{var inst_10404 = (state_10408[2]);var state_10408__$1 = state_10408;var statearr_10418_10437 = state_10408__$1;(statearr_10418_10437[2] = inst_10404);
(statearr_10418_10437[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10409 === 8))
{var inst_10401 = (state_10408[2]);var state_10408__$1 = (function (){var statearr_10419 = state_10408;(statearr_10419[9] = inst_10401);
return statearr_10419;
})();var statearr_10420_10438 = state_10408__$1;(statearr_10420_10438[2] = null);
(statearr_10420_10438[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10409 === 9))
{var state_10408__$1 = state_10408;var statearr_10421_10439 = state_10408__$1;(statearr_10421_10439[2] = tc);
(statearr_10421_10439[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10409 === 10))
{var state_10408__$1 = state_10408;var statearr_10422_10440 = state_10408__$1;(statearr_10422_10440[2] = fc);
(statearr_10422_10440[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10409 === 11))
{var inst_10389 = (state_10408[7]);var inst_10399 = (state_10408[2]);var state_10408__$1 = state_10408;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_10408__$1,8,inst_10399,inst_10389);
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
});return ((function (switch__6034__auto__){
return (function() {
var state_machine__6035__auto__ = null;
var state_machine__6035__auto____0 = (function (){var statearr_10426 = [null,null,null,null,null,null,null,null,null,null];(statearr_10426[0] = state_machine__6035__auto__);
(statearr_10426[1] = 1);
return statearr_10426;
});
var state_machine__6035__auto____1 = (function (state_10408){while(true){
var ret_value__6036__auto__ = (function (){try{while(true){
var result__6037__auto__ = switch__6034__auto__.call(null,state_10408);if(cljs.core.keyword_identical_QMARK_.call(null,result__6037__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6037__auto__;
}
break;
}
}catch (e10427){if((e10427 instanceof Object))
{var ex__6038__auto__ = e10427;var statearr_10428_10441 = state_10408;(statearr_10428_10441[5] = ex__6038__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10408);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e10427;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6036__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__10442 = state_10408;
state_10408 = G__10442;
continue;
}
} else
{return ret_value__6036__auto__;
}
break;
}
});
state_machine__6035__auto__ = function(state_10408){
switch(arguments.length){
case 0:
return state_machine__6035__auto____0.call(this);
case 1:
return state_machine__6035__auto____1.call(this,state_10408);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6035__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6035__auto____0;
state_machine__6035__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6035__auto____1;
return state_machine__6035__auto__;
})()
;})(switch__6034__auto__))
})();var state__6051__auto__ = (function (){var statearr_10429 = f__6050__auto__.call(null);(statearr_10429[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6049__auto___10430);
return statearr_10429;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6051__auto__);
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
cljs.core.async.reduce = (function reduce(f,init,ch){var c__6049__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6050__auto__ = (function (){var switch__6034__auto__ = (function (state_10489){var state_val_10490 = (state_10489[1]);if((state_val_10490 === 7))
{var inst_10485 = (state_10489[2]);var state_10489__$1 = state_10489;var statearr_10491_10507 = state_10489__$1;(statearr_10491_10507[2] = inst_10485);
(statearr_10491_10507[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10490 === 6))
{var inst_10478 = (state_10489[7]);var inst_10475 = (state_10489[8]);var inst_10482 = f.call(null,inst_10475,inst_10478);var inst_10475__$1 = inst_10482;var state_10489__$1 = (function (){var statearr_10492 = state_10489;(statearr_10492[8] = inst_10475__$1);
return statearr_10492;
})();var statearr_10493_10508 = state_10489__$1;(statearr_10493_10508[2] = null);
(statearr_10493_10508[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10490 === 5))
{var inst_10475 = (state_10489[8]);var state_10489__$1 = state_10489;var statearr_10494_10509 = state_10489__$1;(statearr_10494_10509[2] = inst_10475);
(statearr_10494_10509[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10490 === 4))
{var inst_10478 = (state_10489[7]);var inst_10478__$1 = (state_10489[2]);var inst_10479 = (inst_10478__$1 == null);var state_10489__$1 = (function (){var statearr_10495 = state_10489;(statearr_10495[7] = inst_10478__$1);
return statearr_10495;
})();if(cljs.core.truth_(inst_10479))
{var statearr_10496_10510 = state_10489__$1;(statearr_10496_10510[1] = 5);
} else
{var statearr_10497_10511 = state_10489__$1;(statearr_10497_10511[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10490 === 3))
{var inst_10487 = (state_10489[2]);var state_10489__$1 = state_10489;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10489__$1,inst_10487);
} else
{if((state_val_10490 === 2))
{var state_10489__$1 = state_10489;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10489__$1,4,ch);
} else
{if((state_val_10490 === 1))
{var inst_10475 = init;var state_10489__$1 = (function (){var statearr_10498 = state_10489;(statearr_10498[8] = inst_10475);
return statearr_10498;
})();var statearr_10499_10512 = state_10489__$1;(statearr_10499_10512[2] = null);
(statearr_10499_10512[1] = 2);
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
});return ((function (switch__6034__auto__){
return (function() {
var state_machine__6035__auto__ = null;
var state_machine__6035__auto____0 = (function (){var statearr_10503 = [null,null,null,null,null,null,null,null,null];(statearr_10503[0] = state_machine__6035__auto__);
(statearr_10503[1] = 1);
return statearr_10503;
});
var state_machine__6035__auto____1 = (function (state_10489){while(true){
var ret_value__6036__auto__ = (function (){try{while(true){
var result__6037__auto__ = switch__6034__auto__.call(null,state_10489);if(cljs.core.keyword_identical_QMARK_.call(null,result__6037__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6037__auto__;
}
break;
}
}catch (e10504){if((e10504 instanceof Object))
{var ex__6038__auto__ = e10504;var statearr_10505_10513 = state_10489;(statearr_10505_10513[5] = ex__6038__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10489);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e10504;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6036__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__10514 = state_10489;
state_10489 = G__10514;
continue;
}
} else
{return ret_value__6036__auto__;
}
break;
}
});
state_machine__6035__auto__ = function(state_10489){
switch(arguments.length){
case 0:
return state_machine__6035__auto____0.call(this);
case 1:
return state_machine__6035__auto____1.call(this,state_10489);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6035__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6035__auto____0;
state_machine__6035__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6035__auto____1;
return state_machine__6035__auto__;
})()
;})(switch__6034__auto__))
})();var state__6051__auto__ = (function (){var statearr_10506 = f__6050__auto__.call(null);(statearr_10506[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6049__auto__);
return statearr_10506;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6051__auto__);
}));
return c__6049__auto__;
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
var onto_chan__3 = (function (ch,coll,close_QMARK_){var c__6049__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6050__auto__ = (function (){var switch__6034__auto__ = (function (state_10576){var state_val_10577 = (state_10576[1]);if((state_val_10577 === 1))
{var inst_10556 = cljs.core.seq.call(null,coll);var inst_10557 = inst_10556;var state_10576__$1 = (function (){var statearr_10578 = state_10576;(statearr_10578[7] = inst_10557);
return statearr_10578;
})();var statearr_10579_10597 = state_10576__$1;(statearr_10579_10597[2] = null);
(statearr_10579_10597[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10577 === 2))
{var inst_10557 = (state_10576[7]);var state_10576__$1 = state_10576;if(cljs.core.truth_(inst_10557))
{var statearr_10580_10598 = state_10576__$1;(statearr_10580_10598[1] = 4);
} else
{var statearr_10581_10599 = state_10576__$1;(statearr_10581_10599[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10577 === 3))
{var inst_10574 = (state_10576[2]);var state_10576__$1 = state_10576;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10576__$1,inst_10574);
} else
{if((state_val_10577 === 4))
{var inst_10557 = (state_10576[7]);var inst_10560 = cljs.core.first.call(null,inst_10557);var state_10576__$1 = state_10576;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_10576__$1,7,ch,inst_10560);
} else
{if((state_val_10577 === 5))
{var state_10576__$1 = state_10576;if(cljs.core.truth_(close_QMARK_))
{var statearr_10582_10600 = state_10576__$1;(statearr_10582_10600[1] = 8);
} else
{var statearr_10583_10601 = state_10576__$1;(statearr_10583_10601[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10577 === 6))
{var inst_10572 = (state_10576[2]);var state_10576__$1 = state_10576;var statearr_10584_10602 = state_10576__$1;(statearr_10584_10602[2] = inst_10572);
(statearr_10584_10602[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10577 === 7))
{var inst_10557 = (state_10576[7]);var inst_10562 = (state_10576[2]);var inst_10563 = cljs.core.next.call(null,inst_10557);var inst_10557__$1 = inst_10563;var state_10576__$1 = (function (){var statearr_10585 = state_10576;(statearr_10585[8] = inst_10562);
(statearr_10585[7] = inst_10557__$1);
return statearr_10585;
})();var statearr_10586_10603 = state_10576__$1;(statearr_10586_10603[2] = null);
(statearr_10586_10603[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10577 === 8))
{var inst_10567 = cljs.core.async.close_BANG_.call(null,ch);var state_10576__$1 = state_10576;var statearr_10587_10604 = state_10576__$1;(statearr_10587_10604[2] = inst_10567);
(statearr_10587_10604[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10577 === 9))
{var state_10576__$1 = state_10576;var statearr_10588_10605 = state_10576__$1;(statearr_10588_10605[2] = null);
(statearr_10588_10605[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10577 === 10))
{var inst_10570 = (state_10576[2]);var state_10576__$1 = state_10576;var statearr_10589_10606 = state_10576__$1;(statearr_10589_10606[2] = inst_10570);
(statearr_10589_10606[1] = 6);
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
});return ((function (switch__6034__auto__){
return (function() {
var state_machine__6035__auto__ = null;
var state_machine__6035__auto____0 = (function (){var statearr_10593 = [null,null,null,null,null,null,null,null,null];(statearr_10593[0] = state_machine__6035__auto__);
(statearr_10593[1] = 1);
return statearr_10593;
});
var state_machine__6035__auto____1 = (function (state_10576){while(true){
var ret_value__6036__auto__ = (function (){try{while(true){
var result__6037__auto__ = switch__6034__auto__.call(null,state_10576);if(cljs.core.keyword_identical_QMARK_.call(null,result__6037__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6037__auto__;
}
break;
}
}catch (e10594){if((e10594 instanceof Object))
{var ex__6038__auto__ = e10594;var statearr_10595_10607 = state_10576;(statearr_10595_10607[5] = ex__6038__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10576);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e10594;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6036__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__10608 = state_10576;
state_10576 = G__10608;
continue;
}
} else
{return ret_value__6036__auto__;
}
break;
}
});
state_machine__6035__auto__ = function(state_10576){
switch(arguments.length){
case 0:
return state_machine__6035__auto____0.call(this);
case 1:
return state_machine__6035__auto____1.call(this,state_10576);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6035__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6035__auto____0;
state_machine__6035__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6035__auto____1;
return state_machine__6035__auto__;
})()
;})(switch__6034__auto__))
})();var state__6051__auto__ = (function (){var statearr_10596 = f__6050__auto__.call(null);(statearr_10596[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6049__auto__);
return statearr_10596;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6051__auto__);
}));
return c__6049__auto__;
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
cljs.core.async.Mux = (function (){var obj10610 = {};return obj10610;
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
cljs.core.async.Mult = (function (){var obj10612 = {};return obj10612;
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
cljs.core.async.mult = (function mult(ch){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var m = (function (){if(typeof cljs.core.async.t10836 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t10836 = (function (cs,ch,mult,meta10837){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta10837 = meta10837;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t10836.cljs$lang$type = true;
cljs.core.async.t10836.cljs$lang$ctorStr = "cljs.core.async/t10836";
cljs.core.async.t10836.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__3970__auto__,writer__3971__auto__,opt__3972__auto__){return cljs.core._write.call(null,writer__3971__auto__,"cljs.core.async/t10836");
});})(cs))
;
cljs.core.async.t10836.prototype.cljs$core$async$Mult$ = true;
cljs.core.async.t10836.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$2,close_QMARK_){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$2,close_QMARK_);
return null;
});})(cs))
;
cljs.core.async.t10836.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$2){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$2);
return null;
});})(cs))
;
cljs.core.async.t10836.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return null;
});})(cs))
;
cljs.core.async.t10836.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t10836.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(cs))
;
cljs.core.async.t10836.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_10838){var self__ = this;
var _10838__$1 = this;return self__.meta10837;
});})(cs))
;
cljs.core.async.t10836.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_10838,meta10837__$1){var self__ = this;
var _10838__$1 = this;return (new cljs.core.async.t10836(self__.cs,self__.ch,self__.mult,meta10837__$1));
});})(cs))
;
cljs.core.async.__GT_t10836 = ((function (cs){
return (function __GT_t10836(cs__$1,ch__$1,mult__$1,meta10837){return (new cljs.core.async.t10836(cs__$1,ch__$1,mult__$1,meta10837));
});})(cs))
;
}
return (new cljs.core.async.t10836(cs,ch,mult,null));
})();var dchan = cljs.core.async.chan.call(null,1);var dctr = cljs.core.atom.call(null,null);var done = ((function (cs,m,dchan,dctr){
return (function (){if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === 0))
{return cljs.core.async.put_BANG_.call(null,dchan,true);
} else
{return null;
}
});})(cs,m,dchan,dctr))
;var c__6049__auto___11059 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6050__auto__ = (function (){var switch__6034__auto__ = (function (state_10973){var state_val_10974 = (state_10973[1]);if((state_val_10974 === 32))
{var inst_10841 = (state_10973[7]);var inst_10917 = (state_10973[8]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_10973,31,Object,null,30);var inst_10924 = cljs.core.async.put_BANG_.call(null,inst_10917,inst_10841,done);var state_10973__$1 = state_10973;var statearr_10975_11060 = state_10973__$1;(statearr_10975_11060[2] = inst_10924);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10973__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10974 === 1))
{var state_10973__$1 = state_10973;var statearr_10976_11061 = state_10973__$1;(statearr_10976_11061[2] = null);
(statearr_10976_11061[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10974 === 33))
{var inst_10930 = (state_10973[9]);var inst_10932 = cljs.core.chunked_seq_QMARK_.call(null,inst_10930);var state_10973__$1 = state_10973;if(inst_10932)
{var statearr_10977_11062 = state_10973__$1;(statearr_10977_11062[1] = 36);
} else
{var statearr_10978_11063 = state_10973__$1;(statearr_10978_11063[1] = 37);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10974 === 2))
{var state_10973__$1 = state_10973;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10973__$1,4,ch);
} else
{if((state_val_10974 === 34))
{var state_10973__$1 = state_10973;var statearr_10979_11064 = state_10973__$1;(statearr_10979_11064[2] = null);
(statearr_10979_11064[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10974 === 3))
{var inst_10971 = (state_10973[2]);var state_10973__$1 = state_10973;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10973__$1,inst_10971);
} else
{if((state_val_10974 === 35))
{var inst_10955 = (state_10973[2]);var state_10973__$1 = state_10973;var statearr_10980_11065 = state_10973__$1;(statearr_10980_11065[2] = inst_10955);
(statearr_10980_11065[1] = 29);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10974 === 4))
{var inst_10841 = (state_10973[7]);var inst_10841__$1 = (state_10973[2]);var inst_10842 = (inst_10841__$1 == null);var state_10973__$1 = (function (){var statearr_10981 = state_10973;(statearr_10981[7] = inst_10841__$1);
return statearr_10981;
})();if(cljs.core.truth_(inst_10842))
{var statearr_10982_11066 = state_10973__$1;(statearr_10982_11066[1] = 5);
} else
{var statearr_10983_11067 = state_10973__$1;(statearr_10983_11067[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10974 === 36))
{var inst_10930 = (state_10973[9]);var inst_10934 = cljs.core.chunk_first.call(null,inst_10930);var inst_10935 = cljs.core.chunk_rest.call(null,inst_10930);var inst_10936 = cljs.core.count.call(null,inst_10934);var inst_10909 = inst_10935;var inst_10910 = inst_10934;var inst_10911 = inst_10936;var inst_10912 = 0;var state_10973__$1 = (function (){var statearr_10984 = state_10973;(statearr_10984[10] = inst_10909);
(statearr_10984[11] = inst_10911);
(statearr_10984[12] = inst_10910);
(statearr_10984[13] = inst_10912);
return statearr_10984;
})();var statearr_10985_11068 = state_10973__$1;(statearr_10985_11068[2] = null);
(statearr_10985_11068[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10974 === 5))
{var inst_10848 = cljs.core.deref.call(null,cs);var inst_10849 = cljs.core.seq.call(null,inst_10848);var inst_10850 = inst_10849;var inst_10851 = null;var inst_10852 = 0;var inst_10853 = 0;var state_10973__$1 = (function (){var statearr_10986 = state_10973;(statearr_10986[14] = inst_10850);
(statearr_10986[15] = inst_10851);
(statearr_10986[16] = inst_10852);
(statearr_10986[17] = inst_10853);
return statearr_10986;
})();var statearr_10987_11069 = state_10973__$1;(statearr_10987_11069[2] = null);
(statearr_10987_11069[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10974 === 37))
{var inst_10930 = (state_10973[9]);var inst_10939 = cljs.core.first.call(null,inst_10930);var state_10973__$1 = (function (){var statearr_10988 = state_10973;(statearr_10988[18] = inst_10939);
return statearr_10988;
})();var statearr_10989_11070 = state_10973__$1;(statearr_10989_11070[2] = null);
(statearr_10989_11070[1] = 41);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10974 === 6))
{var inst_10901 = (state_10973[19]);var inst_10900 = cljs.core.deref.call(null,cs);var inst_10901__$1 = cljs.core.keys.call(null,inst_10900);var inst_10902 = cljs.core.count.call(null,inst_10901__$1);var inst_10903 = cljs.core.reset_BANG_.call(null,dctr,inst_10902);var inst_10908 = cljs.core.seq.call(null,inst_10901__$1);var inst_10909 = inst_10908;var inst_10910 = null;var inst_10911 = 0;var inst_10912 = 0;var state_10973__$1 = (function (){var statearr_10990 = state_10973;(statearr_10990[10] = inst_10909);
(statearr_10990[19] = inst_10901__$1);
(statearr_10990[20] = inst_10903);
(statearr_10990[11] = inst_10911);
(statearr_10990[12] = inst_10910);
(statearr_10990[13] = inst_10912);
return statearr_10990;
})();var statearr_10991_11071 = state_10973__$1;(statearr_10991_11071[2] = null);
(statearr_10991_11071[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10974 === 38))
{var inst_10952 = (state_10973[2]);var state_10973__$1 = state_10973;var statearr_10992_11072 = state_10973__$1;(statearr_10992_11072[2] = inst_10952);
(statearr_10992_11072[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10974 === 7))
{var inst_10969 = (state_10973[2]);var state_10973__$1 = state_10973;var statearr_10993_11073 = state_10973__$1;(statearr_10993_11073[2] = inst_10969);
(statearr_10993_11073[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10974 === 39))
{var inst_10930 = (state_10973[9]);var inst_10948 = (state_10973[2]);var inst_10949 = cljs.core.next.call(null,inst_10930);var inst_10909 = inst_10949;var inst_10910 = null;var inst_10911 = 0;var inst_10912 = 0;var state_10973__$1 = (function (){var statearr_10994 = state_10973;(statearr_10994[10] = inst_10909);
(statearr_10994[21] = inst_10948);
(statearr_10994[11] = inst_10911);
(statearr_10994[12] = inst_10910);
(statearr_10994[13] = inst_10912);
return statearr_10994;
})();var statearr_10995_11074 = state_10973__$1;(statearr_10995_11074[2] = null);
(statearr_10995_11074[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10974 === 8))
{var inst_10852 = (state_10973[16]);var inst_10853 = (state_10973[17]);var inst_10855 = (inst_10853 < inst_10852);var inst_10856 = inst_10855;var state_10973__$1 = state_10973;if(cljs.core.truth_(inst_10856))
{var statearr_10996_11075 = state_10973__$1;(statearr_10996_11075[1] = 10);
} else
{var statearr_10997_11076 = state_10973__$1;(statearr_10997_11076[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10974 === 40))
{var inst_10939 = (state_10973[18]);var inst_10940 = (state_10973[2]);var inst_10941 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_10942 = cljs.core.async.untap_STAR_.call(null,m,inst_10939);var state_10973__$1 = (function (){var statearr_10998 = state_10973;(statearr_10998[22] = inst_10940);
(statearr_10998[23] = inst_10941);
return statearr_10998;
})();var statearr_10999_11077 = state_10973__$1;(statearr_10999_11077[2] = inst_10942);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10973__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10974 === 9))
{var inst_10898 = (state_10973[2]);var state_10973__$1 = state_10973;var statearr_11000_11078 = state_10973__$1;(statearr_11000_11078[2] = inst_10898);
(statearr_11000_11078[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10974 === 41))
{var inst_10841 = (state_10973[7]);var inst_10939 = (state_10973[18]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_10973,40,Object,null,39);var inst_10946 = cljs.core.async.put_BANG_.call(null,inst_10939,inst_10841,done);var state_10973__$1 = state_10973;var statearr_11001_11079 = state_10973__$1;(statearr_11001_11079[2] = inst_10946);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10973__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10974 === 10))
{var inst_10851 = (state_10973[15]);var inst_10853 = (state_10973[17]);var inst_10859 = cljs.core._nth.call(null,inst_10851,inst_10853);var inst_10860 = cljs.core.nth.call(null,inst_10859,0,null);var inst_10861 = cljs.core.nth.call(null,inst_10859,1,null);var state_10973__$1 = (function (){var statearr_11002 = state_10973;(statearr_11002[24] = inst_10860);
return statearr_11002;
})();if(cljs.core.truth_(inst_10861))
{var statearr_11003_11080 = state_10973__$1;(statearr_11003_11080[1] = 13);
} else
{var statearr_11004_11081 = state_10973__$1;(statearr_11004_11081[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10974 === 42))
{var state_10973__$1 = state_10973;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10973__$1,45,dchan);
} else
{if((state_val_10974 === 11))
{var inst_10850 = (state_10973[14]);var inst_10870 = (state_10973[25]);var inst_10870__$1 = cljs.core.seq.call(null,inst_10850);var state_10973__$1 = (function (){var statearr_11005 = state_10973;(statearr_11005[25] = inst_10870__$1);
return statearr_11005;
})();if(inst_10870__$1)
{var statearr_11006_11082 = state_10973__$1;(statearr_11006_11082[1] = 16);
} else
{var statearr_11007_11083 = state_10973__$1;(statearr_11007_11083[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10974 === 43))
{var state_10973__$1 = state_10973;var statearr_11008_11084 = state_10973__$1;(statearr_11008_11084[2] = null);
(statearr_11008_11084[1] = 44);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10974 === 12))
{var inst_10896 = (state_10973[2]);var state_10973__$1 = state_10973;var statearr_11009_11085 = state_10973__$1;(statearr_11009_11085[2] = inst_10896);
(statearr_11009_11085[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10974 === 44))
{var inst_10966 = (state_10973[2]);var state_10973__$1 = (function (){var statearr_11010 = state_10973;(statearr_11010[26] = inst_10966);
return statearr_11010;
})();var statearr_11011_11086 = state_10973__$1;(statearr_11011_11086[2] = null);
(statearr_11011_11086[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10974 === 13))
{var inst_10860 = (state_10973[24]);var inst_10863 = cljs.core.async.close_BANG_.call(null,inst_10860);var state_10973__$1 = state_10973;var statearr_11012_11087 = state_10973__$1;(statearr_11012_11087[2] = inst_10863);
(statearr_11012_11087[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10974 === 45))
{var inst_10963 = (state_10973[2]);var state_10973__$1 = state_10973;var statearr_11016_11088 = state_10973__$1;(statearr_11016_11088[2] = inst_10963);
(statearr_11016_11088[1] = 44);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10974 === 14))
{var state_10973__$1 = state_10973;var statearr_11017_11089 = state_10973__$1;(statearr_11017_11089[2] = null);
(statearr_11017_11089[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10974 === 15))
{var inst_10850 = (state_10973[14]);var inst_10851 = (state_10973[15]);var inst_10852 = (state_10973[16]);var inst_10853 = (state_10973[17]);var inst_10866 = (state_10973[2]);var inst_10867 = (inst_10853 + 1);var tmp11013 = inst_10850;var tmp11014 = inst_10851;var tmp11015 = inst_10852;var inst_10850__$1 = tmp11013;var inst_10851__$1 = tmp11014;var inst_10852__$1 = tmp11015;var inst_10853__$1 = inst_10867;var state_10973__$1 = (function (){var statearr_11018 = state_10973;(statearr_11018[14] = inst_10850__$1);
(statearr_11018[27] = inst_10866);
(statearr_11018[15] = inst_10851__$1);
(statearr_11018[16] = inst_10852__$1);
(statearr_11018[17] = inst_10853__$1);
return statearr_11018;
})();var statearr_11019_11090 = state_10973__$1;(statearr_11019_11090[2] = null);
(statearr_11019_11090[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10974 === 16))
{var inst_10870 = (state_10973[25]);var inst_10872 = cljs.core.chunked_seq_QMARK_.call(null,inst_10870);var state_10973__$1 = state_10973;if(inst_10872)
{var statearr_11020_11091 = state_10973__$1;(statearr_11020_11091[1] = 19);
} else
{var statearr_11021_11092 = state_10973__$1;(statearr_11021_11092[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10974 === 17))
{var state_10973__$1 = state_10973;var statearr_11022_11093 = state_10973__$1;(statearr_11022_11093[2] = null);
(statearr_11022_11093[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10974 === 18))
{var inst_10894 = (state_10973[2]);var state_10973__$1 = state_10973;var statearr_11023_11094 = state_10973__$1;(statearr_11023_11094[2] = inst_10894);
(statearr_11023_11094[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10974 === 19))
{var inst_10870 = (state_10973[25]);var inst_10874 = cljs.core.chunk_first.call(null,inst_10870);var inst_10875 = cljs.core.chunk_rest.call(null,inst_10870);var inst_10876 = cljs.core.count.call(null,inst_10874);var inst_10850 = inst_10875;var inst_10851 = inst_10874;var inst_10852 = inst_10876;var inst_10853 = 0;var state_10973__$1 = (function (){var statearr_11024 = state_10973;(statearr_11024[14] = inst_10850);
(statearr_11024[15] = inst_10851);
(statearr_11024[16] = inst_10852);
(statearr_11024[17] = inst_10853);
return statearr_11024;
})();var statearr_11025_11095 = state_10973__$1;(statearr_11025_11095[2] = null);
(statearr_11025_11095[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10974 === 20))
{var inst_10870 = (state_10973[25]);var inst_10880 = cljs.core.first.call(null,inst_10870);var inst_10881 = cljs.core.nth.call(null,inst_10880,0,null);var inst_10882 = cljs.core.nth.call(null,inst_10880,1,null);var state_10973__$1 = (function (){var statearr_11026 = state_10973;(statearr_11026[28] = inst_10881);
return statearr_11026;
})();if(cljs.core.truth_(inst_10882))
{var statearr_11027_11096 = state_10973__$1;(statearr_11027_11096[1] = 22);
} else
{var statearr_11028_11097 = state_10973__$1;(statearr_11028_11097[1] = 23);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10974 === 21))
{var inst_10891 = (state_10973[2]);var state_10973__$1 = state_10973;var statearr_11029_11098 = state_10973__$1;(statearr_11029_11098[2] = inst_10891);
(statearr_11029_11098[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10974 === 22))
{var inst_10881 = (state_10973[28]);var inst_10884 = cljs.core.async.close_BANG_.call(null,inst_10881);var state_10973__$1 = state_10973;var statearr_11030_11099 = state_10973__$1;(statearr_11030_11099[2] = inst_10884);
(statearr_11030_11099[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10974 === 23))
{var state_10973__$1 = state_10973;var statearr_11031_11100 = state_10973__$1;(statearr_11031_11100[2] = null);
(statearr_11031_11100[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10974 === 24))
{var inst_10870 = (state_10973[25]);var inst_10887 = (state_10973[2]);var inst_10888 = cljs.core.next.call(null,inst_10870);var inst_10850 = inst_10888;var inst_10851 = null;var inst_10852 = 0;var inst_10853 = 0;var state_10973__$1 = (function (){var statearr_11032 = state_10973;(statearr_11032[14] = inst_10850);
(statearr_11032[29] = inst_10887);
(statearr_11032[15] = inst_10851);
(statearr_11032[16] = inst_10852);
(statearr_11032[17] = inst_10853);
return statearr_11032;
})();var statearr_11033_11101 = state_10973__$1;(statearr_11033_11101[2] = null);
(statearr_11033_11101[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10974 === 25))
{var inst_10911 = (state_10973[11]);var inst_10912 = (state_10973[13]);var inst_10914 = (inst_10912 < inst_10911);var inst_10915 = inst_10914;var state_10973__$1 = state_10973;if(cljs.core.truth_(inst_10915))
{var statearr_11034_11102 = state_10973__$1;(statearr_11034_11102[1] = 27);
} else
{var statearr_11035_11103 = state_10973__$1;(statearr_11035_11103[1] = 28);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10974 === 26))
{var inst_10901 = (state_10973[19]);var inst_10959 = (state_10973[2]);var inst_10960 = cljs.core.seq.call(null,inst_10901);var state_10973__$1 = (function (){var statearr_11036 = state_10973;(statearr_11036[30] = inst_10959);
return statearr_11036;
})();if(inst_10960)
{var statearr_11037_11104 = state_10973__$1;(statearr_11037_11104[1] = 42);
} else
{var statearr_11038_11105 = state_10973__$1;(statearr_11038_11105[1] = 43);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10974 === 27))
{var inst_10910 = (state_10973[12]);var inst_10912 = (state_10973[13]);var inst_10917 = cljs.core._nth.call(null,inst_10910,inst_10912);var state_10973__$1 = (function (){var statearr_11039 = state_10973;(statearr_11039[8] = inst_10917);
return statearr_11039;
})();var statearr_11040_11106 = state_10973__$1;(statearr_11040_11106[2] = null);
(statearr_11040_11106[1] = 32);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10974 === 28))
{var inst_10909 = (state_10973[10]);var inst_10930 = (state_10973[9]);var inst_10930__$1 = cljs.core.seq.call(null,inst_10909);var state_10973__$1 = (function (){var statearr_11044 = state_10973;(statearr_11044[9] = inst_10930__$1);
return statearr_11044;
})();if(inst_10930__$1)
{var statearr_11045_11107 = state_10973__$1;(statearr_11045_11107[1] = 33);
} else
{var statearr_11046_11108 = state_10973__$1;(statearr_11046_11108[1] = 34);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10974 === 29))
{var inst_10957 = (state_10973[2]);var state_10973__$1 = state_10973;var statearr_11047_11109 = state_10973__$1;(statearr_11047_11109[2] = inst_10957);
(statearr_11047_11109[1] = 26);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10974 === 30))
{var inst_10909 = (state_10973[10]);var inst_10911 = (state_10973[11]);var inst_10910 = (state_10973[12]);var inst_10912 = (state_10973[13]);var inst_10926 = (state_10973[2]);var inst_10927 = (inst_10912 + 1);var tmp11041 = inst_10909;var tmp11042 = inst_10911;var tmp11043 = inst_10910;var inst_10909__$1 = tmp11041;var inst_10910__$1 = tmp11043;var inst_10911__$1 = tmp11042;var inst_10912__$1 = inst_10927;var state_10973__$1 = (function (){var statearr_11048 = state_10973;(statearr_11048[10] = inst_10909__$1);
(statearr_11048[11] = inst_10911__$1);
(statearr_11048[12] = inst_10910__$1);
(statearr_11048[13] = inst_10912__$1);
(statearr_11048[31] = inst_10926);
return statearr_11048;
})();var statearr_11049_11110 = state_10973__$1;(statearr_11049_11110[2] = null);
(statearr_11049_11110[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10974 === 31))
{var inst_10917 = (state_10973[8]);var inst_10918 = (state_10973[2]);var inst_10919 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_10920 = cljs.core.async.untap_STAR_.call(null,m,inst_10917);var state_10973__$1 = (function (){var statearr_11050 = state_10973;(statearr_11050[32] = inst_10919);
(statearr_11050[33] = inst_10918);
return statearr_11050;
})();var statearr_11051_11111 = state_10973__$1;(statearr_11051_11111[2] = inst_10920);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10973__$1);
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
});return ((function (switch__6034__auto__){
return (function() {
var state_machine__6035__auto__ = null;
var state_machine__6035__auto____0 = (function (){var statearr_11055 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_11055[0] = state_machine__6035__auto__);
(statearr_11055[1] = 1);
return statearr_11055;
});
var state_machine__6035__auto____1 = (function (state_10973){while(true){
var ret_value__6036__auto__ = (function (){try{while(true){
var result__6037__auto__ = switch__6034__auto__.call(null,state_10973);if(cljs.core.keyword_identical_QMARK_.call(null,result__6037__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6037__auto__;
}
break;
}
}catch (e11056){if((e11056 instanceof Object))
{var ex__6038__auto__ = e11056;var statearr_11057_11112 = state_10973;(statearr_11057_11112[5] = ex__6038__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10973);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e11056;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6036__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__11113 = state_10973;
state_10973 = G__11113;
continue;
}
} else
{return ret_value__6036__auto__;
}
break;
}
});
state_machine__6035__auto__ = function(state_10973){
switch(arguments.length){
case 0:
return state_machine__6035__auto____0.call(this);
case 1:
return state_machine__6035__auto____1.call(this,state_10973);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6035__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6035__auto____0;
state_machine__6035__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6035__auto____1;
return state_machine__6035__auto__;
})()
;})(switch__6034__auto__))
})();var state__6051__auto__ = (function (){var statearr_11058 = f__6050__auto__.call(null);(statearr_11058[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6049__auto___11059);
return statearr_11058;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6051__auto__);
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
cljs.core.async.Mix = (function (){var obj11115 = {};return obj11115;
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
;var m = (function (){if(typeof cljs.core.async.t11225 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t11225 = (function (pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,meta11226){
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
this.meta11226 = meta11226;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t11225.cljs$lang$type = true;
cljs.core.async.t11225.cljs$lang$ctorStr = "cljs.core.async/t11225";
cljs.core.async.t11225.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__3970__auto__,writer__3971__auto__,opt__3972__auto__){return cljs.core._write.call(null,writer__3971__auto__,"cljs.core.async/t11225");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t11225.prototype.cljs$core$async$Mix$ = true;
cljs.core.async.t11225.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t11225.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t11225.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t11225.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t11225.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.solo_modes.call(null,mode)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",-1162732933,null),new cljs.core.Symbol(null,"mode","mode",-1637174436,null))))].join('')));
}
cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t11225.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t11225.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t11225.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_11227){var self__ = this;
var _11227__$1 = this;return self__.meta11226;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t11225.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_11227,meta11226__$1){var self__ = this;
var _11227__$1 = this;return (new cljs.core.async.t11225(self__.pick,self__.out,self__.attrs,self__.cs,self__.calc_state,self__.solo_modes,self__.mix,self__.changed,self__.change,self__.solo_mode,meta11226__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.__GT_t11225 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t11225(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta11226){return (new cljs.core.async.t11225(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta11226));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
}
return (new cljs.core.async.t11225(pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,null));
})();var c__6049__auto___11334 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6050__auto__ = (function (){var switch__6034__auto__ = (function (state_11292){var state_val_11293 = (state_11292[1]);if((state_val_11293 === 1))
{var inst_11231 = (state_11292[7]);var inst_11231__$1 = calc_state.call(null);var inst_11232 = cljs.core.seq_QMARK_.call(null,inst_11231__$1);var state_11292__$1 = (function (){var statearr_11294 = state_11292;(statearr_11294[7] = inst_11231__$1);
return statearr_11294;
})();if(inst_11232)
{var statearr_11295_11335 = state_11292__$1;(statearr_11295_11335[1] = 2);
} else
{var statearr_11296_11336 = state_11292__$1;(statearr_11296_11336[1] = 3);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11293 === 2))
{var inst_11231 = (state_11292[7]);var inst_11234 = cljs.core.apply.call(null,cljs.core.hash_map,inst_11231);var state_11292__$1 = state_11292;var statearr_11297_11337 = state_11292__$1;(statearr_11297_11337[2] = inst_11234);
(statearr_11297_11337[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11293 === 3))
{var inst_11231 = (state_11292[7]);var state_11292__$1 = state_11292;var statearr_11298_11338 = state_11292__$1;(statearr_11298_11338[2] = inst_11231);
(statearr_11298_11338[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11293 === 4))
{var inst_11231 = (state_11292[7]);var inst_11237 = (state_11292[2]);var inst_11238 = cljs.core.get.call(null,inst_11237,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_11239 = cljs.core.get.call(null,inst_11237,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_11240 = cljs.core.get.call(null,inst_11237,new cljs.core.Keyword(null,"solos","solos",1123523302));var inst_11241 = inst_11231;var state_11292__$1 = (function (){var statearr_11299 = state_11292;(statearr_11299[8] = inst_11238);
(statearr_11299[9] = inst_11239);
(statearr_11299[10] = inst_11241);
(statearr_11299[11] = inst_11240);
return statearr_11299;
})();var statearr_11300_11339 = state_11292__$1;(statearr_11300_11339[2] = null);
(statearr_11300_11339[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11293 === 5))
{var inst_11241 = (state_11292[10]);var inst_11244 = cljs.core.seq_QMARK_.call(null,inst_11241);var state_11292__$1 = state_11292;if(inst_11244)
{var statearr_11301_11340 = state_11292__$1;(statearr_11301_11340[1] = 7);
} else
{var statearr_11302_11341 = state_11292__$1;(statearr_11302_11341[1] = 8);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11293 === 6))
{var inst_11290 = (state_11292[2]);var state_11292__$1 = state_11292;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11292__$1,inst_11290);
} else
{if((state_val_11293 === 7))
{var inst_11241 = (state_11292[10]);var inst_11246 = cljs.core.apply.call(null,cljs.core.hash_map,inst_11241);var state_11292__$1 = state_11292;var statearr_11303_11342 = state_11292__$1;(statearr_11303_11342[2] = inst_11246);
(statearr_11303_11342[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11293 === 8))
{var inst_11241 = (state_11292[10]);var state_11292__$1 = state_11292;var statearr_11304_11343 = state_11292__$1;(statearr_11304_11343[2] = inst_11241);
(statearr_11304_11343[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11293 === 9))
{var inst_11249 = (state_11292[12]);var inst_11249__$1 = (state_11292[2]);var inst_11250 = cljs.core.get.call(null,inst_11249__$1,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_11251 = cljs.core.get.call(null,inst_11249__$1,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_11252 = cljs.core.get.call(null,inst_11249__$1,new cljs.core.Keyword(null,"solos","solos",1123523302));var state_11292__$1 = (function (){var statearr_11305 = state_11292;(statearr_11305[13] = inst_11252);
(statearr_11305[14] = inst_11251);
(statearr_11305[12] = inst_11249__$1);
return statearr_11305;
})();return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_11292__$1,10,inst_11250);
} else
{if((state_val_11293 === 10))
{var inst_11257 = (state_11292[15]);var inst_11256 = (state_11292[16]);var inst_11255 = (state_11292[2]);var inst_11256__$1 = cljs.core.nth.call(null,inst_11255,0,null);var inst_11257__$1 = cljs.core.nth.call(null,inst_11255,1,null);var inst_11258 = (inst_11256__$1 == null);var inst_11259 = cljs.core._EQ_.call(null,inst_11257__$1,change);var inst_11260 = (inst_11258) || (inst_11259);var state_11292__$1 = (function (){var statearr_11306 = state_11292;(statearr_11306[15] = inst_11257__$1);
(statearr_11306[16] = inst_11256__$1);
return statearr_11306;
})();if(cljs.core.truth_(inst_11260))
{var statearr_11307_11344 = state_11292__$1;(statearr_11307_11344[1] = 11);
} else
{var statearr_11308_11345 = state_11292__$1;(statearr_11308_11345[1] = 12);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11293 === 11))
{var inst_11256 = (state_11292[16]);var inst_11262 = (inst_11256 == null);var state_11292__$1 = state_11292;if(cljs.core.truth_(inst_11262))
{var statearr_11309_11346 = state_11292__$1;(statearr_11309_11346[1] = 14);
} else
{var statearr_11310_11347 = state_11292__$1;(statearr_11310_11347[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11293 === 12))
{var inst_11252 = (state_11292[13]);var inst_11257 = (state_11292[15]);var inst_11271 = (state_11292[17]);var inst_11271__$1 = inst_11252.call(null,inst_11257);var state_11292__$1 = (function (){var statearr_11311 = state_11292;(statearr_11311[17] = inst_11271__$1);
return statearr_11311;
})();if(cljs.core.truth_(inst_11271__$1))
{var statearr_11312_11348 = state_11292__$1;(statearr_11312_11348[1] = 17);
} else
{var statearr_11313_11349 = state_11292__$1;(statearr_11313_11349[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11293 === 13))
{var inst_11288 = (state_11292[2]);var state_11292__$1 = state_11292;var statearr_11314_11350 = state_11292__$1;(statearr_11314_11350[2] = inst_11288);
(statearr_11314_11350[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11293 === 14))
{var inst_11257 = (state_11292[15]);var inst_11264 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_11257);var state_11292__$1 = state_11292;var statearr_11315_11351 = state_11292__$1;(statearr_11315_11351[2] = inst_11264);
(statearr_11315_11351[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11293 === 15))
{var state_11292__$1 = state_11292;var statearr_11316_11352 = state_11292__$1;(statearr_11316_11352[2] = null);
(statearr_11316_11352[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11293 === 16))
{var inst_11267 = (state_11292[2]);var inst_11268 = calc_state.call(null);var inst_11241 = inst_11268;var state_11292__$1 = (function (){var statearr_11317 = state_11292;(statearr_11317[18] = inst_11267);
(statearr_11317[10] = inst_11241);
return statearr_11317;
})();var statearr_11318_11353 = state_11292__$1;(statearr_11318_11353[2] = null);
(statearr_11318_11353[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11293 === 17))
{var inst_11271 = (state_11292[17]);var state_11292__$1 = state_11292;var statearr_11319_11354 = state_11292__$1;(statearr_11319_11354[2] = inst_11271);
(statearr_11319_11354[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11293 === 18))
{var inst_11252 = (state_11292[13]);var inst_11251 = (state_11292[14]);var inst_11257 = (state_11292[15]);var inst_11274 = cljs.core.empty_QMARK_.call(null,inst_11252);var inst_11275 = inst_11251.call(null,inst_11257);var inst_11276 = cljs.core.not.call(null,inst_11275);var inst_11277 = (inst_11274) && (inst_11276);var state_11292__$1 = state_11292;var statearr_11320_11355 = state_11292__$1;(statearr_11320_11355[2] = inst_11277);
(statearr_11320_11355[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11293 === 19))
{var inst_11279 = (state_11292[2]);var state_11292__$1 = state_11292;if(cljs.core.truth_(inst_11279))
{var statearr_11321_11356 = state_11292__$1;(statearr_11321_11356[1] = 20);
} else
{var statearr_11322_11357 = state_11292__$1;(statearr_11322_11357[1] = 21);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11293 === 20))
{var inst_11256 = (state_11292[16]);var state_11292__$1 = state_11292;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11292__$1,23,out,inst_11256);
} else
{if((state_val_11293 === 21))
{var state_11292__$1 = state_11292;var statearr_11323_11358 = state_11292__$1;(statearr_11323_11358[2] = null);
(statearr_11323_11358[1] = 22);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11293 === 22))
{var inst_11249 = (state_11292[12]);var inst_11285 = (state_11292[2]);var inst_11241 = inst_11249;var state_11292__$1 = (function (){var statearr_11324 = state_11292;(statearr_11324[10] = inst_11241);
(statearr_11324[19] = inst_11285);
return statearr_11324;
})();var statearr_11325_11359 = state_11292__$1;(statearr_11325_11359[2] = null);
(statearr_11325_11359[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11293 === 23))
{var inst_11282 = (state_11292[2]);var state_11292__$1 = state_11292;var statearr_11326_11360 = state_11292__$1;(statearr_11326_11360[2] = inst_11282);
(statearr_11326_11360[1] = 22);
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
});return ((function (switch__6034__auto__){
return (function() {
var state_machine__6035__auto__ = null;
var state_machine__6035__auto____0 = (function (){var statearr_11330 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_11330[0] = state_machine__6035__auto__);
(statearr_11330[1] = 1);
return statearr_11330;
});
var state_machine__6035__auto____1 = (function (state_11292){while(true){
var ret_value__6036__auto__ = (function (){try{while(true){
var result__6037__auto__ = switch__6034__auto__.call(null,state_11292);if(cljs.core.keyword_identical_QMARK_.call(null,result__6037__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6037__auto__;
}
break;
}
}catch (e11331){if((e11331 instanceof Object))
{var ex__6038__auto__ = e11331;var statearr_11332_11361 = state_11292;(statearr_11332_11361[5] = ex__6038__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11292);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e11331;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6036__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__11362 = state_11292;
state_11292 = G__11362;
continue;
}
} else
{return ret_value__6036__auto__;
}
break;
}
});
state_machine__6035__auto__ = function(state_11292){
switch(arguments.length){
case 0:
return state_machine__6035__auto____0.call(this);
case 1:
return state_machine__6035__auto____1.call(this,state_11292);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6035__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6035__auto____0;
state_machine__6035__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6035__auto____1;
return state_machine__6035__auto__;
})()
;})(switch__6034__auto__))
})();var state__6051__auto__ = (function (){var statearr_11333 = f__6050__auto__.call(null);(statearr_11333[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6049__auto___11334);
return statearr_11333;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6051__auto__);
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
cljs.core.async.Pub = (function (){var obj11364 = {};return obj11364;
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
return (function (p1__11365_SHARP_){if(cljs.core.truth_(p1__11365_SHARP_.call(null,topic)))
{return p1__11365_SHARP_;
} else
{return cljs.core.assoc.call(null,p1__11365_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__3408__auto__,mults))
),topic);
}
});})(mults))
;var p = (function (){if(typeof cljs.core.async.t11490 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t11490 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta11491){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta11491 = meta11491;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t11490.cljs$lang$type = true;
cljs.core.async.t11490.cljs$lang$ctorStr = "cljs.core.async/t11490";
cljs.core.async.t11490.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__3970__auto__,writer__3971__auto__,opt__3972__auto__){return cljs.core._write.call(null,writer__3971__auto__,"cljs.core.async/t11490");
});})(mults,ensure_mult))
;
cljs.core.async.t11490.prototype.cljs$core$async$Pub$ = true;
cljs.core.async.t11490.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2,close_QMARK_){var self__ = this;
var p__$1 = this;var m = self__.ensure_mult.call(null,topic);return cljs.core.async.tap.call(null,m,ch__$2,close_QMARK_);
});})(mults,ensure_mult))
;
cljs.core.async.t11490.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2){var self__ = this;
var p__$1 = this;var temp__4092__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);if(cljs.core.truth_(temp__4092__auto__))
{var m = temp__4092__auto__;return cljs.core.async.untap.call(null,m,ch__$2);
} else
{return null;
}
});})(mults,ensure_mult))
;
cljs.core.async.t11490.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;
cljs.core.async.t11490.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){var self__ = this;
var ___$1 = this;return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;
cljs.core.async.t11490.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t11490.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(mults,ensure_mult))
;
cljs.core.async.t11490.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_11492){var self__ = this;
var _11492__$1 = this;return self__.meta11491;
});})(mults,ensure_mult))
;
cljs.core.async.t11490.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_11492,meta11491__$1){var self__ = this;
var _11492__$1 = this;return (new cljs.core.async.t11490(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta11491__$1));
});})(mults,ensure_mult))
;
cljs.core.async.__GT_t11490 = ((function (mults,ensure_mult){
return (function __GT_t11490(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta11491){return (new cljs.core.async.t11490(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta11491));
});})(mults,ensure_mult))
;
}
return (new cljs.core.async.t11490(ensure_mult,mults,buf_fn,topic_fn,ch,pub,null));
})();var c__6049__auto___11614 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6050__auto__ = (function (){var switch__6034__auto__ = (function (state_11566){var state_val_11567 = (state_11566[1]);if((state_val_11567 === 1))
{var state_11566__$1 = state_11566;var statearr_11568_11615 = state_11566__$1;(statearr_11568_11615[2] = null);
(statearr_11568_11615[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11567 === 2))
{var state_11566__$1 = state_11566;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11566__$1,4,ch);
} else
{if((state_val_11567 === 3))
{var inst_11564 = (state_11566[2]);var state_11566__$1 = state_11566;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11566__$1,inst_11564);
} else
{if((state_val_11567 === 4))
{var inst_11495 = (state_11566[7]);var inst_11495__$1 = (state_11566[2]);var inst_11496 = (inst_11495__$1 == null);var state_11566__$1 = (function (){var statearr_11569 = state_11566;(statearr_11569[7] = inst_11495__$1);
return statearr_11569;
})();if(cljs.core.truth_(inst_11496))
{var statearr_11570_11616 = state_11566__$1;(statearr_11570_11616[1] = 5);
} else
{var statearr_11571_11617 = state_11566__$1;(statearr_11571_11617[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11567 === 5))
{var inst_11502 = cljs.core.deref.call(null,mults);var inst_11503 = cljs.core.vals.call(null,inst_11502);var inst_11504 = cljs.core.seq.call(null,inst_11503);var inst_11505 = inst_11504;var inst_11506 = null;var inst_11507 = 0;var inst_11508 = 0;var state_11566__$1 = (function (){var statearr_11572 = state_11566;(statearr_11572[8] = inst_11505);
(statearr_11572[9] = inst_11507);
(statearr_11572[10] = inst_11506);
(statearr_11572[11] = inst_11508);
return statearr_11572;
})();var statearr_11573_11618 = state_11566__$1;(statearr_11573_11618[2] = null);
(statearr_11573_11618[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11567 === 6))
{var inst_11495 = (state_11566[7]);var inst_11543 = (state_11566[12]);var inst_11545 = (state_11566[13]);var inst_11543__$1 = topic_fn.call(null,inst_11495);var inst_11544 = cljs.core.deref.call(null,mults);var inst_11545__$1 = cljs.core.get.call(null,inst_11544,inst_11543__$1);var state_11566__$1 = (function (){var statearr_11574 = state_11566;(statearr_11574[12] = inst_11543__$1);
(statearr_11574[13] = inst_11545__$1);
return statearr_11574;
})();if(cljs.core.truth_(inst_11545__$1))
{var statearr_11575_11619 = state_11566__$1;(statearr_11575_11619[1] = 19);
} else
{var statearr_11576_11620 = state_11566__$1;(statearr_11576_11620[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11567 === 7))
{var inst_11562 = (state_11566[2]);var state_11566__$1 = state_11566;var statearr_11577_11621 = state_11566__$1;(statearr_11577_11621[2] = inst_11562);
(statearr_11577_11621[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11567 === 8))
{var inst_11507 = (state_11566[9]);var inst_11508 = (state_11566[11]);var inst_11510 = (inst_11508 < inst_11507);var inst_11511 = inst_11510;var state_11566__$1 = state_11566;if(cljs.core.truth_(inst_11511))
{var statearr_11581_11622 = state_11566__$1;(statearr_11581_11622[1] = 10);
} else
{var statearr_11582_11623 = state_11566__$1;(statearr_11582_11623[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11567 === 9))
{var inst_11541 = (state_11566[2]);var state_11566__$1 = state_11566;var statearr_11583_11624 = state_11566__$1;(statearr_11583_11624[2] = inst_11541);
(statearr_11583_11624[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11567 === 10))
{var inst_11505 = (state_11566[8]);var inst_11507 = (state_11566[9]);var inst_11506 = (state_11566[10]);var inst_11508 = (state_11566[11]);var inst_11513 = cljs.core._nth.call(null,inst_11506,inst_11508);var inst_11514 = cljs.core.async.muxch_STAR_.call(null,inst_11513);var inst_11515 = cljs.core.async.close_BANG_.call(null,inst_11514);var inst_11516 = (inst_11508 + 1);var tmp11578 = inst_11505;var tmp11579 = inst_11507;var tmp11580 = inst_11506;var inst_11505__$1 = tmp11578;var inst_11506__$1 = tmp11580;var inst_11507__$1 = tmp11579;var inst_11508__$1 = inst_11516;var state_11566__$1 = (function (){var statearr_11584 = state_11566;(statearr_11584[8] = inst_11505__$1);
(statearr_11584[9] = inst_11507__$1);
(statearr_11584[10] = inst_11506__$1);
(statearr_11584[11] = inst_11508__$1);
(statearr_11584[14] = inst_11515);
return statearr_11584;
})();var statearr_11585_11625 = state_11566__$1;(statearr_11585_11625[2] = null);
(statearr_11585_11625[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11567 === 11))
{var inst_11505 = (state_11566[8]);var inst_11519 = (state_11566[15]);var inst_11519__$1 = cljs.core.seq.call(null,inst_11505);var state_11566__$1 = (function (){var statearr_11586 = state_11566;(statearr_11586[15] = inst_11519__$1);
return statearr_11586;
})();if(inst_11519__$1)
{var statearr_11587_11626 = state_11566__$1;(statearr_11587_11626[1] = 13);
} else
{var statearr_11588_11627 = state_11566__$1;(statearr_11588_11627[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11567 === 12))
{var inst_11539 = (state_11566[2]);var state_11566__$1 = state_11566;var statearr_11589_11628 = state_11566__$1;(statearr_11589_11628[2] = inst_11539);
(statearr_11589_11628[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11567 === 13))
{var inst_11519 = (state_11566[15]);var inst_11521 = cljs.core.chunked_seq_QMARK_.call(null,inst_11519);var state_11566__$1 = state_11566;if(inst_11521)
{var statearr_11590_11629 = state_11566__$1;(statearr_11590_11629[1] = 16);
} else
{var statearr_11591_11630 = state_11566__$1;(statearr_11591_11630[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11567 === 14))
{var state_11566__$1 = state_11566;var statearr_11592_11631 = state_11566__$1;(statearr_11592_11631[2] = null);
(statearr_11592_11631[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11567 === 15))
{var inst_11537 = (state_11566[2]);var state_11566__$1 = state_11566;var statearr_11593_11632 = state_11566__$1;(statearr_11593_11632[2] = inst_11537);
(statearr_11593_11632[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11567 === 16))
{var inst_11519 = (state_11566[15]);var inst_11523 = cljs.core.chunk_first.call(null,inst_11519);var inst_11524 = cljs.core.chunk_rest.call(null,inst_11519);var inst_11525 = cljs.core.count.call(null,inst_11523);var inst_11505 = inst_11524;var inst_11506 = inst_11523;var inst_11507 = inst_11525;var inst_11508 = 0;var state_11566__$1 = (function (){var statearr_11594 = state_11566;(statearr_11594[8] = inst_11505);
(statearr_11594[9] = inst_11507);
(statearr_11594[10] = inst_11506);
(statearr_11594[11] = inst_11508);
return statearr_11594;
})();var statearr_11595_11633 = state_11566__$1;(statearr_11595_11633[2] = null);
(statearr_11595_11633[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11567 === 17))
{var inst_11519 = (state_11566[15]);var inst_11528 = cljs.core.first.call(null,inst_11519);var inst_11529 = cljs.core.async.muxch_STAR_.call(null,inst_11528);var inst_11530 = cljs.core.async.close_BANG_.call(null,inst_11529);var inst_11531 = cljs.core.next.call(null,inst_11519);var inst_11505 = inst_11531;var inst_11506 = null;var inst_11507 = 0;var inst_11508 = 0;var state_11566__$1 = (function (){var statearr_11596 = state_11566;(statearr_11596[8] = inst_11505);
(statearr_11596[9] = inst_11507);
(statearr_11596[10] = inst_11506);
(statearr_11596[11] = inst_11508);
(statearr_11596[16] = inst_11530);
return statearr_11596;
})();var statearr_11597_11634 = state_11566__$1;(statearr_11597_11634[2] = null);
(statearr_11597_11634[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11567 === 18))
{var inst_11534 = (state_11566[2]);var state_11566__$1 = state_11566;var statearr_11598_11635 = state_11566__$1;(statearr_11598_11635[2] = inst_11534);
(statearr_11598_11635[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11567 === 19))
{var state_11566__$1 = state_11566;var statearr_11599_11636 = state_11566__$1;(statearr_11599_11636[2] = null);
(statearr_11599_11636[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11567 === 20))
{var state_11566__$1 = state_11566;var statearr_11600_11637 = state_11566__$1;(statearr_11600_11637[2] = null);
(statearr_11600_11637[1] = 21);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11567 === 21))
{var inst_11559 = (state_11566[2]);var state_11566__$1 = (function (){var statearr_11601 = state_11566;(statearr_11601[17] = inst_11559);
return statearr_11601;
})();var statearr_11602_11638 = state_11566__$1;(statearr_11602_11638[2] = null);
(statearr_11602_11638[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11567 === 22))
{var inst_11556 = (state_11566[2]);var state_11566__$1 = state_11566;var statearr_11603_11639 = state_11566__$1;(statearr_11603_11639[2] = inst_11556);
(statearr_11603_11639[1] = 21);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11567 === 23))
{var inst_11543 = (state_11566[12]);var inst_11547 = (state_11566[2]);var inst_11548 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_11543);var state_11566__$1 = (function (){var statearr_11604 = state_11566;(statearr_11604[18] = inst_11547);
return statearr_11604;
})();var statearr_11605_11640 = state_11566__$1;(statearr_11605_11640[2] = inst_11548);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11566__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11567 === 24))
{var inst_11495 = (state_11566[7]);var inst_11545 = (state_11566[13]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_11566,23,Object,null,22);var inst_11552 = cljs.core.async.muxch_STAR_.call(null,inst_11545);var state_11566__$1 = state_11566;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11566__$1,25,inst_11552,inst_11495);
} else
{if((state_val_11567 === 25))
{var inst_11554 = (state_11566[2]);var state_11566__$1 = state_11566;var statearr_11606_11641 = state_11566__$1;(statearr_11606_11641[2] = inst_11554);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11566__$1);
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
});return ((function (switch__6034__auto__){
return (function() {
var state_machine__6035__auto__ = null;
var state_machine__6035__auto____0 = (function (){var statearr_11610 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_11610[0] = state_machine__6035__auto__);
(statearr_11610[1] = 1);
return statearr_11610;
});
var state_machine__6035__auto____1 = (function (state_11566){while(true){
var ret_value__6036__auto__ = (function (){try{while(true){
var result__6037__auto__ = switch__6034__auto__.call(null,state_11566);if(cljs.core.keyword_identical_QMARK_.call(null,result__6037__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6037__auto__;
}
break;
}
}catch (e11611){if((e11611 instanceof Object))
{var ex__6038__auto__ = e11611;var statearr_11612_11642 = state_11566;(statearr_11612_11642[5] = ex__6038__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11566);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e11611;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6036__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__11643 = state_11566;
state_11566 = G__11643;
continue;
}
} else
{return ret_value__6036__auto__;
}
break;
}
});
state_machine__6035__auto__ = function(state_11566){
switch(arguments.length){
case 0:
return state_machine__6035__auto____0.call(this);
case 1:
return state_machine__6035__auto____1.call(this,state_11566);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6035__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6035__auto____0;
state_machine__6035__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6035__auto____1;
return state_machine__6035__auto__;
})()
;})(switch__6034__auto__))
})();var state__6051__auto__ = (function (){var statearr_11613 = f__6050__auto__.call(null);(statearr_11613[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6049__auto___11614);
return statearr_11613;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6051__auto__);
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
,cljs.core.range.call(null,cnt));var c__6049__auto___11780 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6050__auto__ = (function (){var switch__6034__auto__ = (function (state_11750){var state_val_11751 = (state_11750[1]);if((state_val_11751 === 1))
{var state_11750__$1 = state_11750;var statearr_11752_11781 = state_11750__$1;(statearr_11752_11781[2] = null);
(statearr_11752_11781[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11751 === 2))
{var inst_11713 = cljs.core.reset_BANG_.call(null,dctr,cnt);var inst_11714 = 0;var state_11750__$1 = (function (){var statearr_11753 = state_11750;(statearr_11753[7] = inst_11714);
(statearr_11753[8] = inst_11713);
return statearr_11753;
})();var statearr_11754_11782 = state_11750__$1;(statearr_11754_11782[2] = null);
(statearr_11754_11782[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11751 === 3))
{var inst_11748 = (state_11750[2]);var state_11750__$1 = state_11750;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11750__$1,inst_11748);
} else
{if((state_val_11751 === 4))
{var inst_11714 = (state_11750[7]);var inst_11716 = (inst_11714 < cnt);var state_11750__$1 = state_11750;if(cljs.core.truth_(inst_11716))
{var statearr_11755_11783 = state_11750__$1;(statearr_11755_11783[1] = 6);
} else
{var statearr_11756_11784 = state_11750__$1;(statearr_11756_11784[1] = 7);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11751 === 5))
{var inst_11734 = (state_11750[2]);var state_11750__$1 = (function (){var statearr_11757 = state_11750;(statearr_11757[9] = inst_11734);
return statearr_11757;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11750__$1,12,dchan);
} else
{if((state_val_11751 === 6))
{var state_11750__$1 = state_11750;var statearr_11758_11785 = state_11750__$1;(statearr_11758_11785[2] = null);
(statearr_11758_11785[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11751 === 7))
{var state_11750__$1 = state_11750;var statearr_11759_11786 = state_11750__$1;(statearr_11759_11786[2] = null);
(statearr_11759_11786[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11751 === 8))
{var inst_11732 = (state_11750[2]);var state_11750__$1 = state_11750;var statearr_11760_11787 = state_11750__$1;(statearr_11760_11787[2] = inst_11732);
(statearr_11760_11787[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11751 === 9))
{var inst_11714 = (state_11750[7]);var inst_11727 = (state_11750[2]);var inst_11728 = (inst_11714 + 1);var inst_11714__$1 = inst_11728;var state_11750__$1 = (function (){var statearr_11761 = state_11750;(statearr_11761[7] = inst_11714__$1);
(statearr_11761[10] = inst_11727);
return statearr_11761;
})();var statearr_11762_11788 = state_11750__$1;(statearr_11762_11788[2] = null);
(statearr_11762_11788[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11751 === 10))
{var inst_11718 = (state_11750[2]);var inst_11719 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var state_11750__$1 = (function (){var statearr_11763 = state_11750;(statearr_11763[11] = inst_11718);
return statearr_11763;
})();var statearr_11764_11789 = state_11750__$1;(statearr_11764_11789[2] = inst_11719);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11750__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11751 === 11))
{var inst_11714 = (state_11750[7]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_11750,10,Object,null,9);var inst_11723 = chs__$1.call(null,inst_11714);var inst_11724 = done.call(null,inst_11714);var inst_11725 = cljs.core.async.take_BANG_.call(null,inst_11723,inst_11724);var state_11750__$1 = state_11750;var statearr_11765_11790 = state_11750__$1;(statearr_11765_11790[2] = inst_11725);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11750__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11751 === 12))
{var inst_11736 = (state_11750[12]);var inst_11736__$1 = (state_11750[2]);var inst_11737 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_11736__$1);var state_11750__$1 = (function (){var statearr_11766 = state_11750;(statearr_11766[12] = inst_11736__$1);
return statearr_11766;
})();if(cljs.core.truth_(inst_11737))
{var statearr_11767_11791 = state_11750__$1;(statearr_11767_11791[1] = 13);
} else
{var statearr_11768_11792 = state_11750__$1;(statearr_11768_11792[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11751 === 13))
{var inst_11739 = cljs.core.async.close_BANG_.call(null,out);var state_11750__$1 = state_11750;var statearr_11769_11793 = state_11750__$1;(statearr_11769_11793[2] = inst_11739);
(statearr_11769_11793[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11751 === 14))
{var inst_11736 = (state_11750[12]);var inst_11741 = cljs.core.apply.call(null,f,inst_11736);var state_11750__$1 = state_11750;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11750__$1,16,out,inst_11741);
} else
{if((state_val_11751 === 15))
{var inst_11746 = (state_11750[2]);var state_11750__$1 = state_11750;var statearr_11770_11794 = state_11750__$1;(statearr_11770_11794[2] = inst_11746);
(statearr_11770_11794[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11751 === 16))
{var inst_11743 = (state_11750[2]);var state_11750__$1 = (function (){var statearr_11771 = state_11750;(statearr_11771[13] = inst_11743);
return statearr_11771;
})();var statearr_11772_11795 = state_11750__$1;(statearr_11772_11795[2] = null);
(statearr_11772_11795[1] = 2);
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
});return ((function (switch__6034__auto__){
return (function() {
var state_machine__6035__auto__ = null;
var state_machine__6035__auto____0 = (function (){var statearr_11776 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_11776[0] = state_machine__6035__auto__);
(statearr_11776[1] = 1);
return statearr_11776;
});
var state_machine__6035__auto____1 = (function (state_11750){while(true){
var ret_value__6036__auto__ = (function (){try{while(true){
var result__6037__auto__ = switch__6034__auto__.call(null,state_11750);if(cljs.core.keyword_identical_QMARK_.call(null,result__6037__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6037__auto__;
}
break;
}
}catch (e11777){if((e11777 instanceof Object))
{var ex__6038__auto__ = e11777;var statearr_11778_11796 = state_11750;(statearr_11778_11796[5] = ex__6038__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11750);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e11777;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6036__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__11797 = state_11750;
state_11750 = G__11797;
continue;
}
} else
{return ret_value__6036__auto__;
}
break;
}
});
state_machine__6035__auto__ = function(state_11750){
switch(arguments.length){
case 0:
return state_machine__6035__auto____0.call(this);
case 1:
return state_machine__6035__auto____1.call(this,state_11750);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6035__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6035__auto____0;
state_machine__6035__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6035__auto____1;
return state_machine__6035__auto__;
})()
;})(switch__6034__auto__))
})();var state__6051__auto__ = (function (){var statearr_11779 = f__6050__auto__.call(null);(statearr_11779[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6049__auto___11780);
return statearr_11779;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6051__auto__);
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
var merge__2 = (function (chs,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__6049__auto___11905 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6050__auto__ = (function (){var switch__6034__auto__ = (function (state_11881){var state_val_11882 = (state_11881[1]);if((state_val_11882 === 1))
{var inst_11852 = cljs.core.vec.call(null,chs);var inst_11853 = inst_11852;var state_11881__$1 = (function (){var statearr_11883 = state_11881;(statearr_11883[7] = inst_11853);
return statearr_11883;
})();var statearr_11884_11906 = state_11881__$1;(statearr_11884_11906[2] = null);
(statearr_11884_11906[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11882 === 2))
{var inst_11853 = (state_11881[7]);var inst_11855 = cljs.core.count.call(null,inst_11853);var inst_11856 = (inst_11855 > 0);var state_11881__$1 = state_11881;if(cljs.core.truth_(inst_11856))
{var statearr_11885_11907 = state_11881__$1;(statearr_11885_11907[1] = 4);
} else
{var statearr_11886_11908 = state_11881__$1;(statearr_11886_11908[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11882 === 3))
{var inst_11879 = (state_11881[2]);var state_11881__$1 = state_11881;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11881__$1,inst_11879);
} else
{if((state_val_11882 === 4))
{var inst_11853 = (state_11881[7]);var state_11881__$1 = state_11881;return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_11881__$1,7,inst_11853);
} else
{if((state_val_11882 === 5))
{var inst_11875 = cljs.core.async.close_BANG_.call(null,out);var state_11881__$1 = state_11881;var statearr_11887_11909 = state_11881__$1;(statearr_11887_11909[2] = inst_11875);
(statearr_11887_11909[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11882 === 6))
{var inst_11877 = (state_11881[2]);var state_11881__$1 = state_11881;var statearr_11888_11910 = state_11881__$1;(statearr_11888_11910[2] = inst_11877);
(statearr_11888_11910[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11882 === 7))
{var inst_11861 = (state_11881[8]);var inst_11860 = (state_11881[9]);var inst_11860__$1 = (state_11881[2]);var inst_11861__$1 = cljs.core.nth.call(null,inst_11860__$1,0,null);var inst_11862 = cljs.core.nth.call(null,inst_11860__$1,1,null);var inst_11863 = (inst_11861__$1 == null);var state_11881__$1 = (function (){var statearr_11889 = state_11881;(statearr_11889[10] = inst_11862);
(statearr_11889[8] = inst_11861__$1);
(statearr_11889[9] = inst_11860__$1);
return statearr_11889;
})();if(cljs.core.truth_(inst_11863))
{var statearr_11890_11911 = state_11881__$1;(statearr_11890_11911[1] = 8);
} else
{var statearr_11891_11912 = state_11881__$1;(statearr_11891_11912[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11882 === 8))
{var inst_11862 = (state_11881[10]);var inst_11861 = (state_11881[8]);var inst_11853 = (state_11881[7]);var inst_11860 = (state_11881[9]);var inst_11865 = (function (){var c = inst_11862;var v = inst_11861;var vec__11858 = inst_11860;var cs = inst_11853;return ((function (c,v,vec__11858,cs,inst_11862,inst_11861,inst_11853,inst_11860,state_val_11882){
return (function (p1__11798_SHARP_){return cljs.core.not_EQ_.call(null,c,p1__11798_SHARP_);
});
;})(c,v,vec__11858,cs,inst_11862,inst_11861,inst_11853,inst_11860,state_val_11882))
})();var inst_11866 = cljs.core.filterv.call(null,inst_11865,inst_11853);var inst_11853__$1 = inst_11866;var state_11881__$1 = (function (){var statearr_11892 = state_11881;(statearr_11892[7] = inst_11853__$1);
return statearr_11892;
})();var statearr_11893_11913 = state_11881__$1;(statearr_11893_11913[2] = null);
(statearr_11893_11913[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11882 === 9))
{var inst_11861 = (state_11881[8]);var state_11881__$1 = state_11881;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11881__$1,11,out,inst_11861);
} else
{if((state_val_11882 === 10))
{var inst_11873 = (state_11881[2]);var state_11881__$1 = state_11881;var statearr_11895_11914 = state_11881__$1;(statearr_11895_11914[2] = inst_11873);
(statearr_11895_11914[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11882 === 11))
{var inst_11853 = (state_11881[7]);var inst_11870 = (state_11881[2]);var tmp11894 = inst_11853;var inst_11853__$1 = tmp11894;var state_11881__$1 = (function (){var statearr_11896 = state_11881;(statearr_11896[7] = inst_11853__$1);
(statearr_11896[11] = inst_11870);
return statearr_11896;
})();var statearr_11897_11915 = state_11881__$1;(statearr_11897_11915[2] = null);
(statearr_11897_11915[1] = 2);
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
});return ((function (switch__6034__auto__){
return (function() {
var state_machine__6035__auto__ = null;
var state_machine__6035__auto____0 = (function (){var statearr_11901 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_11901[0] = state_machine__6035__auto__);
(statearr_11901[1] = 1);
return statearr_11901;
});
var state_machine__6035__auto____1 = (function (state_11881){while(true){
var ret_value__6036__auto__ = (function (){try{while(true){
var result__6037__auto__ = switch__6034__auto__.call(null,state_11881);if(cljs.core.keyword_identical_QMARK_.call(null,result__6037__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6037__auto__;
}
break;
}
}catch (e11902){if((e11902 instanceof Object))
{var ex__6038__auto__ = e11902;var statearr_11903_11916 = state_11881;(statearr_11903_11916[5] = ex__6038__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11881);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e11902;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6036__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__11917 = state_11881;
state_11881 = G__11917;
continue;
}
} else
{return ret_value__6036__auto__;
}
break;
}
});
state_machine__6035__auto__ = function(state_11881){
switch(arguments.length){
case 0:
return state_machine__6035__auto____0.call(this);
case 1:
return state_machine__6035__auto____1.call(this,state_11881);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6035__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6035__auto____0;
state_machine__6035__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6035__auto____1;
return state_machine__6035__auto__;
})()
;})(switch__6034__auto__))
})();var state__6051__auto__ = (function (){var statearr_11904 = f__6050__auto__.call(null);(statearr_11904[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6049__auto___11905);
return statearr_11904;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6051__auto__);
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
var take__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__6049__auto___12010 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6050__auto__ = (function (){var switch__6034__auto__ = (function (state_11987){var state_val_11988 = (state_11987[1]);if((state_val_11988 === 1))
{var inst_11964 = 0;var state_11987__$1 = (function (){var statearr_11989 = state_11987;(statearr_11989[7] = inst_11964);
return statearr_11989;
})();var statearr_11990_12011 = state_11987__$1;(statearr_11990_12011[2] = null);
(statearr_11990_12011[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11988 === 2))
{var inst_11964 = (state_11987[7]);var inst_11966 = (inst_11964 < n);var state_11987__$1 = state_11987;if(cljs.core.truth_(inst_11966))
{var statearr_11991_12012 = state_11987__$1;(statearr_11991_12012[1] = 4);
} else
{var statearr_11992_12013 = state_11987__$1;(statearr_11992_12013[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11988 === 3))
{var inst_11984 = (state_11987[2]);var inst_11985 = cljs.core.async.close_BANG_.call(null,out);var state_11987__$1 = (function (){var statearr_11993 = state_11987;(statearr_11993[8] = inst_11984);
return statearr_11993;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11987__$1,inst_11985);
} else
{if((state_val_11988 === 4))
{var state_11987__$1 = state_11987;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11987__$1,7,ch);
} else
{if((state_val_11988 === 5))
{var state_11987__$1 = state_11987;var statearr_11994_12014 = state_11987__$1;(statearr_11994_12014[2] = null);
(statearr_11994_12014[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11988 === 6))
{var inst_11982 = (state_11987[2]);var state_11987__$1 = state_11987;var statearr_11995_12015 = state_11987__$1;(statearr_11995_12015[2] = inst_11982);
(statearr_11995_12015[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11988 === 7))
{var inst_11969 = (state_11987[9]);var inst_11969__$1 = (state_11987[2]);var inst_11970 = (inst_11969__$1 == null);var inst_11971 = cljs.core.not.call(null,inst_11970);var state_11987__$1 = (function (){var statearr_11996 = state_11987;(statearr_11996[9] = inst_11969__$1);
return statearr_11996;
})();if(inst_11971)
{var statearr_11997_12016 = state_11987__$1;(statearr_11997_12016[1] = 8);
} else
{var statearr_11998_12017 = state_11987__$1;(statearr_11998_12017[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11988 === 8))
{var inst_11969 = (state_11987[9]);var state_11987__$1 = state_11987;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11987__$1,11,out,inst_11969);
} else
{if((state_val_11988 === 9))
{var state_11987__$1 = state_11987;var statearr_11999_12018 = state_11987__$1;(statearr_11999_12018[2] = null);
(statearr_11999_12018[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11988 === 10))
{var inst_11979 = (state_11987[2]);var state_11987__$1 = state_11987;var statearr_12000_12019 = state_11987__$1;(statearr_12000_12019[2] = inst_11979);
(statearr_12000_12019[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11988 === 11))
{var inst_11964 = (state_11987[7]);var inst_11974 = (state_11987[2]);var inst_11975 = (inst_11964 + 1);var inst_11964__$1 = inst_11975;var state_11987__$1 = (function (){var statearr_12001 = state_11987;(statearr_12001[10] = inst_11974);
(statearr_12001[7] = inst_11964__$1);
return statearr_12001;
})();var statearr_12002_12020 = state_11987__$1;(statearr_12002_12020[2] = null);
(statearr_12002_12020[1] = 2);
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
});return ((function (switch__6034__auto__){
return (function() {
var state_machine__6035__auto__ = null;
var state_machine__6035__auto____0 = (function (){var statearr_12006 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_12006[0] = state_machine__6035__auto__);
(statearr_12006[1] = 1);
return statearr_12006;
});
var state_machine__6035__auto____1 = (function (state_11987){while(true){
var ret_value__6036__auto__ = (function (){try{while(true){
var result__6037__auto__ = switch__6034__auto__.call(null,state_11987);if(cljs.core.keyword_identical_QMARK_.call(null,result__6037__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6037__auto__;
}
break;
}
}catch (e12007){if((e12007 instanceof Object))
{var ex__6038__auto__ = e12007;var statearr_12008_12021 = state_11987;(statearr_12008_12021[5] = ex__6038__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11987);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e12007;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6036__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__12022 = state_11987;
state_11987 = G__12022;
continue;
}
} else
{return ret_value__6036__auto__;
}
break;
}
});
state_machine__6035__auto__ = function(state_11987){
switch(arguments.length){
case 0:
return state_machine__6035__auto____0.call(this);
case 1:
return state_machine__6035__auto____1.call(this,state_11987);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6035__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6035__auto____0;
state_machine__6035__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6035__auto____1;
return state_machine__6035__auto__;
})()
;})(switch__6034__auto__))
})();var state__6051__auto__ = (function (){var statearr_12009 = f__6050__auto__.call(null);(statearr_12009[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6049__auto___12010);
return statearr_12009;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6051__auto__);
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
var unique__2 = (function (ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__6049__auto___12119 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6050__auto__ = (function (){var switch__6034__auto__ = (function (state_12094){var state_val_12095 = (state_12094[1]);if((state_val_12095 === 1))
{var inst_12071 = null;var state_12094__$1 = (function (){var statearr_12096 = state_12094;(statearr_12096[7] = inst_12071);
return statearr_12096;
})();var statearr_12097_12120 = state_12094__$1;(statearr_12097_12120[2] = null);
(statearr_12097_12120[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12095 === 2))
{var state_12094__$1 = state_12094;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12094__$1,4,ch);
} else
{if((state_val_12095 === 3))
{var inst_12091 = (state_12094[2]);var inst_12092 = cljs.core.async.close_BANG_.call(null,out);var state_12094__$1 = (function (){var statearr_12098 = state_12094;(statearr_12098[8] = inst_12091);
return statearr_12098;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12094__$1,inst_12092);
} else
{if((state_val_12095 === 4))
{var inst_12074 = (state_12094[9]);var inst_12074__$1 = (state_12094[2]);var inst_12075 = (inst_12074__$1 == null);var inst_12076 = cljs.core.not.call(null,inst_12075);var state_12094__$1 = (function (){var statearr_12099 = state_12094;(statearr_12099[9] = inst_12074__$1);
return statearr_12099;
})();if(inst_12076)
{var statearr_12100_12121 = state_12094__$1;(statearr_12100_12121[1] = 5);
} else
{var statearr_12101_12122 = state_12094__$1;(statearr_12101_12122[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12095 === 5))
{var inst_12071 = (state_12094[7]);var inst_12074 = (state_12094[9]);var inst_12078 = cljs.core._EQ_.call(null,inst_12074,inst_12071);var state_12094__$1 = state_12094;if(inst_12078)
{var statearr_12102_12123 = state_12094__$1;(statearr_12102_12123[1] = 8);
} else
{var statearr_12103_12124 = state_12094__$1;(statearr_12103_12124[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12095 === 6))
{var state_12094__$1 = state_12094;var statearr_12105_12125 = state_12094__$1;(statearr_12105_12125[2] = null);
(statearr_12105_12125[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12095 === 7))
{var inst_12089 = (state_12094[2]);var state_12094__$1 = state_12094;var statearr_12106_12126 = state_12094__$1;(statearr_12106_12126[2] = inst_12089);
(statearr_12106_12126[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12095 === 8))
{var inst_12071 = (state_12094[7]);var tmp12104 = inst_12071;var inst_12071__$1 = tmp12104;var state_12094__$1 = (function (){var statearr_12107 = state_12094;(statearr_12107[7] = inst_12071__$1);
return statearr_12107;
})();var statearr_12108_12127 = state_12094__$1;(statearr_12108_12127[2] = null);
(statearr_12108_12127[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12095 === 9))
{var inst_12074 = (state_12094[9]);var state_12094__$1 = state_12094;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12094__$1,11,out,inst_12074);
} else
{if((state_val_12095 === 10))
{var inst_12086 = (state_12094[2]);var state_12094__$1 = state_12094;var statearr_12109_12128 = state_12094__$1;(statearr_12109_12128[2] = inst_12086);
(statearr_12109_12128[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12095 === 11))
{var inst_12074 = (state_12094[9]);var inst_12083 = (state_12094[2]);var inst_12071 = inst_12074;var state_12094__$1 = (function (){var statearr_12110 = state_12094;(statearr_12110[7] = inst_12071);
(statearr_12110[10] = inst_12083);
return statearr_12110;
})();var statearr_12111_12129 = state_12094__$1;(statearr_12111_12129[2] = null);
(statearr_12111_12129[1] = 2);
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
});return ((function (switch__6034__auto__){
return (function() {
var state_machine__6035__auto__ = null;
var state_machine__6035__auto____0 = (function (){var statearr_12115 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_12115[0] = state_machine__6035__auto__);
(statearr_12115[1] = 1);
return statearr_12115;
});
var state_machine__6035__auto____1 = (function (state_12094){while(true){
var ret_value__6036__auto__ = (function (){try{while(true){
var result__6037__auto__ = switch__6034__auto__.call(null,state_12094);if(cljs.core.keyword_identical_QMARK_.call(null,result__6037__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6037__auto__;
}
break;
}
}catch (e12116){if((e12116 instanceof Object))
{var ex__6038__auto__ = e12116;var statearr_12117_12130 = state_12094;(statearr_12117_12130[5] = ex__6038__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12094);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e12116;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6036__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__12131 = state_12094;
state_12094 = G__12131;
continue;
}
} else
{return ret_value__6036__auto__;
}
break;
}
});
state_machine__6035__auto__ = function(state_12094){
switch(arguments.length){
case 0:
return state_machine__6035__auto____0.call(this);
case 1:
return state_machine__6035__auto____1.call(this,state_12094);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6035__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6035__auto____0;
state_machine__6035__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6035__auto____1;
return state_machine__6035__auto__;
})()
;})(switch__6034__auto__))
})();var state__6051__auto__ = (function (){var statearr_12118 = f__6050__auto__.call(null);(statearr_12118[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6049__auto___12119);
return statearr_12118;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6051__auto__);
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
var partition__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__6049__auto___12266 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6050__auto__ = (function (){var switch__6034__auto__ = (function (state_12236){var state_val_12237 = (state_12236[1]);if((state_val_12237 === 1))
{var inst_12199 = (new Array(n));var inst_12200 = inst_12199;var inst_12201 = 0;var state_12236__$1 = (function (){var statearr_12238 = state_12236;(statearr_12238[7] = inst_12201);
(statearr_12238[8] = inst_12200);
return statearr_12238;
})();var statearr_12239_12267 = state_12236__$1;(statearr_12239_12267[2] = null);
(statearr_12239_12267[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12237 === 2))
{var state_12236__$1 = state_12236;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12236__$1,4,ch);
} else
{if((state_val_12237 === 3))
{var inst_12234 = (state_12236[2]);var state_12236__$1 = state_12236;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12236__$1,inst_12234);
} else
{if((state_val_12237 === 4))
{var inst_12204 = (state_12236[9]);var inst_12204__$1 = (state_12236[2]);var inst_12205 = (inst_12204__$1 == null);var inst_12206 = cljs.core.not.call(null,inst_12205);var state_12236__$1 = (function (){var statearr_12240 = state_12236;(statearr_12240[9] = inst_12204__$1);
return statearr_12240;
})();if(inst_12206)
{var statearr_12241_12268 = state_12236__$1;(statearr_12241_12268[1] = 5);
} else
{var statearr_12242_12269 = state_12236__$1;(statearr_12242_12269[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12237 === 5))
{var inst_12209 = (state_12236[10]);var inst_12204 = (state_12236[9]);var inst_12201 = (state_12236[7]);var inst_12200 = (state_12236[8]);var inst_12208 = (inst_12200[inst_12201] = inst_12204);var inst_12209__$1 = (inst_12201 + 1);var inst_12210 = (inst_12209__$1 < n);var state_12236__$1 = (function (){var statearr_12243 = state_12236;(statearr_12243[10] = inst_12209__$1);
(statearr_12243[11] = inst_12208);
return statearr_12243;
})();if(cljs.core.truth_(inst_12210))
{var statearr_12244_12270 = state_12236__$1;(statearr_12244_12270[1] = 8);
} else
{var statearr_12245_12271 = state_12236__$1;(statearr_12245_12271[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12237 === 6))
{var inst_12201 = (state_12236[7]);var inst_12222 = (inst_12201 > 0);var state_12236__$1 = state_12236;if(cljs.core.truth_(inst_12222))
{var statearr_12247_12272 = state_12236__$1;(statearr_12247_12272[1] = 12);
} else
{var statearr_12248_12273 = state_12236__$1;(statearr_12248_12273[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12237 === 7))
{var inst_12232 = (state_12236[2]);var state_12236__$1 = state_12236;var statearr_12249_12274 = state_12236__$1;(statearr_12249_12274[2] = inst_12232);
(statearr_12249_12274[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12237 === 8))
{var inst_12209 = (state_12236[10]);var inst_12200 = (state_12236[8]);var tmp12246 = inst_12200;var inst_12200__$1 = tmp12246;var inst_12201 = inst_12209;var state_12236__$1 = (function (){var statearr_12250 = state_12236;(statearr_12250[7] = inst_12201);
(statearr_12250[8] = inst_12200__$1);
return statearr_12250;
})();var statearr_12251_12275 = state_12236__$1;(statearr_12251_12275[2] = null);
(statearr_12251_12275[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12237 === 9))
{var inst_12200 = (state_12236[8]);var inst_12214 = cljs.core.vec.call(null,inst_12200);var state_12236__$1 = state_12236;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12236__$1,11,out,inst_12214);
} else
{if((state_val_12237 === 10))
{var inst_12220 = (state_12236[2]);var state_12236__$1 = state_12236;var statearr_12252_12276 = state_12236__$1;(statearr_12252_12276[2] = inst_12220);
(statearr_12252_12276[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12237 === 11))
{var inst_12216 = (state_12236[2]);var inst_12217 = (new Array(n));var inst_12200 = inst_12217;var inst_12201 = 0;var state_12236__$1 = (function (){var statearr_12253 = state_12236;(statearr_12253[12] = inst_12216);
(statearr_12253[7] = inst_12201);
(statearr_12253[8] = inst_12200);
return statearr_12253;
})();var statearr_12254_12277 = state_12236__$1;(statearr_12254_12277[2] = null);
(statearr_12254_12277[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12237 === 12))
{var inst_12200 = (state_12236[8]);var inst_12224 = cljs.core.vec.call(null,inst_12200);var state_12236__$1 = state_12236;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12236__$1,15,out,inst_12224);
} else
{if((state_val_12237 === 13))
{var state_12236__$1 = state_12236;var statearr_12255_12278 = state_12236__$1;(statearr_12255_12278[2] = null);
(statearr_12255_12278[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12237 === 14))
{var inst_12229 = (state_12236[2]);var inst_12230 = cljs.core.async.close_BANG_.call(null,out);var state_12236__$1 = (function (){var statearr_12256 = state_12236;(statearr_12256[13] = inst_12229);
return statearr_12256;
})();var statearr_12257_12279 = state_12236__$1;(statearr_12257_12279[2] = inst_12230);
(statearr_12257_12279[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12237 === 15))
{var inst_12226 = (state_12236[2]);var state_12236__$1 = state_12236;var statearr_12258_12280 = state_12236__$1;(statearr_12258_12280[2] = inst_12226);
(statearr_12258_12280[1] = 14);
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
});return ((function (switch__6034__auto__){
return (function() {
var state_machine__6035__auto__ = null;
var state_machine__6035__auto____0 = (function (){var statearr_12262 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_12262[0] = state_machine__6035__auto__);
(statearr_12262[1] = 1);
return statearr_12262;
});
var state_machine__6035__auto____1 = (function (state_12236){while(true){
var ret_value__6036__auto__ = (function (){try{while(true){
var result__6037__auto__ = switch__6034__auto__.call(null,state_12236);if(cljs.core.keyword_identical_QMARK_.call(null,result__6037__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6037__auto__;
}
break;
}
}catch (e12263){if((e12263 instanceof Object))
{var ex__6038__auto__ = e12263;var statearr_12264_12281 = state_12236;(statearr_12264_12281[5] = ex__6038__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12236);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e12263;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6036__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__12282 = state_12236;
state_12236 = G__12282;
continue;
}
} else
{return ret_value__6036__auto__;
}
break;
}
});
state_machine__6035__auto__ = function(state_12236){
switch(arguments.length){
case 0:
return state_machine__6035__auto____0.call(this);
case 1:
return state_machine__6035__auto____1.call(this,state_12236);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6035__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6035__auto____0;
state_machine__6035__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6035__auto____1;
return state_machine__6035__auto__;
})()
;})(switch__6034__auto__))
})();var state__6051__auto__ = (function (){var statearr_12265 = f__6050__auto__.call(null);(statearr_12265[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6049__auto___12266);
return statearr_12265;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6051__auto__);
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
var partition_by__3 = (function (f,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__6049__auto___12425 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6050__auto__ = (function (){var switch__6034__auto__ = (function (state_12395){var state_val_12396 = (state_12395[1]);if((state_val_12396 === 1))
{var inst_12354 = [];var inst_12355 = inst_12354;var inst_12356 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",4382193538);var state_12395__$1 = (function (){var statearr_12397 = state_12395;(statearr_12397[7] = inst_12356);
(statearr_12397[8] = inst_12355);
return statearr_12397;
})();var statearr_12398_12426 = state_12395__$1;(statearr_12398_12426[2] = null);
(statearr_12398_12426[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12396 === 2))
{var state_12395__$1 = state_12395;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12395__$1,4,ch);
} else
{if((state_val_12396 === 3))
{var inst_12393 = (state_12395[2]);var state_12395__$1 = state_12395;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12395__$1,inst_12393);
} else
{if((state_val_12396 === 4))
{var inst_12359 = (state_12395[9]);var inst_12359__$1 = (state_12395[2]);var inst_12360 = (inst_12359__$1 == null);var inst_12361 = cljs.core.not.call(null,inst_12360);var state_12395__$1 = (function (){var statearr_12399 = state_12395;(statearr_12399[9] = inst_12359__$1);
return statearr_12399;
})();if(inst_12361)
{var statearr_12400_12427 = state_12395__$1;(statearr_12400_12427[1] = 5);
} else
{var statearr_12401_12428 = state_12395__$1;(statearr_12401_12428[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12396 === 5))
{var inst_12356 = (state_12395[7]);var inst_12363 = (state_12395[10]);var inst_12359 = (state_12395[9]);var inst_12363__$1 = f.call(null,inst_12359);var inst_12364 = cljs.core._EQ_.call(null,inst_12363__$1,inst_12356);var inst_12365 = cljs.core.keyword_identical_QMARK_.call(null,inst_12356,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",4382193538));var inst_12366 = (inst_12364) || (inst_12365);var state_12395__$1 = (function (){var statearr_12402 = state_12395;(statearr_12402[10] = inst_12363__$1);
return statearr_12402;
})();if(cljs.core.truth_(inst_12366))
{var statearr_12403_12429 = state_12395__$1;(statearr_12403_12429[1] = 8);
} else
{var statearr_12404_12430 = state_12395__$1;(statearr_12404_12430[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12396 === 6))
{var inst_12355 = (state_12395[8]);var inst_12380 = inst_12355.length;var inst_12381 = (inst_12380 > 0);var state_12395__$1 = state_12395;if(cljs.core.truth_(inst_12381))
{var statearr_12406_12431 = state_12395__$1;(statearr_12406_12431[1] = 12);
} else
{var statearr_12407_12432 = state_12395__$1;(statearr_12407_12432[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12396 === 7))
{var inst_12391 = (state_12395[2]);var state_12395__$1 = state_12395;var statearr_12408_12433 = state_12395__$1;(statearr_12408_12433[2] = inst_12391);
(statearr_12408_12433[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12396 === 8))
{var inst_12355 = (state_12395[8]);var inst_12363 = (state_12395[10]);var inst_12359 = (state_12395[9]);var inst_12368 = inst_12355.push(inst_12359);var tmp12405 = inst_12355;var inst_12355__$1 = tmp12405;var inst_12356 = inst_12363;var state_12395__$1 = (function (){var statearr_12409 = state_12395;(statearr_12409[7] = inst_12356);
(statearr_12409[8] = inst_12355__$1);
(statearr_12409[11] = inst_12368);
return statearr_12409;
})();var statearr_12410_12434 = state_12395__$1;(statearr_12410_12434[2] = null);
(statearr_12410_12434[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12396 === 9))
{var inst_12355 = (state_12395[8]);var inst_12371 = cljs.core.vec.call(null,inst_12355);var state_12395__$1 = state_12395;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12395__$1,11,out,inst_12371);
} else
{if((state_val_12396 === 10))
{var inst_12378 = (state_12395[2]);var state_12395__$1 = state_12395;var statearr_12411_12435 = state_12395__$1;(statearr_12411_12435[2] = inst_12378);
(statearr_12411_12435[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12396 === 11))
{var inst_12363 = (state_12395[10]);var inst_12359 = (state_12395[9]);var inst_12373 = (state_12395[2]);var inst_12374 = [];var inst_12375 = inst_12374.push(inst_12359);var inst_12355 = inst_12374;var inst_12356 = inst_12363;var state_12395__$1 = (function (){var statearr_12412 = state_12395;(statearr_12412[7] = inst_12356);
(statearr_12412[8] = inst_12355);
(statearr_12412[12] = inst_12375);
(statearr_12412[13] = inst_12373);
return statearr_12412;
})();var statearr_12413_12436 = state_12395__$1;(statearr_12413_12436[2] = null);
(statearr_12413_12436[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12396 === 12))
{var inst_12355 = (state_12395[8]);var inst_12383 = cljs.core.vec.call(null,inst_12355);var state_12395__$1 = state_12395;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12395__$1,15,out,inst_12383);
} else
{if((state_val_12396 === 13))
{var state_12395__$1 = state_12395;var statearr_12414_12437 = state_12395__$1;(statearr_12414_12437[2] = null);
(statearr_12414_12437[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12396 === 14))
{var inst_12388 = (state_12395[2]);var inst_12389 = cljs.core.async.close_BANG_.call(null,out);var state_12395__$1 = (function (){var statearr_12415 = state_12395;(statearr_12415[14] = inst_12388);
return statearr_12415;
})();var statearr_12416_12438 = state_12395__$1;(statearr_12416_12438[2] = inst_12389);
(statearr_12416_12438[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12396 === 15))
{var inst_12385 = (state_12395[2]);var state_12395__$1 = state_12395;var statearr_12417_12439 = state_12395__$1;(statearr_12417_12439[2] = inst_12385);
(statearr_12417_12439[1] = 14);
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
});return ((function (switch__6034__auto__){
return (function() {
var state_machine__6035__auto__ = null;
var state_machine__6035__auto____0 = (function (){var statearr_12421 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_12421[0] = state_machine__6035__auto__);
(statearr_12421[1] = 1);
return statearr_12421;
});
var state_machine__6035__auto____1 = (function (state_12395){while(true){
var ret_value__6036__auto__ = (function (){try{while(true){
var result__6037__auto__ = switch__6034__auto__.call(null,state_12395);if(cljs.core.keyword_identical_QMARK_.call(null,result__6037__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6037__auto__;
}
break;
}
}catch (e12422){if((e12422 instanceof Object))
{var ex__6038__auto__ = e12422;var statearr_12423_12440 = state_12395;(statearr_12423_12440[5] = ex__6038__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12395);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e12422;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6036__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__12441 = state_12395;
state_12395 = G__12441;
continue;
}
} else
{return ret_value__6036__auto__;
}
break;
}
});
state_machine__6035__auto__ = function(state_12395){
switch(arguments.length){
case 0:
return state_machine__6035__auto____0.call(this);
case 1:
return state_machine__6035__auto____1.call(this,state_12395);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6035__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6035__auto____0;
state_machine__6035__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6035__auto____1;
return state_machine__6035__auto__;
})()
;})(switch__6034__auto__))
})();var state__6051__auto__ = (function (){var statearr_12424 = f__6050__auto__.call(null);(statearr_12424[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6049__auto___12425);
return statearr_12424;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6051__auto__);
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
