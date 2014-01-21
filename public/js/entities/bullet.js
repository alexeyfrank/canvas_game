define(function(require) {
  var Vector2D = require('lib/vector2d');

  function createView(c) {
    return new Kinetic.Rect({
      x: c.x,
      y: c.y,
      width: c.width,
      height: c.height,
      offset: {
        x: 1 * (c.width / 2),
        y: 1 * (c.height / 2),
      },
      fill: "black"
    });
  }

  function Bullet(data) {
    this._data = data;
    this._view = createView(data);
    this._state = {
      moveSpeed: 100 / 1000,
      coords: new Vector2D(this._data.x, this._data.y),
      deltaVelocity: new Vector2D(0, 0),
      rotation: this._data.rotation
    };
  }

  Bullet.prototype.getView = function() {
    return this._view;
  }

  Bullet.prototype.setData = function(data) {
    this._data = data;
  }

  Bullet.prototype.update = function(frame) {
    var neededCoords = new Vector2D(this._data.x, this._data.y);
    var currentCoords = new Vector2D(this._view.position());
    var distance = Vector2D.minus(neededCoords, currentCoords);
    var direction = Vector2D.normalize(distance);
    this._state.deltaVelocity = Vector2D.mul(direction, this._state.moveSpeed * frame.timeDiff);
  }

  Bullet.prototype.draw = function(frame) {
    this._view.move(this._state.deltaVelocity);
  }

  return Bullet;
})
