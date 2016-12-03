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
hoplon.core.static_elements = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p1__13926_SHARP_,p2__13927_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__13926_SHARP_,p2__13927_SHARP_.getAttribute("static-id"),p2__13927_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,document.querySelector("[static-id]"));
/**
 * Adds f as a watcher to ref and evaluates (f init @ref) once. The watcher
 *   f is a function of two arguments: the previous and next values. If init is
 *   not provided the default (nil) will be used.
 */
hoplon.core.do_watch = (function hoplon$core$do_watch(var_args){
var args13928 = [];
var len__7981__auto___13933 = arguments.length;
var i__7982__auto___13934 = (0);
while(true){
if((i__7982__auto___13934 < len__7981__auto___13933)){
args13928.push((arguments[i__7982__auto___13934]));

var G__13935 = (i__7982__auto___13934 + (1));
i__7982__auto___13934 = G__13935;
continue;
} else {
}
break;
}

var G__13930 = args13928.length;
switch (G__13930) {
case 2:
return hoplon.core.do_watch.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return hoplon.core.do_watch.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args13928.length)].join('')));

}
});

hoplon.core.do_watch.cljs$core$IFn$_invoke$arity$2 = (function (ref,f){
return hoplon.core.do_watch.cljs$core$IFn$_invoke$arity$3(ref,null,f);
});

hoplon.core.do_watch.cljs$core$IFn$_invoke$arity$3 = (function (ref,init,f){
var k = cljs.core.gensym.cljs$core$IFn$_invoke$arity$0();
var G__13931_13937 = init;
var G__13932_13938 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(ref) : cljs.core.deref.call(null,ref));
(f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__13931_13937,G__13932_13938) : f.call(null,G__13931_13937,G__13932_13938));

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
var vec__13945 = cljs.core.reverse(clojure.string.split.cljs$core$IFn$_invoke$arity$2(path,/\//));
var seq__13946 = cljs.core.seq(vec__13945);
var first__13947 = cljs.core.first(seq__13946);
var seq__13946__$1 = cljs.core.next(seq__13946);
var f = first__13947;
var more = seq__13946__$1;
var vec__13948 = clojure.string.split.cljs$core$IFn$_invoke$arity$3(f,/\./,(2));
var f1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13948,(0),null);
var f2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13948,(1),null);
return clojure.string.join.cljs$core$IFn$_invoke$arity$2("/",cljs.core.reverse(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(more,clojure.string.join.cljs$core$IFn$_invoke$arity$2(".",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str(f1),cljs.core.str("."),cljs.core.str("a197931b15b54263b07390402a40d27c")].join(''),f2], null)))));
});
/**
 * Class normalization for attribute providers.
 */
hoplon.core.normalize_class = (function hoplon$core$normalize_class(kvs){
var __GT_map = (function (p1__13951_SHARP_){
return cljs.core.zipmap(p1__13951_SHARP_,cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(true));
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
var G__13952 = (i + (1));
var G__13953 = cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(ret,x.item(i));
i = G__13952;
ret = G__13953;
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
var G__13954 = [cljs.core.str(this$)].join('');
return (hoplon.core.$text.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.$text.cljs$core$IFn$_invoke$arity$1(G__13954) : hoplon.core.$text.call(null,G__13954));
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
var G__13983 = new$__$1;
var vec__13985 = G__13983;
var seq__13986 = cljs.core.seq(vec__13985);
var first__13987 = cljs.core.first(seq__13986);
var seq__13986__$1 = cljs.core.next(seq__13986);
var x = first__13987;
var xs = seq__13986__$1;
var G__13984 = hoplon.core.child_vec(this$);
var vec__13988 = G__13984;
var seq__13989 = cljs.core.seq(vec__13988);
var first__13990 = cljs.core.first(seq__13989);
var seq__13989__$1 = cljs.core.next(seq__13989);
var k = first__13990;
var ks = seq__13989__$1;
var kids = vec__13988;
var G__13983__$1 = G__13983;
var G__13984__$1 = G__13984;
while(true){
var vec__13991 = G__13983__$1;
var seq__13992 = cljs.core.seq(vec__13991);
var first__13993 = cljs.core.first(seq__13992);
var seq__13992__$1 = cljs.core.next(seq__13992);
var x__$1 = first__13993;
var xs__$1 = seq__13992__$1;
var vec__13994 = G__13984__$1;
var seq__13995 = cljs.core.seq(vec__13994);
var first__13996 = cljs.core.first(seq__13995);
var seq__13995__$1 = cljs.core.next(seq__13995);
var k__$1 = first__13996;
var ks__$1 = seq__13995__$1;
var kids__$1 = vec__13994;
if(cljs.core.truth_((function (){var or__6873__auto__ = x__$1;
if(cljs.core.truth_(or__6873__auto__)){
return or__6873__auto__;
} else {
return k__$1;
}
})())){
var G__13997 = xs__$1;
var G__13998 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x__$1,k__$1))?ks__$1:((cljs.core.not(k__$1))?(function (){var ks__$2 = ks__$1;
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
G__13983__$1 = G__13997;
G__13984__$1 = G__13998;
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
var kids_14001 = (function (){var G__14000 = hoplon.core.child_vec(this$__$1);
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__14000) : cljs.core.atom.call(null,G__14000));
})();
this$__$1.hoplonKids = kids_14001;

hoplon.core.do_watch.cljs$core$IFn$_invoke$arity$2(kids_14001,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(hoplon.core.merge_kids,this$__$1));
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

var kids_14004 = (kidfn.cljs$core$IFn$_invoke$arity$1 ? kidfn.cljs$core$IFn$_invoke$arity$1(this$__$1) : kidfn.call(null,this$__$1));
var i_14005 = cljs.core.count((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(kids_14004) : cljs.core.deref.call(null,kids_14004)));
if(cljs.core.truth_(javelin.core.cell_QMARK_(x__$1))){
hoplon.core.do_watch.cljs$core$IFn$_invoke$arity$2(x__$1,((function (kids_14004,i_14005,x__$1,this$__$1){
return (function (p1__14003_SHARP_,p2__14002_SHARP_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(kids_14004,cljs.core.assoc,i_14005,p2__14002_SHARP_);
});})(kids_14004,i_14005,x__$1,this$__$1))
);
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(kids_14004,cljs.core.assoc,i_14005,x__$1);
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
return (function (p1__14006_SHARP_){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,x__$1),p1__14006_SHARP_));
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
return (function (p1__14007_SHARP_){
return cljs.core.vec(cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(((function (x__$1,this$__$1){
return (function (z){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(z,y)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x__$1,z], null);
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [z], null);
}
});})(x__$1,this$__$1))
,cljs.core.array_seq([p1__14007_SHARP_], 0)));
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
return (function (p1__14008_SHARP_){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (y__$1,this$__$1){
return (function (z){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(z,y__$1)){
return x;
} else {
return z;
}
});})(y__$1,this$__$1))
,p1__14008_SHARP_);
});})(y__$1,this$__$1))
);

