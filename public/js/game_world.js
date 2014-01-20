function apply(collection, method, args) {
  for (var key in collection) {
    var item = collection[key];
    item[method].apply(item, args);
  }
}

define(function(require) {
  var Entities = require('entities');

  function World(config) {
    this._config = config;
    this._view = {
      stage: null,
      bgLayer: null,
      fgLayer: null
    };

    this._state = {
      players: {},
      bullets: {}
    }
  }

  World.prototype.create = function() {
    this._view.stage = new Kinetic.Stage({ container: this._config.container, width: this._config.width, height: this._config.height });


    this._view.bgLayer = new Kinetic.Layer();
    this._view.fgLayer = new Kinetic.Layer();
    this._view.stage.add(this._view.bgLayer);
    this._view.stage.add(this._view.fgLayer);
  }

  World.prototype.updateState = function(serverState) {
    this._updatePlayers(serverState.players);
    this._updateBullets(serverState.bullets);
  }

  World.prototype.run = function() {
    var animation = new Kinetic.Animation(function(frame) {
      this.update(frame);
      this.draw(frame);
    }.bind(this), this._view.fgLayer);
    animation.start();
  }

  World.prototype._updatePlayers = function(players) {
    players.forEach(function(data) {
      var clientPlayer = this._state.players[data.id];

      if (!clientPlayer) { // Add player
        var clientPlayer = new Entities.Player(data);
        this._view.fgLayer.add(clientPlayer.getView());
        this._state.players[data.id] = clientPlayer;
      } else if (!data.connected) { // Remove player
        var clientPlayer = this._state.players[data.id];
        clientPlayer.getView().remove();
        delete this._state.players[data.id];
      } else { // Update player
        var clientPlayer = this._state.players[data.id];
        clientPlayer.setData(data);
      }
    }.bind(this));
  }

  World.prototype._updateBullets = function(bullets) {
    bullets.forEach(function(data) {
      var bullet = this._state.bullets[data.id];

      if (!bullet) {
        var bullet = new Entities.Bullet(data);
        this._view.fgLayer.add(bullet.getView());
        this._state.bullets[data.id] = bullet;
      } else if (!data.exist) {
        var bullet = this._state.bullets[data.id];
        bullet.getView().remove();
        delete this._state.bullets[data.id];
      } else {
        var bullet = this._state.bullets[data.id];
        bullet.setData(data);
      }
    }.bind(this));
  }

  World.prototype.update = function(frame) {
    apply(this._state.players, 'update', [frame]);
    apply(this._state.bullets, 'update', [frame]);
  }

  World.prototype.draw = function(frame) {
    apply(this._state.players, 'draw', [frame]);
    apply(this._state.bullets, 'draw', [frame]);
  }

  return World;
});
