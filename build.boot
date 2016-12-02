(set-env!
 :source-paths #{"src/cljs"}
 :resource-paths #{"html"}

 :dependencies '[[org.clojure/clojure "1.8.0"]
                 [org.clojure/clojurescript "1.9.293"]
                 [adzerk/boot-cljs "1.7.228-2"]
                 [adzerk/boot-reload "0.4.13"]
                 [org.clojure/tools.nrepl "0.2.12"]
                 [pandeiro/boot-http "0.7.6"]])

(require '[adzerk.boot-cljs :refer [cljs]]
         '[pandeiro.boot-http :refer [serve]]
         '[adzerk.boot-reload :refer [reload]])

(deftask dev
 "Launch Development Environment"
 []
 (comp
  (serve :dir "target")
  (watch)
  (reload :ws-host "localhost")
  ;;(cljs-repl) ;; before cljs task
  (cljs)
  (target :dir #{"target"})))

(deftask build
  "Run all build tasks"
  []
  (comp
    (cljs)
    (target :dir #{"target"})))
