// Import viewport object //
import Viewport from "/qim/viewport.js";
import { XYrectangle, rectangle } from "/qim/functions.js";

// Globally indicate state of the game // TODO - add more?
const GAMESTATE = {
  PAUSED: 0,
  RUNNING: 1,
  MENU: 2,
  GAMEOVER: 3
};

// Game Manager class
export default class Game {
  constructor() {
    this.viewport = new Viewport();
    this.gamestate = GAMESTATE.RUNNING;
    this.gameObjects = [];
    this.time = 0;
    this.width = 1000;
    this.height = 1000;

    // Allow for variable controls, e.g. WASD / Arrow Keys / IJKL
    this.controls = {
      up: "w",
      down: "s",
      left: "a",
      right: "d"
    };
    this.colours = {
      black: "#031926",
      white: "#F4F4F6",
      blue: "#1E21BF",
      red: "#BF211E",
      grey: "#6F8695"
    };
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

    // Iterate over all objects and call their update method //
    this.gameObjects.forEach((object) => object.update(deltaTime));

    // Iterate over all objects and check whether they have been marked for deletion //
    this.gameObjects = this.gameObjects.filter((object) => !object.deleteMe);
  }
  draw(ctx) {
    // Draw borders //
    XYrectangle(
      // east border
      ctx,
      this.fx(this.width / 2),
      0,
      this.viewport.width,
      this.viewport.height,
      this.colours.grey
    );
    XYrectangle(
      // west border
      ctx,
      this.fx(-this.width / 2),
      this.viewport.height,
      0,
      0,
      this.colours.grey
    );
    XYrectangle(
      // north border
      ctx,
      this.viewport.width,
      this.fy(this.height / 2),
      0,
      0,
      this.colours.grey
    );
    XYrectangle(
      // south border
      ctx,
      0,
      this.fy(-this.height / 2),
      this.viewport.width,
      this.viewport.height,
      this.colours.grey
    );

    // Iterate over all objects and call their draw method //
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
