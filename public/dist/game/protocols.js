// Compiled by ClojureScript 0.0-2138
goog.provide('game.protocols');
goog.require('cljs.core');
game.protocols.ICreate = (function (){var obj8524 = {};return obj8524;
})();
game.protocols.create = (function create(_){if((function (){var and__3396__auto__ = _;if(and__3396__auto__)
{return _.game$protocols$ICreate$create$arity$1;
} else
{return and__3396__auto__;
}
})())
{return _.game$protocols$ICreate$create$arity$1(_);
} else
{var x__4029__auto__ = (((_ == null))?null:_);return (function (){var or__3408__auto__ = (game.protocols.create[goog.typeOf(x__4029__auto__)]);if(or__3408__auto__)
{return or__3408__auto__;
} else
{var or__3408__auto____$1 = (game.protocols.create["_"]);if(or__3408__auto____$1)
{return or__3408__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"ICreate.create",_);
}
}
})().call(null,_);
}
});
game.protocols.IMovable = (function (){var obj8526 = {};return obj8526;
})();
game.protocols.move = (function move(x,y){if((function (){var and__3396__auto__ = x;if(and__3396__auto__)
{return x.game$protocols$IMovable$move$arity$2;
} else
{return and__3396__auto__;
}
})())
{return x.game$protocols$IMovable$move$arity$2(x,y);
} else
{var x__4029__auto__ = (((x == null))?null:x);return (function (){var or__3408__auto__ = (game.protocols.move[goog.typeOf(x__4029__auto__)]);if(or__3408__auto__)
{return or__3408__auto__;
} else
{var or__3408__auto____$1 = (game.protocols.move["_"]);if(or__3408__auto____$1)
{return or__3408__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IMovable.move",x);
}
}
})().call(null,x,y);
}
});
