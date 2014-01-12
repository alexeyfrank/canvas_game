(ns todo.views
  (:require-macros [cljs.core.async.macros :refer [go]])
  (:require [om.core :as om :include-macros true]
            [om.dom :as dom :include-macros true]
            [cljs.core.async :refer [<! chan put! sliding-buffer]]
            [todo.handlers :as handlers]))

(defn filter-view [state owner]
  (reify
    om/IRender
    (render [_]
      (dom/div #js{:className "filter-view"}
               (dom/a #js{:onClick #(handlers/set-status % state :active)} "Active")
               (dom/a #js{:onClick #(handlers/set-status % state :inactive)} "Inactive")
               (dom/a #js{:onClick #(handlers/set-status % state :all)} "All")))))

(defn todo-view [todo owner]
  (reify
    om/IInitState
    (init-state [_]
      {:state :normal
       :edit-text ""})

    om/IRender
    (render [_]
      (let [state (om/get-state owner :state)]
        (dom/li nil
                (dom/div #js{:className (str "todo-view " (handlers/get-classes todo))}
                         (case state
                           :normal (dom/div #js{:onClick #(handlers/toggle-todo-state todo)
                                                :onDoubleClick #(handlers/toggle-todo-view-state todo owner)}
                                            (:name todo))

                           :edit (dom/input #js{:ref "edit-todo-field"
                                                :value (om/get-state owner :edit-text)
                                                :onChange #(om/set-state! owner :edit-text (.. % -target -value))
                                                :onKeyDown #(handlers/edit-todo % todo owner)}))))))))

(defn todos-view [state owner]
  (reify
    om/IRender
    (render [_]
      (dom/div #js{:className "todos-view"}
               (dom/ul nil
                       (om/build-all todo-view
                                     (handlers/filter-todos (:todos state) (:status state))
                                     {}))))))

(defn form-view [state owner]
  (reify
    om/IRender
    (render [_]
      (dom/div #js{:className "form-view"}
               (dom/input #js {:ref "new-todo-field"
                               :onKeyDown #(handlers/add-todo % state owner)})))))


(defn app-view [state owner]
  (reify
    om/IRender
    (render [_]
      (dom/div #js{:className "app-view"}
               (om/build filter-view state)
               (om/build form-view state)
               (om/build todos-view state)))))

