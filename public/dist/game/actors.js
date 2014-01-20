// Compiled by ClojureScript 0.0-2138
goog.provide('game.actors');
goog.require('cljs.core');
goog.require('game.utils');
goog.require('game.kinetic');
goog.require('game.kinetic');
goog.require('game.utils');
goog.require('pylon.classes');
game.actors.create_player_view = (function create_player_view(){return game.kinetic.rect.call(null,{"strokeWidth": 4, "stroke": "black", "fill": "green", "offset": new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",1013904362),-20,new cljs.core.Keyword(null,"y","y",1013904363),-20], null), "height": 40, "width": 40, "y": 0, "x": 0});
});
game.actors.get_direction = (function get_direction(delta){if((delta > 0))
{return 1;
} else
{if((delta < 0))
{return -1;
} else
{if(cljs.core._EQ_.call(null,delta,0))
{return 0;
} else
{return null;
}
}
}
});
game.actors.get_move_direction = (function get_move_direction(p__12877,p__12878){var vec__12881 = p__12877;var c_x = cljs.core.nth.call(null,vec__12881,0,null);var c_y = cljs.core.nth.call(null,vec__12881,1,null);var vec__12882 = p__12878;var x = cljs.core.nth.call(null,vec__12882,0,null);var y = cljs.core.nth.call(null,vec__12882,1,null);var deltaX = (x - c_x);var deltaY = (y - c_y);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [game.actors.get_direction.call(null,deltaX),game.actors.get_direction.call(null,deltaY)], null);
});
game.actors.get_rotate_direction = (function get_rotate_direction(c_angle,angle){var delta = (angle - c_angle);return game.actors.get_direction.call(null,delta);
});
var ctor12883_12886 = pylon.classes.create_ctor.call(null);game.actors.Player = ctor12883_12886;
(ctor12883_12886.prototype["__pylon$classname"] = "game.actors.Player");
var func__4336__auto___12887 = (function constructor(this$,id,layer){var __pylon_method_name = "constructor";var __pylon_prototype = game.actors.Player.prototype;this$.id = id;
this$.layer = layer;
this$.view = game.actors.create_player_view.call(null);
layer.add(this$.view);
this$.data = new cljs.core.PersistentArrayMap(null, 2, ["x",0,"y",0], null);
this$.animation = game.kinetic.animation.call(null,this$.draw,layer);
return this$.animation.start();
});(game.actors.Player.prototype["__pylon$method$constructor"] = func__4336__auto___12887);
game.actors.Player.prototype.constructor = pylon.classes.method_wrapper.call(null,"__pylon$method$constructor");
goog.exportProperty(game.actors.Player.prototype,"constructor",game.actors.Player.prototype.constructor);
var func__4336__auto___12888 = (function remove(this$){var __pylon_method_name = "remove";var __pylon_prototype = game.actors.Player.prototype;return this$.layer.remove(this$.view);
});(game.actors.Player.prototype["__pylon$method$remove"] = func__4336__auto___12888);
game.actors.Player.prototype.remove = pylon.classes.method_wrapper.call(null,"__pylon$method$remove");
goog.exportProperty(game.actors.Player.prototype,"remove",game.actors.Player.prototype.remove);
var func__4336__auto___12889 = (function update(this$,data){var __pylon_method_name = "update";var __pylon_prototype = game.actors.Player.prototype;return this$.data = data;
});(game.actors.Player.prototype["__pylon$method$update"] = func__4336__auto___12889);
game.actors.Player.prototype.update = pylon.classes.method_wrapper.call(null,"__pylon$method$update");
goog.exportProperty(game.actors.Player.prototype,"update",game.actors.Player.prototype.update);
var func__4336__auto___12890 = (function draw(this$,frame){var __pylon_method_name = "draw";var __pylon_prototype = game.actors.Player.prototype;this$.move.call(null,frame);
return this$.rotate.call(null,frame);
});(game.actors.Player.prototype["__pylon$method$draw"] = func__4336__auto___12890);
game.actors.Player.prototype.draw = pylon.classes.method_wrapper.call(null,"__pylon$method$draw");
goog.exportProperty(game.actors.Player.prototype,"draw",game.actors.Player.prototype.draw);
var func__4336__auto___12891 = (function move(this$,frame){var __pylon_method_name = "move";var __pylon_prototype = game.actors.Player.prototype;var speed = (100 / 1000);var c_pos = this$.view.position();var pos = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.get.call(null,this$.data,"x"),cljs.core.get.call(null,this$.data,"y")], null);var vec__12885 = game.actors.get_move_direction.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [c_pos.x,c_pos.y], null),pos);var dir_x = cljs.core.nth.call(null,vec__12885,0,null);var dir_y = cljs.core.nth.call(null,vec__12885,1,null);var deltaX = Math.floor(((speed * dir_x) * frame.timeDiff));var deltaY = Math.floor(((speed * dir_y) * frame.timeDiff));return this$.view.move({"y": deltaY, "x": deltaX});
});(game.actors.Player.prototype["__pylon$method$move"] = func__4336__auto___12891);
game.actors.Player.prototype.move = pylon.classes.method_wrapper.call(null,"__pylon$method$move");
goog.exportProperty(game.actors.Player.prototype,"move",game.actors.Player.prototype.move);
var func__4336__auto___12892 = (function rotate(this$,frame){var __pylon_method_name = "rotate";var __pylon_prototype = game.actors.Player.prototype;var speed = (360 / 2000);var c_angle = this$.view.rotation();var angle = cljs.core.get.call(null,this$.data,"rotation");var dir = game.actors.get_rotate_direction.call(null,c_angle,angle);var delta = Math.ceil(((speed * dir) * frame.timeDiff));return this$.view.rotate(delta);
});(game.actors.Player.prototype["__pylon$method$rotate"] = func__4336__auto___12892);
game.actors.Player.prototype.rotate = pylon.classes.method_wrapper.call(null,"__pylon$method$rotate");
goog.exportProperty(game.actors.Player.prototype,"rotate",game.actors.Player.prototype.rotate);
goog.exportSymbol("game.actors.Player",game.actors.Player);
var ctor12893_12894 = pylon.classes.create_ctor.call(null);game.actors.Bullet = ctor12893_12894;
(ctor12893_12894.prototype["__pylon$classname"] = "game.actors.Bullet");
var func__4336__auto___12895 = (function constructor(this$,id,layer){var __pylon_method_name = "constructor";var __pylon_prototype = game.actors.Bullet.prototype;this$.id = id;
this$.view = game.actors.create_bullet_view.call(null);
layer.add(this$.view);
this$.animation = game.kinetic.animation.call(null,this$.draw,layer);
return this$.animation.start();
});(game.actors.Bullet.prototype["__pylon$method$constructor"] = func__4336__auto___12895);
game.actors.Bullet.prototype.constructor = pylon.classes.method_wrapper.call(null,"__pylon$method$constructor");
goog.exportProperty(game.actors.Bullet.prototype,"constructor",game.actors.Bullet.prototype.constructor);
var func__4336__auto___12896 = (function update(this$,data){var __pylon_method_name = "update";var __pylon_prototype = game.actors.Bullet.prototype;return this$.data = data;
});(game.actors.Bullet.prototype["__pylon$method$update"] = func__4336__auto___12896);
game.actors.Bullet.prototype.update = pylon.classes.method_wrapper.call(null,"__pylon$method$update");
goog.exportProperty(game.actors.Bullet.prototype,"update",game.actors.Bullet.prototype.update);
var func__4336__auto___12897 = (function draw(this$,frame){var __pylon_method_name = "draw";var __pylon_prototype = game.actors.Bullet.prototype;return null;
});(game.actors.Bullet.prototype["__pylon$method$draw"] = func__4336__auto___12897);
game.actors.Bullet.prototype.draw = pylon.classes.method_wrapper.call(null,"__pylon$method$draw");
goog.exportProperty(game.actors.Bullet.prototype,"draw",game.actors.Bullet.prototype.draw);
goog.exportSymbol("game.actors.Bullet",game.actors.Bullet);
