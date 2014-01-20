define(function(require) {
  var Net = require('net');
  var GameWorld = require('game_world');

  function Game(config) {
    this._config = config;
    this._net = new Net("ws://localhost:3000/game/" + window.location.hash.slice(1, 10));
    this._world = new GameWorld(config);
  }

  Game.prototype.preloadAssets = function() {}
  Game.prototype.configure = function() {
    var self = this;
    this._net.onConnect = function() { console.log("Connect") }
    this._net.onDisconnect = function() { console.log("Disconnect") }
    this._net.onMessage = function(msg) { self.handlers[msg.event].call(self, msg.data); }
  }


  Game.prototype.create = function() {
    this.configure();
    this._net.openConnection();
    this._net.processClientMessages();
    this._bindKeyboadEvents();
    this._world.create();
  }

  Game.prototype.run = function() {
    this._world.run();
  }

  Game.prototype._bindKeyboadEvents = function() {
    var self = this;
    key('up', function() { self.sendPlayerEvent({action: 'move', direction: 'up'}); })
    key('down', function() { self.sendPlayerEvent({action: 'move', direction: 'down'}); })
    key('left', function() { self.sendPlayerEvent({action: 'move', direction: 'left'}); })
    key('right', function() { self.sendPlayerEvent({action: 'move', direction: 'right'}); })
    key('q', function() { self.sendPlayerEvent({action: 'rotate', direction: 'left'}); })
    key('w', function() { self.sendPlayerEvent({action: 'rotate', direction: 'right'}); })
  }

  Game.prototype.sendPlayerEvent = function(data) {
    this._net.send({event: 'player-event', data: data});
  }

  Game.prototype.handlers = {
    sync_game: function(data) {
      this._world.updateState(data);
    },
    player_connected: function(playerId) {
      // this._world.addPlayer(playerId);
    },
    player_disconnected: function(playerId) {
      // this.world.removePlayer(playerId);
    }
  }

  return Game;
});
