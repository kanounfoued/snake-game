const PositionCoordinat = require("../PositionCoordinat/index.ts");

module.exports = class Rock {
  private position: typeof PositionCoordinat;
  private height: number;
  private width: number;

  constructor(pos: typeof PositionCoordinat) {
    this.position = pos;
    this.height = 12;
    this.width = 12;
  }

  getPosition(): typeof PositionCoordinat {
    return this.position;
  }

  setPosition(position: typeof PositionCoordinat): void {
    if (!position) {
      this.position = new PositionCoordinat();
      return;
    }
    this.position = position;
  }

  setCoordinatesPosition(x: number = 0, y: number = 0): void {
    this.position = new PositionCoordinat(x, y);
  }

  getHeight(): number {
    return this.height;
  }

  getWidth(): number {
    return this.width;
  }
};

export {};
