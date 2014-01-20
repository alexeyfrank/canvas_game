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
cljs.core.async.fn_handler = (function fn_handler(f){if(typeof cljs.core.async.t9902 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t9902 = (function (f,fn_handler,meta9903){
this.f = f;
this.fn_handler = fn_handler;
this.meta9903 = meta9903;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t9902.cljs$lang$type = true;
cljs.core.async.t9902.cljs$lang$ctorStr = "cljs.core.async/t9902";
cljs.core.async.t9902.cljs$lang$ctorPrWriter = (function (this__3970__auto__,writer__3971__auto__,opt__3972__auto__){return cljs.core._write.call(null,writer__3971__auto__,"cljs.core.async/t9902");
});
cljs.core.async.t9902.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t9902.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return true;
});
cljs.core.async.t9902.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.f;
});
cljs.core.async.t9902.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_9904){var self__ = this;
var _9904__$1 = this;return self__.meta9903;
});
cljs.core.async.t9902.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_9904,meta9903__$1){var self__ = this;
var _9904__$1 = this;return (new cljs.core.async.t9902(self__.f,self__.fn_handler,meta9903__$1));
});
cljs.core.async.__GT_t9902 = (function __GT_t9902(f__$1,fn_handler__$1,meta9903){return (new cljs.core.async.t9902(f__$1,fn_handler__$1,meta9903));
});
}
return (new cljs.core.async.t9902(f,fn_handler,null));
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
cljs.core.async.unblocking_buffer_QMARK_ = (function unblocking_buffer_QMARK_(buff){var G__9906 = buff;if(G__9906)
{var bit__4052__auto__ = null;if(cljs.core.truth_((function (){var or__3408__auto__ = bit__4052__auto__;if(cljs.core.truth_(or__3408__auto__))
{return or__3408__auto__;
} else
{return G__9906.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})()))
{return true;
} else
{if((!G__9906.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__9906);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__9906);
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
{var val_9907 = cljs.core.deref.call(null,ret);if(cljs.core.truth_(on_caller_QMARK_))
{fn1.call(null,val_9907);
} else
{cljs.core.async.impl.dispatch.run.call(null,(function (){return fn1.call(null,val_9907);
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
cljs.core.async.random_array = (function random_array(n){var a = (new Array(n));var n__4250__auto___9908 = n;var x_9909 = 0;while(true){
if((x_9909 < n__4250__auto___9908))
{(a[x_9909] = 0);
{
var G__9910 = (x_9909 + 1);
x_9909 = G__9910;
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
var G__9911 = (i + 1);
i = G__9911;
continue;
}
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){var flag = cljs.core.atom.call(null,true);if(typeof cljs.core.async.t9915 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t9915 = (function (flag,alt_flag,meta9916){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta9916 = meta9916;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t9915.cljs$lang$type = true;
cljs.core.async.t9915.cljs$lang$ctorStr = "cljs.core.async/t9915";
cljs.core.async.t9915.cljs$lang$ctorPrWriter = (function (this__3970__auto__,writer__3971__auto__,opt__3972__auto__){return cljs.core._write.call(null,writer__3971__auto__,"cljs.core.async/t9915");
});
cljs.core.async.t9915.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t9915.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.deref.call(null,self__.flag);
});
cljs.core.async.t9915.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.flag,null);
return true;
});
cljs.core.async.t9915.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_9917){var self__ = this;
var _9917__$1 = this;return self__.meta9916;
});
cljs.core.async.t9915.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_9917,meta9916__$1){var self__ = this;
var _9917__$1 = this;return (new cljs.core.async.t9915(self__.flag,self__.alt_flag,meta9916__$1));
});
cljs.core.async.__GT_t9915 = (function __GT_t9915(flag__$1,alt_flag__$1,meta9916){return (new cljs.core.async.t9915(flag__$1,alt_flag__$1,meta9916));
});
}
return (new cljs.core.async.t9915(flag,alt_flag,null));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){if(typeof cljs.core.async.t9921 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t9921 = (function (cb,flag,alt_handler,meta9922){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta9922 = meta9922;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t9921.cljs$lang$type = true;
cljs.core.async.t9921.cljs$lang$ctorStr = "cljs.core.async/t9921";
cljs.core.async.t9921.cljs$lang$ctorPrWriter = (function (this__3970__auto__,writer__3971__auto__,opt__3972__auto__){return cljs.core._write.call(null,writer__3971__auto__,"cljs.core.async/t9921");
});
cljs.core.async.t9921.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t9921.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});
cljs.core.async.t9921.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.async.impl.protocols.commit.call(null,self__.flag);
return self__.cb;
});
cljs.core.async.t9921.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_9923){var self__ = this;
var _9923__$1 = this;return self__.meta9922;
});
cljs.core.async.t9921.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_9923,meta9922__$1){var self__ = this;
var _9923__$1 = this;return (new cljs.core.async.t9921(self__.cb,self__.flag,self__.alt_handler,meta9922__$1));
});
cljs.core.async.__GT_t9921 = (function __GT_t9921(cb__$1,flag__$1,alt_handler__$1,meta9922){return (new cljs.core.async.t9921(cb__$1,flag__$1,alt_handler__$1,meta9922));
});
}
return (new cljs.core.async.t9921(cb,flag,alt_handler,null));
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
return (function (p1__9924_SHARP_){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__9924_SHARP_,port], null));
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
var G__9925 = (i + 1);
i = G__9925;
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
var alts_BANG___delegate = function (ports,p__9926){var map__9928 = p__9926;var map__9928__$1 = ((cljs.core.seq_QMARK_.call(null,map__9928))?cljs.core.apply.call(null,cljs.core.hash_map,map__9928):map__9928);var opts = map__9928__$1;if(null)
{return null;
} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("alts! used not in (go ...) block"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,null))].join('')));
}
};
var alts_BANG_ = function (ports,var_args){
var p__9926 = null;if (arguments.length > 1) {
  p__9926 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return alts_BANG___delegate.call(this,ports,p__9926);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__9929){
var ports = cljs.core.first(arglist__9929);
var p__9926 = cljs.core.rest(arglist__9929);
return alts_BANG___delegate(ports,p__9926);
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
cljs.core.async.map_LT_ = (function map_LT_(f,ch){if(typeof cljs.core.async.t9937 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t9937 = (function (ch,f,map_LT_,meta9938){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta9938 = meta9938;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t9937.cljs$lang$type = true;
cljs.core.async.t9937.cljs$lang$ctorStr = "cljs.core.async/t9937";
cljs.core.async.t9937.cljs$lang$ctorPrWriter = (function (this__3970__auto__,writer__3971__auto__,opt__3972__auto__){return cljs.core._write.call(null,writer__3971__auto__,"cljs.core.async/t9937");
});
cljs.core.async.t9937.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t9937.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
});
cljs.core.async.t9937.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t9937.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){if(typeof cljs.core.async.t9940 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t9940 = (function (fn1,_,meta9938,ch,f,map_LT_,meta9941){
this.fn1 = fn1;
this._ = _;
this.meta9938 = meta9938;
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta9941 = meta9941;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t9940.cljs$lang$type = true;
cljs.core.async.t9940.cljs$lang$ctorStr = "cljs.core.async/t9940";
cljs.core.async.t9940.cljs$lang$ctorPrWriter = (function (this__3970__auto__,writer__3971__auto__,opt__3972__auto__){return cljs.core._write.call(null,writer__3971__auto__,"cljs.core.async/t9940");
});
cljs.core.async.t9940.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t9940.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});
cljs.core.async.t9940.prototype.cljs$core$async$impl$protocols$Handler$lock_id$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.lock_id.call(null,self__.fn1);
});
cljs.core.async.t9940.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);return ((function (f1,___$4){
return (function (p1__9930_SHARP_){return f1.call(null,(((p1__9930_SHARP_ == null))?null:self__.f.call(null,p1__9930_SHARP_)));
});
;})(f1,___$4))
});
cljs.core.async.t9940.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_9942){var self__ = this;
var _9942__$1 = this;return self__.meta9941;
});
cljs.core.async.t9940.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_9942,meta9941__$1){var self__ = this;
var _9942__$1 = this;return (new cljs.core.async.t9940(self__.fn1,self__._,self__.meta9938,self__.ch,self__.f,self__.map_LT_,meta9941__$1));
});
cljs.core.async.__GT_t9940 = (function __GT_t9940(fn1__$1,___$2,meta9938__$1,ch__$2,f__$2,map_LT___$2,meta9941){return (new cljs.core.async.t9940(fn1__$1,___$2,meta9938__$1,ch__$2,f__$2,map_LT___$2,meta9941));
});
}
return (new cljs.core.async.t9940(fn1,___$1,self__.meta9938,self__.ch,self__.f,self__.map_LT_,null));
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
cljs.core.async.t9937.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t9937.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t9937.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_9939){var self__ = this;
var _9939__$1 = this;return self__.meta9938;
});
cljs.core.async.t9937.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_9939,meta9938__$1){var self__ = this;
var _9939__$1 = this;return (new cljs.core.async.t9937(self__.ch,self__.f,self__.map_LT_,meta9938__$1));
});
cljs.core.async.__GT_t9937 = (function __GT_t9937(ch__$1,f__$1,map_LT___$1,meta9938){return (new cljs.core.async.t9937(ch__$1,f__$1,map_LT___$1,meta9938));
});
}
return (new cljs.core.async.t9937(ch,f,map_LT_,null));
});
/**
* Takes a function and a target channel, and returns a channel which
* applies f to each value before supplying it to the target channel.
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){if(typeof cljs.core.async.t9946 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t9946 = (function (ch,f,map_GT_,meta9947){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta9947 = meta9947;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t9946.cljs$lang$type = true;
cljs.core.async.t9946.cljs$lang$ctorStr = "cljs.core.async/t9946";
cljs.core.async.t9946.cljs$lang$ctorPrWriter = (function (this__3970__auto__,writer__3971__auto__,opt__3972__auto__){return cljs.core._write.call(null,writer__3971__auto__,"cljs.core.async/t9946");
});
cljs.core.async.t9946.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t9946.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn0);
});
cljs.core.async.t9946.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t9946.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t9946.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t9946.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t9946.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_9948){var self__ = this;
var _9948__$1 = this;return self__.meta9947;
});
cljs.core.async.t9946.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_9948,meta9947__$1){var self__ = this;
var _9948__$1 = this;return (new cljs.core.async.t9946(self__.ch,self__.f,self__.map_GT_,meta9947__$1));
});
cljs.core.async.__GT_t9946 = (function __GT_t9946(ch__$1,f__$1,map_GT___$1,meta9947){return (new cljs.core.async.t9946(ch__$1,f__$1,map_GT___$1,meta9947));
});
}
return (new cljs.core.async.t9946(ch,f,map_GT_,null));
});
/**
* Takes a predicate and a target channel, and returns a channel which
* supplies only the values for which the predicate returns true to the
* target channel.
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){if(typeof cljs.core.async.t9952 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t9952 = (function (ch,p,filter_GT_,meta9953){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta9953 = meta9953;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t9952.cljs$lang$type = true;
cljs.core.async.t9952.cljs$lang$ctorStr = "cljs.core.async/t9952";
cljs.core.async.t9952.cljs$lang$ctorPrWriter = (function (this__3970__auto__,writer__3971__auto__,opt__3972__auto__){return cljs.core._write.call(null,writer__3971__auto__,"cljs.core.async/t9952");
});
cljs.core.async.t9952.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t9952.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.p.call(null,val)))
{return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
} else
{return cljs.core.async.impl.channels.box.call(null,null);
}
});
cljs.core.async.t9952.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t9952.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t9952.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t9952.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t9952.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_9954){var self__ = this;
var _9954__$1 = this;return self__.meta9953;
});
cljs.core.async.t9952.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_9954,meta9953__$1){var self__ = this;
var _9954__$1 = this;return (new cljs.core.async.t9952(self__.ch,self__.p,self__.filter_GT_,meta9953__$1));
});
cljs.core.async.__GT_t9952 = (function __GT_t9952(ch__$1,p__$1,filter_GT___$1,meta9953){return (new cljs.core.async.t9952(ch__$1,p__$1,filter_GT___$1,meta9953));
});
}
return (new cljs.core.async.t9952(ch,p,filter_GT_,null));
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
var filter_LT___3 = (function (p,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__6049__auto___10037 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6050__auto__ = (function (){var switch__6034__auto__ = (function (state_10016){var state_val_10017 = (state_10016[1]);if((state_val_10017 === 1))
{var state_10016__$1 = state_10016;var statearr_10018_10038 = state_10016__$1;(statearr_10018_10038[2] = null);
(statearr_10018_10038[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10017 === 2))
{var state_10016__$1 = state_10016;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10016__$1,4,ch);
} else
{if((state_val_10017 === 3))
{var inst_10014 = (state_10016[2]);var state_10016__$1 = state_10016;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10016__$1,inst_10014);
} else
{if((state_val_10017 === 4))
{var inst_9998 = (state_10016[7]);var inst_9998__$1 = (state_10016[2]);var inst_9999 = (inst_9998__$1 == null);var state_10016__$1 = (function (){var statearr_10019 = state_10016;(statearr_10019[7] = inst_9998__$1);
return statearr_10019;
})();if(cljs.core.truth_(inst_9999))
{var statearr_10020_10039 = state_10016__$1;(statearr_10020_10039[1] = 5);
} else
{var statearr_10021_10040 = state_10016__$1;(statearr_10021_10040[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10017 === 5))
{var inst_10001 = cljs.core.async.close_BANG_.call(null,out);var state_10016__$1 = state_10016;var statearr_10022_10041 = state_10016__$1;(statearr_10022_10041[2] = inst_10001);
(statearr_10022_10041[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10017 === 6))
{var inst_9998 = (state_10016[7]);var inst_10003 = p.call(null,inst_9998);var state_10016__$1 = state_10016;if(cljs.core.truth_(inst_10003))
{var statearr_10023_10042 = state_10016__$1;(statearr_10023_10042[1] = 8);
} else
{var statearr_10024_10043 = state_10016__$1;(statearr_10024_10043[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10017 === 7))
{var inst_10012 = (state_10016[2]);var state_10016__$1 = state_10016;var statearr_10025_10044 = state_10016__$1;(statearr_10025_10044[2] = inst_10012);
(statearr_10025_10044[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10017 === 8))
{var inst_9998 = (state_10016[7]);var state_10016__$1 = state_10016;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_10016__$1,11,out,inst_9998);
} else
{if((state_val_10017 === 9))
{var state_10016__$1 = state_10016;var statearr_10026_10045 = state_10016__$1;(statearr_10026_10045[2] = null);
(statearr_10026_10045[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10017 === 10))
{var inst_10009 = (state_10016[2]);var state_10016__$1 = (function (){var statearr_10027 = state_10016;(statearr_10027[8] = inst_10009);
return statearr_10027;
})();var statearr_10028_10046 = state_10016__$1;(statearr_10028_10046[2] = null);
(statearr_10028_10046[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10017 === 11))
{var inst_10006 = (state_10016[2]);var state_10016__$1 = state_10016;var statearr_10029_10047 = state_10016__$1;(statearr_10029_10047[2] = inst_10006);
(statearr_10029_10047[1] = 10);
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
var state_machine__6035__auto____0 = (function (){var statearr_10033 = [null,null,null,null,null,null,null,null,null];(statearr_10033[0] = state_machine__6035__auto__);
(statearr_10033[1] = 1);
return statearr_10033;
});
var state_machine__6035__auto____1 = (function (state_10016){while(true){
var ret_value__6036__auto__ = (function (){try{while(true){
var result__6037__auto__ = switch__6034__auto__.call(null,state_10016);if(cljs.core.keyword_identical_QMARK_.call(null,result__6037__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6037__auto__;
}
break;
}
}catch (e10034){if((e10034 instanceof Object))
{var ex__6038__auto__ = e10034;var statearr_10035_10048 = state_10016;(statearr_10035_10048[5] = ex__6038__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10016);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e10034;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6036__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__10049 = state_10016;
state_10016 = G__10049;
continue;
}
} else
{return ret_value__6036__auto__;
}
break;
}
});
state_machine__6035__auto__ = function(state_10016){
switch(arguments.length){
case 0:
return state_machine__6035__auto____0.call(this);
case 1:
return state_machine__6035__auto____1.call(this,state_10016);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6035__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6035__auto____0;
state_machine__6035__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6035__auto____1;
return state_machine__6035__auto__;
})()
;})(switch__6034__auto__))
})();var state__6051__auto__ = (function (){var statearr_10036 = f__6050__auto__.call(null);(statearr_10036[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6049__auto___10037);
return statearr_10036;
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
cljs.core.async.mapcat_STAR_ = (function mapcat_STAR_(f,in$,out){var c__6049__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6050__auto__ = (function (){var switch__6034__auto__ = (function (state_10201){var state_val_10202 = (state_10201[1]);if((state_val_10202 === 1))
{var state_10201__$1 = state_10201;var statearr_10203_10240 = state_10201__$1;(statearr_10203_10240[2] = null);
(statearr_10203_10240[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10202 === 2))
{var state_10201__$1 = state_10201;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10201__$1,4,in$);
} else
{if((state_val_10202 === 3))
{var inst_10199 = (state_10201[2]);var state_10201__$1 = state_10201;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10201__$1,inst_10199);
} else
{if((state_val_10202 === 4))
{var inst_10147 = (state_10201[7]);var inst_10147__$1 = (state_10201[2]);var inst_10148 = (inst_10147__$1 == null);var state_10201__$1 = (function (){var statearr_10204 = state_10201;(statearr_10204[7] = inst_10147__$1);
return statearr_10204;
})();if(cljs.core.truth_(inst_10148))
{var statearr_10205_10241 = state_10201__$1;(statearr_10205_10241[1] = 5);
} else
{var statearr_10206_10242 = state_10201__$1;(statearr_10206_10242[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10202 === 5))
{var inst_10150 = cljs.core.async.close_BANG_.call(null,out);var state_10201__$1 = state_10201;var statearr_10207_10243 = state_10201__$1;(statearr_10207_10243[2] = inst_10150);
(statearr_10207_10243[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10202 === 6))
{var inst_10147 = (state_10201[7]);var inst_10152 = f.call(null,inst_10147);var inst_10157 = cljs.core.seq.call(null,inst_10152);var inst_10158 = inst_10157;var inst_10159 = null;var inst_10160 = 0;var inst_10161 = 0;var state_10201__$1 = (function (){var statearr_10208 = state_10201;(statearr_10208[8] = inst_10161);
(statearr_10208[9] = inst_10160);
(statearr_10208[10] = inst_10158);
(statearr_10208[11] = inst_10159);
return statearr_10208;
})();var statearr_10209_10244 = state_10201__$1;(statearr_10209_10244[2] = null);
(statearr_10209_10244[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10202 === 7))
{var inst_10197 = (state_10201[2]);var state_10201__$1 = state_10201;var statearr_10210_10245 = state_10201__$1;(statearr_10210_10245[2] = inst_10197);
(statearr_10210_10245[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10202 === 8))
{var inst_10161 = (state_10201[8]);var inst_10160 = (state_10201[9]);var inst_10163 = (inst_10161 < inst_10160);var inst_10164 = inst_10163;var state_10201__$1 = state_10201;if(cljs.core.truth_(inst_10164))
{var statearr_10211_10246 = state_10201__$1;(statearr_10211_10246[1] = 10);
} else
{var statearr_10212_10247 = state_10201__$1;(statearr_10212_10247[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10202 === 9))
{var inst_10194 = (state_10201[2]);var state_10201__$1 = (function (){var statearr_10213 = state_10201;(statearr_10213[12] = inst_10194);
return statearr_10213;
})();var statearr_10214_10248 = state_10201__$1;(statearr_10214_10248[2] = null);
(statearr_10214_10248[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10202 === 10))
{var inst_10161 = (state_10201[8]);var inst_10159 = (state_10201[11]);var inst_10166 = cljs.core._nth.call(null,inst_10159,inst_10161);var state_10201__$1 = state_10201;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_10201__$1,13,out,inst_10166);
} else
{if((state_val_10202 === 11))
{var inst_10172 = (state_10201[13]);var inst_10158 = (state_10201[10]);var inst_10172__$1 = cljs.core.seq.call(null,inst_10158);var state_10201__$1 = (function (){var statearr_10218 = state_10201;(statearr_10218[13] = inst_10172__$1);
return statearr_10218;
})();if(inst_10172__$1)
{var statearr_10219_10249 = state_10201__$1;(statearr_10219_10249[1] = 14);
} else
{var statearr_10220_10250 = state_10201__$1;(statearr_10220_10250[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10202 === 12))
{var inst_10192 = (state_10201[2]);var state_10201__$1 = state_10201;var statearr_10221_10251 = state_10201__$1;(statearr_10221_10251[2] = inst_10192);
(statearr_10221_10251[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10202 === 13))
{var inst_10161 = (state_10201[8]);var inst_10160 = (state_10201[9]);var inst_10158 = (state_10201[10]);var inst_10159 = (state_10201[11]);var inst_10168 = (state_10201[2]);var inst_10169 = (inst_10161 + 1);var tmp10215 = inst_10160;var tmp10216 = inst_10158;var tmp10217 = inst_10159;var inst_10158__$1 = tmp10216;var inst_10159__$1 = tmp10217;var inst_10160__$1 = tmp10215;var inst_10161__$1 = inst_10169;var state_10201__$1 = (function (){var statearr_10222 = state_10201;(statearr_10222[8] = inst_10161__$1);
(statearr_10222[9] = inst_10160__$1);
(statearr_10222[10] = inst_10158__$1);
(statearr_10222[14] = inst_10168);
(statearr_10222[11] = inst_10159__$1);
return statearr_10222;
})();var statearr_10223_10252 = state_10201__$1;(statearr_10223_10252[2] = null);
(statearr_10223_10252[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10202 === 14))
{var inst_10172 = (state_10201[13]);var inst_10174 = cljs.core.chunked_seq_QMARK_.call(null,inst_10172);var state_10201__$1 = state_10201;if(inst_10174)
{var statearr_10224_10253 = state_10201__$1;(statearr_10224_10253[1] = 17);
} else
{var statearr_10225_10254 = state_10201__$1;(statearr_10225_10254[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10202 === 15))
{var state_10201__$1 = state_10201;var statearr_10226_10255 = state_10201__$1;(statearr_10226_10255[2] = null);
(statearr_10226_10255[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10202 === 16))
{var inst_10190 = (state_10201[2]);var state_10201__$1 = state_10201;var statearr_10227_10256 = state_10201__$1;(statearr_10227_10256[2] = inst_10190);
(statearr_10227_10256[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10202 === 17))
{var inst_10172 = (state_10201[13]);var inst_10176 = cljs.core.chunk_first.call(null,inst_10172);var inst_10177 = cljs.core.chunk_rest.call(null,inst_10172);var inst_10178 = cljs.core.count.call(null,inst_10176);var inst_10158 = inst_10177;var inst_10159 = inst_10176;var inst_10160 = inst_10178;var inst_10161 = 0;var state_10201__$1 = (function (){var statearr_10228 = state_10201;(statearr_10228[8] = inst_10161);
(statearr_10228[9] = inst_10160);
(statearr_10228[10] = inst_10158);
(statearr_10228[11] = inst_10159);
return statearr_10228;
})();var statearr_10229_10257 = state_10201__$1;(statearr_10229_10257[2] = null);
(statearr_10229_10257[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10202 === 18))
{var inst_10172 = (state_10201[13]);var inst_10181 = cljs.core.first.call(null,inst_10172);var state_10201__$1 = state_10201;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_10201__$1,20,out,inst_10181);
} else
{if((state_val_10202 === 19))
{var inst_10187 = (state_10201[2]);var state_10201__$1 = state_10201;var statearr_10230_10258 = state_10201__$1;(statearr_10230_10258[2] = inst_10187);
(statearr_10230_10258[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10202 === 20))
{var inst_10172 = (state_10201[13]);var inst_10183 = (state_10201[2]);var inst_10184 = cljs.core.next.call(null,inst_10172);var inst_10158 = inst_10184;var inst_10159 = null;var inst_10160 = 0;var inst_10161 = 0;var state_10201__$1 = (function (){var statearr_10231 = state_10201;(statearr_10231[8] = inst_10161);
(statearr_10231[9] = inst_10160);
(statearr_10231[10] = inst_10158);
(statearr_10231[11] = inst_10159);
(statearr_10231[15] = inst_10183);
return statearr_10231;
})();var statearr_10232_10259 = state_10201__$1;(statearr_10232_10259[2] = null);
(statearr_10232_10259[1] = 8);
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
var state_machine__6035__auto____0 = (function (){var statearr_10236 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_10236[0] = state_machine__6035__auto__);
(statearr_10236[1] = 1);
return statearr_10236;
});
var state_machine__6035__auto____1 = (function (state_10201){while(true){
var ret_value__6036__auto__ = (function (){try{while(true){
var result__6037__auto__ = switch__6034__auto__.call(null,state_10201);if(cljs.core.keyword_identical_QMARK_.call(null,result__6037__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6037__auto__;
}
break;
}
}catch (e10237){if((e10237 instanceof Object))
{var ex__6038__auto__ = e10237;var statearr_10238_10260 = state_10201;(statearr_10238_10260[5] = ex__6038__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10201);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e10237;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6036__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__10261 = state_10201;
state_10201 = G__10261;
continue;
}
} else
{return ret_value__6036__auto__;
}
break;
}
});
state_machine__6035__auto__ = function(state_10201){
switch(arguments.length){
case 0:
return state_machine__6035__auto____0.call(this);
case 1:
return state_machine__6035__auto____1.call(this,state_10201);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6035__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6035__auto____0;
state_machine__6035__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6035__auto____1;
return state_machine__6035__auto__;
})()
;})(switch__6034__auto__))
})();var state__6051__auto__ = (function (){var statearr_10239 = f__6050__auto__.call(null);(statearr_10239[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6049__auto__);
return statearr_10239;
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
var pipe__3 = (function (from,to,close_QMARK_){var c__6049__auto___10342 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6050__auto__ = (function (){var switch__6034__auto__ = (function (state_10321){var state_val_10322 = (state_10321[1]);if((state_val_10322 === 1))
{var state_10321__$1 = state_10321;var statearr_10323_10343 = state_10321__$1;(statearr_10323_10343[2] = null);
(statearr_10323_10343[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10322 === 2))
{var state_10321__$1 = state_10321;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10321__$1,4,from);
} else
{if((state_val_10322 === 3))
{var inst_10319 = (state_10321[2]);var state_10321__$1 = state_10321;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10321__$1,inst_10319);
} else
{if((state_val_10322 === 4))
{var inst_10304 = (state_10321[7]);var inst_10304__$1 = (state_10321[2]);var inst_10305 = (inst_10304__$1 == null);var state_10321__$1 = (function (){var statearr_10324 = state_10321;(statearr_10324[7] = inst_10304__$1);
return statearr_10324;
})();if(cljs.core.truth_(inst_10305))
{var statearr_10325_10344 = state_10321__$1;(statearr_10325_10344[1] = 5);
} else
{var statearr_10326_10345 = state_10321__$1;(statearr_10326_10345[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10322 === 5))
{var state_10321__$1 = state_10321;if(cljs.core.truth_(close_QMARK_))
{var statearr_10327_10346 = state_10321__$1;(statearr_10327_10346[1] = 8);
} else
{var statearr_10328_10347 = state_10321__$1;(statearr_10328_10347[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10322 === 6))
{var inst_10304 = (state_10321[7]);var state_10321__$1 = state_10321;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_10321__$1,11,to,inst_10304);
} else
{if((state_val_10322 === 7))
{var inst_10317 = (state_10321[2]);var state_10321__$1 = state_10321;var statearr_10329_10348 = state_10321__$1;(statearr_10329_10348[2] = inst_10317);
(statearr_10329_10348[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10322 === 8))
{var inst_10308 = cljs.core.async.close_BANG_.call(null,to);var state_10321__$1 = state_10321;var statearr_10330_10349 = state_10321__$1;(statearr_10330_10349[2] = inst_10308);
(statearr_10330_10349[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10322 === 9))
{var state_10321__$1 = state_10321;var statearr_10331_10350 = state_10321__$1;(statearr_10331_10350[2] = null);
(statearr_10331_10350[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10322 === 10))
{var inst_10311 = (state_10321[2]);var state_10321__$1 = state_10321;var statearr_10332_10351 = state_10321__$1;(statearr_10332_10351[2] = inst_10311);
(statearr_10332_10351[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10322 === 11))
{var inst_10314 = (state_10321[2]);var state_10321__$1 = (function (){var statearr_10333 = state_10321;(statearr_10333[8] = inst_10314);
return statearr_10333;
})();var statearr_10334_10352 = state_10321__$1;(statearr_10334_10352[2] = null);
(statearr_10334_10352[1] = 2);
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
var state_machine__6035__auto____0 = (function (){var statearr_10338 = [null,null,null,null,null,null,null,null,null];(statearr_10338[0] = state_machine__6035__auto__);
(statearr_10338[1] = 1);
return statearr_10338;
});
var state_machine__6035__auto____1 = (function (state_10321){while(true){
var ret_value__6036__auto__ = (function (){try{while(true){
var result__6037__auto__ = switch__6034__auto__.call(null,state_10321);if(cljs.core.keyword_identical_QMARK_.call(null,result__6037__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6037__auto__;
}
break;
}
}catch (e10339){if((e10339 instanceof Object))
{var ex__6038__auto__ = e10339;var statearr_10340_10353 = state_10321;(statearr_10340_10353[5] = ex__6038__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10321);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e10339;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6036__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__10354 = state_10321;
state_10321 = G__10354;
continue;
}
} else
{return ret_value__6036__auto__;
}
break;
}
});
state_machine__6035__auto__ = function(state_10321){
switch(arguments.length){
case 0:
return state_machine__6035__auto____0.call(this);
case 1:
return state_machine__6035__auto____1.call(this,state_10321);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6035__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6035__auto____0;
state_machine__6035__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6035__auto____1;
return state_machine__6035__auto__;
})()
;})(switch__6034__auto__))
})();var state__6051__auto__ = (function (){var statearr_10341 = f__6050__auto__.call(null);(statearr_10341[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6049__auto___10342);
return statearr_10341;
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
var split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){var tc = cljs.core.async.chan.call(null,t_buf_or_n);var fc = cljs.core.async.chan.call(null,f_buf_or_n);var c__6049__auto___10441 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6050__auto__ = (function (){var switch__6034__auto__ = (function (state_10419){var state_val_10420 = (state_10419[1]);if((state_val_10420 === 1))
{var state_10419__$1 = state_10419;var statearr_10421_10442 = state_10419__$1;(statearr_10421_10442[2] = null);
(statearr_10421_10442[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10420 === 2))
{var state_10419__$1 = state_10419;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10419__$1,4,ch);
} else
{if((state_val_10420 === 3))
{var inst_10417 = (state_10419[2]);var state_10419__$1 = state_10419;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10419__$1,inst_10417);
} else
{if((state_val_10420 === 4))
{var inst_10400 = (state_10419[7]);var inst_10400__$1 = (state_10419[2]);var inst_10401 = (inst_10400__$1 == null);var state_10419__$1 = (function (){var statearr_10422 = state_10419;(statearr_10422[7] = inst_10400__$1);
return statearr_10422;
})();if(cljs.core.truth_(inst_10401))
{var statearr_10423_10443 = state_10419__$1;(statearr_10423_10443[1] = 5);
} else
{var statearr_10424_10444 = state_10419__$1;(statearr_10424_10444[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10420 === 5))
{var inst_10403 = cljs.core.async.close_BANG_.call(null,tc);var inst_10404 = cljs.core.async.close_BANG_.call(null,fc);var state_10419__$1 = (function (){var statearr_10425 = state_10419;(statearr_10425[8] = inst_10403);
return statearr_10425;
})();var statearr_10426_10445 = state_10419__$1;(statearr_10426_10445[2] = inst_10404);
(statearr_10426_10445[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10420 === 6))
{var inst_10400 = (state_10419[7]);var inst_10406 = p.call(null,inst_10400);var state_10419__$1 = state_10419;if(cljs.core.truth_(inst_10406))
{var statearr_10427_10446 = state_10419__$1;(statearr_10427_10446[1] = 9);
} else
{var statearr_10428_10447 = state_10419__$1;(statearr_10428_10447[1] = 10);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10420 === 7))
{var inst_10415 = (state_10419[2]);var state_10419__$1 = state_10419;var statearr_10429_10448 = state_10419__$1;(statearr_10429_10448[2] = inst_10415);
(statearr_10429_10448[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10420 === 8))
{var inst_10412 = (state_10419[2]);var state_10419__$1 = (function (){var statearr_10430 = state_10419;(statearr_10430[9] = inst_10412);
return statearr_10430;
})();var statearr_10431_10449 = state_10419__$1;(statearr_10431_10449[2] = null);
(statearr_10431_10449[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10420 === 9))
{var state_10419__$1 = state_10419;var statearr_10432_10450 = state_10419__$1;(statearr_10432_10450[2] = tc);
(statearr_10432_10450[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10420 === 10))
{var state_10419__$1 = state_10419;var statearr_10433_10451 = state_10419__$1;(statearr_10433_10451[2] = fc);
(statearr_10433_10451[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10420 === 11))
{var inst_10400 = (state_10419[7]);var inst_10410 = (state_10419[2]);var state_10419__$1 = state_10419;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_10419__$1,8,inst_10410,inst_10400);
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
var state_machine__6035__auto____0 = (function (){var statearr_10437 = [null,null,null,null,null,null,null,null,null,null];(statearr_10437[0] = state_machine__6035__auto__);
(statearr_10437[1] = 1);
return statearr_10437;
});
var state_machine__6035__auto____1 = (function (state_10419){while(true){
var ret_value__6036__auto__ = (function (){try{while(true){
var result__6037__auto__ = switch__6034__auto__.call(null,state_10419);if(cljs.core.keyword_identical_QMARK_.call(null,result__6037__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6037__auto__;
}
break;
}
}catch (e10438){if((e10438 instanceof Object))
{var ex__6038__auto__ = e10438;var statearr_10439_10452 = state_10419;(statearr_10439_10452[5] = ex__6038__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10419);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e10438;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6036__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__10453 = state_10419;
state_10419 = G__10453;
continue;
}
} else
{return ret_value__6036__auto__;
}
break;
}
});
state_machine__6035__auto__ = function(state_10419){
switch(arguments.length){
case 0:
return state_machine__6035__auto____0.call(this);
case 1:
return state_machine__6035__auto____1.call(this,state_10419);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6035__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6035__auto____0;
state_machine__6035__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6035__auto____1;
return state_machine__6035__auto__;
})()
;})(switch__6034__auto__))
})();var state__6051__auto__ = (function (){var statearr_10440 = f__6050__auto__.call(null);(statearr_10440[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6049__auto___10441);
return statearr_10440;
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
cljs.core.async.reduce = (function reduce(f,init,ch){var c__6049__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6050__auto__ = (function (){var switch__6034__auto__ = (function (state_10500){var state_val_10501 = (state_10500[1]);if((state_val_10501 === 7))
{var inst_10496 = (state_10500[2]);var state_10500__$1 = state_10500;var statearr_10502_10518 = state_10500__$1;(statearr_10502_10518[2] = inst_10496);
(statearr_10502_10518[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10501 === 6))
{var inst_10489 = (state_10500[7]);var inst_10486 = (state_10500[8]);var inst_10493 = f.call(null,inst_10486,inst_10489);var inst_10486__$1 = inst_10493;var state_10500__$1 = (function (){var statearr_10503 = state_10500;(statearr_10503[8] = inst_10486__$1);
return statearr_10503;
})();var statearr_10504_10519 = state_10500__$1;(statearr_10504_10519[2] = null);
(statearr_10504_10519[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10501 === 5))
{var inst_10486 = (state_10500[8]);var state_10500__$1 = state_10500;var statearr_10505_10520 = state_10500__$1;(statearr_10505_10520[2] = inst_10486);
(statearr_10505_10520[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10501 === 4))
{var inst_10489 = (state_10500[7]);var inst_10489__$1 = (state_10500[2]);var inst_10490 = (inst_10489__$1 == null);var state_10500__$1 = (function (){var statearr_10506 = state_10500;(statearr_10506[7] = inst_10489__$1);
return statearr_10506;
})();if(cljs.core.truth_(inst_10490))
{var statearr_10507_10521 = state_10500__$1;(statearr_10507_10521[1] = 5);
} else
{var statearr_10508_10522 = state_10500__$1;(statearr_10508_10522[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10501 === 3))
{var inst_10498 = (state_10500[2]);var state_10500__$1 = state_10500;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10500__$1,inst_10498);
} else
{if((state_val_10501 === 2))
{var state_10500__$1 = state_10500;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10500__$1,4,ch);
} else
{if((state_val_10501 === 1))
{var inst_10486 = init;var state_10500__$1 = (function (){var statearr_10509 = state_10500;(statearr_10509[8] = inst_10486);
return statearr_10509;
})();var statearr_10510_10523 = state_10500__$1;(statearr_10510_10523[2] = null);
(statearr_10510_10523[1] = 2);
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
var state_machine__6035__auto____0 = (function (){var statearr_10514 = [null,null,null,null,null,null,null,null,null];(statearr_10514[0] = state_machine__6035__auto__);
(statearr_10514[1] = 1);
return statearr_10514;
});
var state_machine__6035__auto____1 = (function (state_10500){while(true){
var ret_value__6036__auto__ = (function (){try{while(true){
var result__6037__auto__ = switch__6034__auto__.call(null,state_10500);if(cljs.core.keyword_identical_QMARK_.call(null,result__6037__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6037__auto__;
}
break;
}
}catch (e10515){if((e10515 instanceof Object))
{var ex__6038__auto__ = e10515;var statearr_10516_10524 = state_10500;(statearr_10516_10524[5] = ex__6038__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10500);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e10515;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6036__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__10525 = state_10500;
state_10500 = G__10525;
continue;
}
} else
{return ret_value__6036__auto__;
}
break;
}
});
state_machine__6035__auto__ = function(state_10500){
switch(arguments.length){
case 0:
return state_machine__6035__auto____0.call(this);
case 1:
return state_machine__6035__auto____1.call(this,state_10500);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6035__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6035__auto____0;
state_machine__6035__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6035__auto____1;
return state_machine__6035__auto__;
})()
;})(switch__6034__auto__))
})();var state__6051__auto__ = (function (){var statearr_10517 = f__6050__auto__.call(null);(statearr_10517[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6049__auto__);
return statearr_10517;
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
var onto_chan__3 = (function (ch,coll,close_QMARK_){var c__6049__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6050__auto__ = (function (){var switch__6034__auto__ = (function (state_10587){var state_val_10588 = (state_10587[1]);if((state_val_10588 === 1))
{var inst_10567 = cljs.core.seq.call(null,coll);var inst_10568 = inst_10567;var state_10587__$1 = (function (){var statearr_10589 = state_10587;(statearr_10589[7] = inst_10568);
return statearr_10589;
})();var statearr_10590_10608 = state_10587__$1;(statearr_10590_10608[2] = null);
(statearr_10590_10608[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10588 === 2))
{var inst_10568 = (state_10587[7]);var state_10587__$1 = state_10587;if(cljs.core.truth_(inst_10568))
{var statearr_10591_10609 = state_10587__$1;(statearr_10591_10609[1] = 4);
} else
{var statearr_10592_10610 = state_10587__$1;(statearr_10592_10610[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10588 === 3))
{var inst_10585 = (state_10587[2]);var state_10587__$1 = state_10587;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10587__$1,inst_10585);
} else
{if((state_val_10588 === 4))
{var inst_10568 = (state_10587[7]);var inst_10571 = cljs.core.first.call(null,inst_10568);var state_10587__$1 = state_10587;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_10587__$1,7,ch,inst_10571);
} else
{if((state_val_10588 === 5))
{var state_10587__$1 = state_10587;if(cljs.core.truth_(close_QMARK_))
{var statearr_10593_10611 = state_10587__$1;(statearr_10593_10611[1] = 8);
} else
{var statearr_10594_10612 = state_10587__$1;(statearr_10594_10612[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10588 === 6))
{var inst_10583 = (state_10587[2]);var state_10587__$1 = state_10587;var statearr_10595_10613 = state_10587__$1;(statearr_10595_10613[2] = inst_10583);
(statearr_10595_10613[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10588 === 7))
{var inst_10568 = (state_10587[7]);var inst_10573 = (state_10587[2]);var inst_10574 = cljs.core.next.call(null,inst_10568);var inst_10568__$1 = inst_10574;var state_10587__$1 = (function (){var statearr_10596 = state_10587;(statearr_10596[8] = inst_10573);
(statearr_10596[7] = inst_10568__$1);
return statearr_10596;
})();var statearr_10597_10614 = state_10587__$1;(statearr_10597_10614[2] = null);
(statearr_10597_10614[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10588 === 8))
{var inst_10578 = cljs.core.async.close_BANG_.call(null,ch);var state_10587__$1 = state_10587;var statearr_10598_10615 = state_10587__$1;(statearr_10598_10615[2] = inst_10578);
(statearr_10598_10615[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10588 === 9))
{var state_10587__$1 = state_10587;var statearr_10599_10616 = state_10587__$1;(statearr_10599_10616[2] = null);
(statearr_10599_10616[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10588 === 10))
{var inst_10581 = (state_10587[2]);var state_10587__$1 = state_10587;var statearr_10600_10617 = state_10587__$1;(statearr_10600_10617[2] = inst_10581);
(statearr_10600_10617[1] = 6);
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
var state_machine__6035__auto____0 = (function (){var statearr_10604 = [null,null,null,null,null,null,null,null,null];(statearr_10604[0] = state_machine__6035__auto__);
(statearr_10604[1] = 1);
return statearr_10604;
});
var state_machine__6035__auto____1 = (function (state_10587){while(true){
var ret_value__6036__auto__ = (function (){try{while(true){
var result__6037__auto__ = switch__6034__auto__.call(null,state_10587);if(cljs.core.keyword_identical_QMARK_.call(null,result__6037__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6037__auto__;
}
break;
}
}catch (e10605){if((e10605 instanceof Object))
{var ex__6038__auto__ = e10605;var statearr_10606_10618 = state_10587;(statearr_10606_10618[5] = ex__6038__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10587);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e10605;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6036__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__10619 = state_10587;
state_10587 = G__10619;
continue;
}
} else
{return ret_value__6036__auto__;
}
break;
}
});
state_machine__6035__auto__ = function(state_10587){
switch(arguments.length){
case 0:
return state_machine__6035__auto____0.call(this);
case 1:
return state_machine__6035__auto____1.call(this,state_10587);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6035__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6035__auto____0;
state_machine__6035__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6035__auto____1;
return state_machine__6035__auto__;
})()
;})(switch__6034__auto__))
})();var state__6051__auto__ = (function (){var statearr_10607 = f__6050__auto__.call(null);(statearr_10607[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6049__auto__);
return statearr_10607;
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
cljs.core.async.Mux = (function (){var obj10621 = {};return obj10621;
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
cljs.core.async.Mult = (function (){var obj10623 = {};return obj10623;
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
cljs.core.async.mult = (function mult(ch){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var m = (function (){if(typeof cljs.core.async.t10847 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t10847 = (function (cs,ch,mult,meta10848){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta10848 = meta10848;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t10847.cljs$lang$type = true;
cljs.core.async.t10847.cljs$lang$ctorStr = "cljs.core.async/t10847";
cljs.core.async.t10847.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__3970__auto__,writer__3971__auto__,opt__3972__auto__){return cljs.core._write.call(null,writer__3971__auto__,"cljs.core.async/t10847");
});})(cs))
;
cljs.core.async.t10847.prototype.cljs$core$async$Mult$ = true;
cljs.core.async.t10847.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$2,close_QMARK_){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$2,close_QMARK_);
return null;
});})(cs))
;
cljs.core.async.t10847.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$2){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$2);
return null;
});})(cs))
;
cljs.core.async.t10847.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return null;
});})(cs))
;
cljs.core.async.t10847.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t10847.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(cs))
;
cljs.core.async.t10847.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_10849){var self__ = this;
var _10849__$1 = this;return self__.meta10848;
});})(cs))
;
cljs.core.async.t10847.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_10849,meta10848__$1){var self__ = this;
var _10849__$1 = this;return (new cljs.core.async.t10847(self__.cs,self__.ch,self__.mult,meta10848__$1));
});})(cs))
;
cljs.core.async.__GT_t10847 = ((function (cs){
return (function __GT_t10847(cs__$1,ch__$1,mult__$1,meta10848){return (new cljs.core.async.t10847(cs__$1,ch__$1,mult__$1,meta10848));
});})(cs))
;
}
return (new cljs.core.async.t10847(cs,ch,mult,null));
})();var dchan = cljs.core.async.chan.call(null,1);var dctr = cljs.core.atom.call(null,null);var done = ((function (cs,m,dchan,dctr){
return (function (){if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === 0))
{return cljs.core.async.put_BANG_.call(null,dchan,true);
} else
{return null;
}
});})(cs,m,dchan,dctr))
;var c__6049__auto___11070 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6050__auto__ = (function (){var switch__6034__auto__ = (function (state_10984){var state_val_10985 = (state_10984[1]);if((state_val_10985 === 32))
{var inst_10928 = (state_10984[7]);var inst_10852 = (state_10984[8]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_10984,31,Object,null,30);var inst_10935 = cljs.core.async.put_BANG_.call(null,inst_10928,inst_10852,done);var state_10984__$1 = state_10984;var statearr_10986_11071 = state_10984__$1;(statearr_10986_11071[2] = inst_10935);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10984__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10985 === 1))
{var state_10984__$1 = state_10984;var statearr_10987_11072 = state_10984__$1;(statearr_10987_11072[2] = null);
(statearr_10987_11072[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10985 === 33))
{var inst_10941 = (state_10984[9]);var inst_10943 = cljs.core.chunked_seq_QMARK_.call(null,inst_10941);var state_10984__$1 = state_10984;if(inst_10943)
{var statearr_10988_11073 = state_10984__$1;(statearr_10988_11073[1] = 36);
} else
{var statearr_10989_11074 = state_10984__$1;(statearr_10989_11074[1] = 37);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10985 === 2))
{var state_10984__$1 = state_10984;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10984__$1,4,ch);
} else
{if((state_val_10985 === 34))
{var state_10984__$1 = state_10984;var statearr_10990_11075 = state_10984__$1;(statearr_10990_11075[2] = null);
(statearr_10990_11075[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10985 === 3))
{var inst_10982 = (state_10984[2]);var state_10984__$1 = state_10984;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10984__$1,inst_10982);
} else
{if((state_val_10985 === 35))
{var inst_10966 = (state_10984[2]);var state_10984__$1 = state_10984;var statearr_10991_11076 = state_10984__$1;(statearr_10991_11076[2] = inst_10966);
(statearr_10991_11076[1] = 29);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10985 === 4))
{var inst_10852 = (state_10984[8]);var inst_10852__$1 = (state_10984[2]);var inst_10853 = (inst_10852__$1 == null);var state_10984__$1 = (function (){var statearr_10992 = state_10984;(statearr_10992[8] = inst_10852__$1);
return statearr_10992;
})();if(cljs.core.truth_(inst_10853))
{var statearr_10993_11077 = state_10984__$1;(statearr_10993_11077[1] = 5);
} else
{var statearr_10994_11078 = state_10984__$1;(statearr_10994_11078[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10985 === 36))
{var inst_10941 = (state_10984[9]);var inst_10945 = cljs.core.chunk_first.call(null,inst_10941);var inst_10946 = cljs.core.chunk_rest.call(null,inst_10941);var inst_10947 = cljs.core.count.call(null,inst_10945);var inst_10920 = inst_10946;var inst_10921 = inst_10945;var inst_10922 = inst_10947;var inst_10923 = 0;var state_10984__$1 = (function (){var statearr_10995 = state_10984;(statearr_10995[10] = inst_10920);
(statearr_10995[11] = inst_10922);
(statearr_10995[12] = inst_10921);
(statearr_10995[13] = inst_10923);
return statearr_10995;
})();var statearr_10996_11079 = state_10984__$1;(statearr_10996_11079[2] = null);
(statearr_10996_11079[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10985 === 5))
{var inst_10859 = cljs.core.deref.call(null,cs);var inst_10860 = cljs.core.seq.call(null,inst_10859);var inst_10861 = inst_10860;var inst_10862 = null;var inst_10863 = 0;var inst_10864 = 0;var state_10984__$1 = (function (){var statearr_10997 = state_10984;(statearr_10997[14] = inst_10862);
(statearr_10997[15] = inst_10863);
(statearr_10997[16] = inst_10864);
(statearr_10997[17] = inst_10861);
return statearr_10997;
})();var statearr_10998_11080 = state_10984__$1;(statearr_10998_11080[2] = null);
(statearr_10998_11080[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10985 === 37))
{var inst_10941 = (state_10984[9]);var inst_10950 = cljs.core.first.call(null,inst_10941);var state_10984__$1 = (function (){var statearr_10999 = state_10984;(statearr_10999[18] = inst_10950);
return statearr_10999;
})();var statearr_11000_11081 = state_10984__$1;(statearr_11000_11081[2] = null);
(statearr_11000_11081[1] = 41);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10985 === 6))
{var inst_10912 = (state_10984[19]);var inst_10911 = cljs.core.deref.call(null,cs);var inst_10912__$1 = cljs.core.keys.call(null,inst_10911);var inst_10913 = cljs.core.count.call(null,inst_10912__$1);var inst_10914 = cljs.core.reset_BANG_.call(null,dctr,inst_10913);var inst_10919 = cljs.core.seq.call(null,inst_10912__$1);var inst_10920 = inst_10919;var inst_10921 = null;var inst_10922 = 0;var inst_10923 = 0;var state_10984__$1 = (function (){var statearr_11001 = state_10984;(statearr_11001[10] = inst_10920);
(statearr_11001[19] = inst_10912__$1);
(statearr_11001[20] = inst_10914);
(statearr_11001[11] = inst_10922);
(statearr_11001[12] = inst_10921);
(statearr_11001[13] = inst_10923);
return statearr_11001;
})();var statearr_11002_11082 = state_10984__$1;(statearr_11002_11082[2] = null);
(statearr_11002_11082[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10985 === 38))
{var inst_10963 = (state_10984[2]);var state_10984__$1 = state_10984;var statearr_11003_11083 = state_10984__$1;(statearr_11003_11083[2] = inst_10963);
(statearr_11003_11083[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10985 === 7))
{var inst_10980 = (state_10984[2]);var state_10984__$1 = state_10984;var statearr_11004_11084 = state_10984__$1;(statearr_11004_11084[2] = inst_10980);
(statearr_11004_11084[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10985 === 39))
{var inst_10941 = (state_10984[9]);var inst_10959 = (state_10984[2]);var inst_10960 = cljs.core.next.call(null,inst_10941);var inst_10920 = inst_10960;var inst_10921 = null;var inst_10922 = 0;var inst_10923 = 0;var state_10984__$1 = (function (){var statearr_11005 = state_10984;(statearr_11005[10] = inst_10920);
(statearr_11005[21] = inst_10959);
(statearr_11005[11] = inst_10922);
(statearr_11005[12] = inst_10921);
(statearr_11005[13] = inst_10923);
return statearr_11005;
})();var statearr_11006_11085 = state_10984__$1;(statearr_11006_11085[2] = null);
(statearr_11006_11085[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10985 === 8))
{var inst_10863 = (state_10984[15]);var inst_10864 = (state_10984[16]);var inst_10866 = (inst_10864 < inst_10863);var inst_10867 = inst_10866;var state_10984__$1 = state_10984;if(cljs.core.truth_(inst_10867))
{var statearr_11007_11086 = state_10984__$1;(statearr_11007_11086[1] = 10);
} else
{var statearr_11008_11087 = state_10984__$1;(statearr_11008_11087[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10985 === 40))
{var inst_10950 = (state_10984[18]);var inst_10951 = (state_10984[2]);var inst_10952 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_10953 = cljs.core.async.untap_STAR_.call(null,m,inst_10950);var state_10984__$1 = (function (){var statearr_11009 = state_10984;(statearr_11009[22] = inst_10951);
(statearr_11009[23] = inst_10952);
return statearr_11009;
})();var statearr_11010_11088 = state_10984__$1;(statearr_11010_11088[2] = inst_10953);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10984__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10985 === 9))
{var inst_10909 = (state_10984[2]);var state_10984__$1 = state_10984;var statearr_11011_11089 = state_10984__$1;(statearr_11011_11089[2] = inst_10909);
(statearr_11011_11089[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10985 === 41))
{var inst_10950 = (state_10984[18]);var inst_10852 = (state_10984[8]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_10984,40,Object,null,39);var inst_10957 = cljs.core.async.put_BANG_.call(null,inst_10950,inst_10852,done);var state_10984__$1 = state_10984;var statearr_11012_11090 = state_10984__$1;(statearr_11012_11090[2] = inst_10957);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10984__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10985 === 10))
{var inst_10862 = (state_10984[14]);var inst_10864 = (state_10984[16]);var inst_10870 = cljs.core._nth.call(null,inst_10862,inst_10864);var inst_10871 = cljs.core.nth.call(null,inst_10870,0,null);var inst_10872 = cljs.core.nth.call(null,inst_10870,1,null);var state_10984__$1 = (function (){var statearr_11013 = state_10984;(statearr_11013[24] = inst_10871);
return statearr_11013;
})();if(cljs.core.truth_(inst_10872))
{var statearr_11014_11091 = state_10984__$1;(statearr_11014_11091[1] = 13);
} else
{var statearr_11015_11092 = state_10984__$1;(statearr_11015_11092[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10985 === 42))
{var state_10984__$1 = state_10984;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10984__$1,45,dchan);
} else
{if((state_val_10985 === 11))
{var inst_10881 = (state_10984[25]);var inst_10861 = (state_10984[17]);var inst_10881__$1 = cljs.core.seq.call(null,inst_10861);var state_10984__$1 = (function (){var statearr_11016 = state_10984;(statearr_11016[25] = inst_10881__$1);
return statearr_11016;
})();if(inst_10881__$1)
{var statearr_11017_11093 = state_10984__$1;(statearr_11017_11093[1] = 16);
} else
{var statearr_11018_11094 = state_10984__$1;(statearr_11018_11094[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10985 === 43))
{var state_10984__$1 = state_10984;var statearr_11019_11095 = state_10984__$1;(statearr_11019_11095[2] = null);
(statearr_11019_11095[1] = 44);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10985 === 12))
{var inst_10907 = (state_10984[2]);var state_10984__$1 = state_10984;var statearr_11020_11096 = state_10984__$1;(statearr_11020_11096[2] = inst_10907);
(statearr_11020_11096[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10985 === 44))
{var inst_10977 = (state_10984[2]);var state_10984__$1 = (function (){var statearr_11021 = state_10984;(statearr_11021[26] = inst_10977);
return statearr_11021;
})();var statearr_11022_11097 = state_10984__$1;(statearr_11022_11097[2] = null);
(statearr_11022_11097[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10985 === 13))
{var inst_10871 = (state_10984[24]);var inst_10874 = cljs.core.async.close_BANG_.call(null,inst_10871);var state_10984__$1 = state_10984;var statearr_11023_11098 = state_10984__$1;(statearr_11023_11098[2] = inst_10874);
(statearr_11023_11098[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10985 === 45))
{var inst_10974 = (state_10984[2]);var state_10984__$1 = state_10984;var statearr_11027_11099 = state_10984__$1;(statearr_11027_11099[2] = inst_10974);
(statearr_11027_11099[1] = 44);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10985 === 14))
{var state_10984__$1 = state_10984;var statearr_11028_11100 = state_10984__$1;(statearr_11028_11100[2] = null);
(statearr_11028_11100[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10985 === 15))
{var inst_10862 = (state_10984[14]);var inst_10863 = (state_10984[15]);var inst_10864 = (state_10984[16]);var inst_10861 = (state_10984[17]);var inst_10877 = (state_10984[2]);var inst_10878 = (inst_10864 + 1);var tmp11024 = inst_10862;var tmp11025 = inst_10863;var tmp11026 = inst_10861;var inst_10861__$1 = tmp11026;var inst_10862__$1 = tmp11024;var inst_10863__$1 = tmp11025;var inst_10864__$1 = inst_10878;var state_10984__$1 = (function (){var statearr_11029 = state_10984;(statearr_11029[27] = inst_10877);
(statearr_11029[14] = inst_10862__$1);
(statearr_11029[15] = inst_10863__$1);
(statearr_11029[16] = inst_10864__$1);
(statearr_11029[17] = inst_10861__$1);
return statearr_11029;
})();var statearr_11030_11101 = state_10984__$1;(statearr_11030_11101[2] = null);
(statearr_11030_11101[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10985 === 16))
{var inst_10881 = (state_10984[25]);var inst_10883 = cljs.core.chunked_seq_QMARK_.call(null,inst_10881);var state_10984__$1 = state_10984;if(inst_10883)
{var statearr_11031_11102 = state_10984__$1;(statearr_11031_11102[1] = 19);
} else
{var statearr_11032_11103 = state_10984__$1;(statearr_11032_11103[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10985 === 17))
{var state_10984__$1 = state_10984;var statearr_11033_11104 = state_10984__$1;(statearr_11033_11104[2] = null);
(statearr_11033_11104[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10985 === 18))
{var inst_10905 = (state_10984[2]);var state_10984__$1 = state_10984;var statearr_11034_11105 = state_10984__$1;(statearr_11034_11105[2] = inst_10905);
(statearr_11034_11105[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10985 === 19))
{var inst_10881 = (state_10984[25]);var inst_10885 = cljs.core.chunk_first.call(null,inst_10881);var inst_10886 = cljs.core.chunk_rest.call(null,inst_10881);var inst_10887 = cljs.core.count.call(null,inst_10885);var inst_10861 = inst_10886;var inst_10862 = inst_10885;var inst_10863 = inst_10887;var inst_10864 = 0;var state_10984__$1 = (function (){var statearr_11035 = state_10984;(statearr_11035[14] = inst_10862);
(statearr_11035[15] = inst_10863);
(statearr_11035[16] = inst_10864);
(statearr_11035[17] = inst_10861);
return statearr_11035;
})();var statearr_11036_11106 = state_10984__$1;(statearr_11036_11106[2] = null);
(statearr_11036_11106[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10985 === 20))
{var inst_10881 = (state_10984[25]);var inst_10891 = cljs.core.first.call(null,inst_10881);var inst_10892 = cljs.core.nth.call(null,inst_10891,0,null);var inst_10893 = cljs.core.nth.call(null,inst_10891,1,null);var state_10984__$1 = (function (){var statearr_11037 = state_10984;(statearr_11037[28] = inst_10892);
return statearr_11037;
})();if(cljs.core.truth_(inst_10893))
{var statearr_11038_11107 = state_10984__$1;(statearr_11038_11107[1] = 22);
} else
{var statearr_11039_11108 = state_10984__$1;(statearr_11039_11108[1] = 23);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10985 === 21))
{var inst_10902 = (state_10984[2]);var state_10984__$1 = state_10984;var statearr_11040_11109 = state_10984__$1;(statearr_11040_11109[2] = inst_10902);
(statearr_11040_11109[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10985 === 22))
{var inst_10892 = (state_10984[28]);var inst_10895 = cljs.core.async.close_BANG_.call(null,inst_10892);var state_10984__$1 = state_10984;var statearr_11041_11110 = state_10984__$1;(statearr_11041_11110[2] = inst_10895);
(statearr_11041_11110[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10985 === 23))
{var state_10984__$1 = state_10984;var statearr_11042_11111 = state_10984__$1;(statearr_11042_11111[2] = null);
(statearr_11042_11111[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10985 === 24))
{var inst_10881 = (state_10984[25]);var inst_10898 = (state_10984[2]);var inst_10899 = cljs.core.next.call(null,inst_10881);var inst_10861 = inst_10899;var inst_10862 = null;var inst_10863 = 0;var inst_10864 = 0;var state_10984__$1 = (function (){var statearr_11043 = state_10984;(statearr_11043[14] = inst_10862);
(statearr_11043[15] = inst_10863);
(statearr_11043[16] = inst_10864);
(statearr_11043[17] = inst_10861);
(statearr_11043[29] = inst_10898);
return statearr_11043;
})();var statearr_11044_11112 = state_10984__$1;(statearr_11044_11112[2] = null);
(statearr_11044_11112[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10985 === 25))
{var inst_10922 = (state_10984[11]);var inst_10923 = (state_10984[13]);var inst_10925 = (inst_10923 < inst_10922);var inst_10926 = inst_10925;var state_10984__$1 = state_10984;if(cljs.core.truth_(inst_10926))
{var statearr_11045_11113 = state_10984__$1;(statearr_11045_11113[1] = 27);
} else
{var statearr_11046_11114 = state_10984__$1;(statearr_11046_11114[1] = 28);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10985 === 26))
{var inst_10912 = (state_10984[19]);var inst_10970 = (state_10984[2]);var inst_10971 = cljs.core.seq.call(null,inst_10912);var state_10984__$1 = (function (){var statearr_11047 = state_10984;(statearr_11047[30] = inst_10970);
return statearr_11047;
})();if(inst_10971)
{var statearr_11048_11115 = state_10984__$1;(statearr_11048_11115[1] = 42);
} else
{var statearr_11049_11116 = state_10984__$1;(statearr_11049_11116[1] = 43);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10985 === 27))
{var inst_10921 = (state_10984[12]);var inst_10923 = (state_10984[13]);var inst_10928 = cljs.core._nth.call(null,inst_10921,inst_10923);var state_10984__$1 = (function (){var statearr_11050 = state_10984;(statearr_11050[7] = inst_10928);
return statearr_11050;
})();var statearr_11051_11117 = state_10984__$1;(statearr_11051_11117[2] = null);
(statearr_11051_11117[1] = 32);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10985 === 28))
{var inst_10920 = (state_10984[10]);var inst_10941 = (state_10984[9]);var inst_10941__$1 = cljs.core.seq.call(null,inst_10920);var state_10984__$1 = (function (){var statearr_11055 = state_10984;(statearr_11055[9] = inst_10941__$1);
return statearr_11055;
})();if(inst_10941__$1)
{var statearr_11056_11118 = state_10984__$1;(statearr_11056_11118[1] = 33);
} else
{var statearr_11057_11119 = state_10984__$1;(statearr_11057_11119[1] = 34);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10985 === 29))
{var inst_10968 = (state_10984[2]);var state_10984__$1 = state_10984;var statearr_11058_11120 = state_10984__$1;(statearr_11058_11120[2] = inst_10968);
(statearr_11058_11120[1] = 26);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10985 === 30))
{var inst_10920 = (state_10984[10]);var inst_10922 = (state_10984[11]);var inst_10921 = (state_10984[12]);var inst_10923 = (state_10984[13]);var inst_10937 = (state_10984[2]);var inst_10938 = (inst_10923 + 1);var tmp11052 = inst_10920;var tmp11053 = inst_10922;var tmp11054 = inst_10921;var inst_10920__$1 = tmp11052;var inst_10921__$1 = tmp11054;var inst_10922__$1 = tmp11053;var inst_10923__$1 = inst_10938;var state_10984__$1 = (function (){var statearr_11059 = state_10984;(statearr_11059[10] = inst_10920__$1);
(statearr_11059[31] = inst_10937);
(statearr_11059[11] = inst_10922__$1);
(statearr_11059[12] = inst_10921__$1);
(statearr_11059[13] = inst_10923__$1);
return statearr_11059;
})();var statearr_11060_11121 = state_10984__$1;(statearr_11060_11121[2] = null);
(statearr_11060_11121[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10985 === 31))
{var inst_10928 = (state_10984[7]);var inst_10929 = (state_10984[2]);var inst_10930 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_10931 = cljs.core.async.untap_STAR_.call(null,m,inst_10928);var state_10984__$1 = (function (){var statearr_11061 = state_10984;(statearr_11061[32] = inst_10929);
(statearr_11061[33] = inst_10930);
return statearr_11061;
})();var statearr_11062_11122 = state_10984__$1;(statearr_11062_11122[2] = inst_10931);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10984__$1);
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
var state_machine__6035__auto____0 = (function (){var statearr_11066 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_11066[0] = state_machine__6035__auto__);
(statearr_11066[1] = 1);
return statearr_11066;
});
var state_machine__6035__auto____1 = (function (state_10984){while(true){
var ret_value__6036__auto__ = (function (){try{while(true){
var result__6037__auto__ = switch__6034__auto__.call(null,state_10984);if(cljs.core.keyword_identical_QMARK_.call(null,result__6037__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6037__auto__;
}
break;
}
}catch (e11067){if((e11067 instanceof Object))
{var ex__6038__auto__ = e11067;var statearr_11068_11123 = state_10984;(statearr_11068_11123[5] = ex__6038__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10984);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e11067;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6036__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__11124 = state_10984;
state_10984 = G__11124;
continue;
}
} else
{return ret_value__6036__auto__;
}
break;
}
});
state_machine__6035__auto__ = function(state_10984){
switch(arguments.length){
case 0:
return state_machine__6035__auto____0.call(this);
case 1:
return state_machine__6035__auto____1.call(this,state_10984);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6035__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6035__auto____0;
state_machine__6035__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6035__auto____1;
return state_machine__6035__auto__;
})()
;})(switch__6034__auto__))
})();var state__6051__auto__ = (function (){var statearr_11069 = f__6050__auto__.call(null);(statearr_11069[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6049__auto___11070);
return statearr_11069;
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
cljs.core.async.Mix = (function (){var obj11126 = {};return obj11126;
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
;var m = (function (){if(typeof cljs.core.async.t11236 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t11236 = (function (pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,meta11237){
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
this.meta11237 = meta11237;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t11236.cljs$lang$type = true;
cljs.core.async.t11236.cljs$lang$ctorStr = "cljs.core.async/t11236";
cljs.core.async.t11236.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__3970__auto__,writer__3971__auto__,opt__3972__auto__){return cljs.core._write.call(null,writer__3971__auto__,"cljs.core.async/t11236");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t11236.prototype.cljs$core$async$Mix$ = true;
cljs.core.async.t11236.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t11236.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t11236.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t11236.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t11236.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.solo_modes.call(null,mode)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",-1162732933,null),new cljs.core.Symbol(null,"mode","mode",-1637174436,null))))].join('')));
}
cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t11236.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t11236.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t11236.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_11238){var self__ = this;
var _11238__$1 = this;return self__.meta11237;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t11236.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_11238,meta11237__$1){var self__ = this;
var _11238__$1 = this;return (new cljs.core.async.t11236(self__.pick,self__.out,self__.attrs,self__.cs,self__.calc_state,self__.solo_modes,self__.mix,self__.changed,self__.change,self__.solo_mode,meta11237__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.__GT_t11236 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t11236(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta11237){return (new cljs.core.async.t11236(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta11237));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
}
return (new cljs.core.async.t11236(pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,null));
})();var c__6049__auto___11345 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6050__auto__ = (function (){var switch__6034__auto__ = (function (state_11303){var state_val_11304 = (state_11303[1]);if((state_val_11304 === 1))
{var inst_11242 = (state_11303[7]);var inst_11242__$1 = calc_state.call(null);var inst_11243 = cljs.core.seq_QMARK_.call(null,inst_11242__$1);var state_11303__$1 = (function (){var statearr_11305 = state_11303;(statearr_11305[7] = inst_11242__$1);
return statearr_11305;
})();if(inst_11243)
{var statearr_11306_11346 = state_11303__$1;(statearr_11306_11346[1] = 2);
} else
{var statearr_11307_11347 = state_11303__$1;(statearr_11307_11347[1] = 3);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11304 === 2))
{var inst_11242 = (state_11303[7]);var inst_11245 = cljs.core.apply.call(null,cljs.core.hash_map,inst_11242);var state_11303__$1 = state_11303;var statearr_11308_11348 = state_11303__$1;(statearr_11308_11348[2] = inst_11245);
(statearr_11308_11348[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11304 === 3))
{var inst_11242 = (state_11303[7]);var state_11303__$1 = state_11303;var statearr_11309_11349 = state_11303__$1;(statearr_11309_11349[2] = inst_11242);
(statearr_11309_11349[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11304 === 4))
{var inst_11242 = (state_11303[7]);var inst_11248 = (state_11303[2]);var inst_11249 = cljs.core.get.call(null,inst_11248,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_11250 = cljs.core.get.call(null,inst_11248,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_11251 = cljs.core.get.call(null,inst_11248,new cljs.core.Keyword(null,"solos","solos",1123523302));var inst_11252 = inst_11242;var state_11303__$1 = (function (){var statearr_11310 = state_11303;(statearr_11310[8] = inst_11252);
(statearr_11310[9] = inst_11250);
(statearr_11310[10] = inst_11251);
(statearr_11310[11] = inst_11249);
return statearr_11310;
})();var statearr_11311_11350 = state_11303__$1;(statearr_11311_11350[2] = null);
(statearr_11311_11350[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11304 === 5))
{var inst_11252 = (state_11303[8]);var inst_11255 = cljs.core.seq_QMARK_.call(null,inst_11252);var state_11303__$1 = state_11303;if(inst_11255)
{var statearr_11312_11351 = state_11303__$1;(statearr_11312_11351[1] = 7);
} else
{var statearr_11313_11352 = state_11303__$1;(statearr_11313_11352[1] = 8);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11304 === 6))
{var inst_11301 = (state_11303[2]);var state_11303__$1 = state_11303;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11303__$1,inst_11301);
} else
{if((state_val_11304 === 7))
{var inst_11252 = (state_11303[8]);var inst_11257 = cljs.core.apply.call(null,cljs.core.hash_map,inst_11252);var state_11303__$1 = state_11303;var statearr_11314_11353 = state_11303__$1;(statearr_11314_11353[2] = inst_11257);
(statearr_11314_11353[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11304 === 8))
{var inst_11252 = (state_11303[8]);var state_11303__$1 = state_11303;var statearr_11315_11354 = state_11303__$1;(statearr_11315_11354[2] = inst_11252);
(statearr_11315_11354[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11304 === 9))
{var inst_11260 = (state_11303[12]);var inst_11260__$1 = (state_11303[2]);var inst_11261 = cljs.core.get.call(null,inst_11260__$1,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_11262 = cljs.core.get.call(null,inst_11260__$1,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_11263 = cljs.core.get.call(null,inst_11260__$1,new cljs.core.Keyword(null,"solos","solos",1123523302));var state_11303__$1 = (function (){var statearr_11316 = state_11303;(statearr_11316[13] = inst_11263);
(statearr_11316[14] = inst_11262);
(statearr_11316[12] = inst_11260__$1);
return statearr_11316;
})();return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_11303__$1,10,inst_11261);
} else
{if((state_val_11304 === 10))
{var inst_11268 = (state_11303[15]);var inst_11267 = (state_11303[16]);var inst_11266 = (state_11303[2]);var inst_11267__$1 = cljs.core.nth.call(null,inst_11266,0,null);var inst_11268__$1 = cljs.core.nth.call(null,inst_11266,1,null);var inst_11269 = (inst_11267__$1 == null);var inst_11270 = cljs.core._EQ_.call(null,inst_11268__$1,change);var inst_11271 = (inst_11269) || (inst_11270);var state_11303__$1 = (function (){var statearr_11317 = state_11303;(statearr_11317[15] = inst_11268__$1);
(statearr_11317[16] = inst_11267__$1);
return statearr_11317;
})();if(cljs.core.truth_(inst_11271))
{var statearr_11318_11355 = state_11303__$1;(statearr_11318_11355[1] = 11);
} else
{var statearr_11319_11356 = state_11303__$1;(statearr_11319_11356[1] = 12);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11304 === 11))
{var inst_11267 = (state_11303[16]);var inst_11273 = (inst_11267 == null);var state_11303__$1 = state_11303;if(cljs.core.truth_(inst_11273))
{var statearr_11320_11357 = state_11303__$1;(statearr_11320_11357[1] = 14);
} else
{var statearr_11321_11358 = state_11303__$1;(statearr_11321_11358[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11304 === 12))
{var inst_11268 = (state_11303[15]);var inst_11263 = (state_11303[13]);var inst_11282 = (state_11303[17]);var inst_11282__$1 = inst_11263.call(null,inst_11268);var state_11303__$1 = (function (){var statearr_11322 = state_11303;(statearr_11322[17] = inst_11282__$1);
return statearr_11322;
})();if(cljs.core.truth_(inst_11282__$1))
{var statearr_11323_11359 = state_11303__$1;(statearr_11323_11359[1] = 17);
} else
{var statearr_11324_11360 = state_11303__$1;(statearr_11324_11360[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11304 === 13))
{var inst_11299 = (state_11303[2]);var state_11303__$1 = state_11303;var statearr_11325_11361 = state_11303__$1;(statearr_11325_11361[2] = inst_11299);
(statearr_11325_11361[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11304 === 14))
{var inst_11268 = (state_11303[15]);var inst_11275 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_11268);var state_11303__$1 = state_11303;var statearr_11326_11362 = state_11303__$1;(statearr_11326_11362[2] = inst_11275);
(statearr_11326_11362[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11304 === 15))
{var state_11303__$1 = state_11303;var statearr_11327_11363 = state_11303__$1;(statearr_11327_11363[2] = null);
(statearr_11327_11363[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11304 === 16))
{var inst_11278 = (state_11303[2]);var inst_11279 = calc_state.call(null);var inst_11252 = inst_11279;var state_11303__$1 = (function (){var statearr_11328 = state_11303;(statearr_11328[8] = inst_11252);
(statearr_11328[18] = inst_11278);
return statearr_11328;
})();var statearr_11329_11364 = state_11303__$1;(statearr_11329_11364[2] = null);
(statearr_11329_11364[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11304 === 17))
{var inst_11282 = (state_11303[17]);var state_11303__$1 = state_11303;var statearr_11330_11365 = state_11303__$1;(statearr_11330_11365[2] = inst_11282);
(statearr_11330_11365[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11304 === 18))
{var inst_11268 = (state_11303[15]);var inst_11263 = (state_11303[13]);var inst_11262 = (state_11303[14]);var inst_11285 = cljs.core.empty_QMARK_.call(null,inst_11263);var inst_11286 = inst_11262.call(null,inst_11268);var inst_11287 = cljs.core.not.call(null,inst_11286);var inst_11288 = (inst_11285) && (inst_11287);var state_11303__$1 = state_11303;var statearr_11331_11366 = state_11303__$1;(statearr_11331_11366[2] = inst_11288);
(statearr_11331_11366[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11304 === 19))
{var inst_11290 = (state_11303[2]);var state_11303__$1 = state_11303;if(cljs.core.truth_(inst_11290))
{var statearr_11332_11367 = state_11303__$1;(statearr_11332_11367[1] = 20);
} else
{var statearr_11333_11368 = state_11303__$1;(statearr_11333_11368[1] = 21);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11304 === 20))
{var inst_11267 = (state_11303[16]);var state_11303__$1 = state_11303;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11303__$1,23,out,inst_11267);
} else
{if((state_val_11304 === 21))
{var state_11303__$1 = state_11303;var statearr_11334_11369 = state_11303__$1;(statearr_11334_11369[2] = null);
(statearr_11334_11369[1] = 22);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11304 === 22))
{var inst_11260 = (state_11303[12]);var inst_11296 = (state_11303[2]);var inst_11252 = inst_11260;var state_11303__$1 = (function (){var statearr_11335 = state_11303;(statearr_11335[8] = inst_11252);
(statearr_11335[19] = inst_11296);
return statearr_11335;
})();var statearr_11336_11370 = state_11303__$1;(statearr_11336_11370[2] = null);
(statearr_11336_11370[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11304 === 23))
{var inst_11293 = (state_11303[2]);var state_11303__$1 = state_11303;var statearr_11337_11371 = state_11303__$1;(statearr_11337_11371[2] = inst_11293);
(statearr_11337_11371[1] = 22);
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
var state_machine__6035__auto____0 = (function (){var statearr_11341 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_11341[0] = state_machine__6035__auto__);
(statearr_11341[1] = 1);
return statearr_11341;
});
var state_machine__6035__auto____1 = (function (state_11303){while(true){
var ret_value__6036__auto__ = (function (){try{while(true){
var result__6037__auto__ = switch__6034__auto__.call(null,state_11303);if(cljs.core.keyword_identical_QMARK_.call(null,result__6037__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6037__auto__;
}
break;
}
}catch (e11342){if((e11342 instanceof Object))
{var ex__6038__auto__ = e11342;var statearr_11343_11372 = state_11303;(statearr_11343_11372[5] = ex__6038__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11303);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e11342;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6036__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__11373 = state_11303;
state_11303 = G__11373;
continue;
}
} else
{return ret_value__6036__auto__;
}
break;
}
});
state_machine__6035__auto__ = function(state_11303){
switch(arguments.length){
case 0:
return state_machine__6035__auto____0.call(this);
case 1:
return state_machine__6035__auto____1.call(this,state_11303);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6035__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6035__auto____0;
state_machine__6035__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6035__auto____1;
return state_machine__6035__auto__;
})()
;})(switch__6034__auto__))
})();var state__6051__auto__ = (function (){var statearr_11344 = f__6050__auto__.call(null);(statearr_11344[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6049__auto___11345);
return statearr_11344;
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
cljs.core.async.Pub = (function (){var obj11375 = {};return obj11375;
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
return (function (p1__11376_SHARP_){if(cljs.core.truth_(p1__11376_SHARP_.call(null,topic)))
{return p1__11376_SHARP_;
} else
{return cljs.core.assoc.call(null,p1__11376_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__3408__auto__,mults))
),topic);
}
});})(mults))
;var p = (function (){if(typeof cljs.core.async.t11501 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t11501 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta11502){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta11502 = meta11502;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t11501.cljs$lang$type = true;
cljs.core.async.t11501.cljs$lang$ctorStr = "cljs.core.async/t11501";
cljs.core.async.t11501.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__3970__auto__,writer__3971__auto__,opt__3972__auto__){return cljs.core._write.call(null,writer__3971__auto__,"cljs.core.async/t11501");
});})(mults,ensure_mult))
;
cljs.core.async.t11501.prototype.cljs$core$async$Pub$ = true;
cljs.core.async.t11501.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2,close_QMARK_){var self__ = this;
var p__$1 = this;var m = self__.ensure_mult.call(null,topic);return cljs.core.async.tap.call(null,m,ch__$2,close_QMARK_);
});})(mults,ensure_mult))
;
cljs.core.async.t11501.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2){var self__ = this;
var p__$1 = this;var temp__4092__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);if(cljs.core.truth_(temp__4092__auto__))
{var m = temp__4092__auto__;return cljs.core.async.untap.call(null,m,ch__$2);
} else
{return null;
}
});})(mults,ensure_mult))
;
cljs.core.async.t11501.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;
cljs.core.async.t11501.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){var self__ = this;
var ___$1 = this;return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;
cljs.core.async.t11501.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t11501.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(mults,ensure_mult))
;
cljs.core.async.t11501.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_11503){var self__ = this;
var _11503__$1 = this;return self__.meta11502;
});})(mults,ensure_mult))
;
cljs.core.async.t11501.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_11503,meta11502__$1){var self__ = this;
var _11503__$1 = this;return (new cljs.core.async.t11501(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta11502__$1));
});})(mults,ensure_mult))
;
cljs.core.async.__GT_t11501 = ((function (mults,ensure_mult){
return (function __GT_t11501(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta11502){return (new cljs.core.async.t11501(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta11502));
});})(mults,ensure_mult))
;
}
return (new cljs.core.async.t11501(ensure_mult,mults,buf_fn,topic_fn,ch,pub,null));
})();var c__6049__auto___11625 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6050__auto__ = (function (){var switch__6034__auto__ = (function (state_11577){var state_val_11578 = (state_11577[1]);if((state_val_11578 === 1))
{var state_11577__$1 = state_11577;var statearr_11579_11626 = state_11577__$1;(statearr_11579_11626[2] = null);
(statearr_11579_11626[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11578 === 2))
{var state_11577__$1 = state_11577;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11577__$1,4,ch);
} else
{if((state_val_11578 === 3))
{var inst_11575 = (state_11577[2]);var state_11577__$1 = state_11577;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11577__$1,inst_11575);
} else
{if((state_val_11578 === 4))
{var inst_11506 = (state_11577[7]);var inst_11506__$1 = (state_11577[2]);var inst_11507 = (inst_11506__$1 == null);var state_11577__$1 = (function (){var statearr_11580 = state_11577;(statearr_11580[7] = inst_11506__$1);
return statearr_11580;
})();if(cljs.core.truth_(inst_11507))
{var statearr_11581_11627 = state_11577__$1;(statearr_11581_11627[1] = 5);
} else
{var statearr_11582_11628 = state_11577__$1;(statearr_11582_11628[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11578 === 5))
{var inst_11513 = cljs.core.deref.call(null,mults);var inst_11514 = cljs.core.vals.call(null,inst_11513);var inst_11515 = cljs.core.seq.call(null,inst_11514);var inst_11516 = inst_11515;var inst_11517 = null;var inst_11518 = 0;var inst_11519 = 0;var state_11577__$1 = (function (){var statearr_11583 = state_11577;(statearr_11583[8] = inst_11516);
(statearr_11583[9] = inst_11518);
(statearr_11583[10] = inst_11517);
(statearr_11583[11] = inst_11519);
return statearr_11583;
})();var statearr_11584_11629 = state_11577__$1;(statearr_11584_11629[2] = null);
(statearr_11584_11629[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11578 === 6))
{var inst_11506 = (state_11577[7]);var inst_11556 = (state_11577[12]);var inst_11554 = (state_11577[13]);var inst_11554__$1 = topic_fn.call(null,inst_11506);var inst_11555 = cljs.core.deref.call(null,mults);var inst_11556__$1 = cljs.core.get.call(null,inst_11555,inst_11554__$1);var state_11577__$1 = (function (){var statearr_11585 = state_11577;(statearr_11585[12] = inst_11556__$1);
(statearr_11585[13] = inst_11554__$1);
return statearr_11585;
})();if(cljs.core.truth_(inst_11556__$1))
{var statearr_11586_11630 = state_11577__$1;(statearr_11586_11630[1] = 19);
} else
{var statearr_11587_11631 = state_11577__$1;(statearr_11587_11631[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11578 === 7))
{var inst_11573 = (state_11577[2]);var state_11577__$1 = state_11577;var statearr_11588_11632 = state_11577__$1;(statearr_11588_11632[2] = inst_11573);
(statearr_11588_11632[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11578 === 8))
{var inst_11518 = (state_11577[9]);var inst_11519 = (state_11577[11]);var inst_11521 = (inst_11519 < inst_11518);var inst_11522 = inst_11521;var state_11577__$1 = state_11577;if(cljs.core.truth_(inst_11522))
{var statearr_11592_11633 = state_11577__$1;(statearr_11592_11633[1] = 10);
} else
{var statearr_11593_11634 = state_11577__$1;(statearr_11593_11634[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11578 === 9))
{var inst_11552 = (state_11577[2]);var state_11577__$1 = state_11577;var statearr_11594_11635 = state_11577__$1;(statearr_11594_11635[2] = inst_11552);
(statearr_11594_11635[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11578 === 10))
{var inst_11516 = (state_11577[8]);var inst_11518 = (state_11577[9]);var inst_11517 = (state_11577[10]);var inst_11519 = (state_11577[11]);var inst_11524 = cljs.core._nth.call(null,inst_11517,inst_11519);var inst_11525 = cljs.core.async.muxch_STAR_.call(null,inst_11524);var inst_11526 = cljs.core.async.close_BANG_.call(null,inst_11525);var inst_11527 = (inst_11519 + 1);var tmp11589 = inst_11516;var tmp11590 = inst_11518;var tmp11591 = inst_11517;var inst_11516__$1 = tmp11589;var inst_11517__$1 = tmp11591;var inst_11518__$1 = tmp11590;var inst_11519__$1 = inst_11527;var state_11577__$1 = (function (){var statearr_11595 = state_11577;(statearr_11595[8] = inst_11516__$1);
(statearr_11595[9] = inst_11518__$1);
(statearr_11595[10] = inst_11517__$1);
(statearr_11595[11] = inst_11519__$1);
(statearr_11595[14] = inst_11526);
return statearr_11595;
})();var statearr_11596_11636 = state_11577__$1;(statearr_11596_11636[2] = null);
(statearr_11596_11636[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11578 === 11))
{var inst_11516 = (state_11577[8]);var inst_11530 = (state_11577[15]);var inst_11530__$1 = cljs.core.seq.call(null,inst_11516);var state_11577__$1 = (function (){var statearr_11597 = state_11577;(statearr_11597[15] = inst_11530__$1);
return statearr_11597;
})();if(inst_11530__$1)
{var statearr_11598_11637 = state_11577__$1;(statearr_11598_11637[1] = 13);
} else
{var statearr_11599_11638 = state_11577__$1;(statearr_11599_11638[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11578 === 12))
{var inst_11550 = (state_11577[2]);var state_11577__$1 = state_11577;var statearr_11600_11639 = state_11577__$1;(statearr_11600_11639[2] = inst_11550);
(statearr_11600_11639[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11578 === 13))
{var inst_11530 = (state_11577[15]);var inst_11532 = cljs.core.chunked_seq_QMARK_.call(null,inst_11530);var state_11577__$1 = state_11577;if(inst_11532)
{var statearr_11601_11640 = state_11577__$1;(statearr_11601_11640[1] = 16);
} else
{var statearr_11602_11641 = state_11577__$1;(statearr_11602_11641[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11578 === 14))
{var state_11577__$1 = state_11577;var statearr_11603_11642 = state_11577__$1;(statearr_11603_11642[2] = null);
(statearr_11603_11642[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11578 === 15))
{var inst_11548 = (state_11577[2]);var state_11577__$1 = state_11577;var statearr_11604_11643 = state_11577__$1;(statearr_11604_11643[2] = inst_11548);
(statearr_11604_11643[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11578 === 16))
{var inst_11530 = (state_11577[15]);var inst_11534 = cljs.core.chunk_first.call(null,inst_11530);var inst_11535 = cljs.core.chunk_rest.call(null,inst_11530);var inst_11536 = cljs.core.count.call(null,inst_11534);var inst_11516 = inst_11535;var inst_11517 = inst_11534;var inst_11518 = inst_11536;var inst_11519 = 0;var state_11577__$1 = (function (){var statearr_11605 = state_11577;(statearr_11605[8] = inst_11516);
(statearr_11605[9] = inst_11518);
(statearr_11605[10] = inst_11517);
(statearr_11605[11] = inst_11519);
return statearr_11605;
})();var statearr_11606_11644 = state_11577__$1;(statearr_11606_11644[2] = null);
(statearr_11606_11644[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11578 === 17))
{var inst_11530 = (state_11577[15]);var inst_11539 = cljs.core.first.call(null,inst_11530);var inst_11540 = cljs.core.async.muxch_STAR_.call(null,inst_11539);var inst_11541 = cljs.core.async.close_BANG_.call(null,inst_11540);var inst_11542 = cljs.core.next.call(null,inst_11530);var inst_11516 = inst_11542;var inst_11517 = null;var inst_11518 = 0;var inst_11519 = 0;var state_11577__$1 = (function (){var statearr_11607 = state_11577;(statearr_11607[16] = inst_11541);
(statearr_11607[8] = inst_11516);
(statearr_11607[9] = inst_11518);
(statearr_11607[10] = inst_11517);
(statearr_11607[11] = inst_11519);
return statearr_11607;
})();var statearr_11608_11645 = state_11577__$1;(statearr_11608_11645[2] = null);
(statearr_11608_11645[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11578 === 18))
{var inst_11545 = (state_11577[2]);var state_11577__$1 = state_11577;var statearr_11609_11646 = state_11577__$1;(statearr_11609_11646[2] = inst_11545);
(statearr_11609_11646[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11578 === 19))
{var state_11577__$1 = state_11577;var statearr_11610_11647 = state_11577__$1;(statearr_11610_11647[2] = null);
(statearr_11610_11647[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11578 === 20))
{var state_11577__$1 = state_11577;var statearr_11611_11648 = state_11577__$1;(statearr_11611_11648[2] = null);
(statearr_11611_11648[1] = 21);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11578 === 21))
{var inst_11570 = (state_11577[2]);var state_11577__$1 = (function (){var statearr_11612 = state_11577;(statearr_11612[17] = inst_11570);
return statearr_11612;
})();var statearr_11613_11649 = state_11577__$1;(statearr_11613_11649[2] = null);
(statearr_11613_11649[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11578 === 22))
{var inst_11567 = (state_11577[2]);var state_11577__$1 = state_11577;var statearr_11614_11650 = state_11577__$1;(statearr_11614_11650[2] = inst_11567);
(statearr_11614_11650[1] = 21);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11578 === 23))
{var inst_11554 = (state_11577[13]);var inst_11558 = (state_11577[2]);var inst_11559 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_11554);var state_11577__$1 = (function (){var statearr_11615 = state_11577;(statearr_11615[18] = inst_11558);
return statearr_11615;
})();var statearr_11616_11651 = state_11577__$1;(statearr_11616_11651[2] = inst_11559);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11577__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11578 === 24))
{var inst_11506 = (state_11577[7]);var inst_11556 = (state_11577[12]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_11577,23,Object,null,22);var inst_11563 = cljs.core.async.muxch_STAR_.call(null,inst_11556);var state_11577__$1 = state_11577;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11577__$1,25,inst_11563,inst_11506);
} else
{if((state_val_11578 === 25))
{var inst_11565 = (state_11577[2]);var state_11577__$1 = state_11577;var statearr_11617_11652 = state_11577__$1;(statearr_11617_11652[2] = inst_11565);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11577__$1);
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
var state_machine__6035__auto____0 = (function (){var statearr_11621 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_11621[0] = state_machine__6035__auto__);
(statearr_11621[1] = 1);
return statearr_11621;
});
var state_machine__6035__auto____1 = (function (state_11577){while(true){
var ret_value__6036__auto__ = (function (){try{while(true){
var result__6037__auto__ = switch__6034__auto__.call(null,state_11577);if(cljs.core.keyword_identical_QMARK_.call(null,result__6037__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6037__auto__;
}
break;
}
}catch (e11622){if((e11622 instanceof Object))
{var ex__6038__auto__ = e11622;var statearr_11623_11653 = state_11577;(statearr_11623_11653[5] = ex__6038__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11577);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e11622;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6036__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__11654 = state_11577;
state_11577 = G__11654;
continue;
}
} else
{return ret_value__6036__auto__;
}
break;
}
});
state_machine__6035__auto__ = function(state_11577){
switch(arguments.length){
case 0:
return state_machine__6035__auto____0.call(this);
case 1:
return state_machine__6035__auto____1.call(this,state_11577);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6035__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6035__auto____0;
state_machine__6035__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6035__auto____1;
return state_machine__6035__auto__;
})()
;})(switch__6034__auto__))
})();var state__6051__auto__ = (function (){var statearr_11624 = f__6050__auto__.call(null);(statearr_11624[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6049__auto___11625);
return statearr_11624;
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
,cljs.core.range.call(null,cnt));var c__6049__auto___11791 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6050__auto__ = (function (){var switch__6034__auto__ = (function (state_11761){var state_val_11762 = (state_11761[1]);if((state_val_11762 === 1))
{var state_11761__$1 = state_11761;var statearr_11763_11792 = state_11761__$1;(statearr_11763_11792[2] = null);
(statearr_11763_11792[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11762 === 2))
{var inst_11724 = cljs.core.reset_BANG_.call(null,dctr,cnt);var inst_11725 = 0;var state_11761__$1 = (function (){var statearr_11764 = state_11761;(statearr_11764[7] = inst_11725);
(statearr_11764[8] = inst_11724);
return statearr_11764;
})();var statearr_11765_11793 = state_11761__$1;(statearr_11765_11793[2] = null);
(statearr_11765_11793[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11762 === 3))
{var inst_11759 = (state_11761[2]);var state_11761__$1 = state_11761;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11761__$1,inst_11759);
} else
{if((state_val_11762 === 4))
{var inst_11725 = (state_11761[7]);var inst_11727 = (inst_11725 < cnt);var state_11761__$1 = state_11761;if(cljs.core.truth_(inst_11727))
{var statearr_11766_11794 = state_11761__$1;(statearr_11766_11794[1] = 6);
} else
{var statearr_11767_11795 = state_11761__$1;(statearr_11767_11795[1] = 7);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11762 === 5))
{var inst_11745 = (state_11761[2]);var state_11761__$1 = (function (){var statearr_11768 = state_11761;(statearr_11768[9] = inst_11745);
return statearr_11768;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11761__$1,12,dchan);
} else
{if((state_val_11762 === 6))
{var state_11761__$1 = state_11761;var statearr_11769_11796 = state_11761__$1;(statearr_11769_11796[2] = null);
(statearr_11769_11796[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11762 === 7))
{var state_11761__$1 = state_11761;var statearr_11770_11797 = state_11761__$1;(statearr_11770_11797[2] = null);
(statearr_11770_11797[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11762 === 8))
{var inst_11743 = (state_11761[2]);var state_11761__$1 = state_11761;var statearr_11771_11798 = state_11761__$1;(statearr_11771_11798[2] = inst_11743);
(statearr_11771_11798[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11762 === 9))
{var inst_11725 = (state_11761[7]);var inst_11738 = (state_11761[2]);var inst_11739 = (inst_11725 + 1);var inst_11725__$1 = inst_11739;var state_11761__$1 = (function (){var statearr_11772 = state_11761;(statearr_11772[7] = inst_11725__$1);
(statearr_11772[10] = inst_11738);
return statearr_11772;
})();var statearr_11773_11799 = state_11761__$1;(statearr_11773_11799[2] = null);
(statearr_11773_11799[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11762 === 10))
{var inst_11729 = (state_11761[2]);var inst_11730 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var state_11761__$1 = (function (){var statearr_11774 = state_11761;(statearr_11774[11] = inst_11729);
return statearr_11774;
})();var statearr_11775_11800 = state_11761__$1;(statearr_11775_11800[2] = inst_11730);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11761__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11762 === 11))
{var inst_11725 = (state_11761[7]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_11761,10,Object,null,9);var inst_11734 = chs__$1.call(null,inst_11725);var inst_11735 = done.call(null,inst_11725);var inst_11736 = cljs.core.async.take_BANG_.call(null,inst_11734,inst_11735);var state_11761__$1 = state_11761;var statearr_11776_11801 = state_11761__$1;(statearr_11776_11801[2] = inst_11736);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11761__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11762 === 12))
{var inst_11747 = (state_11761[12]);var inst_11747__$1 = (state_11761[2]);var inst_11748 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_11747__$1);var state_11761__$1 = (function (){var statearr_11777 = state_11761;(statearr_11777[12] = inst_11747__$1);
return statearr_11777;
})();if(cljs.core.truth_(inst_11748))
{var statearr_11778_11802 = state_11761__$1;(statearr_11778_11802[1] = 13);
} else
{var statearr_11779_11803 = state_11761__$1;(statearr_11779_11803[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11762 === 13))
{var inst_11750 = cljs.core.async.close_BANG_.call(null,out);var state_11761__$1 = state_11761;var statearr_11780_11804 = state_11761__$1;(statearr_11780_11804[2] = inst_11750);
(statearr_11780_11804[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11762 === 14))
{var inst_11747 = (state_11761[12]);var inst_11752 = cljs.core.apply.call(null,f,inst_11747);var state_11761__$1 = state_11761;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11761__$1,16,out,inst_11752);
} else
{if((state_val_11762 === 15))
{var inst_11757 = (state_11761[2]);var state_11761__$1 = state_11761;var statearr_11781_11805 = state_11761__$1;(statearr_11781_11805[2] = inst_11757);
(statearr_11781_11805[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11762 === 16))
{var inst_11754 = (state_11761[2]);var state_11761__$1 = (function (){var statearr_11782 = state_11761;(statearr_11782[13] = inst_11754);
return statearr_11782;
})();var statearr_11783_11806 = state_11761__$1;(statearr_11783_11806[2] = null);
(statearr_11783_11806[1] = 2);
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
var state_machine__6035__auto____0 = (function (){var statearr_11787 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_11787[0] = state_machine__6035__auto__);
(statearr_11787[1] = 1);
return statearr_11787;
});
var state_machine__6035__auto____1 = (function (state_11761){while(true){
var ret_value__6036__auto__ = (function (){try{while(true){
var result__6037__auto__ = switch__6034__auto__.call(null,state_11761);if(cljs.core.keyword_identical_QMARK_.call(null,result__6037__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6037__auto__;
}
break;
}
}catch (e11788){if((e11788 instanceof Object))
{var ex__6038__auto__ = e11788;var statearr_11789_11807 = state_11761;(statearr_11789_11807[5] = ex__6038__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11761);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e11788;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6036__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__11808 = state_11761;
state_11761 = G__11808;
continue;
}
} else
{return ret_value__6036__auto__;
}
break;
}
});
state_machine__6035__auto__ = function(state_11761){
switch(arguments.length){
case 0:
return state_machine__6035__auto____0.call(this);
case 1:
return state_machine__6035__auto____1.call(this,state_11761);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6035__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6035__auto____0;
state_machine__6035__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6035__auto____1;
return state_machine__6035__auto__;
})()
;})(switch__6034__auto__))
})();var state__6051__auto__ = (function (){var statearr_11790 = f__6050__auto__.call(null);(statearr_11790[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6049__auto___11791);
return statearr_11790;
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
var merge__2 = (function (chs,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__6049__auto___11916 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6050__auto__ = (function (){var switch__6034__auto__ = (function (state_11892){var state_val_11893 = (state_11892[1]);if((state_val_11893 === 1))
{var inst_11863 = cljs.core.vec.call(null,chs);var inst_11864 = inst_11863;var state_11892__$1 = (function (){var statearr_11894 = state_11892;(statearr_11894[7] = inst_11864);
return statearr_11894;
})();var statearr_11895_11917 = state_11892__$1;(statearr_11895_11917[2] = null);
(statearr_11895_11917[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11893 === 2))
{var inst_11864 = (state_11892[7]);var inst_11866 = cljs.core.count.call(null,inst_11864);var inst_11867 = (inst_11866 > 0);var state_11892__$1 = state_11892;if(cljs.core.truth_(inst_11867))
{var statearr_11896_11918 = state_11892__$1;(statearr_11896_11918[1] = 4);
} else
{var statearr_11897_11919 = state_11892__$1;(statearr_11897_11919[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11893 === 3))
{var inst_11890 = (state_11892[2]);var state_11892__$1 = state_11892;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11892__$1,inst_11890);
} else
{if((state_val_11893 === 4))
{var inst_11864 = (state_11892[7]);var state_11892__$1 = state_11892;return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_11892__$1,7,inst_11864);
} else
{if((state_val_11893 === 5))
{var inst_11886 = cljs.core.async.close_BANG_.call(null,out);var state_11892__$1 = state_11892;var statearr_11898_11920 = state_11892__$1;(statearr_11898_11920[2] = inst_11886);
(statearr_11898_11920[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11893 === 6))
{var inst_11888 = (state_11892[2]);var state_11892__$1 = state_11892;var statearr_11899_11921 = state_11892__$1;(statearr_11899_11921[2] = inst_11888);
(statearr_11899_11921[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11893 === 7))
{var inst_11872 = (state_11892[8]);var inst_11871 = (state_11892[9]);var inst_11871__$1 = (state_11892[2]);var inst_11872__$1 = cljs.core.nth.call(null,inst_11871__$1,0,null);var inst_11873 = cljs.core.nth.call(null,inst_11871__$1,1,null);var inst_11874 = (inst_11872__$1 == null);var state_11892__$1 = (function (){var statearr_11900 = state_11892;(statearr_11900[10] = inst_11873);
(statearr_11900[8] = inst_11872__$1);
(statearr_11900[9] = inst_11871__$1);
return statearr_11900;
})();if(cljs.core.truth_(inst_11874))
{var statearr_11901_11922 = state_11892__$1;(statearr_11901_11922[1] = 8);
} else
{var statearr_11902_11923 = state_11892__$1;(statearr_11902_11923[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11893 === 8))
{var inst_11873 = (state_11892[10]);var inst_11864 = (state_11892[7]);var inst_11872 = (state_11892[8]);var inst_11871 = (state_11892[9]);var inst_11876 = (function (){var c = inst_11873;var v = inst_11872;var vec__11869 = inst_11871;var cs = inst_11864;return ((function (c,v,vec__11869,cs,inst_11873,inst_11864,inst_11872,inst_11871,state_val_11893){
return (function (p1__11809_SHARP_){return cljs.core.not_EQ_.call(null,c,p1__11809_SHARP_);
});
;})(c,v,vec__11869,cs,inst_11873,inst_11864,inst_11872,inst_11871,state_val_11893))
})();var inst_11877 = cljs.core.filterv.call(null,inst_11876,inst_11864);var inst_11864__$1 = inst_11877;var state_11892__$1 = (function (){var statearr_11903 = state_11892;(statearr_11903[7] = inst_11864__$1);
return statearr_11903;
})();var statearr_11904_11924 = state_11892__$1;(statearr_11904_11924[2] = null);
(statearr_11904_11924[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11893 === 9))
{var inst_11872 = (state_11892[8]);var state_11892__$1 = state_11892;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11892__$1,11,out,inst_11872);
} else
{if((state_val_11893 === 10))
{var inst_11884 = (state_11892[2]);var state_11892__$1 = state_11892;var statearr_11906_11925 = state_11892__$1;(statearr_11906_11925[2] = inst_11884);
(statearr_11906_11925[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11893 === 11))
{var inst_11864 = (state_11892[7]);var inst_11881 = (state_11892[2]);var tmp11905 = inst_11864;var inst_11864__$1 = tmp11905;var state_11892__$1 = (function (){var statearr_11907 = state_11892;(statearr_11907[11] = inst_11881);
(statearr_11907[7] = inst_11864__$1);
return statearr_11907;
})();var statearr_11908_11926 = state_11892__$1;(statearr_11908_11926[2] = null);
(statearr_11908_11926[1] = 2);
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
var state_machine__6035__auto____0 = (function (){var statearr_11912 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_11912[0] = state_machine__6035__auto__);
(statearr_11912[1] = 1);
return statearr_11912;
});
var state_machine__6035__auto____1 = (function (state_11892){while(true){
var ret_value__6036__auto__ = (function (){try{while(true){
var result__6037__auto__ = switch__6034__auto__.call(null,state_11892);if(cljs.core.keyword_identical_QMARK_.call(null,result__6037__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6037__auto__;
}
break;
}
}catch (e11913){if((e11913 instanceof Object))
{var ex__6038__auto__ = e11913;var statearr_11914_11927 = state_11892;(statearr_11914_11927[5] = ex__6038__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11892);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e11913;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6036__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__11928 = state_11892;
state_11892 = G__11928;
continue;
}
} else
{return ret_value__6036__auto__;
}
break;
}
});
state_machine__6035__auto__ = function(state_11892){
switch(arguments.length){
case 0:
return state_machine__6035__auto____0.call(this);
case 1:
return state_machine__6035__auto____1.call(this,state_11892);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6035__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6035__auto____0;
state_machine__6035__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6035__auto____1;
return state_machine__6035__auto__;
})()
;})(switch__6034__auto__))
})();var state__6051__auto__ = (function (){var statearr_11915 = f__6050__auto__.call(null);(statearr_11915[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6049__auto___11916);
return statearr_11915;
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
var take__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__6049__auto___12021 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6050__auto__ = (function (){var switch__6034__auto__ = (function (state_11998){var state_val_11999 = (state_11998[1]);if((state_val_11999 === 1))
{var inst_11975 = 0;var state_11998__$1 = (function (){var statearr_12000 = state_11998;(statearr_12000[7] = inst_11975);
return statearr_12000;
})();var statearr_12001_12022 = state_11998__$1;(statearr_12001_12022[2] = null);
(statearr_12001_12022[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11999 === 2))
{var inst_11975 = (state_11998[7]);var inst_11977 = (inst_11975 < n);var state_11998__$1 = state_11998;if(cljs.core.truth_(inst_11977))
{var statearr_12002_12023 = state_11998__$1;(statearr_12002_12023[1] = 4);
} else
{var statearr_12003_12024 = state_11998__$1;(statearr_12003_12024[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11999 === 3))
{var inst_11995 = (state_11998[2]);var inst_11996 = cljs.core.async.close_BANG_.call(null,out);var state_11998__$1 = (function (){var statearr_12004 = state_11998;(statearr_12004[8] = inst_11995);
return statearr_12004;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11998__$1,inst_11996);
} else
{if((state_val_11999 === 4))
{var state_11998__$1 = state_11998;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11998__$1,7,ch);
} else
{if((state_val_11999 === 5))
{var state_11998__$1 = state_11998;var statearr_12005_12025 = state_11998__$1;(statearr_12005_12025[2] = null);
(statearr_12005_12025[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11999 === 6))
{var inst_11993 = (state_11998[2]);var state_11998__$1 = state_11998;var statearr_12006_12026 = state_11998__$1;(statearr_12006_12026[2] = inst_11993);
(statearr_12006_12026[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11999 === 7))
{var inst_11980 = (state_11998[9]);var inst_11980__$1 = (state_11998[2]);var inst_11981 = (inst_11980__$1 == null);var inst_11982 = cljs.core.not.call(null,inst_11981);var state_11998__$1 = (function (){var statearr_12007 = state_11998;(statearr_12007[9] = inst_11980__$1);
return statearr_12007;
})();if(inst_11982)
{var statearr_12008_12027 = state_11998__$1;(statearr_12008_12027[1] = 8);
} else
{var statearr_12009_12028 = state_11998__$1;(statearr_12009_12028[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11999 === 8))
{var inst_11980 = (state_11998[9]);var state_11998__$1 = state_11998;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11998__$1,11,out,inst_11980);
} else
{if((state_val_11999 === 9))
{var state_11998__$1 = state_11998;var statearr_12010_12029 = state_11998__$1;(statearr_12010_12029[2] = null);
(statearr_12010_12029[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11999 === 10))
{var inst_11990 = (state_11998[2]);var state_11998__$1 = state_11998;var statearr_12011_12030 = state_11998__$1;(statearr_12011_12030[2] = inst_11990);
(statearr_12011_12030[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11999 === 11))
{var inst_11975 = (state_11998[7]);var inst_11985 = (state_11998[2]);var inst_11986 = (inst_11975 + 1);var inst_11975__$1 = inst_11986;var state_11998__$1 = (function (){var statearr_12012 = state_11998;(statearr_12012[7] = inst_11975__$1);
(statearr_12012[10] = inst_11985);
return statearr_12012;
})();var statearr_12013_12031 = state_11998__$1;(statearr_12013_12031[2] = null);
(statearr_12013_12031[1] = 2);
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
var state_machine__6035__auto____0 = (function (){var statearr_12017 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_12017[0] = state_machine__6035__auto__);
(statearr_12017[1] = 1);
return statearr_12017;
});
var state_machine__6035__auto____1 = (function (state_11998){while(true){
var ret_value__6036__auto__ = (function (){try{while(true){
var result__6037__auto__ = switch__6034__auto__.call(null,state_11998);if(cljs.core.keyword_identical_QMARK_.call(null,result__6037__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6037__auto__;
}
break;
}
}catch (e12018){if((e12018 instanceof Object))
{var ex__6038__auto__ = e12018;var statearr_12019_12032 = state_11998;(statearr_12019_12032[5] = ex__6038__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11998);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e12018;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6036__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__12033 = state_11998;
state_11998 = G__12033;
continue;
}
} else
{return ret_value__6036__auto__;
}
break;
}
});
state_machine__6035__auto__ = function(state_11998){
switch(arguments.length){
case 0:
return state_machine__6035__auto____0.call(this);
case 1:
return state_machine__6035__auto____1.call(this,state_11998);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6035__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6035__auto____0;
state_machine__6035__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6035__auto____1;
return state_machine__6035__auto__;
})()
;})(switch__6034__auto__))
})();var state__6051__auto__ = (function (){var statearr_12020 = f__6050__auto__.call(null);(statearr_12020[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6049__auto___12021);
return statearr_12020;
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
var unique__2 = (function (ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__6049__auto___12130 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6050__auto__ = (function (){var switch__6034__auto__ = (function (state_12105){var state_val_12106 = (state_12105[1]);if((state_val_12106 === 1))
{var inst_12082 = null;var state_12105__$1 = (function (){var statearr_12107 = state_12105;(statearr_12107[7] = inst_12082);
return statearr_12107;
})();var statearr_12108_12131 = state_12105__$1;(statearr_12108_12131[2] = null);
(statearr_12108_12131[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12106 === 2))
{var state_12105__$1 = state_12105;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12105__$1,4,ch);
} else
{if((state_val_12106 === 3))
{var inst_12102 = (state_12105[2]);var inst_12103 = cljs.core.async.close_BANG_.call(null,out);var state_12105__$1 = (function (){var statearr_12109 = state_12105;(statearr_12109[8] = inst_12102);
return statearr_12109;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12105__$1,inst_12103);
} else
{if((state_val_12106 === 4))
{var inst_12085 = (state_12105[9]);var inst_12085__$1 = (state_12105[2]);var inst_12086 = (inst_12085__$1 == null);var inst_12087 = cljs.core.not.call(null,inst_12086);var state_12105__$1 = (function (){var statearr_12110 = state_12105;(statearr_12110[9] = inst_12085__$1);
return statearr_12110;
})();if(inst_12087)
{var statearr_12111_12132 = state_12105__$1;(statearr_12111_12132[1] = 5);
} else
{var statearr_12112_12133 = state_12105__$1;(statearr_12112_12133[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12106 === 5))
{var inst_12082 = (state_12105[7]);var inst_12085 = (state_12105[9]);var inst_12089 = cljs.core._EQ_.call(null,inst_12085,inst_12082);var state_12105__$1 = state_12105;if(inst_12089)
{var statearr_12113_12134 = state_12105__$1;(statearr_12113_12134[1] = 8);
} else
{var statearr_12114_12135 = state_12105__$1;(statearr_12114_12135[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12106 === 6))
{var state_12105__$1 = state_12105;var statearr_12116_12136 = state_12105__$1;(statearr_12116_12136[2] = null);
(statearr_12116_12136[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12106 === 7))
{var inst_12100 = (state_12105[2]);var state_12105__$1 = state_12105;var statearr_12117_12137 = state_12105__$1;(statearr_12117_12137[2] = inst_12100);
(statearr_12117_12137[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12106 === 8))
{var inst_12082 = (state_12105[7]);var tmp12115 = inst_12082;var inst_12082__$1 = tmp12115;var state_12105__$1 = (function (){var statearr_12118 = state_12105;(statearr_12118[7] = inst_12082__$1);
return statearr_12118;
})();var statearr_12119_12138 = state_12105__$1;(statearr_12119_12138[2] = null);
(statearr_12119_12138[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12106 === 9))
{var inst_12085 = (state_12105[9]);var state_12105__$1 = state_12105;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12105__$1,11,out,inst_12085);
} else
{if((state_val_12106 === 10))
{var inst_12097 = (state_12105[2]);var state_12105__$1 = state_12105;var statearr_12120_12139 = state_12105__$1;(statearr_12120_12139[2] = inst_12097);
(statearr_12120_12139[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12106 === 11))
{var inst_12085 = (state_12105[9]);var inst_12094 = (state_12105[2]);var inst_12082 = inst_12085;var state_12105__$1 = (function (){var statearr_12121 = state_12105;(statearr_12121[7] = inst_12082);
(statearr_12121[10] = inst_12094);
return statearr_12121;
})();var statearr_12122_12140 = state_12105__$1;(statearr_12122_12140[2] = null);
(statearr_12122_12140[1] = 2);
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
var state_machine__6035__auto____0 = (function (){var statearr_12126 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_12126[0] = state_machine__6035__auto__);
(statearr_12126[1] = 1);
return statearr_12126;
});
var state_machine__6035__auto____1 = (function (state_12105){while(true){
var ret_value__6036__auto__ = (function (){try{while(true){
var result__6037__auto__ = switch__6034__auto__.call(null,state_12105);if(cljs.core.keyword_identical_QMARK_.call(null,result__6037__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6037__auto__;
}
break;
}
}catch (e12127){if((e12127 instanceof Object))
{var ex__6038__auto__ = e12127;var statearr_12128_12141 = state_12105;(statearr_12128_12141[5] = ex__6038__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12105);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e12127;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6036__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__12142 = state_12105;
state_12105 = G__12142;
continue;
}
} else
{return ret_value__6036__auto__;
}
break;
}
});
state_machine__6035__auto__ = function(state_12105){
switch(arguments.length){
case 0:
return state_machine__6035__auto____0.call(this);
case 1:
return state_machine__6035__auto____1.call(this,state_12105);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6035__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6035__auto____0;
state_machine__6035__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6035__auto____1;
return state_machine__6035__auto__;
})()
;})(switch__6034__auto__))
})();var state__6051__auto__ = (function (){var statearr_12129 = f__6050__auto__.call(null);(statearr_12129[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6049__auto___12130);
return statearr_12129;
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
var partition__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__6049__auto___12277 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6050__auto__ = (function (){var switch__6034__auto__ = (function (state_12247){var state_val_12248 = (state_12247[1]);if((state_val_12248 === 1))
{var inst_12210 = (new Array(n));var inst_12211 = inst_12210;var inst_12212 = 0;var state_12247__$1 = (function (){var statearr_12249 = state_12247;(statearr_12249[7] = inst_12212);
(statearr_12249[8] = inst_12211);
return statearr_12249;
})();var statearr_12250_12278 = state_12247__$1;(statearr_12250_12278[2] = null);
(statearr_12250_12278[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12248 === 2))
{var state_12247__$1 = state_12247;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12247__$1,4,ch);
} else
{if((state_val_12248 === 3))
{var inst_12245 = (state_12247[2]);var state_12247__$1 = state_12247;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12247__$1,inst_12245);
} else
{if((state_val_12248 === 4))
{var inst_12215 = (state_12247[9]);var inst_12215__$1 = (state_12247[2]);var inst_12216 = (inst_12215__$1 == null);var inst_12217 = cljs.core.not.call(null,inst_12216);var state_12247__$1 = (function (){var statearr_12251 = state_12247;(statearr_12251[9] = inst_12215__$1);
return statearr_12251;
})();if(inst_12217)
{var statearr_12252_12279 = state_12247__$1;(statearr_12252_12279[1] = 5);
} else
{var statearr_12253_12280 = state_12247__$1;(statearr_12253_12280[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12248 === 5))
{var inst_12220 = (state_12247[10]);var inst_12215 = (state_12247[9]);var inst_12212 = (state_12247[7]);var inst_12211 = (state_12247[8]);var inst_12219 = (inst_12211[inst_12212] = inst_12215);var inst_12220__$1 = (inst_12212 + 1);var inst_12221 = (inst_12220__$1 < n);var state_12247__$1 = (function (){var statearr_12254 = state_12247;(statearr_12254[10] = inst_12220__$1);
(statearr_12254[11] = inst_12219);
return statearr_12254;
})();if(cljs.core.truth_(inst_12221))
{var statearr_12255_12281 = state_12247__$1;(statearr_12255_12281[1] = 8);
} else
{var statearr_12256_12282 = state_12247__$1;(statearr_12256_12282[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12248 === 6))
{var inst_12212 = (state_12247[7]);var inst_12233 = (inst_12212 > 0);var state_12247__$1 = state_12247;if(cljs.core.truth_(inst_12233))
{var statearr_12258_12283 = state_12247__$1;(statearr_12258_12283[1] = 12);
} else
{var statearr_12259_12284 = state_12247__$1;(statearr_12259_12284[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12248 === 7))
{var inst_12243 = (state_12247[2]);var state_12247__$1 = state_12247;var statearr_12260_12285 = state_12247__$1;(statearr_12260_12285[2] = inst_12243);
(statearr_12260_12285[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12248 === 8))
{var inst_12220 = (state_12247[10]);var inst_12211 = (state_12247[8]);var tmp12257 = inst_12211;var inst_12211__$1 = tmp12257;var inst_12212 = inst_12220;var state_12247__$1 = (function (){var statearr_12261 = state_12247;(statearr_12261[7] = inst_12212);
(statearr_12261[8] = inst_12211__$1);
return statearr_12261;
})();var statearr_12262_12286 = state_12247__$1;(statearr_12262_12286[2] = null);
(statearr_12262_12286[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12248 === 9))
{var inst_12211 = (state_12247[8]);var inst_12225 = cljs.core.vec.call(null,inst_12211);var state_12247__$1 = state_12247;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12247__$1,11,out,inst_12225);
} else
{if((state_val_12248 === 10))
{var inst_12231 = (state_12247[2]);var state_12247__$1 = state_12247;var statearr_12263_12287 = state_12247__$1;(statearr_12263_12287[2] = inst_12231);
(statearr_12263_12287[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12248 === 11))
{var inst_12227 = (state_12247[2]);var inst_12228 = (new Array(n));var inst_12211 = inst_12228;var inst_12212 = 0;var state_12247__$1 = (function (){var statearr_12264 = state_12247;(statearr_12264[12] = inst_12227);
(statearr_12264[7] = inst_12212);
(statearr_12264[8] = inst_12211);
return statearr_12264;
})();var statearr_12265_12288 = state_12247__$1;(statearr_12265_12288[2] = null);
(statearr_12265_12288[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12248 === 12))
{var inst_12211 = (state_12247[8]);var inst_12235 = cljs.core.vec.call(null,inst_12211);var state_12247__$1 = state_12247;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12247__$1,15,out,inst_12235);
} else
{if((state_val_12248 === 13))
{var state_12247__$1 = state_12247;var statearr_12266_12289 = state_12247__$1;(statearr_12266_12289[2] = null);
(statearr_12266_12289[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12248 === 14))
{var inst_12240 = (state_12247[2]);var inst_12241 = cljs.core.async.close_BANG_.call(null,out);var state_12247__$1 = (function (){var statearr_12267 = state_12247;(statearr_12267[13] = inst_12240);
return statearr_12267;
})();var statearr_12268_12290 = state_12247__$1;(statearr_12268_12290[2] = inst_12241);
(statearr_12268_12290[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12248 === 15))
{var inst_12237 = (state_12247[2]);var state_12247__$1 = state_12247;var statearr_12269_12291 = state_12247__$1;(statearr_12269_12291[2] = inst_12237);
(statearr_12269_12291[1] = 14);
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
var state_machine__6035__auto____0 = (function (){var statearr_12273 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_12273[0] = state_machine__6035__auto__);
(statearr_12273[1] = 1);
return statearr_12273;
});
var state_machine__6035__auto____1 = (function (state_12247){while(true){
var ret_value__6036__auto__ = (function (){try{while(true){
var result__6037__auto__ = switch__6034__auto__.call(null,state_12247);if(cljs.core.keyword_identical_QMARK_.call(null,result__6037__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6037__auto__;
}
break;
}
}catch (e12274){if((e12274 instanceof Object))
{var ex__6038__auto__ = e12274;var statearr_12275_12292 = state_12247;(statearr_12275_12292[5] = ex__6038__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12247);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e12274;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6036__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__12293 = state_12247;
state_12247 = G__12293;
continue;
}
} else
{return ret_value__6036__auto__;
}
break;
}
});
state_machine__6035__auto__ = function(state_12247){
switch(arguments.length){
case 0:
return state_machine__6035__auto____0.call(this);
case 1:
return state_machine__6035__auto____1.call(this,state_12247);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6035__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6035__auto____0;
state_machine__6035__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6035__auto____1;
return state_machine__6035__auto__;
})()
;})(switch__6034__auto__))
})();var state__6051__auto__ = (function (){var statearr_12276 = f__6050__auto__.call(null);(statearr_12276[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6049__auto___12277);
return statearr_12276;
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
var partition_by__3 = (function (f,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__6049__auto___12436 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6050__auto__ = (function (){var switch__6034__auto__ = (function (state_12406){var state_val_12407 = (state_12406[1]);if((state_val_12407 === 1))
{var inst_12365 = [];var inst_12366 = inst_12365;var inst_12367 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",4382193538);var state_12406__$1 = (function (){var statearr_12408 = state_12406;(statearr_12408[7] = inst_12367);
(statearr_12408[8] = inst_12366);
return statearr_12408;
})();var statearr_12409_12437 = state_12406__$1;(statearr_12409_12437[2] = null);
(statearr_12409_12437[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12407 === 2))
{var state_12406__$1 = state_12406;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12406__$1,4,ch);
} else
{if((state_val_12407 === 3))
{var inst_12404 = (state_12406[2]);var state_12406__$1 = state_12406;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12406__$1,inst_12404);
} else
{if((state_val_12407 === 4))
{var inst_12370 = (state_12406[9]);var inst_12370__$1 = (state_12406[2]);var inst_12371 = (inst_12370__$1 == null);var inst_12372 = cljs.core.not.call(null,inst_12371);var state_12406__$1 = (function (){var statearr_12410 = state_12406;(statearr_12410[9] = inst_12370__$1);
return statearr_12410;
})();if(inst_12372)
{var statearr_12411_12438 = state_12406__$1;(statearr_12411_12438[1] = 5);
} else
{var statearr_12412_12439 = state_12406__$1;(statearr_12412_12439[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12407 === 5))
{var inst_12374 = (state_12406[10]);var inst_12367 = (state_12406[7]);var inst_12370 = (state_12406[9]);var inst_12374__$1 = f.call(null,inst_12370);var inst_12375 = cljs.core._EQ_.call(null,inst_12374__$1,inst_12367);var inst_12376 = cljs.core.keyword_identical_QMARK_.call(null,inst_12367,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",4382193538));var inst_12377 = (inst_12375) || (inst_12376);var state_12406__$1 = (function (){var statearr_12413 = state_12406;(statearr_12413[10] = inst_12374__$1);
return statearr_12413;
})();if(cljs.core.truth_(inst_12377))
{var statearr_12414_12440 = state_12406__$1;(statearr_12414_12440[1] = 8);
} else
{var statearr_12415_12441 = state_12406__$1;(statearr_12415_12441[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12407 === 6))
{var inst_12366 = (state_12406[8]);var inst_12391 = inst_12366.length;var inst_12392 = (inst_12391 > 0);var state_12406__$1 = state_12406;if(cljs.core.truth_(inst_12392))
{var statearr_12417_12442 = state_12406__$1;(statearr_12417_12442[1] = 12);
} else
{var statearr_12418_12443 = state_12406__$1;(statearr_12418_12443[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12407 === 7))
{var inst_12402 = (state_12406[2]);var state_12406__$1 = state_12406;var statearr_12419_12444 = state_12406__$1;(statearr_12419_12444[2] = inst_12402);
(statearr_12419_12444[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12407 === 8))
{var inst_12374 = (state_12406[10]);var inst_12366 = (state_12406[8]);var inst_12370 = (state_12406[9]);var inst_12379 = inst_12366.push(inst_12370);var tmp12416 = inst_12366;var inst_12366__$1 = tmp12416;var inst_12367 = inst_12374;var state_12406__$1 = (function (){var statearr_12420 = state_12406;(statearr_12420[11] = inst_12379);
(statearr_12420[7] = inst_12367);
(statearr_12420[8] = inst_12366__$1);
return statearr_12420;
})();var statearr_12421_12445 = state_12406__$1;(statearr_12421_12445[2] = null);
(statearr_12421_12445[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12407 === 9))
{var inst_12366 = (state_12406[8]);var inst_12382 = cljs.core.vec.call(null,inst_12366);var state_12406__$1 = state_12406;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12406__$1,11,out,inst_12382);
} else
{if((state_val_12407 === 10))
{var inst_12389 = (state_12406[2]);var state_12406__$1 = state_12406;var statearr_12422_12446 = state_12406__$1;(statearr_12422_12446[2] = inst_12389);
(statearr_12422_12446[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12407 === 11))
{var inst_12374 = (state_12406[10]);var inst_12370 = (state_12406[9]);var inst_12384 = (state_12406[2]);var inst_12385 = [];var inst_12386 = inst_12385.push(inst_12370);var inst_12366 = inst_12385;var inst_12367 = inst_12374;var state_12406__$1 = (function (){var statearr_12423 = state_12406;(statearr_12423[12] = inst_12386);
(statearr_12423[13] = inst_12384);
(statearr_12423[7] = inst_12367);
(statearr_12423[8] = inst_12366);
return statearr_12423;
})();var statearr_12424_12447 = state_12406__$1;(statearr_12424_12447[2] = null);
(statearr_12424_12447[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12407 === 12))
{var inst_12366 = (state_12406[8]);var inst_12394 = cljs.core.vec.call(null,inst_12366);var state_12406__$1 = state_12406;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12406__$1,15,out,inst_12394);
} else
{if((state_val_12407 === 13))
{var state_12406__$1 = state_12406;var statearr_12425_12448 = state_12406__$1;(statearr_12425_12448[2] = null);
(statearr_12425_12448[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12407 === 14))
{var inst_12399 = (state_12406[2]);var inst_12400 = cljs.core.async.close_BANG_.call(null,out);var state_12406__$1 = (function (){var statearr_12426 = state_12406;(statearr_12426[14] = inst_12399);
return statearr_12426;
})();var statearr_12427_12449 = state_12406__$1;(statearr_12427_12449[2] = inst_12400);
(statearr_12427_12449[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12407 === 15))
{var inst_12396 = (state_12406[2]);var state_12406__$1 = state_12406;var statearr_12428_12450 = state_12406__$1;(statearr_12428_12450[2] = inst_12396);
(statearr_12428_12450[1] = 14);
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
var state_machine__6035__auto____0 = (function (){var statearr_12432 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_12432[0] = state_machine__6035__auto__);
(statearr_12432[1] = 1);
return statearr_12432;
});
var state_machine__6035__auto____1 = (function (state_12406){while(true){
var ret_value__6036__auto__ = (function (){try{while(true){
var result__6037__auto__ = switch__6034__auto__.call(null,state_12406);if(cljs.core.keyword_identical_QMARK_.call(null,result__6037__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6037__auto__;
}
break;
}
}catch (e12433){if((e12433 instanceof Object))
{var ex__6038__auto__ = e12433;var statearr_12434_12451 = state_12406;(statearr_12434_12451[5] = ex__6038__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12406);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e12433;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6036__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__12452 = state_12406;
state_12406 = G__12452;
continue;
}
} else
{return ret_value__6036__auto__;
}
break;
}
});
state_machine__6035__auto__ = function(state_12406){
switch(arguments.length){
case 0:
return state_machine__6035__auto____0.call(this);
case 1:
return state_machine__6035__auto____1.call(this,state_12406);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6035__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6035__auto____0;
state_machine__6035__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6035__auto____1;
return state_machine__6035__auto__;
})()
;})(switch__6034__auto__))
})();var state__6051__auto__ = (function (){var statearr_12435 = f__6050__auto__.call(null);(statearr_12435[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6049__auto___12436);
return statearr_12435;
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
