// Compiled by ClojureScript 1.9.293 {:static-fns true, :optimize-constants true}
goog.provide('hoplon.app_pages._index_DOT_html');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('javelin.core');
goog.require('hoplon.jquery');
goog.require('hoplon.core');
hoplon.app_pages._index_DOT_html.default_overhead = (5);
hoplon.app_pages._index_DOT_html.overhead = javelin.core.cell.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$value,hoplon.app_pages._index_DOT_html.default_overhead], null));
hoplon.app_pages._index_DOT_html.default_runtime = (60);
hoplon.app_pages._index_DOT_html.runtime = javelin.core.cell.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$value,hoplon.app_pages._index_DOT_html.default_runtime], null));
hoplon.app_pages._index_DOT_html.default_max_threads = (16);
hoplon.app_pages._index_DOT_html.max_threads = javelin.core.cell.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$value,hoplon.app_pages._index_DOT_html.default_max_threads], null));
hoplon.app_pages._index_DOT_html.route = hoplon.core.route_cell();
hoplon.app_pages._index_DOT_html.params = javelin.core.formula((function (G__14449,G__14450,G__14447,G__14454,G__14453,G__14448,G__14451,G__14452){
var G__14455 = parseFloat;
var G__14456 = (function (){var G__14457 = (function (){var G__14459 = (cljs.core.truth_((G__14450.cljs$core$IFn$_invoke$arity$2 ? G__14450.cljs$core$IFn$_invoke$arity$2(null,G__14451) : G__14450.call(null,null,G__14451)))?[cljs.core.str("#"),cljs.core.str(G__14452),cljs.core.str("/"),cljs.core.str(G__14453),cljs.core.str("/"),cljs.core.str(G__14454)].join(''):G__14451);
var G__14460 = (1);
return (G__14449.cljs$core$IFn$_invoke$arity$2 ? G__14449.cljs$core$IFn$_invoke$arity$2(G__14459,G__14460) : G__14449.call(null,G__14459,G__14460));
})();
var G__14458 = /\//;
return (G__14448.cljs$core$IFn$_invoke$arity$2 ? G__14448.cljs$core$IFn$_invoke$arity$2(G__14457,G__14458) : G__14448.call(null,G__14457,G__14458));
})();
return (G__14447.cljs$core$IFn$_invoke$arity$2 ? G__14447.cljs$core$IFn$_invoke$arity$2(G__14455,G__14456) : G__14447.call(null,G__14455,G__14456));
})).call(null,cljs.core.subs,cljs.core._EQ_,cljs.core.map,hoplon.app_pages._index_DOT_html.default_runtime,hoplon.app_pages._index_DOT_html.default_overhead,clojure.string.split,hoplon.app_pages._index_DOT_html.route,hoplon.app_pages._index_DOT_html.default_max_threads);
hoplon.app_pages._index_DOT_html.param_inputs = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [hoplon.app_pages._index_DOT_html.max_threads,hoplon.app_pages._index_DOT_html.overhead,hoplon.app_pages._index_DOT_html.runtime], null);
hoplon.app_pages._index_DOT_html.param_updates = javelin.core.formula((function (G__14467,G__14465,G__14464,G__14463,G__14468,G__14462,G__14466){
var G__14469 = (function (p1__14461_SHARP_){
var G__14471 = (G__14464.cljs$core$IFn$_invoke$arity$2 ? G__14464.cljs$core$IFn$_invoke$arity$2(p1__14461_SHARP_,(0)) : G__14464.call(null,p1__14461_SHARP_,(0)));
var G__14472 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$value,(G__14464.cljs$core$IFn$_invoke$arity$2 ? G__14464.cljs$core$IFn$_invoke$arity$2(p1__14461_SHARP_,(1)) : G__14464.call(null,p1__14461_SHARP_,(1)))], null);
return (G__14463.cljs$core$IFn$_invoke$arity$2 ? G__14463.cljs$core$IFn$_invoke$arity$2(G__14471,G__14472) : G__14463.call(null,G__14471,G__14472));
});
var G__14470 = (G__14465.cljs$core$IFn$_invoke$arity$3 ? G__14465.cljs$core$IFn$_invoke$arity$3(G__14466,G__14467,G__14468) : G__14465.call(null,G__14466,G__14467,G__14468));
return (G__14462.cljs$core$IFn$_invoke$arity$2 ? G__14462.cljs$core$IFn$_invoke$arity$2(G__14469,G__14470) : G__14462.call(null,G__14469,G__14470));
})).call(null,hoplon.app_pages._index_DOT_html.param_inputs,cljs.core.map,cljs.core.get,cljs.core.reset_BANG_,hoplon.app_pages._index_DOT_html.params,cljs.core.run_BANG_,cljs.core.vector);
hoplon.app_pages._index_DOT_html.url_updates = javelin.core.formula((function (G__14474,G__14475,G__14473,G__14476){
return document.location.hash = [cljs.core.str("#"),cljs.core.str((G__14473.cljs$core$IFn$_invoke$arity$2 ? G__14473.cljs$core$IFn$_invoke$arity$2(G__14474,(1)) : G__14473.call(null,G__14474,(1)))),cljs.core.str("/"),cljs.core.str((G__14473.cljs$core$IFn$_invoke$arity$2 ? G__14473.cljs$core$IFn$_invoke$arity$2(G__14475,(1)) : G__14473.call(null,G__14475,(1)))),cljs.core.str("/"),cljs.core.str((G__14473.cljs$core$IFn$_invoke$arity$2 ? G__14473.cljs$core$IFn$_invoke$arity$2(G__14476,(1)) : G__14473.call(null,G__14476,(1))))].join('');
})).call(null,hoplon.app_pages._index_DOT_html.max_threads,hoplon.app_pages._index_DOT_html.overhead,cljs.core.get,hoplon.app_pages._index_DOT_html.runtime);
/**
 * @param {...*} var_args
 */
