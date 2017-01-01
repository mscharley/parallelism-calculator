// Compiled by ClojureScript 1.9.293 {:static-fns true, :optimize-constants true}
goog.provide('parallelism.params');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('hoplon.core');
goog.require('javelin.core');
goog.require('parallelism.values');
/**
 * Create a new URL parameter
 */
parallelism.params.param = (function parallelism$params$param(_AMPERSAND_form,_AMPERSAND_env,initial,from_string){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_let),(function (){var x__7710__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cell__14342__auto__),(function (){var x__7710__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$javelin$core_SLASH_cell),(function (){var x__7710__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$parallelism$values_SLASH_value),(function (){var x__7710__auto__ = initial;
return cljs.core._conj(cljs.core.List.EMPTY,x__7710__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__7710__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__7710__auto__);
})()))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7710__auto__);
})(),cljs.core.array_seq([(function (){var x__7710__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$javelin$core_SLASH_cell_EQ_),(function (){var x__7710__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_identity),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cell__14342__auto__))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7710__auto__);
})(),cljs.core.array_seq([(function (){var x__7710__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$fn_STAR_),(function (){var x__7710__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$p1__14341__14343__auto__)))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7710__auto__);
})(),cljs.core.array_seq([(function (){var x__7710__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$if),(function (){var x__7710__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH__EQ_),(function (){var x__7710__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_type),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$p1__14341__14343__auto__))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7710__auto__);
})(),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$js_SLASH_String)], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7710__auto__);
})(),cljs.core.array_seq([(function (){var x__7710__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_reset_BANG_),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cell__14342__auto__),cljs.core.array_seq([(function (){var x__7710__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$if),(function (){var x__7710__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$js_SLASH_isNaN),(function (){var x__7710__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((function (){var x__7710__auto__ = from_string;
return cljs.core._conj(cljs.core.List.EMPTY,x__7710__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$p1__14341__14343__auto__))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7710__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__7710__auto__);
})(),cljs.core.array_seq([(function (){var x__7710__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$parallelism$values_SLASH_error),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$p1__14341__14343__auto__),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,"Invalid value - evaluated to NaN")], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7710__auto__);
})(),(function (){var x__7710__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$parallelism$values_SLASH_value),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$p1__14341__14343__auto__))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7710__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7710__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7710__auto__);
})(),(function (){var x__7710__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_reset_BANG_),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cell__14342__auto__),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$p1__14341__14343__auto__)], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7710__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7710__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7710__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7710__auto__);
})()], 0))));
});

parallelism.params.param.cljs$lang$macro = true;
/**
 * Generate a routing structure based on a given list of parameters.
 * 
 *   Parameters passed in will be pre-populated with values from the current routing hash.
 */
parallelism.params.defroute = (function parallelism$params$defroute(_AMPERSAND_form,_AMPERSAND_env,params){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$javelin$core_SLASH_dosync),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__14360){
var vec__14361 = p__14360;
var sym = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14361,(0),null);
var props = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14361,(1),null);
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$def),(function (){var x__7710__auto__ = sym;
return cljs.core._conj(cljs.core.List.EMPTY,x__7710__auto__);
})(),cljs.core.array_seq([(function (){var x__7710__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$parallelism$params_SLASH_param),props)));
return cljs.core._conj(cljs.core.List.EMPTY,x__7710__auto__);
})()], 0))));
}),cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),params)),cljs.core.array_seq([(function (){var x__7710__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_let),(function (){var x__7710__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$params__14346__auto__),(function (){var x__7710__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_vector),cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.first,cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),params)))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7710__auto__);
})(),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$r__14347__auto__),(function (){var x__7710__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$hoplon$core_SLASH_route_DASH_cell),(function (){var x__7710__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_str),cljs.core._conj(cljs.core.List.EMPTY,"#"),cljs.core.array_seq([(function (){var x__7710__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$clojure$string_SLASH_join),(function (){var x__7710__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_map),(function (){var x__7710__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$fn_STAR_),(function (){var x__7710__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$p1__14344__14348__auto__)))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7710__auto__);
})(),cljs.core.array_seq([(function (){var x__7710__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$kw$value),(function (){var x__7710__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_deref),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$p1__14344__14348__auto__))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7710__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__7710__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7710__auto__);
})(),cljs.core.array_seq([(function (){var x__7710__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$quote),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$params__14346__auto__))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7710__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7710__auto__);
})(),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,"/")], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7710__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7710__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__7710__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$values__14349__auto__),(function (){var x__7710__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$javelin$core_SLASH_cell_EQ_),(function (){var x__7710__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH__DASH__GT_),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$r__14347__auto__),cljs.core.array_seq([(function (){var x__7710__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$clojure$string_SLASH_replace_DASH_first),cljs.core._conj(cljs.core.List.EMPTY,/^#/),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,"")], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7710__auto__);
})(),(function (){var x__7710__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$clojure$string_SLASH_split),cljs.core._conj(cljs.core.List.EMPTY,/\//))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7710__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7710__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__7710__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$param_DASH_values__14350__auto__),(function (){var x__7710__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$javelin$core_SLASH_cell_EQ_),(function (){var x__7710__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_map),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_vector),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$params__14346__auto__),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$values__14349__auto__)], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7710__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__7710__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$param_DASH_updates__14351__auto__),(function (){var x__7710__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$javelin$core_SLASH_cell_EQ_),(function (){var x__7710__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$javelin$core_SLASH_dosync),(function (){var x__7710__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_doall),(function (){var x__7710__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_for),(function (){var x__7710__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((function (){var x__7710__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cell__14352__auto__),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$value__14353__auto__)))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7710__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$param_DASH_values__14350__auto__)))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7710__auto__);
})(),cljs.core.array_seq([(function (){var x__7710__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_reset_BANG_),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cell__14352__auto__),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$value__14353__auto__)], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7710__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7710__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__7710__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__7710__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__7710__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$route__14354__auto__),(function (){var x__7710__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$javelin$core_SLASH_cell_EQ_),(function (){var x__7710__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_str),cljs.core._conj(cljs.core.List.EMPTY,"#"),cljs.core.array_seq([(function (){var x__7710__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$clojure$string_SLASH_join),cljs.core._conj(cljs.core.List.EMPTY,"/"),cljs.core.array_seq([(function (){var x__7710__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__14345_SHARP_){
return cljs.core._conj((function (){var x__7710__auto__ = p1__14345_SHARP_;
return cljs.core._conj(cljs.core.List.EMPTY,x__7710__auto__);
})(),cljs.core.cst$kw$value);
}),cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.first,cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),params)))))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7710__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7710__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7710__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__7710__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$route_DASH_updates__14355__auto__),(function (){var x__7710__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$javelin$core_SLASH_cell_EQ_),(function (){var x__7710__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH__DASH__GT_),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$js_SLASH_document),cljs.core.array_seq([(function (){var x__7710__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$$_DASH_location))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7710__auto__);
})(),(function (){var x__7710__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$$_DASH_hash))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7710__auto__);
})(),(function (){var x__7710__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$set_BANG_),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$route__14354__auto__))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7710__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7710__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__7710__auto__);
})()], 0)))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7710__auto__);
})(),cljs.core.array_seq([(function (){var x__7710__auto__ = cljs.core.List.EMPTY;
return cljs.core._conj(cljs.core.List.EMPTY,x__7710__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7710__auto__);
})()], 0))));
});

parallelism.params.defroute.cljs$lang$macro = true;
