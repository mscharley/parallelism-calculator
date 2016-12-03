// Compiled by ClojureScript 1.9.293 {:static-fns true, :optimize-constants true}
goog.provide('hoplon.app_pages._index_DOT_html');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('javelin.core');
goog.require('hoplon.jquery');
goog.require('hoplon.core');
hoplon.app_pages._index_DOT_html.default_overhead = (5);
hoplon.app_pages._index_DOT_html.overhead = javelin.core.cell.cljs$core$IFn$_invoke$arity$1(hoplon.app_pages._index_DOT_html.default_overhead);
hoplon.app_pages._index_DOT_html.default_runtime = (60);
hoplon.app_pages._index_DOT_html.runtime = javelin.core.cell.cljs$core$IFn$_invoke$arity$1(hoplon.app_pages._index_DOT_html.default_runtime);
hoplon.app_pages._index_DOT_html.default_max_threads = (16);
hoplon.app_pages._index_DOT_html.max_threads = javelin.core.cell.cljs$core$IFn$_invoke$arity$1(hoplon.app_pages._index_DOT_html.default_max_threads);
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
var G__14472 = (G__14464.cljs$core$IFn$_invoke$arity$2 ? G__14464.cljs$core$IFn$_invoke$arity$2(p1__14461_SHARP_,(1)) : G__14464.call(null,p1__14461_SHARP_,(1)));
return (G__14463.cljs$core$IFn$_invoke$arity$2 ? G__14463.cljs$core$IFn$_invoke$arity$2(G__14471,G__14472) : G__14463.call(null,G__14471,G__14472));
});
var G__14470 = (G__14465.cljs$core$IFn$_invoke$arity$3 ? G__14465.cljs$core$IFn$_invoke$arity$3(G__14466,G__14467,G__14468) : G__14465.call(null,G__14466,G__14467,G__14468));
return (G__14462.cljs$core$IFn$_invoke$arity$2 ? G__14462.cljs$core$IFn$_invoke$arity$2(G__14469,G__14470) : G__14462.call(null,G__14469,G__14470));
})).call(null,hoplon.app_pages._index_DOT_html.param_inputs,cljs.core.map,cljs.core.get,cljs.core.reset_BANG_,hoplon.app_pages._index_DOT_html.params,cljs.core.run_BANG_,cljs.core.vector);
hoplon.app_pages._index_DOT_html.url_updates = javelin.core.formula((function (G__14473,G__14474,G__14475){
return document.location.hash = [cljs.core.str("#"),cljs.core.str(G__14473),cljs.core.str("/"),cljs.core.str(G__14474),cljs.core.str("/"),cljs.core.str(G__14475)].join('');
})).call(null,hoplon.app_pages._index_DOT_html.max_threads,hoplon.app_pages._index_DOT_html.overhead,hoplon.app_pages._index_DOT_html.runtime);
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

var val = javelin.core.cell.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(to) : cljs.core.deref.call(null,to)));
var valid = javelin.core.formula(((function (val,vec__14513,map__14516,map__14516__$1,to,name,children){
return (function (G__14520,G__14521){
return (G__14520.cljs$core$IFn$_invoke$arity$1 ? G__14520.cljs$core$IFn$_invoke$arity$1(G__14521) : G__14520.call(null,G__14521));
});})(val,vec__14513,map__14516,map__14516__$1,to,name,children))
).call(null,hoplon.app_pages._index_DOT_html.validity,val);
cljs.core.add_watch(val,cljs.core.cst$kw$input,((function (val,valid,vec__14513,map__14516,map__14516__$1,to,name,children){
return (function (p1__14477_SHARP_,p2__14478_SHARP_,p3__14479_SHARP_,p4__14476_SHARP_){
var newVal = p4__14476_SHARP_;
var i = hoplon.app_pages._index_DOT_html.from_string(newVal);
var valid__$1 = hoplon.app_pages._index_DOT_html.validity(newVal);
var G__14522 = to;
var G__14523 = (cljs.core.truth_(valid__$1)?i:(0));
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__14522,G__14523) : cljs.core.reset_BANG_.call(null,G__14522,G__14523));
});})(val,valid,vec__14513,map__14516,map__14516__$1,to,name,children))
);

