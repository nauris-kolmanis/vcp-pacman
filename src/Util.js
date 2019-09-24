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
  return Math.floor(number * SCALE_RATIO);
}

function calculateSpeed(number) {
  return Math.floor(number * SPEED_RATIO);
}
