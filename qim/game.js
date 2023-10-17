// Import viewport object //
import Viewport from "./viewport.js";
import {
  XYrectangle,
  rectangle,
  text,
  round,
  arraySum
} from "./functions.js";
import { category, categoryColours, L, funFacts } from "./data.js";
import { randint, randItem, elementSymbol } from "./functions.js";
import { default as Pickup, PickupSpawner } from "./pickup.js";
import { FunFactText } from "./button.js";

// Globally indicate state of the game // TODO - add more?

// Game Manager class
export default class Game {
  constructor() {
    this.viewport = new Viewport(this);
    this.gamestate = "MENU";
    this.gameObjects = [];
    this.menuObjects = [];
    this.time = 0;
    this.tick = 0;
    this.width = 5000;
    this.height = 5000;

    this.score = 0;
    this.scoreWiggle = 0;
    this.lastScoreAddedTime = 0;
    this.highscore = 0;

    this.times = {
      paused: 0,
      moving: 0,
      shooting: 0
    };

    this.settings = {
      mouseMovement: false,
      simplerNucleus: false, // make the nucleus a single circle
      simplerElectrons: false // make the electron shell <something?> TODO - elaborate
    };

    this.funFactCooldown = 1000;

    this.lang = "en"; // supported: en, es
    this.debug = {
      menu: false,
      foodSpawn: true
    };

    this.mouse = {
      x: this.viewport.centre.x,
      y: this.viewport.height / 2
    };

    // Whether the movement is key-based or towards the cursor //
    // Allow for variable controls, e.g. WASD / Arrow Keys / IJKL //
    this.controls = {
      up: "w",
      down: "s",
      left: "a",
      right: "d",
      menu: "Escape",
      attack: "not bound :3 :3",
      special: "not boundy woundy >w<"
    };
    this.colours = {
      black: "#031926",
      white: "#F4F4F6",
      blue: "#1E21BF",
      red: "#BF211E",
      grey: "#AAAAAA",
      pink: "#FF4DFF"
    };
  }

  start() {
    this.gamestate = "RUNNING";
    this.player.protons = 0;
    this.player.neutrons = 0;
    this.player.nucleons.length = 0;
    this.player.addProton();
    this.score = 0;

    let spawner = new PickupSpawner(this);
    // Spawn 250 pickups at the start //
    for (let i = 0; i <= 250; i++) spawner.spawn();
  }
  togglePause() {
    // Toggle whether the game is paused // TODO - Implement!
    if (this.gamestate === "PAUSED") {
      this.gamestate = "RUNNING";
      this.mouse.onButton = false;
    } else if (this.gamestate === "RUNNING") {
      this.gamestate = "PAUSED";
    }
  }
  returnToMenu() {
    this.gamestate = "MENU";
    // Remove all gameobjects //
    this.gameObjects.length = 0;
    // Remove funfact objects, but keep buttons //
    this.menuObjects = this.menuObjects.filter(
      (i) => i.constructor.name !== "FunFactText"
    );
    this.funFactCooldown = randint(10000, 20000);
    this.player.x = this.player.y = 0;
    this.addObject(this.player);
    if (this.score > this.highscore) {
      this.highscore = this.score;
    }
  }

