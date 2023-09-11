export default class Viewport {
  constructor() {
    this.x = 0; //(0,0) is the center of the screen & gameworld
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
}
