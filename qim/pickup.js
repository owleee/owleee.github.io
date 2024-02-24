import GameObject from "./object.js";
import { circle, distance, randint, isOffScreen, text } from "./functions.js";

export default class Pickup extends GameObject {
  constructor(game, x = 0, y = 0, type) {
    super(game, x, y);
    this.game.objects.food.push(this)

    this.type = type;
    // Team determines which team the pickup CANNOT be collected by //
    // Null value = either //
    this.team;
    this.hitboxRadius = randint(25, 35) / 10 + 1;
    this.tween = [{ var: "scale", target: 1, speed: 0.005 }];
    this.friction = 0.995;
  }

  draw(ctx) {
    let colour = {
      neutron: this.game.colours.blue,
      proton: this.game.colours.red,
      quark: this.game.colours.pink
    }[this.type];
    circle(
      ctx,
      this.game.fx(this.x),
      this.game.fy(this.y),

      this.game.fz(this.scale * this.hitboxRadius),
      {
        fillColour: colour + (this.team === 0 ? "55" : ""),
        lineColour: this.game.colours.black + (this.team === 0 ? "55" : ""),
        lineWidth: this.game.fz(this.scale * 2)
      }
    );
    /*text(ctx, this.game.fx(this.x), this.game.fy(this.y), this.team, {
      size: 20 * this.scale,
      fillColour: "black"
    })*/

  }

  update(deltaTime) {
    //if (isOffScreen(this, this.game.viewport)) return;
    super.update(deltaTime);
    this.game.objects.atoms.forEach((atom) => {
      if (
        distance(this.x, this.y, atom.x, atom.y) <=
        atom.hitboxRadius + this.hitboxRadius && this.team !== atom.team
      ) {
        if (this.type === "neutron") atom.addNeutron();
        else if (this.type === "proton") atom.addProton();
        this.deleteMe = true;
        if (atom.team === 1) return
        // Player only //
        if (this.type === "quark") {
          this.game.addScore(randint(1, 5));
        } else {
          // 5 points if the isotope is stable
          // 2 points if the isotope has a known decay mode
          // 1 point otherwawise
          let score =
            1 +
            3 * (this.game.player.decayMode === "IS") +
            (this.game.player.decayMode !== "unknown");

          this.game.addScore(score);
        }
      }
    })
  }
}

export class PickupSpawner extends GameObject {
  constructor(game) {
    super(game, 0, 0);
    this.spawnCooldown = 0;
    this.spawnSpeed = 250;
  }
  draw(ctx) {
    // No sprite //
  }
  update(deltaTime) {
    // If there are already 1000 objects, stop spawning - to improve perfomance and reduce clutter //
    if (this.game.gameObjects.length >= 1000) return;
    if (!this.game.debug.foodSpawn) return
    this.spawnCooldown -= deltaTime;
    if (this.spawnCooldown <= 0) {
      this.spawnCooldown = this.spawnSpeed;
      this.spawn();
    }
  }
  spawn() {
    let x = randint(-this.game.width / 2, this.game.width / 2);
    let y = randint(-this.game.height / 2, this.game.height / 2);
    if (
      distance(x, y, this.game.player.x, this.game.player.y) <
      this.game.player.hitboxRadius + 10
    )
      return;

    let type = "quark";

    if (randint(0, 2) != 1) {
      type = "proton"
      if (randint(1, 10) >= 5) type = "neutron"
    }

    let p = new Pickup(
      this.game,
      x,
      y,
      type
    );
    p.scale = 0;
  }
}
