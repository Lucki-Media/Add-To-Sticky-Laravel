export const convertHSVA2RGBA = function (hsv) {
  let h = hsv.hue,
    s = hsv.saturation,
    v = hsv.brightness,
    alpha = hsv.alpha;
  let rgb,
    i,
    data = [];
  if (s === 0) {
    rgb = [v, v, v];
  } else {
    h = h / 60;
    i = Math.floor(h);
    data = [v * (1 - s), v * (1 - s * (h - i)), v * (1 - s * (1 - (h - i)))];
    switch (i) {
      case 0:
        rgb = [v, data[2], data[0]];
        break;
      case 1:
        rgb = [data[1], v, data[0]];
        break;
      case 2:
        rgb = [data[0], v, data[2]];
        break;
      case 3:
        rgb = [data[0], data[1], v];
        break;
      case 4:
        rgb = [data[2], data[0], v];
        break;
      default:
        rgb = [v, data[0], data[1]];
        break;
    }
  }
  return `rgba(${Math.round(rgb[0] * 255)}, ${Math.round(
    rgb[1] * 255
  )}, ${Math.round(rgb[2] * 255)}, ${alpha})`;
};

export const convertRgba2Hsva = (rgbaString) => {
  const defValueOnError = { hue: 120, brightness: 1, saturation: 1, alpha: 1 };
  if (!rgbaString || typeof rgbaString !== "string") {
    return defValueOnError;
  }
  const rgbArray = rgbaString.substring(5, rgbaString.length - 1).split(",");

  const [r, g, b, alpha] = rgbArray;
  // console.log('r', r)
  // console.log('g', g)
  // console.log('b', b)
  // console.log('alpha', alpha)
  // const [r, g, bAndAlpha] = rgbArray
  // const [b, alpha] = bAndAlpha.split('/')
  // console.log(alpha)
  if (!r || !g || !b || !alpha) {
    return defValueOnError;
  }
  let rabs, gabs, babs, rr, gg, bb, h, s, v, diff, diffc, percentRoundFn;
  rabs = r / 255;
  gabs = g / 255;
  babs = b / 255;
  v = Math.max(rabs, gabs, babs);
  diff = v - Math.min(rabs, gabs, babs);
  diffc = (c) => (v - c) / 6 / diff + 1 / 2;
  percentRoundFn = (num) => Math.round(num * 100) / 100;
  if (diff == 0) {
    h = s = 0;
  } else {
    s = diff / v;
    rr = diffc(rabs);
    gg = diffc(gabs);
    bb = diffc(babs);

    if (rabs === v) {
      h = bb - gg;
    } else if (gabs === v) {
      h = 1 / 3 + rr - bb;
    } else if (babs === v) {
      h = 2 / 3 + gg - rr;
    }
    if (h < 0) {
      h += 1;
    } else if (h > 1) {
      h -= 1;
    }
  }
  return {
    hue: Math.round(h * 360),
    saturation: percentRoundFn(s),
    brightness: percentRoundFn(v),
    alpha: +alpha,
  };
};
