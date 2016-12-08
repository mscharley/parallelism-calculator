// Compiled by ClojureScript 1.9.293 {:static-fns true, :optimize-constants true}
goog.provide('javelin.core');
goog.require('cljs.core');
goog.require('tailrecursion.priority_map');




javelin.core._STAR_tx_STAR_ = null;
javelin.core.last_rank = (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0)) : cljs.core.atom.call(null,(0)));
/**
 * Like tree-seq but traversal is breadth-first instead of depth-first.
 */
javelin.core.bf_seq = (function javelin$core$bf_seq(branch_QMARK_,children,root){
var walk = (function javelin$core$bf_seq_$_walk(queue){
var temp__4657__auto__ = cljs.core.peek(queue);
if(cljs.core.truth_(temp__4657__auto__)){
var node = temp__4657__auto__;
return (new cljs.core.LazySeq(null,((function (node,temp__4657__auto__){
return (function (){
return cljs.core.cons(node,javelin$core$bf_seq_$_walk(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.pop(queue),(cljs.core.truth_((branch_QMARK_.cljs$core$IFn$_invoke$arity$1 ? branch_QMARK_.cljs$core$IFn$_invoke$arity$1(node) : branch_QMARK_.call(null,node)))?(children.cljs$core$IFn$_invoke$arity$1 ? children.cljs$core$IFn$_invoke$arity$1(node) : children.call(null,node)):null))));
});})(node,temp__4657__auto__))
,null,null));
} else {
return null;
}
});
return walk(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentQueue.EMPTY,root));
});
javelin.core.propagate_STAR_ = (function javelin$core$propagate_STAR_(pri_map){
while(true){
var temp__4657__auto__ = cljs.core.first(cljs.core.peek(pri_map));
if(cljs.core.truth_(temp__4657__auto__)){
var next = temp__4657__auto__;
var popq = cljs.core.pop(pri_map);
var old = next.prev;
var new$ = (function (){var temp__4655__auto__ = next.thunk;
if(cljs.core.truth_(temp__4655__auto__)){
var f = temp__4655__auto__;
return (f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));
} else {
return next.state;
}
})();
var diff_QMARK_ = cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new$,old);
if(diff_QMARK_){
next.prev = new$;

cljs.core._notify_watches(next,old,new$);
} else {
}

var G__13369 = ((!(diff_QMARK_))?popq:cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (pri_map,popq,old,new$,diff_QMARK_,next,temp__4657__auto__){
return (function (p1__13367_SHARP_,p2__13368_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__13367_SHARP_,p2__13368_SHARP_,p2__13368_SHARP_.rank);
});})(pri_map,popq,old,new$,diff_QMARK_,next,temp__4657__auto__))
,popq,next.sinks));
pri_map = G__13369;
continue;
} else {
return null;
}
break;
}
});
javelin.core.deref_STAR_ = (function javelin$core$deref_STAR_(x){
if(cljs.core.truth_((javelin.core.cell_QMARK_.cljs$core$IFn$_invoke$arity$1 ? javelin.core.cell_QMARK_.cljs$core$IFn$_invoke$arity$1(x) : javelin.core.cell_QMARK_.call(null,x)))){
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(x) : cljs.core.deref.call(null,x));
} else {
return x;
}
});
javelin.core.next_rank = (function javelin$core$next_rank(){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(javelin.core.last_rank,cljs.core.inc);
});
javelin.core.cell__GT_pm = (function javelin$core$cell__GT_pm(c){
return tailrecursion.priority_map.priority_map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([c,c.rank], 0));
});
javelin.core.add_sync_BANG_ = (function javelin$core$add_sync_BANG_(c){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(javelin.core._STAR_tx_STAR_,cljs.core.assoc,c,c.rank);
});
javelin.core.safe_nth = (function javelin$core$safe_nth(c,i){
try{return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(c,i);
}catch (e13371){if((e13371 instanceof Error)){
var _ = e13371;
return null;
} else {
throw e13371;

}
}});
javelin.core.propagate_BANG_ = (function javelin$core$propagate_BANG_(c){
if(cljs.core.truth_(javelin.core._STAR_tx_STAR_)){
var G__13374 = c;
javelin.core.add_sync_BANG_(G__13374);

return G__13374;
} else {
var G__13375 = c;
javelin.core.propagate_STAR_(javelin.core.cell__GT_pm(G__13375));

return G__13375;
}
});
javelin.core.destroy_cell_BANG_ = (function javelin$core$destroy_cell_BANG_(var_args){
var args__7988__auto__ = [];
var len__7981__auto___13386 = arguments.length;
var i__7982__auto___13387 = (0);
while(true){
if((i__7982__auto___13387 < len__7981__auto___13386)){
args__7988__auto__.push((arguments[i__7982__auto___13387]));

var G__13388 = (i__7982__auto___13387 + (1));
i__7982__auto___13387 = G__13388;
continue;
} else {
}
break;
}

var argseq__7989__auto__ = ((((1) < args__7988__auto__.length))?(new cljs.core.IndexedSeq(args__7988__auto__.slice((1)),(0),null)):null);
return javelin.core.destroy_cell_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7989__auto__);
});

