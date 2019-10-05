$(document).ready(function () {
  $('.fullscreen-toggle').click(function() {
    openFullscreen($('#' + CANVAS_ID).get(0));
  })
});