/*export default function dummy() {
  console.log("dummy :3");
}*/

import { category, categoryColours, L } from "./data.js";

// Draw a circle given coordinates and radius //
export function _circle(
  ctx,
  x,
  y,
  r,
  lineWidth = 1,
  fill = false,
  fillColour = "#000000"
) {
  ctx.beginPath();
  ctx.arc(x, y, r, 0, 2 * Math.PI);
  ctx.lineWidth = lineWidth;
  ctx.fillStyle = fillColour;
  if (!fill) ctx.stroke();
  if (fill) ctx.fill();
  ctx.closePath();
}

export function circle(ctx, x, y, r, style) {
  ctx.beginPath();
  ctx.arc(x, y, r, 0, 2 * Math.PI);
  ctx.lineWidth = style.lineWidth || 0;
  ctx.strokeStyle = style.lineColour || "#000000";
  ctx.fillStyle = style.fillColour || "#000000";
  if (style.fillColour) ctx.fill();
  if (style.lineWidth || style.lineColour) ctx.stroke();
  ctx.closePath();
}

// Draw a rectangle given coordinates and dimensions //
export function _rectangle(ctx, x, y, width, height, colour) {
  ctx.beginPath();
  ctx.fillStyle = colour;
  ctx.rect(x, y, width, height);
  ctx.fill();
}

export function rectangle(ctx, x, y, width, height, style) {
  ctx.beginPath();
  let radii = style.radii || 0;
  ctx.roundRect(x, y, width, height, radii);
  ctx.lineWidth = style.lineWidth || 0;
  ctx.strokeStyle = style.lineColour || "#000000";
  ctx.fillStyle = style.fillColour || "#000000";
  if (style.fillColour) ctx.fill();
  if (style.lineWidth || style.lineColour) ctx.stroke();
  ctx.closePath();
}

// Draw a rectangle given two pairs of coordinates //
export function _XYrectangle(ctx, x, y, x2, y2, colour) {
  ctx.beginPath();
  ctx.fillStyle = colour;
  ctx.rect(x, y, x2 - x, y2 - y);
  ctx.fill();
}

export function XYrectangle(ctx, x, y, x2, y2, style) {
  rectangle(ctx, x, y, x2 - x, y2 - y, style);
}

export function text(ctx, x, y, text, style) {
  style = style || {};
  ctx.textBaseline = style.verticalAlign || "middle";
  ctx.textAlign = style.horizontalAlign || "center";
  ctx.letterSpacing = style.spacing || "0px";
  ctx.font = `${style.style || "normal"} ${style.size || 0}px ${style.font || "SpaceGrotesk"
    }`;
  ctx.lineWidth = style.lineWidth || 0;
  ctx.strokeStyle = style.lineColour || "#000000";
  ctx.fillStyle = style.fillColour || "#000000";
  if (style.measureText) return ctx.measureText(text);
  if (style.fillColour) ctx.fillText(text, x, y, style.maxWidth);
  if (style.lineWidth || style.lineColour)
    ctx.strokeText(text, x, y, style.maxWidth);
  return ctx.measureText(text);
}

// Return a pseudorandom integer between two integers (inclusive) //
export function randint(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export function randItem(arr) {
  const randomIndex = Math.floor(Math.random() * arr.length);
  return arr[randomIndex];
}

export function distance(x1, y1, x2, y2) {
  return Math.sqrt((x1 - x2) ** 2 + (y1 - y2) ** 2);
}


// use nothing but addition and subtraction to approximate distance //
export function _approxDist(x1, y1, x2, y2) {
  return Math.abs(x1 - x2) + Math.abs(y1 - y2);
}

const ROOT_TWO_OVER_TWO = Math.sqrt(2) / 2
export function approxDist(x1, y1, x2, y2) {
  return Math.max(ROOT_TWO_OVER_TWO * (Math.abs(x1 - x2) + Math.abs(y1 - y2)), Math.abs(x1 - x2), Math.abs(y1 - y2))
}

export function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    // Generate a random index between 0 and i (inclusive)
    const randomIndex = Math.floor(Math.random() * (i + 1));

    // Swap the elements at randomIndex and i
    [array[i], array[randomIndex]] = [array[randomIndex], array[i]];
  }
}

