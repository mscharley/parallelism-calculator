// Compiled by ClojureScript 1.9.293 {:static-fns true, :optimize-constants true}
goog.provide('hoplon.jquery');
goog.require('cljs.core');
goog.require('hoplon.core');
hoplon.jquery.set_attributes_BANG_ = (function hoplon$jquery$set_attributes_BANG_(var_args){
var args14337 = [];
var len__7981__auto___14356 = arguments.length;
var i__7982__auto___14357 = (0);
while(true){
if((i__7982__auto___14357 < len__7981__auto___14356)){
args14337.push((arguments[i__7982__auto___14357]));

var G__14358 = (i__7982__auto___14357 + (1));
i__7982__auto___14357 = G__14358;
continue;
} else {
}
break;
}

var G__14343 = args14337.length;
switch (G__14343) {
case 2:
return hoplon.jquery.set_attributes_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__8000__auto__ = (new cljs.core.IndexedSeq(args14337.slice((3)),(0),null));
return hoplon.jquery.set_attributes_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__8000__auto__);

}
});

hoplon.jquery.set_attributes_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (this$,kvs){
var e = jQuery(this$);
var seq__14344 = cljs.core.seq(kvs);
var chunk__14346 = null;
var count__14347 = (0);
var i__14348 = (0);
while(true){
if((i__14348 < count__14347)){
var vec__14350 = chunk__14346.cljs$core$IIndexed$_nth$arity$2(null,i__14348);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14350,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14350,(1),null);
var k_14360__$1 = cljs.core.name(k);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(false,v)){
e.removeAttr(k_14360__$1);
} else {
e.attr(k_14360__$1,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(true,v))?k_14360__$1:v));
}

var G__14361 = seq__14344;
var G__14362 = chunk__14346;
var G__14363 = count__14347;
var G__14364 = (i__14348 + (1));
seq__14344 = G__14361;
chunk__14346 = G__14362;
count__14347 = G__14363;
i__14348 = G__14364;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq(seq__14344);
if(temp__4657__auto__){
var seq__14344__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__14344__$1)){
var c__7687__auto__ = cljs.core.chunk_first(seq__14344__$1);
var G__14365 = cljs.core.chunk_rest(seq__14344__$1);
var G__14366 = c__7687__auto__;
var G__14367 = cljs.core.count(c__7687__auto__);
var G__14368 = (0);
seq__14344 = G__14365;
chunk__14346 = G__14366;
count__14347 = G__14367;
i__14348 = G__14368;
continue;
} else {
var vec__14353 = cljs.core.first(seq__14344__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14353,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14353,(1),null);
var k_14369__$1 = cljs.core.name(k);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(false,v)){
e.removeAttr(k_14369__$1);
} else {
e.attr(k_14369__$1,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(true,v))?k_14369__$1:v));
}

var G__14370 = cljs.core.next(seq__14344__$1);
var G__14371 = null;
var G__14372 = (0);
var G__14373 = (0);
seq__14344 = G__14370;
chunk__14346 = G__14371;
count__14347 = G__14372;
i__14348 = G__14373;
continue;
}
} else {
return null;
}
}
break;
}
});

hoplon.jquery.set_attributes_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (this$,k,v,kvs){
return hoplon.jquery.set_attributes_BANG_.cljs$core$IFn$_invoke$arity$2(this$,cljs.core.apply.cljs$core$IFn$_invoke$arity$4(cljs.core.hash_map,k,v,kvs));
});

hoplon.jquery.set_attributes_BANG_.cljs$lang$applyTo = (function (seq14338){
var G__14339 = cljs.core.first(seq14338);
var seq14338__$1 = cljs.core.next(seq14338);
var G__14340 = cljs.core.first(seq14338__$1);
var seq14338__$2 = cljs.core.next(seq14338__$1);
var G__14341 = cljs.core.first(seq14338__$2);
var seq14338__$3 = cljs.core.next(seq14338__$2);
return hoplon.jquery.set_attributes_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__14339,G__14340,G__14341,seq14338__$3);
});

hoplon.jquery.set_attributes_BANG_.cljs$lang$maxFixedArity = (3);

hoplon.jquery.set_styles_BANG_ = (function hoplon$jquery$set_styles_BANG_(var_args){
var args14374 = [];
var len__7981__auto___14391 = arguments.length;
var i__7982__auto___14392 = (0);
while(true){
if((i__7982__auto___14392 < len__7981__auto___14391)){
args14374.push((arguments[i__7982__auto___14392]));

var G__14393 = (i__7982__auto___14392 + (1));
i__7982__auto___14392 = G__14393;
continue;
} else {
}
break;
}

var G__14380 = args14374.length;
switch (G__14380) {
case 2:
return hoplon.jquery.set_styles_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__8000__auto__ = (new cljs.core.IndexedSeq(args14374.slice((3)),(0),null));
return hoplon.jquery.set_styles_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__8000__auto__);

}
});

