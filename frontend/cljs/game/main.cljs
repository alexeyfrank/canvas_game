(ns game.main
  (:require-macros [cljs.core.async.macros :refer [go go-loop]])
  (:require [game.utils :refer [l keymaster]]
            [utils.websocket :as websocket]
            [game.controls :as controls]
            [game.handlers :as handlers]
            [game.kinetic :as kinetic]
            [cljs.core.async :refer [<! chan put! sliding-buffer]]))

(def app-state {:stage (kinetic/stage { :container "game-container" :width 800 :height 600})
                :layer (kinetic/layer)
                :players {}})

(defn generate-player-events [chan]
  (js/setInterval (aset js/window "direction" (nth [:left :right :top :bottom] (rand-int 4))) 1000)
  (js/setInterval (fn []
                    (put! chan {:event :player-event  :data { :action :move :direction (.-direction js/window) }}))
                  100))


(defn handle-server-event [state  {event-name "event" data "data" :as event}]
  (case event-name
    "connected" (handlers/handle-connect state)
    "disconnected" (handlers/handle-disconnect state)
    "player_connected" (handlers/add-player state data)
    "player_disconnected" (handlers/remove-player state data)
    "sync_game" (handlers/sync-game state data)
    (l (str "event not found: " event-name))))


(defn create-playground [state]
  (let [layer (:layer state) stage (:stage state)]
    (.add stage layer))
  state)

(defn game-loop [init-state server-events-chan]
  (go-loop [state (create-playground init-state)]
           (let [event (<! server-events-chan)]
             (l (clj->js event))
             (recur (handle-server-event state event)))))

(defn main [app-state url]
  (let [client-events-chan (chan)
        server-events-chan (chan)]
    ;; Bind client events
    (controls/bind-keyboard-events client-events-chan)
    ;; Connect to server and handle server events
    (let [ws (websocket/connect-to-server url server-events-chan)]
      ;; Start loop for sending client events
      (websocket/send-client-events ws client-events-chan))
    ;; Start game loop for handle server events and redraw canvas
    (game-loop app-state server-events-chan)))

(defn start-game [client-id]
  (main app-state (str "ws://localhost:3000/game/" client-id)))
