(ns game.protocols)

(defprotocol ICreate
  (create [_]))

(defprotocol IMovable
  (move [x y]))
