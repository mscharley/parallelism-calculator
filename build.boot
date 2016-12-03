(set-env!
 :source-paths #{"src"}
 :resource-paths #{"assets"}

 :dependencies '[[org.clojure/clojure "1.8.0"]
                 [org.clojure/clojurescript "1.9.293"]
                 [adzerk/boot-cljs "1.7.228-2"]
                 [adzerk/boot-reload "0.4.13"]
                 [hoplon "6.0.0-alpha17"]
                 [org.clojure/tools.nrepl "0.2.12"]
                 [pandeiro/boot-http "0.7.6"]
                 [cljsjs/c3 "0.4.11-0"]])

(require
  '[adzerk.boot-cljs :refer [cljs]]
  '[pandeiro.boot-http :refer [serve]]
  '[hoplon.boot-hoplon :refer [hoplon prerender]]
  '[adzerk.boot-reload :refer [reload]])

(deftask dev
 "Launch Development Environment"
 []
 (comp
  (serve :dir "target" :httpkit true) ;; httpkit required for proper utf-8 support
  (watch)
  (speak)
  (hoplon)
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

(deftask prod
  "Build for production deployment."
  []
  (comp
    (hoplon)
    (cljs :optimizations :advanced)
    (target :dir #{"target"})))