javelin.core.destroy_cell_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (this$,p__13378){
var vec__13379 = p__13378;
var keep_watches_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13379,(0),null);
var srcs = this$.sources;
this$.sources = cljs.core.PersistentVector.EMPTY;

this$.update = null;

this$.thunk = null;

if(cljs.core.truth_(keep_watches_QMARK_)){
} else {
this$.watches = cljs.core.PersistentArrayMap.EMPTY;
}

var seq__13382 = cljs.core.seq(srcs);
var chunk__13383 = null;
var count__13384 = (0);
var i__13385 = (0);
while(true){
if((i__13385 < count__13384)){
var src = chunk__13383.cljs$core$IIndexed$_nth$arity$2(null,i__13385);
if(cljs.core.truth_((javelin.core.cell_QMARK_.cljs$core$IFn$_invoke$arity$1 ? javelin.core.cell_QMARK_.cljs$core$IFn$_invoke$arity$1(src) : javelin.core.cell_QMARK_.call(null,src)))){
src.sinks = cljs.core.disj.cljs$core$IFn$_invoke$arity$2(src.sinks,this$);
} else {
}

var G__13389 = seq__13382;
var G__13390 = chunk__13383;
var G__13391 = count__13384;
var G__13392 = (i__13385 + (1));
seq__13382 = G__13389;
chunk__13383 = G__13390;
count__13384 = G__13391;
i__13385 = G__13392;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq(seq__13382);
if(temp__4657__auto__){
var seq__13382__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__13382__$1)){
var c__7687__auto__ = cljs.core.chunk_first(seq__13382__$1);
var G__13393 = cljs.core.chunk_rest(seq__13382__$1);
var G__13394 = c__7687__auto__;
var G__13395 = cljs.core.count(c__7687__auto__);
var G__13396 = (0);
seq__13382 = G__13393;
chunk__13383 = G__13394;
count__13384 = G__13395;
i__13385 = G__13396;
continue;
} else {
var src = cljs.core.first(seq__13382__$1);
if(cljs.core.truth_((javelin.core.cell_QMARK_.cljs$core$IFn$_invoke$arity$1 ? javelin.core.cell_QMARK_.cljs$core$IFn$_invoke$arity$1(src) : javelin.core.cell_QMARK_.call(null,src)))){
src.sinks = cljs.core.disj.cljs$core$IFn$_invoke$arity$2(src.sinks,this$);
} else {
}

var G__13397 = cljs.core.next(seq__13382__$1);
var G__13398 = null;
var G__13399 = (0);
var G__13400 = (0);
seq__13382 = G__13397;
chunk__13383 = G__13398;
count__13384 = G__13399;
i__13385 = G__13400;
continue;
}
} else {
return null;
}
}
break;
}
});

javelin.core.destroy_cell_BANG_.cljs$lang$maxFixedArity = (1);

javelin.core.destroy_cell_BANG_.cljs$lang$applyTo = (function (seq13376){
var G__13377 = cljs.core.first(seq13376);
var seq13376__$1 = cljs.core.next(seq13376);
return javelin.core.destroy_cell_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__13377,seq13376__$1);
});

javelin.core.set_formula_BANG_ = (function javelin$core$set_formula_BANG_(var_args){
var args__7988__auto__ = [];
var len__7981__auto___13421 = arguments.length;
var i__7982__auto___13422 = (0);
while(true){
if((i__7982__auto___13422 < len__7981__auto___13421)){
args__7988__auto__.push((arguments[i__7982__auto___13422]));

var G__13423 = (i__7982__auto___13422 + (1));
i__7982__auto___13422 = G__13423;
continue;
} else {
}
break;
}

var argseq__7989__auto__ = ((((1) < args__7988__auto__.length))?(new cljs.core.IndexedSeq(args__7988__auto__.slice((1)),(0),null)):null);
return javelin.core.set_formula_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7989__auto__);
});

javelin.core.set_formula_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (this$,p__13405){
var vec__13406 = p__13405;
var f = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13406,(0),null);
var sources = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13406,(1),null);
javelin.core.destroy_cell_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.array_seq([true], 0));

if(cljs.core.truth_(f)){
this$.sources = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.vec(sources),f);

