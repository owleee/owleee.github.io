import GameObject from "./object.js";
import { elements, symbols, shells } from "./data.js";
import {
  circle,
  normalise,
  isOffScreen,
  randint,
  endPop,
  distance,
  vector, text,
  TRvector, round, randItem, shuffleArray, distanceSquared
} from "./functions.js";
import { table } from "./table.js";
import { default as Bullet, Shockwave } from "./bullet.js";
import Pickup from "./pickup.js";
import Particle from "./particle.js";
import AI from "./ai.js";

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

    this.game.objects.atoms.push(this)

    this.team = team; // 0 = player, 1 = enemy

    this.neutrons = 0;

    this.protons = 0;

    this.nucleons = [];

    this.trauma = 10;
    this.nucleusOffset = { x: 0, y: 0 }

    this.attackCooldown = 0;
    this.attack = {
      primary: false,
      secondary: false
    }
    this.times = { shooting: 0, moving: 0 };

    this.shield = "NUH UH";
    this.iFrames = 0

    this.combo = 0;
    this.comboTimer = 0;

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
    if (this.protons + n >= 118) {
      console.log((this.protons + n) - 118)

      this.eject("proton", normalise(vector((this.game.iFx(this.game.mouse.x) - this.x), (this.game.iFy(this.game.mouse.y) - this.y))), n)
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

  setNucleons(protons, neutrons) {
    this.nucleons.length = 0 // Reset the nucleus

    this.protons = protons;
    for (let i = 0; i < protons; i++) this.nucleons.push(P); // Add the protons to the nucleon array

    this.neutrons = neutrons;
    for (let i = 0; i < neutrons; i++) this.nucleons.push(N); // Add the protons to the nucleon array
    this.getDecayMode(); // Update the atom's decay mode
    shuffleArray(this.nucleons);

    if (this.nucleons[0] === N) {
      console.log("uh oh")
      let firstProton = this.nucleons.indexOf(P)
      this.nucleons[0] = P;
      this.nucleons[firstProton] = N
      console.log(this.nucleons)
    }
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

      if (1.5 * this.protons > this.neutrons) this.eject("proton", TRvector(randint(0, 360), randint(5, 15) / 10))
      if (1.5 * this.protons < this.neutrons) this.eject("neutron", TRvector(randint(0, 360), randint(5, 15) / 10))
    } else {
      this.decayMode = isotopes[0].decay; // Otherwise return the decay mode
    }
  }

  get nucleusRadius() {
    return 2.5 * Math.sqrt(this.isotope) + 2;
  }

  takeDamage(damage = 1, damagePos = {}) {
    if (this.iFrames && damage < 500) return;
    if (this.team === 1) damage *= this.game.debug.damage;
    this.game.viewport.trauma += damage * 2
    this.game.addScore(damage);
    for (let i = 0; i < randint(5, 10); i++) {
      let p = new Particle(this.game, damagePos.x || this.x, damagePos.y || this.y, this.game.colours.black, 3);
      p.velocity = TRvector(Math.random() * 360, Math.random() * 2)
      p.tween.push({ var: "scale", target: 0, speed: -0.002, })
    }
    for (let i = 0; i < damage; i++) {
      if (this.nucleons.length <= 0) return;
      let damaged = this.nucleons[this.nucleons.length - 1];
      this.eject(damaged, TRvector(Math.random() * 360, Math.random() * 2));
      //let drop = new Pickup(this.game, this.x, this.y, damaged)
      //drop.velocity = { x: this.velocity.x + randint(10, -10) / 10, y: this.velocity.y + randint(10, -10) / 10 }
    }
  }

  draw(ctx) {

    if (!this.element) return

    // Rudimentary check to see if atom is offscreen //
    // Ensure no unnecessary costly trig & sqrt calculations are used //
    // Theoretically improve performance //
    if (isOffScreen(this, this.game.viewport)) return;

    this.nucleusOffset.x = Math.random() * this.trauma - this.trauma / 2;
    this.nucleusOffset.y = Math.random() * this.trauma - this.trauma / 2;

    // Draw nucleus //
    if (this.game.settings.simplerNucleus) {
      // Simpler nucleus //
      circle(
        ctx,
        this.game.fx(this.x + this.nucleusOffset.x),
        this.game.fy(this.y + this.nucleusOffset.y),
        this.game.fz(this.nucleusRadius),
        {
          fillColour: this.game.colours.red,
          lineColour: this.iFrames ? `rgb(${255 * Math.sin(this.iFrames)},${255 * Math.sin(this.iFrames)},${255 * Math.sin(this.iFrames)})` : this.game.colours.black,
          lineWidth: this.game.fz(2)
        }
      );
    } else {
      // Full nucleus //
      this.nucleons.forEach((v, i) => {
        let n = 2.5;
        let pos = getNucleonPosition(i);
        let x = n * pos.x + this.x + this.nucleusOffset.x;
        let y = n * pos.y + this.y + this.nucleusOffset.y;
        circle(ctx, this.game.fx(x), this.game.fy(y), this.game.fz(5), {
          fillColour: this.iFrames ? `rgb(${255 * Math.sin(this.iFrames)},${255 * Math.sin(this.iFrames)},${255 * Math.sin(this.iFrames)})` : this.game.colours.black,
        });
      });
      [...this.nucleons].reverse().forEach((v, i) => {
        let n = 2.5;
        let pos = getNucleonPosition(this.isotope - i - 1);
        let x = n * pos.x + this.x + this.nucleusOffset.x;
        let y = n * pos.y + this.y + this.nucleusOffset.y;
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
      if (i === 0 && this.shield !== "NUH UH") {
        let c = Math.min(round(this.shield / 10), 85).toString(16)
        if (c.length === 1) c = "0" + c
        circle(ctx, this.game.fx(this.x), this.game.fy(this.y), this.game.fz(radius), { fillColour: this.game.colours.blue + c })
      }
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
    /*
    text(ctx, this.game.fx(this.x), this.game.fy(this.y), this.decayMode, {
      size: this.game.fz(Math.max(this.nucleusRadius, 10)),
      fillColour: this.game.colours.white,
    })

    text(ctx, this.game.fx(this.x), this.game.fy(this.y + 20), `${this.protons} ${this.neutrons}`, {
      size: 20,
      fillColour: this.game.colours.white,
      lineColour: this.game.colours.black
    })*/

    if (this.game.settings.readouts) {
      text(ctx, this.game.fx(this.x), this.game.fy(this.y), `${this.symbol}-${this.isotope}`, {
        size: this.game.fz(Math.max(this.nucleusRadius, 10)),
        fillColour: this.game.colours.black,
        lineWidth: this.game.fz(4),
        lineColour: this.game.colours.black,
      })
      text(ctx, this.game.fx(this.x), this.game.fy(this.y), `${this.symbol}-${this.isotope}`, {
        size: this.game.fz(Math.max(this.nucleusRadius, 10)),
        fillColour: this.game.colours.white,
      })

    }
  }

  /*
  @param { number } deltaTime
  */
  update(deltaTime) {
    super.update(deltaTime);
    this.attackCooldown = Math.max(this.attackCooldown - deltaTime, 0);
    this.specialCooldown = Math.max(this.specialCooldown - deltaTime, 0);
    this.iFrames = Math.max(0, this.iFrames - deltaTime);
    this.trauma = Math.max(0, this.trauma - 0.01 * deltaTime);
    this.comboTimer = Math.max(0, this.comboTimer - deltaTime);
    if (this.comboTimer === 0) this.combo = 0;

    if (this.shield !== "NUH UH") this.shield = Math.max(this.shield - deltaTime, 0);

    if (this.shield === 0) {
      this.shield = "NUH UH"
    }

    // DIE //
    if (this.nucleons.length === 0) {
      if (this === this.game.player) {
        console.log("you killed yourself NOW")
        this.game.gameOver()
      } else {
        this.game.addScore(10);
        this.deleteMe = true;
      }
    };

    // Iterate over every other atom and calculate collisions //
    if (!isOffScreen(this, this.game.viewport)) {
      this.game.objects.atoms.forEach(atom => {
        if (atom === this) return;
        if (!isOffScreen(atom, this.game.viewport)) {
          let d = distance(atom.x, atom.y, this.x, this.y)
          if (d < this.hitboxRadius + atom.hitboxRadius) {
            this.x = ((this.x - atom.x) / d) * ((this.hitboxRadius + atom.hitboxRadius + d) / 2) + atom.x
            this.y = ((this.y - atom.y) / d) * ((this.hitboxRadius + atom.hitboxRadius + d) / 2) + atom.y

            atom.x = ((atom.x - this.x) / d) * ((this.hitboxRadius + atom.hitboxRadius + d) / 2) + this.x
            atom.y = ((atom.y - this.y) / d) * ((this.hitboxRadius + atom.hitboxRadius + d) / 2) + this.y
          }
        }
      })
    }

    // Handle attacking //
    if (this.attack.primary) { // Primary
      // If attack is on cooldown, don't attack //
      if (this.attackCooldown > 0) return;
      // Otherwise, reset the cooldown and perform the attack //
      this.attackCooldown = 1000 / this.protons ** 0.5;

      this.shoot()
    }
    if (this.attack.secondary) { // Secondary/special
      // If attack is on cooldown, don't attack //
      if (this.specialCooldown > 0) return;
      // Otherwise, reset the cooldown and perform the attack //
      this.specialCooldown = 1000;

      this.special()
    }
  }

  shoot(type = "electron", damageMultiplier = 1) {
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
    bullet.type = type;
    if (type === "alpha") { bullet.damage = 10 * damageMultiplier } else if (type === "positron") { bullet.damage = 10 * damageMultiplier; bullet.type = "electron"; bullet.pierce = 1000; }
    // Apply velocity such that the bullet shoots towards the mouse //
    bullet.velocity = normalise({
      x: (this.game.iFx(this.game.mouse.x) - this.x) / 1000,
      y: (this.game.iFy(this.game.mouse.y) - this.y) / 1000
    }, bullet.type === "alpha" ? 0.25 : 1);

    // Add the atom's own velocity and bullet bloom //
    let bloom = (this.decayMode !== "IS");
    bullet.velocity = {
      x:
        bullet.velocity.x +
        this.velocity.x +
        bloom * randint(-this.accuracy * 100, this.accuracy * 100) / 1000,
      y:
        bullet.velocity.y +
        this.velocity.y +
        bloom * randint(-this.accuracy * 100, this.accuracy * 100) / 1000
    };
  }

  eject(type, direction, amount = 1) {
    if (type == "proton") {
      this.addProton(-amount)
    } else if (type == "neutron") {
      this.addNeutron(-amount)
    }
    for (let i = 0; i < amount; i++) {
      let p = new Pickup(this.game, this.x, this.y, type);
      p.team = this.team;
      p.velocity = direction
      // Add the atom's own velocity //
      /*
      p.velocity = {
        x:
          p.velocity.x +
          this.velocity.x //+randint(-this.accuracy * 100, this.accuracy * 100) / 1000,
        , y:
          p.velocity.y +
          this.velocity.y //+ randint(-this.accuracy * 100, this.accuracy * 100) / 1000
      };*/
    }
  }

  special() {
    if (this.decayMode !== "IS") {
      if (this.comboTimer > 0) { this.combo += 1 }
      this.comboTimer = 1200
    }
    //this.game.viewport.trauma += 7;
    switch (this.decayMode) {
      case "p":
      case "2p":
      case "3p":
        this.eject("proton", normalise(vector((this.game.iFx(this.game.mouse.x) - this.x), (this.game.iFy(this.game.mouse.y) - this.y))), this.decayMode === "3p" ? 3 : this.decayMode === "2p" ? 2 : 1)
        break;
      case "n":
      case "2n":
        this.eject("neutron", normalise(vector((this.game.iFx(this.game.mouse.x) - this.x), (this.game.iFy(this.game.mouse.y) - this.y))), this.decayMode === "2n" ? 2 : 1)
        break;
      case "A":
        this.shoot("alpha");
        this.addProton(-2);
        this.addNeutron(-2);
        break;
      case "B-":
        // electron (weak bullet) & antineutrino (strong shockwave)
        this.addNeutron(-1)
        let s = new Shockwave(this.game, this.team, this.x, this.y);
        s.hitboxRadius = this.hitboxRadius;
        s.damage = 7 * this.combo;

        this.addProton(1)
        this.shoot("electron", this.combo)
        break;
      case "B+":
        // positron (strong bullet) & antineutrino (weak shockwave)
        this.addNeutron(1)
        let s2 = new Shockwave(this.game, this.team, this.x, this.y);
        s2.hitboxRadius = this.hitboxRadius;
        s2.damage = 1 * this.combo;
        s2.speed = 0.2;
        this.addProton(-1)
        this.shoot("positron", this.combo)
        break;
      case "EC":
        if (this.shield === "NUH UH") {
          this.shield = 2000 * (this.combo + 1)
        } else { this.shield += 2000 * (this.combo + 1) }
        this.addProton(-1)
        this.addNeutron(1)
        break;
      case "SF":
        // Now I Am Become Death, Destroyer Of Worlds. //
        this.setNucleons(1, 0)
        this.game.objects.atoms.forEach(atom => {
          if (!(atom === this || atom === this.game.player))
            atom.takeDamage(1000);
        })
        this.game.boomFlash = 7500;
      default:
        break;
    }
  }

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


export class AtomSpawner extends GameObject {
  constructor(game) {
    super(game, 0, 0);
    this.spawnCooldown = 0;
    this.spawnSpeed = 2500;
    console.log("atom spawner init")
    this.spawn()
  }
  draw(ctx) {
    // No sprite //
  }
  update(deltaTime) {
    // If there are already 100 atoms, stop spawning - to improve perfomance and reduce clutter //
    if (this.game.objects.atoms.length >= 400) return;
    if (!this.game.debug.enemySpawn) return
    this.spawnCooldown -= deltaTime;
    if (this.spawnCooldown <= 0) {
      this.spawnCooldown = this.spawnSpeed;
      this.spawn();
    }
  }
  spawn() {
    let x = randint(-this.game.width / 2, this.game.width / 2);
    let y = randint(-this.game.height / 2, this.game.height / 2);
    // INVERTED FOR TESTING - TODO: REVERT
    if (-distance(x, y, this.game.player.x, this.game.player.y) > -1000) {
      console.log(`spawn too close to player (${round(distance(x, y, this.game.player.x, this.game.player.y))}px < 1000), retrying`)
      this.spawn();
      return;
    }
    let element = randItem(table[randint(Math.max(this.game.player.protons - 5, 1), Math.min(this.game.player.protons + 5, 118))])
    if (element.protons === 0) { console.log("attempted to spawn atom with 0 protons, retrying"); this.spawn(); return }
    let a = new Atom(this.game, 1, x, y)
    new AI(this.game, a)
    a.setNucleons(parseInt(element.protons), parseInt(element.neutrons))
    console.log(`spawn ${a.element}-${a.isotope} at ${x},${y}`)
  }
}
