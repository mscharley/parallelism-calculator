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

var G__13373 = ((!(diff_QMARK_))?popq:cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (pri_map,popq,old,new$,diff_QMARK_,next,temp__4657__auto__){
return (function (p1__13371_SHARP_,p2__13372_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__13371_SHARP_,p2__13372_SHARP_,p2__13372_SHARP_.rank);
});})(pri_map,popq,old,new$,diff_QMARK_,next,temp__4657__auto__))
,popq,next.sinks));
pri_map = G__13373;
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
}catch (e13375){if((e13375 instanceof Error)){
var _ = e13375;
return null;
} else {
throw e13375;

}
}});
javelin.core.propagate_BANG_ = (function javelin$core$propagate_BANG_(c){
if(cljs.core.truth_(javelin.core._STAR_tx_STAR_)){
var G__13378 = c;
javelin.core.add_sync_BANG_(G__13378);

return G__13378;
} else {
var G__13379 = c;
javelin.core.propagate_STAR_(javelin.core.cell__GT_pm(G__13379));

return G__13379;
}
});
javelin.core.destroy_cell_BANG_ = (function javelin$core$destroy_cell_BANG_(var_args){
var args__7988__auto__ = [];
var len__7981__auto___13390 = arguments.length;
var i__7982__auto___13391 = (0);
while(true){
if((i__7982__auto___13391 < len__7981__auto___13390)){
args__7988__auto__.push((arguments[i__7982__auto___13391]));

var G__13392 = (i__7982__auto___13391 + (1));
i__7982__auto___13391 = G__13392;
continue;
} else {
}
break;
}

var argseq__7989__auto__ = ((((1) < args__7988__auto__.length))?(new cljs.core.IndexedSeq(args__7988__auto__.slice((1)),(0),null)):null);
return javelin.core.destroy_cell_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7989__auto__);
});

javelin.core.destroy_cell_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (this$,p__13382){
var vec__13383 = p__13382;
var keep_watches_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13383,(0),null);
var srcs = this$.sources;
this$.sources = cljs.core.PersistentVector.EMPTY;

this$.update = null;

this$.thunk = null;

if(cljs.core.truth_(keep_watches_QMARK_)){
} else {
this$.watches = cljs.core.PersistentArrayMap.EMPTY;
}

var seq__13386 = cljs.core.seq(srcs);
var chunk__13387 = null;
var count__13388 = (0);
var i__13389 = (0);
while(true){
if((i__13389 < count__13388)){
var src = chunk__13387.cljs$core$IIndexed$_nth$arity$2(null,i__13389);
if(cljs.core.truth_((javelin.core.cell_QMARK_.cljs$core$IFn$_invoke$arity$1 ? javelin.core.cell_QMARK_.cljs$core$IFn$_invoke$arity$1(src) : javelin.core.cell_QMARK_.call(null,src)))){
src.sinks = cljs.core.disj.cljs$core$IFn$_invoke$arity$2(src.sinks,this$);
} else {
}

var G__13393 = seq__13386;
var G__13394 = chunk__13387;
var G__13395 = count__13388;
var G__13396 = (i__13389 + (1));
seq__13386 = G__13393;
chunk__13387 = G__13394;
count__13388 = G__13395;
i__13389 = G__13396;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq(seq__13386);
if(temp__4657__auto__){
var seq__13386__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__13386__$1)){
var c__7687__auto__ = cljs.core.chunk_first(seq__13386__$1);
var G__13397 = cljs.core.chunk_rest(seq__13386__$1);
var G__13398 = c__7687__auto__;
var G__13399 = cljs.core.count(c__7687__auto__);
var G__13400 = (0);
seq__13386 = G__13397;
chunk__13387 = G__13398;
count__13388 = G__13399;
i__13389 = G__13400;
continue;
} else {
var src = cljs.core.first(seq__13386__$1);
if(cljs.core.truth_((javelin.core.cell_QMARK_.cljs$core$IFn$_invoke$arity$1 ? javelin.core.cell_QMARK_.cljs$core$IFn$_invoke$arity$1(src) : javelin.core.cell_QMARK_.call(null,src)))){
src.sinks = cljs.core.disj.cljs$core$IFn$_invoke$arity$2(src.sinks,this$);
} else {
}

var G__13401 = cljs.core.next(seq__13386__$1);
var G__13402 = null;
var G__13403 = (0);
var G__13404 = (0);
seq__13386 = G__13401;
chunk__13387 = G__13402;
count__13388 = G__13403;
i__13389 = G__13404;
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

javelin.core.destroy_cell_BANG_.cljs$lang$applyTo = (function (seq13380){
var G__13381 = cljs.core.first(seq13380);
var seq13380__$1 = cljs.core.next(seq13380);
return javelin.core.destroy_cell_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__13381,seq13380__$1);
});

javelin.core.set_formula_BANG_ = (function javelin$core$set_formula_BANG_(var_args){
var args__7988__auto__ = [];
var len__7981__auto___13425 = arguments.length;
var i__7982__auto___13426 = (0);
while(true){
if((i__7982__auto___13426 < len__7981__auto___13425)){
args__7988__auto__.push((arguments[i__7982__auto___13426]));

var G__13427 = (i__7982__auto___13426 + (1));
i__7982__auto___13426 = G__13427;
continue;
} else {
}
break;
}

var argseq__7989__auto__ = ((((1) < args__7988__auto__.length))?(new cljs.core.IndexedSeq(args__7988__auto__.slice((1)),(0),null)):null);
return javelin.core.set_formula_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7989__auto__);
});

