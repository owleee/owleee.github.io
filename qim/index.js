// Import code from other modules //

import Game from "./game.js";
import Object from "./object.js";
import Atom from "./atom.js";
import AI from "./ai.js";
import Pickup from "./pickup.js";
import Controller from "./controls.js";
import { circle, randint, endPop, loadCookie, saveCookie, validateSave, shuffleArray } from "./functions.js";
import { default as Button, TextButton } from "./button.js";

// Get canvas and attributes //
let canvas = document.getElementById("screen");
canvas.width = getComputedStyle(canvas).width.replace("px", "");
canvas.height = getComputedStyle(canvas).height.replace("px", "");
let ctx = canvas.getContext("2d");
window.addEventListener("resize", (event) => {
  game.viewport.updateDimensions();
  canvas.width = getComputedStyle(canvas).width.replace("px", "");
  canvas.height = getComputedStyle(canvas).height.replace("px", "");
});

let cookie = loadCookie();

// Initialise Game manager //
let game = new Game();

// Detect if the game is hosted on my website //
// If not, show debug menu and mark as dev //
game.isDev = !window.location.href.includes("github")
if (game.isDev) game.debug.menu = true
// Load highscore and settings from cookie // 
game.highscore = cookie.highscore || 0;
game.settings = cookie.settings || game.settings;
game.debug = cookie.debug || game.debug;
game.lang = cookie.lang || game.lang;

// Detect mouse position //
canvas.addEventListener("mousemove", (event) => {
  game.mouse.x = event.clientX;
  game.mouse.y = event.clientY;
});

// Initialise player & controller //
let player = new Atom(game, 0);
// Player always displays in front of other objects //
player.z = 1000;
let controller = new Controller(game, player);

game.player = player;

// Initialise buttons //
let unpauseButton = new Button(
  game,
  (x) => {
    return game.viewport.width / 2;
  },
  (y) => {
    return game.viewport.height / 2;
  },
  300,
  80,
  "unpause",
  () => {
    game.togglePause();
  }
);
unpauseButton.gamestate = ["PAUSED"]

let mainMenuButton = new Button(
  game,
  (x) => {
    return game.viewport.width / 2;
  },
  (y) => {
    return game.viewport.height / 2 + 100;
  },
  300,
  80,
  "return_to_menu",
  () => {
    game.returnToMenu();
  }
);
mainMenuButton.gamestate = ["PAUSED"];

let pauseButton = new Button(
  game,
  (x) => {
    return game.viewport.width - 45;
  },
  (y) => {
    return 75;
  },
  50,
  50,
  "NT:▮▮",
  () => {
    game.togglePause();
  }
);
pauseButton.gamestate = ["RUNNING", "PAUSED"];
pauseButton.boxStyle.radii = pauseButton.boxStyleHover.radii = 10;
pauseButton.textStyle.size = pauseButton.textStyleHover.size = 35;

let backButton = new Button(
  game,
  (x) => {
    return 45;
  },
  (y) => {
    return 45;
  },
  50,
  50,
  "NT:<",
  () => {
    game.returnToMenu();
  }
);
backButton.gamestate = ["OPTIONS", "CREDITS", "HOWTO"];
backButton.boxStyle.radii = backButton.boxStyleHover.radii = 10;
backButton.textStyle.size = backButton.textStyleHover.size = 35;

let playButton = new Button(
  game,
  (x) => {
    return game.viewport.width / 2;
  },
  (y) => {
    return game.viewport.height / 2 - 50;
  },
  300,
  80,
  "play",
  () => {
    game.start();
  }
);
playButton.gamestate = ["MENU"];

let optionsButton = new Button(
  game,
  (x) => {
    return game.viewport.width / 2;
  },
  (y) => {
    return game.viewport.height / 2 + 50;
  },
  300,
  80,
  "options",
  () => {
    game.optionsMenu();
  }
);
optionsButton.gamestate = ["MENU"];

let howToButton = new Button(
  game,
  (x) => {
    return game.viewport.width / 2;
  },
  (y) => {
    return game.viewport.height / 2 + 150;
  },
  300,
  80,
  "how_to",
  () => {
    game.howTo()
  }
);
howToButton.gamestate = ["MENU"];

