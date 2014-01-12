(ns game.player
  (:require [game.protocols :as proto]))

(defrecord Player [id x y w h]
  proto/IDrawable
  (clear [{:keys [x y w h]} canvas]
    (.clearRect canvas x y w h))

  (draw [{:keys [x y w h] :as p} canvas color]
    (aset canvas "fillStyle" color)
    (.fillRect canvas x y w h))

  ICloneable
  (-clone [p]
    (Player. (:id p) (:x p) (:y p) (:w p) (:h p))))


(defn generate-player [id config]
  (let [w (:player-width config)
        h (:player-height config)]
    (Player. id (rand-int 500) (rand-int 500) w h)))

(defn generate-players [config]
  (let [p-width (:player-width config)
        p-height (:player-height config)]
    (reduce #(assoc %1 %2 (generate-player %2 config)) {} (range 10))))
