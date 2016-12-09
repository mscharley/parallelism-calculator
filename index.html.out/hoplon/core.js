// Compiled by ClojureScript 1.9.293 {:static-fns true, :optimize-constants true}
goog.provide('hoplon.core');
goog.require('cljs.core');
goog.require('goog.Uri');
goog.require('goog.object');
goog.require('clojure.set');
goog.require('javelin.core');
goog.require('cljs.reader');
goog.require('clojure.string');



cljs.core.enable_console_print_BANG_();
/**
 * Is the application running in a prerendering container (eg. PhantomJS via
 *   the prerender task)?
 */
hoplon.core.prerendering_QMARK_ = (new goog.Uri(window.location.href)).getParameterValue("prerendering");
/**
 * Experimental.
 */
hoplon.core.static_elements = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p1__13942_SHARP_,p2__13943_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__13942_SHARP_,p2__13943_SHARP_.getAttribute("static-id"),p2__13943_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,document.querySelector("[static-id]"));
/**
 * Adds f as a watcher to ref and evaluates (f init @ref) once. The watcher
 *   f is a function of two arguments: the previous and next values. If init is
 *   not provided the default (nil) will be used.
 */
hoplon.core.do_watch = (function hoplon$core$do_watch(var_args){
var args13944 = [];
var len__7981__auto___13949 = arguments.length;
var i__7982__auto___13950 = (0);
while(true){
if((i__7982__auto___13950 < len__7981__auto___13949)){
args13944.push((arguments[i__7982__auto___13950]));

var G__13951 = (i__7982__auto___13950 + (1));
i__7982__auto___13950 = G__13951;
continue;
} else {
}
break;
}

var G__13946 = args13944.length;
switch (G__13946) {
case 2:
return hoplon.core.do_watch.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return hoplon.core.do_watch.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args13944.length)].join('')));

}
});

hoplon.core.do_watch.cljs$core$IFn$_invoke$arity$2 = (function (ref,f){
return hoplon.core.do_watch.cljs$core$IFn$_invoke$arity$3(ref,null,f);
});

hoplon.core.do_watch.cljs$core$IFn$_invoke$arity$3 = (function (ref,init,f){
var k = cljs.core.gensym.cljs$core$IFn$_invoke$arity$0();
var G__13947_13953 = init;
var G__13948_13954 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(ref) : cljs.core.deref.call(null,ref));
(f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__13947_13953,G__13948_13954) : f.call(null,G__13947_13953,G__13948_13954));

cljs.core.add_watch(ref,k,((function (k){
return (function (_,___$1,old,new$){
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(old,new$) : f.call(null,old,new$));
});})(k))
);

return k;
});

hoplon.core.do_watch.cljs$lang$maxFixedArity = 3;

/**
 * Experimental.
 */
hoplon.core.bust_cache = (function hoplon$core$bust_cache(path){
var vec__13961 = cljs.core.reverse(clojure.string.split.cljs$core$IFn$_invoke$arity$2(path,/\//));
var seq__13962 = cljs.core.seq(vec__13961);
var first__13963 = cljs.core.first(seq__13962);
var seq__13962__$1 = cljs.core.next(seq__13962);
var f = first__13963;
var more = seq__13962__$1;
var vec__13964 = clojure.string.split.cljs$core$IFn$_invoke$arity$3(f,/\./,(2));
var f1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13964,(0),null);
var f2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13964,(1),null);
return clojure.string.join.cljs$core$IFn$_invoke$arity$2("/",cljs.core.reverse(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(more,clojure.string.join.cljs$core$IFn$_invoke$arity$2(".",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str(f1),cljs.core.str("."),cljs.core.str("0507e6acac764db985fa58b5325d558f")].join(''),f2], null)))));
});
/**
 * Class normalization for attribute providers.
 */
hoplon.core.normalize_class = (function hoplon$core$normalize_class(kvs){
var __GT_map = (function (p1__13967_SHARP_){
return cljs.core.zipmap(p1__13967_SHARP_,cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(true));
});
if(cljs.core.map_QMARK_(kvs)){
return kvs;
} else {
return __GT_map(((typeof kvs === 'string')?kvs.split(/\s+/):cljs.core.seq(kvs)));
}
});
hoplon.core.child_vec = (function hoplon$core$child_vec(this$){
var x = this$.childNodes;
var l = x.length;
var i = (0);
var ret = cljs.core.transient$(cljs.core.PersistentVector.EMPTY);
while(true){
var or__6873__auto__ = (function (){var and__6861__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(i,l);
if(and__6861__auto__){
return cljs.core.persistent_BANG_(ret);
} else {
return and__6861__auto__;
}
})();
if(cljs.core.truth_(or__6873__auto__)){
return or__6873__auto__;
} else {
var G__13968 = (i + (1));
var G__13969 = cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(ret,x.item(i));
i = G__13968;
ret = G__13969;
continue;
}
break;
}
});

/**
 * @interface
 */
hoplon.core.INode = function(){};

hoplon.core.node = (function hoplon$core$node(this$){
if((!((this$ == null))) && (!((this$.hoplon$core$INode$node$arity$1 == null)))){
return this$.hoplon$core$INode$node$arity$1(this$);
} else {
var x__7536__auto__ = (((this$ == null))?null:this$);
var m__7537__auto__ = (hoplon.core.node[goog.typeOf(x__7536__auto__)]);
if(!((m__7537__auto__ == null))){
return (m__7537__auto__.cljs$core$IFn$_invoke$arity$1 ? m__7537__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__7537__auto__.call(null,this$));
} else {
var m__7537__auto____$1 = (hoplon.core.node["_"]);
if(!((m__7537__auto____$1 == null))){
return (m__7537__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__7537__auto____$1.cljs$core$IFn$_invoke$arity$1(this$) : m__7537__auto____$1.call(null,this$));
} else {
throw cljs.core.missing_protocol("INode.node",this$);
}
}
}
});

(hoplon.core.INode["string"] = true);

(hoplon.core.node["string"] = (function (this$){
return (hoplon.core.$text.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.$text.cljs$core$IFn$_invoke$arity$1(this$) : hoplon.core.$text.call(null,this$));
}));
(hoplon.core.INode["number"] = true);

(hoplon.core.node["number"] = (function (this$){
var G__13970 = [cljs.core.str(this$)].join('');
return (hoplon.core.$text.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.$text.cljs$core$IFn$_invoke$arity$1(G__13970) : hoplon.core.$text.call(null,G__13970));
}));
hoplon.core.__GT_node = (function hoplon$core$__GT_node(x){
if(((!((x == null)))?(((false) || ((cljs.core.PROTOCOL_SENTINEL === x.hoplon$core$INode$)))?true:(((!x.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_(hoplon.core.INode,x):false)):cljs.core.native_satisfies_QMARK_(hoplon.core.INode,x))){
return hoplon.core.node(x);
} else {
return x;
}
});
hoplon.core.removeChild = Element.prototype.removeChild;
hoplon.core.appendChild = Element.prototype.appendChild;
hoplon.core.insertBefore = Element.prototype.insertBefore;
hoplon.core.replaceChild = Element.prototype.replaceChild;
hoplon.core.setAttribute = Element.prototype.setAttribute;
hoplon.core.merge_kids = (function hoplon$core$merge_kids(this$,_,new$){
var new$__$1 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(hoplon.core.__GT_node,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.flatten(new$)));
var new_QMARK_ = cljs.core.set(new$__$1);
var G__13999 = new$__$1;
var vec__14001 = G__13999;
var seq__14002 = cljs.core.seq(vec__14001);
var first__14003 = cljs.core.first(seq__14002);
var seq__14002__$1 = cljs.core.next(seq__14002);
var x = first__14003;
var xs = seq__14002__$1;
var G__14000 = hoplon.core.child_vec(this$);
var vec__14004 = G__14000;
var seq__14005 = cljs.core.seq(vec__14004);
var first__14006 = cljs.core.first(seq__14005);
var seq__14005__$1 = cljs.core.next(seq__14005);
var k = first__14006;
var ks = seq__14005__$1;
var kids = vec__14004;
var G__13999__$1 = G__13999;
var G__14000__$1 = G__14000;
while(true){
var vec__14007 = G__13999__$1;
var seq__14008 = cljs.core.seq(vec__14007);
var first__14009 = cljs.core.first(seq__14008);
var seq__14008__$1 = cljs.core.next(seq__14008);
var x__$1 = first__14009;
var xs__$1 = seq__14008__$1;
var vec__14010 = G__14000__$1;
var seq__14011 = cljs.core.seq(vec__14010);
var first__14012 = cljs.core.first(seq__14011);
var seq__14011__$1 = cljs.core.next(seq__14011);
var k__$1 = first__14012;
var ks__$1 = seq__14011__$1;
var kids__$1 = vec__14010;
if(cljs.core.truth_((function (){var or__6873__auto__ = x__$1;
if(cljs.core.truth_(or__6873__auto__)){
return or__6873__auto__;
} else {
return k__$1;
}
})())){
var G__14013 = xs__$1;
var G__14014 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x__$1,k__$1))?ks__$1:((cljs.core.not(k__$1))?(function (){var ks__$2 = ks__$1;
hoplon.core.appendChild.call(this$,x__$1);

return ks__$2;
})():((cljs.core.not(x__$1))?(function (){var ks__$2 = ks__$1;
if(cljs.core.truth_((new_QMARK_.cljs$core$IFn$_invoke$arity$1 ? new_QMARK_.cljs$core$IFn$_invoke$arity$1(k__$1) : new_QMARK_.call(null,k__$1)))){
} else {
hoplon.core.removeChild.call(this$,k__$1);
}

return ks__$2;
})():(function (){var kids__$2 = kids__$1;
hoplon.core.insertBefore.call(this$,x__$1,k__$1);

return kids__$2;
})()
)));
G__13999__$1 = G__14013;
G__14000__$1 = G__14014;
continue;
} else {
return null;
}
break;
}
});
hoplon.core.ensure_kids_BANG_ = (function hoplon$core$ensure_kids_BANG_(this$){
var this$__$1 = this$;
if(cljs.core.truth_(this$__$1.hoplonKids)){
} else {
var kids_14017 = (function (){var G__14016 = hoplon.core.child_vec(this$__$1);
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__14016) : cljs.core.atom.call(null,G__14016));
})();
this$__$1.hoplonKids = kids_14017;

hoplon.core.do_watch.cljs$core$IFn$_invoke$arity$2(kids_14017,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(hoplon.core.merge_kids,this$__$1));
}

