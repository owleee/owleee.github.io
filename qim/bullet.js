import GameObject from "./object.js";

import { circle, isOffScreen, distance, distanceSquared, TRvector, randint } from "./functions.js";

import Particle from "./particle.js";

export default class Bullet extends GameObject {
  constructor(game, team = 0, x = 0, y = 0, damage = 1) {
    super(game, x, y);
    this.damage = damage;
    this.game.objects.bullets.push(this)

    this.pierce = 0;

    this.team = team; // 0 = player, 1 = enemy
    this.hitboxRadius = 3;
  }
  get class() { return "bullet"; }

  draw(ctx) {
    switch (this.type) {
      case "alpha":
        for (let i = 0; i < 4; i++) {
          circle(
            ctx,
            this.game.fx(this.x + 2.5 * Math.sin(this.game.time / 200 + Math.PI * i * 0.5)),
            this.game.fy(this.y + 2.5 * Math.cos(this.game.time / 200 + Math.PI * i * 0.5)),
            this.game.fz(this.scale * this.hitboxRadius),
            {
              fillColour: i % 2 === 0 ? this.game.colours.red : this.game.colours.blue,
              lineColour: this.game.colours.black,
              lineWidth: this.game.fz(this.scale * 2)
            }
          );
        }
        break;
      default:
        circle(
          ctx,
          this.game.fx(this.x),
          this.game.fy(this.y),
          this.game.fz(this.hitboxRadius),
          { fillColour: this.game.colours.black }
        ); break;
    }
  }
  update(deltaTime) {

    if (this.pierce > 5) {
      let p = new Particle(this.game, this.x, this.y, this.game.colours.black, 3);
      p.velocity = {
        x: this.velocity.x / 10 + randint(-10, 10) / 100,
        y: this.velocity.y / 10 + randint(-10, 10) / 100,
      }
      p.tween.push({ var: "scale", target: 0, speed: -0.002, })
    }

    // Bounce off east and west (x) walls //
    if (this.x + this.hitboxRadius + 1 > this.game.width / 2 || this.x - this.hitboxRadius - 1 < -this.game.width / 2) {
      this.velocity.x *= -1;
      this.team = undefined;
    }

    // Bounce off north and south (y) walls //
    if (this.y + this.hitboxRadius + 1 > this.game.height / 2 || this.y - this.hitboxRadius - 1 < -this.game.height / 2) {
      this.velocity.y *= -1;
      this.team = undefined;
    }

    // Check for atom collisions //
    this.game.objects.atoms.filter(i => {
      // Filter only enemy atoms //
      return i.team !== this.team;
    }).forEach(atom => {
      // If the two collide (overlap) //
      if ((atom.hitboxRadius + this.hitboxRadius) ** 2 >= distanceSquared(atom.x, atom.y, this.x, this.y)) {
        atom.takeDamage(atom.shield === "NUH UH" ? this.damage : 0, { x: this.x, y: this.y });
        // Delete bullet // DOING - pierce
        if (this.type === "alpha") {
          let boom = new Shockwave(this.game, this.team, this.x, this.y, this.damage + 5);
          this.game.viewport.trauma += 10;
        }

        if (this.pierce <= 0) { this.deleteMe = true; } else if (!atom.iFrames) { atom.iFrames = 100; }
        if (!atom.iFrames) this.pierce--;
      }
    })

    if (this.type === "alpha") {
      this.game.objects.bullets.forEach(bullet => {
        if (bullet !== this) {
          if ((10 * this.hitboxRadius + 10 * bullet.hitboxRadius) ** 2 >= distanceSquared(this.x, this.y, bullet.x, bullet.y)) {
            console.log("CORE SNIPE!!!!")
            let boom = new Shockwave(this.game, this.team, this.x, this.y, this.damage + 5 + bullet.damage * 5)
            this.game.viewport.trauma += 10;
            boom.team = bullet.team;
            this.deleteMe = true;
            bullet.deleteMe = true;
          }
        }
      })
    }

    super.update(deltaTime);

    // Delete bullets that travel offscreen //
    if (isOffScreen(this, this.game.viewport)) {
      this.deleteMe = true;
    }
  }
}

export class Shockwave extends GameObject {
  constructor(game, team = 0, x, y, damage = 1) {
    super(game, x, y);
    this.damage = damage;
    this.team = team;
    this.hitboxRadius = 0;
    this.speed = 1;
  }
  get class() { return "shockwave" }
  draw(ctx) {
    circle(ctx, this.game.fx(this.x), this.game.fy(this.y), this.hitboxRadius, {
      lineColour: this.game.colours.black,
      lineWidth: this.game.fz(2)
    });
  }
  update(deltaTime) {
    this.hitboxRadius += deltaTime * this.speed;

    this.game.objects.atoms.forEach(atom => {
      if (atom.team !== this.team) {
        if (distanceSquared(this.x, this.y, atom.x, atom.y) <= (atom.hitboxRadius + this.hitboxRadius) ** 2 && distanceSquared(this.x, this.y, atom.x, atom.y) >= (-atom.hitboxRadius + this.hitboxRadius) ** 2) {
          atom.takeDamage(atom.shield === "NUH UH" ? this.damage : 0);
          if (!atom.iFrames) atom.iFrames = 100
        }
      }
    })

    if (this.hitboxRadius * 2 > this.game.viewport.width) this.deleteMe = true;
  }
}