// Compiled by ClojureScript 1.9.293 {:static-fns true, :optimize-constants true}
goog.provide('hoplon.app_pages._index_DOT_html');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('parallelism.values');
goog.require('javelin.core');
goog.require('hoplon.jquery');
goog.require('hoplon.core');
hoplon.app_pages._index_DOT_html.default_overhead = (5);
hoplon.app_pages._index_DOT_html.overhead = javelin.core.cell.cljs$core$IFn$_invoke$arity$1(parallelism.values.value(hoplon.app_pages._index_DOT_html.default_overhead));
hoplon.app_pages._index_DOT_html.default_runtime = (60);
hoplon.app_pages._index_DOT_html.runtime = javelin.core.cell.cljs$core$IFn$_invoke$arity$1(parallelism.values.value(hoplon.app_pages._index_DOT_html.default_runtime));
hoplon.app_pages._index_DOT_html.default_max_threads = (16);
hoplon.app_pages._index_DOT_html.max_threads = javelin.core.cell.cljs$core$IFn$_invoke$arity$1(parallelism.values.value(hoplon.app_pages._index_DOT_html.default_max_threads));
var __14469 = javelin.core.formula((function (G__14464,G__14463){
return (G__14463.cljs$core$IFn$_invoke$arity$2 ? G__14463.cljs$core$IFn$_invoke$arity$2("overhead:",G__14464) : G__14463.call(null,"overhead:",G__14464));
})).call(null,hoplon.app_pages._index_DOT_html.overhead,cljs.core.print);
var __14470__$1 = javelin.core.formula(((function (__14469){
return (function (G__14465,G__14466){
return (G__14465.cljs$core$IFn$_invoke$arity$2 ? G__14465.cljs$core$IFn$_invoke$arity$2("runtime:",G__14466) : G__14465.call(null,"runtime:",G__14466));
});})(__14469))
).call(null,cljs.core.print,hoplon.app_pages._index_DOT_html.runtime);
var __14471__$2 = javelin.core.formula(((function (__14469,__14470__$1){
return (function (G__14468,G__14467){
return (G__14467.cljs$core$IFn$_invoke$arity$2 ? G__14467.cljs$core$IFn$_invoke$arity$2("max-threads:",G__14468) : G__14467.call(null,"max-threads:",G__14468));
});})(__14469,__14470__$1))
).call(null,hoplon.app_pages._index_DOT_html.max_threads,cljs.core.print);
hoplon.app_pages._index_DOT_html.route = hoplon.core.route_cell();
hoplon.app_pages._index_DOT_html.route_with_defaults = javelin.core.formula((function (G__14472,G__14476,G__14475,G__14473,G__14474){
if(cljs.core.truth_((G__14472.cljs$core$IFn$_invoke$arity$2 ? G__14472.cljs$core$IFn$_invoke$arity$2(null,G__14473) : G__14472.call(null,null,G__14473)))){
return [cljs.core.str("#"),cljs.core.str(G__14474),cljs.core.str("/"),cljs.core.str(G__14475),cljs.core.str("/"),cljs.core.str(G__14476)].join('');
} else {
return G__14473;
}
})).call(null,cljs.core._EQ_,hoplon.app_pages._index_DOT_html.default_runtime,hoplon.app_pages._index_DOT_html.default_overhead,hoplon.app_pages._index_DOT_html.route,hoplon.app_pages._index_DOT_html.default_max_threads);
hoplon.app_pages._index_DOT_html.params = javelin.core.formula((function (G__14479,G__14477,G__14478,G__14480){
var G__14481 = parseFloat;
var G__14482 = (function (){var G__14483 = (G__14479.cljs$core$IFn$_invoke$arity$2 ? G__14479.cljs$core$IFn$_invoke$arity$2(G__14480,(1)) : G__14479.call(null,G__14480,(1)));
var G__14484 = /\//;
return (G__14478.cljs$core$IFn$_invoke$arity$2 ? G__14478.cljs$core$IFn$_invoke$arity$2(G__14483,G__14484) : G__14478.call(null,G__14483,G__14484));
})();
return (G__14477.cljs$core$IFn$_invoke$arity$2 ? G__14477.cljs$core$IFn$_invoke$arity$2(G__14481,G__14482) : G__14477.call(null,G__14481,G__14482));
})).call(null,cljs.core.subs,cljs.core.map,clojure.string.split,hoplon.app_pages._index_DOT_html.route_with_defaults);
hoplon.app_pages._index_DOT_html.param_inputs = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [hoplon.app_pages._index_DOT_html.max_threads,hoplon.app_pages._index_DOT_html.overhead,hoplon.app_pages._index_DOT_html.runtime], null);
hoplon.app_pages._index_DOT_html.update_param_BANG_ = (function hoplon$app_pages$_index_DOT_html$update_param_BANG_(p__14485){
var vec__14491 = p__14485;
var input = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14491,(0),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14491,(1),null);
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(value,"")){
var G__14494 = input;
var G__14495 = parallelism.values.value(value);
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__14494,G__14495) : cljs.core.reset_BANG_.call(null,G__14494,G__14495));
} else {
return null;
}
});
hoplon.app_pages._index_DOT_html.param_updates = javelin.core.formula((function (G__14500,G__14498,G__14501,G__14496,G__14497,G__14499){
var G__14502 = G__14497;
var G__14503 = (G__14498.cljs$core$IFn$_invoke$arity$3 ? G__14498.cljs$core$IFn$_invoke$arity$3(G__14499,G__14500,G__14501) : G__14498.call(null,G__14499,G__14500,G__14501));
return (G__14496.cljs$core$IFn$_invoke$arity$2 ? G__14496.cljs$core$IFn$_invoke$arity$2(G__14502,G__14503) : G__14496.call(null,G__14502,G__14503));
})).call(null,hoplon.app_pages._index_DOT_html.param_inputs,cljs.core.map,hoplon.app_pages._index_DOT_html.params,cljs.core.run_BANG_,hoplon.app_pages._index_DOT_html.update_param_BANG_,cljs.core.vector);
hoplon.app_pages._index_DOT_html.route_from_values = javelin.core.formula((function (G__14505,G__14506,G__14507,G__14504){
return [cljs.core.str("#"),cljs.core.str((G__14504.cljs$core$IFn$_invoke$arity$2 ? G__14504.cljs$core$IFn$_invoke$arity$2(G__14505,"") : G__14504.call(null,G__14505,""))),cljs.core.str("/"),cljs.core.str((G__14504.cljs$core$IFn$_invoke$arity$2 ? G__14504.cljs$core$IFn$_invoke$arity$2(G__14506,"") : G__14504.call(null,G__14506,""))),cljs.core.str("/"),cljs.core.str((G__14504.cljs$core$IFn$_invoke$arity$2 ? G__14504.cljs$core$IFn$_invoke$arity$2(G__14507,"") : G__14504.call(null,G__14507,"")))].join('');
})).call(null,hoplon.app_pages._index_DOT_html.max_threads,hoplon.app_pages._index_DOT_html.overhead,hoplon.app_pages._index_DOT_html.runtime,parallelism.values.safe_value);
hoplon.app_pages._index_DOT_html.route_updates = javelin.core.formula((function (G__14508){
return document.location.hash = G__14508;
})).call(null,hoplon.app_pages._index_DOT_html.route_from_values);
/**
 * @param {...*} var_args
 */
