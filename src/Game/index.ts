const Snack = require("../Snack/index.ts");

module.exports = class Game {
  private gameOver: boolean;
  private score: number;
  public snack: typeof Snack;

  constructor() {
    this.snack = new Snack();
    this.score = 0;
    this.gameOver = false;
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
};

export {};
