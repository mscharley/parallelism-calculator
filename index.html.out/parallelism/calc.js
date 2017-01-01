// Compiled by ClojureScript 1.9.293 {:static-fns true, :optimize-constants true}
goog.provide('parallelism.calc');
goog.require('cljs.core');
parallelism.calc.efficiency = (function parallelism$calc$efficiency(overhead,runtime,x){
return ((overhead * x) + (runtime / x));
});
parallelism.calc.optimum_efficiency = (function parallelism$calc$optimum_efficiency(overhead,runtime){
return Math.sqrt((runtime / overhead));
});
parallelism.calc.runtime = (function parallelism$calc$runtime(overhead,runtime,x){
return (overhead + (runtime / x));
});
parallelism.calc.optimum_runtime = (function parallelism$calc$optimum_runtime(target,runtime){
return Math.sqrt((runtime / target));
});
parallelism.calc.optimum_runtime_range = (function parallelism$calc$optimum_runtime_range(runtime){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [parallelism.calc.optimum_runtime((-2),runtime),parallelism.calc.optimum_runtime((-1),runtime)], null);
});
