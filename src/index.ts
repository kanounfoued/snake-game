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
  game.render();
};
buttonLeft.onclick = () => {
  game.snack.moveTo(0);
  game.render();
};
buttonBottom.onclick = () => {
  game.snack.moveTo(3);
  game.render();
};
buttonTop.onclick = () => {
  game.snack.moveTo(2);
  game.render();
};

export {};
