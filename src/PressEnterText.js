function PressEnterText() {
  this._blinkTimer = new BlinkTimer(15);
}

PressEnterText.prototype.tick = function () {
  this._blinkTimer.tick();
};

PressEnterText.prototype.draw = function (ctx) {
  if (!this._blinkTimer.isVisible()) {
    return;
  }
  
  ctx.fillStyle = "red";
  ctx.font = `${calculateScale(20)}px ${FONT}`
  var text = "SPIED    1:    ANSIS,    2:    KRISTINE,    3:    EDAVARDI";
  var textWidth = ctx.measureText(text).width;
  // Draw text in the center of the canvas.
  var x = parseInt(ctx.canvas.style.width) / 2 - textWidth / 2;
  var y = parseInt(ctx.canvas.style.height) / 2 + 50;
  ctx.fillText(text, x, y);
};
