(ns parallelism.values
  "Records and such that we use for passing around values and errors.")

(defrecord Value [valid value message])

(defn value [value]
  "Create a new value object."
  (->Value true value nil))

(defn error [value message]
  "Create a new error object."
  (->Value false value message))

(defmulti safe-value :valid)
(defmethod safe-value true [v]
  (list (:value v)))
(defmethod safe-value false [v]
  ())

(defn with-default [v d]
  (-> v
      (safe-value)
      (conj d)
      (last)))
