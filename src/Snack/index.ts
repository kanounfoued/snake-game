const Rock = require("../Rock/index.ts");
const SnackHead = require("../SnackHead/index.ts");
const PositionCoordinat = require("../PositionCoordinat/index.ts");
const SnackBodyRock = require("../SnackBodyRock/index.ts");
import { Direction } from "../Enum/Direction";
import { UI } from "../Interface/UI";

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
    this.moveTail(this.head.getPosition());
    if (directionCode === 0) this.head.moveLeft();
    if (directionCode === 1) this.head.moveRight();
    if (directionCode === 2) this.head.moveUp();
    if (directionCode === 3) this.head.moveDown();
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