hoplon.jquery.set_styles_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (this$,kvs){
var e = jQuery(this$);
var seq__14381 = cljs.core.seq(kvs);
var chunk__14382 = null;
var count__14383 = (0);
var i__14384 = (0);
while(true){
if((i__14384 < count__14383)){
var vec__14385 = chunk__14382.cljs$core$IIndexed$_nth$arity$2(null,i__14384);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14385,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14385,(1),null);
e.css(cljs.core.name(k),[cljs.core.str(v)].join(''));

var G__14395 = seq__14381;
var G__14396 = chunk__14382;
var G__14397 = count__14383;
var G__14398 = (i__14384 + (1));
seq__14381 = G__14395;
chunk__14382 = G__14396;
count__14383 = G__14397;
i__14384 = G__14398;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq(seq__14381);
if(temp__4657__auto__){
var seq__14381__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__14381__$1)){
var c__7687__auto__ = cljs.core.chunk_first(seq__14381__$1);
var G__14399 = cljs.core.chunk_rest(seq__14381__$1);
var G__14400 = c__7687__auto__;
var G__14401 = cljs.core.count(c__7687__auto__);
var G__14402 = (0);
seq__14381 = G__14399;
chunk__14382 = G__14400;
count__14383 = G__14401;
i__14384 = G__14402;
continue;
} else {
var vec__14388 = cljs.core.first(seq__14381__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14388,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14388,(1),null);
e.css(cljs.core.name(k),[cljs.core.str(v)].join(''));

var G__14403 = cljs.core.next(seq__14381__$1);
var G__14404 = null;
var G__14405 = (0);
var G__14406 = (0);
seq__14381 = G__14403;
chunk__14382 = G__14404;
count__14383 = G__14405;
i__14384 = G__14406;
continue;
}
} else {
return null;
}
}
break;
}
});

hoplon.jquery.set_styles_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (this$,k,v,kvs){
return hoplon.jquery.set_styles_BANG_.cljs$core$IFn$_invoke$arity$2(this$,cljs.core.apply.cljs$core$IFn$_invoke$arity$4(cljs.core.hash_map,k,v,kvs));
});

hoplon.jquery.set_styles_BANG_.cljs$lang$applyTo = (function (seq14375){
var G__14376 = cljs.core.first(seq14375);
var seq14375__$1 = cljs.core.next(seq14375);
var G__14377 = cljs.core.first(seq14375__$1);
var seq14375__$2 = cljs.core.next(seq14375__$1);
var G__14378 = cljs.core.first(seq14375__$2);
var seq14375__$3 = cljs.core.next(seq14375__$2);
return hoplon.jquery.set_styles_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__14376,G__14377,G__14378,seq14375__$3);
});

hoplon.jquery.set_styles_BANG_.cljs$lang$maxFixedArity = (3);

hoplon.jquery.text_val_BANG_ = (function hoplon$jquery$text_val_BANG_(var_args){
var args14407 = [];
var len__7981__auto___14410 = arguments.length;
var i__7982__auto___14411 = (0);
while(true){
if((i__7982__auto___14411 < len__7981__auto___14410)){
args14407.push((arguments[i__7982__auto___14411]));

var G__14412 = (i__7982__auto___14411 + (1));
i__7982__auto___14411 = G__14412;
continue;
} else {
}
break;
}

var G__14409 = args14407.length;
switch (G__14409) {
case 1:
return hoplon.jquery.text_val_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return hoplon.jquery.text_val_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args14407.length)].join('')));

}
});

hoplon.jquery.text_val_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (e){
return e.val();
});

hoplon.jquery.text_val_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (e,v){
var v__$1 = [cljs.core.str(v)].join('');
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(v__$1,hoplon.jquery.text_val_BANG_.cljs$core$IFn$_invoke$arity$1(e))){
return e.val(v__$1);
} else {
return null;
}
});

hoplon.jquery.text_val_BANG_.cljs$lang$maxFixedArity = 2;