  update(deltaTime) {
    this.tick += 1;
    this.deltaTime = deltaTime;

    // TODO - clean up fun fact code // Make own function?
    if (this.gamestate === "RUNNING") {
      // decrement the score wiggle by a small amount //
      this.scoreWiggle = Math.max(0, this.scoreWiggle - 0.005 * deltaTime);
      this.funFactCooldown -= deltaTime;
      if (this.funFactCooldown <= 0) {
        let elementFacts = funFacts.filter((i) => {
          return i.element === this.player.protons;
        });
        if (elementFacts.length === 0) {
          // If there are no element-specific facts, default to generic facts //
          elementFacts = funFacts.filter((i) => {
            return i.element === 0;
          });
        }
        let text = "";
        // element-specific funfacts //
        if (randint(1, 2) === 1) {
          text = randItem(elementFacts).fact;
        } else {
          // Generic facts //
          text = randItem(
            funFacts.filter((i) => {
              return i.element === 0;
            })
          ).fact;
        }

        new FunFactText(this, this.viewport.width, 35 / 2, text);
      }
    }

    this.menuObjects.forEach((object) => object.update(deltaTime));
    for (let i in this.menuObjects) {
      if (this.menuObjects[i].hovered) {
        this.mouse.onButton = true;
        break;
      }
      this.mouse.onButton = false;
    }

    if (this.gamestate === "MENU") {
      this.viewport.zoom = 5;
      this.viewport.x =
        this.player.nucleusRadius -
        this.viewport.width / (2 * this.viewport.zoom);
      this.viewport.y =
        this.viewport.height / (2 * this.viewport.zoom) -
        this.player.nucleusRadius;

      //this.viewport.zoom = 5;
    }

    if (
      this.gamestate === "PAUSED" ||
      this.gamestate === "MENU" ||
      this.gamestate === "GAMEOVER"
    )
      return;
    this.viewport.zoom = Math.max((this.viewport.zoom -= 0.005 * deltaTime), 1);

    // Iterate over all objects and call their update method //
    this.gameObjects.forEach((object) => object.update(deltaTime));
    //this.viewport.shake(1, 1);

    // Make the game viewport/"camera" smoothly follow the player // customisable in settings?
    this.viewport.smoothFollow(deltaTime, this.player);

    // Iterate over all objects and check whether they have been marked for deletion //
    this.gameObjects = this.gameObjects.filter((object) => !object.deleteMe);
    this.menuObjects = this.menuObjects.filter((object) => !object.deleteMe);
  }
  draw(ctx) {
    // Draw borders //
    if (this.viewport.x + this.viewport.width / 2 > this.width / 2) {
      XYrectangle(
        // east (+x) border
        ctx,
        this.fx(this.width / 2),
        0,
        this.viewport.width,
        this.viewport.height,
        { fillColour: this.colours.grey }
      );
    }
    if (this.viewport.x - this.viewport.width / 2 < -this.width / 2) {
      XYrectangle(
        // west (-x) border
        ctx,
        this.fx(-this.width / 2),
        this.viewport.height,
        0,
        0,
        { fillColour: this.colours.grey }
      );
    }
    if (this.viewport.y + this.viewport.height / 2 > this.height / 2) {
      XYrectangle(
        // north (+y) border
        ctx,
        this.viewport.width,
        this.fy(this.height / 2),
        0,
        0,
        { fillColour: this.colours.grey }
      );
    }
    if (this.viewport.y - this.viewport.height / 2 < -this.height / 2) {
      XYrectangle(
        // south (-y) border
        ctx,
        0,
        this.fy(-this.height / 2),
        this.viewport.width,
        this.viewport.height,
        { fillColour: this.colours.grey }
      );
    }

    // Iterate over all objects and call their draw method //
    this.gameObjects.forEach((object) => object.draw(ctx));

    // Draw GUI //

    // Element symbol //

    if (["PAUSED", "RUNNING"].includes(this.gamestate)) {
      elementSymbol(
        ctx,
        this.viewport.center.x,
        50,
        this.player,
        this.colours.black,
        this.lang
      );

      text(
        ctx,
        this.viewport.center.x,
        170,
        L(this.player.decayMode, this.lang),
        {
          size: 20,
          fillColour: this.colours.black
        }
      );
      // Draw fun-fact marquee // TODO - implement scrolling fun facts about the specific element, atoms in general, or jokes/easter eggs
      //                       // inspired by antimatter dimensions, plague inc,
      rectangle(ctx, -10, -10, this.viewport.width + 10, 10 + 35, {
        fillColour: this.colours.grey,
        lineColour: this.colours.black,
        lineWidth: 2
      });

      text(
        ctx,
        this.viewport.centre.x,
        this.viewport.height -
        40 -
        4 *
        this.scoreWiggle *
        Math.sin((this.timeUnpaused - this.lastScoreAddedTime) / 100),
        this.score,
        {
          fillColour: this.colours.black,
          size: 60,
          style: "bold"
        }
      );
    }

    // Pause menu //
    if (this.gamestate === "PAUSED") {
      rectangle(ctx, 0, 0, this.viewport.width, this.viewport.height, {
        fillColour: "rgba(0,0,0,0.5)"
      });
      text(
        ctx,
        this.viewport.centre.x,
        this.viewport.height / 4,
        L("paused", this.lang),
        {
          size: 200,
          fillColour: this.colours.white,
          maxWidth: this.viewport.width
        }
      );
    } else if (this.gamestate === "MENU") {
      text(
        ctx,
        this.viewport.centre.x,
        this.viewport.height / 4,
        L("title", this.lang),
        {
          size: 200,
          fillColour: this.colours.black,
          maxWidth: this.viewport.width,
          lineColour: this.colours.white,
          lineWidth: 5,
          style: "bold"
        }
      );
      let highscoreWiggle =
        this.highscore === this.score && this.score !== 0
          ? 10 * Math.sin(this.time / 250)
          : 0;
      text(
        ctx,
        this.viewport.centre.x,
        this.viewport.height - 80 + highscoreWiggle,
        "highscore:",
        {
          fillColour: this.colours.black,
          size: 30,
          style: "bold",
          lineColour: this.colours.white,
          lineWidth: 1.5
        }
      );
      text(
        ctx,
        this.viewport.centre.x,
        this.viewport.height - 40 + highscoreWiggle,
        this.highscore,
        {
          fillColour: this.colours.black,
          size: 60,
          style: "bold",
          lineColour: this.colours.white,
          lineWidth: 1.5
        }
      );
    }
    // Draw menu objects //
    this.menuObjects.forEach((object) => object.draw(ctx));
    if (this.debug.menu) {
      let debugStyle = {
        fillColour: "black",
        size: 20,
        horizontalAlign: "left",
        verticalAlign: "alphabetic"
      };
      // Display player coordinates //
      text(
        ctx,
        10,
        this.viewport.height - 10,
        `${L("player", this.lang)}:`,
        debugStyle
      );
      text(
        ctx,
        100,
        this.viewport.height - 10,
        `v(${round(this.fx(this.player.x), 1)},${round(
          this.fy(this.player.y),
          1
        )})`,
        {
          fillColour: "black",
          size: 20,
          horizontalAlign: "left",
          verticalAlign: "alphabetic",
          maxWidth: 130
        }
      );
      text(
        ctx,
        250,
        this.viewport.height - 10,
        `w(${round(this.player.x, 2)},${round(this.player.y, 2)})`,
        debugStyle
      );
      // Display viewport coordinates //
      text(
        ctx,
        10,
        this.viewport.height - 40,
        `${L("viewport", this.lang)}:`,
        debugStyle
      );
      text(
        ctx,
        100,
        this.viewport.height - 40,
        `v(${round(this.fx(this.viewport.x), 1)},${round(
          this.fy(this.viewport.y),
          1
        )})`,
        {
          fillColour: "black",
          size: 20,
          horizontalAlign: "left",
          verticalAlign: "alphabetic",
          maxWidth: 130
        }
      );
      text(
        ctx,
        250,
        this.viewport.height - 40,
        `w(${round(this.viewport.x, 2)},${round(this.viewport.y, 2)})`,
        debugStyle
      );
      text(
        ctx,
        500,
        this.viewport.height - 40,
        `o(${round(this.viewport.xOffset, 2)},${round(
          this.viewport.yOffset,
          2
        )})`,
        debugStyle
      );
      // Display mouse coordinates //
      text(
        ctx,
        10,
        this.viewport.height - 70,
        `${L("mouse", this.lang)}:`,
        debugStyle
      );
      text(
        ctx,
        100,
        this.viewport.height - 70,
        `v(${round(this.mouse.x, 1)},${round(this.mouse.y, 1)})`,
        {
          fillColour: "black",
          size: 20,
          horizontalAlign: "left",
          verticalAlign: "alphabetic",
          maxWidth: 130
        }
      );
      text(
        ctx,
        250,
        this.viewport.height - 70,
        `w(${round(this.iFx(this.mouse.x), 2)},${round(
          this.iFy(this.mouse.y),
          2
        )})`,
        debugStyle
      );
      if (this.mouse.clicked) {
        text(
          ctx,
          450,
          this.viewport.height - 70,
          `${L("clicked", this.lang)}`,
          debugStyle
        );
      }
      if (this.mouse.onButton) {
        text(
          ctx,
          550,
          this.viewport.height - 70,
          `${L("onButton", this.lang)}`,
          debugStyle
        );
      }
      // FPS counter //
      text(ctx, 10, 60, `FpS: ${round(1000 / this.deltaTime, 0)}`, debugStyle);
      text(ctx, 10, 90, `dT: ${round(this.deltaTime, 2)}`, debugStyle);
      text(ctx, 10, 120, this.gamestate, debugStyle);
      text(ctx, 10, 150, round(this.funFactCooldown, 1), debugStyle);
      text(
        ctx,
        10,
        180,
        `${this.gameObjects.length} G / ${this.menuObjects.length} M / ${this.gameObjects.length + this.menuObjects.length
        } T`,
        debugStyle
      );
      text(
        ctx,
        this.viewport.center.x,
        this.viewport.height - 80,
        round(this.scoreWiggle, 4),
        debugStyle
      );
    }
  }

