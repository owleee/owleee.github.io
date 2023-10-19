import GameObject from "./object.js";
import { elements, symbols, shells } from "./data.js";
import {
  circle,
  normalise,
  isOffScreen,
  randint,
  endPop,
  distance
} from "./functions.js";
import { table } from "./table.js";
import Bullet from "./bullet.js";
import Pickup from "./pickup.js";
import Particle from "./particle.js";

// Define some mathematical constants //
const TAU = Math.PI * 2;
const PI = Math.PI;
const PHI = (1 + Math.sqrt(5)) / 2;

// Predefine the first 500 positions that nucleons take to minimise lag from calculating each every frame //
let nucleonPositions = [];
for (let i = 0; i < 500; i++) {
  nucleonPositions.push({
    x: Math.cos(i * PI * PHI * 2) * Math.sqrt(i),
    y: Math.sin(i * PI * PHI * 2) * Math.sqrt(i)
  });
}

// Look up the aforementioned values or calculate them if needed //
function getNucleonPosition(n) {
  if (nucleonPositions[n]) {
    return nucleonPositions[n];
  } else {
    return {
      x: Math.cos(n * PI * PHI * 2) * Math.sqrt(n),
      y: Math.sin(n * PI * PHI * 2) * Math.sqrt(n)
    };
  }
}

// Define constants representing each nucleon, for easier shorthand //
const P = "proton";
const N = "neutron";

export default class Atom extends GameObject {
  constructor(game, team = 1, x = 0, y = 0) {
    super(game, x, y);

    this.team = team; // 0 = player, 1 = enemy

    this.neutrons = 0;

    this.protons = 0;

    this.nucleons = [];

    this.attackCooldown = 0;
    this.times = { shooting: 0, moving: 0 };

    this.accuracy = 1;

    // Add initial proton //
    this.addProton();
  }
  get class() { return "atom"; }

  addProton(n = 1) {
    // Add a proton to the atom // TODO - clean up?

    // If the number to add is negative, subtract //
    if (n < 0) {
      if (-n > this.protons) return; // If more are subtracted than exist, end
      this.nucleons = endPop(this.nucleons, "proton", -n); // Remove protons from nucleon array
      this.protons += n;
      this.getDecayMode(); // Update the atom's decay mode
      return;
    }

    // If there are already max protons, end //
    if (this.protons >= 118) {
      this.protons = 118;
      return;
    }
    this.protons += n;
    for (let i = 0; i < n; i++) this.nucleons.push(P); // Add the protons to the nucleon array
    this.getDecayMode(); // Update the atom's decay mode
  }
  addNeutron(n = 1) {
    // Add a neutron to the atom // TODO - clean up?

    if (n < 0) {
      if (-n > this.neutrons) return; // If more are subtracted than exist, end
      this.nucleons = endPop(this.nucleons, "neutron", -n); // Remove neutrons from nucleon array
      this.neutrons += n;
      this.getDecayMode(); // Update the atom's decay mode
      return;
    }

    this.neutrons += n;
    for (let i = 0; i < n; i++) {
      this.nucleons.push(N); // Add the protons to the nucleon array
    }
    this.getDecayMode(); // Update the atom's decay mode
  }

  getDecayMode() {
    // Get the isotope's decay mode //
    let isotopes = table[this.protons]; // Get only isotopes of this element
    isotopes = isotopes.filter((i) => {
      // Find the specific isotope
      return i.neutrons == this.neutrons;
    });
    if (isotopes.length === 0) {
      this.decayMode = "unknown"; // If not found, return "unknown"
    } else {
      this.decayMode = isotopes[0].decay; // Otherwise return the decay mode
    }
  }

  get nucleusRadius() {
    return 2.5 * Math.sqrt(this.isotope) + 2;
  }

  takeDamage(damage = 1) {
    this.game.addScore(damage);
    for (let i = 0; i < damage; i++) {
      if (this.nucleons.length <= 0) return;
      let damaged = this.nucleons[this.nucleons.length - 1];
      if (damaged === "neutron") {
        this.addNeutron(-1)
      } else if (damaged === "proton") {
        this.addProton(-1)
      }
      for (let i = 0; i < randint(5, 10); i++) {
        let p = new Particle(this.game, this.x, this.y, this.game.colours.black, 3);
        p.velocity = { x: this.velocity.x + randint(10, -10) / 10, y: this.velocity.y + randint(10, -10) / 10 };
        p.tween.push({ var: "scale", target: 0, speed: -0.001, })
      }
      let drop = new Pickup(this.game, this.x, this.y, damaged)
      drop.velocity = { x: this.velocity.x + randint(10, -10) / 10, y: this.velocity.y + randint(10, -10) / 10 }
    }
  }

