const Field = require("../Field/index.ts");
const Snack = require("../Snack/index.ts");
const Rock = require("../Rock/index.ts");
const FoodRock = require("../FoodRock/index.ts");
const PositionCoordinat = require("../PositionCoordinat/index.ts");
import { UI } from "../Interface/UI";
const Utils = require("../Utils/index.ts");

const GameUI = (
  field: HTMLElement,
  snack: HTMLElement[],
  foodRock: HTMLElement
): HTMLElement => {
  let GameDiv: HTMLElement = document.getElementById("game-container");
  if (!GameDiv) {
    GameDiv = document.createElement("div");
    GameDiv.setAttribute("id", "game-container");
    GameDiv.setAttribute("class", "game-container");
  }

  // remove here the snack's rocks instead of the whole field.
  Utils.removeNode("field-container");
  // remove here the snack's rocks instead of the whole field.

  field.append(foodRock);
  snack.forEach((rock: HTMLElement) => {
    field.append(rock);
  });

  GameDiv.append(field);
  return GameDiv;
};

module.exports = class Game implements UI {
  private gameOver: boolean;
  private score: number;
  public snack: typeof Snack;
  private field: typeof Field;
  private snackFood: typeof Rock;

  constructor() {
    this.snack = new Snack();
    this.score = 0;
    this.gameOver = false;
    this.field = new Field(300, 348);
    this.generateSnackFood();
  }

  getGameOver(): boolean {
    return this.gameOver;
  }

  setGameOver(gameOver: boolean): void {
    this.gameOver = gameOver;
  }

  getScore(): number {
    return this.score;
  }

  addScore(score: number): void {
    this.score += score;
  }

  setScore(score: number): void {
    this.score = score;
  }

  // 12 is the width and height of rocks include (snackBodyRock , snackFood rock).
  // it is explicitly defined. in the rock class.
  generateSnackFood(): void {
    // 25 is the number of fields columns based on snack's rock width;
    const x: number = Math.floor(Math.random() * 25) * 12;
    // 30 is the number of fields rows based on snack's rock height;
    const y: number = Math.floor(Math.random() * 30) * 12;

    const food: typeof Rock = new FoodRock(new PositionCoordinat(x, y));
    if (this.snack.checkNodePositionWithTail(food)) {
      this.generateSnackFood();
      return;
    }

    // generate snack food position on the field.
    this.snackFood = new FoodRock(new PositionCoordinat(x, y));
  }

  foodShouldBeEaten(): void {
    if (
      this.snackFood.getPosition().getX() ===
        this.snack.head.getPosition().getX() &&
      this.snackFood.getPosition().getY() ===
        this.snack.head.getPosition().getY()
    ) {
      Utils.removeNode("food-rock");
      this.snack.eatFoodRock(this.snackFood);
      this.generateSnackFood();
    }
  }

  getOutOfBoundries(): boolean {
    const headPosition: typeof PositionCoordinat = this.snack.head.getPosition();

    if (
      headPosition.getX() < 0 ||
      headPosition.getX() >= this.field.getWidth() ||
      headPosition.getY() < 0 ||
      headPosition.getY() >= this.field.getHeight()
    ) {
      // display a pop up GAME OVER.
      return true;
    }

    return false;
  }

  render(): HTMLElement | HTMLElement[] | null {
    return GameUI(
      this.field.render(),
      this.snack.render(),
      this.snackFood.render()
    );
  }
};

export {};