javelin.core.set_formula_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (this$,p__13409){
var vec__13410 = p__13409;
var f = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13410,(0),null);
var sources = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13410,(1),null);
javelin.core.destroy_cell_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.array_seq([true], 0));

if(cljs.core.truth_(f)){
this$.sources = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.vec(sources),f);

var seq__13413_13428 = cljs.core.seq(this$.sources);
var chunk__13414_13429 = null;
var count__13415_13430 = (0);
var i__13416_13431 = (0);
while(true){
if((i__13416_13431 < count__13415_13430)){
var source_13432 = chunk__13414_13429.cljs$core$IIndexed$_nth$arity$2(null,i__13416_13431);
if(cljs.core.truth_((javelin.core.cell_QMARK_.cljs$core$IFn$_invoke$arity$1 ? javelin.core.cell_QMARK_.cljs$core$IFn$_invoke$arity$1(source_13432) : javelin.core.cell_QMARK_.call(null,source_13432)))){
source_13432.sinks = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(source_13432.sinks,this$);

if((source_13432.rank > this$.rank)){
var seq__13417_13433 = cljs.core.seq(javelin.core.bf_seq(cljs.core.identity,((function (seq__13413_13428,chunk__13414_13429,count__13415_13430,i__13416_13431,source_13432,vec__13410,f,sources){
return (function (p1__13405_SHARP_){
return p1__13405_SHARP_.sinks;
});})(seq__13413_13428,chunk__13414_13429,count__13415_13430,i__13416_13431,source_13432,vec__13410,f,sources))
,source_13432));
var chunk__13418_13434 = null;
var count__13419_13435 = (0);
var i__13420_13436 = (0);
while(true){
if((i__13420_13436 < count__13419_13435)){
var dep_13437 = chunk__13418_13434.cljs$core$IIndexed$_nth$arity$2(null,i__13420_13436);
dep_13437.rank = javelin.core.next_rank();

var G__13438 = seq__13417_13433;
var G__13439 = chunk__13418_13434;
var G__13440 = count__13419_13435;
var G__13441 = (i__13420_13436 + (1));
seq__13417_13433 = G__13438;
chunk__13418_13434 = G__13439;
count__13419_13435 = G__13440;
i__13420_13436 = G__13441;
continue;
} else {
var temp__4657__auto___13442 = cljs.core.seq(seq__13417_13433);
if(temp__4657__auto___13442){
var seq__13417_13443__$1 = temp__4657__auto___13442;
if(cljs.core.chunked_seq_QMARK_(seq__13417_13443__$1)){
var c__7687__auto___13444 = cljs.core.chunk_first(seq__13417_13443__$1);
var G__13445 = cljs.core.chunk_rest(seq__13417_13443__$1);
var G__13446 = c__7687__auto___13444;
var G__13447 = cljs.core.count(c__7687__auto___13444);
var G__13448 = (0);
seq__13417_13433 = G__13445;
chunk__13418_13434 = G__13446;
count__13419_13435 = G__13447;
i__13420_13436 = G__13448;
continue;
} else {
var dep_13449 = cljs.core.first(seq__13417_13443__$1);
dep_13449.rank = javelin.core.next_rank();

var G__13450 = cljs.core.next(seq__13417_13443__$1);
var G__13451 = null;
var G__13452 = (0);
var G__13453 = (0);
seq__13417_13433 = G__13450;
chunk__13418_13434 = G__13451;
count__13419_13435 = G__13452;
i__13420_13436 = G__13453;
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

var G__13454 = seq__13413_13428;
var G__13455 = chunk__13414_13429;
var G__13456 = count__13415_13430;
var G__13457 = (i__13416_13431 + (1));
seq__13413_13428 = G__13454;
chunk__13414_13429 = G__13455;
count__13415_13430 = G__13456;
i__13416_13431 = G__13457;
continue;
} else {
var temp__4657__auto___13458 = cljs.core.seq(seq__13413_13428);
if(temp__4657__auto___13458){
var seq__13413_13459__$1 = temp__4657__auto___13458;
if(cljs.core.chunked_seq_QMARK_(seq__13413_13459__$1)){
var c__7687__auto___13460 = cljs.core.chunk_first(seq__13413_13459__$1);
var G__13461 = cljs.core.chunk_rest(seq__13413_13459__$1);
var G__13462 = c__7687__auto___13460;
var G__13463 = cljs.core.count(c__7687__auto___13460);
var G__13464 = (0);
seq__13413_13428 = G__13461;
chunk__13414_13429 = G__13462;
count__13415_13430 = G__13463;
i__13416_13431 = G__13464;
continue;
} else {
var source_13465 = cljs.core.first(seq__13413_13459__$1);
if(cljs.core.truth_((javelin.core.cell_QMARK_.cljs$core$IFn$_invoke$arity$1 ? javelin.core.cell_QMARK_.cljs$core$IFn$_invoke$arity$1(source_13465) : javelin.core.cell_QMARK_.call(null,source_13465)))){
source_13465.sinks = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(source_13465.sinks,this$);

if((source_13465.rank > this$.rank)){
var seq__13421_13466 = cljs.core.seq(javelin.core.bf_seq(cljs.core.identity,((function (seq__13413_13428,chunk__13414_13429,count__13415_13430,i__13416_13431,source_13465,seq__13413_13459__$1,temp__4657__auto___13458,vec__13410,f,sources){
return (function (p1__13405_SHARP_){
return p1__13405_SHARP_.sinks;
});})(seq__13413_13428,chunk__13414_13429,count__13415_13430,i__13416_13431,source_13465,seq__13413_13459__$1,temp__4657__auto___13458,vec__13410,f,sources))
,source_13465));
var chunk__13422_13467 = null;
var count__13423_13468 = (0);
var i__13424_13469 = (0);
while(true){
if((i__13424_13469 < count__13423_13468)){
var dep_13470 = chunk__13422_13467.cljs$core$IIndexed$_nth$arity$2(null,i__13424_13469);
dep_13470.rank = javelin.core.next_rank();

var G__13471 = seq__13421_13466;
var G__13472 = chunk__13422_13467;
var G__13473 = count__13423_13468;
var G__13474 = (i__13424_13469 + (1));
seq__13421_13466 = G__13471;
chunk__13422_13467 = G__13472;
count__13423_13468 = G__13473;
i__13424_13469 = G__13474;
continue;
} else {
var temp__4657__auto___13475__$1 = cljs.core.seq(seq__13421_13466);
if(temp__4657__auto___13475__$1){
var seq__13421_13476__$1 = temp__4657__auto___13475__$1;
if(cljs.core.chunked_seq_QMARK_(seq__13421_13476__$1)){
var c__7687__auto___13477 = cljs.core.chunk_first(seq__13421_13476__$1);
var G__13478 = cljs.core.chunk_rest(seq__13421_13476__$1);
var G__13479 = c__7687__auto___13477;
var G__13480 = cljs.core.count(c__7687__auto___13477);
var G__13481 = (0);
seq__13421_13466 = G__13478;
chunk__13422_13467 = G__13479;
count__13423_13468 = G__13480;
i__13424_13469 = G__13481;
continue;
} else {
var dep_13482 = cljs.core.first(seq__13421_13476__$1);
dep_13482.rank = javelin.core.next_rank();

var G__13483 = cljs.core.next(seq__13421_13476__$1);
var G__13484 = null;
var G__13485 = (0);
var G__13486 = (0);
seq__13421_13466 = G__13483;
chunk__13422_13467 = G__13484;
count__13423_13468 = G__13485;
i__13424_13469 = G__13486;
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

var G__13487 = cljs.core.next(seq__13413_13459__$1);
var G__13488 = null;
var G__13489 = (0);
var G__13490 = (0);
seq__13413_13428 = G__13487;
chunk__13414_13429 = G__13488;
count__13415_13430 = G__13489;
i__13416_13431 = G__13490;
continue;
}
} else {
}
}
break;
}

var compute_13491 = ((function (vec__13410,f,sources){
return (function (p1__13406_SHARP_){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(javelin.core.deref_STAR_(cljs.core.peek(p1__13406_SHARP_)),cljs.core.map.cljs$core$IFn$_invoke$arity$2(javelin.core.deref_STAR_,cljs.core.pop(p1__13406_SHARP_)));
});})(vec__13410,f,sources))
;
this$.thunk = ((function (compute_13491,vec__13410,f,sources){
return (function (){
return this$.state = compute_13491(this$.sources);
});})(compute_13491,vec__13410,f,sources))
;
} else {
}

return javelin.core.propagate_BANG_(this$);
});

javelin.core.set_formula_BANG_.cljs$lang$maxFixedArity = (1);

javelin.core.set_formula_BANG_.cljs$lang$applyTo = (function (seq13407){
var G__13408 = cljs.core.first(seq13407);
var seq13407__$1 = cljs.core.next(seq13407);
return javelin.core.set_formula_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__13408,seq13407__$1);
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
var G__13492 = this$__$1;
var G__13493 = (function (){var G__13494 = this$__$1.state;
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__13494) : f.call(null,G__13494));
})();
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__13492,G__13493) : cljs.core.reset_BANG_.call(null,G__13492,G__13493));
});

javelin.core.Cell.prototype.cljs$core$ISwap$_swap_BANG_$arity$3 = (function (this$,f,a){
var self__ = this;
var this$__$1 = this;
var G__13495 = this$__$1;
var G__13496 = (function (){var G__13497 = this$__$1.state;
var G__13498 = a;
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__13497,G__13498) : f.call(null,G__13497,G__13498));
})();
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__13495,G__13496) : cljs.core.reset_BANG_.call(null,G__13495,G__13496));
});