return this$__$1;
});
hoplon.core.remove_all_kids_BANG_ = (function hoplon$core$remove_all_kids_BANG_(this$){
this$.hoplonKids = null;

return hoplon.core.merge_kids(this$,null,null);
});
hoplon.core.set_appendChild_BANG_ = (function hoplon$core$set_appendChild_BANG_(this$,kidfn){
return this$.appendChild = (function (x){
var this$__$1 = this;
var x__$1 = x;
hoplon.core.ensure_kids_BANG_(this$__$1);

var kids_14020 = (kidfn.cljs$core$IFn$_invoke$arity$1 ? kidfn.cljs$core$IFn$_invoke$arity$1(this$__$1) : kidfn.call(null,this$__$1));
var i_14021 = cljs.core.count((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(kids_14020) : cljs.core.deref.call(null,kids_14020)));
if(cljs.core.truth_(javelin.core.cell_QMARK_(x__$1))){
hoplon.core.do_watch.cljs$core$IFn$_invoke$arity$2(x__$1,((function (kids_14020,i_14021,x__$1,this$__$1){
return (function (p1__14019_SHARP_,p2__14018_SHARP_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(kids_14020,cljs.core.assoc,i_14021,p2__14018_SHARP_);
});})(kids_14020,i_14021,x__$1,this$__$1))
);
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(kids_14020,cljs.core.assoc,i_14021,x__$1);
}

return x__$1;
});
});
hoplon.core.set_removeChild_BANG_ = (function hoplon$core$set_removeChild_BANG_(this$,kidfn){
return this$.removeChild = (function (x){
var this$__$1 = this;
var x__$1 = x;
hoplon.core.ensure_kids_BANG_(this$__$1);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2((kidfn.cljs$core$IFn$_invoke$arity$1 ? kidfn.cljs$core$IFn$_invoke$arity$1(this$__$1) : kidfn.call(null,this$__$1)),((function (x__$1,this$__$1){
return (function (p1__14022_SHARP_){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,x__$1),p1__14022_SHARP_));
});})(x__$1,this$__$1))
);

return x__$1;
});
});
hoplon.core.set_insertBefore_BANG_ = (function hoplon$core$set_insertBefore_BANG_(this$,kidfn){
return this$.insertBefore = (function (x,y){
var this$__$1 = this;
var x__$1 = x;
hoplon.core.ensure_kids_BANG_(this$__$1);

if(cljs.core.not(y)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3((kidfn.cljs$core$IFn$_invoke$arity$1 ? kidfn.cljs$core$IFn$_invoke$arity$1(this$__$1) : kidfn.call(null,this$__$1)),cljs.core.conj,x__$1);
} else {
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(x__$1,y)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2((kidfn.cljs$core$IFn$_invoke$arity$1 ? kidfn.cljs$core$IFn$_invoke$arity$1(this$__$1) : kidfn.call(null,this$__$1)),((function (x__$1,this$__$1){
return (function (p1__14023_SHARP_){
return cljs.core.vec(cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(((function (x__$1,this$__$1){
return (function (z){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(z,y)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x__$1,z], null);
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [z], null);
}
});})(x__$1,this$__$1))
,cljs.core.array_seq([p1__14023_SHARP_], 0)));
});})(x__$1,this$__$1))
);
} else {
}
}

return x__$1;
});
});
hoplon.core.set_replaceChild_BANG_ = (function hoplon$core$set_replaceChild_BANG_(this$,kidfn){
return this$.replaceChild = (function (x,y){
var this$__$1 = this;
var y__$1 = y;
hoplon.core.ensure_kids_BANG_(this$__$1);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2((kidfn.cljs$core$IFn$_invoke$arity$1 ? kidfn.cljs$core$IFn$_invoke$arity$1(this$__$1) : kidfn.call(null,this$__$1)),((function (y__$1,this$__$1){
return (function (p1__14024_SHARP_){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (y__$1,this$__$1){
return (function (z){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(z,y__$1)){
return x;
} else {
return z;
}
});})(y__$1,this$__$1))
,p1__14024_SHARP_);
});})(y__$1,this$__$1))
);

return y__$1;
});
});
hoplon.core.set_setAttribute_BANG_ = (function hoplon$core$set_setAttribute_BANG_(this$,attrfn){
return this$.setAttribute = (function (k,v){
var this$__$1 = this;
var _ = undefined;
var kk_14025 = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(k);
var attr_14026 = (attrfn.cljs$core$IFn$_invoke$arity$1 ? attrfn.cljs$core$IFn$_invoke$arity$1(this$__$1) : attrfn.call(null,this$__$1));
var has_QMARK__14027 = (function (){var and__6861__auto__ = attr_14026;
if(cljs.core.truth_(and__6861__auto__)){
return cljs.core.contains_QMARK_((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(attr_14026) : cljs.core.deref.call(null,attr_14026)),kk_14025);
} else {
return and__6861__auto__;
}
})();
if(cljs.core.truth_(has_QMARK__14027)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(attr_14026,cljs.core.assoc,kk_14025,v);
} else {
hoplon.core.setAttribute.call(this$__$1,k,v);
}

return _;
});
});
hoplon.core.set_appendChild_BANG_(Element.prototype,(function (p1__14028_SHARP_){
return p1__14028_SHARP_.hoplonKids;
}));
hoplon.core.set_removeChild_BANG_(Element.prototype,(function (p1__14029_SHARP_){
return p1__14029_SHARP_.hoplonKids;
}));
hoplon.core.set_insertBefore_BANG_(Element.prototype,(function (p1__14030_SHARP_){
return p1__14030_SHARP_.hoplonKids;
}));
hoplon.core.set_replaceChild_BANG_(Element.prototype,(function (p1__14031_SHARP_){
return p1__14031_SHARP_.hoplonKids;
}));

/**
 * @interface
 */
hoplon.core.ICustomElement = function(){};

hoplon.core._set_attributes_BANG_ = (function hoplon$core$_set_attributes_BANG_(this$,kvs){
if((!((this$ == null))) && (!((this$.hoplon$core$ICustomElement$_set_attributes_BANG_$arity$2 == null)))){
return this$.hoplon$core$ICustomElement$_set_attributes_BANG_$arity$2(this$,kvs);
} else {
var x__7536__auto__ = (((this$ == null))?null:this$);
var m__7537__auto__ = (hoplon.core._set_attributes_BANG_[goog.typeOf(x__7536__auto__)]);
if(!((m__7537__auto__ == null))){
return (m__7537__auto__.cljs$core$IFn$_invoke$arity$2 ? m__7537__auto__.cljs$core$IFn$_invoke$arity$2(this$,kvs) : m__7537__auto__.call(null,this$,kvs));
} else {
var m__7537__auto____$1 = (hoplon.core._set_attributes_BANG_["_"]);
if(!((m__7537__auto____$1 == null))){
return (m__7537__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__7537__auto____$1.cljs$core$IFn$_invoke$arity$2(this$,kvs) : m__7537__auto____$1.call(null,this$,kvs));
} else {
throw cljs.core.missing_protocol("ICustomElement.-set-attributes!",this$);
}
}
}
});

hoplon.core._set_styles_BANG_ = (function hoplon$core$_set_styles_BANG_(this$,kvs){
if((!((this$ == null))) && (!((this$.hoplon$core$ICustomElement$_set_styles_BANG_$arity$2 == null)))){
return this$.hoplon$core$ICustomElement$_set_styles_BANG_$arity$2(this$,kvs);
} else {
var x__7536__auto__ = (((this$ == null))?null:this$);
var m__7537__auto__ = (hoplon.core._set_styles_BANG_[goog.typeOf(x__7536__auto__)]);
if(!((m__7537__auto__ == null))){
return (m__7537__auto__.cljs$core$IFn$_invoke$arity$2 ? m__7537__auto__.cljs$core$IFn$_invoke$arity$2(this$,kvs) : m__7537__auto__.call(null,this$,kvs));
} else {
var m__7537__auto____$1 = (hoplon.core._set_styles_BANG_["_"]);
if(!((m__7537__auto____$1 == null))){
return (m__7537__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__7537__auto____$1.cljs$core$IFn$_invoke$arity$2(this$,kvs) : m__7537__auto____$1.call(null,this$,kvs));
} else {
throw cljs.core.missing_protocol("ICustomElement.-set-styles!",this$);
}
}
}
});

hoplon.core._append_child_BANG_ = (function hoplon$core$_append_child_BANG_(this$,child){
if((!((this$ == null))) && (!((this$.hoplon$core$ICustomElement$_append_child_BANG_$arity$2 == null)))){
return this$.hoplon$core$ICustomElement$_append_child_BANG_$arity$2(this$,child);
} else {
var x__7536__auto__ = (((this$ == null))?null:this$);
var m__7537__auto__ = (hoplon.core._append_child_BANG_[goog.typeOf(x__7536__auto__)]);
if(!((m__7537__auto__ == null))){
return (m__7537__auto__.cljs$core$IFn$_invoke$arity$2 ? m__7537__auto__.cljs$core$IFn$_invoke$arity$2(this$,child) : m__7537__auto__.call(null,this$,child));
} else {
var m__7537__auto____$1 = (hoplon.core._append_child_BANG_["_"]);
if(!((m__7537__auto____$1 == null))){
return (m__7537__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__7537__auto____$1.cljs$core$IFn$_invoke$arity$2(this$,child) : m__7537__auto____$1.call(null,this$,child));
} else {
throw cljs.core.missing_protocol("ICustomElement.-append-child!",this$);
}
}
}
});

