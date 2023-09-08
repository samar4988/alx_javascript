#!/usr/bin/node
const SquareP = require('./5-square');

class Square extends SquareP {
  charPrint (c) {
    if (c === undefined) {
      c = 'X';
    }
    for (let y = 0; y < this.height; y++) {
      let z = '';
      for (let k = 0; k < this.width; k++) {
        z += c;
      }
      console.log(z);
    }
  }
}
module.exports = Square;