return y__$1;
});
});
hoplon.core.set_setAttribute_BANG_ = (function hoplon$core$set_setAttribute_BANG_(this$,attrfn){
return this$.setAttribute = (function (k,v){
var this$__$1 = this;
var _ = undefined;
var kk_14009 = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(k);
var attr_14010 = (attrfn.cljs$core$IFn$_invoke$arity$1 ? attrfn.cljs$core$IFn$_invoke$arity$1(this$__$1) : attrfn.call(null,this$__$1));
var has_QMARK__14011 = (function (){var and__6861__auto__ = attr_14010;
if(cljs.core.truth_(and__6861__auto__)){
return cljs.core.contains_QMARK_((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(attr_14010) : cljs.core.deref.call(null,attr_14010)),kk_14009);
} else {
return and__6861__auto__;
}
})();
if(cljs.core.truth_(has_QMARK__14011)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(attr_14010,cljs.core.assoc,kk_14009,v);
} else {
hoplon.core.setAttribute.call(this$__$1,k,v);
}

return _;
});
});
hoplon.core.set_appendChild_BANG_(Element.prototype,(function (p1__14012_SHARP_){
return p1__14012_SHARP_.hoplonKids;
}));
hoplon.core.set_removeChild_BANG_(Element.prototype,(function (p1__14013_SHARP_){
return p1__14013_SHARP_.hoplonKids;
}));
hoplon.core.set_insertBefore_BANG_(Element.prototype,(function (p1__14014_SHARP_){
return p1__14014_SHARP_.hoplonKids;
}));
hoplon.core.set_replaceChild_BANG_(Element.prototype,(function (p1__14015_SHARP_){
return p1__14015_SHARP_.hoplonKids;
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
var args14016 = [];
var len__7981__auto___14023 = arguments.length;
var i__7982__auto___14024 = (0);
while(true){
if((i__7982__auto___14024 < len__7981__auto___14023)){
args14016.push((arguments[i__7982__auto___14024]));

var G__14025 = (i__7982__auto___14024 + (1));
i__7982__auto___14024 = G__14025;
continue;
} else {
}
break;
}

var G__14022 = args14016.length;
switch (G__14022) {
case 2:
return hoplon.core.set_attributes_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__8000__auto__ = (new cljs.core.IndexedSeq(args14016.slice((3)),(0),null));
return hoplon.core.set_attributes_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__8000__auto__);

}
});

hoplon.core.set_attributes_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (this$,kvs){
return hoplon.core._set_attributes_BANG_(this$,kvs);
});

hoplon.core.set_attributes_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (this$,k,v,kvs){
return hoplon.core.set_attributes_BANG_.cljs$core$IFn$_invoke$arity$2(this$,cljs.core.apply.cljs$core$IFn$_invoke$arity$4(cljs.core.hash_map,k,v,kvs));
});

hoplon.core.set_attributes_BANG_.cljs$lang$applyTo = (function (seq14017){
var G__14018 = cljs.core.first(seq14017);
var seq14017__$1 = cljs.core.next(seq14017);
var G__14019 = cljs.core.first(seq14017__$1);
var seq14017__$2 = cljs.core.next(seq14017__$1);
var G__14020 = cljs.core.first(seq14017__$2);
var seq14017__$3 = cljs.core.next(seq14017__$2);
return hoplon.core.set_attributes_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__14018,G__14019,G__14020,seq14017__$3);
});

hoplon.core.set_attributes_BANG_.cljs$lang$maxFixedArity = (3);

