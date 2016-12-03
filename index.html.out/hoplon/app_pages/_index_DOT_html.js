// Compiled by ClojureScript 1.9.293 {:static-fns true, :optimize-constants true}
goog.provide('hoplon.app_pages._index_DOT_html');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('javelin.core');
goog.require('hoplon.jquery');
goog.require('hoplon.core');
hoplon.app_pages._index_DOT_html.route = hoplon.core.route_cell();
hoplon.app_pages._index_DOT_html.params = javelin.core.formula((function (G__14449,G__14447,G__14448,G__14450){
var G__14451 = parseFloat;
var G__14452 = (function (){var G__14453 = (G__14449.cljs$core$IFn$_invoke$arity$2 ? G__14449.cljs$core$IFn$_invoke$arity$2(G__14450,(1)) : G__14449.call(null,G__14450,(1)));
var G__14454 = /\//;
return (G__14448.cljs$core$IFn$_invoke$arity$2 ? G__14448.cljs$core$IFn$_invoke$arity$2(G__14453,G__14454) : G__14448.call(null,G__14453,G__14454));
})();
return (G__14447.cljs$core$IFn$_invoke$arity$2 ? G__14447.cljs$core$IFn$_invoke$arity$2(G__14451,G__14452) : G__14447.call(null,G__14451,G__14452));
})).call(null,cljs.core.subs,cljs.core.map,clojure.string.split,hoplon.app_pages._index_DOT_html.route);
/**
 * @param {...*} var_args
 */
hoplon.app_pages._index_DOT_html.number_input = (function() { 
var hoplon$app_pages$_index_DOT_html$number_input__delegate = function (args__13780__auto__){
var vec__14492 = hoplon.core.parse_args(args__13780__auto__);
var map__14495 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14492,(0),null);
var map__14495__$1 = ((((!((map__14495 == null)))?((((map__14495.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14495.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__14495):map__14495);
var to = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14495__$1,cljs.core.cst$kw$to);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14495__$1,cljs.core.cst$kw$name);
var children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14492,(1),null);
hoplon.app_pages._index_DOT_html.from_string = ((function (vec__14492,map__14495,map__14495__$1,to,name,children){
return (function hoplon$app_pages$_index_DOT_html$number_input_$_from_string(value){
return parseFloat(value);
});})(vec__14492,map__14495,map__14495__$1,to,name,children))
;

hoplon.app_pages._index_DOT_html.validity = ((function (vec__14492,map__14495,map__14495__$1,to,name,children){
return (function hoplon$app_pages$_index_DOT_html$number_input_$_validity(value){
return cljs.core.not((function (){var G__14498 = hoplon.app_pages._index_DOT_html.from_string(value);
return isNaN(G__14498);
})());
});})(vec__14492,map__14495,map__14495__$1,to,name,children))
;

var val = javelin.core.cell.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(to) : cljs.core.deref.call(null,to)));
var valid = javelin.core.formula(((function (val,vec__14492,map__14495,map__14495__$1,to,name,children){
return (function (G__14499,G__14500){
return (G__14499.cljs$core$IFn$_invoke$arity$1 ? G__14499.cljs$core$IFn$_invoke$arity$1(G__14500) : G__14499.call(null,G__14500));
});})(val,vec__14492,map__14495,map__14495__$1,to,name,children))
).call(null,hoplon.app_pages._index_DOT_html.validity,val);
cljs.core.add_watch(val,cljs.core.cst$kw$input,((function (val,valid,vec__14492,map__14495,map__14495__$1,to,name,children){
return (function (p1__14456_SHARP_,p2__14457_SHARP_,p3__14458_SHARP_,p4__14455_SHARP_){
var newVal = p4__14455_SHARP_;
var i = hoplon.app_pages._index_DOT_html.from_string(newVal);
var valid__$1 = hoplon.app_pages._index_DOT_html.validity(newVal);
var G__14501 = to;
var G__14502 = (cljs.core.truth_(valid__$1)?i:(0));
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__14501,G__14502) : cljs.core.reset_BANG_.call(null,G__14501,G__14502));
});})(val,valid,vec__14492,map__14495,map__14495__$1,to,name,children))
);