hoplon.core._remove_child_BANG_ = (function hoplon$core$_remove_child_BANG_(this$,child){
if((!((this$ == null))) && (!((this$.hoplon$core$ICustomElement$_remove_child_BANG_$arity$2 == null)))){
return this$.hoplon$core$ICustomElement$_remove_child_BANG_$arity$2(this$,child);
} else {
var x__7536__auto__ = (((this$ == null))?null:this$);
var m__7537__auto__ = (hoplon.core._remove_child_BANG_[goog.typeOf(x__7536__auto__)]);
if(!((m__7537__auto__ == null))){
return (m__7537__auto__.cljs$core$IFn$_invoke$arity$2 ? m__7537__auto__.cljs$core$IFn$_invoke$arity$2(this$,child) : m__7537__auto__.call(null,this$,child));
} else {
var m__7537__auto____$1 = (hoplon.core._remove_child_BANG_["_"]);
if(!((m__7537__auto____$1 == null))){
return (m__7537__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__7537__auto____$1.cljs$core$IFn$_invoke$arity$2(this$,child) : m__7537__auto____$1.call(null,this$,child));
} else {
throw cljs.core.missing_protocol("ICustomElement.-remove-child!",this$);
}
}
}
});

hoplon.core._replace_child_BANG_ = (function hoplon$core$_replace_child_BANG_(this$,new$,existing){
if((!((this$ == null))) && (!((this$.hoplon$core$ICustomElement$_replace_child_BANG_$arity$3 == null)))){
return this$.hoplon$core$ICustomElement$_replace_child_BANG_$arity$3(this$,new$,existing);
} else {
var x__7536__auto__ = (((this$ == null))?null:this$);
var m__7537__auto__ = (hoplon.core._replace_child_BANG_[goog.typeOf(x__7536__auto__)]);
if(!((m__7537__auto__ == null))){
return (m__7537__auto__.cljs$core$IFn$_invoke$arity$3 ? m__7537__auto__.cljs$core$IFn$_invoke$arity$3(this$,new$,existing) : m__7537__auto__.call(null,this$,new$,existing));
} else {
var m__7537__auto____$1 = (hoplon.core._replace_child_BANG_["_"]);
if(!((m__7537__auto____$1 == null))){
return (m__7537__auto____$1.cljs$core$IFn$_invoke$arity$3 ? m__7537__auto____$1.cljs$core$IFn$_invoke$arity$3(this$,new$,existing) : m__7537__auto____$1.call(null,this$,new$,existing));
} else {
throw cljs.core.missing_protocol("ICustomElement.-replace-child!",this$);
}
}
}
});

hoplon.core._insert_before_BANG_ = (function hoplon$core$_insert_before_BANG_(this$,new$,existing){
if((!((this$ == null))) && (!((this$.hoplon$core$ICustomElement$_insert_before_BANG_$arity$3 == null)))){
return this$.hoplon$core$ICustomElement$_insert_before_BANG_$arity$3(this$,new$,existing);
} else {
var x__7536__auto__ = (((this$ == null))?null:this$);
var m__7537__auto__ = (hoplon.core._insert_before_BANG_[goog.typeOf(x__7536__auto__)]);
if(!((m__7537__auto__ == null))){
return (m__7537__auto__.cljs$core$IFn$_invoke$arity$3 ? m__7537__auto__.cljs$core$IFn$_invoke$arity$3(this$,new$,existing) : m__7537__auto__.call(null,this$,new$,existing));
} else {
var m__7537__auto____$1 = (hoplon.core._insert_before_BANG_["_"]);
if(!((m__7537__auto____$1 == null))){
return (m__7537__auto____$1.cljs$core$IFn$_invoke$arity$3 ? m__7537__auto____$1.cljs$core$IFn$_invoke$arity$3(this$,new$,existing) : m__7537__auto____$1.call(null,this$,new$,existing));
} else {
throw cljs.core.missing_protocol("ICustomElement.-insert-before!",this$);
}
}
}
});

hoplon.core.set_attributes_BANG_ = (function hoplon$core$set_attributes_BANG_(var_args){
var args14032 = [];
var len__7981__auto___14039 = arguments.length;
var i__7982__auto___14040 = (0);
while(true){
if((i__7982__auto___14040 < len__7981__auto___14039)){
args14032.push((arguments[i__7982__auto___14040]));

var G__14041 = (i__7982__auto___14040 + (1));
i__7982__auto___14040 = G__14041;
continue;
} else {
}
break;
}

var G__14038 = args14032.length;
switch (G__14038) {
case 2:
return hoplon.core.set_attributes_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__8000__auto__ = (new cljs.core.IndexedSeq(args14032.slice((3)),(0),null));
return hoplon.core.set_attributes_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__8000__auto__);

}
});

hoplon.core.set_attributes_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (this$,kvs){
return hoplon.core._set_attributes_BANG_(this$,kvs);
});

hoplon.core.set_attributes_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (this$,k,v,kvs){
return hoplon.core.set_attributes_BANG_.cljs$core$IFn$_invoke$arity$2(this$,cljs.core.apply.cljs$core$IFn$_invoke$arity$4(cljs.core.hash_map,k,v,kvs));
});

hoplon.core.set_attributes_BANG_.cljs$lang$applyTo = (function (seq14033){
var G__14034 = cljs.core.first(seq14033);
var seq14033__$1 = cljs.core.next(seq14033);
var G__14035 = cljs.core.first(seq14033__$1);
var seq14033__$2 = cljs.core.next(seq14033__$1);
var G__14036 = cljs.core.first(seq14033__$2);
var seq14033__$3 = cljs.core.next(seq14033__$2);
return hoplon.core.set_attributes_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__14034,G__14035,G__14036,seq14033__$3);
});

hoplon.core.set_attributes_BANG_.cljs$lang$maxFixedArity = (3);

hoplon.core.set_styles_BANG_ = (function hoplon$core$set_styles_BANG_(var_args){
var args14043 = [];
var len__7981__auto___14050 = arguments.length;
var i__7982__auto___14051 = (0);
while(true){
if((i__7982__auto___14051 < len__7981__auto___14050)){
args14043.push((arguments[i__7982__auto___14051]));

var G__14052 = (i__7982__auto___14051 + (1));
i__7982__auto___14051 = G__14052;
continue;
} else {
}
break;
}

var G__14049 = args14043.length;
switch (G__14049) {
case 2:
return hoplon.core.set_styles_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__8000__auto__ = (new cljs.core.IndexedSeq(args14043.slice((3)),(0),null));
return hoplon.core.set_styles_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__8000__auto__);

}
});

hoplon.core.set_styles_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (this$,kvs){
return hoplon.core._set_styles_BANG_(this$,kvs);
});

hoplon.core.set_styles_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (this$,k,v,kvs){
return hoplon.core.set_styles_BANG_.cljs$core$IFn$_invoke$arity$2(this$,cljs.core.apply.cljs$core$IFn$_invoke$arity$4(cljs.core.hash_map,k,v,kvs));
});

hoplon.core.set_styles_BANG_.cljs$lang$applyTo = (function (seq14044){
var G__14045 = cljs.core.first(seq14044);
var seq14044__$1 = cljs.core.next(seq14044);
var G__14046 = cljs.core.first(seq14044__$1);
var seq14044__$2 = cljs.core.next(seq14044__$1);
var G__14047 = cljs.core.first(seq14044__$2);
var seq14044__$3 = cljs.core.next(seq14044__$2);
return hoplon.core.set_styles_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__14045,G__14046,G__14047,seq14044__$3);
});

hoplon.core.set_styles_BANG_.cljs$lang$maxFixedArity = (3);

hoplon.core.append_child_BANG_ = (function hoplon$core$append_child_BANG_(this$,child){
return hoplon.core._append_child_BANG_(this$,child);
});
hoplon.core.remove_child_BANG_ = (function hoplon$core$remove_child_BANG_(this$,child){
return hoplon.core._remove_child_BANG_(this$,child);
});
hoplon.core.replace_child_BANG_ = (function hoplon$core$replace_child_BANG_(this$,new$,existing){
return hoplon.core._replace_child_BANG_(this$,new$,existing);
});
hoplon.core.insert_before_BANG_ = (function hoplon$core$insert_before_BANG_(this$,new$,existing){
return hoplon.core._insert_before_BANG_(this$,new$,existing);
});

/**
 * @interface
 */
hoplon.core.ICustomAttribute = function(){};

hoplon.core._attr_BANG_ = (function hoplon$core$_attr_BANG_(this$,elem,value){
if((!((this$ == null))) && (!((this$.hoplon$core$ICustomAttribute$_attr_BANG_$arity$3 == null)))){
return this$.hoplon$core$ICustomAttribute$_attr_BANG_$arity$3(this$,elem,value);
} else {
var x__7536__auto__ = (((this$ == null))?null:this$);
var m__7537__auto__ = (hoplon.core._attr_BANG_[goog.typeOf(x__7536__auto__)]);
if(!((m__7537__auto__ == null))){
return (m__7537__auto__.cljs$core$IFn$_invoke$arity$3 ? m__7537__auto__.cljs$core$IFn$_invoke$arity$3(this$,elem,value) : m__7537__auto__.call(null,this$,elem,value));
} else {
var m__7537__auto____$1 = (hoplon.core._attr_BANG_["_"]);
if(!((m__7537__auto____$1 == null))){
return (m__7537__auto____$1.cljs$core$IFn$_invoke$arity$3 ? m__7537__auto____$1.cljs$core$IFn$_invoke$arity$3(this$,elem,value) : m__7537__auto____$1.call(null,this$,elem,value));
} else {
throw cljs.core.missing_protocol("ICustomAttribute.-attr!",this$);
}
}
}
});

