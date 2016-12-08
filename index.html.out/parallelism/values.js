// Compiled by ClojureScript 1.9.293 {:static-fns true, :optimize-constants true}
goog.provide('parallelism.values');
goog.require('cljs.core');

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
parallelism.values.Value = (function (valid,value,message,__meta,__extmap,__hash){
this.valid = valid;
this.value = value;
this.message = message;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
parallelism.values.Value.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__7495__auto__,k__7496__auto__){
var self__ = this;
var this__7495__auto____$1 = this;
return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(this__7495__auto____$1,k__7496__auto__,null);
});

parallelism.values.Value.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__7497__auto__,k13017,else__7498__auto__){
var self__ = this;
var this__7497__auto____$1 = this;
var G__13019 = (((k13017 instanceof cljs.core.Keyword))?k13017.fqn:null);
switch (G__13019) {
case "valid":
return self__.valid;

break;
case "value":
return self__.value;

break;
case "message":
return self__.message;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k13017,else__7498__auto__);

}
});

parallelism.values.Value.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__7509__auto__,writer__7510__auto__,opts__7511__auto__){
var self__ = this;
var this__7509__auto____$1 = this;
var pr_pair__7512__auto__ = ((function (this__7509__auto____$1){
return (function (keyval__7513__auto__){
return cljs.core.pr_sequential_writer(writer__7510__auto__,cljs.core.pr_writer,""," ","",opts__7511__auto__,keyval__7513__auto__);
});})(this__7509__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__7510__auto__,pr_pair__7512__auto__,"#parallelism.values.Value{",", ","}",opts__7511__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$valid,self__.valid],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$value,self__.value],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$message,self__.message],null))], null),self__.__extmap));
});

parallelism.values.Value.prototype.cljs$core$IIterable$ = cljs.core.PROTOCOL_SENTINEL;

parallelism.values.Value.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__13016){
var self__ = this;
var G__13016__$1 = this;
return (new cljs.core.RecordIter((0),G__13016__$1,3,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$valid,cljs.core.cst$kw$value,cljs.core.cst$kw$message], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

parallelism.values.Value.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__7493__auto__){
var self__ = this;
var this__7493__auto____$1 = this;
return self__.__meta;
});

parallelism.values.Value.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__7489__auto__){
var self__ = this;
var this__7489__auto____$1 = this;
return (new parallelism.values.Value(self__.valid,self__.value,self__.message,self__.__meta,self__.__extmap,self__.__hash));
});

parallelism.values.Value.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__7499__auto__){
var self__ = this;
var this__7499__auto____$1 = this;
return (3 + cljs.core.count(self__.__extmap));
});

parallelism.values.Value.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__7490__auto__){
var self__ = this;
var this__7490__auto____$1 = this;
var h__7308__auto__ = self__.__hash;
if(!((h__7308__auto__ == null))){
return h__7308__auto__;
} else {
var h__7308__auto____$1 = cljs.core.hash_imap(this__7490__auto____$1);
self__.__hash = h__7308__auto____$1;

return h__7308__auto____$1;
}
});

parallelism.values.Value.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__7491__auto__,other__7492__auto__){
var self__ = this;
var this__7491__auto____$1 = this;
if(cljs.core.truth_((function (){var and__6861__auto__ = other__7492__auto__;
if(cljs.core.truth_(and__6861__auto__)){
var and__6861__auto____$1 = (this__7491__auto____$1.constructor === other__7492__auto__.constructor);
if(and__6861__auto____$1){
return cljs.core.equiv_map(this__7491__auto____$1,other__7492__auto__);
} else {
return and__6861__auto____$1;
}
} else {
return and__6861__auto__;
}
})())){
return true;
} else {
return false;
}
});

parallelism.values.Value.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__7504__auto__,k__7505__auto__){
var self__ = this;
var this__7504__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$valid,null,cljs.core.cst$kw$value,null,cljs.core.cst$kw$message,null], null), null),k__7505__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__7504__auto____$1),self__.__meta),k__7505__auto__);
} else {
return (new parallelism.values.Value(self__.valid,self__.value,self__.message,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__7505__auto__)),null));
}
});

