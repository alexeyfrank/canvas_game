(ns todo.handlers
  (:require-macros [cljs.core.async.macros :refer [go]])
  (:require [om.core :as om :include-macros true]
            [om.dom :as dom :include-macros true]
            [clojure.string :as string]
            [cljs.core.async :refer [<! chan put! sliding-buffer]]))

(defn l [params] (.log js/console params))

(defn set-status [e state status]
  (om/update! state assoc :status status))

(defn toggle-todo-state [todo]
  (om/update! todo assoc :status :inactive))

(defn toggle-todo-view-state [todo todo-view]
  (om/set-state! todo-view :edit-text (om/read todo :name))
  (om/set-state! todo-view :state :edit))

(defn get-classes [todo] (name (:status todo)))

(defn filter-todos [todos status]
  (case status
    :all todos
    (filter #(= status (:status %)) todos)))

(defn add-todo [e state owner]
  (when (== (.-which e) 13)
    (let [field (om/get-node owner "new-todo-field")
          value (.. field -value trim)]
      (when-not (string/blank? value)
        (om/transact! state :todos conj
                      {:name value
                       :status :active })))))

(defn edit-todo [e todo owner]
  (when (== (.-which e) 13)
    (let [value (om/get-state owner :edit-text)]
      (when-not (string/blank? value)
        (om/update! todo assoc :name value)
        (om/set-state! owner :state :normal)))))
