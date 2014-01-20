// Compiled by ClojureScript 0.0-2138
goog.provide('cloact.impl.template');
goog.require('cljs.core');
goog.require('cloact.debug');
goog.require('cloact.impl.util');
goog.require('cloact.impl.util');
goog.require('cloact.impl.reactimport');
goog.require('cloact.impl.reactimport');
goog.require('clojure.string');
goog.require('clojure.string');
cloact.impl.template.React = cloact.impl.reactimport.React;
cloact.impl.template.cljs_props = "cljsProps";
cloact.impl.template.cljs_children = "cljsChildren";
cloact.impl.template.isClient = !(((function (){try{return window.document;
}catch (e12734){if((e12734 instanceof Object))
{var e = e12734;return null;
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e12734;
} else
{return null;
}
}
}})() == null));
cloact.impl.template.dash_to_camel = (function dash_to_camel(dashed){var words = clojure.string.split.call(null,cljs.core.name.call(null,dashed),/-/);return cljs.core.apply.call(null,cljs.core.str,cljs.core.first.call(null,words),cljs.core.map.call(null,clojure.string.capitalize,cljs.core.rest.call(null,words)));
});
cloact.impl.template.attr_aliases = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"class","class",1108647146),"className",new cljs.core.Keyword(null,"for","for",1014005819),"htmlFor",new cljs.core.Keyword(null,"charset","charset",1752978622),"charSet"], null);
cloact.impl.template.undash_prop_name = (function undash_prop_name(n){var or__3408__auto__ = cloact.impl.template.attr_aliases.call(null,n);if(cljs.core.truth_(or__3408__auto__))
{return or__3408__auto__;
} else
{return cloact.impl.template.dash_to_camel.call(null,n);
}
});
cloact.impl.template.cached_prop_name = cljs.core.memoize.call(null,cloact.impl.template.undash_prop_name);
cloact.impl.template.cached_style_name = cljs.core.memoize.call(null,cloact.impl.template.dash_to_camel);
cloact.impl.template.convert_prop_value = (function convert_prop_value(val){if(cljs.core.map_QMARK_.call(null,val))
{var obj = (function (){var obj12744 = {};return obj12744;
})();var seq__12745_12751 = cljs.core.seq.call(null,val);var chunk__12746_12752 = null;var count__12747_12753 = 0;var i__12748_12754 = 0;while(true){
if((i__12748_12754 < count__12747_12753))
{var vec__12749_12755 = cljs.core._nth.call(null,chunk__12746_12752,i__12748_12754);var k_12756 = cljs.core.nth.call(null,vec__12749_12755,0,null);var v_12757 = cljs.core.nth.call(null,vec__12749_12755,1,null);(obj[cloact.impl.template.cached_style_name.call(null,k_12756)] = cljs.core.clj__GT_js.call(null,v_12757));
{
var G__12758 = seq__12745_12751;
var G__12759 = chunk__12746_12752;
var G__12760 = count__12747_12753;
var G__12761 = (i__12748_12754 + 1);
seq__12745_12751 = G__12758;
chunk__12746_12752 = G__12759;
count__12747_12753 = G__12760;
i__12748_12754 = G__12761;
continue;
}
} else
{var temp__4092__auto___12762 = cljs.core.seq.call(null,seq__12745_12751);if(temp__4092__auto___12762)
{var seq__12745_12763__$1 = temp__4092__auto___12762;if(cljs.core.chunked_seq_QMARK_.call(null,seq__12745_12763__$1))
{var c__4150__auto___12764 = cljs.core.chunk_first.call(null,seq__12745_12763__$1);{
var G__12765 = cljs.core.chunk_rest.call(null,seq__12745_12763__$1);
var G__12766 = c__4150__auto___12764;
var G__12767 = cljs.core.count.call(null,c__4150__auto___12764);
var G__12768 = 0;
seq__12745_12751 = G__12765;
chunk__12746_12752 = G__12766;
count__12747_12753 = G__12767;
i__12748_12754 = G__12768;
continue;
}
} else
{var vec__12750_12769 = cljs.core.first.call(null,seq__12745_12763__$1);var k_12770 = cljs.core.nth.call(null,vec__12750_12769,0,null);var v_12771 = cljs.core.nth.call(null,vec__12750_12769,1,null);(obj[cloact.impl.template.cached_style_name.call(null,k_12770)] = cljs.core.clj__GT_js.call(null,v_12771));
{
var G__12772 = cljs.core.next.call(null,seq__12745_12763__$1);
var G__12773 = null;
var G__12774 = 0;
var G__12775 = 0;
seq__12745_12751 = G__12772;
chunk__12746_12752 = G__12773;
count__12747_12753 = G__12774;
i__12748_12754 = G__12775;
continue;
}
}
} else
{}
}
break;
}
return obj;
} else
{if(cljs.core.ifn_QMARK_.call(null,val))
{return (function() { 
var G__12776__delegate = function (args){return cljs.core.apply.call(null,val,args);
};
var G__12776 = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__12776__delegate.call(this,args);};
G__12776.cljs$lang$maxFixedArity = 0;
G__12776.cljs$lang$applyTo = (function (arglist__12777){
var args = cljs.core.seq(arglist__12777);
return G__12776__delegate(args);
});
G__12776.cljs$core$IFn$_invoke$arity$variadic = G__12776__delegate;
return G__12776;
})()
;
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return cljs.core.clj__GT_js.call(null,val);
} else
{return null;
}
}
}
});
cloact.impl.template.set_id_class = (function set_id_class(props,p__12778){var vec__12780 = p__12778;var id = cljs.core.nth.call(null,vec__12780,0,null);var class$ = cljs.core.nth.call(null,vec__12780,1,null);(props["id"] = id);
if(cljs.core.truth_(class$))
{return (props["className"] = (function (){var temp__4090__auto__ = (props["className"]);if(cljs.core.truth_(temp__4090__auto__))
{var old = temp__4090__auto__;return [cljs.core.str(class$),cljs.core.str(" "),cljs.core.str(old)].join('');
} else
{return class$;
}
})());
} else
{return null;
}
});
cloact.impl.template.convert_props = (function convert_props(props,id_class){var is_empty = cljs.core.empty_QMARK_.call(null,props);if((is_empty) && ((id_class == null)))
{return null;
} else
{if((cljs.core.type.call(null,props) === Object))
{return props;
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{var objprops = (function (){var obj12790 = {};return obj12790;
})();if(is_empty)
{} else
{var seq__12791_12797 = cljs.core.seq.call(null,props);var chunk__12792_12798 = null;var count__12793_12799 = 0;var i__12794_12800 = 0;while(true){
if((i__12794_12800 < count__12793_12799))
{var vec__12795_12801 = cljs.core._nth.call(null,chunk__12792_12798,i__12794_12800);var k_12802 = cljs.core.nth.call(null,vec__12795_12801,0,null);var v_12803 = cljs.core.nth.call(null,vec__12795_12801,1,null);(objprops[cloact.impl.template.cached_prop_name.call(null,k_12802)] = cloact.impl.template.convert_prop_value.call(null,v_12803));
{
var G__12804 = seq__12791_12797;
var G__12805 = chunk__12792_12798;
var G__12806 = count__12793_12799;
var G__12807 = (i__12794_12800 + 1);
seq__12791_12797 = G__12804;
chunk__12792_12798 = G__12805;
count__12793_12799 = G__12806;
i__12794_12800 = G__12807;
continue;
}
} else
{var temp__4092__auto___12808 = cljs.core.seq.call(null,seq__12791_12797);if(temp__4092__auto___12808)
{var seq__12791_12809__$1 = temp__4092__auto___12808;if(cljs.core.chunked_seq_QMARK_.call(null,seq__12791_12809__$1))
{var c__4150__auto___12810 = cljs.core.chunk_first.call(null,seq__12791_12809__$1);{
var G__12811 = cljs.core.chunk_rest.call(null,seq__12791_12809__$1);
var G__12812 = c__4150__auto___12810;
var G__12813 = cljs.core.count.call(null,c__4150__auto___12810);
var G__12814 = 0;
seq__12791_12797 = G__12811;
chunk__12792_12798 = G__12812;
count__12793_12799 = G__12813;
i__12794_12800 = G__12814;
continue;
}
} else
{var vec__12796_12815 = cljs.core.first.call(null,seq__12791_12809__$1);var k_12816 = cljs.core.nth.call(null,vec__12796_12815,0,null);var v_12817 = cljs.core.nth.call(null,vec__12796_12815,1,null);(objprops[cloact.impl.template.cached_prop_name.call(null,k_12816)] = cloact.impl.template.convert_prop_value.call(null,v_12817));
{
var G__12818 = cljs.core.next.call(null,seq__12791_12809__$1);
var G__12819 = null;
var G__12820 = 0;
var G__12821 = 0;
seq__12791_12797 = G__12818;
chunk__12792_12798 = G__12819;
count__12793_12799 = G__12820;
i__12794_12800 = G__12821;
continue;
}
}
} else
{}
}
break;
}
}
if((id_class == null))
{} else
{cloact.impl.template.set_id_class.call(null,objprops,id_class);
}
return objprops;
} else
{return null;
}
}
}
});
cloact.impl.template.map_into_array = (function map_into_array(f,coll){var a = cljs.core.into_array.call(null,coll);var n__4250__auto___12822 = a.length;var i_12823 = 0;while(true){
if((i_12823 < n__4250__auto___12822))
{(a[i_12823] = f.call(null,(a[i_12823])));
{
var G__12824 = (i_12823 + 1);
i_12823 = G__12824;
continue;
}
} else
{}
break;
}
return a;
});
cloact.impl.template.wrapped_render = (function wrapped_render(this$,comp,id_class){var inprops = (this$["props"]);var props = (inprops[cloact.impl.template.cljs_props]);var hasprops = ((props == null)) || (cljs.core.map_QMARK_.call(null,props));var jsargs = cloact.impl.template.map_into_array.call(null,cloact.impl.template.as_component,(inprops[cloact.impl.template.cljs_children]));jsargs.unshift(cloact.impl.template.convert_props.call(null,props,id_class));
return comp.apply(null,jsargs);
});
cloact.impl.template.wrapped_should_update = (function wrapped_should_update(C,nextprops,nextstate){var inprops = (C["props"]);var p1 = (inprops[cloact.impl.template.cljs_props]);var c1 = (inprops[cloact.impl.template.cljs_children]);var p2 = (nextprops[cloact.impl.template.cljs_props]);var c2 = (nextprops[cloact.impl.template.cljs_children]);return cljs.core.not.call(null,cloact.impl.util.equal_args.call(null,p1,c1,p2,c2));
});
cloact.impl.template.wrap_component = (function wrap_component(comp,extras){return cloact.impl.template.React.createClass((function (){var obj12830 = {"render":(function (){var C = this;return cloact.impl.template.wrapped_render.call(null,C,comp,extras);
}),"shouldComponentUpdate":(function (p1__12825_SHARP_,p2__12826_SHARP_){var C = this;return cloact.impl.template.wrapped_should_update.call(null,C,p1__12825_SHARP_,p2__12826_SHARP_);
})};return obj12830;
})());
});
/**
* Regular expression that parses a CSS-style id and class
* from a tag name.
*/
cloact.impl.template.re_tag = /([^\s\.#]+)(?:#([^\s\.#]+))?(?:\.([^\s#]+))?/;
cloact.impl.template.DOM = (cloact.impl.template.React["DOM"]);
cloact.impl.template.parse_tag = (function parse_tag(tag){var vec__12832 = cljs.core.next.call(null,cljs.core.re_matches.call(null,cloact.impl.template.re_tag,cljs.core.name.call(null,tag)));var tag__$1 = cljs.core.nth.call(null,vec__12832,0,null);var id = cljs.core.nth.call(null,vec__12832,1,null);var class$ = cljs.core.nth.call(null,vec__12832,2,null);var comp = (cloact.impl.template.DOM[tag__$1]);var class_SINGLEQUOTE_ = (cljs.core.truth_(class$)?clojure.string.replace.call(null,class$,/\./," "):null);if(cljs.core.truth_(comp))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("Unknown tag: "),cljs.core.str(tag__$1)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,new cljs.core.Symbol(null,"comp","comp",-1637472056,null)))].join('')));
}
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [comp,(cljs.core.truth_((function (){var or__3408__auto__ = id;if(cljs.core.truth_(or__3408__auto__))
{return or__3408__auto__;
} else
{return class_SINGLEQUOTE_;
}
})())?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [id,class_SINGLEQUOTE_], null):null)], null);
});
cloact.impl.template.get_wrapper = (function get_wrapper(tag){var vec__12834 = cloact.impl.template.parse_tag.call(null,tag);var comp = cljs.core.nth.call(null,vec__12834,0,null);var id_class = cljs.core.nth.call(null,vec__12834,1,null);return cloact.impl.template.wrap_component.call(null,comp,id_class);
});
cloact.impl.template.cached_wrapper = cljs.core.memoize.call(null,cloact.impl.template.get_wrapper);
cloact.impl.template.fn_to_class = (function fn_to_class(f){var spec = cljs.core.meta.call(null,f);var withrender = cljs.core.merge.call(null,spec,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"render","render",4374279432),f], null));var res = cloact.core.create_class.call(null,withrender);var wrapf = res.cljsReactClass;f.cljsReactClass = wrapf;
return wrapf;
});
cloact.impl.template.as_class = (function as_class(tag){if((tag instanceof cljs.core.Keyword))
{return cloact.impl.template.cached_wrapper.call(null,tag);
} else
{if(cljs.core.fn_QMARK_.call(null,tag))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"fn?","fn?",-1640430032,null),new cljs.core.Symbol(null,"tag","tag",-1640416941,null))))].join('')));
}
var cached_class = tag.cljsReactClass;if(!((cached_class == null)))
{return cached_class;
} else
{if(cljs.core.truth_(cloact.impl.template.React.isValidClass(tag)))
{return tag.cljsReactClass = cloact.impl.template.wrap_component.call(null,tag,null);
} else
{return cloact.impl.template.fn_to_class.call(null,tag);
}
}
}
});
cloact.impl.template.vec_to_comp = (function vec_to_comp(v){if((cljs.core.count.call(null,v) > 0))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"pos?","pos?",-1637084636,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-1545680184,null),new cljs.core.Symbol(null,"v","v",-1640531409,null)))))].join('')));
}
var vec__12838 = v;var tag = cljs.core.nth.call(null,vec__12838,0,null);var props = cljs.core.nth.call(null,vec__12838,1,null);var hasmap = cljs.core.map_QMARK_.call(null,props);var first_child = (((hasmap) || ((props == null)))?2:1);var c = cloact.impl.template.as_class.call(null,tag);var jsprops = (function (){var obj12840 = {};(obj12840[cloact.impl.template.cljs_props] = ((hasmap)?props:null));
(obj12840[cloact.impl.template.cljs_children] = (((cljs.core.count.call(null,v) > first_child))?cljs.core.subvec.call(null,v,first_child):null));
return obj12840;
})();if(hasmap)
{var key_12841 = new cljs.core.Keyword(null,"key","key",1014010321).cljs$core$IFn$_invoke$arity$1(props);if((key_12841 == null))
{} else
{(jsprops["key"] = key_12841);
}
} else
{}
return c.call(null,jsprops);
});
cloact.impl.template.as_component = (function as_component(x){if(cljs.core.vector_QMARK_.call(null,x))
{return cloact.impl.template.vec_to_comp.call(null,x);
} else
{if(cljs.core.seq_QMARK_.call(null,x))
{return cloact.impl.template.map_into_array.call(null,as_component,x);
} else
{if(true)
{return x;
} else
{return null;
}
}
}
});
