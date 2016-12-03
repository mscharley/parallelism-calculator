// Compiled by ClojureScript 1.9.293 {:static-fns true, :optimize-constants true}
goog.provide('hoplon.app_pages._index_DOT_html');
goog.require('cljs.core');
goog.require('javelin.core');
goog.require('hoplon.jquery');
goog.require('hoplon.core');
/**
 * @param {...*} var_args
 */
hoplon.app_pages._index_DOT_html.number_input = (function() { 
var hoplon$app_pages$_index_DOT_html$number_input__delegate = function (args__13780__auto__){
var vec__14483 = hoplon.core.parse_args(args__13780__auto__);
var map__14486 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14483,(0),null);
var map__14486__$1 = ((((!((map__14486 == null)))?((((map__14486.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14486.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__14486):map__14486);
var to = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14486__$1,cljs.core.cst$kw$to);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14486__$1,cljs.core.cst$kw$name);
var description = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14486__$1,cljs.core.cst$kw$description);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14483,(1),null);
hoplon.app_pages._index_DOT_html.from_string = ((function (vec__14483,map__14486,map__14486__$1,to,name,description,_){
return (function hoplon$app_pages$_index_DOT_html$number_input_$_from_string(value){
return parseFloat(value);
});})(vec__14483,map__14486,map__14486__$1,to,name,description,_))
;

hoplon.app_pages._index_DOT_html.validity = ((function (vec__14483,map__14486,map__14486__$1,to,name,description,_){
return (function hoplon$app_pages$_index_DOT_html$number_input_$_validity(value){
return cljs.core.not((function (){var G__14489 = hoplon.app_pages._index_DOT_html.from_string(value);
return isNaN(G__14489);
})());
});})(vec__14483,map__14486,map__14486__$1,to,name,description,_))
;

var val = javelin.core.cell.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(to) : cljs.core.deref.call(null,to)));
var valid = javelin.core.formula(((function (val,vec__14483,map__14486,map__14486__$1,to,name,description,_){
return (function (G__14490,G__14491){
return (G__14490.cljs$core$IFn$_invoke$arity$1 ? G__14490.cljs$core$IFn$_invoke$arity$1(G__14491) : G__14490.call(null,G__14491));
});})(val,vec__14483,map__14486,map__14486__$1,to,name,description,_))
).call(null,hoplon.app_pages._index_DOT_html.validity,val);
cljs.core.add_watch(val,cljs.core.cst$kw$input,((function (val,valid,vec__14483,map__14486,map__14486__$1,to,name,description,_){
return (function (p1__14448_SHARP_,p2__14449_SHARP_,p3__14450_SHARP_,p4__14447_SHARP_){
var newVal = p4__14447_SHARP_;
var i = hoplon.app_pages._index_DOT_html.from_string(newVal);
var valid__$1 = hoplon.app_pages._index_DOT_html.validity(newVal);
var G__14492 = to;
var G__14493 = (cljs.core.truth_(valid__$1)?i:(0));
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__14492,G__14493) : cljs.core.reset_BANG_.call(null,G__14492,G__14493));
});})(val,valid,vec__14483,map__14486,map__14486__$1,to,name,description,_))
);