javelin.core.Cell.prototype.cljs$core$ISwap$_swap_BANG_$arity$4 = (function (this$,f,a,b){
var self__ = this;
var this$__$1 = this;
var G__13499 = this$__$1;
var G__13500 = (function (){var G__13501 = this$__$1.state;
var G__13502 = a;
var G__13503 = b;
return (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(G__13501,G__13502,G__13503) : f.call(null,G__13501,G__13502,G__13503));
})();
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__13499,G__13500) : cljs.core.reset_BANG_.call(null,G__13499,G__13500));
});

javelin.core.Cell.prototype.cljs$core$ISwap$_swap_BANG_$arity$5 = (function (this$,f,a,b,xs){
var self__ = this;
var this$__$1 = this;
var G__13504 = this$__$1;
var G__13505 = cljs.core.apply.cljs$core$IFn$_invoke$arity$5(f,this$__$1.state,a,b,xs);
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__13504,G__13505) : cljs.core.reset_BANG_.call(null,G__13504,G__13505));
});

javelin.core.Cell.prototype.cljs$core$IWatchable$_notify_watches$arity$3 = (function (this$,o,n){
var self__ = this;
var this$__$1 = this;
var seq__13506 = cljs.core.seq(self__.watches);
var chunk__13507 = null;
var count__13508 = (0);
var i__13509 = (0);
while(true){
if((i__13509 < count__13508)){
var vec__13510 = chunk__13507.cljs$core$IIndexed$_nth$arity$2(null,i__13509);
var key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13510,(0),null);
var f = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13510,(1),null);
(f.cljs$core$IFn$_invoke$arity$4 ? f.cljs$core$IFn$_invoke$arity$4(key,this$__$1,o,n) : f.call(null,key,this$__$1,o,n));

var G__13516 = seq__13506;
var G__13517 = chunk__13507;
var G__13518 = count__13508;
var G__13519 = (i__13509 + (1));
seq__13506 = G__13516;
chunk__13507 = G__13517;
count__13508 = G__13518;
i__13509 = G__13519;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq(seq__13506);
if(temp__4657__auto__){
var seq__13506__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__13506__$1)){
var c__7687__auto__ = cljs.core.chunk_first(seq__13506__$1);
var G__13520 = cljs.core.chunk_rest(seq__13506__$1);
var G__13521 = c__7687__auto__;
var G__13522 = cljs.core.count(c__7687__auto__);
var G__13523 = (0);
seq__13506 = G__13520;
chunk__13507 = G__13521;
count__13508 = G__13522;
i__13509 = G__13523;
continue;
} else {
var vec__13513 = cljs.core.first(seq__13506__$1);
var key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13513,(0),null);
var f = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13513,(1),null);
(f.cljs$core$IFn$_invoke$arity$4 ? f.cljs$core$IFn$_invoke$arity$4(key,this$__$1,o,n) : f.call(null,key,this$__$1,o,n));

