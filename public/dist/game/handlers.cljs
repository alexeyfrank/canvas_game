(ns game.handlers
  (:require [game.actors :as actors]
            [game.utils :refer [l keymaster]]))

(defn handle-connect [state] (.log js/console "player connected") state)
(defn handle-disconnect [state] (.log js/console "player disconnected") state)

(defn update-player [state id data]
  (let [player (get-in state [:players id])]
    (.update player data))
  state)

(defn add-player [state id data]
  (let [layer (:layer state)
        p (actors/Player. id layer)]
    (.update p data)
    (assoc-in state [:players id] p)))

(defn remove-player [state id]
  (let [p (get-in state [:players id])]
    (.remove p)
    (dissoc-in state [:players id])))

(defn update-players [app-state players]
  (loop [state app-state players players]
    (if (seq players)
      (let [data (first players) p-id (get data "id")]
        (if (contains? (:players state) p-id)
          (recur (update-player state p-id data) (rest players))
          (recur (add-player state p-id data) (rest players))))
      state)))

(defn sync-game [state data]
  (let [state1 (update-players state (get data "players"))]
    state1))
