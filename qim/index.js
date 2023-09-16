// Import code from other modules //

import Game from "/qim/game.js";
import Object from "/qim/object.js";
import Atom from "/qim/atom.js";
import Controller from "/qim/controls.js";

// Get canvas and attributes //
let canvas = document.getElementById("screen");
canvas.width = getComputedStyle(canvas).width.replace("px", "");
canvas.height = getComputedStyle(canvas).height.replace("px", "");
let ctx = canvas.getContext("2d");
window.addEventListener("resize", (event) => {
  game.viewport.updateDimensions();
  canvas.width = getComputedStyle(canvas).width.replace("px", "");
  canvas.height = getComputedStyle(canvas).height.replace("px", "");
});

// Initialise Game manager //
let game = new Game();

// Detect mouse position //
canvas.addEventListener("mousemove", (event) => {
  //console.log(`${event.clientX} ${event.clientY}`);
});

// Initialise player & controller //
let player = new Atom(game);
let controller = new Controller(game, player);

let lastTime = 0;

// Game loop //
function gameLoop(timestamp) {
  // Allow the game to run independently of framerate //
  let deltaTime = timestamp - lastTime;
  lastTime = game.time = timestamp;

  // Clear canvas of last frame //
  ctx.clearRect(0, 0, game.viewport.width, game.viewport.height);
  game.update(deltaTime);

  // Make the game viewport/"camera" smoothly follow the player // customisable in settings?
  game.viewport.smoothFollow(deltaTime, player);

  // Draw all game objects //
  game.draw(ctx);

  requestAnimationFrame(gameLoop);
}

// Begin game loop //
requestAnimationFrame(gameLoop);