let creditsButton = new Button(
  game,
  (x) => {
    return game.viewport.width / 2;
  },
  (y) => {
    return game.viewport.height / 2 + 250;
  },
  300,
  80,
  "credits",
  () => {
    game.credits()
  }
);
creditsButton.gamestate = ["MENU"];

let nucleusSettingsButton = new TextButton(
  game, (x) => { return game.viewport.center.x }, y => { return game.viewport.center.y - 100 }, 600, 80, "", () => {
    game.settings.simplerNucleus = !game.settings.simplerNucleus;
  }
)
nucleusSettingsButton.gamestate = ["OPTIONS"]
nucleusSettingsButton.updateText = (b) => {
  b.label = `simpler_nucleus_${game.settings.simplerNucleus}`
}

let electronSettingsButton = new TextButton(
  game, (x) => { return game.viewport.center.x }, y => { return game.viewport.center.y }, 700, 80, "", () => {
    game.settings.simplerElectrons = (game.settings.simplerElectrons + 1) % 3;
  }
)
electronSettingsButton.gamestate = ["OPTIONS"]
electronSettingsButton.updateText = (b) => {
  b.label = `simpler_electrons_${game.settings.simplerElectrons}`
}

let languageButton = new TextButton(
  game, (x) => { return game.viewport.center.x }, y => { return game.viewport.center.y - 200 }, 600, 80, "", () => {
    game.lang = game.lang === "es" ? "en" : "es";
  }
)
languageButton.gamestate = ["OPTIONS"]
languageButton.updateText = (b) => {
  b.label = `lang_${game.lang}`
}

let movementButton = new TextButton(
  game, (x) => { return game.viewport.center.x }, y => { return game.viewport.center.y + 100 }, 700, 80, "", () => {
    game.settings.mouseMovement = !game.settings.mouseMovement
  }
)
movementButton.gamestate = ["OPTIONS"]
movementButton.updateText = (b) => {
  b.label = `movement_${game.settings.mouseMovement}`
}

let scrollButton = new TextButton(
  game, (x) => { return game.viewport.center.x }, y => { return game.viewport.center.y + 200 }, 700, 80, "", () => {
    game.settings.scroll *= -1;
  }
)
scrollButton.gamestate = ["OPTIONS"]
scrollButton.updateText = (b) => {
  b.label = `scroll_${game.settings.scroll}`
}

let symbolButton = new TextButton(
  game, (x) => { return game.viewport.center.x }, y => { return game.viewport.center.y + 300 }, 700, 80, "", () => {
    game.settings.readouts = !game.settings.readouts;
  }
)
symbolButton.gamestate = ["OPTIONS"]
symbolButton.updateText = (b) => {
  b.label = `symbols_${game.settings.readouts}`
}

let restartButton = new Button(
  game,
  (x) => {
    return game.viewport.width / 2;
  },
  (y) => {
    return game.viewport.height / 2 + 300;
  },
  300,
  80,
  "return_to_menu",
  () => {
    game.returnToMenu()
  }
);
restartButton.gamestate = ["GAMEOVER"];

/*
let testEnemy = new Atom(game, 1, 200, 200);
testEnemy.addProton(100);
testEnemy.addNeutron(100);
shuffleArray(testEnemy.nucleons)
new AI(game, testEnemy);
*/

// Attempt to fix bug with viewport movement - does not seem to fully work //
window.addEventListener("focus", (event) => {
  game.viewport.warp(player);
});

let lastTime = 0;

// Game loop //
function gameLoop(timestamp) {
  // Allow the game to run independently of framerate //
  let deltaTime = timestamp - lastTime;
  lastTime = game.time = timestamp;
  if (game.gamestate === "PAUSED" || game.gamestate === "GAMEOVER") {
    game.times.paused += deltaTime;
  }

  // Clear canvas of last frame //
  controller.update();
  game.update(deltaTime);

  // Draw all game objects //
  game.draw(ctx);

  requestAnimationFrame(gameLoop);
}

// Begin game loop //
requestAnimationFrame(gameLoop);