hoplon.core.attribute_QMARK_ = (function hoplon$core$attribute_QMARK_(this$){
if(!((this$ == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === this$.hoplon$core$ICustomAttribute$))){
return true;
} else {
if((!this$.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(hoplon.core.ICustomAttribute,this$);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(hoplon.core.ICustomAttribute,this$);
}
});
cljs.core.Keyword.prototype.hoplon$core$ICustomAttribute$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.Keyword.prototype.hoplon$core$ICustomAttribute$_attr_BANG_$arity$3 = (function (this$,elem,value){
var this$__$1 = this;
if(cljs.core.truth_(javelin.core.cell_QMARK_(value))){
return hoplon.core.do_watch.cljs$core$IFn$_invoke$arity$2(value,((function (this$__$1){
return (function (p1__14057_SHARP_,p2__14056_SHARP_){
return (hoplon.core.do_BANG_.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.do_BANG_.cljs$core$IFn$_invoke$arity$3(elem,this$__$1,p2__14056_SHARP_) : hoplon.core.do_BANG_.call(null,elem,this$__$1,p2__14056_SHARP_));
});})(this$__$1))
);
} else {
if(cljs.core.fn_QMARK_(value)){
return (hoplon.core.on_BANG_.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.on_BANG_.cljs$core$IFn$_invoke$arity$3(elem,this$__$1,value) : hoplon.core.on_BANG_.call(null,elem,this$__$1,value));
} else {
return (hoplon.core.do_BANG_.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.do_BANG_.cljs$core$IFn$_invoke$arity$3(elem,this$__$1,value) : hoplon.core.do_BANG_.call(null,elem,this$__$1,value));

}
}
});
hoplon.core.is_ie8 = cljs.core.not(goog.object.get(window,"Node"));
hoplon.core._head_STAR_ = ((cljs.core.not(hoplon.core.is_ie8))?(function (p1__14058_SHARP_){
return p1__14058_SHARP_.head;
}):(function (p1__14059_SHARP_){
return p1__14059_SHARP_.documentElement.firstChild;
}));
hoplon.core.vector_QMARK__STAR_ = ((cljs.core.not(hoplon.core.is_ie8))?cljs.core.vector_QMARK_:(function (p1__14060_SHARP_){
try{return cljs.core.vector_QMARK_(p1__14060_SHARP_);
}catch (e14061){if((e14061 instanceof Error)){
var _ = e14061;
return null;
} else {
throw e14061;

}
}}));
hoplon.core.seq_QMARK__STAR_ = ((cljs.core.not(hoplon.core.is_ie8))?cljs.core.seq_QMARK_:(function (p1__14062_SHARP_){
try{return cljs.core.seq_QMARK_(p1__14062_SHARP_);
}catch (e14063){if((e14063 instanceof Error)){
var _ = e14063;
return null;
} else {
throw e14063;

}
}}));
hoplon.core.safe_nth = (function hoplon$core$safe_nth(var_args){
var args14064 = [];
var len__7981__auto___14068 = arguments.length;
var i__7982__auto___14069 = (0);
while(true){
if((i__7982__auto___14069 < len__7981__auto___14068)){
args14064.push((arguments[i__7982__auto___14069]));

var G__14070 = (i__7982__auto___14069 + (1));
i__7982__auto___14069 = G__14070;
continue;
} else {
}
break;
}

var G__14066 = args14064.length;
switch (G__14066) {
case 2:
return hoplon.core.safe_nth.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return hoplon.core.safe_nth.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args14064.length)].join('')));

}
});

hoplon.core.safe_nth.cljs$core$IFn$_invoke$arity$2 = (function (coll,index){
return hoplon.core.safe_nth.cljs$core$IFn$_invoke$arity$3(coll,index,null);
});

hoplon.core.safe_nth.cljs$core$IFn$_invoke$arity$3 = (function (coll,index,not_found){
try{return cljs.core.nth.cljs$core$IFn$_invoke$arity$3(coll,index,not_found);
}catch (e14067){if((e14067 instanceof Error)){
var _ = e14067;
return not_found;
} else {
throw e14067;

}
}});

hoplon.core.safe_nth.cljs$lang$maxFixedArity = 3;

hoplon.core.timeout = (function hoplon$core$timeout(var_args){
var args14072 = [];
var len__7981__auto___14075 = arguments.length;
var i__7982__auto___14076 = (0);
while(true){
if((i__7982__auto___14076 < len__7981__auto___14075)){
args14072.push((arguments[i__7982__auto___14076]));

var G__14077 = (i__7982__auto___14076 + (1));
i__7982__auto___14076 = G__14077;
continue;
} else {
}
break;
}

var G__14074 = args14072.length;
switch (G__14074) {
case 1:
return hoplon.core.timeout.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return hoplon.core.timeout.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args14072.length)].join('')));

}
});

hoplon.core.timeout.cljs$core$IFn$_invoke$arity$1 = (function (f){
return hoplon.core.timeout.cljs$core$IFn$_invoke$arity$2(f,(0));
});

hoplon.core.timeout.cljs$core$IFn$_invoke$arity$2 = (function (f,t){
return window.setTimeout(f,t);
});

hoplon.core.timeout.cljs$lang$maxFixedArity = 2;

hoplon.core.when_dom = (function hoplon$core$when_dom(this$,f){
if(!((this$ instanceof Element))){
return (f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));
} else {
return hoplon.core.timeout.cljs$core$IFn$_invoke$arity$1((function hoplon$core$when_dom_$_doit(){
if(cljs.core.truth_(document.documentElement.contains(this$))){
return (f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));
} else {
return hoplon.core.timeout.cljs$core$IFn$_invoke$arity$2(hoplon$core$when_dom_$_doit,(20));
}
}));
}
});
hoplon.core.parse_args = (function hoplon$core$parse_args(args){
var attr = cljs.core.transient$(cljs.core.PersistentArrayMap.EMPTY);
var kids = cljs.core.transient$(cljs.core.PersistentVector.EMPTY);
var G__14095 = args;
var vec__14096 = G__14095;
var seq__14097 = cljs.core.seq(vec__14096);
var first__14098 = cljs.core.first(seq__14097);
var seq__14097__$1 = cljs.core.next(seq__14097);
var arg = first__14098;
var args__$1 = seq__14097__$1;
var attr__$1 = attr;
var kids__$1 = kids;
var G__14095__$1 = G__14095;
while(true){
var attr__$2 = attr__$1;
var kids__$2 = kids__$1;
var vec__14099 = G__14095__$1;
var seq__14100 = cljs.core.seq(vec__14099);
var first__14101 = cljs.core.first(seq__14100);
var seq__14100__$1 = cljs.core.next(seq__14100);
var arg__$1 = first__14101;
var args__$2 = seq__14100__$1;
if(cljs.core.not(arg__$1)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.persistent_BANG_(attr__$2),cljs.core.persistent_BANG_(kids__$2)], null);
} else {
if(cljs.core.map_QMARK_(arg__$1)){
var G__14102 = cljs.core.reduce_kv(((function (attr__$1,kids__$1,G__14095__$1,attr__$2,kids__$2,vec__14099,seq__14100,first__14101,seq__14100__$1,arg__$1,args__$2,attr,kids,G__14095,vec__14096,seq__14097,first__14098,seq__14097__$1,arg,args__$1){
return (function (p1__14079_SHARP_,p2__14080_SHARP_,p3__14081_SHARP_){
return cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(p1__14079_SHARP_,p2__14080_SHARP_,p3__14081_SHARP_);
});})(attr__$1,kids__$1,G__14095__$1,attr__$2,kids__$2,vec__14099,seq__14100,first__14101,seq__14100__$1,arg__$1,args__$2,attr,kids,G__14095,vec__14096,seq__14097,first__14098,seq__14097__$1,arg,args__$1))
,attr__$2,arg__$1);
var G__14103 = kids__$2;
var G__14104 = args__$2;
attr__$1 = G__14102;
kids__$1 = G__14103;
G__14095__$1 = G__14104;
continue;
} else {
if(cljs.core.truth_(hoplon.core.attribute_QMARK_(arg__$1))){
var G__14105 = cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(attr__$2,arg__$1,cljs.core.first(args__$2));
var G__14106 = kids__$2;
var G__14107 = cljs.core.rest(args__$2);
attr__$1 = G__14105;
kids__$1 = G__14106;
G__14095__$1 = G__14107;
continue;
} else {
if(cljs.core.truth_((hoplon.core.seq_QMARK__STAR_.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.seq_QMARK__STAR_.cljs$core$IFn$_invoke$arity$1(arg__$1) : hoplon.core.seq_QMARK__STAR_.call(null,arg__$1)))){
var G__14108 = attr__$2;
var G__14109 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.conj_BANG_,kids__$2,cljs.core.flatten(arg__$1));
var G__14110 = args__$2;
attr__$1 = G__14108;
kids__$1 = G__14109;
G__14095__$1 = G__14110;
continue;
} else {
if(cljs.core.truth_((hoplon.core.vector_QMARK__STAR_.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.vector_QMARK__STAR_.cljs$core$IFn$_invoke$arity$1(arg__$1) : hoplon.core.vector_QMARK__STAR_.call(null,arg__$1)))){
var G__14111 = attr__$2;
var G__14112 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.conj_BANG_,kids__$2,cljs.core.flatten(arg__$1));
var G__14113 = args__$2;
attr__$1 = G__14111;
kids__$1 = G__14112;
G__14095__$1 = G__14113;
continue;
} else {
var G__14114 = attr__$2;
var G__14115 = cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(kids__$2,arg__$1);
var G__14116 = args__$2;
attr__$1 = G__14114;
kids__$1 = G__14115;
G__14095__$1 = G__14116;
continue;

}
}
}
}
}
break;
}
});
hoplon.core.add_attributes_BANG_ = (function hoplon$core$add_attributes_BANG_(this$,attr){
return cljs.core.reduce_kv((function (p1__14118_SHARP_,p2__14117_SHARP_,p3__14119_SHARP_){
hoplon.core._attr_BANG_(p2__14117_SHARP_,p1__14118_SHARP_,p3__14119_SHARP_);

return p1__14118_SHARP_;
}),this$,attr);
});
hoplon.core.add_children_BANG_ = (function hoplon$core$add_children_BANG_(this$,p__14120){
var vec__14128 = p__14120;
var seq__14129 = cljs.core.seq(vec__14128);
var first__14130 = cljs.core.first(seq__14129);
var seq__14129__$1 = cljs.core.next(seq__14129);
var child_cell = first__14130;
var _ = seq__14129__$1;
var kids = vec__14128;
var this$__$1 = this$;
var seq__14131_14135 = cljs.core.seq(cljs.core.flatten(kids));
var chunk__14132_14136 = null;
var count__14133_14137 = (0);
var i__14134_14138 = (0);
while(true){
if((i__14134_14138 < count__14133_14137)){
var x_14139 = chunk__14132_14136.cljs$core$IIndexed$_nth$arity$2(null,i__14134_14138);
var temp__4657__auto___14140 = hoplon.core.__GT_node(x_14139);
if(cljs.core.truth_(temp__4657__auto___14140)){
var x_14141__$1 = temp__4657__auto___14140;
hoplon.core.append_child_BANG_(this$__$1,x_14141__$1);
} else {
}

var G__14142 = seq__14131_14135;
var G__14143 = chunk__14132_14136;
var G__14144 = count__14133_14137;
var G__14145 = (i__14134_14138 + (1));
seq__14131_14135 = G__14142;
chunk__14132_14136 = G__14143;
count__14133_14137 = G__14144;
i__14134_14138 = G__14145;
continue;
} else {
var temp__4657__auto___14146 = cljs.core.seq(seq__14131_14135);
if(temp__4657__auto___14146){
var seq__14131_14147__$1 = temp__4657__auto___14146;
if(cljs.core.chunked_seq_QMARK_(seq__14131_14147__$1)){
var c__7687__auto___14148 = cljs.core.chunk_first(seq__14131_14147__$1);
var G__14149 = cljs.core.chunk_rest(seq__14131_14147__$1);
var G__14150 = c__7687__auto___14148;
var G__14151 = cljs.core.count(c__7687__auto___14148);
var G__14152 = (0);
seq__14131_14135 = G__14149;
chunk__14132_14136 = G__14150;
count__14133_14137 = G__14151;
i__14134_14138 = G__14152;
continue;
} else {
var x_14153 = cljs.core.first(seq__14131_14147__$1);
var temp__4657__auto___14154__$1 = hoplon.core.__GT_node(x_14153);
if(cljs.core.truth_(temp__4657__auto___14154__$1)){
var x_14155__$1 = temp__4657__auto___14154__$1;
hoplon.core.append_child_BANG_(this$__$1,x_14155__$1);
} else {
}

var G__14156 = cljs.core.next(seq__14131_14147__$1);
var G__14157 = null;
var G__14158 = (0);
var G__14159 = (0);
seq__14131_14135 = G__14156;
chunk__14132_14136 = G__14157;
count__14133_14137 = G__14158;
i__14134_14138 = G__14159;
continue;
}
} else {
}
}
break;
}

return this$__$1;
});
Element.prototype.cljs$core$IPrintWithWriter$ = cljs.core.PROTOCOL_SENTINEL;

