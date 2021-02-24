const Rock = require("../Rock/index.ts");
const PositionCoordinat = require("../PositionCoordinat/index.ts");
import { UI } from "../Interface/UI";

const FoodRockUI = (): HTMLElement => {
  const FoodDiv = document.createElement("div");
  FoodDiv.setAttribute("class", "rock food-rock");
  return FoodDiv;
};

module.exports = class FoodRock extends Rock implements UI {
  constructor(position: typeof PositionCoordinat) {
    super(position);
  }

  render(): HTMLElement | HTMLElement[] | null {
    return FoodRockUI();
  }
};

export {};
