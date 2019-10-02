var NAME_PREFIX = 'VCP';

var ImageManager = (function() {
  var images = {};

  var imageSetNames = [
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
      
    //  'blinky_1',
    //  'blinky_2',
      
    'pinky_1',
    'pinky_2',
    'pinky_vulnerable_1',
    'pinky_vulnerable_2',
    'pinky_vulnerable_1b',
    'pinky_vulnerable_2b',
      
    'inky_1',
    'inky_2',
    'inky_vulnerable_1',
    'inky_vulnerable_2',
    'inky_vulnerable_1b',
    'inky_vulnerable_2b',
      
    'clyde_1',
    'clyde_2',
    'clyde_vulnerable_1',
    'clyde_vulnerable_2',
    'clyde_vulnerable_1b',
    'clyde_vulnerable_2b',
    
    'power_pellet',
  ];

  var genericNames = [
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
      
    'eyes_l',
    'eyes_r',
    'eyes_u',
    'eyes_d',
  
    'pellet',

    'cherry',

    'title',
  ];

  names = [];

  for (var i in imageSetNames) {
    for (var j in IMAGESET_MAP) {
      names.push(`${NAME_PREFIX}_${IMAGESET_MAP[j]}_${imageSetNames[i]}`);
    }
  }

  for (var i in genericNames) {
    names.push(`${NAME_PREFIX}_${genericNames[i]}`);
  }

  var getImage = function (name, scene) {
    var customizedName = scene && scene._imageSet ? `${NAME_PREFIX}_${scene._imageSet}_${name}` : null;

    if (customizedName !== null && images.hasOwnProperty(customizedName)) {
      return images[customizedName];
    }

    customizedName = `${NAME_PREFIX}_${name}`;

    if (images.hasOwnProperty(customizedName)) {
      return images[customizedName];
    }

    return null;
  };
  
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

    drawImage: function (ctx, name, x, y, scene, width, height) {
      var image = getImage(name, scene);

      if (image !== null) {
        ctx.drawImage(getImage(name, scene), x, y, width || TILE_SIZE, height || TILE_SIZE);
      }
    }
  };
})();
