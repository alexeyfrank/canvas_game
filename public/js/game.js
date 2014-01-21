define(function(require) {
  var Net = require('net');
  var GameWorld = require('game_world');

  function Game(config) {
    this._config = config;
    this._net = new Net("ws://localhost:3000/game/" + config.id);
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
    console.log(this._config.id)
    if (this._config.id == 'bot') {
      this.generatePlayerEvents();
    }
  }

  Game.prototype._bindKeyboadEvents = function() {
    var self = this;
    key('up', function() { self.sendPlayerEvent({action: 'move', direction: 'up'}); })
    key('down', function() { self.sendPlayerEvent({action: 'move', direction: 'down'}); })
    key('left', function() { self.sendPlayerEvent({action: 'move', direction: 'left'}); })
    key('right', function() { self.sendPlayerEvent({action: 'move', direction: 'right'}); })
    key('q', function() { self.sendPlayerEvent({action: 'rotate', direction: 'left'}); })
    key('w', function() { self.sendPlayerEvent({action: 'rotate', direction: 'right'}); })
    key('enter', function() { console.log(11); self.sendPlayerEvent({action: 'attack' }); })
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

  Game.prototype.generatePlayerEvents = function() {
    window.moveCounter = 0;
    setInterval(function () {
      window.moveCounter++;
      if (moveCounter < 35) {
        this.sendPlayerEvent({action: 'move', direction: 'right'});
      } else if (moveCounter < 70) {
        this.sendPlayerEvent({action: 'move', direction: 'down'});
      } else if (moveCounter < 105) {
        this.sendPlayerEvent({action: 'move', direction: 'left'});
      } else if (moveCounter < 140){
        this.sendPlayerEvent({action: 'move', direction: 'up'});
      } else {
        moveCounter = 0;
      }
    }.bind(this), 100);

    setInterval(function() {
      this.sendPlayerEvent({action: 'attack'});
    }.bind(this), 1000);
  }

  return Game;
});
