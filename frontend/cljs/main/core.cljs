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
  [:div {}
   [:div {}
     [:span {} "Game status"]
     [:span {} (str (get @game-state :status))]]

   [:div {}
     [:span {} "Generate events"]
     [:span {} (str (get @game-state :generate-events))]]

   [:div {:ref "client-id"}
    [:span {} (get @game-state :client-id)]
    [:input {:ref "client-id" :on-change #(set-client-id (-> % .-target .-value))}]
   ]

   [:button {:on-click #(start-game) } "Start game"]
   [:button {:on-click #(generate-events) } "Generate events"]
  ])

(cloact/render-component [game-controls] (.getElementById js/document "game-controls"))
