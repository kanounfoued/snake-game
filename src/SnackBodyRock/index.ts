const Rock = require("../Rock/index.ts");
const PositionCoordinat = require("../PositionCoordinat/index.ts");
import { UI } from "../Interface/UI";

const SnackBodyRockUI = (): HTMLElement => {
  const SnackBodyDiv = document.createElement("div");
  SnackBodyDiv.setAttribute("class", "rock snack-body-rock");

  return SnackBodyDiv;
};

module.exports = class SnackBodyRock extends Rock implements UI {
  constructor(position: typeof PositionCoordinat) {
    super(position);
  }

  render(): HTMLElement | HTMLElement[] | null {
    return SnackBodyRockUI();
  }
};
export {};
