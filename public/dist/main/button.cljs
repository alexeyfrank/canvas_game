(ns main.button
  (:require-macros [cljs.core.match.macros :refer [match]])
  (:require-macros [cljs.core.async.macros :refer [go]])
  (:require [om.core :as om :include-macros true]
            [om.dom :as dom :include-macros true]
            [main.ajax :as ajax]
            [clojure.string :as string]
            [cljs.core.async :refer [<! chan put! sliding-buffer]]
            [todo.views :refer [app-view]] ))

(defn l [params] (.log js/console params))

(def app-state {:todos []
                :status :all })


;; (om/root app-state app-view (.getElementById js/document "app"))
