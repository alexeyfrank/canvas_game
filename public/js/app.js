require(['game'], function(Game) {
  var Game = require('game');

  var game = new Game({
    id: window.location.hash.slice(1, 10),
    container: 'game-container',
    width: 600,
    height: 600
  });

  game.preloadAssets();
  game.create();
  game.run();
});
