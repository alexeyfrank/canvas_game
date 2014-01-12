// Compiled by ClojureScript 0.0-2138
goog.provide('game.protocols');
goog.require('cljs.core');
game.protocols.IDrawable = (function (){var obj8472 = {};return obj8472;
})();
game.protocols.clear = (function clear(obj,canvas){if((function (){var and__3396__auto__ = obj;if(and__3396__auto__)
{return obj.game$protocols$IDrawable$clear$arity$2;
} else
{return and__3396__auto__;
}
})())
{return obj.game$protocols$IDrawable$clear$arity$2(obj,canvas);
} else
{var x__4029__auto__ = (((obj == null))?null:obj);return (function (){var or__3408__auto__ = (game.protocols.clear[goog.typeOf(x__4029__auto__)]);if(or__3408__auto__)
{return or__3408__auto__;
} else
{var or__3408__auto____$1 = (game.protocols.clear["_"]);if(or__3408__auto____$1)
{return or__3408__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IDrawable.clear",obj);
}
}
})().call(null,obj,canvas);
}
});
game.protocols.draw = (function draw(obj,canvas,color){if((function (){var and__3396__auto__ = obj;if(and__3396__auto__)
{return obj.game$protocols$IDrawable$draw$arity$3;
} else
{return and__3396__auto__;
}
})())
{return obj.game$protocols$IDrawable$draw$arity$3(obj,canvas,color);
} else
{var x__4029__auto__ = (((obj == null))?null:obj);return (function (){var or__3408__auto__ = (game.protocols.draw[goog.typeOf(x__4029__auto__)]);if(or__3408__auto__)
{return or__3408__auto__;
} else
{var or__3408__auto____$1 = (game.protocols.draw["_"]);if(or__3408__auto____$1)
{return or__3408__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IDrawable.draw",obj);
}
}
})().call(null,obj,canvas,color);
}
});
