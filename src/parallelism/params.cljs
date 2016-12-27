(ns parallelism.params
  "Utilities to help with handling URL parameters."
  (:require [hoplon.core :as h]
            [javelin.core :as j]
            [parallelism.values :as v]))

(defrecord Param [initial cell])

(defn param [initial]
  "Create a new URL parameter"
  (->Param initial (j/cell (v/value initial))))

(defn cell-for [param]
  "Retrieve the cell that represents the parameter."
  (:cell param))

(defn route [& params]
  "Generate a routing structure based on a given list of parameters."
  (let [route (h/route-cell)
        cells (map cell-for params)
        values (j/cell= (map deref cells))]
    values))