export function normalise(vector, scale = 1) {
  // Calculate the length (magnitude) of the vector
  const length = Math.sqrt(vector.x * vector.x + vector.y * vector.y);
  if (length === 0) return vector;

  // Normalize the vector by dividing each component by its length

  return {
    x: scale * (vector.x / length),
    y: scale * (vector.y / length)
  };
}

export function isOffScreen(object, screen) {
  return (
    object.x + object.hitboxRadius < screen.x - screen.width / 2 ||
    object.x - object.hitboxRadius > screen.x + screen.width / 2 ||
    object.y + object.hitboxRadius < screen.y - screen.height / 2 ||
    object.y - object.hitboxRadius > screen.y + screen.height / 2
  );
}

export function round(x, places = 0) {
  return Math.round(x * 10 ** places) / 10 ** places;
}

console.log(round(8192, -3))

export function arraySum(ar) {
  let sum = 0;
  ar.forEach((v) => {
    sum += v;
  });
  return sum;
}

export function endPop(arr, value, amount) {
  let counter = amount;
  for (let i = arr.length - 1; i >= 0; i--) {
    if (arr[i] === value) {
      arr[i] = "omg delete meeee >//w//<";
      counter--;
      if (counter === 0) break;
    }
  }
  arr = arr.filter((i) => i !== "omg delete meeee >//w//<");
  return arr;
}

export function genericEndPop(arr, value, amount) {
  arr.length -= amount;
}

export function elementSymbol(ctx, x, y, element, scale, colour, textColour) {
  //rectangle(ctx, this.viewport.centre.x - 50, 50, 100, 100, {
  rectangle(ctx, x - 50 * scale, y, 100 * scale, 100 * scale, {
    fillColour: colour || categoryColours[category[element.protons - 1]],
    lineColour: element.game.colours.black || textColour,
    lineWidth: 2 * scale,
    radii: 5 * scale
  });

  text(ctx, x, y + 50 * scale, element.symbol, {
    size: 60 * scale,
    maxWidth: 90 * scale,
    fillColour: textColour || element.game.colours.black
  });
  // Element name text //
  text(ctx, x, y - (50 - 137.5) * scale, element.element, {
    size: 20 * scale,
    maxWidth: 90 * scale,
    fillColour: textColour || element.game.colours.black
  });
  // Elemental number text //
  text(ctx, x - 45 * scale, y + 5 * scale, element.protons, {
    size: 20 * scale,
    fillColour: textColour || element.game.colours.black,
    verticalAlign: "top",
    horizontalAlign: "left"
  });
  // Isotope number text //
  text(ctx, x + 45 * scale, y + 5 * scale, element.isotope, {
    size: 20 * scale,
    fillColour: textColour || element.game.colours.black,
    verticalAlign: "top",
    horizontalAlign: "right"
  });
}

export function saveCookie(cookieObj, name = "atom-data") {
  try {
    //console.log(`Saving cookie ${name}`)
    document.cookie = `${name}=${JSON.stringify(cookieObj)}`
  }
  catch (e) {
    console.error(`Error saving cookie ${name}: ${e.message}`)
  }
}

export function loadCookie(name = "atom-data") {
  try {
    console.log(`Loading cookie ${name}`)
    return JSON.parse(document.cookie.split(";").filter(i => { return i.split("=")[0] === name })[0].split("=")[1]);
  }
  catch (e) {
    console.error(`Error parsing cookie ${name}: ${e.message}`)
    return {}
  }
}

export function validateSave(data) {
  return {
    lang: ["es", "en"].includes(data.lang) ? data.lang : "en", // default to english
    settings: {
      mouseMovement: true
    },
    debug: data.debug,
    highscore: data.highscore
  }
}

export function vector(x, y) {
  return { x: x, y: y }
}

export function TRvector(theta, radius, angleUnit = "RAD") {
  if (angleUnit === "DEG") theta /= 180 / Math.PI
  return {
    x: radius * Math.sin(theta),
    y: radius * Math.cos(theta)
  }
}