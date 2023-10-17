// Import code from other modules //

import Game from "./game.js";
import Object from "./object.js";
import Atom from "./atom.js";
import AI from "./ai.js";
import Pickup from "./pickup.js";
import Controller from "./controls.js";
import { circle, randint, endPop } from "./functions.js";
import Button from "./button.js";

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
  game.mouse.x = event.clientX;
  game.mouse.y = event.clientY;
});

// Initialise player & controller //
let player = new Atom(game, 0);
// Player always displays in front of other objects //
player.z = 1000;
let controller = new Controller(game, player);

game.player = player;

// Initialise buttons //
let unpauseButton = new Button(
  game,
  (x) => {
    return game.viewport.width / 2;
  },
  (y) => {
    return game.viewport.height / 2;
  },
  300,
  80,
  "unpause",
  () => {
    game.togglePause();
  }
);
unpauseButton.gamestate = ["PAUSED"];

let mainMenuButton = new Button(
  game,
  (x) => {
    return game.viewport.width / 2;
  },
  (y) => {
    return game.viewport.height / 2 + 100;
  },
  300,
  80,
  "return_to_menu",
  () => {
    game.returnToMenu();
  }
);
mainMenuButton.gamestate = ["PAUSED"];

let pauseButton = new Button(
  game,
  (x) => {
    return game.viewport.width - 45;
  },
  (y) => {
    return 75;
  },
  50,
  50,
  "||",
  () => {
    game.togglePause();
  }
);
pauseButton.gamestate = ["RUNNING", "PAUSED"];
pauseButton.boxStyle.radii = pauseButton.boxStyleHover.radii = 10;
pauseButton.textStyle.size = pauseButton.textStyleHover.size = 35;

let playButton = new Button(
  game,
  (x) => {
    return game.viewport.width / 2;
  },
  (y) => {
    return game.viewport.height / 2;
  },
  300,
  80,
  "play",
  () => {
    game.start();
  }
);
playButton.gamestate = ["MENU"];

let optionsButton = new Button(
  game,
  (x) => {
    return game.viewport.width / 2;
  },
  (y) => {
    return game.viewport.height / 2 + 100;
  },
  300,
  80,
  "options",
  () => {
    game.returnToMenu();
  }
);
optionsButton.gamestate = ["MENU"];
optionsButton.greyed = true;

let testEnemy = new Atom(game, 1, 200, 200);
testEnemy.addProton(100);
testEnemy.addNeutron(100);
new AI(game, testEnemy);

// Attempt to fix bug with viewport movement - does not seem to work //
window.addEventListener("focus", (event) => {
  game.viewport.warp(player);
});

let lastTime = 0;

// Game loop //
function gameLoop(timestamp) {
  // Allow the game to run independently of framerate //
  let deltaTime = timestamp - lastTime;
  lastTime = game.time = timestamp;
  if (game.gamestate === "PAUSED") {
    game.times.paused += deltaTime;
  }

  // Clear canvas of last frame //
  ctx.clearRect(0, 0, game.viewport.width, game.viewport.height);
  controller.update();
  game.update(deltaTime);

  // Draw all game objects //
  game.draw(ctx);

  requestAnimationFrame(gameLoop);
}

// Begin game loop //
requestAnimationFrame(gameLoop);
