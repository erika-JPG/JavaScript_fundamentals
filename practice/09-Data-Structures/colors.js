/*!
 * Create a random color value.
 * (c) 2021 Chris Ferdinandi, MIT License, https://gomakethings.com
 * @return {String} A random six-digit color hexcode
 */
// Set the color/BG color
const app = document.querySelector('#app');
const image = document.querySelector('#myimg');
const getImage = document.querySelector('#getImage');
const comp1 = document.querySelector('#comp1');
const comp2 = document.querySelector('#comp2');
const comp3 = document.querySelector('#comp3');
const colorbtn = document.querySelector('#getColor');
const rColor = document.querySelector('#randomColor');
let bgColor = createColor();

function createColor() {
  // The available hex options
  let hex = [
    'a',
    'b',
    'c',
    'd',
    'e',
    'f',
    '0',
    '1',
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8',
    '9',
  ];

  /**
   * Randomly shuffle an array
   * https://stackoverflow.com/a/2450976/1293256
   */
  let shuffle = function () {
    let currentIndex = hex.length;
    let temporaryValue, randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      // And swap it with the current element.
      temporaryValue = hex[currentIndex];
      hex[currentIndex] = hex[randomIndex];
      hex[randomIndex] = temporaryValue;
    }
  };

  /**
   * Create a six-digit hex color
   */
  let hexColor = function () {
    // Create the color
    let color = '#';

    // Shuffle the hex values and append
    for (let i = 0; i < 6; i++) {
      shuffle(hex);
      color += hex[0];
    }

    return color;
  };

  // Return the color string
  return hexColor();
}

/*!
 * Get the contrasting color for any hex color
 * (c) 2021 Chris Ferdinandi, MIT License, https://gomakethings.com
 * Derived from work by Brian Suda, https://24ways.org/2010/calculating-color-contrast/
 * @param  {String} A hexcolor value
 * @return {String} The contrasting color (black or white)
 */
function getContrast(hexcolor) {
  // If a leading # is provided, remove it
  if (hexcolor.slice(0, 1) === '#') {
    hexcolor = hexcolor.slice(1);
  }

  // If a three-character hexcode, make six-character
  if (hexcolor.length === 3) {
    hexcolor = hexcolor
      .split('')
      .map(function (hex) {
        return hex + hex;
      })
      .join('');
  }

  // Convert to RGB value
  let r = parseInt(hexcolor.substr(0, 2), 16);
  let g = parseInt(hexcolor.substr(2, 2), 16);
  let b = parseInt(hexcolor.substr(4, 2), 16);

  // Get YIQ ratio
  let yiq = (r * 299 + g * 587 + b * 114) / 1000;

  // Check contrast
  return yiq >= 128 ? 'black' : 'white';
}

/* hexToComplimentary : Converts hex value to HSL, shifts
 * hue by 180 degrees and then converts hex, giving complimentary color
 * as a hex value
 * @param  [String] hex : hex value
 * @return [String] : complimentary color as hex value
 */
function hexToComplimentary(hex, deg) {
  // Convert hex to rgb
  // Credit to Denis http://stackoverflow.com/a/36253499/4939630
  var rgb =
    'rgb(' +
    (hex = hex.replace('#', ''))
      .match(new RegExp('(.{' + hex.length / 3 + '})', 'g'))
      .map(function (l) {
        return parseInt(hex.length % 2 ? l + l : l, 16);
      })
      .join(',') +
    ')';

  // Get array of RGB values
  rgb = rgb.replace(/[^\d,]/g, '').split(',');

  var r = rgb[0],
    g = rgb[1],
    b = rgb[2];

  // Convert RGB to HSL
  // Adapted from answer by 0x000f http://stackoverflow.com/a/34946092/4939630
  r /= 255.0;
  g /= 255.0;
  b /= 255.0;
  var max = Math.max(r, g, b);
  var min = Math.min(r, g, b);
  var h,
    s,
    l = (max + min) / 2.0;

  if (max == min) {
    h = s = 0; //achromatic
  } else {
    var d = max - min;
    s = l > 0.5 ? d / (2.0 - max - min) : d / (max + min);

    if (max == r && g >= b) {
      h = (1.0472 * (g - b)) / d;
    } else if (max == r && g < b) {
      h = (1.0472 * (g - b)) / d + 6.2832;
    } else if (max == g) {
      h = (1.0472 * (b - r)) / d + 2.0944;
    } else if (max == b) {
      h = (1.0472 * (r - g)) / d + 4.1888;
    }
  }

  h = (h / 6.2832) * 360.0 + 0;

  // Shift hue to opposite side of wheel and convert to [0-1] value
  h += deg;
  if (h > 360) {
    h -= 360;
  }
  h /= 360;

  // Convert h s and l values into r g and b values
  // Adapted from answer by Mohsen http://stackoverflow.com/a/9493060/4939630
  if (s === 0) {
    r = g = b = l; // achromatic
  } else {
    var hue2rgb = function hue2rgb(p, q, t) {
      if (t < 0) t += 1;
      if (t > 1) t -= 1;
      if (t < 1 / 6) return p + (q - p) * 6 * t;
      if (t < 1 / 2) return q;
      if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6;
      return p;
    };

    var q = l < 0.5 ? l * (1 + s) : l + s - l * s;
    var p = 2 * l - q;

    r = hue2rgb(p, q, h + 1 / 3);
    g = hue2rgb(p, q, h);
    b = hue2rgb(p, q, h - 1 / 3);
  }

  r = Math.round(r * 255);
  g = Math.round(g * 255);
  b = Math.round(b * 255);

  // Convert r b and g values to hex
  rgb = b | (g << 8) | (r << 16);
  return '#' + (0x1000000 | rgb).toString(16).substring(1);
}
/////////////////////////////img url encode
function getBase64FromImageUrl(url) {
  var img = new Image();

  img.setAttribute('crossOrigin', 'anonymous');

  img.onload = function () {
    var canvas = document.createElement('canvas');
    canvas.width = this.width;
    canvas.height = this.height;

    var ctx = canvas.getContext('2d');
    ctx.drawImage(this, 0, 0);

    var dataURL = canvas.toDataURL('image/png');

    encoded = dataURL.replace(/^data:image\/(png|jpg);base64,/, '');
    image.src = dataURL;
    return encoded;
  };
  img.src = url;
}

