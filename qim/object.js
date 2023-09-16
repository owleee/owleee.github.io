export default class GameObject {
  constructor(game, x = 0, y = 0) {
    this.game = game;
    this.x = x;
    this.y = y;
    this.hitboxRadius = 0;
    this.velocity = {
      x: 0,
      y: 0
    };
    this.show = true;
    this.game.gameObjects.push(this);
    console.log(`spawned new object at ${this.x} ${this.y}`);
  }
  draw(ctx) {
    if (!this.show) return;
    //draw sprite
  }
  update(deltaTime) {
    // Move by velocity //
    this.x += this.velocity.x * deltaTime;
    this.y += this.velocity.y * deltaTime;

    // Collide with east (+x) wall //
    if (this.x + this.hitboxRadius > this.game.width / 2) {
      this.x = this.game.width / 2 - this.hitboxRadius;
    }

    // Collide with west (-x) wall //
    if (this.x - this.hitboxRadius < -this.game.width / 2) {
      this.x = -this.game.width / 2 + this.hitboxRadius;
    }

    // Collide with north (+y) wall //
    if (this.y + this.hitboxRadius > this.game.height / 2) {
      this.y = this.game.height / 2 - this.hitboxRadius;
    }

    // Collide with south (-y) wall //
    if (this.y - this.hitboxRadius < -this.game.height / 2) {
      this.y = -this.game.height / 2 + this.hitboxRadius;
    }
  }
}
