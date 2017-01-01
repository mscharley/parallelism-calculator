// Compiled by ClojureScript 1.9.293 {:static-fns true, :optimize-constants true}
goog.provide('hoplon.jquery');
goog.require('cljs.core');
goog.require('hoplon.core');
hoplon.jquery.set_attributes_BANG_ = (function hoplon$jquery$set_attributes_BANG_(var_args){
var args14366 = [];
var len__7981__auto___14385 = arguments.length;
var i__7982__auto___14386 = (0);
while(true){
if((i__7982__auto___14386 < len__7981__auto___14385)){
args14366.push((arguments[i__7982__auto___14386]));

var G__14387 = (i__7982__auto___14386 + (1));
i__7982__auto___14386 = G__14387;
continue;
} else {
}
break;
}

var G__14372 = args14366.length;
switch (G__14372) {
case 2:
return hoplon.jquery.set_attributes_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__8000__auto__ = (new cljs.core.IndexedSeq(args14366.slice((3)),(0),null));
return hoplon.jquery.set_attributes_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__8000__auto__);

}
});

hoplon.jquery.set_attributes_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (this$,kvs){
var e = jQuery(this$);
var seq__14373 = cljs.core.seq(kvs);
var chunk__14375 = null;
var count__14376 = (0);
var i__14377 = (0);
while(true){
if((i__14377 < count__14376)){
var vec__14379 = chunk__14375.cljs$core$IIndexed$_nth$arity$2(null,i__14377);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14379,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14379,(1),null);
var k_14389__$1 = cljs.core.name(k);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(false,v)){
e.removeAttr(k_14389__$1);
} else {
e.attr(k_14389__$1,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(true,v))?k_14389__$1:v));
}

var G__14390 = seq__14373;
var G__14391 = chunk__14375;
var G__14392 = count__14376;
var G__14393 = (i__14377 + (1));
seq__14373 = G__14390;
chunk__14375 = G__14391;
count__14376 = G__14392;
i__14377 = G__14393;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq(seq__14373);
if(temp__4657__auto__){
var seq__14373__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__14373__$1)){
var c__7687__auto__ = cljs.core.chunk_first(seq__14373__$1);
var G__14394 = cljs.core.chunk_rest(seq__14373__$1);
var G__14395 = c__7687__auto__;
var G__14396 = cljs.core.count(c__7687__auto__);
var G__14397 = (0);
seq__14373 = G__14394;
chunk__14375 = G__14395;
count__14376 = G__14396;
i__14377 = G__14397;
continue;
} else {
var vec__14382 = cljs.core.first(seq__14373__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14382,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14382,(1),null);
var k_14398__$1 = cljs.core.name(k);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(false,v)){
e.removeAttr(k_14398__$1);
} else {
e.attr(k_14398__$1,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(true,v))?k_14398__$1:v));
}

var G__14399 = cljs.core.next(seq__14373__$1);
var G__14400 = null;
var G__14401 = (0);
var G__14402 = (0);
seq__14373 = G__14399;
chunk__14375 = G__14400;
count__14376 = G__14401;
i__14377 = G__14402;
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

hoplon.jquery.set_attributes_BANG_.cljs$lang$applyTo = (function (seq14367){
var G__14368 = cljs.core.first(seq14367);
var seq14367__$1 = cljs.core.next(seq14367);
var G__14369 = cljs.core.first(seq14367__$1);
var seq14367__$2 = cljs.core.next(seq14367__$1);
var G__14370 = cljs.core.first(seq14367__$2);
var seq14367__$3 = cljs.core.next(seq14367__$2);
return hoplon.jquery.set_attributes_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__14368,G__14369,G__14370,seq14367__$3);
});

hoplon.jquery.set_attributes_BANG_.cljs$lang$maxFixedArity = (3);

hoplon.jquery.set_styles_BANG_ = (function hoplon$jquery$set_styles_BANG_(var_args){
var args14403 = [];
var len__7981__auto___14420 = arguments.length;
var i__7982__auto___14421 = (0);
while(true){
if((i__7982__auto___14421 < len__7981__auto___14420)){
args14403.push((arguments[i__7982__auto___14421]));

var G__14422 = (i__7982__auto___14421 + (1));
i__7982__auto___14421 = G__14422;
continue;
} else {
}
break;
}

var G__14409 = args14403.length;
switch (G__14409) {
case 2:
return hoplon.jquery.set_styles_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__8000__auto__ = (new cljs.core.IndexedSeq(args14403.slice((3)),(0),null));
return hoplon.jquery.set_styles_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__8000__auto__);

}
});

