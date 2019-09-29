var IMAGESET_MAP = [];
IMAGESET_MAP[KEY_1] = IMAGESET_ANSIS;
IMAGESET_MAP[KEY_2] = IMAGESET_KRISTINE;
IMAGESET_MAP[KEY_3] = IMAGESET_EDAVARDI;

function StartupScene(game) {
  this._game = game;
  this._pressEnterText = new PressEnterText();
  this._imageSet = IMAGESET_MAP[KEY_1];
  
  this._pacman = new Pacman(this, game);
  this._pacman.setStrategy(new PacmanStartupSceneStrategy(this._pacman, this));
  this._pacman.setCurrentSpeed(calculateSpeed(4));
  this._pacman.setSpeed(calculateSpeed(4));
  this._pacman.setPosition(new Position(calculateScale(90), calculateScale(160)));
  this._pacman.setDirection(DIRECTION_RIGHT);
}

StartupScene.prototype.keyPressed = function (key) {
  if (key == KEY_ENTER) {
    this._game.setScene(new PlayScene(this._game));
  } else if (key == KEY_1 || key == KEY_2 || key == KEY_3) {
    this._game.setScene(new PlayScene(this._game, null, IMAGESET_MAP[key]));
  }
};

StartupScene.prototype.tick = function () {
  this._pressEnterText.tick();
  this._pacman.tick();
};

StartupScene.prototype.draw = function (ctx) {
  this._drawTitle(ctx);
  this._drawControlsHelp(ctx);
  this._pressEnterText.draw(ctx);
  this._pacman.draw(ctx);
};

StartupScene.prototype.getX = function () {
  return 0;
};

StartupScene.prototype.getY = function () {
  return 0;
};

StartupScene.prototype._drawTitle = function (ctx) {
  ctx.fillStyle = "#000";
  ctx.font = `bold ${calculateScale(70)}px 'Lucida Console', Monaco, monospace`
  ctx.fillText("VCPac-man", calculateScale(76), calculateScale(150));
};

StartupScene.prototype._drawControlsHelp = function (ctx) {
  ctx.fillStyle = "#aaa";
  ctx.font = `bold ${calculateScale(14)}px 'Lucida Console', Monaco, monospace`
  ctx.fillText("CONTROL: ARROW KEYS", calculateScale(187), calculateScale(300));
};
