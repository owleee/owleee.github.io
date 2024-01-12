//ENEMY AI!!!

// I want to have a variety of AI, not all enemies act the same.
// e.g. some go in all electrons blazing, some keep their distance, some fire in bursts, etc
// some have better aim than others
// some group up, some go alone // boids?? - implement later if time left

import GameObject from "./object.js";
import { normalise, distance } from "./functions.js";

export default class AI extends GameObject {
  constructor(game, object) {
    super(game);
    this.object = object;
    this.personality; // greedy, cowardly, friendly, brave, cautious, idk
    this.detectionRadius = 500;
    this.stopRadius = 100;
  }
  draw(ctx) {
    // No sprite //
    return;
  }
  update(deltaTime) {
    let distanceToPlayer = distance(
      this.object.x,
      this.object.y,
      this.game.player.x,
      this.game.player.y
    );
    if (
      distanceToPlayer <
      this.stopRadius +
      this.object.hitboxRadius +
      this.game.player.hitboxRadius ||
      distanceToPlayer >
      this.detectionRadius +
      this.object.hitboxRadius +
      this.game.player.hitboxRadius
    ) {
      this.object.velocity = { x: 0, y: 0 };
    } else {
      this.object.velocity = normalise(
        {
          x: this.game.player.x - this.object.x,
          y: this.game.player.y - this.object.y
        },
        this.object.speed
      );
    }
  }
}