  cheat() {
    let c = prompt("Enter debug command:").split(" ");
    console.log(c)
    switch (c[0]) {
      case "p":
        this.player.addProton(parseInt(c[1], 10));
        console.log(`added ${c[1]} proton(s)`);
        break;
      case "n":
        this.player.addNeutron(parseInt(c[1], 10));
        console.log(`added ${c[1]} neutron(s)`);
        break;
      case "tp":
        this.player.x = parseInt(c[1], 10);
        this.player.y = parseInt(c[2], 10);
        this.viewport.warp(this.player);
        console.log(`teleported to (${c[1]},${c[2]})`);
        break;
      case "toggle":
        switch (c[1]) {
          case "foodspawn":
            this.debug.foodSpawn = !this.debug.foodSpawn;
            console.log(`food spawning ${this.debug.foodSpawn ? "activated" : "deactivated"}`);
            break;
          default:
            break;
        }
        break;

      case "":
        this.debug.menu = !this.debug.menu;
        console.log(`debug menu ${this.debug.menu ? "shown" : "hidden"}`);
        break;
      default:
        break;
    }
  }

  addObject(obj) {
    this.gameObjects.push(obj);
    this.gameObjects.sort((a, b) => b.z - a.z);
  }

  addScore(n) {
    this.score += n;
    this.scoreWiggle += n;
    if (this.scoreWiggle === 0) this.lastScoreAddedTime = this.time;
  }

  get timeUnpaused() {
    return this.time - this.times.paused;
  }

  fx(x) {
    // map world x-coordinates to canvas x-coordinates //
    return (x - this.viewport.x) * this.viewport.zoom + this.viewport.centre.x;
  }
  iFx(x) {
    // map canvas x-coordinates to world x-coordinates //
    return (x - this.viewport.centre.x) / this.viewport.zoom + this.viewport.x;
  }
  fy(y) {
    // map world x-coordinates to canvas x-coordinates //
    return (
      this.viewport.y * this.viewport.zoom +
      this.viewport.height / 2 -
      y * this.viewport.zoom
    );
  }
  iFy(y) {
    return (
      (this.viewport.height / 2 - y) / this.viewport.zoom + this.viewport.y
    );
  }
  fz(z) {
    // map world sizes to canvas sizes (zoom) //
    return this.viewport.zoom * z;
  }
}
