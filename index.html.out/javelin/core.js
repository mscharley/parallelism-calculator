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

var G__13353 = ((!(diff_QMARK_))?popq:cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (pri_map,popq,old,new$,diff_QMARK_,next,temp__4657__auto__){
return (function (p1__13351_SHARP_,p2__13352_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__13351_SHARP_,p2__13352_SHARP_,p2__13352_SHARP_.rank);
});})(pri_map,popq,old,new$,diff_QMARK_,next,temp__4657__auto__))
,popq,next.sinks));
pri_map = G__13353;
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
}catch (e13355){if((e13355 instanceof Error)){
var _ = e13355;
return null;
} else {
throw e13355;

}
}});
javelin.core.propagate_BANG_ = (function javelin$core$propagate_BANG_(c){
if(cljs.core.truth_(javelin.core._STAR_tx_STAR_)){
var G__13358 = c;
javelin.core.add_sync_BANG_(G__13358);

return G__13358;
} else {
var G__13359 = c;
javelin.core.propagate_STAR_(javelin.core.cell__GT_pm(G__13359));

return G__13359;
}
});
javelin.core.destroy_cell_BANG_ = (function javelin$core$destroy_cell_BANG_(var_args){
var args__7988__auto__ = [];
var len__7981__auto___13370 = arguments.length;
var i__7982__auto___13371 = (0);
while(true){
if((i__7982__auto___13371 < len__7981__auto___13370)){
args__7988__auto__.push((arguments[i__7982__auto___13371]));

var G__13372 = (i__7982__auto___13371 + (1));
i__7982__auto___13371 = G__13372;
continue;
} else {
}
break;
}

var argseq__7989__auto__ = ((((1) < args__7988__auto__.length))?(new cljs.core.IndexedSeq(args__7988__auto__.slice((1)),(0),null)):null);
return javelin.core.destroy_cell_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7989__auto__);
});

javelin.core.destroy_cell_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (this$,p__13362){
var vec__13363 = p__13362;
var keep_watches_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13363,(0),null);
var srcs = this$.sources;
this$.sources = cljs.core.PersistentVector.EMPTY;

this$.update = null;

this$.thunk = null;

if(cljs.core.truth_(keep_watches_QMARK_)){
} else {
this$.watches = cljs.core.PersistentArrayMap.EMPTY;
}

var seq__13366 = cljs.core.seq(srcs);
var chunk__13367 = null;
var count__13368 = (0);
var i__13369 = (0);
while(true){
if((i__13369 < count__13368)){
var src = chunk__13367.cljs$core$IIndexed$_nth$arity$2(null,i__13369);
if(cljs.core.truth_((javelin.core.cell_QMARK_.cljs$core$IFn$_invoke$arity$1 ? javelin.core.cell_QMARK_.cljs$core$IFn$_invoke$arity$1(src) : javelin.core.cell_QMARK_.call(null,src)))){
src.sinks = cljs.core.disj.cljs$core$IFn$_invoke$arity$2(src.sinks,this$);
} else {
}

var G__13373 = seq__13366;
var G__13374 = chunk__13367;
var G__13375 = count__13368;
var G__13376 = (i__13369 + (1));
seq__13366 = G__13373;
chunk__13367 = G__13374;
count__13368 = G__13375;
i__13369 = G__13376;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq(seq__13366);
if(temp__4657__auto__){
var seq__13366__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__13366__$1)){
var c__7687__auto__ = cljs.core.chunk_first(seq__13366__$1);
var G__13377 = cljs.core.chunk_rest(seq__13366__$1);
var G__13378 = c__7687__auto__;
var G__13379 = cljs.core.count(c__7687__auto__);
var G__13380 = (0);
seq__13366 = G__13377;
chunk__13367 = G__13378;
count__13368 = G__13379;
i__13369 = G__13380;
continue;
} else {
var src = cljs.core.first(seq__13366__$1);
if(cljs.core.truth_((javelin.core.cell_QMARK_.cljs$core$IFn$_invoke$arity$1 ? javelin.core.cell_QMARK_.cljs$core$IFn$_invoke$arity$1(src) : javelin.core.cell_QMARK_.call(null,src)))){
src.sinks = cljs.core.disj.cljs$core$IFn$_invoke$arity$2(src.sinks,this$);
} else {
}

var G__13381 = cljs.core.next(seq__13366__$1);
var G__13382 = null;
var G__13383 = (0);
var G__13384 = (0);
seq__13366 = G__13381;
chunk__13367 = G__13382;
count__13368 = G__13383;
i__13369 = G__13384;
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

javelin.core.destroy_cell_BANG_.cljs$lang$applyTo = (function (seq13360){
var G__13361 = cljs.core.first(seq13360);
var seq13360__$1 = cljs.core.next(seq13360);
return javelin.core.destroy_cell_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__13361,seq13360__$1);
});

javelin.core.set_formula_BANG_ = (function javelin$core$set_formula_BANG_(var_args){
var args__7988__auto__ = [];
var len__7981__auto___13405 = arguments.length;
var i__7982__auto___13406 = (0);
while(true){
if((i__7982__auto___13406 < len__7981__auto___13405)){
args__7988__auto__.push((arguments[i__7982__auto___13406]));

var G__13407 = (i__7982__auto___13406 + (1));
i__7982__auto___13406 = G__13407;
continue;
} else {
}
break;
}

var argseq__7989__auto__ = ((((1) < args__7988__auto__.length))?(new cljs.core.IndexedSeq(args__7988__auto__.slice((1)),(0),null)):null);
return javelin.core.set_formula_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7989__auto__);
});

