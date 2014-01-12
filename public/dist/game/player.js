// Compiled by ClojureScript 0.0-2138
goog.provide('game.player');
goog.require('cljs.core');
goog.require('game.protocols');
goog.require('game.protocols');

/**
* @constructor
* @param {*} id
* @param {*} x
* @param {*} y
* @param {*} w
* @param {*} h
* @param {*} __meta
* @param {*} __extmap
* @param {*=} __meta 
* @param {*=} __extmap
*/
game.player.Player = (function (id,x,y,w,h,__meta,__extmap){
this.id = id;
this.x = x;
this.y = y;
this.w = w;
this.h = h;
this.__meta = __meta;
this.__extmap = __extmap;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
if(arguments.length>5){
this.__meta = __meta;
this.__extmap = __extmap;
} else {
this.__meta=null;
this.__extmap=null;
}
})
game.player.Player.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__3983__auto__){var self__ = this;
var this__3983__auto____$1 = this;var h__3819__auto__ = self__.__hash;if(!((h__3819__auto__ == null)))
{return h__3819__auto__;
} else
{var h__3819__auto____$1 = cljs.core.hash_imap.call(null,this__3983__auto____$1);self__.__hash = h__3819__auto____$1;
return h__3819__auto____$1;
}
});
game.player.Player.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__3988__auto__,k__3989__auto__){var self__ = this;
var this__3988__auto____$1 = this;return cljs.core._lookup.call(null,this__3988__auto____$1,k__3989__auto__,null);
});
game.player.Player.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__3990__auto__,k12273,else__3991__auto__){var self__ = this;
var this__3990__auto____$1 = this;if(cljs.core.keyword_identical_QMARK_.call(null,k12273,new cljs.core.Keyword(null,"id","id",1013907597)))
{return self__.id;
} else
{if(cljs.core.keyword_identical_QMARK_.call(null,k12273,new cljs.core.Keyword(null,"x","x",1013904362)))
{return self__.x;
} else
{if(cljs.core.keyword_identical_QMARK_.call(null,k12273,new cljs.core.Keyword(null,"y","y",1013904363)))
{return self__.y;
} else
{if(cljs.core.keyword_identical_QMARK_.call(null,k12273,new cljs.core.Keyword(null,"w","w",1013904361)))
{return self__.w;
} else
{if(cljs.core.keyword_identical_QMARK_.call(null,k12273,new cljs.core.Keyword(null,"h","h",1013904346)))
{return self__.h;
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return cljs.core.get.call(null,self__.__extmap,k12273,else__3991__auto__);
} else
{return null;
}
}
}
}
}
}
});
game.player.Player.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__3995__auto__,k__3996__auto__,G__12272){var self__ = this;
var this__3995__auto____$1 = this;var pred__12275 = cljs.core.keyword_identical_QMARK_;var expr__12276 = k__3996__auto__;if(cljs.core.truth_(pred__12275.call(null,new cljs.core.Keyword(null,"id","id",1013907597),expr__12276)))
{return (new game.player.Player(G__12272,self__.x,self__.y,self__.w,self__.h,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__12275.call(null,new cljs.core.Keyword(null,"x","x",1013904362),expr__12276)))
{return (new game.player.Player(self__.id,G__12272,self__.y,self__.w,self__.h,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__12275.call(null,new cljs.core.Keyword(null,"y","y",1013904363),expr__12276)))
{return (new game.player.Player(self__.id,self__.x,G__12272,self__.w,self__.h,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__12275.call(null,new cljs.core.Keyword(null,"w","w",1013904361),expr__12276)))
{return (new game.player.Player(self__.id,self__.x,self__.y,G__12272,self__.h,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__12275.call(null,new cljs.core.Keyword(null,"h","h",1013904346),expr__12276)))
{return (new game.player.Player(self__.id,self__.x,self__.y,self__.w,G__12272,self__.__meta,self__.__extmap,null));
} else
{return (new game.player.Player(self__.id,self__.x,self__.y,self__.w,self__.h,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__3996__auto__,G__12272),null));
}
}
}
}
}
});
game.player.Player.prototype.game$protocols$IDrawable$ = true;
game.player.Player.prototype.game$protocols$IDrawable$clear$arity$2 = (function (p__12278,canvas){var self__ = this;
var map__12279 = p__12278;var map__12279__$1 = ((cljs.core.seq_QMARK_.call(null,map__12279))?cljs.core.apply.call(null,cljs.core.hash_map,map__12279):map__12279);var h__$1 = cljs.core.get.call(null,map__12279__$1,new cljs.core.Keyword(null,"h","h",1013904346));var w__$1 = cljs.core.get.call(null,map__12279__$1,new cljs.core.Keyword(null,"w","w",1013904361));var y__$1 = cljs.core.get.call(null,map__12279__$1,new cljs.core.Keyword(null,"y","y",1013904363));var x__$1 = cljs.core.get.call(null,map__12279__$1,new cljs.core.Keyword(null,"x","x",1013904362));var map__12280 = this;var map__12280__$1 = ((cljs.core.seq_QMARK_.call(null,map__12280))?cljs.core.apply.call(null,cljs.core.hash_map,map__12280):map__12280);var h__$2 = cljs.core.get.call(null,map__12280__$1,new cljs.core.Keyword(null,"h","h",1013904346));var w__$2 = cljs.core.get.call(null,map__12280__$1,new cljs.core.Keyword(null,"w","w",1013904361));var y__$2 = cljs.core.get.call(null,map__12280__$1,new cljs.core.Keyword(null,"y","y",1013904363));var x__$2 = cljs.core.get.call(null,map__12280__$1,new cljs.core.Keyword(null,"x","x",1013904362));return canvas.clearRect(x__$2,y__$2,w__$2,h__$2);
});
game.player.Player.prototype.game$protocols$IDrawable$draw$arity$3 = (function (p__12281,canvas,color){var self__ = this;
var map__12282 = p__12281;var map__12282__$1 = ((cljs.core.seq_QMARK_.call(null,map__12282))?cljs.core.apply.call(null,cljs.core.hash_map,map__12282):map__12282);var p = map__12282__$1;var h__$1 = cljs.core.get.call(null,map__12282__$1,new cljs.core.Keyword(null,"h","h",1013904346));var w__$1 = cljs.core.get.call(null,map__12282__$1,new cljs.core.Keyword(null,"w","w",1013904361));var y__$1 = cljs.core.get.call(null,map__12282__$1,new cljs.core.Keyword(null,"y","y",1013904363));var x__$1 = cljs.core.get.call(null,map__12282__$1,new cljs.core.Keyword(null,"x","x",1013904362));var map__12283 = this;var map__12283__$1 = ((cljs.core.seq_QMARK_.call(null,map__12283))?cljs.core.apply.call(null,cljs.core.hash_map,map__12283):map__12283);var p__$1 = map__12283__$1;var h__$2 = cljs.core.get.call(null,map__12283__$1,new cljs.core.Keyword(null,"h","h",1013904346));var w__$2 = cljs.core.get.call(null,map__12283__$1,new cljs.core.Keyword(null,"w","w",1013904361));var y__$2 = cljs.core.get.call(null,map__12283__$1,new cljs.core.Keyword(null,"y","y",1013904363));var x__$2 = cljs.core.get.call(null,map__12283__$1,new cljs.core.Keyword(null,"x","x",1013904362));(canvas["fillStyle"] = color);
return canvas.fillRect(x__$2,y__$2,w__$2,h__$2);
});
game.player.Player.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4002__auto__,writer__4003__auto__,opts__4004__auto__){var self__ = this;
var this__4002__auto____$1 = this;var pr_pair__4005__auto__ = (function (keyval__4006__auto__){return cljs.core.pr_sequential_writer.call(null,writer__4003__auto__,cljs.core.pr_writer,""," ","",opts__4004__auto__,keyval__4006__auto__);
});return cljs.core.pr_sequential_writer.call(null,writer__4003__auto__,pr_pair__4005__auto__,"#game.player.Player{",", ","}",opts__4004__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"id","id",1013907597),self__.id],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"x","x",1013904362),self__.x],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"y","y",1013904363),self__.y],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"w","w",1013904361),self__.w],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"h","h",1013904346),self__.h],null))], null),self__.__extmap));
});
game.player.Player.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__3993__auto__,entry__3994__auto__){var self__ = this;
var this__3993__auto____$1 = this;if(cljs.core.vector_QMARK_.call(null,entry__3994__auto__))
{return cljs.core._assoc.call(null,this__3993__auto____$1,cljs.core._nth.call(null,entry__3994__auto__,0),cljs.core._nth.call(null,entry__3994__auto__,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,this__3993__auto____$1,entry__3994__auto__);
}
});
game.player.Player.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4000__auto__){var self__ = this;
var this__4000__auto____$1 = this;return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"id","id",1013907597),self__.id],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"x","x",1013904362),self__.x],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"y","y",1013904363),self__.y],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"w","w",1013904361),self__.w],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"h","h",1013904346),self__.h],null))], null),self__.__extmap));
});
game.player.Player.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__3992__auto__){var self__ = this;
var this__3992__auto____$1 = this;return (5 + cljs.core.count.call(null,self__.__extmap));
});
game.player.Player.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__3984__auto__,other__3985__auto__){var self__ = this;
var this__3984__auto____$1 = this;if(cljs.core.truth_((function (){var and__3396__auto__ = other__3985__auto__;if(cljs.core.truth_(and__3396__auto__))
{return ((this__3984__auto____$1.constructor === other__3985__auto__.constructor)) && (cljs.core.equiv_map.call(null,this__3984__auto____$1,other__3985__auto__));
} else
{return and__3396__auto__;
}
})()))
{return true;
} else
{return false;
}
});
game.player.Player.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__3987__auto__,G__12272){var self__ = this;
var this__3987__auto____$1 = this;return (new game.player.Player(self__.id,self__.x,self__.y,self__.w,self__.h,G__12272,self__.__extmap,self__.__hash));
});
game.player.Player.prototype.cljs$core$ICloneable$ = true;
game.player.Player.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (p){var self__ = this;
var p__$1 = this;return (new game.player.Player(new cljs.core.Keyword(null,"id","id",1013907597).cljs$core$IFn$_invoke$arity$1(p__$1),new cljs.core.Keyword(null,"x","x",1013904362).cljs$core$IFn$_invoke$arity$1(p__$1),new cljs.core.Keyword(null,"y","y",1013904363).cljs$core$IFn$_invoke$arity$1(p__$1),new cljs.core.Keyword(null,"w","w",1013904361).cljs$core$IFn$_invoke$arity$1(p__$1),new cljs.core.Keyword(null,"h","h",1013904346).cljs$core$IFn$_invoke$arity$1(p__$1)));
});
game.player.Player.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__3986__auto__){var self__ = this;
var this__3986__auto____$1 = this;return self__.__meta;
});
game.player.Player.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__3997__auto__,k__3998__auto__){var self__ = this;
var this__3997__auto____$1 = this;if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"y","y",1013904363),null,new cljs.core.Keyword(null,"x","x",1013904362),null,new cljs.core.Keyword(null,"h","h",1013904346),null,new cljs.core.Keyword(null,"w","w",1013904361),null,new cljs.core.Keyword(null,"id","id",1013907597),null], null), null),k__3998__auto__))
{return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__3997__auto____$1),self__.__meta),k__3998__auto__);
} else
{return (new game.player.Player(self__.id,self__.x,self__.y,self__.w,self__.h,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__3998__auto__)),null));
}
});
game.player.Player.cljs$lang$type = true;
game.player.Player.cljs$lang$ctorPrSeq = (function (this__4022__auto__){return cljs.core._conj.call(null,cljs.core.List.EMPTY,"game.player/Player");
});
game.player.Player.cljs$lang$ctorPrWriter = (function (this__4022__auto__,writer__4023__auto__){return cljs.core._write.call(null,writer__4023__auto__,"game.player/Player");
});
game.player.__GT_Player = (function __GT_Player(id,x,y,w,h){return (new game.player.Player(id,x,y,w,h));
});
game.player.map__GT_Player = (function map__GT_Player(G__12274){return (new game.player.Player(new cljs.core.Keyword(null,"id","id",1013907597).cljs$core$IFn$_invoke$arity$1(G__12274),new cljs.core.Keyword(null,"x","x",1013904362).cljs$core$IFn$_invoke$arity$1(G__12274),new cljs.core.Keyword(null,"y","y",1013904363).cljs$core$IFn$_invoke$arity$1(G__12274),new cljs.core.Keyword(null,"w","w",1013904361).cljs$core$IFn$_invoke$arity$1(G__12274),new cljs.core.Keyword(null,"h","h",1013904346).cljs$core$IFn$_invoke$arity$1(G__12274),null,cljs.core.dissoc.call(null,G__12274,new cljs.core.Keyword(null,"id","id",1013907597),new cljs.core.Keyword(null,"x","x",1013904362),new cljs.core.Keyword(null,"y","y",1013904363),new cljs.core.Keyword(null,"w","w",1013904361),new cljs.core.Keyword(null,"h","h",1013904346))));
});
game.player.generate_player = (function generate_player(id,config){var w = new cljs.core.Keyword(null,"player-width","player-width",3971244876).cljs$core$IFn$_invoke$arity$1(config);var h = new cljs.core.Keyword(null,"player-height","player-height",2064155909).cljs$core$IFn$_invoke$arity$1(config);return (new game.player.Player(id,cljs.core.rand_int.call(null,500),cljs.core.rand_int.call(null,500),w,h));
});
game.player.generate_players = (function generate_players(config){var p_width = new cljs.core.Keyword(null,"player-width","player-width",3971244876).cljs$core$IFn$_invoke$arity$1(config);var p_height = new cljs.core.Keyword(null,"player-height","player-height",2064155909).cljs$core$IFn$_invoke$arity$1(config);return cljs.core.reduce.call(null,(function (p1__12284_SHARP_,p2__12285_SHARP_){return cljs.core.assoc.call(null,p1__12284_SHARP_,p2__12285_SHARP_,game.player.generate_player.call(null,p2__12285_SHARP_,config));
}),cljs.core.PersistentArrayMap.EMPTY,cljs.core.range.call(null,10));
});
