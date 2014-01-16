(ns utils.websocket
  (:require-macros [cljs.core.async.macros :refer [go go-loop]])
  (:require [cljs.core.async :refer [put!]]))

(defn create [url]
  (.bullet js/$ url))

(defn configure [ws config]
  (doseq
    [[k v] config]
    (aset ws (name k) v))
  ws)

(defn connect-to-server [url chan]
  (let [ws (create url)]
    (configure ws {:onmessage (fn [e] (put! chan (js->clj (JSON/parse (.-data e)))))
                   :onopen (fn [] (put! chan {"event" "connected"}))
                   })))

(defn send-client-events [ws chan]
  (go-loop []
           (let [event (<! chan)
                 event-text (JSON/stringify (clj->js event))]
             (.send ws event-text))
    (recur)))
