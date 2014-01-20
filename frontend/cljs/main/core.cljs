(ns main.core
  (:require [cloact.core :as cloact :refer [atom]]
            [game.main :as game]))

(def game-state (atom {:status :not-started
                       :generate-events false
                       }))

(defn start-game []
  (swap! game-state assoc :status :started)
  (game/start-game (get @game-state :client-id)))

(defn generate-events []
  (swap! game-state assoc :generate-events true))

(defn set-client-id [id]
  (swap! game-state assoc :client-id id))


(defn game-controls []
  [:div {:class "well"}
   [:div { :class "form-group" }
     [:label {} (str "Game status: " (get @game-state :status))]]

   [:div { :class "form-group" }
     [:label {} (str "Generate events: " (get @game-state :generate-events))]]

   [:div { :class "form-group" }
    [:label {} "Client ID: "]
    [:input {:ref "client-id" :on-change #(set-client-id (-> % .-target .-value))}]
   ]

   [:button {:class "btn btn-default" :on-click #(start-game) } "Start game"]
   [:button {:class "btn btn-default" :on-click #(generate-events) } "Generate events"]
  ])

(cloact/render-component [game-controls] (.getElementById js/document "game-controls"))
