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
var ctor__delegate = function (args){var this$ = this;var p_9858 = Object.getPrototypeOf(this$);var superclass_9859 = (p_9858["__pylon$superclass"]);var seq__9854_9860 = cljs.core.seq.call(null,cljs.core.apply.call(null,cljs.core.hash_set,pylon.classes.find_props.call(null,p_9858)));var chunk__9855_9861 = null;var count__9856_9862 = 0;var i__9857_9863 = 0;while(true){
if((i__9857_9863 < count__9856_9862))
{var bind_9864 = cljs.core._nth.call(null,chunk__9855_9861,i__9857_9863);var func_9865 = (this$[bind_9864]);if(cljs.core.fn_QMARK_.call(null,func_9865))
{(this$[bind_9864] = goog.bind(func_9865,this$));
} else
{}
{
var G__9866 = seq__9854_9860;
var G__9867 = chunk__9855_9861;
var G__9868 = count__9856_9862;
var G__9869 = (i__9857_9863 + 1);
seq__9854_9860 = G__9866;
chunk__9855_9861 = G__9867;
count__9856_9862 = G__9868;
i__9857_9863 = G__9869;
continue;
}
} else
{var temp__4092__auto___9870 = cljs.core.seq.call(null,seq__9854_9860);if(temp__4092__auto___9870)
{var seq__9854_9871__$1 = temp__4092__auto___9870;if(cljs.core.chunked_seq_QMARK_.call(null,seq__9854_9871__$1))
{var c__4150__auto___9872 = cljs.core.chunk_first.call(null,seq__9854_9871__$1);{
var G__9873 = cljs.core.chunk_rest.call(null,seq__9854_9871__$1);
var G__9874 = c__4150__auto___9872;
var G__9875 = cljs.core.count.call(null,c__4150__auto___9872);
var G__9876 = 0;
seq__9854_9860 = G__9873;
chunk__9855_9861 = G__9874;
count__9856_9862 = G__9875;
i__9857_9863 = G__9876;
continue;
}
} else
{var bind_9877 = cljs.core.first.call(null,seq__9854_9871__$1);var func_9878 = (this$[bind_9877]);if(cljs.core.fn_QMARK_.call(null,func_9878))
{(this$[bind_9877] = goog.bind(func_9878,this$));
} else
{}
{
var G__9879 = cljs.core.next.call(null,seq__9854_9871__$1);
var G__9880 = null;
var G__9881 = 0;
var G__9882 = 0;
seq__9854_9860 = G__9879;
chunk__9855_9861 = G__9880;
count__9856_9862 = G__9881;
i__9857_9863 = G__9882;
continue;
}
}
} else
{}
}
break;
}
var temp__4092__auto___9883 = this$.constructor;if(cljs.core.truth_(temp__4092__auto___9883))
{var constructor_9884 = temp__4092__auto___9883;constructor_9884.apply(this$,cljs.core.into_array.call(null,args));
} else
{}
return this$;
};
var ctor = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return ctor__delegate.call(this,args);};
ctor.cljs$lang$maxFixedArity = 0;
ctor.cljs$lang$applyTo = (function (arglist__9885){
var args = cljs.core.seq(arglist__9885);
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
var G__9886__delegate = function (args){var this$ = this;return cljs.core.apply.call(null,(this$[funcname]),cljs.core.cons.call(null,this$,args));
};
var G__9886 = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__9886__delegate.call(this,args);};
G__9886.cljs$lang$maxFixedArity = 0;
G__9886.cljs$lang$applyTo = (function (arglist__9887){
var args = cljs.core.seq(arglist__9887);
return G__9886__delegate(args);
});
G__9886.cljs$core$IFn$_invoke$arity$variadic = G__9886__delegate;
return G__9886;
})()
;
});