Element.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this$,writer,opts){
var this$__$1 = this;
return cljs.core.write_all.cljs$core$IFn$_invoke$arity$variadic(writer,cljs.core.array_seq(["#<Element: ",this$__$1.tagName,">"], 0));
});

Element.prototype.cljs$core$IFn$ = cljs.core.PROTOCOL_SENTINEL;

Element.prototype.call = (function() { 
var G__14200__delegate = function (self__,args){
var self____$1 = this;
var this$ = self____$1;
var vec__14161 = hoplon.core.parse_args(args);
var attr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14161,(0),null);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14161,(1),null);
var G__14164 = this$;
hoplon.core.add_attributes_BANG_(G__14164,attr);

hoplon.core.add_children_BANG_(G__14164,kids);

return G__14164;
};
var G__14200 = function (self__,var_args){
var args = null;
if (arguments.length > 1) {
var G__14201__i = 0, G__14201__a = new Array(arguments.length -  1);
while (G__14201__i < G__14201__a.length) {G__14201__a[G__14201__i] = arguments[G__14201__i + 1]; ++G__14201__i;}
  args = new cljs.core.IndexedSeq(G__14201__a,0);
} 
return G__14200__delegate.call(this,self__,args);};
G__14200.cljs$lang$maxFixedArity = 1;
G__14200.cljs$lang$applyTo = (function (arglist__14202){
var self__ = cljs.core.first(arglist__14202);
var args = cljs.core.rest(arglist__14202);
return G__14200__delegate(self__,args);
});
G__14200.cljs$core$IFn$_invoke$arity$variadic = G__14200__delegate;
return G__14200;
})()
;

Element.prototype.apply = (function (self__,args14160){
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args14160)));
});

Element.prototype.cljs$core$IFn$_invoke$arity$2 = (function() { 
var G__14203__delegate = function (args){
var this$ = this;
var vec__14165 = hoplon.core.parse_args(args);
var attr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14165,(0),null);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14165,(1),null);
var G__14168 = this$;
hoplon.core.add_attributes_BANG_(G__14168,attr);

hoplon.core.add_children_BANG_(G__14168,kids);

return G__14168;
};
var G__14203 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__14204__i = 0, G__14204__a = new Array(arguments.length -  0);
while (G__14204__i < G__14204__a.length) {G__14204__a[G__14204__i] = arguments[G__14204__i + 0]; ++G__14204__i;}
  args = new cljs.core.IndexedSeq(G__14204__a,0);
} 
return G__14203__delegate.call(this,args);};
G__14203.cljs$lang$maxFixedArity = 0;
G__14203.cljs$lang$applyTo = (function (arglist__14205){
var args = cljs.core.seq(arglist__14205);
return G__14203__delegate(args);
});
G__14203.cljs$core$IFn$_invoke$arity$variadic = G__14203__delegate;
return G__14203;
})()
;

Element.prototype.hoplon$core$ICustomElement$ = cljs.core.PROTOCOL_SENTINEL;

Element.prototype.hoplon$core$ICustomElement$_set_attributes_BANG_$arity$2 = (function (this$,kvs){
var this$__$1 = this;
var e = this$__$1;
var seq__14169 = cljs.core.seq(kvs);
var chunk__14171 = null;
var count__14172 = (0);
var i__14173 = (0);
while(true){
if((i__14173 < count__14172)){
var vec__14175 = chunk__14171.cljs$core$IIndexed$_nth$arity$2(null,i__14173);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14175,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14175,(1),null);
var k_14206__$1 = cljs.core.name(k);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(false,v)){
e.removeAttribute(k_14206__$1);
} else {
e.setAttribute(k_14206__$1,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(true,v))?k_14206__$1:v));
}

var G__14207 = seq__14169;
var G__14208 = chunk__14171;
var G__14209 = count__14172;
var G__14210 = (i__14173 + (1));
seq__14169 = G__14207;
chunk__14171 = G__14208;
count__14172 = G__14209;
i__14173 = G__14210;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq(seq__14169);
if(temp__4657__auto__){
var seq__14169__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__14169__$1)){
var c__7687__auto__ = cljs.core.chunk_first(seq__14169__$1);
var G__14211 = cljs.core.chunk_rest(seq__14169__$1);
var G__14212 = c__7687__auto__;
var G__14213 = cljs.core.count(c__7687__auto__);
var G__14214 = (0);
seq__14169 = G__14211;
chunk__14171 = G__14212;
count__14172 = G__14213;
i__14173 = G__14214;
continue;
} else {
var vec__14178 = cljs.core.first(seq__14169__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14178,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14178,(1),null);
var k_14215__$1 = cljs.core.name(k);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(false,v)){
e.removeAttribute(k_14215__$1);
} else {
e.setAttribute(k_14215__$1,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(true,v))?k_14215__$1:v));
}

var G__14216 = cljs.core.next(seq__14169__$1);
var G__14217 = null;
var G__14218 = (0);
var G__14219 = (0);
seq__14169 = G__14216;
chunk__14171 = G__14217;
count__14172 = G__14218;
i__14173 = G__14219;
continue;
}
} else {
return null;
}
}
break;
}
});

Element.prototype.hoplon$core$ICustomElement$_set_styles_BANG_$arity$2 = (function (this$,kvs){
var this$__$1 = this;
var e = this$__$1;
var seq__14181 = cljs.core.seq(kvs);
var chunk__14182 = null;
var count__14183 = (0);
var i__14184 = (0);
while(true){
if((i__14184 < count__14183)){
var vec__14185 = chunk__14182.cljs$core$IIndexed$_nth$arity$2(null,i__14184);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14185,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14185,(1),null);
var G__14188_14220 = e;
var G__14189_14221 = "style";
var G__14190_14222 = cljs.core.name(k);
var G__14191_14223 = [cljs.core.str(v)].join('');
goog.object.set(G__14188_14220,G__14189_14221,G__14190_14222,G__14191_14223);

var G__14224 = seq__14181;
var G__14225 = chunk__14182;
var G__14226 = count__14183;
var G__14227 = (i__14184 + (1));
seq__14181 = G__14224;
chunk__14182 = G__14225;
count__14183 = G__14226;
i__14184 = G__14227;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq(seq__14181);
if(temp__4657__auto__){
var seq__14181__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__14181__$1)){
var c__7687__auto__ = cljs.core.chunk_first(seq__14181__$1);
var G__14228 = cljs.core.chunk_rest(seq__14181__$1);
var G__14229 = c__7687__auto__;
var G__14230 = cljs.core.count(c__7687__auto__);
var G__14231 = (0);
seq__14181 = G__14228;
chunk__14182 = G__14229;
count__14183 = G__14230;
i__14184 = G__14231;
continue;
} else {
var vec__14192 = cljs.core.first(seq__14181__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14192,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14192,(1),null);
var G__14195_14232 = e;
var G__14196_14233 = "style";
var G__14197_14234 = cljs.core.name(k);
var G__14198_14235 = [cljs.core.str(v)].join('');
goog.object.set(G__14195_14232,G__14196_14233,G__14197_14234,G__14198_14235);

var G__14236 = cljs.core.next(seq__14181__$1);
var G__14237 = null;
var G__14238 = (0);
var G__14239 = (0);
seq__14181 = G__14236;
chunk__14182 = G__14237;
count__14183 = G__14238;
i__14184 = G__14239;
continue;
}
} else {
return null;
}
}
break;
}
});

