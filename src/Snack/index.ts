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
  const SnackHeadDiv: HTMLElement = document.createElement("div");

  const list: HTMLElement[] = [];
  SnackHeadDiv.setAttribute("class", "snack-head");
  SnackHeadDiv.style.left = head.getPosition().getX();
  SnackHeadDiv.style.top = head.getPosition().getY();
  list.push(SnackHeadDiv);

  tail.forEach((rock: typeof Rock) => {
    const rockDiv = document.createElement("div");
    rockDiv.style.left = rock.getPosition().getX();
    rockDiv.style.top = rock.getPosition().getY();
    list.push(rockDiv);
  });

  return list;
};

module.exports = class Snack implements UI {
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
    console.log(this.tail);
  }

  render(): HTMLElement | HTMLElement[] | null {
    return SnackUI(this.head, this.tail);
  }
};

export {};
