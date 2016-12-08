(ns parallelism.values
  "Records and such that we use for passing around values and errors.")

(defrecord Value [valid value message])

(defn value [value]
  "Create a new value object."
  (->Value true value nil))

(defn error [value message]
  "Create a new error object."
  (->Value false value message))

(defn safe-value [value default-value]
  (if (:valid value)
    (:value value)
    default-value))