hoplon.app_pages._index_DOT_html.number_input = (function() { 
var hoplon$app_pages$_index_DOT_html$number_input__delegate = function (args__13780__auto__){
var vec__14513 = hoplon.core.parse_args(args__13780__auto__);
var map__14516 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14513,(0),null);
var map__14516__$1 = ((((!((map__14516 == null)))?((((map__14516.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14516.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__14516):map__14516);
var to = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14516__$1,cljs.core.cst$kw$to);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14516__$1,cljs.core.cst$kw$name);
var children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14513,(1),null);
hoplon.app_pages._index_DOT_html.from_string = ((function (vec__14513,map__14516,map__14516__$1,to,name,children){
return (function hoplon$app_pages$_index_DOT_html$number_input_$_from_string(value){
return parseFloat(value);
});})(vec__14513,map__14516,map__14516__$1,to,name,children))
;

hoplon.app_pages._index_DOT_html.validity = ((function (vec__14513,map__14516,map__14516__$1,to,name,children){
return (function hoplon$app_pages$_index_DOT_html$number_input_$_validity(value){
return cljs.core.not((function (){var G__14519 = hoplon.app_pages._index_DOT_html.from_string(value);
return isNaN(G__14519);
})());
});})(vec__14513,map__14516,map__14516__$1,to,name,children))
;

hoplon.app_pages._index_DOT_html.update_to_BANG_ = ((function (vec__14513,map__14516,map__14516__$1,to,name,children){
return (function hoplon$app_pages$_index_DOT_html$number_input_$_update_to_BANG_(value){
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(to,value) : cljs.core.reset_BANG_.call(null,to,value));
});})(vec__14513,map__14516,map__14516__$1,to,name,children))
;

var val = javelin.core.cell.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(to) : cljs.core.deref.call(null,to)),(1)));
var update_to_BANG_ = ((function (val,vec__14513,map__14516,map__14516__$1,to,name,children){
return (function (value){
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(to,value) : cljs.core.reset_BANG_.call(null,to,value));
});})(val,vec__14513,map__14516,map__14516__$1,to,name,children))
;
var update_val_BANG_ = ((function (val,update_to_BANG_,vec__14513,map__14516,map__14516__$1,to,name,children){
return (function (value){
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(val,value) : cljs.core.reset_BANG_.call(null,val,value));
});})(val,update_to_BANG_,vec__14513,map__14516,map__14516__$1,to,name,children))
;
var valid = javelin.core.formula(((function (val,update_to_BANG_,update_val_BANG_,vec__14513,map__14516,map__14516__$1,to,name,children){
return (function (G__14520,G__14521){
return (G__14520.cljs$core$IFn$_invoke$arity$1 ? G__14520.cljs$core$IFn$_invoke$arity$1(G__14521) : G__14520.call(null,G__14521));
});})(val,update_to_BANG_,update_val_BANG_,vec__14513,map__14516,map__14516__$1,to,name,children))
).call(null,hoplon.app_pages._index_DOT_html.validity,val);
var _ = javelin.core.formula(((function (val,update_to_BANG_,update_val_BANG_,valid,vec__14513,map__14516,map__14516__$1,to,name,children){
return (function (G__14524,G__14523,G__14522){
var G__14525 = (G__14523.cljs$core$IFn$_invoke$arity$2 ? G__14523.cljs$core$IFn$_invoke$arity$2(G__14524,(1)) : G__14523.call(null,G__14524,(1)));
return (G__14522.cljs$core$IFn$_invoke$arity$1 ? G__14522.cljs$core$IFn$_invoke$arity$1(G__14525) : G__14522.call(null,G__14525));
});})(val,update_to_BANG_,update_val_BANG_,valid,vec__14513,map__14516,map__14516__$1,to,name,children))
).call(null,to,cljs.core.get,update_val_BANG_);
var ___$1 = javelin.core.formula(((function (val,update_to_BANG_,update_val_BANG_,valid,_,vec__14513,map__14516,map__14516__$1,to,name,children){
return (function (G__14527,G__14528,G__14526){
var G__14529 = (cljs.core.truth_(G__14527)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$value,G__14528], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$error,"Value is invalid"], null));
return (G__14526.cljs$core$IFn$_invoke$arity$1 ? G__14526.cljs$core$IFn$_invoke$arity$1(G__14529) : G__14526.call(null,G__14529));
});})(val,update_to_BANG_,update_val_BANG_,valid,_,vec__14513,map__14516,map__14516__$1,to,name,children))
).call(null,valid,val,update_to_BANG_);
var G__14530 = cljs.core.cst$kw$class;
var G__14531 = "field";
var G__14532 = (function (){var G__14534 = cljs.core.cst$kw$class;
var G__14535 = javelin.core.formula(((function (G__14534,G__14530,G__14531,val,update_to_BANG_,update_val_BANG_,valid,_,___$1,vec__14513,map__14516,map__14516__$1,to,name,children){
return (function (G__14539,G__14538){
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$input,true,cljs.core.cst$kw$invalid,(G__14538.cljs$core$IFn$_invoke$arity$1 ? G__14538.cljs$core$IFn$_invoke$arity$1(G__14539) : G__14538.call(null,G__14539))], null);
});})(G__14534,G__14530,G__14531,val,update_to_BANG_,update_val_BANG_,valid,_,___$1,vec__14513,map__14516,map__14516__$1,to,name,children))
).call(null,valid,cljs.core.not);
var G__14536 = (hoplon.core.label.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.label.cljs$core$IFn$_invoke$arity$1(name) : hoplon.core.label.call(null,name));
var G__14537 = (function (){var G__14540 = cljs.core.cst$kw$value;
var G__14541 = val;
var G__14542 = cljs.core.cst$kw$input;
var G__14543 = ((function (G__14540,G__14541,G__14542,G__14534,G__14535,G__14536,G__14530,G__14531,val,update_to_BANG_,update_val_BANG_,valid,_,___$1,vec__14513,map__14516,map__14516__$1,to,name,children){
return (function (p1__14477_SHARP_){
var G__14546 = val;
var G__14547 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(p1__14477_SHARP_) : cljs.core.deref.call(null,p1__14477_SHARP_));
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__14546,G__14547) : cljs.core.reset_BANG_.call(null,G__14546,G__14547));
});})(G__14540,G__14541,G__14542,G__14534,G__14535,G__14536,G__14530,G__14531,val,update_to_BANG_,update_val_BANG_,valid,_,___$1,vec__14513,map__14516,map__14516__$1,to,name,children))
;
var G__14544 = cljs.core.cst$kw$click;
var G__14545 = ((function (G__14540,G__14541,G__14542,G__14543,G__14544,G__14534,G__14535,G__14536,G__14530,G__14531,val,update_to_BANG_,update_val_BANG_,valid,_,___$1,vec__14513,map__14516,map__14516__$1,to,name,children){
return (function (){
var field = this;
return jQuery(field).select();
});})(G__14540,G__14541,G__14542,G__14543,G__14544,G__14534,G__14535,G__14536,G__14530,G__14531,val,update_to_BANG_,update_val_BANG_,valid,_,___$1,vec__14513,map__14516,map__14516__$1,to,name,children))
;
return (hoplon.core.input.cljs$core$IFn$_invoke$arity$6 ? hoplon.core.input.cljs$core$IFn$_invoke$arity$6(G__14540,G__14541,G__14542,G__14543,G__14544,G__14545) : hoplon.core.input.call(null,G__14540,G__14541,G__14542,G__14543,G__14544,G__14545));
})();
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$4 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$4(G__14534,G__14535,G__14536,G__14537) : hoplon.core.div.call(null,G__14534,G__14535,G__14536,G__14537));
})();
var G__14533 = children;
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$4 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$4(G__14530,G__14531,G__14532,G__14533) : hoplon.core.div.call(null,G__14530,G__14531,G__14532,G__14533));
};
var hoplon$app_pages$_index_DOT_html$number_input = function (var_args){
var args__13780__auto__ = null;
if (arguments.length > 0) {
var G__14548__i = 0, G__14548__a = new Array(arguments.length -  0);
while (G__14548__i < G__14548__a.length) {G__14548__a[G__14548__i] = arguments[G__14548__i + 0]; ++G__14548__i;}
  args__13780__auto__ = new cljs.core.IndexedSeq(G__14548__a,0);
} 
return hoplon$app_pages$_index_DOT_html$number_input__delegate.call(this,args__13780__auto__);};
hoplon$app_pages$_index_DOT_html$number_input.cljs$lang$maxFixedArity = 0;
hoplon$app_pages$_index_DOT_html$number_input.cljs$lang$applyTo = (function (arglist__14549){
var args__13780__auto__ = cljs.core.seq(arglist__14549);
return hoplon$app_pages$_index_DOT_html$number_input__delegate(args__13780__auto__);
});
hoplon$app_pages$_index_DOT_html$number_input.cljs$core$IFn$_invoke$arity$variadic = hoplon$app_pages$_index_DOT_html$number_input__delegate;
return hoplon$app_pages$_index_DOT_html$number_input;
})()
;
/**
 * @param {...*} var_args
 */