hoplon.app_pages._index_DOT_html.number_input = (function() { 
var hoplon$app_pages$_index_DOT_html$number_input__delegate = function (args__13796__auto__){
var vec__14548 = hoplon.core.parse_args(args__13796__auto__);
var map__14551 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14548,(0),null);
var map__14551__$1 = ((((!((map__14551 == null)))?((((map__14551.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14551.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__14551):map__14551);
var to = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14551__$1,cljs.core.cst$kw$to);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14551__$1,cljs.core.cst$kw$name);
var children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14548,(1),null);
hoplon.app_pages._index_DOT_html.from_string = ((function (vec__14548,map__14551,map__14551__$1,to,name,children){
return (function hoplon$app_pages$_index_DOT_html$number_input_$_from_string(value){
return parseFloat(value);
});})(vec__14548,map__14551,map__14551__$1,to,name,children))
;

hoplon.app_pages._index_DOT_html.validity = ((function (vec__14548,map__14551,map__14551__$1,to,name,children){
return (function hoplon$app_pages$_index_DOT_html$number_input_$_validity(value){
return cljs.core.not((function (){var G__14554 = hoplon.app_pages._index_DOT_html.from_string(value);
return isNaN(G__14554);
})());
});})(vec__14548,map__14551,map__14551__$1,to,name,children))
;

hoplon.app_pages._index_DOT_html.update_to_BANG_ = ((function (vec__14548,map__14551,map__14551__$1,to,name,children){
return (function hoplon$app_pages$_index_DOT_html$number_input_$_update_to_BANG_(value){
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(to,value) : cljs.core.reset_BANG_.call(null,to,value));
});})(vec__14548,map__14551,map__14551__$1,to,name,children))
;

var val = javelin.core.cell.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$value.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(to) : cljs.core.deref.call(null,to))));
var update_to_BANG_ = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.reset_BANG_,to);
var update_val_BANG_ = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.reset_BANG_,val);
var valid = javelin.core.formula(((function (val,update_to_BANG_,update_val_BANG_,vec__14548,map__14551,map__14551__$1,to,name,children){
return (function (G__14555,G__14556){
return (G__14555.cljs$core$IFn$_invoke$arity$1 ? G__14555.cljs$core$IFn$_invoke$arity$1(G__14556) : G__14555.call(null,G__14556));
});})(val,update_to_BANG_,update_val_BANG_,vec__14548,map__14551,map__14551__$1,to,name,children))
).call(null,hoplon.app_pages._index_DOT_html.validity,val);
var _ = javelin.core.formula(((function (val,update_to_BANG_,update_val_BANG_,valid,vec__14548,map__14551,map__14551__$1,to,name,children){
return (function (G__14558,G__14557){
var G__14559 = cljs.core.cst$kw$value.cljs$core$IFn$_invoke$arity$1(G__14558);
return (G__14557.cljs$core$IFn$_invoke$arity$1 ? G__14557.cljs$core$IFn$_invoke$arity$1(G__14559) : G__14557.call(null,G__14559));
});})(val,update_to_BANG_,update_val_BANG_,valid,vec__14548,map__14551,map__14551__$1,to,name,children))
).call(null,to,update_val_BANG_);
var ___$1 = javelin.core.formula(((function (val,update_to_BANG_,update_val_BANG_,valid,_,vec__14548,map__14551,map__14551__$1,to,name,children){
return (function (G__14561,G__14563,G__14565,G__14564,G__14560,G__14562){
var G__14566 = (cljs.core.truth_(G__14561)?(function (){var G__14567 = (G__14563.cljs$core$IFn$_invoke$arity$1 ? G__14563.cljs$core$IFn$_invoke$arity$1(G__14564) : G__14563.call(null,G__14564));
return (G__14562.cljs$core$IFn$_invoke$arity$1 ? G__14562.cljs$core$IFn$_invoke$arity$1(G__14567) : G__14562.call(null,G__14567));
})():(G__14565.cljs$core$IFn$_invoke$arity$2 ? G__14565.cljs$core$IFn$_invoke$arity$2(G__14564,"Value is invalid") : G__14565.call(null,G__14564,"Value is invalid")));
return (G__14560.cljs$core$IFn$_invoke$arity$1 ? G__14560.cljs$core$IFn$_invoke$arity$1(G__14566) : G__14560.call(null,G__14566));
});})(val,update_to_BANG_,update_val_BANG_,valid,_,vec__14548,map__14551,map__14551__$1,to,name,children))
).call(null,valid,hoplon.app_pages._index_DOT_html.from_string,parallelism.values.error,val,update_to_BANG_,parallelism.values.value);
var G__14568 = cljs.core.cst$kw$class;
var G__14569 = "field";
var G__14570 = (function (){var G__14572 = cljs.core.cst$kw$class;
var G__14573 = javelin.core.formula(((function (G__14572,G__14568,G__14569,val,update_to_BANG_,update_val_BANG_,valid,_,___$1,vec__14548,map__14551,map__14551__$1,to,name,children){
return (function (G__14577,G__14576){
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$input,true,cljs.core.cst$kw$invalid,(G__14576.cljs$core$IFn$_invoke$arity$1 ? G__14576.cljs$core$IFn$_invoke$arity$1(G__14577) : G__14576.call(null,G__14577))], null);
});})(G__14572,G__14568,G__14569,val,update_to_BANG_,update_val_BANG_,valid,_,___$1,vec__14548,map__14551,map__14551__$1,to,name,children))
).call(null,valid,cljs.core.not);
var G__14574 = (hoplon.core.label.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.label.cljs$core$IFn$_invoke$arity$1(name) : hoplon.core.label.call(null,name));
var G__14575 = (function (){var G__14578 = cljs.core.cst$kw$value;
var G__14579 = val;
var G__14580 = cljs.core.cst$kw$input;
var G__14581 = ((function (G__14578,G__14579,G__14580,G__14572,G__14573,G__14574,G__14568,G__14569,val,update_to_BANG_,update_val_BANG_,valid,_,___$1,vec__14548,map__14551,map__14551__$1,to,name,children){
return (function (p1__14509_SHARP_){
var G__14584 = val;
var G__14585 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(p1__14509_SHARP_) : cljs.core.deref.call(null,p1__14509_SHARP_));
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__14584,G__14585) : cljs.core.reset_BANG_.call(null,G__14584,G__14585));
});})(G__14578,G__14579,G__14580,G__14572,G__14573,G__14574,G__14568,G__14569,val,update_to_BANG_,update_val_BANG_,valid,_,___$1,vec__14548,map__14551,map__14551__$1,to,name,children))
;
var G__14582 = cljs.core.cst$kw$click;
var G__14583 = ((function (G__14578,G__14579,G__14580,G__14581,G__14582,G__14572,G__14573,G__14574,G__14568,G__14569,val,update_to_BANG_,update_val_BANG_,valid,_,___$1,vec__14548,map__14551,map__14551__$1,to,name,children){
return (function (){
var field = this;
return jQuery(field).select();
});})(G__14578,G__14579,G__14580,G__14581,G__14582,G__14572,G__14573,G__14574,G__14568,G__14569,val,update_to_BANG_,update_val_BANG_,valid,_,___$1,vec__14548,map__14551,map__14551__$1,to,name,children))
;
return (hoplon.core.input.cljs$core$IFn$_invoke$arity$6 ? hoplon.core.input.cljs$core$IFn$_invoke$arity$6(G__14578,G__14579,G__14580,G__14581,G__14582,G__14583) : hoplon.core.input.call(null,G__14578,G__14579,G__14580,G__14581,G__14582,G__14583));
})();
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$4 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$4(G__14572,G__14573,G__14574,G__14575) : hoplon.core.div.call(null,G__14572,G__14573,G__14574,G__14575));
})();
var G__14571 = children;
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$4 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$4(G__14568,G__14569,G__14570,G__14571) : hoplon.core.div.call(null,G__14568,G__14569,G__14570,G__14571));
};
var hoplon$app_pages$_index_DOT_html$number_input = function (var_args){
var args__13796__auto__ = null;
if (arguments.length > 0) {
var G__14586__i = 0, G__14586__a = new Array(arguments.length -  0);
while (G__14586__i < G__14586__a.length) {G__14586__a[G__14586__i] = arguments[G__14586__i + 0]; ++G__14586__i;}
  args__13796__auto__ = new cljs.core.IndexedSeq(G__14586__a,0);
} 
return hoplon$app_pages$_index_DOT_html$number_input__delegate.call(this,args__13796__auto__);};
hoplon$app_pages$_index_DOT_html$number_input.cljs$lang$maxFixedArity = 0;
hoplon$app_pages$_index_DOT_html$number_input.cljs$lang$applyTo = (function (arglist__14587){
var args__13796__auto__ = cljs.core.seq(arglist__14587);
return hoplon$app_pages$_index_DOT_html$number_input__delegate(args__13796__auto__);
});
hoplon$app_pages$_index_DOT_html$number_input.cljs$core$IFn$_invoke$arity$variadic = hoplon$app_pages$_index_DOT_html$number_input__delegate;
return hoplon$app_pages$_index_DOT_html$number_input;
})()
;
/**
 * @param {...*} var_args
 */
