'use strict';

const util = require('util');

const rect = (x, y, width, height) => {
  return {
    x, y, width, height,
    toString: () => `[${x}, ${y}, ${width}, ${height}]`
  };
};

const square = (x, y, side) => rect(x, y, side, side);

const p1 = square(10, 20, 50);
console.log(p1.toString());
