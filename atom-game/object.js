export default class GameObject {
  constructor(game, x = 0, y = 0) {
    this.game = game;
    this.x = x;
    this.y = y;
    this.show = true;
    this.game.gameObjects.push(this);
    console.log(`spawned new object at ${this.x} ${this.y}`);
  }
  draw(ctx) {
    if (!this.show) return;
    //draw sprite
  }
  update() {}
}
