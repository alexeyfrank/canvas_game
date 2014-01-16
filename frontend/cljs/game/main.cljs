(ns game.main
  (:require-macros [cljs.core.async.macros :refer [go go-loop]])
  (:require [game.utils :refer [l keymaster]]
            [utils.websocket :as websocket]
            [game.shapes :as shape]
            [cljs.core.async :refer [<! chan put! sliding-buffer]]))

(def config {:point-width 5
             :point-height 5
             :player-width 40
             :player-height 40})

(def app-state {:stage (shape/stage { :container "app-container" :width 700 :height js/innerHeight})
                :layer (shape/layer)
                :players {}})


(defn generate-player-events [chan]
  (js/setInterval (aset js/window "direction" (nth [:left :right :top :bottom] (rand-int 4))) 1000)
  (js/setInterval (fn []
                    (put! chan {:event :player-event  :data { :action :move :direction (.-direction js/window) }}))
                  100))


;; (defn get-new-coords [{x :x y :y } direction]
;;   (let [p-w (:point-width config)
;;         p-h (:point-height config)
;;         w (:width config)
;;         h (:height config)]
;;     (case direction
;;       :right  [(if (>= (+ x p-w) w) w (+ x p-w)), y]
;;       :left   [(if (<= (- x p-w) 0) 0 (- x p-w)), y]
;;       :up     [x, (if (<= (- y p-h) 0) 0 (- y p-h))]
;;       :down   [x, (if (>= (+ y p-h) h) h (+ y p-h))])))
;;
;; (defn get-new-player [player direction]
;;   (let [[x y] (get-new-coords player direction)]
;;     (assoc player :x x :y y)))
;;
;; (defn intersect? [first-obj second-obj]
;;   (let [f-w (:w first-obj)
;;         f-h (:h first-obj)
;;         s-w (:w second-obj)
;;         s-h (:h second-obj)
;;         f-x (:x first-obj)
;;         s-x (:x second-obj)
;;         f-y (:y first-obj)
;;         s-y (:y second-obj)]
;;     (or
;;       ; Top-left
;;       (and
;;         (and (<= f-x s-x) (>= (+ f-x f-w) s-x))
;;         (and (<= f-y s-y) (>= (+ f-y f-h) s-y)))
;;       ; Bottom-left
;;       (and
;;         (and (<= f-x s-x) (>= (+ f-x f-w) s-x))
;;         (and (>= f-y s-y) (<= f-y (+ s-y s-h))))
;;       ; Top-right
;;       (and
;;         (and (>= f-x s-x) (<= f-x (+ s-x s-w)))
;;         (and (<= f-y s-y) (>= (+ f-y f-h) s-y)))
;;       ; Bottom-right
;;       (and
;;         (and (>= f-x s-x) (<= f-x (+ s-x s-w)))
;;         (and (>= f-y s-y) (<= f-y (+ s-y s-h)))))))
;;
;; (defn can-move-player? [ state p direction ]
;;   (let [players (:players state)
;;         new-player (get-new-player p direction)]
;;     (not-any? (fn [[idx player]]
;;                 (if (not (= (:id player) (:id new-player)))
;;                   (intersect? new-player player)
;;                   false))
;;               players)))
;;
;; (defn move-player [state p-id {:keys [direction]}]
;;   (let [players (:players state)
;;         p (get players p-id)]
;;     (if (can-move-player? state p direction)
;;       (let [new-player (get-new-player p direction)
;;             draw-chan (:draw-chan state)]
;;         (put! draw-chan [p new-player])
;;         (assoc-in state [:players p-id] new-player))
;;       state)))
;;
;; (defn attack-player [state p-id {:keys [color]}]
;;   (let [players (:players state)
;;         p (get players p-id)]
;;     (l "attack!")
;;     state))


(defn keyboard-handler [chan event]
  (put! chan event))

(defn bind-keyboard-events [chan]
  (keymaster "left"    #(keyboard-handler chan {:event :player-event   :data { :action :move :direction :left }}))
  (keymaster "right"   #(keyboard-handler chan {:event :player-event   :data { :action :move :direction :right }}))
  (keymaster "up"      #(keyboard-handler chan {:event :player-event   :data { :action :move :direction :up }}))
  (keymaster "down"    #(keyboard-handler chan {:event :player-event   :data { :action :move :direction :down }}))
  (keymaster "enter"   #(keyboard-handler chan {:event :player-event   :data { :action :attack }})))


(defn create-player-view [player]
  (shape/rect {:x (get player "x")
               :y (get player "y")
               :width (get player "width")
               :height (get player "height")
               :fill "green"
               :stroke "black"
               :strokeWidth 4}))

(defn create-playground-and-send-get-state [state, client-events-chan]
  (let [layer (:layer state)
        stage (:stage state)]
    (.add stage layer))

  (put! client-events-chan {:event :get-state})
  state)

(defn redraw-players [app-state layer players]
  (let [player-views (:players app-state)]
    (loop [state app-state players players]
      (if (seq players)
        (let [player (first players)
              player-id (get player "id")]
          (recur
            (if (contains? player-views player-id)
              (let [player-view (get player-views player-id)]
                (.setX player-view (get player "x"))
                (.setY player-view (get player "y"))
                state)
              (let [player-view (create-player-view player)]
                (shape/add-shape layer player-view)
                (assoc-in state [:players player-id] player-view)))
          (rest players)))
      state))))

(defn sync-game [state data]
  (let [layer (:layer state)
        players (get data "players")
        state1 (redraw-players state layer players)]
    (l layer)
    (.batchDraw layer)
    state1))

(defn handle-event
  [state client-events-chan {event-name "event" data "data" :as event}]
  (l event-name)
  (l data)
  (case event-name
    "connected" (create-playground-and-send-get-state state client-events-chan)
    "sync-game" (sync-game state data)
    ;; Todo add disconnect and reconnect events
    (l (str "event not found: " event-name))))

(defn game-loop [init-state server-events-chan client-events-chan]
  (go-loop
    [state init-state]
    (let [event (<! server-events-chan)]
      (l (clj->js event))
      (recur (handle-event state client-events-chan event)))))


(defn main [app-state url]
  (let [client-events-chan (chan)
        server-events-chan (chan)]

    ;; Bind client events
    (bind-keyboard-events client-events-chan)

    ;; Connect to server and handle server events
    (let [ws (websocket/connect-to-server url server-events-chan)]
      ;; Start loop for sending client events
      (websocket/send-client-events ws client-events-chan))

    ;; Start game loop for handle server events and redraw canvas
    (game-loop app-state server-events-chan client-events-chan)))

(defn start-game [client-id]
  (main app-state (str "ws://localhost:3000/game/" client-id)))