hoplon.jquery.set_styles_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (this$,kvs){
var e = jQuery(this$);
var seq__14410 = cljs.core.seq(kvs);
var chunk__14411 = null;
var count__14412 = (0);
var i__14413 = (0);
while(true){
if((i__14413 < count__14412)){
var vec__14414 = chunk__14411.cljs$core$IIndexed$_nth$arity$2(null,i__14413);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14414,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14414,(1),null);
e.css(cljs.core.name(k),[cljs.core.str(v)].join(''));

var G__14424 = seq__14410;
var G__14425 = chunk__14411;
var G__14426 = count__14412;
var G__14427 = (i__14413 + (1));
seq__14410 = G__14424;
chunk__14411 = G__14425;
count__14412 = G__14426;
i__14413 = G__14427;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq(seq__14410);
if(temp__4657__auto__){
var seq__14410__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__14410__$1)){
var c__7687__auto__ = cljs.core.chunk_first(seq__14410__$1);
var G__14428 = cljs.core.chunk_rest(seq__14410__$1);
var G__14429 = c__7687__auto__;
var G__14430 = cljs.core.count(c__7687__auto__);
var G__14431 = (0);
seq__14410 = G__14428;
chunk__14411 = G__14429;
count__14412 = G__14430;
i__14413 = G__14431;
continue;
} else {
var vec__14417 = cljs.core.first(seq__14410__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14417,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14417,(1),null);
e.css(cljs.core.name(k),[cljs.core.str(v)].join(''));

var G__14432 = cljs.core.next(seq__14410__$1);
var G__14433 = null;
var G__14434 = (0);
var G__14435 = (0);
seq__14410 = G__14432;
chunk__14411 = G__14433;
count__14412 = G__14434;
i__14413 = G__14435;
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

hoplon.jquery.set_styles_BANG_.cljs$lang$applyTo = (function (seq14404){
var G__14405 = cljs.core.first(seq14404);
var seq14404__$1 = cljs.core.next(seq14404);
var G__14406 = cljs.core.first(seq14404__$1);
var seq14404__$2 = cljs.core.next(seq14404__$1);
var G__14407 = cljs.core.first(seq14404__$2);
var seq14404__$3 = cljs.core.next(seq14404__$2);
return hoplon.jquery.set_styles_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__14405,G__14406,G__14407,seq14404__$3);
});

hoplon.jquery.set_styles_BANG_.cljs$lang$maxFixedArity = (3);

hoplon.jquery.text_val_BANG_ = (function hoplon$jquery$text_val_BANG_(var_args){
var args14436 = [];
var len__7981__auto___14439 = arguments.length;
var i__7982__auto___14440 = (0);
while(true){
if((i__7982__auto___14440 < len__7981__auto___14439)){
args14436.push((arguments[i__7982__auto___14440]));

var G__14441 = (i__7982__auto___14440 + (1));
i__7982__auto___14440 = G__14441;
continue;
} else {
}
break;
}

var G__14438 = args14436.length;
switch (G__14438) {
case 1:
return hoplon.jquery.text_val_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return hoplon.jquery.text_val_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args14436.length)].join('')));

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
var args14443 = [];
var len__7981__auto___14446 = arguments.length;
var i__7982__auto___14447 = (0);
while(true){
if((i__7982__auto___14447 < len__7981__auto___14446)){
args14443.push((arguments[i__7982__auto___14447]));

var G__14448 = (i__7982__auto___14447 + (1));
i__7982__auto___14447 = G__14448;
continue;
} else {
}
break;
}