parallelism.values.Value.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__7502__auto__,k__7503__auto__,G__13016){
var self__ = this;
var this__7502__auto____$1 = this;
var pred__13020 = cljs.core.keyword_identical_QMARK_;
var expr__13021 = k__7503__auto__;
if(cljs.core.truth_((function (){var G__13023 = cljs.core.cst$kw$valid;
var G__13024 = expr__13021;
return (pred__13020.cljs$core$IFn$_invoke$arity$2 ? pred__13020.cljs$core$IFn$_invoke$arity$2(G__13023,G__13024) : pred__13020.call(null,G__13023,G__13024));
})())){
return (new parallelism.values.Value(G__13016,self__.value,self__.message,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__13025 = cljs.core.cst$kw$value;
var G__13026 = expr__13021;
return (pred__13020.cljs$core$IFn$_invoke$arity$2 ? pred__13020.cljs$core$IFn$_invoke$arity$2(G__13025,G__13026) : pred__13020.call(null,G__13025,G__13026));
})())){
return (new parallelism.values.Value(self__.valid,G__13016,self__.message,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__13027 = cljs.core.cst$kw$message;
var G__13028 = expr__13021;
return (pred__13020.cljs$core$IFn$_invoke$arity$2 ? pred__13020.cljs$core$IFn$_invoke$arity$2(G__13027,G__13028) : pred__13020.call(null,G__13027,G__13028));
})())){
return (new parallelism.values.Value(self__.valid,self__.value,G__13016,self__.__meta,self__.__extmap,null));
} else {
return (new parallelism.values.Value(self__.valid,self__.value,self__.message,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__7503__auto__,G__13016),null));
}
}
}
});

parallelism.values.Value.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__7507__auto__){
var self__ = this;
var this__7507__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$valid,self__.valid],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$value,self__.value],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$message,self__.message],null))], null),self__.__extmap));
});

parallelism.values.Value.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__7494__auto__,G__13016){
var self__ = this;
var this__7494__auto____$1 = this;
return (new parallelism.values.Value(self__.valid,self__.value,self__.message,G__13016,self__.__extmap,self__.__hash));
});

parallelism.values.Value.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__7500__auto__,entry__7501__auto__){
var self__ = this;
var this__7500__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__7501__auto__)){
return cljs.core._assoc(this__7500__auto____$1,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__7501__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__7501__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__7500__auto____$1,entry__7501__auto__);
}
});

parallelism.values.Value.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$valid,cljs.core.cst$sym$value,cljs.core.cst$sym$message], null);
});

parallelism.values.Value.cljs$lang$type = true;

parallelism.values.Value.cljs$lang$ctorPrSeq = (function (this__7529__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"parallelism.values/Value");
});

parallelism.values.Value.cljs$lang$ctorPrWriter = (function (this__7529__auto__,writer__7530__auto__){
return cljs.core._write(writer__7530__auto__,"parallelism.values/Value");
});

parallelism.values.__GT_Value = (function parallelism$values$__GT_Value(valid,value,message){
return (new parallelism.values.Value(valid,value,message,null,null,null));
});

parallelism.values.map__GT_Value = (function parallelism$values$map__GT_Value(G__13018){
return (new parallelism.values.Value(cljs.core.cst$kw$valid.cljs$core$IFn$_invoke$arity$1(G__13018),cljs.core.cst$kw$value.cljs$core$IFn$_invoke$arity$1(G__13018),cljs.core.cst$kw$message.cljs$core$IFn$_invoke$arity$1(G__13018),null,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__13018,cljs.core.cst$kw$valid,cljs.core.array_seq([cljs.core.cst$kw$value,cljs.core.cst$kw$message], 0)),null));
});

parallelism.values.value = (function parallelism$values$value(value){

return parallelism.values.__GT_Value(true,value,null);
});
parallelism.values.error = (function parallelism$values$error(value,message){

return parallelism.values.__GT_Value(false,value,message);
});
parallelism.values.safe_value = (function parallelism$values$safe_value(value,default_value){
if(cljs.core.truth_(cljs.core.cst$kw$valid.cljs$core$IFn$_invoke$arity$1(value))){
return cljs.core.cst$kw$value.cljs$core$IFn$_invoke$arity$1(value);
} else {
return default_value;
}
});