hoplon.jquery.check_val_BANG_ = (function hoplon$jquery$check_val_BANG_(var_args){
var args14414 = [];
var len__7981__auto___14417 = arguments.length;
var i__7982__auto___14418 = (0);
while(true){
if((i__7982__auto___14418 < len__7981__auto___14417)){
args14414.push((arguments[i__7982__auto___14418]));

var G__14419 = (i__7982__auto___14418 + (1));
i__7982__auto___14418 = G__14419;
continue;
} else {
}
break;
}

var G__14416 = args14414.length;
switch (G__14416) {
case 1:
return hoplon.jquery.check_val_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return hoplon.jquery.check_val_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args14414.length)].join('')));

}
});

hoplon.jquery.check_val_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (e){
return e.is(":checked");
});

hoplon.jquery.check_val_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (e,v){
return e.prop("checked",cljs.core.boolean$(v));
});

hoplon.jquery.check_val_BANG_.cljs$lang$maxFixedArity = 2;

hoplon.core.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$hoplon$core_SLASH_default,(function (elem,key,val){
var G__14421 = elem;
var G__14422 = cljs.core.cst$kw$attr;
var G__14423 = cljs.core.PersistentArrayMap.fromArray([key,val], true, false);
return (hoplon.core.do_BANG_.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.do_BANG_.cljs$core$IFn$_invoke$arity$3(G__14421,G__14422,G__14423) : hoplon.core.do_BANG_.call(null,G__14421,G__14422,G__14423));
}));
hoplon.core.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$css_SLASH__STAR_,(function (elem,key,val){
return hoplon.jquery.set_styles_BANG_(elem,key,val);
}));
hoplon.core.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$html_SLASH__STAR_,(function (elem,key,val){
return hoplon.jquery.set_attributes_BANG_(elem,key,val);
}));
hoplon.core.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$svg_SLASH__STAR_,(function (elem,key,val){
return hoplon.jquery.set_attributes_BANG_(elem,key,val);
}));
hoplon.core.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$attr_SLASH__STAR_,(function (elem,_,kvs){
return hoplon.jquery.set_attributes_BANG_.cljs$core$IFn$_invoke$arity$2(elem,kvs);
}));
hoplon.core.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$prop_SLASH__STAR_,(function (elem,key,val){
var e = jQuery(elem);
return e.prop(cljs.core.name(key),val);
}));
hoplon.core.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$data_SLASH__STAR_,(function (elem,key,val){
var e = jQuery(elem);
return e.data(cljs.core.name(key),val);
}));
hoplon.core.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$attr,(function (elem,_,kvs){
return hoplon.jquery.set_attributes_BANG_.cljs$core$IFn$_invoke$arity$2(elem,kvs);
}));
hoplon.core.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$css,(function (elem,_,kvs){
return hoplon.jquery.set_styles_BANG_.cljs$core$IFn$_invoke$arity$2(elem,kvs);
}));
hoplon.core.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$value,(function() { 
var G__14424__delegate = function (elem,_,args){
var e = jQuery(elem);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("checkbox",e.attr("type")))?hoplon.jquery.check_val_BANG_:hoplon.jquery.text_val_BANG_),e,args);
};
var G__14424 = function (elem,_,var_args){
var args = null;
if (arguments.length > 2) {
var G__14425__i = 0, G__14425__a = new Array(arguments.length -  2);
while (G__14425__i < G__14425__a.length) {G__14425__a[G__14425__i] = arguments[G__14425__i + 2]; ++G__14425__i;}
  args = new cljs.core.IndexedSeq(G__14425__a,0);
} 
return G__14424__delegate.call(this,elem,_,args);};
G__14424.cljs$lang$maxFixedArity = 2;
G__14424.cljs$lang$applyTo = (function (arglist__14426){
var elem = cljs.core.first(arglist__14426);
arglist__14426 = cljs.core.next(arglist__14426);
var _ = cljs.core.first(arglist__14426);
var args = cljs.core.rest(arglist__14426);
return G__14424__delegate(elem,_,args);
});
G__14424.cljs$core$IFn$_invoke$arity$variadic = G__14424__delegate;
return G__14424;
})()
);
hoplon.core.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$class,(function (elem,_,kvs){
var elem__$1 = jQuery(elem);
var clmap = hoplon.core.normalize_class(kvs);
var seq__14427 = cljs.core.seq(clmap);
var chunk__14428 = null;
var count__14429 = (0);
var i__14430 = (0);
while(true){
if((i__14430 < count__14429)){
var vec__14431 = chunk__14428.cljs$core$IIndexed$_nth$arity$2(null,i__14430);
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14431,(0),null);
var p_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14431,(1),null);
elem__$1.toggleClass(cljs.core.name(c),cljs.core.boolean$(p_QMARK_));

var G__14437 = seq__14427;
var G__14438 = chunk__14428;
var G__14439 = count__14429;
var G__14440 = (i__14430 + (1));
seq__14427 = G__14437;
chunk__14428 = G__14438;
count__14429 = G__14439;
i__14430 = G__14440;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq(seq__14427);
if(temp__4657__auto__){
var seq__14427__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__14427__$1)){
var c__7687__auto__ = cljs.core.chunk_first(seq__14427__$1);
var G__14441 = cljs.core.chunk_rest(seq__14427__$1);
var G__14442 = c__7687__auto__;
var G__14443 = cljs.core.count(c__7687__auto__);
var G__14444 = (0);
seq__14427 = G__14441;
chunk__14428 = G__14442;
count__14429 = G__14443;
i__14430 = G__14444;
continue;
} else {
var vec__14434 = cljs.core.first(seq__14427__$1);
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14434,(0),null);
var p_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14434,(1),null);
elem__$1.toggleClass(cljs.core.name(c),cljs.core.boolean$(p_QMARK_));