var G__13524 = cljs.core.next(seq__13506__$1);
var G__13525 = null;
var G__13526 = (0);
var G__13527 = (0);
seq__13506 = G__13524;
chunk__13507 = G__13525;
count__13508 = G__13526;
i__13509 = G__13527;
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
var G__13530__delegate = function (sources){
return javelin.core.set_formula_BANG_.cljs$core$IFn$_invoke$arity$variadic((function (){var G__13529 = cljs.core.cst$kw$javelin$core_SLASH_none;
return (javelin.core.cell.cljs$core$IFn$_invoke$arity$1 ? javelin.core.cell.cljs$core$IFn$_invoke$arity$1(G__13529) : javelin.core.cell.call(null,G__13529));
})(),cljs.core.array_seq([f,sources], 0));
};
var G__13530 = function (var_args){
var sources = null;
if (arguments.length > 0) {
var G__13531__i = 0, G__13531__a = new Array(arguments.length -  0);
while (G__13531__i < G__13531__a.length) {G__13531__a[G__13531__i] = arguments[G__13531__i + 0]; ++G__13531__i;}
  sources = new cljs.core.IndexedSeq(G__13531__a,0);
} 
return G__13530__delegate.call(this,sources);};
G__13530.cljs$lang$maxFixedArity = 0;
G__13530.cljs$lang$applyTo = (function (arglist__13532){
var sources = cljs.core.seq(arglist__13532);
return G__13530__delegate(sources);
});
G__13530.cljs$core$IFn$_invoke$arity$variadic = G__13530__delegate;
return G__13530;
})()
;
});
javelin.core.lens = (function javelin$core$lens(c,f){
var c__$1 = javelin.core.formula(cljs.core.identity).call(null,c);
c__$1.update = f;

return c__$1;
});
javelin.core.cell = (function javelin$core$cell(var_args){
var args13533 = [];
var len__7981__auto___13541 = arguments.length;
var i__7982__auto___13542 = (0);
while(true){
if((i__7982__auto___13542 < len__7981__auto___13541)){
args13533.push((arguments[i__7982__auto___13542]));

var G__13543 = (i__7982__auto___13542 + (1));
i__7982__auto___13542 = G__13543;
continue;
} else {
}
break;
}

var G__13537 = args13533.length;
switch (G__13537) {
case 1:
return javelin.core.cell.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
var argseq__8000__auto__ = (new cljs.core.IndexedSeq(args13533.slice((1)),(0),null));
return javelin.core.cell.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__8000__auto__);

}
});

