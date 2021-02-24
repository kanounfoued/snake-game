const Rock = require("../Rock/index.ts");
const SnackHead = require("../SnackHead/index.ts");
const PositionCoordinat = require("../PositionCoordinat/index.ts");
const SnackBodyRock = require("../SnackBodyRock/index.ts");

module.exports = class Snack {
  public head: typeof SnackHead;
  private tail: typeof Rock[];

  constructor() {
    this.head = new SnackHead(new PositionCoordinat(50, 50));
    this.tail = [
      new SnackBodyRock(
        new PositionCoordinat(
          this.head.getPosition().getX() - 1,
          this.head.getPosition().getY()
        )
      ),
      new SnackBodyRock(
        new PositionCoordinat(
          this.head.getPosition().getX() - 2,
          this.head.getPosition().getY()
        )
      ),
    ];
  }
};

export {};
