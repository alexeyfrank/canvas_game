(ns game.utils)


(defn l
  [params]
  (.log js/console params))

(defn keymaster
  [keys cb]
  (js/key keys cb))