var seq__13409_13424 = cljs.core.seq(this$.sources);
var chunk__13410_13425 = null;
var count__13411_13426 = (0);
var i__13412_13427 = (0);
while(true){
if((i__13412_13427 < count__13411_13426)){
var source_13428 = chunk__13410_13425.cljs$core$IIndexed$_nth$arity$2(null,i__13412_13427);
if(cljs.core.truth_((javelin.core.cell_QMARK_.cljs$core$IFn$_invoke$arity$1 ? javelin.core.cell_QMARK_.cljs$core$IFn$_invoke$arity$1(source_13428) : javelin.core.cell_QMARK_.call(null,source_13428)))){
source_13428.sinks = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(source_13428.sinks,this$);

if((source_13428.rank > this$.rank)){
var seq__13413_13429 = cljs.core.seq(javelin.core.bf_seq(cljs.core.identity,((function (seq__13409_13424,chunk__13410_13425,count__13411_13426,i__13412_13427,source_13428,vec__13406,f,sources){
return (function (p1__13401_SHARP_){
return p1__13401_SHARP_.sinks;
});})(seq__13409_13424,chunk__13410_13425,count__13411_13426,i__13412_13427,source_13428,vec__13406,f,sources))
,source_13428));
var chunk__13414_13430 = null;
var count__13415_13431 = (0);
var i__13416_13432 = (0);
while(true){
if((i__13416_13432 < count__13415_13431)){
var dep_13433 = chunk__13414_13430.cljs$core$IIndexed$_nth$arity$2(null,i__13416_13432);
dep_13433.rank = javelin.core.next_rank();

var G__13434 = seq__13413_13429;
var G__13435 = chunk__13414_13430;
var G__13436 = count__13415_13431;
var G__13437 = (i__13416_13432 + (1));
seq__13413_13429 = G__13434;
chunk__13414_13430 = G__13435;
count__13415_13431 = G__13436;
i__13416_13432 = G__13437;
continue;
} else {
var temp__4657__auto___13438 = cljs.core.seq(seq__13413_13429);
if(temp__4657__auto___13438){
var seq__13413_13439__$1 = temp__4657__auto___13438;
if(cljs.core.chunked_seq_QMARK_(seq__13413_13439__$1)){
var c__7687__auto___13440 = cljs.core.chunk_first(seq__13413_13439__$1);
var G__13441 = cljs.core.chunk_rest(seq__13413_13439__$1);
var G__13442 = c__7687__auto___13440;
var G__13443 = cljs.core.count(c__7687__auto___13440);
var G__13444 = (0);
seq__13413_13429 = G__13441;
chunk__13414_13430 = G__13442;
count__13415_13431 = G__13443;
i__13416_13432 = G__13444;
continue;
} else {
var dep_13445 = cljs.core.first(seq__13413_13439__$1);
dep_13445.rank = javelin.core.next_rank();

var G__13446 = cljs.core.next(seq__13413_13439__$1);
var G__13447 = null;
var G__13448 = (0);
var G__13449 = (0);
seq__13413_13429 = G__13446;
chunk__13414_13430 = G__13447;
count__13415_13431 = G__13448;
i__13416_13432 = G__13449;
continue;
}
} else {
}
}
break;
}
} else {
}
} else {
}

var G__13450 = seq__13409_13424;
var G__13451 = chunk__13410_13425;
var G__13452 = count__13411_13426;
var G__13453 = (i__13412_13427 + (1));
seq__13409_13424 = G__13450;
chunk__13410_13425 = G__13451;
count__13411_13426 = G__13452;
i__13412_13427 = G__13453;
continue;
} else {
var temp__4657__auto___13454 = cljs.core.seq(seq__13409_13424);
if(temp__4657__auto___13454){
var seq__13409_13455__$1 = temp__4657__auto___13454;
if(cljs.core.chunked_seq_QMARK_(seq__13409_13455__$1)){
var c__7687__auto___13456 = cljs.core.chunk_first(seq__13409_13455__$1);
var G__13457 = cljs.core.chunk_rest(seq__13409_13455__$1);
var G__13458 = c__7687__auto___13456;
var G__13459 = cljs.core.count(c__7687__auto___13456);
var G__13460 = (0);
seq__13409_13424 = G__13457;
chunk__13410_13425 = G__13458;
count__13411_13426 = G__13459;
i__13412_13427 = G__13460;
continue;
} else {
var source_13461 = cljs.core.first(seq__13409_13455__$1);
if(cljs.core.truth_((javelin.core.cell_QMARK_.cljs$core$IFn$_invoke$arity$1 ? javelin.core.cell_QMARK_.cljs$core$IFn$_invoke$arity$1(source_13461) : javelin.core.cell_QMARK_.call(null,source_13461)))){
source_13461.sinks = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(source_13461.sinks,this$);

if((source_13461.rank > this$.rank)){
var seq__13417_13462 = cljs.core.seq(javelin.core.bf_seq(cljs.core.identity,((function (seq__13409_13424,chunk__13410_13425,count__13411_13426,i__13412_13427,source_13461,seq__13409_13455__$1,temp__4657__auto___13454,vec__13406,f,sources){
return (function (p1__13401_SHARP_){
return p1__13401_SHARP_.sinks;
});})(seq__13409_13424,chunk__13410_13425,count__13411_13426,i__13412_13427,source_13461,seq__13409_13455__$1,temp__4657__auto___13454,vec__13406,f,sources))
,source_13461));
var chunk__13418_13463 = null;
var count__13419_13464 = (0);
var i__13420_13465 = (0);
while(true){
if((i__13420_13465 < count__13419_13464)){
var dep_13466 = chunk__13418_13463.cljs$core$IIndexed$_nth$arity$2(null,i__13420_13465);
dep_13466.rank = javelin.core.next_rank();

var G__13467 = seq__13417_13462;
var G__13468 = chunk__13418_13463;
var G__13469 = count__13419_13464;
var G__13470 = (i__13420_13465 + (1));
seq__13417_13462 = G__13467;
chunk__13418_13463 = G__13468;
count__13419_13464 = G__13469;
i__13420_13465 = G__13470;
continue;
} else {
var temp__4657__auto___13471__$1 = cljs.core.seq(seq__13417_13462);
if(temp__4657__auto___13471__$1){
var seq__13417_13472__$1 = temp__4657__auto___13471__$1;
if(cljs.core.chunked_seq_QMARK_(seq__13417_13472__$1)){
var c__7687__auto___13473 = cljs.core.chunk_first(seq__13417_13472__$1);
var G__13474 = cljs.core.chunk_rest(seq__13417_13472__$1);
var G__13475 = c__7687__auto___13473;
var G__13476 = cljs.core.count(c__7687__auto___13473);
var G__13477 = (0);
seq__13417_13462 = G__13474;
chunk__13418_13463 = G__13475;
count__13419_13464 = G__13476;
i__13420_13465 = G__13477;
continue;
} else {
var dep_13478 = cljs.core.first(seq__13417_13472__$1);
dep_13478.rank = javelin.core.next_rank();

var G__13479 = cljs.core.next(seq__13417_13472__$1);
var G__13480 = null;
var G__13481 = (0);
var G__13482 = (0);
seq__13417_13462 = G__13479;
chunk__13418_13463 = G__13480;
count__13419_13464 = G__13481;
i__13420_13465 = G__13482;
continue;
}
} else {
}
}
break;
}
} else {
}
} else {
}

var G__13483 = cljs.core.next(seq__13409_13455__$1);
var G__13484 = null;
var G__13485 = (0);
var G__13486 = (0);
seq__13409_13424 = G__13483;
chunk__13410_13425 = G__13484;
count__13411_13426 = G__13485;
i__13412_13427 = G__13486;
continue;
}
} else {
}
}
break;
}

