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
}catch (e12588){if((e12588 instanceof Object))
{var e = e12588;return null;
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e12588;
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
{var obj = (function (){var obj12598 = {};return obj12598;
})();var seq__12599_12605 = cljs.core.seq.call(null,val);var chunk__12600_12606 = null;var count__12601_12607 = 0;var i__12602_12608 = 0;while(true){
if((i__12602_12608 < count__12601_12607))
{var vec__12603_12609 = cljs.core._nth.call(null,chunk__12600_12606,i__12602_12608);var k_12610 = cljs.core.nth.call(null,vec__12603_12609,0,null);var v_12611 = cljs.core.nth.call(null,vec__12603_12609,1,null);(obj[cloact.impl.template.cached_style_name.call(null,k_12610)] = cljs.core.clj__GT_js.call(null,v_12611));
{
var G__12612 = seq__12599_12605;
var G__12613 = chunk__12600_12606;
var G__12614 = count__12601_12607;
var G__12615 = (i__12602_12608 + 1);
seq__12599_12605 = G__12612;
chunk__12600_12606 = G__12613;
count__12601_12607 = G__12614;
i__12602_12608 = G__12615;
continue;
}
} else
{var temp__4092__auto___12616 = cljs.core.seq.call(null,seq__12599_12605);if(temp__4092__auto___12616)
{var seq__12599_12617__$1 = temp__4092__auto___12616;if(cljs.core.chunked_seq_QMARK_.call(null,seq__12599_12617__$1))
{var c__4150__auto___12618 = cljs.core.chunk_first.call(null,seq__12599_12617__$1);{
var G__12619 = cljs.core.chunk_rest.call(null,seq__12599_12617__$1);
var G__12620 = c__4150__auto___12618;
var G__12621 = cljs.core.count.call(null,c__4150__auto___12618);
var G__12622 = 0;
seq__12599_12605 = G__12619;
chunk__12600_12606 = G__12620;
count__12601_12607 = G__12621;
i__12602_12608 = G__12622;
continue;
}
} else
{var vec__12604_12623 = cljs.core.first.call(null,seq__12599_12617__$1);var k_12624 = cljs.core.nth.call(null,vec__12604_12623,0,null);var v_12625 = cljs.core.nth.call(null,vec__12604_12623,1,null);(obj[cloact.impl.template.cached_style_name.call(null,k_12624)] = cljs.core.clj__GT_js.call(null,v_12625));
{
var G__12626 = cljs.core.next.call(null,seq__12599_12617__$1);
var G__12627 = null;
var G__12628 = 0;
var G__12629 = 0;
seq__12599_12605 = G__12626;
chunk__12600_12606 = G__12627;
count__12601_12607 = G__12628;
i__12602_12608 = G__12629;
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
var G__12630__delegate = function (args){return cljs.core.apply.call(null,val,args);
};
var G__12630 = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__12630__delegate.call(this,args);};
G__12630.cljs$lang$maxFixedArity = 0;
G__12630.cljs$lang$applyTo = (function (arglist__12631){
var args = cljs.core.seq(arglist__12631);
return G__12630__delegate(args);
});
G__12630.cljs$core$IFn$_invoke$arity$variadic = G__12630__delegate;
return G__12630;
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
cloact.impl.template.set_id_class = (function set_id_class(props,p__12632){var vec__12634 = p__12632;var id = cljs.core.nth.call(null,vec__12634,0,null);var class$ = cljs.core.nth.call(null,vec__12634,1,null);(props["id"] = id);
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
{var objprops = (function (){var obj12644 = {};return obj12644;
})();if(is_empty)
{} else
{var seq__12645_12651 = cljs.core.seq.call(null,props);var chunk__12646_12652 = null;var count__12647_12653 = 0;var i__12648_12654 = 0;while(true){
if((i__12648_12654 < count__12647_12653))
{var vec__12649_12655 = cljs.core._nth.call(null,chunk__12646_12652,i__12648_12654);var k_12656 = cljs.core.nth.call(null,vec__12649_12655,0,null);var v_12657 = cljs.core.nth.call(null,vec__12649_12655,1,null);(objprops[cloact.impl.template.cached_prop_name.call(null,k_12656)] = cloact.impl.template.convert_prop_value.call(null,v_12657));
{
var G__12658 = seq__12645_12651;
var G__12659 = chunk__12646_12652;
var G__12660 = count__12647_12653;
var G__12661 = (i__12648_12654 + 1);
seq__12645_12651 = G__12658;
chunk__12646_12652 = G__12659;
count__12647_12653 = G__12660;
i__12648_12654 = G__12661;
continue;
}
} else
{var temp__4092__auto___12662 = cljs.core.seq.call(null,seq__12645_12651);if(temp__4092__auto___12662)
{var seq__12645_12663__$1 = temp__4092__auto___12662;if(cljs.core.chunked_seq_QMARK_.call(null,seq__12645_12663__$1))
{var c__4150__auto___12664 = cljs.core.chunk_first.call(null,seq__12645_12663__$1);{
var G__12665 = cljs.core.chunk_rest.call(null,seq__12645_12663__$1);
var G__12666 = c__4150__auto___12664;
var G__12667 = cljs.core.count.call(null,c__4150__auto___12664);
var G__12668 = 0;
seq__12645_12651 = G__12665;
chunk__12646_12652 = G__12666;
count__12647_12653 = G__12667;
i__12648_12654 = G__12668;
continue;
}
} else
{var vec__12650_12669 = cljs.core.first.call(null,seq__12645_12663__$1);var k_12670 = cljs.core.nth.call(null,vec__12650_12669,0,null);var v_12671 = cljs.core.nth.call(null,vec__12650_12669,1,null);(objprops[cloact.impl.template.cached_prop_name.call(null,k_12670)] = cloact.impl.template.convert_prop_value.call(null,v_12671));
{
var G__12672 = cljs.core.next.call(null,seq__12645_12663__$1);
var G__12673 = null;
var G__12674 = 0;
var G__12675 = 0;
seq__12645_12651 = G__12672;
chunk__12646_12652 = G__12673;
count__12647_12653 = G__12674;
i__12648_12654 = G__12675;
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
cloact.impl.template.map_into_array = (function map_into_array(f,coll){var a = cljs.core.into_array.call(null,coll);var n__4250__auto___12676 = a.length;var i_12677 = 0;while(true){
if((i_12677 < n__4250__auto___12676))
{(a[i_12677] = f.call(null,(a[i_12677])));
{
var G__12678 = (i_12677 + 1);
i_12677 = G__12678;
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
cloact.impl.template.wrap_component = (function wrap_component(comp,extras){return cloact.impl.template.React.createClass((function (){var obj12684 = {"render":(function (){var C = this;return cloact.impl.template.wrapped_render.call(null,C,comp,extras);
}),"shouldComponentUpdate":(function (p1__12679_SHARP_,p2__12680_SHARP_){var C = this;return cloact.impl.template.wrapped_should_update.call(null,C,p1__12679_SHARP_,p2__12680_SHARP_);
})};return obj12684;
})());
});
/**
* Regular expression that parses a CSS-style id and class
* from a tag name.
*/
cloact.impl.template.re_tag = /([^\s\.#]+)(?:#([^\s\.#]+))?(?:\.([^\s#]+))?/;
cloact.impl.template.DOM = (cloact.impl.template.React["DOM"]);
cloact.impl.template.parse_tag = (function parse_tag(tag){var vec__12686 = cljs.core.next.call(null,cljs.core.re_matches.call(null,cloact.impl.template.re_tag,cljs.core.name.call(null,tag)));var tag__$1 = cljs.core.nth.call(null,vec__12686,0,null);var id = cljs.core.nth.call(null,vec__12686,1,null);var class$ = cljs.core.nth.call(null,vec__12686,2,null);var comp = (cloact.impl.template.DOM[tag__$1]);var class_SINGLEQUOTE_ = (cljs.core.truth_(class$)?clojure.string.replace.call(null,class$,/\./," "):null);if(cljs.core.truth_(comp))
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
cloact.impl.template.get_wrapper = (function get_wrapper(tag){var vec__12688 = cloact.impl.template.parse_tag.call(null,tag);var comp = cljs.core.nth.call(null,vec__12688,0,null);var id_class = cljs.core.nth.call(null,vec__12688,1,null);return cloact.impl.template.wrap_component.call(null,comp,id_class);
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
var vec__12692 = v;var tag = cljs.core.nth.call(null,vec__12692,0,null);var props = cljs.core.nth.call(null,vec__12692,1,null);var hasmap = cljs.core.map_QMARK_.call(null,props);var first_child = (((hasmap) || ((props == null)))?2:1);var c = cloact.impl.template.as_class.call(null,tag);var jsprops = (function (){var obj12694 = {};(obj12694[cloact.impl.template.cljs_props] = ((hasmap)?props:null));
(obj12694[cloact.impl.template.cljs_children] = (((cljs.core.count.call(null,v) > first_child))?cljs.core.subvec.call(null,v,first_child):null));
return obj12694;
})();if(hasmap)
{var key_12695 = new cljs.core.Keyword(null,"key","key",1014010321).cljs$core$IFn$_invoke$arity$1(props);if((key_12695 == null))
{} else
{(jsprops["key"] = key_12695);
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