Element.prototype.hoplon$core$ICustomElement$_append_child_BANG_$arity$2 = (function (this$,child){
var this$__$1 = this;
if(cljs.core.not(hoplon.core.is_ie8)){
return this$__$1.appendChild(child);
} else {
try{return this$__$1.appendChild(child);
}catch (e14199){if((e14199 instanceof Error)){
var _ = e14199;
return null;
} else {
throw e14199;

}
}}
});

Element.prototype.hoplon$core$ICustomElement$_remove_child_BANG_$arity$2 = (function (this$,child){
var this$__$1 = this;
return this$__$1.removeChild(child);
});

Element.prototype.hoplon$core$ICustomElement$_replace_child_BANG_$arity$3 = (function (this$,new$,existing){
var this$__$1 = this;
return this$__$1.replaceChild(new$,existing);
});

Element.prototype.hoplon$core$ICustomElement$_insert_before_BANG_$arity$3 = (function (this$,new$,existing){
var this$__$1 = this;
return this$__$1.insertBefore(new$,existing);
});
hoplon.core.make_singleton_ctor = (function hoplon$core$make_singleton_ctor(elem){
return (function() { 
var G__14246__delegate = function (args){
var vec__14243 = hoplon.core.parse_args(args);
var attrs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14243,(0),null);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14243,(1),null);
hoplon.core.add_attributes_BANG_(elem,attrs);

if(cljs.core.not(cljs.core.cst$kw$static.cljs$core$IFn$_invoke$arity$1(attrs))){
hoplon.core.remove_all_kids_BANG_(elem);

return hoplon.core.add_children_BANG_(elem,kids);
} else {
return null;
}
};
var G__14246 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__14247__i = 0, G__14247__a = new Array(arguments.length -  0);
while (G__14247__i < G__14247__a.length) {G__14247__a[G__14247__i] = arguments[G__14247__i + 0]; ++G__14247__i;}
  args = new cljs.core.IndexedSeq(G__14247__a,0);
} 
return G__14246__delegate.call(this,args);};
G__14246.cljs$lang$maxFixedArity = 0;
G__14246.cljs$lang$applyTo = (function (arglist__14248){
var args = cljs.core.seq(arglist__14248);
return G__14246__delegate(args);
});
G__14246.cljs$core$IFn$_invoke$arity$variadic = G__14246__delegate;
return G__14246;
})()
;
});
hoplon.core.make_elem_ctor = (function hoplon$core$make_elem_ctor(tag){
var mkelem = (function() { 
var G__14252__delegate = function (rest__14249_SHARP_){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(hoplon.core.ensure_kids_BANG_(document.createElement(tag)),rest__14249_SHARP_);
};
var G__14252 = function (var_args){
var rest__14249_SHARP_ = null;
if (arguments.length > 0) {
var G__14253__i = 0, G__14253__a = new Array(arguments.length -  0);
while (G__14253__i < G__14253__a.length) {G__14253__a[G__14253__i] = arguments[G__14253__i + 0]; ++G__14253__i;}
  rest__14249_SHARP_ = new cljs.core.IndexedSeq(G__14253__a,0);
} 
return G__14252__delegate.call(this,rest__14249_SHARP_);};
G__14252.cljs$lang$maxFixedArity = 0;
G__14252.cljs$lang$applyTo = (function (arglist__14254){
var rest__14249_SHARP_ = cljs.core.seq(arglist__14254);
return G__14252__delegate(rest__14249_SHARP_);
});
G__14252.cljs$core$IFn$_invoke$arity$variadic = G__14252__delegate;
return G__14252;
})()
;
if(cljs.core.not(hoplon.core.is_ie8)){
return mkelem;
} else {
return ((function (mkelem){
return (function() { 
var G__14255__delegate = function (args){
try{return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(mkelem,args);
}catch (e14251){if((e14251 instanceof Error)){
var _ = e14251;
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2((hoplon.core.make_elem_ctor.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.make_elem_ctor.cljs$core$IFn$_invoke$arity$1("div") : hoplon.core.make_elem_ctor.call(null,"div")),args);
} else {
throw e14251;

}
}};
var G__14255 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__14256__i = 0, G__14256__a = new Array(arguments.length -  0);
while (G__14256__i < G__14256__a.length) {G__14256__a[G__14256__i] = arguments[G__14256__i + 0]; ++G__14256__i;}
  args = new cljs.core.IndexedSeq(G__14256__a,0);
} 
return G__14255__delegate.call(this,args);};
G__14255.cljs$lang$maxFixedArity = 0;
G__14255.cljs$lang$applyTo = (function (arglist__14257){
var args = cljs.core.seq(arglist__14257);
return G__14255__delegate(args);
});
G__14255.cljs$core$IFn$_invoke$arity$variadic = G__14255__delegate;
return G__14255;
})()
;
;})(mkelem))
}
});
hoplon.core.html = (function hoplon$core$html(var_args){
var args__7988__auto__ = [];
var len__7981__auto___14259 = arguments.length;
var i__7982__auto___14260 = (0);
while(true){
if((i__7982__auto___14260 < len__7981__auto___14259)){
args__7988__auto__.push((arguments[i__7982__auto___14260]));

var G__14261 = (i__7982__auto___14260 + (1));
i__7982__auto___14260 = G__14261;
continue;
} else {
}
break;
}

var argseq__7989__auto__ = ((((0) < args__7988__auto__.length))?(new cljs.core.IndexedSeq(args__7988__auto__.slice((0)),(0),null)):null);
return hoplon.core.html.cljs$core$IFn$_invoke$arity$variadic(argseq__7989__auto__);
});

hoplon.core.html.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return hoplon.core.add_attributes_BANG_(document.documentElement,cljs.core.nth.cljs$core$IFn$_invoke$arity$2(hoplon.core.parse_args(args),(0)));
});

hoplon.core.html.cljs$lang$maxFixedArity = (0);

hoplon.core.html.cljs$lang$applyTo = (function (seq14258){
return hoplon.core.html.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq14258));
});

