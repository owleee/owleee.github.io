export default class Viewport {
  constructor() {
    this.x = 0;
    this.y = 0;
    this.zoom = 1;
    this.updateDimensions();
  }
  updateDimensions() {
    let canvas = getComputedStyle(document.getElementById("screen"));
    this.height = canvas.height.replace("px", "");
    this.width = canvas.width.replace("px", "");
    console.log(
      `resized to ${this.width} ${this.height} at ${this.x} ${this.y}`
    );
  }
  smoothFollow(deltaTime, target, smooth = 0.002) {
    // Calculate the difference between the target and camera positions
    const dx = target.x - this.x;
    const dy = target.y - this.y;

    // Smoothly move the camera towards the target
    this.x += dx * smooth * deltaTime;
    this.y += dy * smooth * deltaTime;
  }
}
