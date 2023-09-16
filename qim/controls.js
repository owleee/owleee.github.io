export default class Controller {
  constructor(game, object) {
    this.game = game;
    this.object = object;
    let speed = 1 / (this.object.isotope + 1) + 0.1;
    let forces = {
      up: 0,
      down: 0,
      left: 0,
      right: 0
    };
    document.addEventListener("keydown", (event) => {
      switch (event.key) {
        case this.game.controls.up:
          forces.up = speed;
          break;

        case this.game.controls.down:
          forces.down = speed;
          break;

        case this.game.controls.left:
          forces.left = speed;
          break;

        case this.game.controls.right:
          forces.right = speed;
          break;

        default:
          break;
      }
      this.resolveForces(forces);
    });
    document.addEventListener("keyup", (event) => {
      switch (event.key) {
        case this.game.controls.up:
          forces.up = 0;
          break;

        case this.game.controls.down:
          forces.down = 0;
          break;

        case this.game.controls.left:
          forces.left = 0;
          break;

        case this.game.controls.right:
          forces.right = 0;
          break;

        default:
          break;
      }
      this.resolveForces(forces);
    });
  }
  resolveForces(forces) {
    this.object.velocity.x = forces.right - forces.left;
    this.object.velocity.y = forces.up - forces.down;
  }
}