javelin.core.set_formula_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (this$,p__13389){
var vec__13390 = p__13389;
var f = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13390,(0),null);
var sources = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13390,(1),null);
javelin.core.destroy_cell_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.array_seq([true], 0));

if(cljs.core.truth_(f)){
this$.sources = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.vec(sources),f);

var seq__13393_13408 = cljs.core.seq(this$.sources);
var chunk__13394_13409 = null;
var count__13395_13410 = (0);
var i__13396_13411 = (0);
while(true){
if((i__13396_13411 < count__13395_13410)){
var source_13412 = chunk__13394_13409.cljs$core$IIndexed$_nth$arity$2(null,i__13396_13411);
if(cljs.core.truth_((javelin.core.cell_QMARK_.cljs$core$IFn$_invoke$arity$1 ? javelin.core.cell_QMARK_.cljs$core$IFn$_invoke$arity$1(source_13412) : javelin.core.cell_QMARK_.call(null,source_13412)))){
source_13412.sinks = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(source_13412.sinks,this$);

if((source_13412.rank > this$.rank)){
var seq__13397_13413 = cljs.core.seq(javelin.core.bf_seq(cljs.core.identity,((function (seq__13393_13408,chunk__13394_13409,count__13395_13410,i__13396_13411,source_13412,vec__13390,f,sources){
return (function (p1__13385_SHARP_){
return p1__13385_SHARP_.sinks;
});})(seq__13393_13408,chunk__13394_13409,count__13395_13410,i__13396_13411,source_13412,vec__13390,f,sources))
,source_13412));
var chunk__13398_13414 = null;
var count__13399_13415 = (0);
var i__13400_13416 = (0);
while(true){
if((i__13400_13416 < count__13399_13415)){
var dep_13417 = chunk__13398_13414.cljs$core$IIndexed$_nth$arity$2(null,i__13400_13416);
dep_13417.rank = javelin.core.next_rank();

var G__13418 = seq__13397_13413;
var G__13419 = chunk__13398_13414;
var G__13420 = count__13399_13415;
var G__13421 = (i__13400_13416 + (1));
seq__13397_13413 = G__13418;
chunk__13398_13414 = G__13419;
count__13399_13415 = G__13420;
i__13400_13416 = G__13421;
continue;
} else {
var temp__4657__auto___13422 = cljs.core.seq(seq__13397_13413);
if(temp__4657__auto___13422){
var seq__13397_13423__$1 = temp__4657__auto___13422;
if(cljs.core.chunked_seq_QMARK_(seq__13397_13423__$1)){
var c__7687__auto___13424 = cljs.core.chunk_first(seq__13397_13423__$1);
var G__13425 = cljs.core.chunk_rest(seq__13397_13423__$1);
var G__13426 = c__7687__auto___13424;
var G__13427 = cljs.core.count(c__7687__auto___13424);
var G__13428 = (0);
seq__13397_13413 = G__13425;
chunk__13398_13414 = G__13426;
count__13399_13415 = G__13427;
i__13400_13416 = G__13428;
continue;
} else {
var dep_13429 = cljs.core.first(seq__13397_13423__$1);
dep_13429.rank = javelin.core.next_rank();

var G__13430 = cljs.core.next(seq__13397_13423__$1);
var G__13431 = null;
var G__13432 = (0);
var G__13433 = (0);
seq__13397_13413 = G__13430;
chunk__13398_13414 = G__13431;
count__13399_13415 = G__13432;
i__13400_13416 = G__13433;
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

var G__13434 = seq__13393_13408;
var G__13435 = chunk__13394_13409;
var G__13436 = count__13395_13410;
var G__13437 = (i__13396_13411 + (1));
seq__13393_13408 = G__13434;
chunk__13394_13409 = G__13435;
count__13395_13410 = G__13436;
i__13396_13411 = G__13437;
continue;
} else {
var temp__4657__auto___13438 = cljs.core.seq(seq__13393_13408);
if(temp__4657__auto___13438){
var seq__13393_13439__$1 = temp__4657__auto___13438;
if(cljs.core.chunked_seq_QMARK_(seq__13393_13439__$1)){
var c__7687__auto___13440 = cljs.core.chunk_first(seq__13393_13439__$1);
var G__13441 = cljs.core.chunk_rest(seq__13393_13439__$1);
var G__13442 = c__7687__auto___13440;
var G__13443 = cljs.core.count(c__7687__auto___13440);
var G__13444 = (0);
seq__13393_13408 = G__13441;
chunk__13394_13409 = G__13442;
count__13395_13410 = G__13443;
i__13396_13411 = G__13444;
continue;
} else {
var source_13445 = cljs.core.first(seq__13393_13439__$1);
if(cljs.core.truth_((javelin.core.cell_QMARK_.cljs$core$IFn$_invoke$arity$1 ? javelin.core.cell_QMARK_.cljs$core$IFn$_invoke$arity$1(source_13445) : javelin.core.cell_QMARK_.call(null,source_13445)))){
source_13445.sinks = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(source_13445.sinks,this$);

if((source_13445.rank > this$.rank)){
var seq__13401_13446 = cljs.core.seq(javelin.core.bf_seq(cljs.core.identity,((function (seq__13393_13408,chunk__13394_13409,count__13395_13410,i__13396_13411,source_13445,seq__13393_13439__$1,temp__4657__auto___13438,vec__13390,f,sources){
return (function (p1__13385_SHARP_){
return p1__13385_SHARP_.sinks;
});})(seq__13393_13408,chunk__13394_13409,count__13395_13410,i__13396_13411,source_13445,seq__13393_13439__$1,temp__4657__auto___13438,vec__13390,f,sources))
,source_13445));
var chunk__13402_13447 = null;
var count__13403_13448 = (0);
var i__13404_13449 = (0);
while(true){
if((i__13404_13449 < count__13403_13448)){
var dep_13450 = chunk__13402_13447.cljs$core$IIndexed$_nth$arity$2(null,i__13404_13449);
dep_13450.rank = javelin.core.next_rank();

var G__13451 = seq__13401_13446;
var G__13452 = chunk__13402_13447;
var G__13453 = count__13403_13448;
var G__13454 = (i__13404_13449 + (1));
seq__13401_13446 = G__13451;
chunk__13402_13447 = G__13452;
count__13403_13448 = G__13453;
i__13404_13449 = G__13454;
continue;
} else {
var temp__4657__auto___13455__$1 = cljs.core.seq(seq__13401_13446);
if(temp__4657__auto___13455__$1){
var seq__13401_13456__$1 = temp__4657__auto___13455__$1;
if(cljs.core.chunked_seq_QMARK_(seq__13401_13456__$1)){
var c__7687__auto___13457 = cljs.core.chunk_first(seq__13401_13456__$1);
var G__13458 = cljs.core.chunk_rest(seq__13401_13456__$1);
var G__13459 = c__7687__auto___13457;
var G__13460 = cljs.core.count(c__7687__auto___13457);
var G__13461 = (0);
seq__13401_13446 = G__13458;
chunk__13402_13447 = G__13459;
count__13403_13448 = G__13460;
i__13404_13449 = G__13461;
continue;
} else {
var dep_13462 = cljs.core.first(seq__13401_13456__$1);
dep_13462.rank = javelin.core.next_rank();

var G__13463 = cljs.core.next(seq__13401_13456__$1);
var G__13464 = null;
var G__13465 = (0);
var G__13466 = (0);
seq__13401_13446 = G__13463;
chunk__13402_13447 = G__13464;
count__13403_13448 = G__13465;
i__13404_13449 = G__13466;
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

var G__13467 = cljs.core.next(seq__13393_13439__$1);
var G__13468 = null;
var G__13469 = (0);
var G__13470 = (0);
seq__13393_13408 = G__13467;
chunk__13394_13409 = G__13468;
count__13395_13410 = G__13469;
i__13396_13411 = G__13470;
continue;
}
} else {
}
}
break;
}

var compute_13471 = ((function (vec__13390,f,sources){
return (function (p1__13386_SHARP_){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(javelin.core.deref_STAR_(cljs.core.peek(p1__13386_SHARP_)),cljs.core.map.cljs$core$IFn$_invoke$arity$2(javelin.core.deref_STAR_,cljs.core.pop(p1__13386_SHARP_)));
});})(vec__13390,f,sources))
;
this$.thunk = ((function (compute_13471,vec__13390,f,sources){
return (function (){
return this$.state = compute_13471(this$.sources);
});})(compute_13471,vec__13390,f,sources))
;
} else {
}

return javelin.core.propagate_BANG_(this$);
});

javelin.core.set_formula_BANG_.cljs$lang$maxFixedArity = (1);

javelin.core.set_formula_BANG_.cljs$lang$applyTo = (function (seq13387){
var G__13388 = cljs.core.first(seq13387);
var seq13387__$1 = cljs.core.next(seq13387);
return javelin.core.set_formula_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__13388,seq13387__$1);
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
var G__13472 = this$__$1;
var G__13473 = (function (){var G__13474 = this$__$1.state;
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__13474) : f.call(null,G__13474));
})();
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__13472,G__13473) : cljs.core.reset_BANG_.call(null,G__13472,G__13473));
});

javelin.core.Cell.prototype.cljs$core$ISwap$_swap_BANG_$arity$3 = (function (this$,f,a){
var self__ = this;
var this$__$1 = this;
var G__13475 = this$__$1;
var G__13476 = (function (){var G__13477 = this$__$1.state;
var G__13478 = a;
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__13477,G__13478) : f.call(null,G__13477,G__13478));
})();
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__13475,G__13476) : cljs.core.reset_BANG_.call(null,G__13475,G__13476));
});

