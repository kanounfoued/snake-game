const Rock = require("../Rock/index.ts");
const PositionCoordinat = require("../PositionCoordinat/index.ts");
import { UI } from "../Interface/UI";

const SnackBodyRockUI = (x: number, y: number, index: number): HTMLElement => {
  const SnackBodyDiv = document.createElement("div");
  SnackBodyDiv.setAttribute("class", "rock snack-body-rock");
  SnackBodyDiv.style.left = x + "px";
  SnackBodyDiv.style.top = y + "px";
  return SnackBodyDiv;
};

module.exports = class SnackBodyRock extends Rock implements UI {
  private index: number;
  constructor(position: typeof PositionCoordinat, index: number) {
    super(position);
    this.index = index;
  }

  render(): HTMLElement | HTMLElement[] | null {
    return SnackBodyRockUI(
      this.position.getX(),
      this.position.getY(),
      this.index
    );
  }
};
export {};
