var IMAGESET_MAP = [];
IMAGESET_MAP[KEY_1] = IMAGESET_ANSIS;
IMAGESET_MAP[KEY_2] = IMAGESET_KRISTINE;
IMAGESET_MAP[KEY_3] = IMAGESET_EDAVARDI;

var PACMAN_SHOWTIME_DURATION = 25;

function StartupScene(game) {
  this._game = game;
  this._pressEnterText = new PressEnterText();
  this._imageSet = IMAGESET_MAP[KEY_1];

  this._timer = 0;
  
  this._pacman = new Pacman(this, game);
  this._pacman.setStrategy(new PacmanStartupSceneStrategy(this._pacman, this));
  this._pacman.setCurrentSpeed(calculateSpeed(4));
  this._pacman.setSpeed(calculateSpeed(4));
  this._pacman.setPosition(new Position(calculateScale(90), calculateScale(185)));
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

  this._timer++;

  if (this._timer >= PACMAN_SHOWTIME_DURATION) {
    var imageSets = Object.values(IMAGESET_MAP);
    var currentIndex = imageSets.indexOf(this._imageSet);

    if (imageSets[currentIndex + 1] !== undefined) {
      this._imageSet = imageSets[currentIndex + 1];
    } else {
      this._imageSet = imageSets[0];
    }
    
    this._timer = 0;
  }
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
  var width = calculateScale(285);
  var x = parseInt(ctx.canvas.style.width) / 2 - width / 2;

  ImageManager.drawImage(ctx, 'title', x, calculateScale(50), null, width, calculateScale(160));
};

StartupScene.prototype._drawControlsHelp = function (ctx) {
  var width = calculateScale(187);
  var x = parseInt(ctx.canvas.style.width) / 2 - width / 2;

  ctx.fillStyle = "#aaa";
  ctx.font = `${calculateScale(20)}px ${FONT}`
  ctx.fillText("Izmanto    bultinas!", x, calculateScale(350));
};
