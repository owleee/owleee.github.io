import { rectangle, text, randint } from "./functions.js";
import { L } from "./data.js";

export default class Button {
  constructor(game, xF, yF, width, height, label, clickFunction) {
    this.game = game;
    this.xF = xF;
    this.yF = yF;
    this.x = xF();
    this.y = yF();
    this.width = width;
    this.height = height;
    this.hovered = false;
    this.shape = "rectangle"; // or "circle"
    this.greyed = false;

    this.boxStyle = {
      fillColour: this.game.colours.grey,
      radii: 5,
      lineWidth: 2,
      lineColour: this.game.colours.black
    };
    this.boxStyleHover = { ...this.boxStyle };

    this.textStyle = {
      size: 40,
      fillColour: this.game.colours.white,
      maxWidth: this.width
    };
    this.textStyleHover = { ...this.textStyle };

    this.textStyle.fillColour = game.colours.black;
    this.textStyleHover.fillColour = game.colours.white;

    this.clickFunction = clickFunction;
    this.label = label;
    this.gamestate = "MENU";

    this.game.menuObjects.push(this);
  }

  draw(ctx) {
    if (!this.gamestate.includes(this.game.gamestate)) return;
    rectangle(
      ctx,
      this.x - this.width / 2,
      this.y - this.height / 2,
      this.width,
      this.height,
      this.hovered && !this.greyed ? this.boxStyleHover : this.boxStyle
    );
    text(
      ctx,
      this.x,
      this.y,
      L(this.label, this.game.lang),
      this.hovered && !this.greyed ? this.textStyleHover : this.textStyle
    );
  }

  update(deltaTime) {
    if (!this.gamestate.includes(this.game.gamestate)) {
      this.hovered = false;
      return;
    }

    this.x = this.xF();
    this.y = this.yF();

    if (this.greyed) return;

    let top = this.y - this.height / 2;
    let bottom = this.y + this.height / 2;
    let left = this.x - this.width / 2;
    let right = this.x + this.width / 2;
    if (
      this.game.mouse.x < right &&
      this.game.mouse.x > left &&
      this.game.mouse.y < bottom &&
      this.game.mouse.y > top
    ) {
      this.hovered = true;
    } else {
      this.hovered = false;
    }

    if (this.game.mouse.clicked) {
      if (this.hovered) {
        if (this.clickable) {
          this.clickFunction();
          this.clickable = 0;
        }
      } else {
        this.clickable = false;
      }
    } else {
      if (this.hovered) {
        this.clickable = true;
      }
    }
  }
}

export class FunFactText {
  constructor(game, x, y, text) {
    this.game = game;
    this.x = x;
    this.y = y;
    this.text = text;

    game.menuObjects.push(this);
  }
  update(deltaTime) {
    if (this.game.gamestate === "RUNNING") {
      this.x -= deltaTime * 0.075;
    } else if (this.game.gamestate === "PAUSED") {
      this.x -= deltaTime * 0.01;
    }
    if (!this.deleteMe) this.game.funFactCooldown = 69420;
    if (this.x < -this.width) {
      this.deleteMe = true;
      this.game.funFactCooldown = 0; // randint(10000, 20000);
    }
  }
  draw(ctx) {
    this.width = text(ctx, this.x, this.y, this.text, {
      fillColour: this.game.colours.black,
      size: 25,
      horizontalAlign: "left"
    }).width;
  }
}
