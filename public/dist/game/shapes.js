// Compiled by ClojureScript 0.0-2138
goog.provide('game.shapes');
goog.require('cljs.core');
game.shapes.stage = (function stage(opts){return (new Kinetic.Stage(cljs.core.clj__GT_js.call(null,opts)));
});
/**
* @param {...*} var_args
*/
game.shapes.layer = (function() { 
var layer__delegate = function (items){return (new Kinetic.Layer());
};
var layer = function (var_args){
var items = null;if (arguments.length > 0) {
  items = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return layer__delegate.call(this,items);};
layer.cljs$lang$maxFixedArity = 0;
layer.cljs$lang$applyTo = (function (arglist__8527){
var items = cljs.core.seq(arglist__8527);
return layer__delegate(items);
});
layer.cljs$core$IFn$_invoke$arity$variadic = layer__delegate;
return layer;
})()
;
game.shapes.add_layer = (function add_layer(stage,layer){return stage.add(layer);
});
game.shapes.add_shape = (function add_shape(layer,shape){return layer.add(shape);
});
game.shapes.rect = (function rect(opts){return (new Kinetic.Rect(cljs.core.clj__GT_js.call(null,opts)));
});
