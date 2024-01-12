import { randint, distance, normalise } from "./functions.js";

export default class Viewport {
  constructor(game) {
    this.x = 0;
    this.y = 0;
    this.game = game;
    this.zoom = 1;
    this.trauma = 0;
    this.xOffset = 0;
    this.yOffset = 0;
    this.updateDimensions();
    this.shake = {
      x: 0,
      y: 0
    }
  }
  updateDimensions() {
    // Get dimensions of the screen and update own dimensions //
    let canvas = getComputedStyle(document.getElementById("screen"));
    this.height = parseFloat(canvas.height.replace("px", ""));
    this.width = parseFloat(canvas.width.replace("px", ""));
    console.log(
      `resized to ${this.width} ${this.height} at ${this.x} ${this.y}`
    );
  }
  smoothFollow(deltaTime, target, smooth = 0.002) {
    // Calculate the difference between the target and camera positions
    this.dx = target.x - this.x// + Math.random() * this.trauma - this.trauma / 2;
    this.dy = target.y - this.y// + Math.random() * this.trauma - this.trauma / 2;

    // Smoothly move the camera towards the target
    this.x += this.dx * smooth * Math.min(deltaTime);
    this.y += this.dy * smooth * Math.min(deltaTime);

    this.shake = {
      x: Math.random() * this.trauma - this.trauma / 2,
      y: Math.random() * this.trauma - this.trauma / 2
    }
  }

  warp(target) {
    this.dx = 0;
    this.dy = 0;
    this.x = target.x;
    this.y = target.y;
  }

  get centre() {
    return { x: this.width / 2, y: this.height / 2 };
  }
  get center() {
    // I can't spell //
    return this.centre;
  }
}
