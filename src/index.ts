const Game = require("./Game/index.ts");

const rootDiv = document.getElementById("root");
const game = new Game();

rootDiv.append(game.render());

// console.log(game.snack.moveTail(game.snack.head.getPosition()));

// while (!game.getGameOver()) {
// console.log("start", game.snack);
game.snack.moveTo(1);
// console.log("1", game.snack);
game.snack.moveTo(1);
// console.log("2", game.snack);
// game.snack.moveTo(3);
// console.log("3", game.snack);

// }

export {};
