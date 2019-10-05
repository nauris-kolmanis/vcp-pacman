function getRandomElementFromArray(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

/**
 * Return random integer in the range [min, max] (min and max are included).
 */
function getRandomInt(min, max) {  
  return Math.floor(Math.random() * (max - min + 1)) + min;  
}

function calculateScale(number) {
  return number * SCALE_RATIO;
}

function calculateSpeed(number) {
  return number * SPEED_RATIO;
}

function openFullscreen(element) {
  if (element.requestFullscreen) {
    element.requestFullscreen();
  } else if (element.mozRequestFullScreen) { /* Firefox */
    element.mozRequestFullScreen();
  } else if (element.webkitRequestFullscreen) { /* Chrome, Safari and Opera */
    element.webkitRequestFullscreen();
  } else if (element.msRequestFullscreen) { /* IE/Edge */
    element.msRequestFullscreen();
  }
}