var G__14494 = cljs.core.cst$kw$class;
var G__14495 = "field";
var G__14496 = (function (){var G__14498 = cljs.core.cst$kw$class;
var G__14499 = javelin.core.formula(((function (G__14498,G__14494,G__14495,val,valid,vec__14483,map__14486,map__14486__$1,to,name,description,_){
return (function (G__14502){
if(cljs.core.truth_(G__14502)){
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$input,true,cljs.core.cst$kw$invalid,false], null);
} else {
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$input,true,cljs.core.cst$kw$invalid,true], null);
}
});})(G__14498,G__14494,G__14495,val,valid,vec__14483,map__14486,map__14486__$1,to,name,description,_))
).call(null,valid);
var G__14500 = (hoplon.core.label.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.label.cljs$core$IFn$_invoke$arity$1(name) : hoplon.core.label.call(null,name));
var G__14501 = (function (){var G__14503 = cljs.core.cst$kw$value;
var G__14504 = val;
var G__14505 = cljs.core.cst$kw$input;
var G__14506 = ((function (G__14503,G__14504,G__14505,G__14498,G__14499,G__14500,G__14494,G__14495,val,valid,vec__14483,map__14486,map__14486__$1,to,name,description,_){
return (function (p1__14451_SHARP_){
var G__14509 = val;
var G__14510 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(p1__14451_SHARP_) : cljs.core.deref.call(null,p1__14451_SHARP_));
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__14509,G__14510) : cljs.core.reset_BANG_.call(null,G__14509,G__14510));
});})(G__14503,G__14504,G__14505,G__14498,G__14499,G__14500,G__14494,G__14495,val,valid,vec__14483,map__14486,map__14486__$1,to,name,description,_))
;
var G__14507 = cljs.core.cst$kw$click;
var G__14508 = ((function (G__14503,G__14504,G__14505,G__14506,G__14507,G__14498,G__14499,G__14500,G__14494,G__14495,val,valid,vec__14483,map__14486,map__14486__$1,to,name,description,_){
return (function (){
var field = this;
return jQuery(field).select();
});})(G__14503,G__14504,G__14505,G__14506,G__14507,G__14498,G__14499,G__14500,G__14494,G__14495,val,valid,vec__14483,map__14486,map__14486__$1,to,name,description,_))
;
return (hoplon.core.input.cljs$core$IFn$_invoke$arity$6 ? hoplon.core.input.cljs$core$IFn$_invoke$arity$6(G__14503,G__14504,G__14505,G__14506,G__14507,G__14508) : hoplon.core.input.call(null,G__14503,G__14504,G__14505,G__14506,G__14507,G__14508));
})();
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$4 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$4(G__14498,G__14499,G__14500,G__14501) : hoplon.core.div.call(null,G__14498,G__14499,G__14500,G__14501));
})();
var G__14497 = (cljs.core.truth_(description)?(function (){var G__14511 = cljs.core.cst$kw$class;
var G__14512 = "description";
var G__14513 = description;
return (hoplon.core.p.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.p.cljs$core$IFn$_invoke$arity$3(G__14511,G__14512,G__14513) : hoplon.core.p.call(null,G__14511,G__14512,G__14513));
})():null);
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$4 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$4(G__14494,G__14495,G__14496,G__14497) : hoplon.core.div.call(null,G__14494,G__14495,G__14496,G__14497));
};
var hoplon$app_pages$_index_DOT_html$number_input = function (var_args){
var args__13780__auto__ = null;
if (arguments.length > 0) {
var G__14514__i = 0, G__14514__a = new Array(arguments.length -  0);
while (G__14514__i < G__14514__a.length) {G__14514__a[G__14514__i] = arguments[G__14514__i + 0]; ++G__14514__i;}
  args__13780__auto__ = new cljs.core.IndexedSeq(G__14514__a,0);
} 
return hoplon$app_pages$_index_DOT_html$number_input__delegate.call(this,args__13780__auto__);};
hoplon$app_pages$_index_DOT_html$number_input.cljs$lang$maxFixedArity = 0;
hoplon$app_pages$_index_DOT_html$number_input.cljs$lang$applyTo = (function (arglist__14515){
var args__13780__auto__ = cljs.core.seq(arglist__14515);
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
var vec__14528 = hoplon.core.parse_args(args__13780__auto__);
var map__14531 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14528,(0),null);
var map__14531__$1 = ((((!((map__14531 == null)))?((((map__14531.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14531.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__14531):map__14531);
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14531__$1,cljs.core.cst$kw$data);
var axis = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14531__$1,cljs.core.cst$kw$axis);
var point = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14531__$1,cljs.core.cst$kw$point);
var size = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14531__$1,cljs.core.cst$kw$size);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14528,(1),null);
var elem = (function (){var G__14533 = cljs.core.cst$kw$class;
var G__14534 = "graph";
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$2 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$2(G__14533,G__14534) : hoplon.core.div.call(null,G__14533,G__14534));
})();
var ___$1 = (function (){var G__14535 = ((function (elem,vec__14528,map__14531,map__14531__$1,data,axis,point,size,_){
return (function (){
var chart = c3.generate(cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$bindto,elem,cljs.core.cst$kw$data,(cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(data) : cljs.core.deref.call(null,data)),cljs.core.cst$kw$axis,axis,cljs.core.cst$kw$point,point,cljs.core.cst$kw$size,size], null)));
var ___$1 = javelin.core.formula(((function (chart,elem,vec__14528,map__14531,map__14531__$1,data,axis,point,size,_){
return (function (G__14539,G__14537,G__14538){
var ___$1 = G__14537.load((G__14538.cljs$core$IFn$_invoke$arity$1 ? G__14538.cljs$core$IFn$_invoke$arity$1(G__14539) : G__14538.call(null,G__14539)));
var ___$2 = G__14537.flush();
return null;
});})(chart,elem,vec__14528,map__14531,map__14531__$1,data,axis,point,size,_))
).call(null,data,chart,cljs.core.clj__GT_js);
return null;
});})(elem,vec__14528,map__14531,map__14531__$1,data,axis,point,size,_))
;
var G__14536 = (100);
return setTimeout(G__14535,G__14536);
})();
return elem;
};
var hoplon$app_pages$_index_DOT_html$graph = function (var_args){
var args__13780__auto__ = null;
if (arguments.length > 0) {
var G__14540__i = 0, G__14540__a = new Array(arguments.length -  0);
while (G__14540__i < G__14540__a.length) {G__14540__a[G__14540__i] = arguments[G__14540__i + 0]; ++G__14540__i;}
  args__13780__auto__ = new cljs.core.IndexedSeq(G__14540__a,0);
} 
return hoplon$app_pages$_index_DOT_html$graph__delegate.call(this,args__13780__auto__);};
hoplon$app_pages$_index_DOT_html$graph.cljs$lang$maxFixedArity = 0;
hoplon$app_pages$_index_DOT_html$graph.cljs$lang$applyTo = (function (arglist__14541){
var args__13780__auto__ = cljs.core.seq(arglist__14541);
return hoplon$app_pages$_index_DOT_html$graph__delegate(args__13780__auto__);
});
hoplon$app_pages$_index_DOT_html$graph.cljs$core$IFn$_invoke$arity$variadic = hoplon$app_pages$_index_DOT_html$graph__delegate;
return hoplon$app_pages$_index_DOT_html$graph;
})()
;
hoplon.app_pages._index_DOT_html.calc_efficiency = (function hoplon$app_pages$_index_DOT_html$calc_efficiency(overhead,runtime,x){
return (function (x__$1){
return ((overhead * x__$1) + (runtime / x__$1));
}).call(null,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x,(0)))?0.8:x));
});
hoplon.app_pages._index_DOT_html.calc_runtime = (function hoplon$app_pages$_index_DOT_html$calc_runtime(overhead,runtime,x){
return (function (x__$1){
return (overhead + (runtime / x__$1));
}).call(null,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x,(0)))?0.8:x));
});
hoplon.app_pages._index_DOT_html.overhead = javelin.core.cell.cljs$core$IFn$_invoke$arity$1((5));
hoplon.app_pages._index_DOT_html.runtime = javelin.core.cell.cljs$core$IFn$_invoke$arity$1((60));
hoplon.app_pages._index_DOT_html.max_threads = javelin.core.cell.cljs$core$IFn$_invoke$arity$1((16));
hoplon.app_pages._index_DOT_html.xs = javelin.core.formula((function (G__14543,G__14542){
return (G__14542.cljs$core$IFn$_invoke$arity$2 ? G__14542.cljs$core$IFn$_invoke$arity$2((1),G__14543) : G__14542.call(null,(1),G__14543));
})).call(null,hoplon.app_pages._index_DOT_html.max_threads,cljs.core.range);
hoplon.app_pages._index_DOT_html.graph_data = javelin.core.formula((function (G__14546,G__14549,G__14544,G__14548,G__14551,G__14545,G__14547,G__14550){
return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$type,"spline",cljs.core.cst$kw$x,"x",cljs.core.cst$kw$columns,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(G__14544.cljs$core$IFn$_invoke$arity$2 ? G__14544.cljs$core$IFn$_invoke$arity$2(G__14545,"x") : G__14544.call(null,G__14545,"x")),(function (){var G__14552 = (function (){var G__14554 = (G__14547.cljs$core$IFn$_invoke$arity$3 ? G__14547.cljs$core$IFn$_invoke$arity$3(G__14548,G__14549,G__14550) : G__14547.call(null,G__14548,G__14549,G__14550));
var G__14555 = G__14545;
return (G__14546.cljs$core$IFn$_invoke$arity$2 ? G__14546.cljs$core$IFn$_invoke$arity$2(G__14554,G__14555) : G__14546.call(null,G__14554,G__14555));
})();
var G__14553 = "Efficiency";
return (G__14544.cljs$core$IFn$_invoke$arity$2 ? G__14544.cljs$core$IFn$_invoke$arity$2(G__14552,G__14553) : G__14544.call(null,G__14552,G__14553));
})(),(function (){var G__14556 = (function (){var G__14558 = (G__14547.cljs$core$IFn$_invoke$arity$3 ? G__14547.cljs$core$IFn$_invoke$arity$3(G__14551,G__14549,G__14550) : G__14547.call(null,G__14551,G__14549,G__14550));
var G__14559 = G__14545;
return (G__14546.cljs$core$IFn$_invoke$arity$2 ? G__14546.cljs$core$IFn$_invoke$arity$2(G__14558,G__14559) : G__14546.call(null,G__14558,G__14559));
})();
var G__14557 = "Wall clock runtime";
return (G__14544.cljs$core$IFn$_invoke$arity$2 ? G__14544.cljs$core$IFn$_invoke$arity$2(G__14556,G__14557) : G__14544.call(null,G__14556,G__14557));
})()], null)], null);
})).call(null,cljs.core.map,hoplon.app_pages._index_DOT_html.overhead,cljs.core.conj,hoplon.app_pages._index_DOT_html.calc_efficiency,hoplon.app_pages._index_DOT_html.calc_runtime,hoplon.app_pages._index_DOT_html.xs,cljs.core.partial,hoplon.app_pages._index_DOT_html.runtime);
hoplon.core.html.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([(function (){var G__14560 = (hoplon.core.title.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.title.cljs$core$IFn$_invoke$arity$1("Parallelism calculator") : hoplon.core.title.call(null,"Parallelism calculator"));
var G__14561 = (function (){var G__14566 = cljs.core.cst$kw$charset;
var G__14567 = "utf-8";
return (hoplon.core.html_meta.cljs$core$IFn$_invoke$arity$2 ? hoplon.core.html_meta.cljs$core$IFn$_invoke$arity$2(G__14566,G__14567) : hoplon.core.html_meta.call(null,G__14566,G__14567));
})();
var G__14562 = (function (){var G__14568 = cljs.core.cst$kw$href;
var G__14569 = "normalize.css";
var G__14570 = cljs.core.cst$kw$rel;
var G__14571 = "stylesheet";
return (hoplon.core.link.cljs$core$IFn$_invoke$arity$4 ? hoplon.core.link.cljs$core$IFn$_invoke$arity$4(G__14568,G__14569,G__14570,G__14571) : hoplon.core.link.call(null,G__14568,G__14569,G__14570,G__14571));
})();
var G__14563 = (function (){var G__14572 = cljs.core.cst$kw$href;
var G__14573 = "c3.css";
var G__14574 = cljs.core.cst$kw$rel;
var G__14575 = "stylesheet";
return (hoplon.core.link.cljs$core$IFn$_invoke$arity$4 ? hoplon.core.link.cljs$core$IFn$_invoke$arity$4(G__14572,G__14573,G__14574,G__14575) : hoplon.core.link.call(null,G__14572,G__14573,G__14574,G__14575));
})();
var G__14564 = (function (){var G__14576 = cljs.core.cst$kw$href;
var G__14577 = "app.css";
var G__14578 = cljs.core.cst$kw$rel;
var G__14579 = "stylesheet";
return (hoplon.core.link.cljs$core$IFn$_invoke$arity$4 ? hoplon.core.link.cljs$core$IFn$_invoke$arity$4(G__14576,G__14577,G__14578,G__14579) : hoplon.core.link.call(null,G__14576,G__14577,G__14578,G__14579));
})();
var G__14565 = (function (){var G__14580 = cljs.core.cst$kw$name;
var G__14581 = "viewport";
var G__14582 = cljs.core.cst$kw$content;
var G__14583 = "width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0";
return (hoplon.core.html_meta.cljs$core$IFn$_invoke$arity$4 ? hoplon.core.html_meta.cljs$core$IFn$_invoke$arity$4(G__14580,G__14581,G__14582,G__14583) : hoplon.core.html_meta.call(null,G__14580,G__14581,G__14582,G__14583));
})();
return (hoplon.core.head.cljs$core$IFn$_invoke$arity$6 ? hoplon.core.head.cljs$core$IFn$_invoke$arity$6(G__14560,G__14561,G__14562,G__14563,G__14564,G__14565) : hoplon.core.head.call(null,G__14560,G__14561,G__14562,G__14563,G__14564,G__14565));
})(),(function (){var G__14584 = (function (){var G__14586 = cljs.core.cst$kw$class;
var G__14587 = "sidebar";
var G__14588 = hoplon.app_pages._index_DOT_html.number_input.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$to,hoplon.app_pages._index_DOT_html.overhead,cljs.core.cst$kw$name,"Overhead:",cljs.core.cst$kw$description,"This is the overhead for starting a single parallel thread."], 0));
var G__14589 = hoplon.app_pages._index_DOT_html.number_input.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$to,hoplon.app_pages._index_DOT_html.runtime,cljs.core.cst$kw$name,"Runtime:",cljs.core.cst$kw$description,"This is the total runtime for the work you have to do."], 0));
var G__14590 = hoplon.app_pages._index_DOT_html.number_input.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$to,hoplon.app_pages._index_DOT_html.max_threads,cljs.core.cst$kw$name,"Max Threads:",cljs.core.cst$kw$description,"The maximum number of threads in your algorithm."], 0));
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$5 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$5(G__14586,G__14587,G__14588,G__14589,G__14590) : hoplon.core.div.call(null,G__14586,G__14587,G__14588,G__14589,G__14590));
})();
var G__14585 = (function (){var G__14591 = cljs.core.cst$kw$class;
var G__14592 = "graph-wrapper";
var G__14593 = hoplon.app_pages._index_DOT_html.graph.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$data,hoplon.app_pages._index_DOT_html.graph_data,cljs.core.cst$kw$axis,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$x,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$tick,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$culling,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$max,"off"], null)], null)], null),cljs.core.cst$kw$y,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$min,(0)], null)], null)], 0));
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$3(G__14591,G__14592,G__14593) : hoplon.core.div.call(null,G__14591,G__14592,G__14593));
})();
return (hoplon.core.body.cljs$core$IFn$_invoke$arity$2 ? hoplon.core.body.cljs$core$IFn$_invoke$arity$2(G__14584,G__14585) : hoplon.core.body.call(null,G__14584,G__14585));
})()], 0));
