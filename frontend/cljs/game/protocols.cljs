(ns game.protocols)

(defprotocol IDrawable
  (clear [obj canvas])
  (draw [obj canvas color]))
