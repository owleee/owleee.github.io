import { randint, distance, normalise } from "./functions.js";

export default class Viewport {
  constructor(game) {
    this.x = 0;
    this.y = 0;
    this.game = game;
    this.zoom = 1;
    this.xOffset = 0;
    this.yOffset = 0;
    this.updateDimensions();
  }
  updateDimensions() {
    // Get dimensions of the screen and update own dimensions //
    let canvas = getComputedStyle(document.getElementById("screen"));
    this.height = canvas.height.replace("px", "");
    this.width = canvas.width.replace("px", "");
    console.log(
      `resized to ${this.width} ${this.height} at ${this.x} ${this.y}`
    );
  }
  smoothFollow(deltaTime, target, smooth = 0.002) {
    // Calculate the difference between the target and camera positions
    this.dx = target.x - this.x;
    this.dy = target.y - this.y;

    // Smoothly move the camera towards the target
    this.x += this.dx * smooth * Math.min(deltaTime);
    this.y += this.dy * smooth * Math.min(deltaTime);
  }
  warp(target) {
    this.dx = 0;
    this.dy = 0;
    this.x = target.x;
    this.y = target.y;
  }

  shake(intensity, limit = 10) {
    this.xOffset = this.xOffset + (intensity ** 2 * randint(-100, 100)) / 100;
    this.yOffset = this.yOffset + (intensity ** 2 * randint(-100, 100)) / 100;
    if (distance(this.xOffset, this.yOffset, this.x, this.y) > limit) {
      let v = normalise({ x: this.xOffset, y: this.yOffset }, limit);
      this.xOffset = v.x;
      this.yOffset = v.y;
    }
    this.x += this.xOffset;
    this.y += this.yOffset;
  }

  get centre() {
    return { x: this.width / 2, y: this.height / 2 };
  }
  get center() {
    // I can't spell //
    return this.centre;
  }
}
