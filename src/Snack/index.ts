const Rock = require("../Rock/index.ts");
const SnackHead = require("../SnackHead/index.ts");
const PositionCoordinat = require("../PositionCoordinat/index.ts");
const SnackBodyRock = require("../SnackBodyRock/index.ts");
import { Direction } from "../Enum/Direction";
import { UI } from "../Interface/UI";

const OPPOSITE_DIRECTION = {
  0: 1, // LEFT: RIGHT
  1: 0, // RIGHT: LEFT
  2: 3, // TOP: DOWN
  3: 2, // DOWN: TOP
};

const SnackUI = (
  head: typeof SnackHead,
  tail: typeof Rock[]
): HTMLElement[] => {
  const SnackHeadDiv: HTMLElement = head.render();
  const list: HTMLElement[] = [];
  list.push(SnackHeadDiv);

  tail.forEach((rock: typeof Rock) => {
    const rockDiv: HTMLElement = rock.render();
    list.push(rockDiv);
  });

  return list;
};

module.exports = class Snack implements UI {
  public head: typeof SnackHead;
  private tail: typeof Rock[];

  constructor() {
    // 13 is the position number of the column in which the snack's head should be point to.
    // it is defined explicitly.
    // 12 is the width of rock.
    this.head = new SnackHead(new PositionCoordinat(13 * 12, 13 * 12));
    this.tail = [
      new SnackBodyRock(
        new PositionCoordinat(
          this.head.getPosition().getX() - 12,
          this.head.getPosition().getY()
        )
      ),
      new SnackBodyRock(
        new PositionCoordinat(
          this.head.getPosition().getX() - 24,
          this.head.getPosition().getY()
        )
      ),
    ];
  }

  moveTo(directionCode: Direction): void {
    // do anything if the direction is the opposite of the current direction.
    if (OPPOSITE_DIRECTION[this.head.getDirection()] === directionCode) return;

    this.moveTail(this.head.getPosition());
    if (directionCode === 0) this.head.moveLeft();
    if (directionCode === 1) this.head.moveRight();
    if (directionCode === 2) this.head.moveUp();
    if (directionCode === 3) this.head.moveDown();

    if (this.checkHeadPositionWithTail()) {
      console.log("GAME OVER");
    }
  }

  moveTail(headPosition: typeof PositionCoordinat): void {
    const lastPosition: number = this.tail.length - 1;
    const newTail: typeof Rock[] = [];

    for (let i = lastPosition; i > 0; i--) {
      const position = this.tail[i - 1].getPosition();
      const newRock: typeof Rock = new SnackBodyRock(
        new PositionCoordinat(position.getX(), position.getY())
      );
      newTail.unshift(newRock);
    }

    const firstRockTail: typeof Rock = new SnackBodyRock(
      new PositionCoordinat(headPosition.getX(), headPosition.getY())
    );
    newTail.unshift(firstRockTail);
    this.tail = newTail;
  }

  private checkHeadPositionWithTail(): boolean {
    for (let i = 0; i < this.tail.length; i++) {
      if (
        this.tail[i].getPosition().getX() === this.head.getPosition().getX() &&
        this.tail[i].getPosition().getY() === this.head.getPosition().getY()
      ) {
        return true;
      }
    }

    return false;
  }

  eatFoodRock(foodRock: typeof Rock): void {
    this.tail.push(this.head);
    this.head = new SnackHead(
      new PositionCoordinat(
        foodRock.getPosition().getX(),
        foodRock.getPosition().getY()
      )
    );
  }

  render(): HTMLElement | HTMLElement[] | null {
    return SnackUI(this.head, this.tail);
  }
};

export {};
