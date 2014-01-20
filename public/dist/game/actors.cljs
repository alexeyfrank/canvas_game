(ns game.actors
  (:require [pylon.classes]
            [game.utils :refer [l]]
            [game.kinetic :as kinetic])
  (:use-macros [pylon.macros :only [defclass]]))

(defn create-player-view []
  (kinetic/rect #js{ :x 0 :y 0 :width 40 :height 40 :offset {:x -20 :y -20} :fill "green" :stroke "black" :strokeWidth 4}))

(defn get-direction [delta]
    (cond (> delta 0) 1 (< delta 0) -1 (= delta 0) 0))

(defn get-move-direction [[c-x c-y] [x y]]
  (let [deltaX (- x c-x)
        deltaY (- y c-y)]
    [(get-direction deltaX) (get-direction deltaY)]))

(defn get-rotate-direction [c-angle angle]
  (let [delta (- angle c-angle)]
    (get-direction delta)))

(defclass Player
  (defn constructor [id layer]
    (set! @.id id)
    (set! @.layer layer)
    (set! @.view (create-player-view))
    (.add layer @.view)
    (set! @.data { "x" 0 "y" 0})
    (set! @.animation (kinetic/animation @.draw layer))
    (.start @.animation))

  (defn remove [] (.remove @.layer @.view))
  (defn update [data] (set! @.data data))

  (defn draw [frame]
    (@.move frame)
    (@.rotate frame))

  (defn move [frame]
    (let [speed (/ 100 1000) ;; 100px in 2 seconds
          c-pos (.position @.view)
          pos [(get @.data "x") (get @.data "y")]
          [dir-x dir-y] (get-move-direction [(.-x c-pos) (.-y c-pos)] pos)
          deltaX (.floor js/Math (* (* speed dir-x) (.-timeDiff frame)))
          deltaY (.floor js/Math (* (* speed dir-y) (.-timeDiff frame)))]
      (.move @.view #js{:x deltaX :y deltaY})))

  (defn rotate [frame]
    (let [speed (/ 360 2000)
          c-angle (.rotation @.view)
          angle (get @.data "rotation")
          dir  (get-rotate-direction c-angle angle)
          delta (.ceil js/Math (* (* speed dir) (.-timeDiff frame)))]
      (.rotate @.view delta))))


(defclass Bullet
  (defn constructor [id layer]
    (set! @.id id)
    (set! @.view (create-bullet-view))
    (.add layer @.view)
    (set! @.animation (kinetic/animation @.draw layer))
    (.start @.animation))

  (defn update [data]
    (set! @.data data))

  (defn draw [frame]

    ))




