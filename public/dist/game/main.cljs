(ns game.main
  (:require-macros [cljs.core.async.macros :refer [go]])
  (:require [game.utils :refer [l keymaster]]
            [game.protocols :refer [IDrawable draw clear]]
            [game.player :refer [Player. generate-players]]
            [cljs.core.async :refer [<! chan put! sliding-buffer]]))

(def config {:width js/innerWidth
             :height (- js/innerHeight 100)
             :point-width 5
             :point-height 5
             :player-width 40
             :player-height 40})

(def game-init-state {:draw-chan (chan)
                      :events-chan (chan)
                      :players (generate-players config)
                      :current-player-id 0 })

(defn get-canvas-context
  [canvas-el]
  (let [width  (:width config)
        height (:height config)]
    (aset canvas-el "width" width)
    (aset canvas-el "height" height)
    (.getContext canvas-el "2d")))

(defn redraw [canvas old-actor new-actor]
  (clear old-actor canvas)
  (draw new-actor canvas "#ff0000"))

(defn generate-player-events [state chan]
  (let [current-player-id (:current-player-id state)]
    (js/setInterval (fn []
                      (doseq
                        [[id player] (:players state)]
                        (if (not (= id current-player-id))
                          (put! chan {:event :player-move
                                      :data {:player id
                                             :direction (nth [:up :down :left :right] (rand-int 4))}}))))
                    100)))

(defn keyboard-handler [state chan direction]
  (put! chan {:event :player-move
              :data {:player (:current-player-id state)
                     :direction direction}}))

(defn get-new-coords [{x :x y :y } direction]
  (let [p-w (:point-width config)
        p-h (:point-height config)
        w (:width config)
        h (:height config)]
    (case direction
      :right  [(if (>= (+ x p-w) w) w (+ x p-w)), y]
      :left   [(if (<= (- x p-w) 0) 0 (- x p-w)), y]
      :up     [x, (if (<= (- y p-h) 0) 0 (- y p-h))]
      :down   [x, (if (>= (+ y p-h) h) h (+ y p-h))])))

(defn get-new-player [player direction]
  (let [[x y] (get-new-coords player direction)]
    (assoc player :x x :y y)))

(defn intersect? [first-obj second-obj]
  (let [f-w (:w first-obj)
        f-h (:h first-obj)
        s-w (:w second-obj)
        s-h (:h second-obj)
        f-x (:x first-obj)
        s-x (:x second-obj)
        f-y (:y first-obj)
        s-y (:y second-obj)]
    (or
      ; Top-left
      (and
        (and (<= f-x s-x) (>= (+ f-x f-w) s-x))
        (and (<= f-y s-y) (>= (+ f-y f-h) s-y)))
      ; Bottom-left
      (and
        (and (<= f-x s-x) (>= (+ f-x f-w) s-x))
        (and (>= f-y s-y) (<= f-y (+ s-y s-h))))
      ; Top-right
      (and
        (and (>= f-x s-x) (<= f-x (+ s-x s-w)))
        (and (<= f-y s-y) (>= (+ f-y f-h) s-y)))
      ; Bottom-right
      (and
        (and (>= f-x s-x) (<= f-x (+ s-x s-w)))
        (and (>= f-y s-y) (<= f-y (+ s-y s-h)))))))

(defn can-move-player? [ state p direction ]
  (let [players (:players state)
        new-player (get-new-player p direction)]
    (not-any? (fn [[idx player]]
                (if (not (= (:id player) (:id new-player)))
                  (intersect? new-player player)
                  false))
              players)))

(defn move-player [state p-id direction]
  (let [players (:players state)
        p (get players p-id)]
    (if (can-move-player? state p direction)
      (let [new-player (get-new-player p direction)
            draw-chan (:draw-chan state)]
        (put! draw-chan [p new-player])
        (assoc-in state [:players p-id] new-player))
      state)))

(defn handle-event
  [state { event :event { player-id :player direction :direction} :data}] ;; { player-id direction }}];
  (case event
    :player-move (move-player state player-id direction)))

(defn game-loop [game-init-state canvas]
  (let [draw-chan (:draw-chan game-init-state)
        events-chan (:events-chan game-init-state)]
    (go (loop [state game-init-state]
          (let [state (handle-event state (<! events-chan))]
            (recur state))))

    (go (while true
          (let [[old-actor new-actor] (<! draw-chan)]
            (redraw canvas old-actor new-actor))))))

(defn bind-keyboard-events [state chan]
  (keymaster "left"   #(keyboard-handler state chan :left))
  (keymaster "right"  #(keyboard-handler state chan :right))
  (keymaster "up"     #(keyboard-handler state chan :up))
  (keymaster "down"   #(keyboard-handler state chan :down)))

(defn main [state canvas-el]
  (let [canvas (get-canvas-context canvas-el)
        events-chan (:events-chan state)]
    (bind-keyboard-events state events-chan)
    (generate-player-events state events-chan)
    (game-loop state canvas)))

(main game-init-state (.getElementById js/document "app"))
