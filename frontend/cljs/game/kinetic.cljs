(ns game.kinetic)

(defn stage [opts]
  (Kinetic.Stage. (clj->js opts)))

(defn layer [& items]
  (Kinetic.Layer.))

(defn animation [handler layer]
  (Kinetic.Animation. handler layer))

(defn add-layer [stage layer]
  (.add stage layer))



(defn add-shape [layer shape]
  (.add layer shape))

(defn rect [js-opts]
  (Kinetic.Rect. js-opts))