cljs.core.add_watch(to,cljs.core.cst$kw$input,((function (val,valid,vec__14492,map__14495,map__14495__$1,to,name,children){
return (function (p1__14460_SHARP_,p2__14461_SHARP_,p3__14462_SHARP_,p4__14459_SHARP_){
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(val,p4__14459_SHARP_) : cljs.core.reset_BANG_.call(null,val,p4__14459_SHARP_));
});})(val,valid,vec__14492,map__14495,map__14495__$1,to,name,children))
);

var G__14503 = cljs.core.cst$kw$class;
var G__14504 = "field";
var G__14505 = (function (){var G__14507 = cljs.core.cst$kw$class;
var G__14508 = javelin.core.formula(((function (G__14507,G__14503,G__14504,val,valid,vec__14492,map__14495,map__14495__$1,to,name,children){
return (function (G__14511){
if(cljs.core.truth_(G__14511)){
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$input,true,cljs.core.cst$kw$invalid,false], null);
} else {
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$input,true,cljs.core.cst$kw$invalid,true], null);
}
});})(G__14507,G__14503,G__14504,val,valid,vec__14492,map__14495,map__14495__$1,to,name,children))
).call(null,valid);
var G__14509 = (hoplon.core.label.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.label.cljs$core$IFn$_invoke$arity$1(name) : hoplon.core.label.call(null,name));
var G__14510 = (function (){var G__14512 = cljs.core.cst$kw$value;
var G__14513 = val;
var G__14514 = cljs.core.cst$kw$input;
var G__14515 = ((function (G__14512,G__14513,G__14514,G__14507,G__14508,G__14509,G__14503,G__14504,val,valid,vec__14492,map__14495,map__14495__$1,to,name,children){
return (function (p1__14463_SHARP_){
var G__14518 = val;
var G__14519 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(p1__14463_SHARP_) : cljs.core.deref.call(null,p1__14463_SHARP_));
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__14518,G__14519) : cljs.core.reset_BANG_.call(null,G__14518,G__14519));
});})(G__14512,G__14513,G__14514,G__14507,G__14508,G__14509,G__14503,G__14504,val,valid,vec__14492,map__14495,map__14495__$1,to,name,children))
;
var G__14516 = cljs.core.cst$kw$click;
var G__14517 = ((function (G__14512,G__14513,G__14514,G__14515,G__14516,G__14507,G__14508,G__14509,G__14503,G__14504,val,valid,vec__14492,map__14495,map__14495__$1,to,name,children){
return (function (){
var field = this;
return jQuery(field).select();
});})(G__14512,G__14513,G__14514,G__14515,G__14516,G__14507,G__14508,G__14509,G__14503,G__14504,val,valid,vec__14492,map__14495,map__14495__$1,to,name,children))
;
return (hoplon.core.input.cljs$core$IFn$_invoke$arity$6 ? hoplon.core.input.cljs$core$IFn$_invoke$arity$6(G__14512,G__14513,G__14514,G__14515,G__14516,G__14517) : hoplon.core.input.call(null,G__14512,G__14513,G__14514,G__14515,G__14516,G__14517));
})();
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$4 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$4(G__14507,G__14508,G__14509,G__14510) : hoplon.core.div.call(null,G__14507,G__14508,G__14509,G__14510));
})();
var G__14506 = children;
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$4 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$4(G__14503,G__14504,G__14505,G__14506) : hoplon.core.div.call(null,G__14503,G__14504,G__14505,G__14506));
};
var hoplon$app_pages$_index_DOT_html$number_input = function (var_args){
var args__13780__auto__ = null;
if (arguments.length > 0) {
var G__14520__i = 0, G__14520__a = new Array(arguments.length -  0);
while (G__14520__i < G__14520__a.length) {G__14520__a[G__14520__i] = arguments[G__14520__i + 0]; ++G__14520__i;}
  args__13780__auto__ = new cljs.core.IndexedSeq(G__14520__a,0);
} 
return hoplon$app_pages$_index_DOT_html$number_input__delegate.call(this,args__13780__auto__);};
hoplon$app_pages$_index_DOT_html$number_input.cljs$lang$maxFixedArity = 0;
hoplon$app_pages$_index_DOT_html$number_input.cljs$lang$applyTo = (function (arglist__14521){
var args__13780__auto__ = cljs.core.seq(arglist__14521);
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
var vec__14534 = hoplon.core.parse_args(args__13780__auto__);
var map__14537 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14534,(0),null);
var map__14537__$1 = ((((!((map__14537 == null)))?((((map__14537.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14537.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__14537):map__14537);
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14537__$1,cljs.core.cst$kw$data);
var axis = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14537__$1,cljs.core.cst$kw$axis);
var point = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14537__$1,cljs.core.cst$kw$point);
var size = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14537__$1,cljs.core.cst$kw$size);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14534,(1),null);
var elem = (function (){var G__14539 = cljs.core.cst$kw$class;
var G__14540 = "graph";
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$2 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$2(G__14539,G__14540) : hoplon.core.div.call(null,G__14539,G__14540));
})();
var ___$1 = (function (){var G__14541 = ((function (elem,vec__14534,map__14537,map__14537__$1,data,axis,point,size,_){
return (function (){
var chart = c3.generate(cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$bindto,elem,cljs.core.cst$kw$data,(cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(data) : cljs.core.deref.call(null,data)),cljs.core.cst$kw$axis,axis,cljs.core.cst$kw$point,point,cljs.core.cst$kw$size,size], null)));
var ___$1 = javelin.core.formula(((function (chart,elem,vec__14534,map__14537,map__14537__$1,data,axis,point,size,_){
return (function (G__14545,G__14543,G__14544){
var ___$1 = G__14543.load((G__14544.cljs$core$IFn$_invoke$arity$1 ? G__14544.cljs$core$IFn$_invoke$arity$1(G__14545) : G__14544.call(null,G__14545)));
var ___$2 = G__14543.flush();
return null;
});})(chart,elem,vec__14534,map__14537,map__14537__$1,data,axis,point,size,_))
).call(null,data,chart,cljs.core.clj__GT_js);
return null;
});})(elem,vec__14534,map__14537,map__14537__$1,data,axis,point,size,_))
;
var G__14542 = (1000);
return setTimeout(G__14541,G__14542);
})();
return elem;
};
var hoplon$app_pages$_index_DOT_html$graph = function (var_args){
var args__13780__auto__ = null;
if (arguments.length > 0) {
var G__14546__i = 0, G__14546__a = new Array(arguments.length -  0);
while (G__14546__i < G__14546__a.length) {G__14546__a[G__14546__i] = arguments[G__14546__i + 0]; ++G__14546__i;}
  args__13780__auto__ = new cljs.core.IndexedSeq(G__14546__a,0);
} 
return hoplon$app_pages$_index_DOT_html$graph__delegate.call(this,args__13780__auto__);};
hoplon$app_pages$_index_DOT_html$graph.cljs$lang$maxFixedArity = 0;
hoplon$app_pages$_index_DOT_html$graph.cljs$lang$applyTo = (function (arglist__14547){
var args__13780__auto__ = cljs.core.seq(arglist__14547);
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
hoplon.app_pages._index_DOT_html.overhead = javelin.core.cell.cljs$core$IFn$_invoke$arity$1((5));
hoplon.app_pages._index_DOT_html.runtime = javelin.core.cell.cljs$core$IFn$_invoke$arity$1((60));
hoplon.app_pages._index_DOT_html.max_threads = javelin.core.cell.cljs$core$IFn$_invoke$arity$1((16));
hoplon.app_pages._index_DOT_html.param_inputs = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [hoplon.app_pages._index_DOT_html.max_threads,hoplon.app_pages._index_DOT_html.overhead,hoplon.app_pages._index_DOT_html.runtime], null);
hoplon.app_pages._index_DOT_html.param_updates = javelin.core.formula((function (G__14554,G__14552,G__14551,G__14550,G__14555,G__14549,G__14553){
var G__14556 = (function (p1__14548_SHARP_){
var G__14558 = (G__14551.cljs$core$IFn$_invoke$arity$2 ? G__14551.cljs$core$IFn$_invoke$arity$2(p1__14548_SHARP_,(0)) : G__14551.call(null,p1__14548_SHARP_,(0)));
var G__14559 = (G__14551.cljs$core$IFn$_invoke$arity$2 ? G__14551.cljs$core$IFn$_invoke$arity$2(p1__14548_SHARP_,(1)) : G__14551.call(null,p1__14548_SHARP_,(1)));
return (G__14550.cljs$core$IFn$_invoke$arity$2 ? G__14550.cljs$core$IFn$_invoke$arity$2(G__14558,G__14559) : G__14550.call(null,G__14558,G__14559));
});
var G__14557 = (G__14552.cljs$core$IFn$_invoke$arity$3 ? G__14552.cljs$core$IFn$_invoke$arity$3(G__14553,G__14554,G__14555) : G__14552.call(null,G__14553,G__14554,G__14555));
return (G__14549.cljs$core$IFn$_invoke$arity$2 ? G__14549.cljs$core$IFn$_invoke$arity$2(G__14556,G__14557) : G__14549.call(null,G__14556,G__14557));
})).call(null,hoplon.app_pages._index_DOT_html.param_inputs,cljs.core.map,cljs.core.get,cljs.core.reset_BANG_,hoplon.app_pages._index_DOT_html.params,cljs.core.run_BANG_,cljs.core.vector);
hoplon.app_pages._index_DOT_html.url_updates = javelin.core.formula((function (G__14560,G__14561,G__14562){
return document.location.hash = [cljs.core.str("#"),cljs.core.str(G__14560),cljs.core.str("/"),cljs.core.str(G__14561),cljs.core.str("/"),cljs.core.str(G__14562)].join('');
})).call(null,hoplon.app_pages._index_DOT_html.max_threads,hoplon.app_pages._index_DOT_html.overhead,hoplon.app_pages._index_DOT_html.runtime);
hoplon.app_pages._index_DOT_html.xs = javelin.core.formula((function (G__14564,G__14565,G__14563){
var _ = (G__14563.cljs$core$IFn$_invoke$arity$1 ? G__14563.cljs$core$IFn$_invoke$arity$1(G__14564) : G__14563.call(null,G__14564));
var ___$1 = (function (){var G__14566 = (G__14564 + (1));
return (G__14563.cljs$core$IFn$_invoke$arity$1 ? G__14563.cljs$core$IFn$_invoke$arity$1(G__14566) : G__14563.call(null,G__14566));
})();
var G__14567 = (1);
var G__14568 = (G__14564 + (1));
return (G__14565.cljs$core$IFn$_invoke$arity$2 ? G__14565.cljs$core$IFn$_invoke$arity$2(G__14567,G__14568) : G__14565.call(null,G__14567,G__14568));
})).call(null,hoplon.app_pages._index_DOT_html.max_threads,cljs.core.range,cljs.core.print);
hoplon.app_pages._index_DOT_html.graph_data = javelin.core.formula((function (G__14571,G__14574,G__14569,G__14573,G__14576,G__14570,G__14572,G__14575){
return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$type,"spline",cljs.core.cst$kw$x,"x",cljs.core.cst$kw$columns,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(G__14569.cljs$core$IFn$_invoke$arity$2 ? G__14569.cljs$core$IFn$_invoke$arity$2(G__14570,"x") : G__14569.call(null,G__14570,"x")),(function (){var G__14577 = (function (){var G__14579 = (G__14572.cljs$core$IFn$_invoke$arity$3 ? G__14572.cljs$core$IFn$_invoke$arity$3(G__14573,G__14574,G__14575) : G__14572.call(null,G__14573,G__14574,G__14575));
var G__14580 = G__14570;
return (G__14571.cljs$core$IFn$_invoke$arity$2 ? G__14571.cljs$core$IFn$_invoke$arity$2(G__14579,G__14580) : G__14571.call(null,G__14579,G__14580));
})();
var G__14578 = "Efficiency";
return (G__14569.cljs$core$IFn$_invoke$arity$2 ? G__14569.cljs$core$IFn$_invoke$arity$2(G__14577,G__14578) : G__14569.call(null,G__14577,G__14578));
})(),(function (){var G__14581 = (function (){var G__14583 = (G__14572.cljs$core$IFn$_invoke$arity$3 ? G__14572.cljs$core$IFn$_invoke$arity$3(G__14576,G__14574,G__14575) : G__14572.call(null,G__14576,G__14574,G__14575));
var G__14584 = G__14570;
return (G__14571.cljs$core$IFn$_invoke$arity$2 ? G__14571.cljs$core$IFn$_invoke$arity$2(G__14583,G__14584) : G__14571.call(null,G__14583,G__14584));
})();
var G__14582 = "Wall clock runtime";
return (G__14569.cljs$core$IFn$_invoke$arity$2 ? G__14569.cljs$core$IFn$_invoke$arity$2(G__14581,G__14582) : G__14569.call(null,G__14581,G__14582));
})()], null)], null);
})).call(null,cljs.core.map,hoplon.app_pages._index_DOT_html.overhead,cljs.core.conj,hoplon.app_pages._index_DOT_html.calc_efficiency,hoplon.app_pages._index_DOT_html.calc_runtime,hoplon.app_pages._index_DOT_html.xs,cljs.core.partial,hoplon.app_pages._index_DOT_html.runtime);
hoplon.core.html.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([(function (){var G__14585 = (hoplon.core.title.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.title.cljs$core$IFn$_invoke$arity$1("Parallelism calculator") : hoplon.core.title.call(null,"Parallelism calculator"));
var G__14586 = (function (){var G__14591 = cljs.core.cst$kw$charset;
var G__14592 = "utf-8";
return (hoplon.core.html_meta.cljs$core$IFn$_invoke$arity$2 ? hoplon.core.html_meta.cljs$core$IFn$_invoke$arity$2(G__14591,G__14592) : hoplon.core.html_meta.call(null,G__14591,G__14592));
})();
var G__14587 = (function (){var G__14593 = cljs.core.cst$kw$href;
var G__14594 = "normalize.css";
var G__14595 = cljs.core.cst$kw$rel;
var G__14596 = "stylesheet";
return (hoplon.core.link.cljs$core$IFn$_invoke$arity$4 ? hoplon.core.link.cljs$core$IFn$_invoke$arity$4(G__14593,G__14594,G__14595,G__14596) : hoplon.core.link.call(null,G__14593,G__14594,G__14595,G__14596));
})();
var G__14588 = (function (){var G__14597 = cljs.core.cst$kw$href;
var G__14598 = "c3.css";
var G__14599 = cljs.core.cst$kw$rel;
var G__14600 = "stylesheet";
return (hoplon.core.link.cljs$core$IFn$_invoke$arity$4 ? hoplon.core.link.cljs$core$IFn$_invoke$arity$4(G__14597,G__14598,G__14599,G__14600) : hoplon.core.link.call(null,G__14597,G__14598,G__14599,G__14600));
})();
var G__14589 = (function (){var G__14601 = cljs.core.cst$kw$href;
var G__14602 = "app.css";
var G__14603 = cljs.core.cst$kw$rel;
var G__14604 = "stylesheet";
return (hoplon.core.link.cljs$core$IFn$_invoke$arity$4 ? hoplon.core.link.cljs$core$IFn$_invoke$arity$4(G__14601,G__14602,G__14603,G__14604) : hoplon.core.link.call(null,G__14601,G__14602,G__14603,G__14604));
})();
var G__14590 = (function (){var G__14605 = cljs.core.cst$kw$name;
var G__14606 = "viewport";
var G__14607 = cljs.core.cst$kw$content;
var G__14608 = "width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0";
return (hoplon.core.html_meta.cljs$core$IFn$_invoke$arity$4 ? hoplon.core.html_meta.cljs$core$IFn$_invoke$arity$4(G__14605,G__14606,G__14607,G__14608) : hoplon.core.html_meta.call(null,G__14605,G__14606,G__14607,G__14608));
})();
return (hoplon.core.head.cljs$core$IFn$_invoke$arity$6 ? hoplon.core.head.cljs$core$IFn$_invoke$arity$6(G__14585,G__14586,G__14587,G__14588,G__14589,G__14590) : hoplon.core.head.call(null,G__14585,G__14586,G__14587,G__14588,G__14589,G__14590));
})(),(function (){var G__14609 = (function (){var G__14611 = cljs.core.cst$kw$class;
var G__14612 = "sidebar";
var G__14613 = hoplon.app_pages._index_DOT_html.number_input.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$to,hoplon.app_pages._index_DOT_html.overhead,cljs.core.cst$kw$name,"Overhead:",(function (){var G__14616 = cljs.core.cst$kw$class;
var G__14617 = "description";
var G__14618 = "This is the overhead for starting a single parallel thread.";
return (hoplon.core.p.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.p.cljs$core$IFn$_invoke$arity$3(G__14616,G__14617,G__14618) : hoplon.core.p.call(null,G__14616,G__14617,G__14618));
})()], 0));
var G__14614 = hoplon.app_pages._index_DOT_html.number_input.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$to,hoplon.app_pages._index_DOT_html.runtime,cljs.core.cst$kw$name,"Runtime:",(function (){var G__14619 = cljs.core.cst$kw$class;
var G__14620 = "description";
var G__14621 = "This is the total runtime for the work you have to do.";
return (hoplon.core.p.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.p.cljs$core$IFn$_invoke$arity$3(G__14619,G__14620,G__14621) : hoplon.core.p.call(null,G__14619,G__14620,G__14621));
})()], 0));
var G__14615 = hoplon.app_pages._index_DOT_html.number_input.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$to,hoplon.app_pages._index_DOT_html.max_threads,cljs.core.cst$kw$name,"Max Threads:",(function (){var G__14622 = cljs.core.cst$kw$class;
var G__14623 = "description";
var G__14624 = "The maximum number of threads in your algorithm.";
return (hoplon.core.p.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.p.cljs$core$IFn$_invoke$arity$3(G__14622,G__14623,G__14624) : hoplon.core.p.call(null,G__14622,G__14623,G__14624));
})()], 0));
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$5 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$5(G__14611,G__14612,G__14613,G__14614,G__14615) : hoplon.core.div.call(null,G__14611,G__14612,G__14613,G__14614,G__14615));
})();
var G__14610 = (function (){var G__14625 = cljs.core.cst$kw$class;
var G__14626 = "graph-wrapper";
var G__14627 = hoplon.app_pages._index_DOT_html.graph.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$data,hoplon.app_pages._index_DOT_html.graph_data,cljs.core.cst$kw$axis,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$x,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$tick,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$culling,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$max,"off"], null)], null)], null),cljs.core.cst$kw$y,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$min,(0)], null)], null)], 0));
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$3(G__14625,G__14626,G__14627) : hoplon.core.div.call(null,G__14625,G__14626,G__14627));
})();
return (hoplon.core.body.cljs$core$IFn$_invoke$arity$2 ? hoplon.core.body.cljs$core$IFn$_invoke$arity$2(G__14609,G__14610) : hoplon.core.body.call(null,G__14609,G__14610));
})()], 0));