javelin.core.cell.cljs$core$IFn$_invoke$arity$1 = (function (x){
return javelin.core.set_formula_BANG_((new javelin.core.Cell(null,x,javelin.core.next_rank(),x,cljs.core.PersistentVector.EMPTY,cljs.core.PersistentHashSet.EMPTY,null,cljs.core.PersistentArrayMap.EMPTY,null)));
});

javelin.core.cell.cljs$core$IFn$_invoke$arity$variadic = (function (x,p__13538){
var map__13539 = p__13538;
var map__13539__$1 = ((((!((map__13539 == null)))?((((map__13539.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13539.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13539):map__13539);
var meta = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13539__$1,cljs.core.cst$kw$meta);
return javelin.core.set_formula_BANG_((new javelin.core.Cell(meta,x,javelin.core.next_rank(),x,cljs.core.PersistentVector.EMPTY,cljs.core.PersistentHashSet.EMPTY,null,cljs.core.PersistentArrayMap.EMPTY,null)));
});

javelin.core.cell.cljs$lang$applyTo = (function (seq13534){
var G__13535 = cljs.core.first(seq13534);
var seq13534__$1 = cljs.core.next(seq13534);
return javelin.core.cell.cljs$core$IFn$_invoke$arity$variadic(G__13535,seq13534__$1);
});

javelin.core.cell.cljs$lang$maxFixedArity = (1);

javelin.core.lift = javelin.core.formula;
javelin.core.dosync_STAR_ = (function javelin$core$dosync_STAR_(thunk){
var bind = (function (p1__13545_SHARP_){
var _STAR_tx_STAR_13549 = javelin.core._STAR_tx_STAR_;
javelin.core._STAR_tx_STAR_ = (function (){var G__13550 = tailrecursion.priority_map.priority_map();
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__13550) : cljs.core.atom.call(null,G__13550));
})();

try{return (p1__13545_SHARP_.cljs$core$IFn$_invoke$arity$0 ? p1__13545_SHARP_.cljs$core$IFn$_invoke$arity$0() : p1__13545_SHARP_.call(null));
}finally {javelin.core._STAR_tx_STAR_ = _STAR_tx_STAR_13549;
}});
var prop = ((function (bind){
return (function (){
var tx = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(javelin.core._STAR_tx_STAR_) : cljs.core.deref.call(null,javelin.core._STAR_tx_STAR_));
var _STAR_tx_STAR_13551 = javelin.core._STAR_tx_STAR_;
javelin.core._STAR_tx_STAR_ = null;

try{return javelin.core.propagate_STAR_(tx);
}finally {javelin.core._STAR_tx_STAR_ = _STAR_tx_STAR_13551;
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
var len__7981__auto___13559 = arguments.length;
var i__7982__auto___13560 = (0);
while(true){
if((i__7982__auto___13560 < len__7981__auto___13559)){
args__7988__auto__.push((arguments[i__7982__auto___13560]));

var G__13561 = (i__7982__auto___13560 + (1));
i__7982__auto___13560 = G__13561;
continue;
} else {
}
break;
}

var argseq__7989__auto__ = ((((0) < args__7988__auto__.length))?(new cljs.core.IndexedSeq(args__7988__auto__.slice((0)),(0),null)):null);
return javelin.core.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(argseq__7989__auto__);
});

javelin.core.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (cells){
var olds = (function (){var G__13558 = cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(cljs.core.count(cells),cljs.core.cst$kw$javelin$core_SLASH_none);
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__13558) : cljs.core.atom.call(null,G__13558));
})();
var tag_neq = ((function (olds){
return (function (p1__13552_SHARP_,p2__13553_SHARP_){
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(p1__13552_SHARP_,p2__13553_SHARP_),p2__13553_SHARP_],null));
});})(olds))
;
var diff = ((function (olds,tag_neq){
return (function (p1__13555_SHARP_,p2__13554_SHARP_){
return cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.second,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.first,cljs.core.map.cljs$core$IFn$_invoke$arity$3(tag_neq,p1__13555_SHARP_,p2__13554_SHARP_))));
});})(olds,tag_neq))
;
var proc = ((function (olds,tag_neq,diff){
return (function() { 
var G__13562__delegate = function (rest__13556_SHARP_){
var news = diff((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(olds) : cljs.core.deref.call(null,olds)),rest__13556_SHARP_);
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(olds,rest__13556_SHARP_) : cljs.core.reset_BANG_.call(null,olds,rest__13556_SHARP_));

return news;
};
var G__13562 = function (var_args){
var rest__13556_SHARP_ = null;
if (arguments.length > 0) {
var G__13563__i = 0, G__13563__a = new Array(arguments.length -  0);
while (G__13563__i < G__13563__a.length) {G__13563__a[G__13563__i] = arguments[G__13563__i + 0]; ++G__13563__i;}
  rest__13556_SHARP_ = new cljs.core.IndexedSeq(G__13563__a,0);
} 
return G__13562__delegate.call(this,rest__13556_SHARP_);};
G__13562.cljs$lang$maxFixedArity = 0;
G__13562.cljs$lang$applyTo = (function (arglist__13564){
var rest__13556_SHARP_ = cljs.core.seq(arglist__13564);
return G__13562__delegate(rest__13556_SHARP_);
});
G__13562.cljs$core$IFn$_invoke$arity$variadic = G__13562__delegate;
return G__13562;
})()
;})(olds,tag_neq,diff))
;
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(javelin.core.formula(proc),cells);
});

