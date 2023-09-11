import Viewport from "/atom-game/viewport.js";

const GAMESTATE = {
  PAUSED: 0,
  RUNNING: 1,
  MENU: 2,
  GAMEOVER: 3
};

export default class Game {
  constructor() {
    this.viewport = new Viewport();
    this.gamestate = GAMESTATE.RUNNING;
    this.gameObjects = [];
    this.time = 0;
  }
  start() {
    this.gamestate = GAMESTATE.RUNNING;
  }
  update(deltaTime) {
    if (
      this.gamestate === GAMESTATE.PAUSED ||
      this.gamestate === GAMESTATE.MENU ||
      this.gamestate === GAMESTATE.GAMEOVER
    )
      return;
    this.gameObjects.forEach((object) => object.update(deltaTime));

    this.gameObjects = this.gameObjects.filter((object) => !object.deleteMe);
  }
  draw(ctx) {
    this.gameObjects.forEach((object) => object.draw(ctx));
  }
  togglePause() {
    if (this.gamestate === GAMESTATE.PAUSED) {
      this.gamestate = GAMESTATE.RUNNING;
    } else {
      this.gamestate = GAMESTATE.PAUSED;
    }
  }
  fx(x) {
    // maps world x-coordinates to canvas x-coordinates
    return x - this.viewport.x + this.viewport.width / 2;
  }
  fy(y) {
    // maps world x-coordinates to canvas x-coordinates
    return this.viewport.y + this.viewport.height / 2 - y;
  }
}