javelin.core.Cell.prototype.cljs$core$ISwap$_swap_BANG_$arity$4 = (function (this$,f,a,b){
var self__ = this;
var this$__$1 = this;
var G__13479 = this$__$1;
var G__13480 = (function (){var G__13481 = this$__$1.state;
var G__13482 = a;
var G__13483 = b;
return (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(G__13481,G__13482,G__13483) : f.call(null,G__13481,G__13482,G__13483));
})();
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__13479,G__13480) : cljs.core.reset_BANG_.call(null,G__13479,G__13480));
});

javelin.core.Cell.prototype.cljs$core$ISwap$_swap_BANG_$arity$5 = (function (this$,f,a,b,xs){
var self__ = this;
var this$__$1 = this;
var G__13484 = this$__$1;
var G__13485 = cljs.core.apply.cljs$core$IFn$_invoke$arity$5(f,this$__$1.state,a,b,xs);
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__13484,G__13485) : cljs.core.reset_BANG_.call(null,G__13484,G__13485));
});

javelin.core.Cell.prototype.cljs$core$IWatchable$_notify_watches$arity$3 = (function (this$,o,n){
var self__ = this;
var this$__$1 = this;
var seq__13486 = cljs.core.seq(self__.watches);
var chunk__13487 = null;
var count__13488 = (0);
var i__13489 = (0);
while(true){
if((i__13489 < count__13488)){
var vec__13490 = chunk__13487.cljs$core$IIndexed$_nth$arity$2(null,i__13489);
var key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13490,(0),null);
var f = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13490,(1),null);
(f.cljs$core$IFn$_invoke$arity$4 ? f.cljs$core$IFn$_invoke$arity$4(key,this$__$1,o,n) : f.call(null,key,this$__$1,o,n));

var G__13496 = seq__13486;
var G__13497 = chunk__13487;
var G__13498 = count__13488;
var G__13499 = (i__13489 + (1));
seq__13486 = G__13496;
chunk__13487 = G__13497;
count__13488 = G__13498;
i__13489 = G__13499;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq(seq__13486);
if(temp__4657__auto__){
var seq__13486__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__13486__$1)){
var c__7687__auto__ = cljs.core.chunk_first(seq__13486__$1);
var G__13500 = cljs.core.chunk_rest(seq__13486__$1);
var G__13501 = c__7687__auto__;
var G__13502 = cljs.core.count(c__7687__auto__);
var G__13503 = (0);
seq__13486 = G__13500;
chunk__13487 = G__13501;
count__13488 = G__13502;
i__13489 = G__13503;
continue;
} else {
var vec__13493 = cljs.core.first(seq__13486__$1);
var key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13493,(0),null);
var f = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13493,(1),null);
(f.cljs$core$IFn$_invoke$arity$4 ? f.cljs$core$IFn$_invoke$arity$4(key,this$__$1,o,n) : f.call(null,key,this$__$1,o,n));