hoplon.core.set_styles_BANG_ = (function hoplon$core$set_styles_BANG_(var_args){
var args14027 = [];
var len__7981__auto___14034 = arguments.length;
var i__7982__auto___14035 = (0);
while(true){
if((i__7982__auto___14035 < len__7981__auto___14034)){
args14027.push((arguments[i__7982__auto___14035]));

var G__14036 = (i__7982__auto___14035 + (1));
i__7982__auto___14035 = G__14036;
continue;
} else {
}
break;
}

var G__14033 = args14027.length;
switch (G__14033) {
case 2:
return hoplon.core.set_styles_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__8000__auto__ = (new cljs.core.IndexedSeq(args14027.slice((3)),(0),null));
return hoplon.core.set_styles_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__8000__auto__);

}
});

hoplon.core.set_styles_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (this$,kvs){
return hoplon.core._set_styles_BANG_(this$,kvs);
});

hoplon.core.set_styles_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (this$,k,v,kvs){
return hoplon.core.set_styles_BANG_.cljs$core$IFn$_invoke$arity$2(this$,cljs.core.apply.cljs$core$IFn$_invoke$arity$4(cljs.core.hash_map,k,v,kvs));
});

hoplon.core.set_styles_BANG_.cljs$lang$applyTo = (function (seq14028){
var G__14029 = cljs.core.first(seq14028);
var seq14028__$1 = cljs.core.next(seq14028);
var G__14030 = cljs.core.first(seq14028__$1);
var seq14028__$2 = cljs.core.next(seq14028__$1);
var G__14031 = cljs.core.first(seq14028__$2);
var seq14028__$3 = cljs.core.next(seq14028__$2);
return hoplon.core.set_styles_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__14029,G__14030,G__14031,seq14028__$3);
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
return (function (p1__14041_SHARP_,p2__14040_SHARP_){
return (hoplon.core.do_BANG_.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.do_BANG_.cljs$core$IFn$_invoke$arity$3(elem,this$__$1,p2__14040_SHARP_) : hoplon.core.do_BANG_.call(null,elem,this$__$1,p2__14040_SHARP_));
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
hoplon.core._head_STAR_ = ((cljs.core.not(hoplon.core.is_ie8))?(function (p1__14042_SHARP_){
return p1__14042_SHARP_.head;
}):(function (p1__14043_SHARP_){
return p1__14043_SHARP_.documentElement.firstChild;
}));
hoplon.core.vector_QMARK__STAR_ = ((cljs.core.not(hoplon.core.is_ie8))?cljs.core.vector_QMARK_:(function (p1__14044_SHARP_){
try{return cljs.core.vector_QMARK_(p1__14044_SHARP_);
}catch (e14045){if((e14045 instanceof Error)){
var _ = e14045;
return null;
} else {
throw e14045;

}
}}));
hoplon.core.seq_QMARK__STAR_ = ((cljs.core.not(hoplon.core.is_ie8))?cljs.core.seq_QMARK_:(function (p1__14046_SHARP_){
try{return cljs.core.seq_QMARK_(p1__14046_SHARP_);
}catch (e14047){if((e14047 instanceof Error)){
var _ = e14047;
return null;
} else {
throw e14047;

}
}}));
hoplon.core.safe_nth = (function hoplon$core$safe_nth(var_args){
var args14048 = [];
var len__7981__auto___14052 = arguments.length;
var i__7982__auto___14053 = (0);
while(true){
if((i__7982__auto___14053 < len__7981__auto___14052)){
args14048.push((arguments[i__7982__auto___14053]));

var G__14054 = (i__7982__auto___14053 + (1));
i__7982__auto___14053 = G__14054;
continue;
} else {
}
break;
}

var G__14050 = args14048.length;
switch (G__14050) {
case 2:
return hoplon.core.safe_nth.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return hoplon.core.safe_nth.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args14048.length)].join('')));

}
});

hoplon.core.safe_nth.cljs$core$IFn$_invoke$arity$2 = (function (coll,index){
return hoplon.core.safe_nth.cljs$core$IFn$_invoke$arity$3(coll,index,null);
});

hoplon.core.safe_nth.cljs$core$IFn$_invoke$arity$3 = (function (coll,index,not_found){
try{return cljs.core.nth.cljs$core$IFn$_invoke$arity$3(coll,index,not_found);
}catch (e14051){if((e14051 instanceof Error)){
var _ = e14051;
return not_found;
} else {
throw e14051;

}
}});

hoplon.core.safe_nth.cljs$lang$maxFixedArity = 3;