hoplon.core.body = hoplon.core.make_singleton_ctor(document.body);
hoplon.core.head = hoplon.core.make_singleton_ctor((hoplon.core._head_STAR_.cljs$core$IFn$_invoke$arity$1 ? hoplon.core._head_STAR_.cljs$core$IFn$_invoke$arity$1(document) : hoplon.core._head_STAR_.call(null,document)));
hoplon.core.a = hoplon.core.make_elem_ctor("a");
hoplon.core.abbr = hoplon.core.make_elem_ctor("abbr");
hoplon.core.address = hoplon.core.make_elem_ctor("address");
hoplon.core.area = hoplon.core.make_elem_ctor("area");
hoplon.core.article = hoplon.core.make_elem_ctor("article");
hoplon.core.aside = hoplon.core.make_elem_ctor("aside");
hoplon.core.audio = hoplon.core.make_elem_ctor("audio");
hoplon.core.b = hoplon.core.make_elem_ctor("b");
hoplon.core.base = hoplon.core.make_elem_ctor("base");
hoplon.core.bdi = hoplon.core.make_elem_ctor("bdi");
hoplon.core.bdo = hoplon.core.make_elem_ctor("bdo");
hoplon.core.blockquote = hoplon.core.make_elem_ctor("blockquote");
hoplon.core.br = hoplon.core.make_elem_ctor("br");
hoplon.core.button = hoplon.core.make_elem_ctor("button");
hoplon.core.canvas = hoplon.core.make_elem_ctor("canvas");
hoplon.core.caption = hoplon.core.make_elem_ctor("caption");
hoplon.core.cite = hoplon.core.make_elem_ctor("cite");
hoplon.core.code = hoplon.core.make_elem_ctor("code");
hoplon.core.col = hoplon.core.make_elem_ctor("col");
hoplon.core.colgroup = hoplon.core.make_elem_ctor("colgroup");
hoplon.core.data = hoplon.core.make_elem_ctor("data");
hoplon.core.datalist = hoplon.core.make_elem_ctor("datalist");
hoplon.core.dd = hoplon.core.make_elem_ctor("dd");
hoplon.core.del = hoplon.core.make_elem_ctor("del");
hoplon.core.details = hoplon.core.make_elem_ctor("details");
hoplon.core.dfn = hoplon.core.make_elem_ctor("dfn");
hoplon.core.dialog = hoplon.core.make_elem_ctor("dialog");
hoplon.core.div = hoplon.core.make_elem_ctor("div");
hoplon.core.dl = hoplon.core.make_elem_ctor("dl");
hoplon.core.dt = hoplon.core.make_elem_ctor("dt");
hoplon.core.em = hoplon.core.make_elem_ctor("em");
hoplon.core.embed = hoplon.core.make_elem_ctor("embed");
hoplon.core.fieldset = hoplon.core.make_elem_ctor("fieldset");
hoplon.core.figcaption = hoplon.core.make_elem_ctor("figcaption");
hoplon.core.figure = hoplon.core.make_elem_ctor("figure");
hoplon.core.footer = hoplon.core.make_elem_ctor("footer");
hoplon.core.form = hoplon.core.make_elem_ctor("form");
hoplon.core.h1 = hoplon.core.make_elem_ctor("h1");
hoplon.core.h2 = hoplon.core.make_elem_ctor("h2");
hoplon.core.h3 = hoplon.core.make_elem_ctor("h3");
hoplon.core.h4 = hoplon.core.make_elem_ctor("h4");
hoplon.core.h5 = hoplon.core.make_elem_ctor("h5");
hoplon.core.h6 = hoplon.core.make_elem_ctor("h6");
hoplon.core.header = hoplon.core.make_elem_ctor("header");
hoplon.core.hgroup = hoplon.core.make_elem_ctor("hgroup");
hoplon.core.hr = hoplon.core.make_elem_ctor("hr");
hoplon.core.i = hoplon.core.make_elem_ctor("i");
hoplon.core.iframe = hoplon.core.make_elem_ctor("iframe");
hoplon.core.img = hoplon.core.make_elem_ctor("img");
hoplon.core.input = hoplon.core.make_elem_ctor("input");
hoplon.core.ins = hoplon.core.make_elem_ctor("ins");
hoplon.core.kbd = hoplon.core.make_elem_ctor("kbd");
hoplon.core.keygen = hoplon.core.make_elem_ctor("keygen");
hoplon.core.label = hoplon.core.make_elem_ctor("label");
hoplon.core.legend = hoplon.core.make_elem_ctor("legend");
hoplon.core.li = hoplon.core.make_elem_ctor("li");
hoplon.core.link = hoplon.core.make_elem_ctor("link");
hoplon.core.main = hoplon.core.make_elem_ctor("main");
hoplon.core.html_map = hoplon.core.make_elem_ctor("map");
hoplon.core.mark = hoplon.core.make_elem_ctor("mark");
hoplon.core.menu = hoplon.core.make_elem_ctor("menu");
hoplon.core.menuitem = hoplon.core.make_elem_ctor("menuitem");
hoplon.core.html_meta = hoplon.core.make_elem_ctor("meta");
hoplon.core.meter = hoplon.core.make_elem_ctor("meter");
hoplon.core.multicol = hoplon.core.make_elem_ctor("multicol");
hoplon.core.nav = hoplon.core.make_elem_ctor("nav");
hoplon.core.noframes = hoplon.core.make_elem_ctor("noframes");
hoplon.core.noscript = hoplon.core.make_elem_ctor("noscript");
hoplon.core.html_object = hoplon.core.make_elem_ctor("object");
hoplon.core.ol = hoplon.core.make_elem_ctor("ol");
hoplon.core.optgroup = hoplon.core.make_elem_ctor("optgroup");
hoplon.core.option = hoplon.core.make_elem_ctor("option");
hoplon.core.output = hoplon.core.make_elem_ctor("output");
hoplon.core.p = hoplon.core.make_elem_ctor("p");
hoplon.core.param = hoplon.core.make_elem_ctor("param");
hoplon.core.picture = hoplon.core.make_elem_ctor("picture");
hoplon.core.pre = hoplon.core.make_elem_ctor("pre");
hoplon.core.progress = hoplon.core.make_elem_ctor("progress");
hoplon.core.q = hoplon.core.make_elem_ctor("q");
hoplon.core.rp = hoplon.core.make_elem_ctor("rp");
hoplon.core.rt = hoplon.core.make_elem_ctor("rt");
hoplon.core.rtc = hoplon.core.make_elem_ctor("rtc");
hoplon.core.ruby = hoplon.core.make_elem_ctor("ruby");
hoplon.core.s = hoplon.core.make_elem_ctor("s");
hoplon.core.samp = hoplon.core.make_elem_ctor("samp");
hoplon.core.script = hoplon.core.make_elem_ctor("script");
hoplon.core.section = hoplon.core.make_elem_ctor("section");
hoplon.core.select = hoplon.core.make_elem_ctor("select");
hoplon.core.shadow = hoplon.core.make_elem_ctor("shadow");
hoplon.core.small = hoplon.core.make_elem_ctor("small");
hoplon.core.source = hoplon.core.make_elem_ctor("source");
hoplon.core.span = hoplon.core.make_elem_ctor("span");
hoplon.core.strong = hoplon.core.make_elem_ctor("strong");
hoplon.core.style = hoplon.core.make_elem_ctor("style");
hoplon.core.sub = hoplon.core.make_elem_ctor("sub");
hoplon.core.summary = hoplon.core.make_elem_ctor("summary");
hoplon.core.sup = hoplon.core.make_elem_ctor("sup");
hoplon.core.table = hoplon.core.make_elem_ctor("table");
hoplon.core.tbody = hoplon.core.make_elem_ctor("tbody");
hoplon.core.td = hoplon.core.make_elem_ctor("td");
hoplon.core.template = hoplon.core.make_elem_ctor("template");
hoplon.core.textarea = hoplon.core.make_elem_ctor("textarea");
hoplon.core.tfoot = hoplon.core.make_elem_ctor("tfoot");
hoplon.core.th = hoplon.core.make_elem_ctor("th");
hoplon.core.thead = hoplon.core.make_elem_ctor("thead");
hoplon.core.html_time = hoplon.core.make_elem_ctor("time");
hoplon.core.title = hoplon.core.make_elem_ctor("title");
hoplon.core.tr = hoplon.core.make_elem_ctor("tr");
hoplon.core.track = hoplon.core.make_elem_ctor("track");
hoplon.core.u = hoplon.core.make_elem_ctor("u");
hoplon.core.ul = hoplon.core.make_elem_ctor("ul");
hoplon.core.html_var = hoplon.core.make_elem_ctor("var");
hoplon.core.video = hoplon.core.make_elem_ctor("video");
hoplon.core.wbr = hoplon.core.make_elem_ctor("wbr");
hoplon.core.spliced = cljs.core.vector;
hoplon.core.$text = (function hoplon$core$$text(p1__14262_SHARP_){
return document.createTextNode(p1__14262_SHARP_);
});
hoplon.core.$comment = (function hoplon$core$$comment(p1__14263_SHARP_){
return document.createComment(p1__14263_SHARP_);
});
hoplon.core._LT__BANG___ = hoplon.core.$comment;
hoplon.core.___GT_ = cljs.core.cst$kw$hoplon$core_SLASH__DASH__DASH__GT_;
hoplon.core.add_initfn_BANG_ = (function hoplon$core$add_initfn_BANG_(f){
return window.addEventListener("load",(function (){
var G__14266 = (function (){
return (f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));
});
var G__14267 = (0);
return setTimeout(G__14266,G__14267);
}));
});
hoplon.core.page_load = (function hoplon$core$page_load(){
return document.dispatchEvent("page-load");
});
hoplon.core.on_page_load = (function hoplon$core$on_page_load(f){
return document.addEventListener("page-load",f);
});
hoplon.core.add_initfn_BANG_((function (){
return document.body.addEventListener("submit",(function (p1__14268_SHARP_){
var e = p1__14268_SHARP_.target;
if(cljs.core.truth_((function (){var or__6873__auto__ = e.getAttribute("action");
if(cljs.core.truth_(or__6873__auto__)){
return or__6873__auto__;
} else {
return e.getAttribute("method");
}
})())){
return null;
} else {
return p1__14268_SHARP_.preventDefault();
}
}));
}));
if(typeof hoplon.core.do_BANG_ !== 'undefined'){
} else {
hoplon.core.do_BANG_ = (function (){var method_table__7801__auto__ = (function (){var G__14269 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__14269) : cljs.core.atom.call(null,G__14269));
})();
var prefer_table__7802__auto__ = (function (){var G__14270 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__14270) : cljs.core.atom.call(null,G__14270));
})();
var method_cache__7803__auto__ = (function (){var G__14271 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__14271) : cljs.core.atom.call(null,G__14271));
})();
var cached_hierarchy__7804__auto__ = (function (){var G__14272 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__14272) : cljs.core.atom.call(null,G__14272));
})();
var hierarchy__7805__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$default,cljs.core.cst$kw$hoplon$core_SLASH_default], null),cljs.core.cst$kw$hierarchy,cljs.core.get_global_hierarchy());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("hoplon.core","do!"),((function (method_table__7801__auto__,prefer_table__7802__auto__,method_cache__7803__auto__,cached_hierarchy__7804__auto__,hierarchy__7805__auto__){
return (function (elem,key,val){
var temp__4655__auto__ = cljs.core.namespace(key);
if(cljs.core.truth_(temp__4655__auto__)){
var n = temp__4655__auto__;
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$2(n,"*");
} else {
return key;
}
});})(method_table__7801__auto__,prefer_table__7802__auto__,method_cache__7803__auto__,cached_hierarchy__7804__auto__,hierarchy__7805__auto__))
,cljs.core.cst$kw$hoplon$core_SLASH_default,hierarchy__7805__auto__,method_table__7801__auto__,prefer_table__7802__auto__,method_cache__7803__auto__,cached_hierarchy__7804__auto__));
})();
}
hoplon.core.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$hoplon$core_SLASH_default,(function (elem,key,val){
var G__14273 = elem;
var G__14274 = cljs.core.cst$kw$attr;
var G__14275 = cljs.core.PersistentArrayMap.fromArray([key,val], true, false);
return (hoplon.core.do_BANG_.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.do_BANG_.cljs$core$IFn$_invoke$arity$3(G__14273,G__14274,G__14275) : hoplon.core.do_BANG_.call(null,G__14273,G__14274,G__14275));
}));
hoplon.core.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$css_SLASH__STAR_,(function (elem,key,val){
return hoplon.core.set_styles_BANG_(elem,key,val);
}));
hoplon.core.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$html_SLASH__STAR_,(function (elem,key,val){
return hoplon.core.set_attributes_BANG_(elem,key,val);
}));
hoplon.core.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$svg_SLASH__STAR_,(function (elem,key,val){
return hoplon.core.set_attributes_BANG_(elem,key,val);
}));
hoplon.core.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$attr,(function (elem,_,kvs){
return hoplon.core.set_attributes_BANG_.cljs$core$IFn$_invoke$arity$2(elem,kvs);
}));
hoplon.core.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$css,(function (elem,_,kvs){
return hoplon.core.set_styles_BANG_.cljs$core$IFn$_invoke$arity$2(elem,kvs);
}));
if(typeof hoplon.core.on_BANG_ !== 'undefined'){
} else {
hoplon.core.on_BANG_ = (function (){var method_table__7801__auto__ = (function (){var G__14276 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__14276) : cljs.core.atom.call(null,G__14276));
})();
var prefer_table__7802__auto__ = (function (){var G__14277 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__14277) : cljs.core.atom.call(null,G__14277));
})();
var method_cache__7803__auto__ = (function (){var G__14278 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__14278) : cljs.core.atom.call(null,G__14278));
})();
var cached_hierarchy__7804__auto__ = (function (){var G__14279 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__14279) : cljs.core.atom.call(null,G__14279));
})();
var hierarchy__7805__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$default,cljs.core.cst$kw$hoplon$core_SLASH_default], null),cljs.core.cst$kw$hierarchy,cljs.core.get_global_hierarchy());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("hoplon.core","on!"),((function (method_table__7801__auto__,prefer_table__7802__auto__,method_cache__7803__auto__,cached_hierarchy__7804__auto__,hierarchy__7805__auto__){
return (function (elem,key,val){
var temp__4655__auto__ = cljs.core.namespace(key);
if(cljs.core.truth_(temp__4655__auto__)){
var n = temp__4655__auto__;
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$2(n,"*");
} else {
return key;
}
});})(method_table__7801__auto__,prefer_table__7802__auto__,method_cache__7803__auto__,cached_hierarchy__7804__auto__,hierarchy__7805__auto__))
,cljs.core.cst$kw$hoplon$core_SLASH_default,hierarchy__7805__auto__,method_table__7801__auto__,prefer_table__7802__auto__,method_cache__7803__auto__,cached_hierarchy__7804__auto__));
})();
}
hoplon.core.on_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$hoplon$core_SLASH_default,(function (elem,event,callback){
return hoplon.core.when_dom(elem,(function (){
return elem.addEventListener(cljs.core.name(event),callback);
}));
}));
hoplon.core.on_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$html_SLASH__STAR_,(function (elem,event,callback){
return hoplon.core.when_dom(elem,(function (){
return elem.addEventListener(cljs.core.name(event),callback);
}));
}));
/**
 * Given a cell items containing a seqable collection, constructs a cell that
 *   works like a fill vector. The template tpl is a function of one argument: the
 *   formula cell containing the ith item in items. The tpl function is called
 *   once (and only once) for each index in items. When the items collection
 *   shrinks the DOM element created by the template is not destroyed--it is only
 *   removed from the DOM and cached. When the items collection grows again those
 *   cached elements will be reinserted into the DOM at their original index.
 */
