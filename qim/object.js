export default class GameObject {
  constructor(game, x = 0, y = 0) {
    this.game = game;
    this.x = x;
    this.y = y;
    this.z = 0;
    this.scale = 1;
    this.hitboxRadius = 0;
    this.velocity = {
      x: 0,
      y: 0
    };
    this.show = true;

    this.tween = [
      //  {
      //    var:string, // which attribute to modify
      //    target:int/float, // what to tween it towards
      //    speed:int/float, // how fast to tween it
      //    tweenMode: string // "linear", "ease-in", "ease-out", "ease-in-out" etc // maybe
      //    gamestate: [string] // gamestates in which to perform the tween
      //  }
    ];
    this.friction = 1;

    this.game.addObject(this);
    //console.log(`spawned new object at ${this.x} ${this.y}`);
  }
  draw(ctx) {
    if (!this.show) return;
    //draw sprite
  }
  set z(z) {
    this.game.gameObjects.sort((a, b) => a.z - b.z);
    this._z = z;
  }
  get z() {
    return this._z;
  }

  update(deltaTime) {
    this.tween.forEach((v, i) => {
      if (v.speed < 0) {
        this[v.var] = Math.max(v.target, this[v.var] + v.speed * deltaTime);
      } else {
        this[v.var] = Math.min(v.target, this[v.var] + v.speed * deltaTime);
      }
    });

    // Move by velocity //
    this.x += this.velocity.x * deltaTime;
    this.y += this.velocity.y * deltaTime;

    // Apply friction //
    this.velocity.x *= this.friction ** deltaTime
    this.velocity.y *= this.friction ** deltaTime

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