var G__13504 = cljs.core.next(seq__13486__$1);
var G__13505 = null;
var G__13506 = (0);
var G__13507 = (0);
seq__13486 = G__13504;
chunk__13487 = G__13505;
count__13488 = G__13506;
i__13489 = G__13507;
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
var G__13510__delegate = function (sources){
return javelin.core.set_formula_BANG_.cljs$core$IFn$_invoke$arity$variadic((function (){var G__13509 = cljs.core.cst$kw$javelin$core_SLASH_none;
return (javelin.core.cell.cljs$core$IFn$_invoke$arity$1 ? javelin.core.cell.cljs$core$IFn$_invoke$arity$1(G__13509) : javelin.core.cell.call(null,G__13509));
})(),cljs.core.array_seq([f,sources], 0));
};
var G__13510 = function (var_args){
var sources = null;
if (arguments.length > 0) {
var G__13511__i = 0, G__13511__a = new Array(arguments.length -  0);
while (G__13511__i < G__13511__a.length) {G__13511__a[G__13511__i] = arguments[G__13511__i + 0]; ++G__13511__i;}
  sources = new cljs.core.IndexedSeq(G__13511__a,0);
} 
return G__13510__delegate.call(this,sources);};
G__13510.cljs$lang$maxFixedArity = 0;
G__13510.cljs$lang$applyTo = (function (arglist__13512){
var sources = cljs.core.seq(arglist__13512);
return G__13510__delegate(sources);
});
G__13510.cljs$core$IFn$_invoke$arity$variadic = G__13510__delegate;
return G__13510;
})()
;
});
javelin.core.lens = (function javelin$core$lens(c,f){
var c__$1 = javelin.core.formula(cljs.core.identity).call(null,c);
c__$1.update = f;

return c__$1;
});
javelin.core.cell = (function javelin$core$cell(var_args){
var args13513 = [];
var len__7981__auto___13521 = arguments.length;
var i__7982__auto___13522 = (0);
while(true){
if((i__7982__auto___13522 < len__7981__auto___13521)){
args13513.push((arguments[i__7982__auto___13522]));

var G__13523 = (i__7982__auto___13522 + (1));
i__7982__auto___13522 = G__13523;
continue;
} else {
}
break;
}

var G__13517 = args13513.length;
switch (G__13517) {
case 1:
return javelin.core.cell.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
var argseq__8000__auto__ = (new cljs.core.IndexedSeq(args13513.slice((1)),(0),null));
return javelin.core.cell.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__8000__auto__);

}
});

