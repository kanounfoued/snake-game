const Rock = require("../Rock/index.ts");
const PositionCoordinat = require("../PositionCoordinat/index.ts");
import { UI } from "../Interface/UI";

const FoodRockUI = (x: number, y: number): HTMLElement => {
  const FoodDiv = document.createElement("div");
  FoodDiv.setAttribute("class", "rock food-rock");
  FoodDiv.setAttribute("id", "food-rock");
  FoodDiv.style.left = x + "px";
  FoodDiv.style.top = y + "px";
  return FoodDiv;
};

module.exports = class FoodRock extends Rock implements UI {
  constructor(position: typeof PositionCoordinat) {
    super(position);
  }

  render(): HTMLElement | HTMLElement[] | null {
    return FoodRockUI(this.position.getX(), this.position.getY());
  }
};

export {};
