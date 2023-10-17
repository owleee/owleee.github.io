import GameObject from "./object.js";

import { circle, isOffScreen } from "./functions.js";

export default class Bullet extends GameObject {
  constructor(game, team = 0, x = 0, y = 0) {
    super(game, x, y);
    this.team = team; // 0 = player, 1 = enemy
    this.hitboxRadius = 3;
  }
  get type (){return "bullet";}
  
  draw(ctx) {
    circle(
      ctx,
      this.game.fx(this.x),
      this.game.fy(this.y),
      this.game.fz(this.hitboxRadius),
      { fillColour: this.game.colours.black }
    );
  }
  update(deltaTime) {
    // Bounce off east (+x) wall //
    if (this.x + this.hitboxRadius + 1 > this.game.width / 2) {
      this.velocity.x *= -1;
    }

    // Bounce off west (-x) wall //
    if (this.x - this.hitboxRadius - 1 < -this.game.width / 2) {
      this.velocity.x *= -1;
    }

    // Bounce off north (+y) wall //
    if (this.y + this.hitboxRadius + 1 > this.game.height / 2) {
      this.velocity.y *= -1;
    }

    // Bounce off south (-y) wall //
    if (this.y - this.hitboxRadius - 1 < -this.game.height / 2) {
      this.velocity.y *= -1;
    }
    super.update(deltaTime);

    // Delete bullets that travel offscreen //
    if (isOffScreen(this, this.game.viewport)) {
      this.deleteMe = true;
    }
  }
}