cljs.core.add_watch(to,cljs.core.cst$kw$input,((function (val,valid,vec__14513,map__14516,map__14516__$1,to,name,children){
return (function (p1__14481_SHARP_,p2__14482_SHARP_,p3__14483_SHARP_,p4__14480_SHARP_){
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(val,p4__14480_SHARP_) : cljs.core.reset_BANG_.call(null,val,p4__14480_SHARP_));
});})(val,valid,vec__14513,map__14516,map__14516__$1,to,name,children))
);

var G__14524 = cljs.core.cst$kw$class;
var G__14525 = "field";
var G__14526 = (function (){var G__14528 = cljs.core.cst$kw$class;
var G__14529 = javelin.core.formula(((function (G__14528,G__14524,G__14525,val,valid,vec__14513,map__14516,map__14516__$1,to,name,children){
return (function (G__14532){
if(cljs.core.truth_(G__14532)){
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$input,true,cljs.core.cst$kw$invalid,false], null);
} else {
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$input,true,cljs.core.cst$kw$invalid,true], null);
}
});})(G__14528,G__14524,G__14525,val,valid,vec__14513,map__14516,map__14516__$1,to,name,children))
).call(null,valid);
var G__14530 = (hoplon.core.label.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.label.cljs$core$IFn$_invoke$arity$1(name) : hoplon.core.label.call(null,name));
var G__14531 = (function (){var G__14533 = cljs.core.cst$kw$value;
var G__14534 = val;
var G__14535 = cljs.core.cst$kw$input;
var G__14536 = ((function (G__14533,G__14534,G__14535,G__14528,G__14529,G__14530,G__14524,G__14525,val,valid,vec__14513,map__14516,map__14516__$1,to,name,children){
return (function (p1__14484_SHARP_){
var G__14539 = val;
var G__14540 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(p1__14484_SHARP_) : cljs.core.deref.call(null,p1__14484_SHARP_));
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__14539,G__14540) : cljs.core.reset_BANG_.call(null,G__14539,G__14540));
});})(G__14533,G__14534,G__14535,G__14528,G__14529,G__14530,G__14524,G__14525,val,valid,vec__14513,map__14516,map__14516__$1,to,name,children))
;
var G__14537 = cljs.core.cst$kw$click;
var G__14538 = ((function (G__14533,G__14534,G__14535,G__14536,G__14537,G__14528,G__14529,G__14530,G__14524,G__14525,val,valid,vec__14513,map__14516,map__14516__$1,to,name,children){
return (function (){
var field = this;
return jQuery(field).select();
});})(G__14533,G__14534,G__14535,G__14536,G__14537,G__14528,G__14529,G__14530,G__14524,G__14525,val,valid,vec__14513,map__14516,map__14516__$1,to,name,children))
;
return (hoplon.core.input.cljs$core$IFn$_invoke$arity$6 ? hoplon.core.input.cljs$core$IFn$_invoke$arity$6(G__14533,G__14534,G__14535,G__14536,G__14537,G__14538) : hoplon.core.input.call(null,G__14533,G__14534,G__14535,G__14536,G__14537,G__14538));
})();
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$4 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$4(G__14528,G__14529,G__14530,G__14531) : hoplon.core.div.call(null,G__14528,G__14529,G__14530,G__14531));
})();
var G__14527 = children;
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$4 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$4(G__14524,G__14525,G__14526,G__14527) : hoplon.core.div.call(null,G__14524,G__14525,G__14526,G__14527));
};
var hoplon$app_pages$_index_DOT_html$number_input = function (var_args){
var args__13780__auto__ = null;
if (arguments.length > 0) {
var G__14541__i = 0, G__14541__a = new Array(arguments.length -  0);
while (G__14541__i < G__14541__a.length) {G__14541__a[G__14541__i] = arguments[G__14541__i + 0]; ++G__14541__i;}
  args__13780__auto__ = new cljs.core.IndexedSeq(G__14541__a,0);
} 
return hoplon$app_pages$_index_DOT_html$number_input__delegate.call(this,args__13780__auto__);};
hoplon$app_pages$_index_DOT_html$number_input.cljs$lang$maxFixedArity = 0;
hoplon$app_pages$_index_DOT_html$number_input.cljs$lang$applyTo = (function (arglist__14542){
var args__13780__auto__ = cljs.core.seq(arglist__14542);
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
var vec__14555 = hoplon.core.parse_args(args__13780__auto__);
var map__14558 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14555,(0),null);
var map__14558__$1 = ((((!((map__14558 == null)))?((((map__14558.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14558.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__14558):map__14558);
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14558__$1,cljs.core.cst$kw$data);
var axis = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14558__$1,cljs.core.cst$kw$axis);
var point = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14558__$1,cljs.core.cst$kw$point);
var size = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14558__$1,cljs.core.cst$kw$size);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14555,(1),null);
var elem = (function (){var G__14560 = cljs.core.cst$kw$class;
var G__14561 = "graph";
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$2 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$2(G__14560,G__14561) : hoplon.core.div.call(null,G__14560,G__14561));
})();
var ___$1 = (function (){var G__14562 = ((function (elem,vec__14555,map__14558,map__14558__$1,data,axis,point,size,_){
return (function (){
var chart = c3.generate(cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$bindto,elem,cljs.core.cst$kw$data,(cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(data) : cljs.core.deref.call(null,data)),cljs.core.cst$kw$axis,axis,cljs.core.cst$kw$point,point,cljs.core.cst$kw$size,size], null)));
var ___$1 = javelin.core.formula(((function (chart,elem,vec__14555,map__14558,map__14558__$1,data,axis,point,size,_){
return (function (G__14566,G__14564,G__14565){
var ___$1 = G__14564.load((G__14565.cljs$core$IFn$_invoke$arity$1 ? G__14565.cljs$core$IFn$_invoke$arity$1(G__14566) : G__14565.call(null,G__14566)));
var ___$2 = G__14564.flush();
return null;
});})(chart,elem,vec__14555,map__14558,map__14558__$1,data,axis,point,size,_))
).call(null,data,chart,cljs.core.clj__GT_js);
return null;
});})(elem,vec__14555,map__14558,map__14558__$1,data,axis,point,size,_))
;
var G__14563 = (1000);
return setTimeout(G__14562,G__14563);
})();
return elem;
};
var hoplon$app_pages$_index_DOT_html$graph = function (var_args){
var args__13780__auto__ = null;
if (arguments.length > 0) {
var G__14567__i = 0, G__14567__a = new Array(arguments.length -  0);
while (G__14567__i < G__14567__a.length) {G__14567__a[G__14567__i] = arguments[G__14567__i + 0]; ++G__14567__i;}
  args__13780__auto__ = new cljs.core.IndexedSeq(G__14567__a,0);
} 
return hoplon$app_pages$_index_DOT_html$graph__delegate.call(this,args__13780__auto__);};
hoplon$app_pages$_index_DOT_html$graph.cljs$lang$maxFixedArity = 0;
hoplon$app_pages$_index_DOT_html$graph.cljs$lang$applyTo = (function (arglist__14568){
var args__13780__auto__ = cljs.core.seq(arglist__14568);
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
hoplon.app_pages._index_DOT_html.xs = javelin.core.formula((function (G__14570,G__14571,G__14569){
var _ = (G__14569.cljs$core$IFn$_invoke$arity$1 ? G__14569.cljs$core$IFn$_invoke$arity$1(G__14570) : G__14569.call(null,G__14570));
var ___$1 = (function (){var G__14572 = (G__14570 + (1));
return (G__14569.cljs$core$IFn$_invoke$arity$1 ? G__14569.cljs$core$IFn$_invoke$arity$1(G__14572) : G__14569.call(null,G__14572));
})();
var G__14573 = (1);
var G__14574 = (G__14570 + (1));
return (G__14571.cljs$core$IFn$_invoke$arity$2 ? G__14571.cljs$core$IFn$_invoke$arity$2(G__14573,G__14574) : G__14571.call(null,G__14573,G__14574));
})).call(null,hoplon.app_pages._index_DOT_html.max_threads,cljs.core.range,cljs.core.print);
hoplon.app_pages._index_DOT_html.graph_data = javelin.core.formula((function (G__14577,G__14580,G__14575,G__14579,G__14582,G__14576,G__14578,G__14581){
return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$type,"spline",cljs.core.cst$kw$x,"x",cljs.core.cst$kw$columns,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(G__14575.cljs$core$IFn$_invoke$arity$2 ? G__14575.cljs$core$IFn$_invoke$arity$2(G__14576,"x") : G__14575.call(null,G__14576,"x")),(function (){var G__14583 = (function (){var G__14585 = (G__14578.cljs$core$IFn$_invoke$arity$3 ? G__14578.cljs$core$IFn$_invoke$arity$3(G__14579,G__14580,G__14581) : G__14578.call(null,G__14579,G__14580,G__14581));
var G__14586 = G__14576;
return (G__14577.cljs$core$IFn$_invoke$arity$2 ? G__14577.cljs$core$IFn$_invoke$arity$2(G__14585,G__14586) : G__14577.call(null,G__14585,G__14586));
})();
var G__14584 = "Efficiency";
return (G__14575.cljs$core$IFn$_invoke$arity$2 ? G__14575.cljs$core$IFn$_invoke$arity$2(G__14583,G__14584) : G__14575.call(null,G__14583,G__14584));
})(),(function (){var G__14587 = (function (){var G__14589 = (G__14578.cljs$core$IFn$_invoke$arity$3 ? G__14578.cljs$core$IFn$_invoke$arity$3(G__14582,G__14580,G__14581) : G__14578.call(null,G__14582,G__14580,G__14581));
var G__14590 = G__14576;
return (G__14577.cljs$core$IFn$_invoke$arity$2 ? G__14577.cljs$core$IFn$_invoke$arity$2(G__14589,G__14590) : G__14577.call(null,G__14589,G__14590));
})();
var G__14588 = "Wall clock runtime";
return (G__14575.cljs$core$IFn$_invoke$arity$2 ? G__14575.cljs$core$IFn$_invoke$arity$2(G__14587,G__14588) : G__14575.call(null,G__14587,G__14588));
})()], null)], null);
})).call(null,cljs.core.map,hoplon.app_pages._index_DOT_html.overhead,cljs.core.conj,hoplon.app_pages._index_DOT_html.calc_efficiency,hoplon.app_pages._index_DOT_html.calc_runtime,hoplon.app_pages._index_DOT_html.xs,cljs.core.partial,hoplon.app_pages._index_DOT_html.runtime);
hoplon.core.html.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([(function (){var G__14591 = (hoplon.core.title.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.title.cljs$core$IFn$_invoke$arity$1("Parallelism calculator") : hoplon.core.title.call(null,"Parallelism calculator"));
var G__14592 = (function (){var G__14597 = cljs.core.cst$kw$charset;
var G__14598 = "utf-8";
return (hoplon.core.html_meta.cljs$core$IFn$_invoke$arity$2 ? hoplon.core.html_meta.cljs$core$IFn$_invoke$arity$2(G__14597,G__14598) : hoplon.core.html_meta.call(null,G__14597,G__14598));
})();
var G__14593 = (function (){var G__14599 = cljs.core.cst$kw$href;
var G__14600 = "normalize.css";
var G__14601 = cljs.core.cst$kw$rel;
var G__14602 = "stylesheet";
return (hoplon.core.link.cljs$core$IFn$_invoke$arity$4 ? hoplon.core.link.cljs$core$IFn$_invoke$arity$4(G__14599,G__14600,G__14601,G__14602) : hoplon.core.link.call(null,G__14599,G__14600,G__14601,G__14602));
})();
var G__14594 = (function (){var G__14603 = cljs.core.cst$kw$href;
var G__14604 = "c3.css";
var G__14605 = cljs.core.cst$kw$rel;
var G__14606 = "stylesheet";
return (hoplon.core.link.cljs$core$IFn$_invoke$arity$4 ? hoplon.core.link.cljs$core$IFn$_invoke$arity$4(G__14603,G__14604,G__14605,G__14606) : hoplon.core.link.call(null,G__14603,G__14604,G__14605,G__14606));
})();
var G__14595 = (function (){var G__14607 = cljs.core.cst$kw$href;
var G__14608 = "app.css";
var G__14609 = cljs.core.cst$kw$rel;
var G__14610 = "stylesheet";
return (hoplon.core.link.cljs$core$IFn$_invoke$arity$4 ? hoplon.core.link.cljs$core$IFn$_invoke$arity$4(G__14607,G__14608,G__14609,G__14610) : hoplon.core.link.call(null,G__14607,G__14608,G__14609,G__14610));
})();
var G__14596 = (function (){var G__14611 = cljs.core.cst$kw$name;
var G__14612 = "viewport";
var G__14613 = cljs.core.cst$kw$content;
var G__14614 = "width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0";
return (hoplon.core.html_meta.cljs$core$IFn$_invoke$arity$4 ? hoplon.core.html_meta.cljs$core$IFn$_invoke$arity$4(G__14611,G__14612,G__14613,G__14614) : hoplon.core.html_meta.call(null,G__14611,G__14612,G__14613,G__14614));
})();
return (hoplon.core.head.cljs$core$IFn$_invoke$arity$6 ? hoplon.core.head.cljs$core$IFn$_invoke$arity$6(G__14591,G__14592,G__14593,G__14594,G__14595,G__14596) : hoplon.core.head.call(null,G__14591,G__14592,G__14593,G__14594,G__14595,G__14596));
})(),(function (){var G__14615 = (function (){var G__14617 = cljs.core.cst$kw$class;
var G__14618 = "sidebar";
var G__14619 = hoplon.app_pages._index_DOT_html.number_input.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$to,hoplon.app_pages._index_DOT_html.overhead,cljs.core.cst$kw$name,"Overhead:",(function (){var G__14622 = cljs.core.cst$kw$class;
var G__14623 = "description";
var G__14624 = "This is the overhead for starting a single parallel thread.";
return (hoplon.core.p.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.p.cljs$core$IFn$_invoke$arity$3(G__14622,G__14623,G__14624) : hoplon.core.p.call(null,G__14622,G__14623,G__14624));
})()], 0));
var G__14620 = hoplon.app_pages._index_DOT_html.number_input.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$to,hoplon.app_pages._index_DOT_html.runtime,cljs.core.cst$kw$name,"Runtime:",(function (){var G__14625 = cljs.core.cst$kw$class;
var G__14626 = "description";
var G__14627 = "This is the total runtime for the work you have to do.";
return (hoplon.core.p.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.p.cljs$core$IFn$_invoke$arity$3(G__14625,G__14626,G__14627) : hoplon.core.p.call(null,G__14625,G__14626,G__14627));
})()], 0));
var G__14621 = hoplon.app_pages._index_DOT_html.number_input.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$to,hoplon.app_pages._index_DOT_html.max_threads,cljs.core.cst$kw$name,"Max Threads:",(function (){var G__14628 = cljs.core.cst$kw$class;
var G__14629 = "description";
var G__14630 = "The maximum number of threads in your algorithm.";
return (hoplon.core.p.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.p.cljs$core$IFn$_invoke$arity$3(G__14628,G__14629,G__14630) : hoplon.core.p.call(null,G__14628,G__14629,G__14630));
})()], 0));
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$5 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$5(G__14617,G__14618,G__14619,G__14620,G__14621) : hoplon.core.div.call(null,G__14617,G__14618,G__14619,G__14620,G__14621));
})();
var G__14616 = (function (){var G__14631 = cljs.core.cst$kw$class;
var G__14632 = "graph-wrapper";
var G__14633 = hoplon.app_pages._index_DOT_html.graph.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$data,hoplon.app_pages._index_DOT_html.graph_data,cljs.core.cst$kw$axis,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$x,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$tick,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$culling,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$max,"off"], null)], null)], null),cljs.core.cst$kw$y,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$min,(0)], null)], null)], 0));
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$3(G__14631,G__14632,G__14633) : hoplon.core.div.call(null,G__14631,G__14632,G__14633));
})();
return (hoplon.core.body.cljs$core$IFn$_invoke$arity$2 ? hoplon.core.body.cljs$core$IFn$_invoke$arity$2(G__14615,G__14616) : hoplon.core.body.call(null,G__14615,G__14616));
})()], 0));