var G__14445 = args14443.length;
switch (G__14445) {
case 1:
return hoplon.jquery.check_val_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return hoplon.jquery.check_val_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args14443.length)].join('')));

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
var G__14450 = elem;
var G__14451 = cljs.core.cst$kw$attr;
var G__14452 = cljs.core.PersistentArrayMap.fromArray([key,val], true, false);
return (hoplon.core.do_BANG_.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.do_BANG_.cljs$core$IFn$_invoke$arity$3(G__14450,G__14451,G__14452) : hoplon.core.do_BANG_.call(null,G__14450,G__14451,G__14452));
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
var G__14453__delegate = function (elem,_,args){
var e = jQuery(elem);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("checkbox",e.attr("type")))?hoplon.jquery.check_val_BANG_:hoplon.jquery.text_val_BANG_),e,args);
};
var G__14453 = function (elem,_,var_args){
var args = null;
if (arguments.length > 2) {
var G__14454__i = 0, G__14454__a = new Array(arguments.length -  2);
while (G__14454__i < G__14454__a.length) {G__14454__a[G__14454__i] = arguments[G__14454__i + 2]; ++G__14454__i;}
  args = new cljs.core.IndexedSeq(G__14454__a,0);
} 
return G__14453__delegate.call(this,elem,_,args);};
G__14453.cljs$lang$maxFixedArity = 2;
G__14453.cljs$lang$applyTo = (function (arglist__14455){
var elem = cljs.core.first(arglist__14455);
arglist__14455 = cljs.core.next(arglist__14455);
var _ = cljs.core.first(arglist__14455);
var args = cljs.core.rest(arglist__14455);
return G__14453__delegate(elem,_,args);
});
G__14453.cljs$core$IFn$_invoke$arity$variadic = G__14453__delegate;
return G__14453;
})()
);
hoplon.core.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$class,(function (elem,_,kvs){
var elem__$1 = jQuery(elem);
var clmap = hoplon.core.normalize_class(kvs);
var seq__14456 = cljs.core.seq(clmap);
var chunk__14457 = null;
var count__14458 = (0);
var i__14459 = (0);
while(true){
if((i__14459 < count__14458)){
var vec__14460 = chunk__14457.cljs$core$IIndexed$_nth$arity$2(null,i__14459);
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14460,(0),null);
var p_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14460,(1),null);
elem__$1.toggleClass(cljs.core.name(c),cljs.core.boolean$(p_QMARK_));

var G__14466 = seq__14456;
var G__14467 = chunk__14457;
var G__14468 = count__14458;
var G__14469 = (i__14459 + (1));
seq__14456 = G__14466;
chunk__14457 = G__14467;
count__14458 = G__14468;
i__14459 = G__14469;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq(seq__14456);
if(temp__4657__auto__){
var seq__14456__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__14456__$1)){
var c__7687__auto__ = cljs.core.chunk_first(seq__14456__$1);
var G__14470 = cljs.core.chunk_rest(seq__14456__$1);
var G__14471 = c__7687__auto__;
var G__14472 = cljs.core.count(c__7687__auto__);
var G__14473 = (0);
seq__14456 = G__14470;
chunk__14457 = G__14471;
count__14458 = G__14472;
i__14459 = G__14473;
continue;
} else {
var vec__14463 = cljs.core.first(seq__14456__$1);
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14463,(0),null);
var p_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14463,(1),null);
elem__$1.toggleClass(cljs.core.name(c),cljs.core.boolean$(p_QMARK_));

var G__14474 = cljs.core.next(seq__14456__$1);
var G__14475 = null;
var G__14476 = (0);
var G__14477 = (0);
seq__14456 = G__14474;
chunk__14457 = G__14475;
count__14458 = G__14476;
i__14459 = G__14477;
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
var G__14478 = (function (){
if(cljs.core.truth_(v)){
return jQuery(elem).focus();
} else {
return jQuery(elem).focusout();
}
});
var G__14479 = (0);
return setTimeout(G__14478,G__14479);
}));
hoplon.core.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$select,(function (elem,_,___$1){
return jQuery(elem).select();
}));
hoplon.core.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$focus_DASH_select,(function (elem,_,v){
if(cljs.core.truth_(v)){
var G__14480_14486 = elem;
var G__14481_14487 = cljs.core.cst$kw$focus;
var G__14482_14488 = v;
(hoplon.core.do_BANG_.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.do_BANG_.cljs$core$IFn$_invoke$arity$3(G__14480_14486,G__14481_14487,G__14482_14488) : hoplon.core.do_BANG_.call(null,G__14480_14486,G__14481_14487,G__14482_14488));

var G__14483 = elem;
var G__14484 = cljs.core.cst$kw$select;
var G__14485 = v;
return (hoplon.core.do_BANG_.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.do_BANG_.cljs$core$IFn$_invoke$arity$3(G__14483,G__14484,G__14485) : hoplon.core.do_BANG_.call(null,G__14483,G__14484,G__14485));
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
return (function (){var G__14489 = this$__$1.target;
return jQuery(G__14489);
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
