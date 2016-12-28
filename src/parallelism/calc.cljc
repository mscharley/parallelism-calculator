(ns parallelism.calc
  "Utility functions to handle the algorithms we require.")

(defn efficiency [overhead runtime x]
  (+ (* overhead x) (/ runtime x)))
(defn optimum-efficiency [overhead runtime]
  (.sqrt js/Math (/ runtime overhead)))
(defn runtime [overhead runtime x]
  (+ overhead (/ runtime x)))
(defn optimum-runtime [target runtime]
  (.sqrt js/Math (/ runtime target)))
(defn optimum-runtime-range [runtime]
  [(optimum-runtime -2 runtime) (optimum-runtime -1 runtime)])
