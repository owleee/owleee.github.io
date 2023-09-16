import GameObject from "/qim/object.js";

import { elements, symbols, shells } from "/qim/data.js";

import circle from "/qim/functions.js";

const TAU = Math.PI * 2;

export default class Atom extends GameObject {
  constructor(game, x = 0, y = 0) {
    super(game, x, y);

    this.neutrons = 5;

    this.protons = 5;
  }
  draw(ctx) {
    circle(
      ctx,
      this.game.fx(this.x),
      this.game.fy(this.y),
      15,
      1,
      true,
      "#031926"
    );
    shells[this.protons - 1].forEach((v, i) => {
      ctx.beginPath();
      let radius = 15 * (i + 1) + 35;
      circle(ctx, this.game.fx(this.x), this.game.fy(this.y), radius, 2);
      for (let j = 0; j < v; j++) {
        ctx.beginPath();
        let val = this.game.time / 500 / Math.sqrt(i + 1) - (j * TAU) / v;
        let neg = i % 2 === 0 ? 1 : -1;

        circle(
          ctx,
          this.game.fx(neg * radius * Math.sin(val) + this.x),
          this.game.fy(radius * Math.cos(val) + this.y),
          3,
          1,
          true,
          "#031926"
        );
      }
    });
  }
  set protons(v) {
    this._protons = v;
    this.element = elements[this.protons - 1];
    this.symbol = symbols[this.protons - 1];
    this.electrons = this.protons;
    console.log(`The atom is ${this.element}-${this.isotope} (${this.symbol})`);
  }
  get protons() {
    return this._protons;
  }
  get isotope() {
    return this.protons + this.neutrons;
  }
  get hitboxRadius() {
    return 15 * shells[this.protons - 1].length + 35 + 1.5;
  }
  set hitboxRadius(v) {}
}
