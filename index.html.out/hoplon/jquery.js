// Compiled by ClojureScript 1.9.293 {:static-fns true, :optimize-constants true}
goog.provide('hoplon.jquery');
goog.require('cljs.core');
goog.require('hoplon.core');
hoplon.jquery.set_attributes_BANG_ = (function hoplon$jquery$set_attributes_BANG_(var_args){
var args14321 = [];
var len__7981__auto___14340 = arguments.length;
var i__7982__auto___14341 = (0);
while(true){
if((i__7982__auto___14341 < len__7981__auto___14340)){
args14321.push((arguments[i__7982__auto___14341]));

var G__14342 = (i__7982__auto___14341 + (1));
i__7982__auto___14341 = G__14342;
continue;
} else {
}
break;
}

var G__14327 = args14321.length;
switch (G__14327) {
case 2:
return hoplon.jquery.set_attributes_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__8000__auto__ = (new cljs.core.IndexedSeq(args14321.slice((3)),(0),null));
return hoplon.jquery.set_attributes_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__8000__auto__);

}
});

hoplon.jquery.set_attributes_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (this$,kvs){
var e = jQuery(this$);
var seq__14328 = cljs.core.seq(kvs);
var chunk__14330 = null;
var count__14331 = (0);
var i__14332 = (0);
while(true){
if((i__14332 < count__14331)){
var vec__14334 = chunk__14330.cljs$core$IIndexed$_nth$arity$2(null,i__14332);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14334,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14334,(1),null);
var k_14344__$1 = cljs.core.name(k);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(false,v)){
e.removeAttr(k_14344__$1);
} else {
e.attr(k_14344__$1,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(true,v))?k_14344__$1:v));
}

var G__14345 = seq__14328;
var G__14346 = chunk__14330;
var G__14347 = count__14331;
var G__14348 = (i__14332 + (1));
seq__14328 = G__14345;
chunk__14330 = G__14346;
count__14331 = G__14347;
i__14332 = G__14348;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq(seq__14328);
if(temp__4657__auto__){
var seq__14328__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__14328__$1)){
var c__7687__auto__ = cljs.core.chunk_first(seq__14328__$1);
var G__14349 = cljs.core.chunk_rest(seq__14328__$1);
var G__14350 = c__7687__auto__;
var G__14351 = cljs.core.count(c__7687__auto__);
var G__14352 = (0);
seq__14328 = G__14349;
chunk__14330 = G__14350;
count__14331 = G__14351;
i__14332 = G__14352;
continue;
} else {
var vec__14337 = cljs.core.first(seq__14328__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14337,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14337,(1),null);
var k_14353__$1 = cljs.core.name(k);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(false,v)){
e.removeAttr(k_14353__$1);
} else {
e.attr(k_14353__$1,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(true,v))?k_14353__$1:v));
}

var G__14354 = cljs.core.next(seq__14328__$1);
var G__14355 = null;
var G__14356 = (0);
var G__14357 = (0);
seq__14328 = G__14354;
chunk__14330 = G__14355;
count__14331 = G__14356;
i__14332 = G__14357;
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

hoplon.jquery.set_attributes_BANG_.cljs$lang$applyTo = (function (seq14322){
var G__14323 = cljs.core.first(seq14322);
var seq14322__$1 = cljs.core.next(seq14322);
var G__14324 = cljs.core.first(seq14322__$1);
var seq14322__$2 = cljs.core.next(seq14322__$1);
var G__14325 = cljs.core.first(seq14322__$2);
var seq14322__$3 = cljs.core.next(seq14322__$2);
return hoplon.jquery.set_attributes_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__14323,G__14324,G__14325,seq14322__$3);
});

hoplon.jquery.set_attributes_BANG_.cljs$lang$maxFixedArity = (3);

hoplon.jquery.set_styles_BANG_ = (function hoplon$jquery$set_styles_BANG_(var_args){
var args14358 = [];
var len__7981__auto___14375 = arguments.length;
var i__7982__auto___14376 = (0);
while(true){
if((i__7982__auto___14376 < len__7981__auto___14375)){
args14358.push((arguments[i__7982__auto___14376]));

var G__14377 = (i__7982__auto___14376 + (1));
i__7982__auto___14376 = G__14377;
continue;
} else {
}
break;
}

var G__14364 = args14358.length;
switch (G__14364) {
case 2:
return hoplon.jquery.set_styles_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__8000__auto__ = (new cljs.core.IndexedSeq(args14358.slice((3)),(0),null));
return hoplon.jquery.set_styles_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__8000__auto__);

}
});

