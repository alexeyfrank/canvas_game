define(function() {
  function getDirection(val) {
    if (val < 1 && val > -1) { return 0; }
    return val > 0 ? 1 : -1;
  }

  function Vector2D(x, y) {
    if (typeof x == 'object') {
      this.x = x.x;
      this.y = x.y;
    } else {
      this.x = x;
      this.y = y;
    }
  }

  Vector2D.plus = function(vector1, vector2) {
    return new Vector2D(vector1.x + vector2.x, vector1.y + vector2.y);
  }

  Vector2D.minus = function(vector1, vector2) {
    return new Vector2D(vector1.x - vector2.x, vector1.y - vector2.y);
  }

  Vector2D.mul = function(vector, num) {
    return new Vector2D(vector.x * num, vector.y * num);
  }

  Vector2D.normalize = function(vector) {
    return new Vector2D(getDirection(vector.x), getDirection(vector.y));
  }

  Vector2D.applyDirection = function(target, direction) {
    return new Vector2D(target.x * direction.x, target.y * direction.y);
  }

  return Vector2D;
});
