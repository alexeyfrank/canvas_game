(ns game.shapes)

(defn stage [opts]
  (Kinetic.Stage. (clj->js opts)))

(defn layer [& items]
  (Kinetic.Layer.))

(defn add-layer [stage layer]
  (.add stage layer))

(defn add-shape [layer shape]
  (.add layer shape))

(defn rect [opts]
  (Kinetic.Rect. (clj->js opts)))
