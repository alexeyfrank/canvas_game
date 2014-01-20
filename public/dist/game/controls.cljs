(ns game.controls
  (:require-macros [cljs.core.async.macros :refer [go go-loop]])
  (:require [game.utils :refer [l keymaster]]
            [cljs.core.async :refer [<! chan put! sliding-buffer]]))

(defn keyboard-handler [chan event]
  (put! chan event))

(defn bind-keyboard-events [chan]
  (keymaster "left"    #(keyboard-handler chan {:event :player-event   :data { :action :move :direction :left }}))
  (keymaster "right"   #(keyboard-handler chan {:event :player-event   :data { :action :move :direction :right }}))
  (keymaster "up"      #(keyboard-handler chan {:event :player-event   :data { :action :move :direction :up }}))
  (keymaster "down"    #(keyboard-handler chan {:event :player-event   :data { :action :move :direction :down }}))
  (keymaster "q"    #(keyboard-handler chan {:event :player-event   :data { :action :rotate :direction :left }}))
  (keymaster "w"    #(keyboard-handler chan {:event :player-event   :data { :action :rotate :direction :right }}))
  (keymaster "enter"   #(keyboard-handler chan {:event :player-event   :data { :action :attack }})))
