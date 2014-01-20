// Compiled by ClojureScript 0.0-2138
goog.provide('pylon.classes');
goog.require('cljs.core');
pylon.classes.method_fn_name = (function method_fn_name(method_name){return [cljs.core.str("__pylon$method$"),cljs.core.str(method_name)].join('');
});
pylon.classes.pylon_prop_QMARK_ = (function pylon_prop_QMARK_(prop){return cljs.core._EQ_.call(null,"__pylon$",cljs.core.subs.call(null,prop,0,8));
});
pylon.classes.pylon_parent_proto = (function pylon_parent_proto(p){var temp__4092__auto__ = (p["__pylon$superclass"]);if(cljs.core.truth_(temp__4092__auto__))
{var parent = temp__4092__auto__;var temp__4092__auto____$1 = parent.prototype;if(cljs.core.truth_(temp__4092__auto____$1))
{var proto = temp__4092__auto____$1;if(cljs.core.truth_(proto.hasOwnProperty("__pylon$classname")))
{return proto;
} else
{return null;
}
} else
{return null;
}
} else
{return null;
}
});
pylon.classes.find_props = (function find_props(p){var parent = pylon.classes.pylon_parent_proto.call(null,p);var props = cljs.core.remove.call(null,pylon.classes.pylon_prop_QMARK_,Object.getOwnPropertyNames(p));if(cljs.core.truth_(parent))
{return cljs.core.concat.call(null,props,find_props.call(null,parent));
} else
{return props;
}
});
pylon.classes.create_ctor = (function create_ctor(){return (function() { 
var ctor__delegate = function (args){var this$ = this;var p_9869 = Object.getPrototypeOf(this$);var superclass_9870 = (p_9869["__pylon$superclass"]);var seq__9865_9871 = cljs.core.seq.call(null,cljs.core.apply.call(null,cljs.core.hash_set,pylon.classes.find_props.call(null,p_9869)));var chunk__9866_9872 = null;var count__9867_9873 = 0;var i__9868_9874 = 0;while(true){
if((i__9868_9874 < count__9867_9873))
{var bind_9875 = cljs.core._nth.call(null,chunk__9866_9872,i__9868_9874);var func_9876 = (this$[bind_9875]);if(cljs.core.fn_QMARK_.call(null,func_9876))
{(this$[bind_9875] = goog.bind(func_9876,this$));
} else
{}
{
var G__9877 = seq__9865_9871;
var G__9878 = chunk__9866_9872;
var G__9879 = count__9867_9873;
var G__9880 = (i__9868_9874 + 1);
seq__9865_9871 = G__9877;
chunk__9866_9872 = G__9878;
count__9867_9873 = G__9879;
i__9868_9874 = G__9880;
continue;
}
} else
{var temp__4092__auto___9881 = cljs.core.seq.call(null,seq__9865_9871);if(temp__4092__auto___9881)
{var seq__9865_9882__$1 = temp__4092__auto___9881;if(cljs.core.chunked_seq_QMARK_.call(null,seq__9865_9882__$1))
{var c__4150__auto___9883 = cljs.core.chunk_first.call(null,seq__9865_9882__$1);{
var G__9884 = cljs.core.chunk_rest.call(null,seq__9865_9882__$1);
var G__9885 = c__4150__auto___9883;
var G__9886 = cljs.core.count.call(null,c__4150__auto___9883);
var G__9887 = 0;
seq__9865_9871 = G__9884;
chunk__9866_9872 = G__9885;
count__9867_9873 = G__9886;
i__9868_9874 = G__9887;
continue;
}
} else
{var bind_9888 = cljs.core.first.call(null,seq__9865_9882__$1);var func_9889 = (this$[bind_9888]);if(cljs.core.fn_QMARK_.call(null,func_9889))
{(this$[bind_9888] = goog.bind(func_9889,this$));
} else
{}
{
var G__9890 = cljs.core.next.call(null,seq__9865_9882__$1);
var G__9891 = null;
var G__9892 = 0;
var G__9893 = 0;
seq__9865_9871 = G__9890;
chunk__9866_9872 = G__9891;
count__9867_9873 = G__9892;
i__9868_9874 = G__9893;
continue;
}
}
} else
{}
}
break;
}
var temp__4092__auto___9894 = this$.constructor;if(cljs.core.truth_(temp__4092__auto___9894))
{var constructor_9895 = temp__4092__auto___9894;constructor_9895.apply(this$,cljs.core.into_array.call(null,args));
} else
{}
return this$;
};
var ctor = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return ctor__delegate.call(this,args);};
ctor.cljs$lang$maxFixedArity = 0;
ctor.cljs$lang$applyTo = (function (arglist__9896){
var args = cljs.core.seq(arglist__9896);
return ctor__delegate(args);
});
ctor.cljs$core$IFn$_invoke$arity$variadic = ctor__delegate;
return ctor;
})()
;
});
pylon.classes.invoke_super = (function invoke_super(superclass,method,context,args){var proto = superclass.prototype;var foreign_QMARK_ = ((proto["__pylon$classname"]) == null);var method_name = ((foreign_QMARK_)?method:pylon.classes.method_fn_name.call(null,method));var args__$1 = ((foreign_QMARK_)?args:cljs.core.cons.call(null,context,args));var super_method = (proto[method_name]);var super_fn = (((cljs.core._EQ_.call(null,method,"constructor")) && (cljs.core.not.call(null,super_method)))?superclass:super_method);var args__$2 = cljs.core.into_array.call(null,args__$1);return super_fn.apply(context,args__$2);
});
pylon.classes.method_wrapper = (function method_wrapper(funcname){return (function() { 
var G__9897__delegate = function (args){var this$ = this;return cljs.core.apply.call(null,(this$[funcname]),cljs.core.cons.call(null,this$,args));
};
var G__9897 = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__9897__delegate.call(this,args);};
G__9897.cljs$lang$maxFixedArity = 0;
G__9897.cljs$lang$applyTo = (function (arglist__9898){
var args = cljs.core.seq(arglist__9898);
return G__9897__delegate(args);
});
G__9897.cljs$core$IFn$_invoke$arity$variadic = G__9897__delegate;
return G__9897;
})()
;
});
