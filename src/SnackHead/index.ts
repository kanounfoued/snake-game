const Rock = require("../Rock/index.ts");
const PositionCoordinat = require("../PositionCoordinat/index.ts");

module.exports = class SnackHead extends Rock {
  constructor(position: typeof PositionCoordinat) {
    super(position);
  }
};

export {};
