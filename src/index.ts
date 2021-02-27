const Game = require("./Game/index.ts");

const rootDiv = document.getElementById("root");
const game = new Game();

rootDiv.append(game.render());

// setInterval(() => {
//   game.snack.moveTo(2);
//   game.render();
// }, 50);

const buttonRight = document.getElementById("right");
const buttonLeft = document.getElementById("left");
const buttonBottom = document.getElementById("bottom");
const buttonTop = document.getElementById("top");

buttonRight.onclick = () => {
  game.snack.moveTo(1);
  if (game.getOutOfBoundries()) {
    console.log("GAME OVER");
  }
  game.foodShouldBeEaten();
  game.render();
};
buttonLeft.onclick = () => {
  game.snack.moveTo(0);
  if (game.getOutOfBoundries()) {
    console.log("GAME OVER");
  }
  game.foodShouldBeEaten();
  game.render();
};
buttonBottom.onclick = () => {
  game.snack.moveTo(3);
  if (game.getOutOfBoundries()) {
    console.log("GAME OVER");
  }
  game.foodShouldBeEaten();
  game.render();
};
buttonTop.onclick = () => {
  game.snack.moveTo(2);
  if (game.getOutOfBoundries()) {
    console.log("GAME OVER");
  }
  game.foodShouldBeEaten();
  game.render();
};

export {};