var compute_13487 = ((function (vec__13406,f,sources){
return (function (p1__13402_SHARP_){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(javelin.core.deref_STAR_(cljs.core.peek(p1__13402_SHARP_)),cljs.core.map.cljs$core$IFn$_invoke$arity$2(javelin.core.deref_STAR_,cljs.core.pop(p1__13402_SHARP_)));
});})(vec__13406,f,sources))
;
this$.thunk = ((function (compute_13487,vec__13406,f,sources){
return (function (){
return this$.state = compute_13487(this$.sources);
});})(compute_13487,vec__13406,f,sources))
;
} else {
}

return javelin.core.propagate_BANG_(this$);
});

javelin.core.set_formula_BANG_.cljs$lang$maxFixedArity = (1);

javelin.core.set_formula_BANG_.cljs$lang$applyTo = (function (seq13403){
var G__13404 = cljs.core.first(seq13403);
var seq13403__$1 = cljs.core.next(seq13403);
return javelin.core.set_formula_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__13404,seq13403__$1);
});


/**
* @constructor
 * @implements {cljs.core.IWatchable}
 * @implements {cljs.core.IReset}
 * @implements {cljs.core.ISwap}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IDeref}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IWithMeta}
*/
javelin.core.Cell = (function (meta,state,rank,prev,sources,sinks,thunk,watches,update){
this.meta = meta;
this.state = state;
this.rank = rank;
this.prev = prev;
this.sources = sources;
this.sinks = sinks;
this.thunk = thunk;
this.watches = watches;
this.update = update;
this.cljs$lang$protocol_mask$partition0$ = 2147909632;
this.cljs$lang$protocol_mask$partition1$ = 98306;
})
javelin.core.Cell.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this$,w,_){
var self__ = this;
var this$__$1 = this;
return cljs.core.write_all.cljs$core$IFn$_invoke$arity$variadic(w,cljs.core.array_seq(["#<Cell: ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([self__.state], 0)),">"], 0));
});

javelin.core.Cell.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this$,meta__$1){
var self__ = this;
var this$__$1 = this;
return (new javelin.core.Cell(meta__$1,self__.state,self__.rank,self__.prev,self__.sources,self__.sinks,self__.thunk,self__.watches,self__.update));
});

javelin.core.Cell.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.meta;
});

javelin.core.Cell.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return this$__$1.state;
});

javelin.core.Cell.prototype.cljs$core$IReset$_reset_BANG_$arity$2 = (function (this$,x){
var self__ = this;
var this$__$1 = this;
if(cljs.core.truth_((javelin.core.lens_QMARK_.cljs$core$IFn$_invoke$arity$1 ? javelin.core.lens_QMARK_.cljs$core$IFn$_invoke$arity$1(this$__$1) : javelin.core.lens_QMARK_.call(null,this$__$1)))){
this$__$1.update.call(null,x);
} else {
if(cljs.core.truth_((javelin.core.input_QMARK_.cljs$core$IFn$_invoke$arity$1 ? javelin.core.input_QMARK_.cljs$core$IFn$_invoke$arity$1(this$__$1) : javelin.core.input_QMARK_.call(null,this$__$1)))){
this$__$1.state = x;

javelin.core.propagate_BANG_(this$__$1);
} else {
throw (new Error("can't swap! or reset! formula cell"));

}
}

return this$__$1.state;
});

