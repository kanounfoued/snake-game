const Rock = require("../Rock/index.ts");
const PositionCoordinat = require("../PositionCoordinat/index.ts");
import MoveToDirection from "../Interface/MoveToDirection";
import { Direction } from "../Enum/Direction";

module.exports = class SnackHead extends Rock implements MoveToDirection {
  private direction: Direction;

  constructor(position: typeof PositionCoordinat) {
    super(position);
    this.direction = Direction.RIGHT;
  }

  getDirection(): Direction {
    return this.direction;
  }

  moveLeft(): void {
    const x = this.position.getX();
    this.position.setX(x - 1);
  }

  moveRight(): void {
    const x = this.position.getX();
    this.position.setX(x + 1);
  }

  moveUp(): void {
    const y = this.position.getY();
    this.position.setY(y - 1);
  }

  moveDown(): void {
    const y = this.position.getY();
    this.position.setY(y + 1);
  }
};

export {};