getImage.addEventListener('click', function () {
  let theUrl = document.getElementById('iurl').value;
  getBase64FromImageUrl(theUrl);
});

/////////////////////////////////color picker
var img = _('.thumbnail img'),
  canvas = _('#cs'),
  result = _('.result'),
  preview = _('.preview'),
  x = '',
  y = '';
img.addEventListener(
  'click',
  function (e) {
    if (e.offsetX) {
      x = e.offsetX;
      y = e.offsetY;
    } else if (e.layerX) {
      x = e.layerX;
      y = e.layerY;
    }
    useCanvas(canvas, img, function () {
      var p = canvas.getContext('2d').getImageData(x, y, 1, 1).data;
      result.innerHTML =
        '<span>HEX: ' +
        rgbToHex(p[0], p[1], p[2]) +
        '</span> <br/>' +
        '<span>RGB:  rgb(' +
        p[0] +
        ',' +
        p[1] +
        ',' +
        p[2] +
        ')</span>';

      pickedcolor = rgbToHex(p[0], p[1], p[2]);
      console.log('picked color: ' + pickedcolor);
      contrast = getContrast(pickedcolor);
      compColor1 = hexToComplimentary(pickedcolor, 180);
      console.log('c1: ' + compColor1);
      compColor2 = hexToComplimentary(pickedcolor, 60);
      console.log('c2: ' + compColor2);
      compColor3 = hexToComplimentary(pickedcolor, 30);
      console.log('c3: ' + compColor3);

      app.textContent = pickedcolor;
      comp1.textContent = compColor1;
      comp2.textContent = compColor2;
      comp3.textContent = compColor3;

      app.style.backgroundColor = pickedcolor;
      app.style.color = getContrast(pickedcolor);
      comp1.style.backgroundColor = compColor1;
      comp1.style.color = getContrast(compColor1);

      comp2.style.backgroundColor = compColor2;
      comp2.style.color = getContrast(compColor2);

      comp3.style.backgroundColor = compColor3;
      comp3.style.color = getContrast(compColor3);

      return pickedcolor;
    });
    return pickedcolor;
  },
  false
);
img.addEventListener(
  'mousemove',
  function (e) {
    if (e.offsetX) {
      x = e.offsetX;
      y = e.offsetY;
    } else if (e.layerX) {
      x = e.layerX;
      y = e.layerY;
    }

    useCanvas(canvas, img, function () {
      var p = canvas.getContext('2d').getImageData(x, y, 1, 1).data;
      /*preview.style.backgroundColor = rgbToHex(p[0], p[1], p[2]);*/
    });
  },
  false
);
function useCanvas(el, image, callback) {
  el.width = image.width;
  el.height = image.height;
  el.getContext('2d').drawImage(image, 0, 0, image.width, image.height);
  return callback();
}
function _(el) {
  return document.querySelector(el);
}
function componentToHex(c) {
  var hex = c.toString(16);
  return hex.length == 1 ? '0' + hex : hex;
}
function rgbToHex(r, g, b) {
  return '#' + componentToHex(r) + componentToHex(g) + componentToHex(b);
}
function findPos(obj) {
  var curleft = 0,
    curtop = 0;
  if (obj.offsetParent) {
    do {
      curleft += obj.offsetLeft;
      curtop += obj.offsetTop;
    } while ((obj = obj.offsetParent));
    return { x: curleft, y: curtop };
  }
  return undefined;
}

const updateColors = function (color) {
  let compColor1 = hexToComplimentary(color, 180);
  let compColor2 = hexToComplimentary(color, 60);
  let compColor3 = hexToComplimentary(color, 30);
  app.textContent = color;
  comp1.textContent = compColor1;
  comp2.textContent = compColor2;
  comp3.textContent = compColor3;

  app.style.backgroundColor = color;
  app.style.color = getContrast(color);
  comp1.style.backgroundColor = compColor1;
  comp1.style.color = getContrast(compColor1);

  comp2.style.backgroundColor = compColor2;
  comp2.style.color = getContrast(compColor2);

  comp3.style.backgroundColor = compColor3;
  comp3.style.color = getContrast(compColor3);
};

colorbtn.addEventListener('click', function () {
  let newColor = document.getElementById('icolor').value;
  if (!newColor) {
    alert('insert hex color!');
  } else {
    updateColors(newColor);
  }
});

rColor.addEventListener('click', function () {
  let newColor = createColor();
  updateColors(newColor);
});

window.onload = updateColors(bgColor);
