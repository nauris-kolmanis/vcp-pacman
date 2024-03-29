var READY_MESSAGE_DURATION_SHORT = 50;
var READY_MESSAGE_DURATION_LONG = 100;

function ReadyMessage() {}

ReadyMessage.prototype.setVisibilityDuration = function (duration) {
  this._visibilityDuration = duration;
};

ReadyMessage.prototype.setTimeToHide = function (duration) {
  this._timeToHide = duration;
};

ReadyMessage.prototype.getTimeToHide = function () {
  return this._timeToHide;
};

ReadyMessage.prototype.isVisible = function () {
  return this._timeToHide > 0;
};

ReadyMessage.prototype.show = function () {
  this._timeToHide = this._visibilityDuration;
};

ReadyMessage.prototype.hide = function () {
  this._timeToHide = 0;
};

ReadyMessage.prototype.tick = function () {
  if (this.isVisible()) {
    this._timeToHide--;
  }
};

ReadyMessage.prototype.draw = function (ctx) {
  if (!this.isVisible()) {
    return;
  }
  
  ctx.fillStyle = "#aaa";
  ctx.font = `${calculateScale(22)}px ${FONT}`
  ctx.fillText("READY!", calculateScale(234), calculateScale(273));
};
