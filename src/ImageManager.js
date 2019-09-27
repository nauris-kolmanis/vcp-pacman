var CUSTOMIZED_IMAGE_PREFIX = 'VCP';

var ImageManager = (function() {
  var images = {};

  var names = [
   'wall_h',
   'wall_v',
   'wall_tlc',
   'wall_trc',
   'wall_blc',
   'wall_brc',
   'wall_t',
   'wall_b',
   'wall_l',
   'wall_r',
   'wall_mt',
   'wall_mb',
   'wall_ml',
   'wall_mr',
    
   'pacman_1',
   'pacman_2l',
   'pacman_3l',
   'pacman_2r',
   'pacman_3r',
   'pacman_2u',
   'pacman_3u',
   'pacman_2d',
   'pacman_3d',
    
   'pacman_dies_1',
   'pacman_dies_2',
   'pacman_dies_3',
   'pacman_dies_4',
   'pacman_dies_5',
   'pacman_dies_6',
   'pacman_dies_7',
   'pacman_dies_8',
   'pacman_dies_9',
   'pacman_dies_10',
   'pacman_dies_11',
   'pacman_dies_12',
    
   'blinky_1',
   'blinky_2',
    
   'pinky_1',
   'pinky_2',
    
   'inky_1',
   'inky_2',
    
   'clyde_1',
   'clyde_2',
    
   'vulnerable_1',
   'vulnerable_2',
   'vulnerable_1b',
   'vulnerable_2b',
    
   'eyes_l',
   'eyes_r',
   'eyes_u',
   'eyes_d',
    
   'pellet',
   'power_pellet',
    
   'cherry',
  ];

  for (var i in names) {
    var name = names[i];

    names.push(`${CUSTOMIZED_IMAGE_PREFIX}_${name}`);

    for (var j in IMAGESET_MAP) {
      names.push(`${CUSTOMIZED_IMAGE_PREFIX}_${IMAGESET_MAP[j]}_${name}`);
    }
  }
  
  return {
    preloadImages: function (onload) {
      var numProcessed = 0;
      for (var i in names) {
        var name = names[i];

        var img = new Image();
        img.onload = function (event) {
          numProcessed++;
          images[event.target.id] = event.target;
          if (numProcessed === names.length) {
            onload();
          }
        };
        img.onerror = function () {
          numProcessed++;
          if (numProcessed === names.length) {
            onload();
          }
        }
        img.id = name;
        img.src = `images/${name}.png`;
      }
    },

    getImage: function (name) {
      return images[name];
    },

    getCustomizedImage: function (name, scene) {
      var customizedName = scene && scene._imageSet ? `${CUSTOMIZED_IMAGE_PREFIX}_${scene._imageSet}_${name}` : null;

      if (customizedName !== null && images.hasOwnProperty(customizedName)) {
        return images[customizedName];
      }

      customizedName = `${CUSTOMIZED_IMAGE_PREFIX}_${name}`;

      if (images.hasOwnProperty(customizedName)) {
        return images[customizedName];
      }

      return null;
    },

    drawImage: function (ctx, name, x, y, scene) {
      var originalImage = this.getImage(name);
      var customizedImage = this.getCustomizedImage(name, scene);

      var width = originalImage.width;
      var height = originalImage.height;

      ctx.drawImage(customizedImage || originalImage, x, y, calculateScale(width), calculateScale(height));
    }
  };
})();