javelin.core.Cell.prototype.cljs$core$ISwap$_swap_BANG_$arity$2 = (function (this$,f){
var self__ = this;
var this$__$1 = this;
var G__13488 = this$__$1;
var G__13489 = (function (){var G__13490 = this$__$1.state;
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__13490) : f.call(null,G__13490));
})();
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__13488,G__13489) : cljs.core.reset_BANG_.call(null,G__13488,G__13489));
});

javelin.core.Cell.prototype.cljs$core$ISwap$_swap_BANG_$arity$3 = (function (this$,f,a){
var self__ = this;
var this$__$1 = this;
var G__13491 = this$__$1;
var G__13492 = (function (){var G__13493 = this$__$1.state;
var G__13494 = a;
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__13493,G__13494) : f.call(null,G__13493,G__13494));
})();
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__13491,G__13492) : cljs.core.reset_BANG_.call(null,G__13491,G__13492));
});

javelin.core.Cell.prototype.cljs$core$ISwap$_swap_BANG_$arity$4 = (function (this$,f,a,b){
var self__ = this;
var this$__$1 = this;
var G__13495 = this$__$1;
var G__13496 = (function (){var G__13497 = this$__$1.state;
var G__13498 = a;
var G__13499 = b;
return (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(G__13497,G__13498,G__13499) : f.call(null,G__13497,G__13498,G__13499));
})();
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__13495,G__13496) : cljs.core.reset_BANG_.call(null,G__13495,G__13496));
});

javelin.core.Cell.prototype.cljs$core$ISwap$_swap_BANG_$arity$5 = (function (this$,f,a,b,xs){
var self__ = this;
var this$__$1 = this;
var G__13500 = this$__$1;
var G__13501 = cljs.core.apply.cljs$core$IFn$_invoke$arity$5(f,this$__$1.state,a,b,xs);
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__13500,G__13501) : cljs.core.reset_BANG_.call(null,G__13500,G__13501));
});

javelin.core.Cell.prototype.cljs$core$IWatchable$_notify_watches$arity$3 = (function (this$,o,n){
var self__ = this;
var this$__$1 = this;
var seq__13502 = cljs.core.seq(self__.watches);
var chunk__13503 = null;
var count__13504 = (0);
var i__13505 = (0);
while(true){
if((i__13505 < count__13504)){
var vec__13506 = chunk__13503.cljs$core$IIndexed$_nth$arity$2(null,i__13505);
var key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13506,(0),null);
var f = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13506,(1),null);
(f.cljs$core$IFn$_invoke$arity$4 ? f.cljs$core$IFn$_invoke$arity$4(key,this$__$1,o,n) : f.call(null,key,this$__$1,o,n));

var G__13512 = seq__13502;
var G__13513 = chunk__13503;
var G__13514 = count__13504;
var G__13515 = (i__13505 + (1));
seq__13502 = G__13512;
chunk__13503 = G__13513;
count__13504 = G__13514;
i__13505 = G__13515;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq(seq__13502);
if(temp__4657__auto__){
var seq__13502__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__13502__$1)){
var c__7687__auto__ = cljs.core.chunk_first(seq__13502__$1);
var G__13516 = cljs.core.chunk_rest(seq__13502__$1);
var G__13517 = c__7687__auto__;
var G__13518 = cljs.core.count(c__7687__auto__);
var G__13519 = (0);
seq__13502 = G__13516;
chunk__13503 = G__13517;
count__13504 = G__13518;
i__13505 = G__13519;
continue;
} else {
var vec__13509 = cljs.core.first(seq__13502__$1);
var key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13509,(0),null);
var f = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13509,(1),null);
(f.cljs$core$IFn$_invoke$arity$4 ? f.cljs$core$IFn$_invoke$arity$4(key,this$__$1,o,n) : f.call(null,key,this$__$1,o,n));

var G__13520 = cljs.core.next(seq__13502__$1);
var G__13521 = null;
var G__13522 = (0);
var G__13523 = (0);
seq__13502 = G__13520;
chunk__13503 = G__13521;
count__13504 = G__13522;
i__13505 = G__13523;
continue;
}
} else {
return null;
}
}
break;
}
});

javelin.core.Cell.prototype.cljs$core$IWatchable$_add_watch$arity$3 = (function (this$,k,f){
var self__ = this;
var this$__$1 = this;
return this$__$1.watches = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.watches,k,f);
});

javelin.core.Cell.prototype.cljs$core$IWatchable$_remove_watch$arity$2 = (function (this$,k){
var self__ = this;
var this$__$1 = this;
return this$__$1.watches = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.watches,k);
});

javelin.core.Cell.getBasis = (function (){
return new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$meta,cljs.core.cst$sym$state,cljs.core.cst$sym$rank,cljs.core.cst$sym$prev,cljs.core.cst$sym$sources,cljs.core.cst$sym$sinks,cljs.core.cst$sym$thunk,cljs.core.cst$sym$watches,cljs.core.cst$sym$update], null);
});

