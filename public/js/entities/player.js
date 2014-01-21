define(function(require) {
  var Vector2D = require('lib/vector2d');

  function createPlayerView(c) {
    return new Kinetic.Rect({
      x: c.x,
      y: c.y,
      width: c.width,
      height: c.height,
      offset: {
        x: 1 * (c.width / 2),
        y: 1 * (c.height / 2),
      },
      fill: "green",
      stroke: "black",
      strokeWidth: 4
    });
  }

  function Player(data) {
    this._data = data;
    this._view = createPlayerView(data);
    this._state = {
      moveSpeed: 60 / 1000,
      coords: new Vector2D(this._data.x, this._data.y),
      deltaVelocity: new Vector2D(0, 0),
      rotation: this._data.rotation
    };
  }

  Player.prototype.getView = function() {
    return this._view;
  }

  Player.prototype.setData = function(data) {
    this._data = data;
  }

  Player.prototype.update = function(frame) {
    var neededCoords = new Vector2D(this._data.x, this._data.y);
    var currentCoords = new Vector2D(this._view.position());
    var distance = Vector2D.minus(neededCoords, currentCoords);
    var direction = Vector2D.normalize(distance);
    this._state.deltaVelocity = Vector2D.mul(direction, this._state.moveSpeed * frame.timeDiff);
  }

  Player.prototype.draw = function(frame) {
    this._view.move(this._state.deltaVelocity);

    this._view.rotation(this._data.rotation);
  }

  return Player;
})