hoplon.core.timeout = (function hoplon$core$timeout(var_args){
var args14056 = [];
var len__7981__auto___14059 = arguments.length;
var i__7982__auto___14060 = (0);
while(true){
if((i__7982__auto___14060 < len__7981__auto___14059)){
args14056.push((arguments[i__7982__auto___14060]));

var G__14061 = (i__7982__auto___14060 + (1));
i__7982__auto___14060 = G__14061;
continue;
} else {
}
break;
}

var G__14058 = args14056.length;
switch (G__14058) {
case 1:
return hoplon.core.timeout.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return hoplon.core.timeout.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args14056.length)].join('')));

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
var G__14079 = args;
var vec__14080 = G__14079;
var seq__14081 = cljs.core.seq(vec__14080);
var first__14082 = cljs.core.first(seq__14081);
var seq__14081__$1 = cljs.core.next(seq__14081);
var arg = first__14082;
var args__$1 = seq__14081__$1;
var attr__$1 = attr;
var kids__$1 = kids;
var G__14079__$1 = G__14079;
while(true){
var attr__$2 = attr__$1;
var kids__$2 = kids__$1;
var vec__14083 = G__14079__$1;
var seq__14084 = cljs.core.seq(vec__14083);
var first__14085 = cljs.core.first(seq__14084);
var seq__14084__$1 = cljs.core.next(seq__14084);
var arg__$1 = first__14085;
var args__$2 = seq__14084__$1;
if(cljs.core.not(arg__$1)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.persistent_BANG_(attr__$2),cljs.core.persistent_BANG_(kids__$2)], null);
} else {
if(cljs.core.map_QMARK_(arg__$1)){
var G__14086 = cljs.core.reduce_kv(((function (attr__$1,kids__$1,G__14079__$1,attr__$2,kids__$2,vec__14083,seq__14084,first__14085,seq__14084__$1,arg__$1,args__$2,attr,kids,G__14079,vec__14080,seq__14081,first__14082,seq__14081__$1,arg,args__$1){
return (function (p1__14063_SHARP_,p2__14064_SHARP_,p3__14065_SHARP_){
return cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(p1__14063_SHARP_,p2__14064_SHARP_,p3__14065_SHARP_);
});})(attr__$1,kids__$1,G__14079__$1,attr__$2,kids__$2,vec__14083,seq__14084,first__14085,seq__14084__$1,arg__$1,args__$2,attr,kids,G__14079,vec__14080,seq__14081,first__14082,seq__14081__$1,arg,args__$1))
,attr__$2,arg__$1);
var G__14087 = kids__$2;
var G__14088 = args__$2;
attr__$1 = G__14086;
kids__$1 = G__14087;
G__14079__$1 = G__14088;
continue;
} else {
if(cljs.core.truth_(hoplon.core.attribute_QMARK_(arg__$1))){
var G__14089 = cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(attr__$2,arg__$1,cljs.core.first(args__$2));
var G__14090 = kids__$2;
var G__14091 = cljs.core.rest(args__$2);
attr__$1 = G__14089;
kids__$1 = G__14090;
G__14079__$1 = G__14091;
continue;
} else {
if(cljs.core.truth_((hoplon.core.seq_QMARK__STAR_.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.seq_QMARK__STAR_.cljs$core$IFn$_invoke$arity$1(arg__$1) : hoplon.core.seq_QMARK__STAR_.call(null,arg__$1)))){
var G__14092 = attr__$2;
var G__14093 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.conj_BANG_,kids__$2,cljs.core.flatten(arg__$1));
var G__14094 = args__$2;
attr__$1 = G__14092;
kids__$1 = G__14093;
G__14079__$1 = G__14094;
continue;
} else {
if(cljs.core.truth_((hoplon.core.vector_QMARK__STAR_.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.vector_QMARK__STAR_.cljs$core$IFn$_invoke$arity$1(arg__$1) : hoplon.core.vector_QMARK__STAR_.call(null,arg__$1)))){
var G__14095 = attr__$2;
var G__14096 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.conj_BANG_,kids__$2,cljs.core.flatten(arg__$1));
var G__14097 = args__$2;
attr__$1 = G__14095;
kids__$1 = G__14096;
G__14079__$1 = G__14097;
continue;
} else {
var G__14098 = attr__$2;
var G__14099 = cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(kids__$2,arg__$1);
var G__14100 = args__$2;
attr__$1 = G__14098;
kids__$1 = G__14099;
G__14079__$1 = G__14100;
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
return cljs.core.reduce_kv((function (p1__14102_SHARP_,p2__14101_SHARP_,p3__14103_SHARP_){
hoplon.core._attr_BANG_(p2__14101_SHARP_,p1__14102_SHARP_,p3__14103_SHARP_);

return p1__14102_SHARP_;
}),this$,attr);
});
hoplon.core.add_children_BANG_ = (function hoplon$core$add_children_BANG_(this$,p__14104){
var vec__14112 = p__14104;
var seq__14113 = cljs.core.seq(vec__14112);
var first__14114 = cljs.core.first(seq__14113);
var seq__14113__$1 = cljs.core.next(seq__14113);
var child_cell = first__14114;
var _ = seq__14113__$1;
var kids = vec__14112;
var this$__$1 = this$;
var seq__14115_14119 = cljs.core.seq(cljs.core.flatten(kids));
var chunk__14116_14120 = null;
var count__14117_14121 = (0);
var i__14118_14122 = (0);
while(true){
if((i__14118_14122 < count__14117_14121)){
var x_14123 = chunk__14116_14120.cljs$core$IIndexed$_nth$arity$2(null,i__14118_14122);
var temp__4657__auto___14124 = hoplon.core.__GT_node(x_14123);
if(cljs.core.truth_(temp__4657__auto___14124)){
var x_14125__$1 = temp__4657__auto___14124;
hoplon.core.append_child_BANG_(this$__$1,x_14125__$1);
} else {
}

var G__14126 = seq__14115_14119;
var G__14127 = chunk__14116_14120;
var G__14128 = count__14117_14121;
var G__14129 = (i__14118_14122 + (1));
seq__14115_14119 = G__14126;
chunk__14116_14120 = G__14127;
count__14117_14121 = G__14128;
i__14118_14122 = G__14129;
continue;
} else {
var temp__4657__auto___14130 = cljs.core.seq(seq__14115_14119);
if(temp__4657__auto___14130){
var seq__14115_14131__$1 = temp__4657__auto___14130;
if(cljs.core.chunked_seq_QMARK_(seq__14115_14131__$1)){
var c__7687__auto___14132 = cljs.core.chunk_first(seq__14115_14131__$1);
var G__14133 = cljs.core.chunk_rest(seq__14115_14131__$1);
var G__14134 = c__7687__auto___14132;
var G__14135 = cljs.core.count(c__7687__auto___14132);
var G__14136 = (0);
seq__14115_14119 = G__14133;
chunk__14116_14120 = G__14134;
count__14117_14121 = G__14135;
i__14118_14122 = G__14136;
continue;
} else {
var x_14137 = cljs.core.first(seq__14115_14131__$1);
var temp__4657__auto___14138__$1 = hoplon.core.__GT_node(x_14137);
if(cljs.core.truth_(temp__4657__auto___14138__$1)){
var x_14139__$1 = temp__4657__auto___14138__$1;
hoplon.core.append_child_BANG_(this$__$1,x_14139__$1);
} else {
}

var G__14140 = cljs.core.next(seq__14115_14131__$1);
var G__14141 = null;
var G__14142 = (0);
var G__14143 = (0);
seq__14115_14119 = G__14140;
chunk__14116_14120 = G__14141;
count__14117_14121 = G__14142;
i__14118_14122 = G__14143;
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
var G__14184__delegate = function (self__,args){
var self____$1 = this;
var this$ = self____$1;
var vec__14145 = hoplon.core.parse_args(args);
var attr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14145,(0),null);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14145,(1),null);
var G__14148 = this$;
hoplon.core.add_attributes_BANG_(G__14148,attr);

hoplon.core.add_children_BANG_(G__14148,kids);

return G__14148;
};
var G__14184 = function (self__,var_args){
var args = null;
if (arguments.length > 1) {
var G__14185__i = 0, G__14185__a = new Array(arguments.length -  1);
while (G__14185__i < G__14185__a.length) {G__14185__a[G__14185__i] = arguments[G__14185__i + 1]; ++G__14185__i;}
  args = new cljs.core.IndexedSeq(G__14185__a,0);
} 
return G__14184__delegate.call(this,self__,args);};
G__14184.cljs$lang$maxFixedArity = 1;
G__14184.cljs$lang$applyTo = (function (arglist__14186){
var self__ = cljs.core.first(arglist__14186);
var args = cljs.core.rest(arglist__14186);
return G__14184__delegate(self__,args);
});
G__14184.cljs$core$IFn$_invoke$arity$variadic = G__14184__delegate;
return G__14184;
})()
;

Element.prototype.apply = (function (self__,args14144){
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args14144)));
});