javelin.core.Cell.cljs$lang$type = true;

javelin.core.Cell.cljs$lang$ctorStr = "javelin.core/Cell";

javelin.core.Cell.cljs$lang$ctorPrWriter = (function (this__7479__auto__,writer__7480__auto__,opt__7481__auto__){
return cljs.core._write(writer__7480__auto__,"javelin.core/Cell");
});

javelin.core.__GT_Cell = (function javelin$core$__GT_Cell(meta,state,rank,prev,sources,sinks,thunk,watches,update){
return (new javelin.core.Cell(meta,state,rank,prev,sources,sinks,thunk,watches,update));
});

javelin.core.cell_QMARK_ = (function javelin$core$cell_QMARK_(c){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.type(c),javelin.core.Cell)){
return c;
} else {
return null;
}
});
javelin.core.formula_QMARK_ = (function javelin$core$formula_QMARK_(c){
if(cljs.core.truth_((function (){var and__6861__auto__ = javelin.core.cell_QMARK_(c);
if(cljs.core.truth_(and__6861__auto__)){
return c.thunk;
} else {
return and__6861__auto__;
}
})())){
return c;
} else {
return null;
}
});
javelin.core.lens_QMARK_ = (function javelin$core$lens_QMARK_(c){
if(cljs.core.truth_((function (){var and__6861__auto__ = javelin.core.cell_QMARK_(c);
if(cljs.core.truth_(and__6861__auto__)){
return c.update;
} else {
return and__6861__auto__;
}
})())){
return c;
} else {
return null;
}
});
javelin.core.input_QMARK_ = (function javelin$core$input_QMARK_(c){
if(cljs.core.truth_((function (){var and__6861__auto__ = javelin.core.cell_QMARK_(c);
if(cljs.core.truth_(and__6861__auto__)){
return cljs.core.not(javelin.core.formula_QMARK_(c));
} else {
return and__6861__auto__;
}
})())){
return c;
} else {
return null;
}
});
javelin.core.set_cell_BANG_ = (function javelin$core$set_cell_BANG_(c,x){
c.state = x;

return javelin.core.set_formula_BANG_(c);
});
javelin.core.formula = (function javelin$core$formula(f){
return (function() { 
var G__13526__delegate = function (sources){
return javelin.core.set_formula_BANG_.cljs$core$IFn$_invoke$arity$variadic((function (){var G__13525 = cljs.core.cst$kw$javelin$core_SLASH_none;
return (javelin.core.cell.cljs$core$IFn$_invoke$arity$1 ? javelin.core.cell.cljs$core$IFn$_invoke$arity$1(G__13525) : javelin.core.cell.call(null,G__13525));
})(),cljs.core.array_seq([f,sources], 0));
};
var G__13526 = function (var_args){
var sources = null;
if (arguments.length > 0) {
var G__13527__i = 0, G__13527__a = new Array(arguments.length -  0);
while (G__13527__i < G__13527__a.length) {G__13527__a[G__13527__i] = arguments[G__13527__i + 0]; ++G__13527__i;}
  sources = new cljs.core.IndexedSeq(G__13527__a,0);
} 
return G__13526__delegate.call(this,sources);};
G__13526.cljs$lang$maxFixedArity = 0;
G__13526.cljs$lang$applyTo = (function (arglist__13528){
var sources = cljs.core.seq(arglist__13528);
return G__13526__delegate(sources);
});
G__13526.cljs$core$IFn$_invoke$arity$variadic = G__13526__delegate;
return G__13526;
})()
;
});
javelin.core.lens = (function javelin$core$lens(c,f){
var c__$1 = javelin.core.formula(cljs.core.identity).call(null,c);
c__$1.update = f;

return c__$1;
});
javelin.core.cell = (function javelin$core$cell(var_args){
var args13529 = [];
var len__7981__auto___13537 = arguments.length;
var i__7982__auto___13538 = (0);
while(true){
if((i__7982__auto___13538 < len__7981__auto___13537)){
args13529.push((arguments[i__7982__auto___13538]));

var G__13539 = (i__7982__auto___13538 + (1));
i__7982__auto___13538 = G__13539;
continue;
} else {
}
break;
}

var G__13533 = args13529.length;
switch (G__13533) {
case 1:
return javelin.core.cell.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
var argseq__8000__auto__ = (new cljs.core.IndexedSeq(args13529.slice((1)),(0),null));
return javelin.core.cell.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__8000__auto__);

}
});

javelin.core.cell.cljs$core$IFn$_invoke$arity$1 = (function (x){
return javelin.core.set_formula_BANG_((new javelin.core.Cell(null,x,javelin.core.next_rank(),x,cljs.core.PersistentVector.EMPTY,cljs.core.PersistentHashSet.EMPTY,null,cljs.core.PersistentArrayMap.EMPTY,null)));
});

