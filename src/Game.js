var BASE_WIDTH = 540;
var BASE_HEIGHT = 484;

var SCALE_RATIO = window.innerWidth < window.innerHeight ? window.innerWidth / BASE_WIDTH : window.innerHeight / BASE_HEIGHT;
var SPEED_RATIO = SCALE_RATIO;

var IMAGESET_ANSIS = 'ansis';
var IMAGESET_KRISTINE = 'kristine';
var IMAGESET_EDAVARDI = 'edavardi';

function Game() {
  this._scene = new StartupScene(this);
  this._eventManager = new EventManager();
}

Game.prototype.getEventManager = function () {
  return this._eventManager;
};

Game.prototype.setScene = function (scene) {
  this._scene = scene;
};

Game.prototype.getScene = function () {
  return this._scene;
};

Game.prototype.keyPressed = function (key) {
  this._scene.keyPressed(key);
};

Game.prototype.tick = function () {
  this._scene.tick();
};

Game.prototype.draw = function (surface) {
  this._scene.draw(surface);
};