hoplon.core.loop_tpl_STAR_ = (function hoplon$core$loop_tpl_STAR_(items,tpl){
var on_deck = (function (){var G__14294 = cljs.core.List.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__14294) : cljs.core.atom.call(null,G__14294));
})();
var items_seq = javelin.core.formula(((function (on_deck){
return (function (G__14295,G__14296){
return (G__14295.cljs$core$IFn$_invoke$arity$1 ? G__14295.cljs$core$IFn$_invoke$arity$1(G__14296) : G__14295.call(null,G__14296));
});})(on_deck))
).call(null,cljs.core.seq,items);
var ith_item = ((function (on_deck,items_seq){
return (function (p1__14280_SHARP_){
return javelin.core.formula(((function (on_deck,items_seq){
return (function (G__14299,G__14298,G__14297){
return (G__14297.cljs$core$IFn$_invoke$arity$2 ? G__14297.cljs$core$IFn$_invoke$arity$2(G__14298,G__14299) : G__14297.call(null,G__14298,G__14299));
});})(on_deck,items_seq))
).call(null,p1__14280_SHARP_,items_seq,hoplon.core.safe_nth);
});})(on_deck,items_seq))
;
var shift_BANG_ = ((function (on_deck,items_seq,ith_item){
return (function (p1__14281_SHARP_){
var x = cljs.core.first((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(p1__14281_SHARP_) : cljs.core.deref.call(null,p1__14281_SHARP_)));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(p1__14281_SHARP_,cljs.core.rest);

return x;
});})(on_deck,items_seq,ith_item))
;
var current = javelin.core.cell.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);
hoplon.core.do_watch.cljs$core$IFn$_invoke$arity$2(items_seq,((function (current,on_deck,items_seq,ith_item,shift_BANG_){
return (function (old_items,new_items){
var old = cljs.core.count(old_items);
var new$ = cljs.core.count(new_items);
var diff = (new$ - old);
if((diff > (0))){
var seq__14300 = cljs.core.seq(cljs.core.range.cljs$core$IFn$_invoke$arity$2(old,new$));
var chunk__14301 = null;
var count__14302 = (0);
var i__14303 = (0);
while(true){
if((i__14303 < count__14302)){
var i = chunk__14301.cljs$core$IIndexed$_nth$arity$2(null,i__14303);
var e_14306 = (function (){var or__6873__auto__ = shift_BANG_(on_deck);
if(cljs.core.truth_(or__6873__auto__)){
return or__6873__auto__;
} else {
var G__14304 = ith_item(i);
return (tpl.cljs$core$IFn$_invoke$arity$1 ? tpl.cljs$core$IFn$_invoke$arity$1(G__14304) : tpl.call(null,G__14304));
}
})();
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(current,cljs.core.conj,e_14306);

var G__14307 = seq__14300;
var G__14308 = chunk__14301;
var G__14309 = count__14302;
var G__14310 = (i__14303 + (1));
seq__14300 = G__14307;
chunk__14301 = G__14308;
count__14302 = G__14309;
i__14303 = G__14310;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq(seq__14300);
if(temp__4657__auto__){
var seq__14300__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__14300__$1)){
var c__7687__auto__ = cljs.core.chunk_first(seq__14300__$1);
var G__14311 = cljs.core.chunk_rest(seq__14300__$1);
var G__14312 = c__7687__auto__;
var G__14313 = cljs.core.count(c__7687__auto__);
var G__14314 = (0);
seq__14300 = G__14311;
chunk__14301 = G__14312;
count__14302 = G__14313;
i__14303 = G__14314;
continue;
} else {
var i = cljs.core.first(seq__14300__$1);
var e_14315 = (function (){var or__6873__auto__ = shift_BANG_(on_deck);
if(cljs.core.truth_(or__6873__auto__)){
return or__6873__auto__;
} else {
var G__14305 = ith_item(i);
return (tpl.cljs$core$IFn$_invoke$arity$1 ? tpl.cljs$core$IFn$_invoke$arity$1(G__14305) : tpl.call(null,G__14305));
}
})();
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(current,cljs.core.conj,e_14315);

var G__14316 = cljs.core.next(seq__14300__$1);
var G__14317 = null;
var G__14318 = (0);
var G__14319 = (0);
seq__14300 = G__14316;
chunk__14301 = G__14317;
count__14302 = G__14318;
i__14303 = G__14319;
continue;
}
} else {
return null;
}
}
break;
}
} else {
if((diff < (0))){
var n__7791__auto__ = (- diff);
var _ = (0);
while(true){
if((_ < n__7791__auto__)){
var e_14320 = cljs.core.peek((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(current) : cljs.core.deref.call(null,current)));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(current,cljs.core.pop);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(on_deck,cljs.core.conj,e_14320);

var G__14321 = (_ + (1));
_ = G__14321;
continue;
} else {
return null;
}
break;
}
} else {
return null;
}
}
});})(current,on_deck,items_seq,ith_item,shift_BANG_))
);

return current;
});
/**
 * Defines a cell whose value is the URI fragment.
 */
hoplon.core.route_cell = (function hoplon$core$route_cell(var_args){
var args__7988__auto__ = [];
var len__7981__auto___14332 = arguments.length;
var i__7982__auto___14333 = (0);
while(true){
if((i__7982__auto___14333 < len__7981__auto___14332)){
args__7988__auto__.push((arguments[i__7982__auto___14333]));

var G__14334 = (i__7982__auto___14333 + (1));
i__7982__auto___14333 = G__14334;
continue;
} else {
}
break;
}

var argseq__7989__auto__ = ((((0) < args__7988__auto__.length))?(new cljs.core.IndexedSeq(args__7988__auto__.slice((0)),(0),null)):null);
return hoplon.core.route_cell.cljs$core$IFn$_invoke$arity$variadic(argseq__7989__auto__);
});

hoplon.core.route_cell.cljs$core$IFn$_invoke$arity$variadic = (function (p__14323){
var vec__14324 = p__14323;
var default$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14324,(0),null);
var c = javelin.core.cell.cljs$core$IFn$_invoke$arity$1(window.location.hash);
var _ = javelin.core.formula(((function (c,vec__14324,default$){
return (function (G__14327,G__14329,G__14328){
var or__6873__auto__ = (function (){var and__6861__auto__ = (G__14327.cljs$core$IFn$_invoke$arity$1 ? G__14327.cljs$core$IFn$_invoke$arity$1(G__14328) : G__14327.call(null,G__14328));
if(cljs.core.truth_(and__6861__auto__)){
return G__14328;
} else {
return and__6861__auto__;
}
})();
if(cljs.core.truth_(or__6873__auto__)){
return or__6873__auto__;
} else {
return G__14329;
}
});})(c,vec__14324,default$))
).call(null,cljs.core.seq,default$,c);
window.addEventListener("hashchange",((function (_,c,vec__14324,default$){
return (function (){
var G__14330 = c;
var G__14331 = window.location.hash;
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__14330,G__14331) : cljs.core.reset_BANG_.call(null,G__14330,G__14331));
});})(_,c,vec__14324,default$))
);

return _;
});

hoplon.core.route_cell.cljs$lang$maxFixedArity = (0);

hoplon.core.route_cell.cljs$lang$applyTo = (function (seq14322){
return hoplon.core.route_cell.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq14322));
});

