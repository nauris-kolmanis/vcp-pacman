$(document).ready(function () {
  $('.fullscreen-toggle').click(function() {
    console.log('lalala');
    openFullscreen($('#' + CANVAS_ID).get(0));
  })
});