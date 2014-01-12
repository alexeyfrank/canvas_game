(defproject modern-cljs "0.1.0-SNAPSHOT"
  :description "FIXME: write description"
  :url "http://example.com/FIXME"
  :license {:name "Eclipse Public License"
            :url "http://www.eclipse.org/legal/epl-v10.html"}

  :dependencies [[org.clojure/clojure "1.5.1"]
                 [org.clojure/clojurescript "0.0-2138"]
                 [org.clojure/core.match "0.2.0"]
                 [org.clojure/core.async "0.1.267.0-0d7780-alpha"]
                 [om "0.1.5"]]

  ;; CLJ AND CLJS source code path
  ;; :source-paths ["src/clj" "src/cljs"]
  :source-paths ["cljs"]

  ;; lein-cljsbuild plugin to build a CLJS project
  :plugins [[lein-cljsbuild "1.0.0"]]

  ;; cljsbuild options configuration
  :cljsbuild {:builds
              [{:id "dev"

                ;; CLJS source code path
                :source-paths ["cljs"]

                ;; Google Closure (CLS) options configuration
                :compiler {;; CLS generated JS script filename
                           :output-to "../public/dist/main.js"
                           :source-map  "../public/dist/main.js.map"

                           :output-dir "../public/dist"

                           ;; minimal JS optimization directive
                           :optimizations :whitespace


                           ;; generated JS code prettyfication
                           :pretty-print true}}]})
