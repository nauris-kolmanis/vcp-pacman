var SoundManager = (function() {
  var sounds = {
    pellet1: null,
    pellet2: null,
    powerpellet: null,
  };
  
  for (var i in sounds) {
    var snd = new Audio("sounds/" + i + ".wav");
    sounds[i] = snd;
  }
  
  return {
    notify: function (event) {
      if (event.name == EVENT_PELLET_EATEN) {
        sounds[event.pacman.getEatenPelletSound()].play();
      }
      else if (event.name == EVENT_POWER_PELLET_EATEN) {
        sounds.powerpellet.play();
      }
    }
  };
})();