hoplon.jquery.set_styles_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (this$,kvs){
var e = jQuery(this$);
var seq__14365 = cljs.core.seq(kvs);
var chunk__14366 = null;
var count__14367 = (0);
var i__14368 = (0);
while(true){
if((i__14368 < count__14367)){
var vec__14369 = chunk__14366.cljs$core$IIndexed$_nth$arity$2(null,i__14368);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14369,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14369,(1),null);
e.css(cljs.core.name(k),[cljs.core.str(v)].join(''));

var G__14379 = seq__14365;
var G__14380 = chunk__14366;
var G__14381 = count__14367;
var G__14382 = (i__14368 + (1));
seq__14365 = G__14379;
chunk__14366 = G__14380;
count__14367 = G__14381;
i__14368 = G__14382;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq(seq__14365);
if(temp__4657__auto__){
var seq__14365__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__14365__$1)){
var c__7687__auto__ = cljs.core.chunk_first(seq__14365__$1);
var G__14383 = cljs.core.chunk_rest(seq__14365__$1);
var G__14384 = c__7687__auto__;
var G__14385 = cljs.core.count(c__7687__auto__);
var G__14386 = (0);
seq__14365 = G__14383;
chunk__14366 = G__14384;
count__14367 = G__14385;
i__14368 = G__14386;
continue;
} else {
var vec__14372 = cljs.core.first(seq__14365__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14372,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14372,(1),null);
e.css(cljs.core.name(k),[cljs.core.str(v)].join(''));

var G__14387 = cljs.core.next(seq__14365__$1);
var G__14388 = null;
var G__14389 = (0);
var G__14390 = (0);
seq__14365 = G__14387;
chunk__14366 = G__14388;
count__14367 = G__14389;
i__14368 = G__14390;
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

hoplon.jquery.set_styles_BANG_.cljs$lang$applyTo = (function (seq14359){
var G__14360 = cljs.core.first(seq14359);
var seq14359__$1 = cljs.core.next(seq14359);
var G__14361 = cljs.core.first(seq14359__$1);
var seq14359__$2 = cljs.core.next(seq14359__$1);
var G__14362 = cljs.core.first(seq14359__$2);
var seq14359__$3 = cljs.core.next(seq14359__$2);
return hoplon.jquery.set_styles_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__14360,G__14361,G__14362,seq14359__$3);
});

hoplon.jquery.set_styles_BANG_.cljs$lang$maxFixedArity = (3);

hoplon.jquery.text_val_BANG_ = (function hoplon$jquery$text_val_BANG_(var_args){
var args14391 = [];
var len__7981__auto___14394 = arguments.length;
var i__7982__auto___14395 = (0);
while(true){
if((i__7982__auto___14395 < len__7981__auto___14394)){
args14391.push((arguments[i__7982__auto___14395]));

var G__14396 = (i__7982__auto___14395 + (1));
i__7982__auto___14395 = G__14396;
continue;
} else {
}
break;
}

var G__14393 = args14391.length;
switch (G__14393) {
case 1:
return hoplon.jquery.text_val_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return hoplon.jquery.text_val_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args14391.length)].join('')));

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
var args14398 = [];
var len__7981__auto___14401 = arguments.length;
var i__7982__auto___14402 = (0);
while(true){
if((i__7982__auto___14402 < len__7981__auto___14401)){
args14398.push((arguments[i__7982__auto___14402]));

var G__14403 = (i__7982__auto___14402 + (1));
i__7982__auto___14402 = G__14403;
continue;
} else {
}
break;
}