Element.prototype.cljs$core$IFn$_invoke$arity$2 = (function() { 
var G__14187__delegate = function (args){
var this$ = this;
var vec__14149 = hoplon.core.parse_args(args);
var attr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14149,(0),null);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14149,(1),null);
var G__14152 = this$;
hoplon.core.add_attributes_BANG_(G__14152,attr);

hoplon.core.add_children_BANG_(G__14152,kids);

return G__14152;
};
var G__14187 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__14188__i = 0, G__14188__a = new Array(arguments.length -  0);
while (G__14188__i < G__14188__a.length) {G__14188__a[G__14188__i] = arguments[G__14188__i + 0]; ++G__14188__i;}
  args = new cljs.core.IndexedSeq(G__14188__a,0);
} 
return G__14187__delegate.call(this,args);};
G__14187.cljs$lang$maxFixedArity = 0;
G__14187.cljs$lang$applyTo = (function (arglist__14189){
var args = cljs.core.seq(arglist__14189);
return G__14187__delegate(args);
});
G__14187.cljs$core$IFn$_invoke$arity$variadic = G__14187__delegate;
return G__14187;
})()
;

Element.prototype.hoplon$core$ICustomElement$ = cljs.core.PROTOCOL_SENTINEL;

Element.prototype.hoplon$core$ICustomElement$_set_attributes_BANG_$arity$2 = (function (this$,kvs){
var this$__$1 = this;
var e = this$__$1;
var seq__14153 = cljs.core.seq(kvs);
var chunk__14155 = null;
var count__14156 = (0);
var i__14157 = (0);
while(true){
if((i__14157 < count__14156)){
var vec__14159 = chunk__14155.cljs$core$IIndexed$_nth$arity$2(null,i__14157);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14159,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14159,(1),null);
var k_14190__$1 = cljs.core.name(k);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(false,v)){
e.removeAttribute(k_14190__$1);
} else {
e.setAttribute(k_14190__$1,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(true,v))?k_14190__$1:v));
}

var G__14191 = seq__14153;
var G__14192 = chunk__14155;
var G__14193 = count__14156;
var G__14194 = (i__14157 + (1));
seq__14153 = G__14191;
chunk__14155 = G__14192;
count__14156 = G__14193;
i__14157 = G__14194;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq(seq__14153);
if(temp__4657__auto__){
var seq__14153__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__14153__$1)){
var c__7687__auto__ = cljs.core.chunk_first(seq__14153__$1);
var G__14195 = cljs.core.chunk_rest(seq__14153__$1);
var G__14196 = c__7687__auto__;
var G__14197 = cljs.core.count(c__7687__auto__);
var G__14198 = (0);
seq__14153 = G__14195;
chunk__14155 = G__14196;
count__14156 = G__14197;
i__14157 = G__14198;
continue;
} else {
var vec__14162 = cljs.core.first(seq__14153__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14162,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14162,(1),null);
var k_14199__$1 = cljs.core.name(k);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(false,v)){
e.removeAttribute(k_14199__$1);
} else {
e.setAttribute(k_14199__$1,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(true,v))?k_14199__$1:v));
}