var G__14445 = cljs.core.next(seq__14427__$1);
var G__14446 = null;
var G__14447 = (0);
var G__14448 = (0);
seq__14427 = G__14445;
chunk__14428 = G__14446;
count__14429 = G__14447;
i__14430 = G__14448;
continue;
}
} else {
return null;
}
}
break;
}
}));
hoplon.core.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$toggle,(function (elem,_,v){
return jQuery(elem).toggle(cljs.core.boolean$(v));
}));
hoplon.core.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$slide_DASH_toggle,(function (elem,_,v){
if(cljs.core.truth_(v)){
return jQuery(elem).hide().slideDown("fast");
} else {
return jQuery(elem).slideUp("fast");
}
}));
hoplon.core.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$fade_DASH_toggle,(function (elem,_,v){
if(cljs.core.truth_(v)){
return jQuery(elem).hide().fadeIn("fast");
} else {
return jQuery(elem).fadeOut("fast");
}
}));
hoplon.core.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$focus,(function (elem,_,v){
var G__14449 = (function (){
if(cljs.core.truth_(v)){
return jQuery(elem).focus();
} else {
return jQuery(elem).focusout();
}
});
var G__14450 = (0);
return setTimeout(G__14449,G__14450);
}));
hoplon.core.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$select,(function (elem,_,___$1){
return jQuery(elem).select();
}));
hoplon.core.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$focus_DASH_select,(function (elem,_,v){
if(cljs.core.truth_(v)){
var G__14451_14457 = elem;
var G__14452_14458 = cljs.core.cst$kw$focus;
var G__14453_14459 = v;
(hoplon.core.do_BANG_.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.do_BANG_.cljs$core$IFn$_invoke$arity$3(G__14451_14457,G__14452_14458,G__14453_14459) : hoplon.core.do_BANG_.call(null,G__14451_14457,G__14452_14458,G__14453_14459));

var G__14454 = elem;
var G__14455 = cljs.core.cst$kw$select;
var G__14456 = v;
return (hoplon.core.do_BANG_.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.do_BANG_.cljs$core$IFn$_invoke$arity$3(G__14454,G__14455,G__14456) : hoplon.core.do_BANG_.call(null,G__14454,G__14455,G__14456));
} else {
return null;
}
}));
hoplon.core.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$text,(function (elem,_,v){
return jQuery(elem).text([cljs.core.str(v)].join(''));
}));
hoplon.core.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$html,(function (elem,_,v){
return jQuery(elem).html(v);
}));
hoplon.core.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$scroll_DASH_to,(function (elem,_,v){
if(cljs.core.truth_(v)){
var body = jQuery("body,html");
var elem__$1 = jQuery(elem);
return body.animate(cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$scrollTop,elem__$1.offset().top], null)));
} else {
return null;
}
}));
jQuery.Event.prototype.cljs$core$IDeref$ = cljs.core.PROTOCOL_SENTINEL;

jQuery.Event.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var this$__$1 = this;
return (function (){var G__14460 = this$__$1.target;
return jQuery(G__14460);
})().val();
});
hoplon.core.on_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$hoplon$core_SLASH_default,(function (elem,event,callback){
return hoplon.core.when_dom(elem,(function (){
return jQuery(elem).on(cljs.core.name(event),callback);
}));
}));
hoplon.core.on_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$html_SLASH__STAR_,(function (elem,event,callback){
return hoplon.core.when_dom(elem,(function (){
return jQuery(elem).on(cljs.core.name(event),callback);
}));
}));