hoplon.app_pages._index_DOT_html.graph = (function() { 
var hoplon$app_pages$_index_DOT_html$graph__delegate = function (args__13796__auto__){
var vec__14601 = hoplon.core.parse_args(args__13796__auto__);
var map__14604 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14601,(0),null);
var map__14604__$1 = ((((!((map__14604 == null)))?((((map__14604.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14604.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__14604):map__14604);
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14604__$1,cljs.core.cst$kw$data);
var xgrid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14604__$1,cljs.core.cst$kw$xgrid);
var axis = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14604__$1,cljs.core.cst$kw$axis);
var point = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14604__$1,cljs.core.cst$kw$point);
var size = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14604__$1,cljs.core.cst$kw$size);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14601,(1),null);
var elem = (function (){var G__14606 = cljs.core.cst$kw$class;
var G__14607 = "graph";
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$2 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$2(G__14606,G__14607) : hoplon.core.div.call(null,G__14606,G__14607));
})();
var ___$1 = hoplon.core.when_dom(elem,((function (elem,vec__14601,map__14604,map__14604__$1,data,xgrid,axis,point,size,_){
return (function (){
var chart = c3.generate(cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$bindto,elem,cljs.core.cst$kw$data,(cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(data) : cljs.core.deref.call(null,data)),cljs.core.cst$kw$grid,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$x,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$lines,(cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(xgrid) : cljs.core.deref.call(null,xgrid))], null)], null),cljs.core.cst$kw$axis,axis,cljs.core.cst$kw$point,point,cljs.core.cst$kw$size,size], null)));
var ___$1 = javelin.core.formula(((function (chart,elem,vec__14601,map__14604,map__14604__$1,data,xgrid,axis,point,size,_){
return (function (G__14610,G__14608,G__14609){
var ___$1 = G__14608.load((G__14609.cljs$core$IFn$_invoke$arity$1 ? G__14609.cljs$core$IFn$_invoke$arity$1(G__14610) : G__14609.call(null,G__14610)));
var ___$2 = G__14608.flush();
return null;
});})(chart,elem,vec__14601,map__14604,map__14604__$1,data,xgrid,axis,point,size,_))
).call(null,data,chart,cljs.core.clj__GT_js);
var ___$2 = javelin.core.formula(((function (chart,___$1,elem,vec__14601,map__14604,map__14604__$1,data,xgrid,axis,point,size,_){
return (function (G__14613,G__14611,G__14612){
return G__14611.xgrids((G__14612.cljs$core$IFn$_invoke$arity$1 ? G__14612.cljs$core$IFn$_invoke$arity$1(G__14613) : G__14612.call(null,G__14613)));
});})(chart,___$1,elem,vec__14601,map__14604,map__14604__$1,data,xgrid,axis,point,size,_))
).call(null,xgrid,chart,cljs.core.clj__GT_js);
return null;
});})(elem,vec__14601,map__14604,map__14604__$1,data,xgrid,axis,point,size,_))
);
return elem;
};
var hoplon$app_pages$_index_DOT_html$graph = function (var_args){
var args__13796__auto__ = null;
if (arguments.length > 0) {
var G__14614__i = 0, G__14614__a = new Array(arguments.length -  0);
while (G__14614__i < G__14614__a.length) {G__14614__a[G__14614__i] = arguments[G__14614__i + 0]; ++G__14614__i;}
  args__13796__auto__ = new cljs.core.IndexedSeq(G__14614__a,0);
} 
return hoplon$app_pages$_index_DOT_html$graph__delegate.call(this,args__13796__auto__);};
hoplon$app_pages$_index_DOT_html$graph.cljs$lang$maxFixedArity = 0;
hoplon$app_pages$_index_DOT_html$graph.cljs$lang$applyTo = (function (arglist__14615){
var args__13796__auto__ = cljs.core.seq(arglist__14615);
return hoplon$app_pages$_index_DOT_html$graph__delegate(args__13796__auto__);
});
hoplon$app_pages$_index_DOT_html$graph.cljs$core$IFn$_invoke$arity$variadic = hoplon$app_pages$_index_DOT_html$graph__delegate;
return hoplon$app_pages$_index_DOT_html$graph;
})()
;
hoplon.app_pages._index_DOT_html.calc_efficiency = (function hoplon$app_pages$_index_DOT_html$calc_efficiency(overhead,runtime,x){
return ((overhead * x) + (runtime / x));
});
hoplon.app_pages._index_DOT_html.calc_optimum_efficiency = (function hoplon$app_pages$_index_DOT_html$calc_optimum_efficiency(overhead,runtime){
return Math.sqrt((runtime / overhead));
});
hoplon.app_pages._index_DOT_html.calc_runtime = (function hoplon$app_pages$_index_DOT_html$calc_runtime(overhead,runtime,x){
return (overhead + (runtime / x));
});
hoplon.app_pages._index_DOT_html.calc_optimum_runtime = (function hoplon$app_pages$_index_DOT_html$calc_optimum_runtime(target,runtime){
return Math.sqrt((runtime / target));
});
hoplon.app_pages._index_DOT_html.calc_optimum_runtime_range = (function hoplon$app_pages$_index_DOT_html$calc_optimum_runtime_range(runtime){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [hoplon.app_pages._index_DOT_html.calc_optimum_runtime((-2),runtime),hoplon.app_pages._index_DOT_html.calc_optimum_runtime((-1),runtime)], null);
});
hoplon.app_pages._index_DOT_html.xs = javelin.core.formula((function (G__14617,G__14619,G__14618,G__14616){
var max = (G__14616.cljs$core$IFn$_invoke$arity$2 ? G__14616.cljs$core$IFn$_invoke$arity$2(G__14617,(1)) : G__14616.call(null,G__14617,(1)));
var step = (max / (50));
var G__14620 = (G__14619.cljs$core$IFn$_invoke$arity$3 ? G__14619.cljs$core$IFn$_invoke$arity$3((1),max,step) : G__14619.call(null,(1),max,step));
var G__14621 = max;
return (G__14618.cljs$core$IFn$_invoke$arity$2 ? G__14618.cljs$core$IFn$_invoke$arity$2(G__14620,G__14621) : G__14618.call(null,G__14620,G__14621));
})).call(null,hoplon.app_pages._index_DOT_html.max_threads,cljs.core.range,cljs.core.conj,parallelism.values.safe_value);
hoplon.app_pages._index_DOT_html.graph_data = javelin.core.formula((function (G__14624,G__14627,G__14622,G__14626,G__14629,G__14623,G__14625,G__14628){
return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$type,"spline",cljs.core.cst$kw$x,"x",cljs.core.cst$kw$columns,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(G__14622.cljs$core$IFn$_invoke$arity$2 ? G__14622.cljs$core$IFn$_invoke$arity$2(G__14623,"x") : G__14622.call(null,G__14623,"x")),(function (){var G__14630 = (function (){var G__14632 = (function (){var G__14634 = G__14626;
var G__14635 = cljs.core.cst$kw$value.cljs$core$IFn$_invoke$arity$1(G__14627);
var G__14636 = cljs.core.cst$kw$value.cljs$core$IFn$_invoke$arity$1(G__14628);
return (G__14625.cljs$core$IFn$_invoke$arity$3 ? G__14625.cljs$core$IFn$_invoke$arity$3(G__14634,G__14635,G__14636) : G__14625.call(null,G__14634,G__14635,G__14636));
})();
var G__14633 = G__14623;
return (G__14624.cljs$core$IFn$_invoke$arity$2 ? G__14624.cljs$core$IFn$_invoke$arity$2(G__14632,G__14633) : G__14624.call(null,G__14632,G__14633));
})();
var G__14631 = "Efficiency";
return (G__14622.cljs$core$IFn$_invoke$arity$2 ? G__14622.cljs$core$IFn$_invoke$arity$2(G__14630,G__14631) : G__14622.call(null,G__14630,G__14631));
})(),(function (){var G__14637 = (function (){var G__14639 = (function (){var G__14641 = G__14629;
var G__14642 = cljs.core.cst$kw$value.cljs$core$IFn$_invoke$arity$1(G__14627);
var G__14643 = cljs.core.cst$kw$value.cljs$core$IFn$_invoke$arity$1(G__14628);
return (G__14625.cljs$core$IFn$_invoke$arity$3 ? G__14625.cljs$core$IFn$_invoke$arity$3(G__14641,G__14642,G__14643) : G__14625.call(null,G__14641,G__14642,G__14643));
})();
var G__14640 = G__14623;
return (G__14624.cljs$core$IFn$_invoke$arity$2 ? G__14624.cljs$core$IFn$_invoke$arity$2(G__14639,G__14640) : G__14624.call(null,G__14639,G__14640));
})();
var G__14638 = "Wall clock runtime";
return (G__14622.cljs$core$IFn$_invoke$arity$2 ? G__14622.cljs$core$IFn$_invoke$arity$2(G__14637,G__14638) : G__14622.call(null,G__14637,G__14638));
})()], null)], null);
})).call(null,cljs.core.map,hoplon.app_pages._index_DOT_html.overhead,cljs.core.conj,hoplon.app_pages._index_DOT_html.calc_efficiency,hoplon.app_pages._index_DOT_html.calc_runtime,hoplon.app_pages._index_DOT_html.xs,cljs.core.partial,hoplon.app_pages._index_DOT_html.runtime);
hoplon.app_pages._index_DOT_html.graph_xgrid = javelin.core.formula((function (G__14645,G__14647,G__14644,G__14648,G__14646){
var eff = Math.round((function (){var G__14649 = cljs.core.cst$kw$value.cljs$core$IFn$_invoke$arity$1(G__14645);
var G__14650 = cljs.core.cst$kw$value.cljs$core$IFn$_invoke$arity$1(G__14646);
return (G__14644.cljs$core$IFn$_invoke$arity$2 ? G__14644.cljs$core$IFn$_invoke$arity$2(G__14649,G__14650) : G__14644.call(null,G__14649,G__14650));
})());
var min_runtime = Math.round((function (){var G__14651 = (2);
var G__14652 = cljs.core.cst$kw$value.cljs$core$IFn$_invoke$arity$1(G__14646);
return (G__14647.cljs$core$IFn$_invoke$arity$2 ? G__14647.cljs$core$IFn$_invoke$arity$2(G__14651,G__14652) : G__14647.call(null,G__14651,G__14652));
})());
var max_runtime = Math.round((function (){var G__14653 = (1);
var G__14654 = cljs.core.cst$kw$value.cljs$core$IFn$_invoke$arity$1(G__14646);
return (G__14647.cljs$core$IFn$_invoke$arity$2 ? G__14647.cljs$core$IFn$_invoke$arity$2(G__14653,G__14654) : G__14647.call(null,G__14653,G__14654));
})());
var _ = (G__14648.cljs$core$IFn$_invoke$arity$2 ? G__14648.cljs$core$IFn$_invoke$arity$2(min_runtime,max_runtime) : G__14648.call(null,min_runtime,max_runtime));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$value,eff,cljs.core.cst$kw$text,[cljs.core.str("Optimal efficiency: "),cljs.core.str(eff)].join('')], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$value,min_runtime,cljs.core.cst$kw$text,[cljs.core.str("Optimal runtime starting at "),cljs.core.str(min_runtime)].join('')], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$value,max_runtime,cljs.core.cst$kw$text,[cljs.core.str("Optimal runtime ending at "),cljs.core.str(max_runtime)].join('')], null)], null);
})).call(null,hoplon.app_pages._index_DOT_html.overhead,hoplon.app_pages._index_DOT_html.calc_optimum_runtime,hoplon.app_pages._index_DOT_html.calc_optimum_efficiency,cljs.core.print,hoplon.app_pages._index_DOT_html.runtime);
hoplon.core.html.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([(function (){var G__14655 = (hoplon.core.title.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.title.cljs$core$IFn$_invoke$arity$1("Parallelism calculator") : hoplon.core.title.call(null,"Parallelism calculator"));
var G__14656 = (function (){var G__14661 = cljs.core.cst$kw$charset;
var G__14662 = "utf-8";
return (hoplon.core.html_meta.cljs$core$IFn$_invoke$arity$2 ? hoplon.core.html_meta.cljs$core$IFn$_invoke$arity$2(G__14661,G__14662) : hoplon.core.html_meta.call(null,G__14661,G__14662));
})();
var G__14657 = (function (){var G__14663 = cljs.core.cst$kw$href;
var G__14664 = "normalize.css";
var G__14665 = cljs.core.cst$kw$rel;
var G__14666 = "stylesheet";
return (hoplon.core.link.cljs$core$IFn$_invoke$arity$4 ? hoplon.core.link.cljs$core$IFn$_invoke$arity$4(G__14663,G__14664,G__14665,G__14666) : hoplon.core.link.call(null,G__14663,G__14664,G__14665,G__14666));
})();
var G__14658 = (function (){var G__14667 = cljs.core.cst$kw$href;
var G__14668 = "c3.css";
var G__14669 = cljs.core.cst$kw$rel;
var G__14670 = "stylesheet";
return (hoplon.core.link.cljs$core$IFn$_invoke$arity$4 ? hoplon.core.link.cljs$core$IFn$_invoke$arity$4(G__14667,G__14668,G__14669,G__14670) : hoplon.core.link.call(null,G__14667,G__14668,G__14669,G__14670));
})();
var G__14659 = (function (){var G__14671 = cljs.core.cst$kw$href;
var G__14672 = "app.css";
var G__14673 = cljs.core.cst$kw$rel;
var G__14674 = "stylesheet";
return (hoplon.core.link.cljs$core$IFn$_invoke$arity$4 ? hoplon.core.link.cljs$core$IFn$_invoke$arity$4(G__14671,G__14672,G__14673,G__14674) : hoplon.core.link.call(null,G__14671,G__14672,G__14673,G__14674));
})();
var G__14660 = (function (){var G__14675 = cljs.core.cst$kw$name;
var G__14676 = "viewport";
var G__14677 = cljs.core.cst$kw$content;
var G__14678 = "width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0";
return (hoplon.core.html_meta.cljs$core$IFn$_invoke$arity$4 ? hoplon.core.html_meta.cljs$core$IFn$_invoke$arity$4(G__14675,G__14676,G__14677,G__14678) : hoplon.core.html_meta.call(null,G__14675,G__14676,G__14677,G__14678));
})();
return (hoplon.core.head.cljs$core$IFn$_invoke$arity$6 ? hoplon.core.head.cljs$core$IFn$_invoke$arity$6(G__14655,G__14656,G__14657,G__14658,G__14659,G__14660) : hoplon.core.head.call(null,G__14655,G__14656,G__14657,G__14658,G__14659,G__14660));
})(),(function (){var G__14679 = (function (){var G__14681 = cljs.core.cst$kw$class;
var G__14682 = "sidebar";
var G__14683 = hoplon.app_pages._index_DOT_html.number_input.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$to,hoplon.app_pages._index_DOT_html.overhead,cljs.core.cst$kw$name,"Overhead:",(function (){var G__14686 = cljs.core.cst$kw$class;
var G__14687 = "description";
var G__14688 = "This is the overhead for starting a single parallel thread.";
return (hoplon.core.p.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.p.cljs$core$IFn$_invoke$arity$3(G__14686,G__14687,G__14688) : hoplon.core.p.call(null,G__14686,G__14687,G__14688));
})()], 0));
var G__14684 = hoplon.app_pages._index_DOT_html.number_input.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$to,hoplon.app_pages._index_DOT_html.runtime,cljs.core.cst$kw$name,"Runtime:",(function (){var G__14689 = cljs.core.cst$kw$class;
var G__14690 = "description";
var G__14691 = "This is the total runtime for the work you have to do.";
return (hoplon.core.p.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.p.cljs$core$IFn$_invoke$arity$3(G__14689,G__14690,G__14691) : hoplon.core.p.call(null,G__14689,G__14690,G__14691));
})()], 0));
var G__14685 = hoplon.app_pages._index_DOT_html.number_input.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$to,hoplon.app_pages._index_DOT_html.max_threads,cljs.core.cst$kw$name,"Max Threads:",(function (){var G__14692 = cljs.core.cst$kw$class;
var G__14693 = "description";
var G__14694 = "The maximum number of threads in your algorithm.";
return (hoplon.core.p.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.p.cljs$core$IFn$_invoke$arity$3(G__14692,G__14693,G__14694) : hoplon.core.p.call(null,G__14692,G__14693,G__14694));
})()], 0));
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$5 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$5(G__14681,G__14682,G__14683,G__14684,G__14685) : hoplon.core.div.call(null,G__14681,G__14682,G__14683,G__14684,G__14685));
})();
var G__14680 = (function (){var G__14695 = cljs.core.cst$kw$class;
var G__14696 = "graph-wrapper";
var G__14697 = hoplon.app_pages._index_DOT_html.graph.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$data,hoplon.app_pages._index_DOT_html.graph_data,cljs.core.cst$kw$xgrid,hoplon.app_pages._index_DOT_html.graph_xgrid,cljs.core.cst$kw$axis,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$x,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$show,false], null),cljs.core.cst$kw$y,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$min,(0)], null)], null),cljs.core.cst$kw$point,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$show,false], null)], 0));
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$3(G__14695,G__14696,G__14697) : hoplon.core.div.call(null,G__14695,G__14696,G__14697));
})();
return (hoplon.core.body.cljs$core$IFn$_invoke$arity$2 ? hoplon.core.body.cljs$core$IFn$_invoke$arity$2(G__14679,G__14680) : hoplon.core.body.call(null,G__14679,G__14680));
})()], 0));
