const Rock = require("../Rock/index.ts");
const PositionCoordinat = require("../PositionCoordinat/index.ts");

module.exports = class FoodRock extends Rock {
  constructor(position: typeof PositionCoordinat) {
    super(position);
  }
};

export {};
