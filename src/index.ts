const Game = require("./Game/index.ts");

const rootDiv = document.getElementById("root");
const game = new Game();

rootDiv.append(game.render());

// setInterval(() => {
//   game.snack.moveTo(1);
//   game.render();
// }, 50);

const button = document.getElementById("right");

button.onclick = () => {
  game.snack.moveTo(1);
  game.render();
};

export {};
