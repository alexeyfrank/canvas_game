// Compiled by ClojureScript 0.0-2138
goog.provide('game.kinetic');
goog.require('cljs.core');
game.kinetic.stage = (function stage(opts){return (new Kinetic.Stage(cljs.core.clj__GT_js.call(null,opts)));
});
/**
* @param {...*} var_args
*/
game.kinetic.layer = (function() { 
var layer__delegate = function (items){return (new Kinetic.Layer());
};
var layer = function (var_args){
var items = null;if (arguments.length > 0) {
  items = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return layer__delegate.call(this,items);};
layer.cljs$lang$maxFixedArity = 0;
layer.cljs$lang$applyTo = (function (arglist__8420){
var items = cljs.core.seq(arglist__8420);
return layer__delegate(items);
});
layer.cljs$core$IFn$_invoke$arity$variadic = layer__delegate;
return layer;
})()
;
game.kinetic.animation = (function animation(handler,layer){return (new Kinetic.Animation(handler,layer));
});
game.kinetic.add_layer = (function add_layer(stage,layer){return stage.add(layer);
});
game.kinetic.add_shape = (function add_shape(layer,shape){return layer.add(shape);
});
game.kinetic.rect = (function rect(js_opts){return (new Kinetic.Rect(js_opts));
});
