(ns parallelism.values-test
  (:require [cljs.test :refer-macros [deftest is async]]
            parallelism.values))

(deftest check-safe-value
  (let [e :hello
        v (parallelism.values/value e)]
    (is (= e
         (parallelism.values/safe-value v :foo)))))

(deftest check-error-default-value
  (let [e :hello
        v (parallelism.values/error e "Some really bad error")]
    (is (= :foo
         (parallelism.values/safe-value v :foo)))))
