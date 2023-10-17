import GameObject from "./object.js";
import { circle } from "./functions.js";

export default class Particle extends GameObject {
    constructor(game, x, y, colour, radius) {
        super(game, x, y);
        this.colour = colour;
        this.radius = radius;
        this.lifetime = -1;
    }
    draw(ctx) {
        circle(ctx, this.game.fx(this.x), this.game.fy(this.y), this.game.fz(this.radius * this.scale), {
            fillColour: this.colour
        })
    }

    update(deltaTime) {
        super.update(deltaTime);

        if (this.scale <= 0) this.deleteMe = true;
        if (this.lifetime === -1) return;
        this.lifetime -= deltaTime;
        if (this.lifetime <= 0) this.deleteMe = true;
    }
}