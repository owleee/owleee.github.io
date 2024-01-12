import { normalise, distance } from "./functions.js";

export default class Controller {
  constructor(game, object) {
    this.game = game;
    this.object = object;

    this.forces = {
      up: 0,
      down: 0,
      left: 0,
      right: 0
    };

    // Listen for keys being pressed //
    document.addEventListener("keydown", (event) => {
      switch (event.key) {
        case this.game.controls.up:
        case this.game.controls.up.toUpperCase():
          this.forces.up = this.object.speed;
          break;

        case this.game.controls.down:
        case this.game.controls.down.toUpperCase():
          this.forces.down = this.object.speed;
          break;

        case this.game.controls.left:
        case this.game.controls.left.toUpperCase():
          this.forces.left = this.object.speed;
          break;

        case this.game.controls.right:
        case this.game.controls.right.toUpperCase():
          this.forces.right = this.object.speed;
          break;

        case this.game.controls.menu:
          this.game.togglePause();
          break;

        case this.game.controls.attack:
          this.object.attackType = 1;
          break;

        case this.game.controls.special:
          this.object.attackType = 2;
          break;

        default:
          break;
      }
      this.resolveForces(this.forces);
    });

    // Listen for keys being released //
    document.addEventListener("keyup", (event) => {
      switch (event.key) {
        case this.game.controls.up:
        case this.game.controls.up.toUpperCase():
          this.forces.up = 0;
          break;

        case this.game.controls.down:
        case this.game.controls.down.toUpperCase():
          this.forces.down = 0;
          break;

        case this.game.controls.left:
        case this.game.controls.left.toUpperCase():
          this.forces.left = 0;
          break;

        case this.game.controls.right:
        case this.game.controls.right.toUpperCase():
          this.forces.right = 0;
          break;

        default:
          break;
      }
      this.resolveForces(this.forces);
    });

    document.addEventListener("keypress", (event) => {
      if (event.key === "#") {
        this.game.cheat();
      }
    });

    // Listen for scroll events //
    document.addEventListener("wheel", (event) => {
      this.game.scroll = Math.max(this.game.scroll + event.deltaY * this.game.settings.scroll, 0);
    })

    // Listen for mouse buttons being pressed //
    document.addEventListener("mousedown", (event) => {
      this.game.mouse.clicked = true;
      if (!this.game.mouse.clickPos.x) this.game.mouse.clickPos = { x: this.game.mouse.x, y: this.game.mouse.y, scroll: this.game.scroll };
      if (this.game.mouse.onButton) return;
      switch (event.button) {
        case 0:
          this.object.attack.primary = true;
          break;
        case 2:
          this.object.attack.secondary = true;
          break;
        default:
          break;
      }
    });

    document.addEventListener("mouseup", (event) => {
      this.game.mouse.clickPos = {};
      this.game.mouse.clicked = false;
      if (this.game.mouse.onButton) return;
      switch (event.button) {
        case 0:
          this.object.attack.primary = false;
          break;
        case 2:
          this.object.attack.secondary = false;
          break;
        default:
          break;
      }
    });

    // Prevent right-clicking from opening the 'context' menu //
    document.addEventListener("contextmenu", (event) => {
      event.preventDefault();
    });
  }
  update() {
    this.resolveForces(this.forces);
  }

  resolveForces(forces) {
    // If the movement mode is set to cursor-based //
    if (this.game.settings.mouseMovement) {
      // If the cursor is within the atom's radius //
      if (
        distance(
          this.game.iFx(this.game.mouse.x),
          this.game.iFy(this.game.mouse.y),
          this.object.x,
          this.object.y
        ) < this.object.hitboxRadius
      ) {
        // Set velocity to 0 and stop the function //
        this.object.velocity = {
          x: 0,
          y: 0
        };
        return;
      }
      // Apply velocity such that the atom moves towards the mouse, scaled by the speed //
      this.object.velocity = normalise(
        {
          x: this.game.iFx(this.game.mouse.x) - this.object.x,
          y: this.game.iFy(this.game.mouse.y) - this.object.y
        },
        this.object.speed
      );
    } else {
      // Sum the "forces" generated and apply them to the player // DONE - make diagonals slower
      this.object.velocity = normalise(
        {
          x: this.forces.right - forces.left,
          y: this.forces.up - forces.down
        },
        this.game.debug.speed * this.object.speed
      );
    }
  }
}