javelin.core.cell.cljs$core$IFn$_invoke$arity$1 = (function (x){
return javelin.core.set_formula_BANG_((new javelin.core.Cell(null,x,javelin.core.next_rank(),x,cljs.core.PersistentVector.EMPTY,cljs.core.PersistentHashSet.EMPTY,null,cljs.core.PersistentArrayMap.EMPTY,null)));
});

javelin.core.cell.cljs$core$IFn$_invoke$arity$variadic = (function (x,p__13518){
var map__13519 = p__13518;
var map__13519__$1 = ((((!((map__13519 == null)))?((((map__13519.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13519.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13519):map__13519);
var meta = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13519__$1,cljs.core.cst$kw$meta);
return javelin.core.set_formula_BANG_((new javelin.core.Cell(meta,x,javelin.core.next_rank(),x,cljs.core.PersistentVector.EMPTY,cljs.core.PersistentHashSet.EMPTY,null,cljs.core.PersistentArrayMap.EMPTY,null)));
});

javelin.core.cell.cljs$lang$applyTo = (function (seq13514){
var G__13515 = cljs.core.first(seq13514);
var seq13514__$1 = cljs.core.next(seq13514);
return javelin.core.cell.cljs$core$IFn$_invoke$arity$variadic(G__13515,seq13514__$1);
});

javelin.core.cell.cljs$lang$maxFixedArity = (1);

javelin.core.lift = javelin.core.formula;
javelin.core.dosync_STAR_ = (function javelin$core$dosync_STAR_(thunk){
var bind = (function (p1__13525_SHARP_){
var _STAR_tx_STAR_13529 = javelin.core._STAR_tx_STAR_;
javelin.core._STAR_tx_STAR_ = (function (){var G__13530 = tailrecursion.priority_map.priority_map();
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__13530) : cljs.core.atom.call(null,G__13530));
})();

try{return (p1__13525_SHARP_.cljs$core$IFn$_invoke$arity$0 ? p1__13525_SHARP_.cljs$core$IFn$_invoke$arity$0() : p1__13525_SHARP_.call(null));
}finally {javelin.core._STAR_tx_STAR_ = _STAR_tx_STAR_13529;
}});
var prop = ((function (bind){
return (function (){
var tx = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(javelin.core._STAR_tx_STAR_) : cljs.core.deref.call(null,javelin.core._STAR_tx_STAR_));
var _STAR_tx_STAR_13531 = javelin.core._STAR_tx_STAR_;
javelin.core._STAR_tx_STAR_ = null;

try{return javelin.core.propagate_STAR_(tx);
}finally {javelin.core._STAR_tx_STAR_ = _STAR_tx_STAR_13531;
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
var len__7981__auto___13539 = arguments.length;
var i__7982__auto___13540 = (0);
while(true){
if((i__7982__auto___13540 < len__7981__auto___13539)){
args__7988__auto__.push((arguments[i__7982__auto___13540]));

var G__13541 = (i__7982__auto___13540 + (1));
i__7982__auto___13540 = G__13541;
continue;
} else {
}
break;
}

var argseq__7989__auto__ = ((((0) < args__7988__auto__.length))?(new cljs.core.IndexedSeq(args__7988__auto__.slice((0)),(0),null)):null);
return javelin.core.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(argseq__7989__auto__);
});

javelin.core.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (cells){
var olds = (function (){var G__13538 = cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(cljs.core.count(cells),cljs.core.cst$kw$javelin$core_SLASH_none);
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__13538) : cljs.core.atom.call(null,G__13538));
})();
var tag_neq = ((function (olds){
return (function (p1__13532_SHARP_,p2__13533_SHARP_){
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(p1__13532_SHARP_,p2__13533_SHARP_),p2__13533_SHARP_],null));
});})(olds))
;
var diff = ((function (olds,tag_neq){
return (function (p1__13535_SHARP_,p2__13534_SHARP_){
return cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.second,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.first,cljs.core.map.cljs$core$IFn$_invoke$arity$3(tag_neq,p1__13535_SHARP_,p2__13534_SHARP_))));
});})(olds,tag_neq))
;
var proc = ((function (olds,tag_neq,diff){
return (function() { 
var G__13542__delegate = function (rest__13536_SHARP_){
var news = diff((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(olds) : cljs.core.deref.call(null,olds)),rest__13536_SHARP_);
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(olds,rest__13536_SHARP_) : cljs.core.reset_BANG_.call(null,olds,rest__13536_SHARP_));

return news;
};
var G__13542 = function (var_args){
var rest__13536_SHARP_ = null;
if (arguments.length > 0) {
var G__13543__i = 0, G__13543__a = new Array(arguments.length -  0);
while (G__13543__i < G__13543__a.length) {G__13543__a[G__13543__i] = arguments[G__13543__i + 0]; ++G__13543__i;}
  rest__13536_SHARP_ = new cljs.core.IndexedSeq(G__13543__a,0);
} 
return G__13542__delegate.call(this,rest__13536_SHARP_);};
G__13542.cljs$lang$maxFixedArity = 0;
G__13542.cljs$lang$applyTo = (function (arglist__13544){
var rest__13536_SHARP_ = cljs.core.seq(arglist__13544);
return G__13542__delegate(rest__13536_SHARP_);
});
G__13542.cljs$core$IFn$_invoke$arity$variadic = G__13542__delegate;
return G__13542;
})()
;})(olds,tag_neq,diff))
;
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(javelin.core.formula(proc),cells);
});