hoplon.app_pages._index_DOT_html.graph = (function() { 
var hoplon$app_pages$_index_DOT_html$graph__delegate = function (args__13780__auto__){
var vec__14562 = hoplon.core.parse_args(args__13780__auto__);
var map__14565 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14562,(0),null);
var map__14565__$1 = ((((!((map__14565 == null)))?((((map__14565.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14565.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__14565):map__14565);
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14565__$1,cljs.core.cst$kw$data);
var axis = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14565__$1,cljs.core.cst$kw$axis);
var point = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14565__$1,cljs.core.cst$kw$point);
var size = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14565__$1,cljs.core.cst$kw$size);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14562,(1),null);
var elem = (function (){var G__14567 = cljs.core.cst$kw$class;
var G__14568 = "graph";
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$2 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$2(G__14567,G__14568) : hoplon.core.div.call(null,G__14567,G__14568));
})();
var ___$1 = (function (){var G__14569 = ((function (elem,vec__14562,map__14565,map__14565__$1,data,axis,point,size,_){
return (function (){
var chart = c3.generate(cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$bindto,elem,cljs.core.cst$kw$data,(cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(data) : cljs.core.deref.call(null,data)),cljs.core.cst$kw$axis,axis,cljs.core.cst$kw$point,point,cljs.core.cst$kw$size,size], null)));
var ___$1 = javelin.core.formula(((function (chart,elem,vec__14562,map__14565,map__14565__$1,data,axis,point,size,_){
return (function (G__14573,G__14571,G__14572){
var ___$1 = G__14571.load((G__14572.cljs$core$IFn$_invoke$arity$1 ? G__14572.cljs$core$IFn$_invoke$arity$1(G__14573) : G__14572.call(null,G__14573)));
var ___$2 = G__14571.flush();
return null;
});})(chart,elem,vec__14562,map__14565,map__14565__$1,data,axis,point,size,_))
).call(null,data,chart,cljs.core.clj__GT_js);
return null;
});})(elem,vec__14562,map__14565,map__14565__$1,data,axis,point,size,_))
;
var G__14570 = (1000);
return setTimeout(G__14569,G__14570);
})();
return elem;
};
var hoplon$app_pages$_index_DOT_html$graph = function (var_args){
var args__13780__auto__ = null;
if (arguments.length > 0) {
var G__14574__i = 0, G__14574__a = new Array(arguments.length -  0);
while (G__14574__i < G__14574__a.length) {G__14574__a[G__14574__i] = arguments[G__14574__i + 0]; ++G__14574__i;}
  args__13780__auto__ = new cljs.core.IndexedSeq(G__14574__a,0);
} 
return hoplon$app_pages$_index_DOT_html$graph__delegate.call(this,args__13780__auto__);};
hoplon$app_pages$_index_DOT_html$graph.cljs$lang$maxFixedArity = 0;
hoplon$app_pages$_index_DOT_html$graph.cljs$lang$applyTo = (function (arglist__14575){
var args__13780__auto__ = cljs.core.seq(arglist__14575);
return hoplon$app_pages$_index_DOT_html$graph__delegate(args__13780__auto__);
});
hoplon$app_pages$_index_DOT_html$graph.cljs$core$IFn$_invoke$arity$variadic = hoplon$app_pages$_index_DOT_html$graph__delegate;
return hoplon$app_pages$_index_DOT_html$graph;
})()
;
hoplon.app_pages._index_DOT_html.calc_efficiency = (function hoplon$app_pages$_index_DOT_html$calc_efficiency(overhead,runtime,x){
return (function (x__$1){
return ((overhead * x__$1) + (runtime / x__$1));
}).call(null,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x,(0)))?0.1:x));
});
hoplon.app_pages._index_DOT_html.calc_runtime = (function hoplon$app_pages$_index_DOT_html$calc_runtime(overhead,runtime,x){
return (function (x__$1){
return (overhead + (runtime / x__$1));
}).call(null,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x,(0)))?0.1:x));
});
hoplon.app_pages._index_DOT_html.xs = javelin.core.formula((function (G__14577,G__14578,G__14576){
var _ = (G__14576.cljs$core$IFn$_invoke$arity$1 ? G__14576.cljs$core$IFn$_invoke$arity$1(G__14577) : G__14576.call(null,G__14577));
var ___$1 = (function (){var G__14579 = (G__14577 + (1));
return (G__14576.cljs$core$IFn$_invoke$arity$1 ? G__14576.cljs$core$IFn$_invoke$arity$1(G__14579) : G__14576.call(null,G__14579));
})();
var G__14580 = (1);
var G__14581 = (G__14577 + (1));
return (G__14578.cljs$core$IFn$_invoke$arity$2 ? G__14578.cljs$core$IFn$_invoke$arity$2(G__14580,G__14581) : G__14578.call(null,G__14580,G__14581));
})).call(null,hoplon.app_pages._index_DOT_html.max_threads,cljs.core.range,cljs.core.print);
hoplon.app_pages._index_DOT_html.graph_data = javelin.core.formula((function (G__14584,G__14588,G__14582,G__14587,G__14586,G__14590,G__14583,G__14585,G__14589){
return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$type,"spline",cljs.core.cst$kw$x,"x",cljs.core.cst$kw$columns,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(G__14582.cljs$core$IFn$_invoke$arity$2 ? G__14582.cljs$core$IFn$_invoke$arity$2(G__14583,"x") : G__14582.call(null,G__14583,"x")),(function (){var G__14591 = (function (){var G__14593 = (function (){var G__14595 = G__14586;
var G__14596 = (G__14587.cljs$core$IFn$_invoke$arity$2 ? G__14587.cljs$core$IFn$_invoke$arity$2(G__14588,(1)) : G__14587.call(null,G__14588,(1)));
var G__14597 = (G__14587.cljs$core$IFn$_invoke$arity$2 ? G__14587.cljs$core$IFn$_invoke$arity$2(G__14589,(1)) : G__14587.call(null,G__14589,(1)));
return (G__14585.cljs$core$IFn$_invoke$arity$3 ? G__14585.cljs$core$IFn$_invoke$arity$3(G__14595,G__14596,G__14597) : G__14585.call(null,G__14595,G__14596,G__14597));
})();
var G__14594 = G__14583;
return (G__14584.cljs$core$IFn$_invoke$arity$2 ? G__14584.cljs$core$IFn$_invoke$arity$2(G__14593,G__14594) : G__14584.call(null,G__14593,G__14594));
})();
var G__14592 = "Efficiency";
return (G__14582.cljs$core$IFn$_invoke$arity$2 ? G__14582.cljs$core$IFn$_invoke$arity$2(G__14591,G__14592) : G__14582.call(null,G__14591,G__14592));
})(),(function (){var G__14598 = (function (){var G__14600 = (function (){var G__14602 = G__14590;
var G__14603 = (G__14587.cljs$core$IFn$_invoke$arity$2 ? G__14587.cljs$core$IFn$_invoke$arity$2(G__14588,(1)) : G__14587.call(null,G__14588,(1)));
var G__14604 = (G__14587.cljs$core$IFn$_invoke$arity$2 ? G__14587.cljs$core$IFn$_invoke$arity$2(G__14589,(1)) : G__14587.call(null,G__14589,(1)));
return (G__14585.cljs$core$IFn$_invoke$arity$3 ? G__14585.cljs$core$IFn$_invoke$arity$3(G__14602,G__14603,G__14604) : G__14585.call(null,G__14602,G__14603,G__14604));
})();
var G__14601 = G__14583;
return (G__14584.cljs$core$IFn$_invoke$arity$2 ? G__14584.cljs$core$IFn$_invoke$arity$2(G__14600,G__14601) : G__14584.call(null,G__14600,G__14601));
})();
var G__14599 = "Wall clock runtime";
return (G__14582.cljs$core$IFn$_invoke$arity$2 ? G__14582.cljs$core$IFn$_invoke$arity$2(G__14598,G__14599) : G__14582.call(null,G__14598,G__14599));
})()], null)], null);
})).call(null,cljs.core.map,hoplon.app_pages._index_DOT_html.overhead,cljs.core.conj,cljs.core.get,hoplon.app_pages._index_DOT_html.calc_efficiency,hoplon.app_pages._index_DOT_html.calc_runtime,hoplon.app_pages._index_DOT_html.xs,cljs.core.partial,hoplon.app_pages._index_DOT_html.runtime);
hoplon.core.html.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([(function (){var G__14605 = (hoplon.core.title.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.title.cljs$core$IFn$_invoke$arity$1("Parallelism calculator") : hoplon.core.title.call(null,"Parallelism calculator"));
var G__14606 = (function (){var G__14611 = cljs.core.cst$kw$charset;
var G__14612 = "utf-8";
return (hoplon.core.html_meta.cljs$core$IFn$_invoke$arity$2 ? hoplon.core.html_meta.cljs$core$IFn$_invoke$arity$2(G__14611,G__14612) : hoplon.core.html_meta.call(null,G__14611,G__14612));
})();
var G__14607 = (function (){var G__14613 = cljs.core.cst$kw$href;
var G__14614 = "normalize.css";
var G__14615 = cljs.core.cst$kw$rel;
var G__14616 = "stylesheet";
return (hoplon.core.link.cljs$core$IFn$_invoke$arity$4 ? hoplon.core.link.cljs$core$IFn$_invoke$arity$4(G__14613,G__14614,G__14615,G__14616) : hoplon.core.link.call(null,G__14613,G__14614,G__14615,G__14616));
})();
var G__14608 = (function (){var G__14617 = cljs.core.cst$kw$href;
var G__14618 = "c3.css";
var G__14619 = cljs.core.cst$kw$rel;
var G__14620 = "stylesheet";
return (hoplon.core.link.cljs$core$IFn$_invoke$arity$4 ? hoplon.core.link.cljs$core$IFn$_invoke$arity$4(G__14617,G__14618,G__14619,G__14620) : hoplon.core.link.call(null,G__14617,G__14618,G__14619,G__14620));
})();
var G__14609 = (function (){var G__14621 = cljs.core.cst$kw$href;
var G__14622 = "app.css";
var G__14623 = cljs.core.cst$kw$rel;
var G__14624 = "stylesheet";
return (hoplon.core.link.cljs$core$IFn$_invoke$arity$4 ? hoplon.core.link.cljs$core$IFn$_invoke$arity$4(G__14621,G__14622,G__14623,G__14624) : hoplon.core.link.call(null,G__14621,G__14622,G__14623,G__14624));
})();
var G__14610 = (function (){var G__14625 = cljs.core.cst$kw$name;
var G__14626 = "viewport";
var G__14627 = cljs.core.cst$kw$content;
var G__14628 = "width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0";
return (hoplon.core.html_meta.cljs$core$IFn$_invoke$arity$4 ? hoplon.core.html_meta.cljs$core$IFn$_invoke$arity$4(G__14625,G__14626,G__14627,G__14628) : hoplon.core.html_meta.call(null,G__14625,G__14626,G__14627,G__14628));
})();
return (hoplon.core.head.cljs$core$IFn$_invoke$arity$6 ? hoplon.core.head.cljs$core$IFn$_invoke$arity$6(G__14605,G__14606,G__14607,G__14608,G__14609,G__14610) : hoplon.core.head.call(null,G__14605,G__14606,G__14607,G__14608,G__14609,G__14610));
})(),(function (){var G__14629 = (function (){var G__14631 = cljs.core.cst$kw$class;
var G__14632 = "sidebar";
var G__14633 = hoplon.app_pages._index_DOT_html.number_input.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$to,hoplon.app_pages._index_DOT_html.overhead,cljs.core.cst$kw$name,"Overhead:",(function (){var G__14636 = cljs.core.cst$kw$class;
var G__14637 = "description";
var G__14638 = "This is the overhead for starting a single parallel thread.";
return (hoplon.core.p.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.p.cljs$core$IFn$_invoke$arity$3(G__14636,G__14637,G__14638) : hoplon.core.p.call(null,G__14636,G__14637,G__14638));
})()], 0));
var G__14634 = hoplon.app_pages._index_DOT_html.number_input.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$to,hoplon.app_pages._index_DOT_html.runtime,cljs.core.cst$kw$name,"Runtime:",(function (){var G__14639 = cljs.core.cst$kw$class;
var G__14640 = "description";
var G__14641 = "This is the total runtime for the work you have to do.";
return (hoplon.core.p.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.p.cljs$core$IFn$_invoke$arity$3(G__14639,G__14640,G__14641) : hoplon.core.p.call(null,G__14639,G__14640,G__14641));
})()], 0));
var G__14635 = hoplon.app_pages._index_DOT_html.number_input.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$to,hoplon.app_pages._index_DOT_html.max_threads,cljs.core.cst$kw$name,"Max Threads:",(function (){var G__14642 = cljs.core.cst$kw$class;
var G__14643 = "description";
var G__14644 = "The maximum number of threads in your algorithm.";
return (hoplon.core.p.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.p.cljs$core$IFn$_invoke$arity$3(G__14642,G__14643,G__14644) : hoplon.core.p.call(null,G__14642,G__14643,G__14644));
})()], 0));
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$5 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$5(G__14631,G__14632,G__14633,G__14634,G__14635) : hoplon.core.div.call(null,G__14631,G__14632,G__14633,G__14634,G__14635));
})();
var G__14630 = (function (){var G__14645 = cljs.core.cst$kw$class;
var G__14646 = "graph-wrapper";
var G__14647 = hoplon.app_pages._index_DOT_html.graph.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$data,hoplon.app_pages._index_DOT_html.graph_data,cljs.core.cst$kw$axis,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$x,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$tick,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$culling,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$max,"off"], null)], null)], null),cljs.core.cst$kw$y,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$min,(0)], null)], null)], 0));
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$3(G__14645,G__14646,G__14647) : hoplon.core.div.call(null,G__14645,G__14646,G__14647));
})();
return (hoplon.core.body.cljs$core$IFn$_invoke$arity$2 ? hoplon.core.body.cljs$core$IFn$_invoke$arity$2(G__14629,G__14630) : hoplon.core.body.call(null,G__14629,G__14630));
})()], 0));
