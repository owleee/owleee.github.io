import Game from "/atom-game/game.js";
import Object from "/atom-game/object.js";
import Atom from "/atom-game/atom.js";

let canvas = document.getElementById("screen");
canvas.width = getComputedStyle(canvas).width.replace("px", "");
canvas.height = getComputedStyle(canvas).height.replace("px", "");

let ctx = canvas.getContext("2d");

let game = new Game();

window.addEventListener("resize", (event) => {
  game.viewport.updateDimensions();
  canvas.width = getComputedStyle(canvas).width.replace("px", "");
  canvas.height = getComputedStyle(canvas).height.replace("px", "");
});

canvas.addEventListener("mousemove", (event) => {
  //console.log(`${event.clientX} ${event.clientY}`);
});

let player = new Atom(game);

let lastTime = 0;

function gameLoop(timestamp) {
  let deltaTime = timestamp - lastTime;
  lastTime = game.time = timestamp;
  ctx.clearRect(0, 0, game.viewport.width, game.viewport.height);
  game.update(deltaTime);
  game.draw(ctx);

  //console.log(game.fx(100));

  requestAnimationFrame(gameLoop);
}

requestAnimationFrame(gameLoop);
