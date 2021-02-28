const Game = require("./Game/index.ts");

const rootDiv = document.getElementById("root");
const game = new Game();

rootDiv.append(game.render());

let timer = null;

document.onkeyup = (e: KeyboardEvent) => {
  if (e.keyCode === 37) {
    game.snack.moveTo(0);
  } else if (e.keyCode === 39) {
    game.snack.moveTo(1);
  } else if (e.keyCode === 38) {
    game.snack.moveTo(2);
  } else if (e.keyCode === 40) {
    game.snack.moveTo(3);
  }

  if (game.getOutOfBoundries()) {
    console.log("GAME OVER");
  }

  game.foodShouldBeEaten();
  game.render();
};

timer = setInterval(() => {
  game.snack.moveTo(game.snack.head.getDirection());
  game.foodShouldBeEaten();
  game.render();
}, 200);

export {};