var G__14200 = cljs.core.next(seq__14153__$1);
var G__14201 = null;
var G__14202 = (0);
var G__14203 = (0);
seq__14153 = G__14200;
chunk__14155 = G__14201;
count__14156 = G__14202;
i__14157 = G__14203;
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
var seq__14165 = cljs.core.seq(kvs);
var chunk__14166 = null;
var count__14167 = (0);
var i__14168 = (0);
while(true){
if((i__14168 < count__14167)){
var vec__14169 = chunk__14166.cljs$core$IIndexed$_nth$arity$2(null,i__14168);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14169,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14169,(1),null);
var G__14172_14204 = e;
var G__14173_14205 = "style";
var G__14174_14206 = cljs.core.name(k);
var G__14175_14207 = [cljs.core.str(v)].join('');
goog.object.set(G__14172_14204,G__14173_14205,G__14174_14206,G__14175_14207);

var G__14208 = seq__14165;
var G__14209 = chunk__14166;
var G__14210 = count__14167;
var G__14211 = (i__14168 + (1));
seq__14165 = G__14208;
chunk__14166 = G__14209;
count__14167 = G__14210;
i__14168 = G__14211;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq(seq__14165);
if(temp__4657__auto__){
var seq__14165__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__14165__$1)){
var c__7687__auto__ = cljs.core.chunk_first(seq__14165__$1);
var G__14212 = cljs.core.chunk_rest(seq__14165__$1);
var G__14213 = c__7687__auto__;
var G__14214 = cljs.core.count(c__7687__auto__);
var G__14215 = (0);
seq__14165 = G__14212;
chunk__14166 = G__14213;
count__14167 = G__14214;
i__14168 = G__14215;
continue;
} else {
var vec__14176 = cljs.core.first(seq__14165__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14176,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14176,(1),null);
var G__14179_14216 = e;
var G__14180_14217 = "style";
var G__14181_14218 = cljs.core.name(k);
var G__14182_14219 = [cljs.core.str(v)].join('');
goog.object.set(G__14179_14216,G__14180_14217,G__14181_14218,G__14182_14219);

var G__14220 = cljs.core.next(seq__14165__$1);
var G__14221 = null;
var G__14222 = (0);
var G__14223 = (0);
seq__14165 = G__14220;
chunk__14166 = G__14221;
count__14167 = G__14222;
i__14168 = G__14223;
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
}catch (e14183){if((e14183 instanceof Error)){
var _ = e14183;
return null;
} else {
throw e14183;

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
var G__14230__delegate = function (args){
var vec__14227 = hoplon.core.parse_args(args);
var attrs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14227,(0),null);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14227,(1),null);
hoplon.core.add_attributes_BANG_(elem,attrs);

if(cljs.core.not(cljs.core.cst$kw$static.cljs$core$IFn$_invoke$arity$1(attrs))){
hoplon.core.remove_all_kids_BANG_(elem);

return hoplon.core.add_children_BANG_(elem,kids);
} else {
return null;
}
};
var G__14230 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__14231__i = 0, G__14231__a = new Array(arguments.length -  0);
while (G__14231__i < G__14231__a.length) {G__14231__a[G__14231__i] = arguments[G__14231__i + 0]; ++G__14231__i;}
  args = new cljs.core.IndexedSeq(G__14231__a,0);
} 
return G__14230__delegate.call(this,args);};
G__14230.cljs$lang$maxFixedArity = 0;
G__14230.cljs$lang$applyTo = (function (arglist__14232){
var args = cljs.core.seq(arglist__14232);
return G__14230__delegate(args);
});
G__14230.cljs$core$IFn$_invoke$arity$variadic = G__14230__delegate;
return G__14230;
})()
;
});
hoplon.core.make_elem_ctor = (function hoplon$core$make_elem_ctor(tag){
var mkelem = (function() { 
var G__14236__delegate = function (rest__14233_SHARP_){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(hoplon.core.ensure_kids_BANG_(document.createElement(tag)),rest__14233_SHARP_);
};
var G__14236 = function (var_args){
var rest__14233_SHARP_ = null;
if (arguments.length > 0) {
var G__14237__i = 0, G__14237__a = new Array(arguments.length -  0);
while (G__14237__i < G__14237__a.length) {G__14237__a[G__14237__i] = arguments[G__14237__i + 0]; ++G__14237__i;}
  rest__14233_SHARP_ = new cljs.core.IndexedSeq(G__14237__a,0);
} 
return G__14236__delegate.call(this,rest__14233_SHARP_);};
G__14236.cljs$lang$maxFixedArity = 0;
G__14236.cljs$lang$applyTo = (function (arglist__14238){
var rest__14233_SHARP_ = cljs.core.seq(arglist__14238);
return G__14236__delegate(rest__14233_SHARP_);
});
G__14236.cljs$core$IFn$_invoke$arity$variadic = G__14236__delegate;
return G__14236;
})()
;
if(cljs.core.not(hoplon.core.is_ie8)){
return mkelem;
} else {
return ((function (mkelem){
return (function() { 
var G__14239__delegate = function (args){
try{return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(mkelem,args);
}catch (e14235){if((e14235 instanceof Error)){
var _ = e14235;
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2((hoplon.core.make_elem_ctor.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.make_elem_ctor.cljs$core$IFn$_invoke$arity$1("div") : hoplon.core.make_elem_ctor.call(null,"div")),args);
} else {
throw e14235;

}
}};
var G__14239 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__14240__i = 0, G__14240__a = new Array(arguments.length -  0);
while (G__14240__i < G__14240__a.length) {G__14240__a[G__14240__i] = arguments[G__14240__i + 0]; ++G__14240__i;}
  args = new cljs.core.IndexedSeq(G__14240__a,0);
} 
return G__14239__delegate.call(this,args);};
G__14239.cljs$lang$maxFixedArity = 0;
G__14239.cljs$lang$applyTo = (function (arglist__14241){
var args = cljs.core.seq(arglist__14241);
return G__14239__delegate(args);
});
G__14239.cljs$core$IFn$_invoke$arity$variadic = G__14239__delegate;
return G__14239;
})()
;
;})(mkelem))
}
});
hoplon.core.html = (function hoplon$core$html(var_args){
var args__7988__auto__ = [];
var len__7981__auto___14243 = arguments.length;
var i__7982__auto___14244 = (0);
while(true){
if((i__7982__auto___14244 < len__7981__auto___14243)){
args__7988__auto__.push((arguments[i__7982__auto___14244]));

var G__14245 = (i__7982__auto___14244 + (1));
i__7982__auto___14244 = G__14245;
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

hoplon.core.html.cljs$lang$applyTo = (function (seq14242){
return hoplon.core.html.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq14242));
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
hoplon.core.$text = (function hoplon$core$$text(p1__14246_SHARP_){
return document.createTextNode(p1__14246_SHARP_);
});
hoplon.core.$comment = (function hoplon$core$$comment(p1__14247_SHARP_){
return document.createComment(p1__14247_SHARP_);
});
hoplon.core._LT__BANG___ = hoplon.core.$comment;
hoplon.core.___GT_ = cljs.core.cst$kw$hoplon$core_SLASH__DASH__DASH__GT_;
hoplon.core.add_initfn_BANG_ = (function hoplon$core$add_initfn_BANG_(f){
return window.addEventListener("load",(function (){
var G__14250 = (function (){
return (f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));
});
var G__14251 = (0);
return setTimeout(G__14250,G__14251);
}));
});
hoplon.core.page_load = (function hoplon$core$page_load(){
return document.dispatchEvent("page-load");
});
hoplon.core.on_page_load = (function hoplon$core$on_page_load(f){
return document.addEventListener("page-load",f);
});
hoplon.core.add_initfn_BANG_((function (){
return document.body.addEventListener("submit",(function (p1__14252_SHARP_){
var e = p1__14252_SHARP_.target;
if(cljs.core.truth_((function (){var or__6873__auto__ = e.getAttribute("action");
if(cljs.core.truth_(or__6873__auto__)){
return or__6873__auto__;
} else {
return e.getAttribute("method");
}
})())){
return null;
} else {
return p1__14252_SHARP_.preventDefault();
}
}));
}));
if(typeof hoplon.core.do_BANG_ !== 'undefined'){
} else {
hoplon.core.do_BANG_ = (function (){var method_table__7801__auto__ = (function (){var G__14253 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__14253) : cljs.core.atom.call(null,G__14253));
})();
var prefer_table__7802__auto__ = (function (){var G__14254 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__14254) : cljs.core.atom.call(null,G__14254));
})();
var method_cache__7803__auto__ = (function (){var G__14255 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__14255) : cljs.core.atom.call(null,G__14255));
})();
var cached_hierarchy__7804__auto__ = (function (){var G__14256 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__14256) : cljs.core.atom.call(null,G__14256));
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
var G__14257 = elem;
var G__14258 = cljs.core.cst$kw$attr;
var G__14259 = cljs.core.PersistentArrayMap.fromArray([key,val], true, false);
return (hoplon.core.do_BANG_.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.do_BANG_.cljs$core$IFn$_invoke$arity$3(G__14257,G__14258,G__14259) : hoplon.core.do_BANG_.call(null,G__14257,G__14258,G__14259));
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
hoplon.core.on_BANG_ = (function (){var method_table__7801__auto__ = (function (){var G__14260 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__14260) : cljs.core.atom.call(null,G__14260));
})();
var prefer_table__7802__auto__ = (function (){var G__14261 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__14261) : cljs.core.atom.call(null,G__14261));
})();
var method_cache__7803__auto__ = (function (){var G__14262 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__14262) : cljs.core.atom.call(null,G__14262));
})();
var cached_hierarchy__7804__auto__ = (function (){var G__14263 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__14263) : cljs.core.atom.call(null,G__14263));
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
var on_deck = (function (){var G__14278 = cljs.core.List.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__14278) : cljs.core.atom.call(null,G__14278));
})();
var items_seq = javelin.core.formula(((function (on_deck){
return (function (G__14279,G__14280){
return (G__14279.cljs$core$IFn$_invoke$arity$1 ? G__14279.cljs$core$IFn$_invoke$arity$1(G__14280) : G__14279.call(null,G__14280));
});})(on_deck))
).call(null,cljs.core.seq,items);
var ith_item = ((function (on_deck,items_seq){
return (function (p1__14264_SHARP_){
return javelin.core.formula(((function (on_deck,items_seq){
return (function (G__14283,G__14282,G__14281){
return (G__14281.cljs$core$IFn$_invoke$arity$2 ? G__14281.cljs$core$IFn$_invoke$arity$2(G__14282,G__14283) : G__14281.call(null,G__14282,G__14283));
});})(on_deck,items_seq))
).call(null,p1__14264_SHARP_,items_seq,hoplon.core.safe_nth);
});})(on_deck,items_seq))
;
var shift_BANG_ = ((function (on_deck,items_seq,ith_item){
return (function (p1__14265_SHARP_){
var x = cljs.core.first((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(p1__14265_SHARP_) : cljs.core.deref.call(null,p1__14265_SHARP_)));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(p1__14265_SHARP_,cljs.core.rest);

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
var seq__14284 = cljs.core.seq(cljs.core.range.cljs$core$IFn$_invoke$arity$2(old,new$));
var chunk__14285 = null;
var count__14286 = (0);
var i__14287 = (0);
while(true){
if((i__14287 < count__14286)){
var i = chunk__14285.cljs$core$IIndexed$_nth$arity$2(null,i__14287);
var e_14290 = (function (){var or__6873__auto__ = shift_BANG_(on_deck);
if(cljs.core.truth_(or__6873__auto__)){
return or__6873__auto__;
} else {
var G__14288 = ith_item(i);
return (tpl.cljs$core$IFn$_invoke$arity$1 ? tpl.cljs$core$IFn$_invoke$arity$1(G__14288) : tpl.call(null,G__14288));
}
})();
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(current,cljs.core.conj,e_14290);

var G__14291 = seq__14284;
var G__14292 = chunk__14285;
var G__14293 = count__14286;
var G__14294 = (i__14287 + (1));
seq__14284 = G__14291;
chunk__14285 = G__14292;
count__14286 = G__14293;
i__14287 = G__14294;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq(seq__14284);
if(temp__4657__auto__){
var seq__14284__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__14284__$1)){
var c__7687__auto__ = cljs.core.chunk_first(seq__14284__$1);
var G__14295 = cljs.core.chunk_rest(seq__14284__$1);
var G__14296 = c__7687__auto__;
var G__14297 = cljs.core.count(c__7687__auto__);
var G__14298 = (0);
seq__14284 = G__14295;
chunk__14285 = G__14296;
count__14286 = G__14297;
i__14287 = G__14298;
continue;
} else {
var i = cljs.core.first(seq__14284__$1);
var e_14299 = (function (){var or__6873__auto__ = shift_BANG_(on_deck);
if(cljs.core.truth_(or__6873__auto__)){
return or__6873__auto__;
} else {
var G__14289 = ith_item(i);
return (tpl.cljs$core$IFn$_invoke$arity$1 ? tpl.cljs$core$IFn$_invoke$arity$1(G__14289) : tpl.call(null,G__14289));
}
})();
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(current,cljs.core.conj,e_14299);

var G__14300 = cljs.core.next(seq__14284__$1);
var G__14301 = null;
var G__14302 = (0);
var G__14303 = (0);
seq__14284 = G__14300;
chunk__14285 = G__14301;
count__14286 = G__14302;
i__14287 = G__14303;
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
var e_14304 = cljs.core.peek((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(current) : cljs.core.deref.call(null,current)));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(current,cljs.core.pop);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(on_deck,cljs.core.conj,e_14304);

var G__14305 = (_ + (1));
_ = G__14305;
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
var len__7981__auto___14316 = arguments.length;
var i__7982__auto___14317 = (0);
while(true){
if((i__7982__auto___14317 < len__7981__auto___14316)){
args__7988__auto__.push((arguments[i__7982__auto___14317]));

var G__14318 = (i__7982__auto___14317 + (1));
i__7982__auto___14317 = G__14318;
continue;
} else {
}
break;
}

var argseq__7989__auto__ = ((((0) < args__7988__auto__.length))?(new cljs.core.IndexedSeq(args__7988__auto__.slice((0)),(0),null)):null);
return hoplon.core.route_cell.cljs$core$IFn$_invoke$arity$variadic(argseq__7989__auto__);
});

hoplon.core.route_cell.cljs$core$IFn$_invoke$arity$variadic = (function (p__14307){
var vec__14308 = p__14307;
var default$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14308,(0),null);
var c = javelin.core.cell.cljs$core$IFn$_invoke$arity$1(window.location.hash);
var _ = javelin.core.formula(((function (c,vec__14308,default$){
return (function (G__14311,G__14313,G__14312){
var or__6873__auto__ = (function (){var and__6861__auto__ = (G__14311.cljs$core$IFn$_invoke$arity$1 ? G__14311.cljs$core$IFn$_invoke$arity$1(G__14312) : G__14311.call(null,G__14312));
if(cljs.core.truth_(and__6861__auto__)){
return G__14312;
} else {
return and__6861__auto__;
}
})();
if(cljs.core.truth_(or__6873__auto__)){
return or__6873__auto__;
} else {
return G__14313;
}
});})(c,vec__14308,default$))
).call(null,cljs.core.seq,default$,c);
window.addEventListener("hashchange",((function (_,c,vec__14308,default$){
return (function (){
var G__14314 = c;
var G__14315 = window.location.hash;
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__14314,G__14315) : cljs.core.reset_BANG_.call(null,G__14314,G__14315));
});})(_,c,vec__14308,default$))
);

return _;
});

hoplon.core.route_cell.cljs$lang$maxFixedArity = (0);

hoplon.core.route_cell.cljs$lang$applyTo = (function (seq14306){
return hoplon.core.route_cell.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq14306));
});

