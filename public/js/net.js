define(function(require) {
  function Net(url) {
    this._url = url;
    this._buffer = [];
    this._ws = null;
  }

  Net.prototype.send = function(msg) {
    this._buffer.push(msg);
  }

  Net.prototype.onConnect = function(msg) {}
  Net.prototype.onDisconnect = function(msg) {}
  Net.prototype.onMessage = function(msg) {}

  Net.prototype.openConnection = function() {
    var self = this;
    this._ws = $.bullet(this._url);
    this._ws.onopen = function() {
      self.onConnect();
    }
    this._ws.onmessage = function(msg) {
      self.onMessage(JSON.parse(msg.data));
    }
    this._ws.onDisconnect = function() {
      this.onDisconnect();
    }

    this._ws.onheartbeat = function() {
      self._ws.send('ping');
    }
  }

  Net.prototype.processClientMessages = function() {
    setInterval(function() {
      if (this._buffer.length > 0) {
        var text = JSON.stringify(this._buffer);
        this._ws.send(text);
        this._buffer = [];
      }
    }.bind(this), 100);
  }

  return Net;
});
