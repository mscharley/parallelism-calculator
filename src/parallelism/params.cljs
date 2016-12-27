(ns parallelism.params
  "Utilities to help with handling URL parameters."
  (:require [hoplon.core :as h]
            [javelin.core :as j]
            [parallelism.values :as v]))

(defn param [initial]
  "Create a new URL parameter"
  (j/cell (v/value initial)))

(defn route [& params]
  "Generate a routing structure based on a given list of parameters."
  (let [route (h/route-cell)]
    (j/cell= params)))
