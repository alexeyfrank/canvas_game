define(function(require) {
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
  }

  Bullet.prototype.getView = function() {
    return this._view;
  }

  Bullet.prototype.setData = function(data) {
    this._data = data;
  }

  Bullet.prototype.update = function(frame) {
  }

  Bullet.prototype.draw = function(frame) {
    this._view.position({
      x: this._data.x,
      y: this._data.y
    });
  }

  return Bullet;
})