javelin.core.alts_BANG_.cljs$lang$maxFixedArity = (0);

javelin.core.alts_BANG_.cljs$lang$applyTo = (function (seq13557){
return javelin.core.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq13557));
});

javelin.core.cell_map = (function javelin$core$cell_map(f,c){
var cseq = javelin.core.formula(cljs.core.seq).call(null,c);
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (cseq){
return (function (p1__13565_SHARP_){
return javelin.core.formula(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(f,javelin.core.safe_nth)).call(null,cseq,p1__13565_SHARP_);
});})(cseq))
,cljs.core.range.cljs$core$IFn$_invoke$arity$2((0),cljs.core.count((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cseq) : cljs.core.deref.call(null,cseq)))));
});
javelin.core.cell_doseq_STAR_ = (function javelin$core$cell_doseq_STAR_(items_seq,f){
var pool_size = javelin.core.cell.cljs$core$IFn$_invoke$arity$1((0));
var cur_count = javelin.core.formula(cljs.core.count).call(null,items_seq);
var ith_item = ((function (pool_size,cur_count){
return (function (p1__13566_SHARP_){
return javelin.core.formula(javelin.core.safe_nth).call(null,items_seq,p1__13566_SHARP_);
});})(pool_size,cur_count))
;
return javelin.core.formula(((function (pool_size,cur_count,ith_item){
return (function (pool_size__$1,cur_count__$1,f__$1,ith_item__$1,reset_pool_size_BANG_){
if((pool_size__$1 < cur_count__$1)){
var seq__13573_13579 = cljs.core.seq(cljs.core.range.cljs$core$IFn$_invoke$arity$2(pool_size__$1,cur_count__$1));
var chunk__13574_13580 = null;
var count__13575_13581 = (0);
var i__13576_13582 = (0);
while(true){
if((i__13576_13582 < count__13575_13581)){
var i_13583 = chunk__13574_13580.cljs$core$IIndexed$_nth$arity$2(null,i__13576_13582);
var G__13577_13584 = (ith_item__$1.cljs$core$IFn$_invoke$arity$1 ? ith_item__$1.cljs$core$IFn$_invoke$arity$1(i_13583) : ith_item__$1.call(null,i_13583));
(f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(G__13577_13584) : f__$1.call(null,G__13577_13584));

var G__13585 = seq__13573_13579;
var G__13586 = chunk__13574_13580;
var G__13587 = count__13575_13581;
var G__13588 = (i__13576_13582 + (1));
seq__13573_13579 = G__13585;
chunk__13574_13580 = G__13586;
count__13575_13581 = G__13587;
i__13576_13582 = G__13588;
continue;
} else {
var temp__4657__auto___13589 = cljs.core.seq(seq__13573_13579);
if(temp__4657__auto___13589){
var seq__13573_13590__$1 = temp__4657__auto___13589;
if(cljs.core.chunked_seq_QMARK_(seq__13573_13590__$1)){
var c__7687__auto___13591 = cljs.core.chunk_first(seq__13573_13590__$1);
var G__13592 = cljs.core.chunk_rest(seq__13573_13590__$1);
var G__13593 = c__7687__auto___13591;
var G__13594 = cljs.core.count(c__7687__auto___13591);
var G__13595 = (0);
seq__13573_13579 = G__13592;
chunk__13574_13580 = G__13593;
count__13575_13581 = G__13594;
i__13576_13582 = G__13595;
continue;
} else {
var i_13596 = cljs.core.first(seq__13573_13590__$1);
var G__13578_13597 = (ith_item__$1.cljs$core$IFn$_invoke$arity$1 ? ith_item__$1.cljs$core$IFn$_invoke$arity$1(i_13596) : ith_item__$1.call(null,i_13596));
(f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(G__13578_13597) : f__$1.call(null,G__13578_13597));

var G__13598 = cljs.core.next(seq__13573_13590__$1);
var G__13599 = null;
var G__13600 = (0);
var G__13601 = (0);
seq__13573_13579 = G__13598;
chunk__13574_13580 = G__13599;
count__13575_13581 = G__13600;
i__13576_13582 = G__13601;
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