javelin.core.cell.cljs$core$IFn$_invoke$arity$variadic = (function (x,p__13534){
var map__13535 = p__13534;
var map__13535__$1 = ((((!((map__13535 == null)))?((((map__13535.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13535.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13535):map__13535);
var meta = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13535__$1,cljs.core.cst$kw$meta);
return javelin.core.set_formula_BANG_((new javelin.core.Cell(meta,x,javelin.core.next_rank(),x,cljs.core.PersistentVector.EMPTY,cljs.core.PersistentHashSet.EMPTY,null,cljs.core.PersistentArrayMap.EMPTY,null)));
});

javelin.core.cell.cljs$lang$applyTo = (function (seq13530){
var G__13531 = cljs.core.first(seq13530);
var seq13530__$1 = cljs.core.next(seq13530);
return javelin.core.cell.cljs$core$IFn$_invoke$arity$variadic(G__13531,seq13530__$1);
});

javelin.core.cell.cljs$lang$maxFixedArity = (1);

javelin.core.lift = javelin.core.formula;
javelin.core.dosync_STAR_ = (function javelin$core$dosync_STAR_(thunk){
var bind = (function (p1__13541_SHARP_){
var _STAR_tx_STAR_13545 = javelin.core._STAR_tx_STAR_;
javelin.core._STAR_tx_STAR_ = (function (){var G__13546 = tailrecursion.priority_map.priority_map();
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__13546) : cljs.core.atom.call(null,G__13546));
})();

try{return (p1__13541_SHARP_.cljs$core$IFn$_invoke$arity$0 ? p1__13541_SHARP_.cljs$core$IFn$_invoke$arity$0() : p1__13541_SHARP_.call(null));
}finally {javelin.core._STAR_tx_STAR_ = _STAR_tx_STAR_13545;
}});
var prop = ((function (bind){
return (function (){
var tx = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(javelin.core._STAR_tx_STAR_) : cljs.core.deref.call(null,javelin.core._STAR_tx_STAR_));
var _STAR_tx_STAR_13547 = javelin.core._STAR_tx_STAR_;
javelin.core._STAR_tx_STAR_ = null;

try{return javelin.core.propagate_STAR_(tx);
}finally {javelin.core._STAR_tx_STAR_ = _STAR_tx_STAR_13547;
}});})(bind))
;
if(cljs.core.truth_(javelin.core._STAR_tx_STAR_)){
return (thunk.cljs$core$IFn$_invoke$arity$0 ? thunk.cljs$core$IFn$_invoke$arity$0() : thunk.call(null));
} else {
return bind(((function (bind,prop){
return (function (){
(thunk.cljs$core$IFn$_invoke$arity$0 ? thunk.cljs$core$IFn$_invoke$arity$0() : thunk.call(null));

return prop();
});})(bind,prop))
);
}
});
javelin.core.alts_BANG_ = (function javelin$core$alts_BANG_(var_args){
var args__7988__auto__ = [];
var len__7981__auto___13555 = arguments.length;
var i__7982__auto___13556 = (0);
while(true){
if((i__7982__auto___13556 < len__7981__auto___13555)){
args__7988__auto__.push((arguments[i__7982__auto___13556]));

var G__13557 = (i__7982__auto___13556 + (1));
i__7982__auto___13556 = G__13557;
continue;
} else {
}
break;
}

var argseq__7989__auto__ = ((((0) < args__7988__auto__.length))?(new cljs.core.IndexedSeq(args__7988__auto__.slice((0)),(0),null)):null);
return javelin.core.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(argseq__7989__auto__);
});

javelin.core.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (cells){
var olds = (function (){var G__13554 = cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(cljs.core.count(cells),cljs.core.cst$kw$javelin$core_SLASH_none);
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__13554) : cljs.core.atom.call(null,G__13554));
})();
var tag_neq = ((function (olds){
return (function (p1__13548_SHARP_,p2__13549_SHARP_){
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(p1__13548_SHARP_,p2__13549_SHARP_),p2__13549_SHARP_],null));
});})(olds))
;
var diff = ((function (olds,tag_neq){
return (function (p1__13551_SHARP_,p2__13550_SHARP_){
return cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.second,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.first,cljs.core.map.cljs$core$IFn$_invoke$arity$3(tag_neq,p1__13551_SHARP_,p2__13550_SHARP_))));
});})(olds,tag_neq))
;
var proc = ((function (olds,tag_neq,diff){
return (function() { 
var G__13558__delegate = function (rest__13552_SHARP_){
var news = diff((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(olds) : cljs.core.deref.call(null,olds)),rest__13552_SHARP_);
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(olds,rest__13552_SHARP_) : cljs.core.reset_BANG_.call(null,olds,rest__13552_SHARP_));

return news;
};
var G__13558 = function (var_args){
var rest__13552_SHARP_ = null;
if (arguments.length > 0) {
var G__13559__i = 0, G__13559__a = new Array(arguments.length -  0);
while (G__13559__i < G__13559__a.length) {G__13559__a[G__13559__i] = arguments[G__13559__i + 0]; ++G__13559__i;}
  rest__13552_SHARP_ = new cljs.core.IndexedSeq(G__13559__a,0);
} 
return G__13558__delegate.call(this,rest__13552_SHARP_);};
G__13558.cljs$lang$maxFixedArity = 0;
G__13558.cljs$lang$applyTo = (function (arglist__13560){
var rest__13552_SHARP_ = cljs.core.seq(arglist__13560);
return G__13558__delegate(rest__13552_SHARP_);
});
G__13558.cljs$core$IFn$_invoke$arity$variadic = G__13558__delegate;
return G__13558;
})()
;})(olds,tag_neq,diff))
;
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(javelin.core.formula(proc),cells);
});

