// Compiled by ClojureScript 0.0-2138
goog.provide('main.ajax');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('cljs.core.async');
main.ajax.ajax_req = (function ajax_req(url,method){var req = (new XMLHttpRequest());var ch = cljs.core.async.chan.call(null);req.open(method,url,true);
(req["onreadystatechange"] = (function (){if((cljs.core._EQ_.call(null,4,req.readyState)) && (cljs.core._EQ_.call(null,200,req.status)))
{var json = cljs.core.js__GT_clj.call(null,JSON.parse.call(null,req.responseText));return cljs.core.async.put_BANG_.call(null,ch,json);
} else
{return null;
}
}));
req.send(null);
return ch;
});
main.ajax.GET = (function GET(url){return main.ajax.ajax_req.call(null,url,"GET");
});
