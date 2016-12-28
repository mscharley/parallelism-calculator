(ns parallelism.params
  "Utilities to help with handling URL parameters."
  (:require [clojure.string :as str]
            [hoplon.core :as h]
            [javelin.core :as j]
            [parallelism.values :as v]))

(defmacro param
  "Create a new URL parameter"
  [initial from-string]
  `(let [cell# (j/cell (v/value ~initial))]
     (j/cell= (identity cell#)
              #(if (= (type %1) js/String)
                 (reset! cell#
                   (if (js/isNaN (~from-string %1))
                     (v/error %1 "Invalid value - evaluated to NaN")
                     (v/value %1)))
                 (reset! cell# %1)))))

(defmacro defroute
  "Generate a routing structure based on a given list of parameters.

  Parameters passed in will be pre-populated with values from the current routing hash."
  [params]
  `(j/dosync
    ~@(map (fn [[sym props]] `(def ~sym (param ~@props))) (partition 2 params))
    (let [params# (vector ~@(->> params (partition 2) (first)))
          r# (h/route-cell (str "#" (str/join (map #(:value (deref %1)) (quote params#)) "/")))
          ~(gensym) (print r#)
          values# (j/cell= (-> r# (str/replace-first #"^#" "") (str/split #"/")))
          ~(gensym) (print values#)
          param-values# (j/cell= (map vector params# values#))
          ~(gensym) (print param-values#)
          param-updates# (j/cell= (j/dosync
                                   (doall (for [[cell# value#] param-values#]
                                            (reset! cell# value#)))))]
      ())))
