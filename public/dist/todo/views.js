// Compiled by ClojureScript 0.0-2138
goog.provide('todo.views');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('todo.handlers');
goog.require('todo.handlers');
goog.require('cljs.core.async');
goog.require('om.dom');
goog.require('om.dom');
goog.require('om.core');
goog.require('om.core');
todo.views.filter_view = (function filter_view(state,owner){if(typeof todo.views.t9320 !== 'undefined')
{} else
{
/**
* @constructor
*/
todo.views.t9320 = (function (owner,state,filter_view,meta9321){
this.owner = owner;
this.state = state;
this.filter_view = filter_view;
this.meta9321 = meta9321;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
todo.views.t9320.cljs$lang$type = true;
todo.views.t9320.cljs$lang$ctorStr = "todo.views/t9320";
todo.views.t9320.cljs$lang$ctorPrWriter = (function (this__3970__auto__,writer__3971__auto__,opt__3972__auto__){return cljs.core._write.call(null,writer__3971__auto__,"todo.views/t9320");
});
todo.views.t9320.prototype.om$core$IRender$ = true;
todo.views.t9320.prototype.om$core$IRender$render$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return React.DOM.div({"className": "filter-view"},React.DOM.a({"onClick": (function (p1__9314_SHARP_){return todo.handlers.set_status.call(null,p1__9314_SHARP_,self__.state,new cljs.core.Keyword(null,"active","active",3885920888));
})},"Active"),React.DOM.a({"onClick": (function (p1__9315_SHARP_){return todo.handlers.set_status.call(null,p1__9315_SHARP_,self__.state,new cljs.core.Keyword(null,"inactive","inactive",1038569437));
})},"Inactive"),React.DOM.a({"onClick": (function (p1__9316_SHARP_){return todo.handlers.set_status.call(null,p1__9316_SHARP_,self__.state,new cljs.core.Keyword(null,"all","all",1014000915));
})},"All"));
});
todo.views.t9320.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_9322){var self__ = this;
var _9322__$1 = this;return self__.meta9321;
});
todo.views.t9320.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_9322,meta9321__$1){var self__ = this;
var _9322__$1 = this;return (new todo.views.t9320(self__.owner,self__.state,self__.filter_view,meta9321__$1));
});
todo.views.__GT_t9320 = (function __GT_t9320(owner__$1,state__$1,filter_view__$1,meta9321){return (new todo.views.t9320(owner__$1,state__$1,filter_view__$1,meta9321));
});
}
return (new todo.views.t9320(owner,state,filter_view,null));
});
todo.views.todo_view = (function todo_view(todo__$1,owner){if(typeof todo.views.t9329 !== 'undefined')
{} else
{
/**
* @constructor
*/
todo.views.t9329 = (function (owner,todo,todo_view,meta9330){
this.owner = owner;
this.todo = todo;
this.todo_view = todo_view;
this.meta9330 = meta9330;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
todo.views.t9329.cljs$lang$type = true;
todo.views.t9329.cljs$lang$ctorStr = "todo.views/t9329";
todo.views.t9329.cljs$lang$ctorPrWriter = (function (this__3970__auto__,writer__3971__auto__,opt__3972__auto__){return cljs.core._write.call(null,writer__3971__auto__,"todo.views/t9329");
});
todo.views.t9329.prototype.om$core$IRender$ = true;
todo.views.t9329.prototype.om$core$IRender$render$arity$1 = (function (_){var self__ = this;
var ___$1 = this;var state = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"state","state",1123661827));return React.DOM.li(null,React.DOM.div({"className": [cljs.core.str("todo-view "),cljs.core.str(todo.handlers.get_classes.call(null,self__.todo))].join('')},(function (){var G__9332 = state;if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"edit","edit",1017012604),G__9332))
{return om.dom.input.call(null,{"onKeyDown": (function (p1__9324_SHARP_){return todo.handlers.edit_todo.call(null,p1__9324_SHARP_,self__.todo,self__.owner);
}), "onChange": (function (p1__9323_SHARP_){return om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"edit-text","edit-text",3396674178),p1__9323_SHARP_.target.value);
}), "value": om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"edit-text","edit-text",3396674178)), "ref": "edit-todo-field"});
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"normal","normal",4269125721),G__9332))
{return React.DOM.div({"onDoubleClick": (function (){return todo.handlers.toggle_todo_view_state.call(null,self__.todo,self__.owner);
}), "onClick": (function (){return todo.handlers.toggle_todo_state.call(null,self__.todo);
})},new cljs.core.Keyword(null,"name","name",1017277949).cljs$core$IFn$_invoke$arity$1(self__.todo));
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(state)].join('')));
} else
{return null;
}
}
}
})()));
});
todo.views.t9329.prototype.om$core$IInitState$ = true;
todo.views.t9329.prototype.om$core$IInitState$init_state$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"state","state",1123661827),new cljs.core.Keyword(null,"normal","normal",4269125721),new cljs.core.Keyword(null,"edit-text","edit-text",3396674178),""], null);
});
todo.views.t9329.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_9331){var self__ = this;
var _9331__$1 = this;return self__.meta9330;
});
todo.views.t9329.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_9331,meta9330__$1){var self__ = this;
var _9331__$1 = this;return (new todo.views.t9329(self__.owner,self__.todo,self__.todo_view,meta9330__$1));
});
todo.views.__GT_t9329 = (function __GT_t9329(owner__$1,todo__$2,todo_view__$1,meta9330){return (new todo.views.t9329(owner__$1,todo__$2,todo_view__$1,meta9330));
});
}
return (new todo.views.t9329(owner,todo__$1,todo_view,null));
});
todo.views.todos_view = (function todos_view(state,owner){if(typeof todo.views.t9336 !== 'undefined')
{} else
{
/**
* @constructor
*/
todo.views.t9336 = (function (owner,state,todos_view,meta9337){
this.owner = owner;
this.state = state;
this.todos_view = todos_view;
this.meta9337 = meta9337;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
todo.views.t9336.cljs$lang$type = true;
todo.views.t9336.cljs$lang$ctorStr = "todo.views/t9336";
todo.views.t9336.cljs$lang$ctorPrWriter = (function (this__3970__auto__,writer__3971__auto__,opt__3972__auto__){return cljs.core._write.call(null,writer__3971__auto__,"todo.views/t9336");
});
todo.views.t9336.prototype.om$core$IRender$ = true;
todo.views.t9336.prototype.om$core$IRender$render$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return React.DOM.div({"className": "todos-view"},React.DOM.ul(null,om.core.build_all.call(null,todo.views.todo_view,todo.handlers.filter_todos.call(null,new cljs.core.Keyword(null,"todos","todos",1124439135).cljs$core$IFn$_invoke$arity$1(self__.state),new cljs.core.Keyword(null,"status","status",4416389988).cljs$core$IFn$_invoke$arity$1(self__.state)),cljs.core.PersistentArrayMap.EMPTY)));
});
todo.views.t9336.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_9338){var self__ = this;
var _9338__$1 = this;return self__.meta9337;
});
todo.views.t9336.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_9338,meta9337__$1){var self__ = this;
var _9338__$1 = this;return (new todo.views.t9336(self__.owner,self__.state,self__.todos_view,meta9337__$1));
});
todo.views.__GT_t9336 = (function __GT_t9336(owner__$1,state__$1,todos_view__$1,meta9337){return (new todo.views.t9336(owner__$1,state__$1,todos_view__$1,meta9337));
});
}
return (new todo.views.t9336(owner,state,todos_view,null));
});
todo.views.form_view = (function form_view(state,owner){if(typeof todo.views.t9343 !== 'undefined')
{} else
{
/**
* @constructor
*/
todo.views.t9343 = (function (owner,state,form_view,meta9344){
this.owner = owner;
this.state = state;
this.form_view = form_view;
this.meta9344 = meta9344;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
todo.views.t9343.cljs$lang$type = true;
todo.views.t9343.cljs$lang$ctorStr = "todo.views/t9343";
todo.views.t9343.cljs$lang$ctorPrWriter = (function (this__3970__auto__,writer__3971__auto__,opt__3972__auto__){return cljs.core._write.call(null,writer__3971__auto__,"todo.views/t9343");
});
todo.views.t9343.prototype.om$core$IRender$ = true;
todo.views.t9343.prototype.om$core$IRender$render$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return React.DOM.div({"className": "form-view"},om.dom.input.call(null,{"onKeyDown": (function (p1__9339_SHARP_){return todo.handlers.add_todo.call(null,p1__9339_SHARP_,self__.state,self__.owner);
}), "ref": "new-todo-field"}));
});
todo.views.t9343.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_9345){var self__ = this;
var _9345__$1 = this;return self__.meta9344;
});
todo.views.t9343.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_9345,meta9344__$1){var self__ = this;
var _9345__$1 = this;return (new todo.views.t9343(self__.owner,self__.state,self__.form_view,meta9344__$1));
});
todo.views.__GT_t9343 = (function __GT_t9343(owner__$1,state__$1,form_view__$1,meta9344){return (new todo.views.t9343(owner__$1,state__$1,form_view__$1,meta9344));
});
}
return (new todo.views.t9343(owner,state,form_view,null));
});
todo.views.app_view = (function app_view(state,owner){if(typeof todo.views.t9349 !== 'undefined')
{} else
{
/**
* @constructor
*/
todo.views.t9349 = (function (owner,state,app_view,meta9350){
this.owner = owner;
this.state = state;
this.app_view = app_view;
this.meta9350 = meta9350;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
todo.views.t9349.cljs$lang$type = true;
todo.views.t9349.cljs$lang$ctorStr = "todo.views/t9349";
todo.views.t9349.cljs$lang$ctorPrWriter = (function (this__3970__auto__,writer__3971__auto__,opt__3972__auto__){return cljs.core._write.call(null,writer__3971__auto__,"todo.views/t9349");
});
todo.views.t9349.prototype.om$core$IRender$ = true;
todo.views.t9349.prototype.om$core$IRender$render$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return React.DOM.div({"className": "app-view"},om.core.build.call(null,todo.views.filter_view,self__.state),om.core.build.call(null,todo.views.form_view,self__.state),om.core.build.call(null,todo.views.todos_view,self__.state));
});
todo.views.t9349.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_9351){var self__ = this;
var _9351__$1 = this;return self__.meta9350;
});
todo.views.t9349.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_9351,meta9350__$1){var self__ = this;
var _9351__$1 = this;return (new todo.views.t9349(self__.owner,self__.state,self__.app_view,meta9350__$1));
});
todo.views.__GT_t9349 = (function __GT_t9349(owner__$1,state__$1,app_view__$1,meta9350){return (new todo.views.t9349(owner__$1,state__$1,app_view__$1,meta9350));
});
}
return (new todo.views.t9349(owner,state,app_view,null));
});
