import { normalise, distance } from "./functions.js";

export default class Controller {
  constructor(game, object) {
    this.game = game;
    this.object = object;
    // Heavier atoms move more slowly //;

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
          this.forces.up = this.object.speed;
          break;

        case this.game.controls.down:
          this.forces.down = this.object.speed;
          break;

        case this.game.controls.left:
          this.forces.left = this.object.speed;
          break;

        case this.game.controls.right:
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
          this.forces.up = 0;
          break;

        case this.game.controls.down:
          this.forces.down = 0;
          break;

        case this.game.controls.left:
          this.forces.left = 0;
          break;

        case this.game.controls.right:
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

    // Listen for mouse buttons being pressed //
    document.addEventListener("mousedown", (event) => {
      this.game.mouse.clicked = true;
      if (this.game.mouse.onButton) return;
      switch (event.button) {
        case 0:
          this.object.attackType = 1;
          break;
        case 2:
          this.object.attackType = 2;
          break;
        default:
          break;
      }
    });

    document.addEventListener("mouseup", (event) => {
      this.game.mouse.clicked = false;
      if (this.game.mouse.onButton) return;
      this.object.attackType = 0;
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
        this.object.speed
      );
    }
  }
}