var G__14400 = args14398.length;
switch (G__14400) {
case 1:
return hoplon.jquery.check_val_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return hoplon.jquery.check_val_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args14398.length)].join('')));

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
var G__14405 = elem;
var G__14406 = cljs.core.cst$kw$attr;
var G__14407 = cljs.core.PersistentArrayMap.fromArray([key,val], true, false);
return (hoplon.core.do_BANG_.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.do_BANG_.cljs$core$IFn$_invoke$arity$3(G__14405,G__14406,G__14407) : hoplon.core.do_BANG_.call(null,G__14405,G__14406,G__14407));
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
var G__14408__delegate = function (elem,_,args){
var e = jQuery(elem);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("checkbox",e.attr("type")))?hoplon.jquery.check_val_BANG_:hoplon.jquery.text_val_BANG_),e,args);
};
var G__14408 = function (elem,_,var_args){
var args = null;
if (arguments.length > 2) {
var G__14409__i = 0, G__14409__a = new Array(arguments.length -  2);
while (G__14409__i < G__14409__a.length) {G__14409__a[G__14409__i] = arguments[G__14409__i + 2]; ++G__14409__i;}
  args = new cljs.core.IndexedSeq(G__14409__a,0);
} 
return G__14408__delegate.call(this,elem,_,args);};
G__14408.cljs$lang$maxFixedArity = 2;
G__14408.cljs$lang$applyTo = (function (arglist__14410){
var elem = cljs.core.first(arglist__14410);
arglist__14410 = cljs.core.next(arglist__14410);
var _ = cljs.core.first(arglist__14410);
var args = cljs.core.rest(arglist__14410);
return G__14408__delegate(elem,_,args);
});
G__14408.cljs$core$IFn$_invoke$arity$variadic = G__14408__delegate;
return G__14408;
})()
);
hoplon.core.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$class,(function (elem,_,kvs){
var elem__$1 = jQuery(elem);
var clmap = hoplon.core.normalize_class(kvs);
var seq__14411 = cljs.core.seq(clmap);
var chunk__14412 = null;
var count__14413 = (0);
var i__14414 = (0);
while(true){
if((i__14414 < count__14413)){
var vec__14415 = chunk__14412.cljs$core$IIndexed$_nth$arity$2(null,i__14414);
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14415,(0),null);
var p_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14415,(1),null);
elem__$1.toggleClass(cljs.core.name(c),cljs.core.boolean$(p_QMARK_));

var G__14421 = seq__14411;
var G__14422 = chunk__14412;
var G__14423 = count__14413;
var G__14424 = (i__14414 + (1));
seq__14411 = G__14421;
chunk__14412 = G__14422;
count__14413 = G__14423;
i__14414 = G__14424;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq(seq__14411);
if(temp__4657__auto__){
var seq__14411__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__14411__$1)){
var c__7687__auto__ = cljs.core.chunk_first(seq__14411__$1);
var G__14425 = cljs.core.chunk_rest(seq__14411__$1);
var G__14426 = c__7687__auto__;
var G__14427 = cljs.core.count(c__7687__auto__);
var G__14428 = (0);
seq__14411 = G__14425;
chunk__14412 = G__14426;
count__14413 = G__14427;
i__14414 = G__14428;
continue;
} else {
var vec__14418 = cljs.core.first(seq__14411__$1);
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14418,(0),null);
var p_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14418,(1),null);
elem__$1.toggleClass(cljs.core.name(c),cljs.core.boolean$(p_QMARK_));

var G__14429 = cljs.core.next(seq__14411__$1);
var G__14430 = null;
var G__14431 = (0);
var G__14432 = (0);
seq__14411 = G__14429;
chunk__14412 = G__14430;
count__14413 = G__14431;
i__14414 = G__14432;
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
var G__14433 = (function (){
if(cljs.core.truth_(v)){
return jQuery(elem).focus();
} else {
return jQuery(elem).focusout();
}
});
var G__14434 = (0);
return setTimeout(G__14433,G__14434);
}));
hoplon.core.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$select,(function (elem,_,___$1){
return jQuery(elem).select();
}));
hoplon.core.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$focus_DASH_select,(function (elem,_,v){
if(cljs.core.truth_(v)){
var G__14435_14441 = elem;
var G__14436_14442 = cljs.core.cst$kw$focus;
var G__14437_14443 = v;
(hoplon.core.do_BANG_.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.do_BANG_.cljs$core$IFn$_invoke$arity$3(G__14435_14441,G__14436_14442,G__14437_14443) : hoplon.core.do_BANG_.call(null,G__14435_14441,G__14436_14442,G__14437_14443));

var G__14438 = elem;
var G__14439 = cljs.core.cst$kw$select;
var G__14440 = v;
return (hoplon.core.do_BANG_.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.do_BANG_.cljs$core$IFn$_invoke$arity$3(G__14438,G__14439,G__14440) : hoplon.core.do_BANG_.call(null,G__14438,G__14439,G__14440));
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
return (function (){var G__14444 = this$__$1.target;
return jQuery(G__14444);
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
