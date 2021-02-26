const Field = require("../Field/index.ts");
const Snack = require("../Snack/index.ts");
import { UI } from "../Interface/UI";

const GameUI = (field: HTMLElement, snack: HTMLElement[]): HTMLElement => {
  let GameDiv: HTMLElement = document.getElementById("game-container");
  if (!GameDiv) {
    GameDiv = document.createElement("div");
    GameDiv.setAttribute("id", "game-container");
    GameDiv.setAttribute("class", "game-container");
  }

  if (document.getElementById("game-container")) {
    const fieldContainer: HTMLElement = document.getElementById(
      "field-container"
    );
    fieldContainer.remove();
  }

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

  constructor() {
    this.snack = new Snack();
    this.score = 0;
    this.gameOver = false;
    this.field = new Field(300, 350);
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

  render(): HTMLElement | HTMLElement[] | null {
    return GameUI(this.field.render(), this.snack.render());
  }
};

export {};
