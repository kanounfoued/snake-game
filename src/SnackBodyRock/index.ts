const Rock = require("../Rock/index.ts");
const PositionCoordinat = require("../PositionCoordinat/index.ts");

module.exports = class SnackBodyRock extends Rock {
  constructor(position: typeof PositionCoordinat) {
    super(position);
  }
};
export {};