javelin.core.alts_BANG_.cljs$lang$maxFixedArity = (0);

javelin.core.alts_BANG_.cljs$lang$applyTo = (function (seq13537){
return javelin.core.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq13537));
});

javelin.core.cell_map = (function javelin$core$cell_map(f,c){
var cseq = javelin.core.formula(cljs.core.seq).call(null,c);
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (cseq){
return (function (p1__13545_SHARP_){
return javelin.core.formula(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(f,javelin.core.safe_nth)).call(null,cseq,p1__13545_SHARP_);
});})(cseq))
,cljs.core.range.cljs$core$IFn$_invoke$arity$2((0),cljs.core.count((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cseq) : cljs.core.deref.call(null,cseq)))));
});
javelin.core.cell_doseq_STAR_ = (function javelin$core$cell_doseq_STAR_(items_seq,f){
var pool_size = javelin.core.cell.cljs$core$IFn$_invoke$arity$1((0));
var cur_count = javelin.core.formula(cljs.core.count).call(null,items_seq);
var ith_item = ((function (pool_size,cur_count){
return (function (p1__13546_SHARP_){
return javelin.core.formula(javelin.core.safe_nth).call(null,items_seq,p1__13546_SHARP_);
});})(pool_size,cur_count))
;
return javelin.core.formula(((function (pool_size,cur_count,ith_item){
return (function (pool_size__$1,cur_count__$1,f__$1,ith_item__$1,reset_pool_size_BANG_){
if((pool_size__$1 < cur_count__$1)){
var seq__13553_13559 = cljs.core.seq(cljs.core.range.cljs$core$IFn$_invoke$arity$2(pool_size__$1,cur_count__$1));
var chunk__13554_13560 = null;
var count__13555_13561 = (0);
var i__13556_13562 = (0);
while(true){
if((i__13556_13562 < count__13555_13561)){
var i_13563 = chunk__13554_13560.cljs$core$IIndexed$_nth$arity$2(null,i__13556_13562);
var G__13557_13564 = (ith_item__$1.cljs$core$IFn$_invoke$arity$1 ? ith_item__$1.cljs$core$IFn$_invoke$arity$1(i_13563) : ith_item__$1.call(null,i_13563));
(f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(G__13557_13564) : f__$1.call(null,G__13557_13564));

var G__13565 = seq__13553_13559;
var G__13566 = chunk__13554_13560;
var G__13567 = count__13555_13561;
var G__13568 = (i__13556_13562 + (1));
seq__13553_13559 = G__13565;
chunk__13554_13560 = G__13566;
count__13555_13561 = G__13567;
i__13556_13562 = G__13568;
continue;
} else {
var temp__4657__auto___13569 = cljs.core.seq(seq__13553_13559);
if(temp__4657__auto___13569){
var seq__13553_13570__$1 = temp__4657__auto___13569;
if(cljs.core.chunked_seq_QMARK_(seq__13553_13570__$1)){
var c__7687__auto___13571 = cljs.core.chunk_first(seq__13553_13570__$1);
var G__13572 = cljs.core.chunk_rest(seq__13553_13570__$1);
var G__13573 = c__7687__auto___13571;
var G__13574 = cljs.core.count(c__7687__auto___13571);
var G__13575 = (0);
seq__13553_13559 = G__13572;
chunk__13554_13560 = G__13573;
count__13555_13561 = G__13574;
i__13556_13562 = G__13575;
continue;
} else {
var i_13576 = cljs.core.first(seq__13553_13570__$1);
var G__13558_13577 = (ith_item__$1.cljs$core$IFn$_invoke$arity$1 ? ith_item__$1.cljs$core$IFn$_invoke$arity$1(i_13576) : ith_item__$1.call(null,i_13576));
(f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(G__13558_13577) : f__$1.call(null,G__13558_13577));

var G__13578 = cljs.core.next(seq__13553_13570__$1);
var G__13579 = null;
var G__13580 = (0);
var G__13581 = (0);
seq__13553_13559 = G__13578;
chunk__13554_13560 = G__13579;
count__13555_13561 = G__13580;
i__13556_13562 = G__13581;
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