  draw(ctx) {
    // Rudimentary check to see if atom is offscreen //
    // Ensure no unnecessary costly trig & sqrt calculations are used //
    // Theoretically improve performance //
    if (isOffScreen(this, this.game.viewport)) return;

    // Draw nucleus
    if (this.game.settings.simplerNucleus) {
      circle(
        ctx,
        this.game.fx(this.x),
        this.game.fy(this.y),
        this.game.fz(this.nucleusRadius),
        {
          fillColour: this.game.colours.red,
          lineColour: this.game.colours.black,
          lineWidth: this.game.fz(2)
        }
      );
    } else {
      this.nucleons.forEach((v, i) => {
        let n = 2.5;
        let pos = getNucleonPosition(i);
        let x = n * pos.x + this.x;
        let y = n * pos.y + this.y;
        circle(ctx, this.game.fx(x), this.game.fy(y), this.game.fz(5), {
          fillColour: this.game.colours.black
        });
      });
      this.nucleons.forEach((v, i) => {
        let n = 2.5;
        let pos = getNucleonPosition(i);
        let x = n * pos.x + this.x;
        let y = n * pos.y + this.y;
        circle(ctx, this.game.fx(x), this.game.fy(y), this.game.fz(3), {
          fillColour: v === N ? this.game.colours.blue : this.game.colours.red
        });
      });
    }
    // Write symbol and isotope in center of nucleus // TODO - tidy up
    /*
    ctx.textBaseline = "middle";
    ctx.textAlign = "center";
    ctx.fillStyle = this.game.colours.white;
    ctx.fillText(
      `${symbols[this.protons - 1]}-${this.isotope}`,
      this.game.fx(this.x),
      this.game.fy(this.y)
    );*/

    // Iterate over each electron shell //
    let s = this.game.settings.simplerElectrons === 2 ? [shells[this.protons][shells[this.protons].length - 1]] : shells[this.protons]
    let l = shells[this.protons].length - 1
    s.forEach((v, i) => {
      // Calculate the radius of the shell and draw it //
      let radius = 15 * ((this.game.settings.simplerElectrons === 2 ? l : i) + 1) + this.nucleusRadius;
      circle(
        ctx,
        this.game.fx(this.x),
        this.game.fy(this.y),
        this.game.fz(radius),
        {
          lineWidth: this.game.fz(2),
          lineColour: this.game.colours.black
        }
      );
      // Calculate the direction the shell rotates //
      let neg = i % 2 === 0 ? 1 : -1;
      // Iterate for each electron in the shell //
      for (let j = 0; j < v; j++) {
        // Calculate a value to be used in a later equation so it doesn't have to be calculated twice //
        // This probably wouldn't impact performance too much but it's better to be cautious //
        let val =
          (this.game.time - this.game.times.paused * 0.9) /
          500 /
          Math.sqrt(i + 1) -
          (j * TAU) / v;

        // Draw the electron
        if (!this.game.settings.simplerElectrons) {
          circle(
            ctx,
            this.game.fx(neg * radius * Math.sin(val) + this.x),
            this.game.fy(radius * Math.cos(val) + this.y),
            this.game.fz(3),
            { fillColour: this.game.colours.black }
          );
        }
      }
    });
  }

  /*
  @param { number } deltaTime
  */
  update(deltaTime) {
    super.update(deltaTime);
    this.attackCooldown = Math.max(this.attackCooldown - deltaTime, 0);

    // Check for bullet collisions //
    this.game.gameObjects.filter(i => {
      // Filter only enemy bullets //
      return i.class === "bullet" && i.team !== this.team;
    }).forEach(bullet => {
      // If the two collide (overlap) //
      if (bullet.hitboxRadius + this.hitboxRadius >= distance(bullet.x, bullet.y, this.x, this.y)) {
        this.takeDamage(randint(1, 3));
        // Delete bullet // TODO - pierce
        bullet.deleteMe = true;
      }
      // DIE //
      if (this.nucleons.length === 0) {
        this.game.addScore(10);
        this.deleteMe = true;
      };
    })

    // Handle attacking //
    switch (this.attackType) {
      case 1: // Primary
        // If attack is on cooldown, don't attack //
        if (this.attackCooldown > 0) return;
        // Otherwise, reset the cooldown and perform the attack //
        this.attackCooldown = 1000 / this.protons ** 0.5;

        // Spawn a bullet // TODO - make bullets spawn around the atom not at center // partly implemented
        let spawnPos = normalise(
          {
            x: (this.game.iFx(this.game.mouse.x) - this.x) / 1000,
            y: (this.game.iFy(this.game.mouse.y) - this.y) / 1000
          },
          this.hitboxRadius
        );
        let bullet = new Bullet(
          this.game,
          this.team,
          this.x + spawnPos.x,
          this.y + spawnPos.y
        );
        // Apply velocity such that the bullet shoots towards the mouse //
        bullet.velocity = normalise({
          x: (this.game.iFx(this.game.mouse.x) - this.x) / 1000,
          y: (this.game.iFy(this.game.mouse.y) - this.y) / 1000
        });

        // Add the atom's own velocity //
        bullet.velocity = {
          x:
            bullet.velocity.x +
            this.velocity.x +
            randint(-this.accuracy * 100, this.accuracy * 100) / 1000,
          y:
            bullet.velocity.y +
            this.velocity.y +
            randint(-this.accuracy * 100, this.accuracy * 100) / 1000
        };
        break;
      case 2: // Secondary (special)
        console.log("special attack yippee!!!");
        break;
      default:
        break;
    }
  }

  attack() { }

  special() { }

  get electrons() {
    return this.protons; // There is no ionising mechanic, so electrons will always equal protons
  }
  get element() {
    return elements[this.game.lang][this.protons - 1];
  }
  get symbol() {
    return symbols[this.protons - 1];
  }
  get isotope() {
    return this.protons + this.neutrons;
  }
  get hitboxRadius() {
    return 15 * shells[this.protons].length + this.nucleusRadius;
  }
  // Overwrite the setter for hitboxRadius, as it is determined by an equation (above) //
  set hitboxRadius(v) { }

  get speed() {
    // TODO - fix equation
    return 2 / (this.isotope / 20 + 10);
  }
}
