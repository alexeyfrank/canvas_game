(ns main.ajax
  (:require
    [cljs.core.async :refer [<! chan put!]]))

(defn ajax-req [url method]
  (let [req (js/XMLHttpRequest.)
        ch (chan)]
    (.open req method url true)
    (aset req
          "onreadystatechange"
          #(when (and (= 4 (.-readyState req)) (= 200 (.-status req)))
             (let [json (-> req .-responseText JSON/parse js->clj)]
               (put! ch json) )))
    (.send req nil)
    ch))

(defn GET  [url] (ajax-req url "GET"))

;; Demo
;;       (def config {:users-url "http://nastachku.ru/users.json"})
;;
;;       (let [chan (ajax/GET (:users-url config))]
;;         (go (om/update! state assoc :users (into [] (get (<! chan) "users"))))))
