// Compiled by ClojureScript 0.0-2138
goog.provide('todo.handlers');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('cljs.core.async');
goog.require('clojure.string');
goog.require('clojure.string');
goog.require('om.dom');
goog.require('om.dom');
goog.require('om.core');
goog.require('om.core');
todo.handlers.l = (function l(params){return console.log(params);
});
todo.handlers.set_status = (function set_status(e,state,status){return om.core.update_BANG_.call(null,state,cljs.core.assoc,new cljs.core.Keyword(null,"status","status",4416389988),status);
});
todo.handlers.toggle_todo_state = (function toggle_todo_state(todo__$1){return om.core.update_BANG_.call(null,todo__$1,cljs.core.assoc,new cljs.core.Keyword(null,"status","status",4416389988),new cljs.core.Keyword(null,"inactive","inactive",1038569437));
});
todo.handlers.toggle_todo_view_state = (function toggle_todo_view_state(todo__$1,todo_view){om.core.set_state_BANG_.call(null,todo_view,new cljs.core.Keyword(null,"edit-text","edit-text",3396674178),om.core.read.call(null,todo__$1,new cljs.core.Keyword(null,"name","name",1017277949)));
return om.core.set_state_BANG_.call(null,todo_view,new cljs.core.Keyword(null,"state","state",1123661827),new cljs.core.Keyword(null,"edit","edit",1017012604));
});
todo.handlers.get_classes = (function get_classes(todo__$1){return cljs.core.name.call(null,new cljs.core.Keyword(null,"status","status",4416389988).cljs$core$IFn$_invoke$arity$1(todo__$1));
});
todo.handlers.filter_todos = (function filter_todos(todos,status){var G__9313 = status;if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"all","all",1014000915),G__9313))
{return todos;
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return cljs.core.filter.call(null,(function (p1__9311_SHARP_){return cljs.core._EQ_.call(null,status,new cljs.core.Keyword(null,"status","status",4416389988).cljs$core$IFn$_invoke$arity$1(p1__9311_SHARP_));
}),todos);
} else
{return null;
}
}
});
todo.handlers.add_todo = (function add_todo(e,state,owner){if((e.which === 13))
{var field = om.core.get_node.call(null,owner,"new-todo-field");var value = field.value.trim();if(cljs.core.truth_(clojure.string.blank_QMARK_.call(null,value)))
{return null;
} else
{return om.core.transact_BANG_.call(null,state,new cljs.core.Keyword(null,"todos","todos",1124439135),cljs.core.conj,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1017277949),value,new cljs.core.Keyword(null,"status","status",4416389988),new cljs.core.Keyword(null,"active","active",3885920888)], null));
}
} else
{return null;
}
});
todo.handlers.edit_todo = (function edit_todo(e,todo__$1,owner){if((e.which === 13))
{var value = om.core.get_state.call(null,owner,new cljs.core.Keyword(null,"edit-text","edit-text",3396674178));if(cljs.core.truth_(clojure.string.blank_QMARK_.call(null,value)))
{return null;
} else
{om.core.update_BANG_.call(null,todo__$1,cljs.core.assoc,new cljs.core.Keyword(null,"name","name",1017277949),value);
return om.core.set_state_BANG_.call(null,owner,new cljs.core.Keyword(null,"state","state",1123661827),new cljs.core.Keyword(null,"normal","normal",4269125721));
}
} else
{return null;
}
});
