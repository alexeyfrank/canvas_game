define(function(require) {
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
  }

  Player.prototype.getView = function() {
    return this._view;
  }

  Player.prototype.setData = function(data) {
    this._data = data;
  }

  Player.prototype.update = function(frame) {
  }

  Player.prototype.draw = function(frame) {
    this._view.position({
      x: this._data.x,
      y: this._data.y
    });

    this._view.rotation(this._data.rotation);
  }

  return Player;
})