javelin.core.alts_BANG_.cljs$lang$maxFixedArity = (0);

javelin.core.alts_BANG_.cljs$lang$applyTo = (function (seq13553){
return javelin.core.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq13553));
});

javelin.core.cell_map = (function javelin$core$cell_map(f,c){
var cseq = javelin.core.formula(cljs.core.seq).call(null,c);
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (cseq){
return (function (p1__13561_SHARP_){
return javelin.core.formula(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(f,javelin.core.safe_nth)).call(null,cseq,p1__13561_SHARP_);
});})(cseq))
,cljs.core.range.cljs$core$IFn$_invoke$arity$2((0),cljs.core.count((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cseq) : cljs.core.deref.call(null,cseq)))));
});
javelin.core.cell_doseq_STAR_ = (function javelin$core$cell_doseq_STAR_(items_seq,f){
var pool_size = javelin.core.cell.cljs$core$IFn$_invoke$arity$1((0));
var cur_count = javelin.core.formula(cljs.core.count).call(null,items_seq);
var ith_item = ((function (pool_size,cur_count){
return (function (p1__13562_SHARP_){
return javelin.core.formula(javelin.core.safe_nth).call(null,items_seq,p1__13562_SHARP_);
});})(pool_size,cur_count))
;
return javelin.core.formula(((function (pool_size,cur_count,ith_item){
return (function (pool_size__$1,cur_count__$1,f__$1,ith_item__$1,reset_pool_size_BANG_){
if((pool_size__$1 < cur_count__$1)){
var seq__13569_13575 = cljs.core.seq(cljs.core.range.cljs$core$IFn$_invoke$arity$2(pool_size__$1,cur_count__$1));
var chunk__13570_13576 = null;
var count__13571_13577 = (0);
var i__13572_13578 = (0);
while(true){
if((i__13572_13578 < count__13571_13577)){
var i_13579 = chunk__13570_13576.cljs$core$IIndexed$_nth$arity$2(null,i__13572_13578);
var G__13573_13580 = (ith_item__$1.cljs$core$IFn$_invoke$arity$1 ? ith_item__$1.cljs$core$IFn$_invoke$arity$1(i_13579) : ith_item__$1.call(null,i_13579));
(f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(G__13573_13580) : f__$1.call(null,G__13573_13580));

var G__13581 = seq__13569_13575;
var G__13582 = chunk__13570_13576;
var G__13583 = count__13571_13577;
var G__13584 = (i__13572_13578 + (1));
seq__13569_13575 = G__13581;
chunk__13570_13576 = G__13582;
count__13571_13577 = G__13583;
i__13572_13578 = G__13584;
continue;
} else {
var temp__4657__auto___13585 = cljs.core.seq(seq__13569_13575);
if(temp__4657__auto___13585){
var seq__13569_13586__$1 = temp__4657__auto___13585;
if(cljs.core.chunked_seq_QMARK_(seq__13569_13586__$1)){
var c__7687__auto___13587 = cljs.core.chunk_first(seq__13569_13586__$1);
var G__13588 = cljs.core.chunk_rest(seq__13569_13586__$1);
var G__13589 = c__7687__auto___13587;
var G__13590 = cljs.core.count(c__7687__auto___13587);
var G__13591 = (0);
seq__13569_13575 = G__13588;
chunk__13570_13576 = G__13589;
count__13571_13577 = G__13590;
i__13572_13578 = G__13591;
continue;
} else {
var i_13592 = cljs.core.first(seq__13569_13586__$1);
var G__13574_13593 = (ith_item__$1.cljs$core$IFn$_invoke$arity$1 ? ith_item__$1.cljs$core$IFn$_invoke$arity$1(i_13592) : ith_item__$1.call(null,i_13592));
(f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(G__13574_13593) : f__$1.call(null,G__13574_13593));

var G__13594 = cljs.core.next(seq__13569_13586__$1);
var G__13595 = null;
var G__13596 = (0);
var G__13597 = (0);
seq__13569_13575 = G__13594;
chunk__13570_13576 = G__13595;
count__13571_13577 = G__13596;
i__13572_13578 = G__13597;
continue;
}
} else {
}
}
break;
}

return (reset_pool_size_BANG_.cljs$core$IFn$_invoke$arity$1 ? reset_pool_size_BANG_.cljs$core$IFn$_invoke$arity$1(cur_count__$1) : reset_pool_size_BANG_.call(null,cur_count__$1));
} else {
return null;
}
});})(pool_size,cur_count,ith_item))
).call(null,pool_size,cur_count,f,ith_item,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.reset_BANG_,pool_size));
});
