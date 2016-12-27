(ns parallelism.params
  "Utilities to help with handling URL parameters."
  (:require [clojure.string :as str]
            [hoplon.core :as h]
            [javelin.core :as j]
            [parallelism.values :as v]))

(defn param [initial from-string]
  "Create a new URL parameter"
  (let [c (j/cell (v/value initial))]
    (j/cell= (identity c)
             #(if (= (type %1) js/String)
                (reset! c (v/value (from-string %1)))
                (reset! c %1)))))

(defn route [& params]
  "Generate a routing structure based on a given list of parameters.

  Parameters passed in will be pre-populated with values from the current routing hash."
  (let [r (h/route-cell)
        values (j/cell= (-> r (str/replace-first #"^#" "") (str/split #"/")))
        paramValues (j/cell= (map vector params values))
        _ (j/cell= (j/dosync
                     (-> (for [[cell value] paramValues]
                           (reset! cell value))
                       (doall))))]
    (j/cell= params)))
