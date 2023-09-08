#!/usr/bin/node
class Rectangle {
    constructor (w, h) {
      if ((w > 0) && (h > 0)) {
        this.width = w;
        this.height = h;
      }
    }
    print () {
      for (let j = 0; j < this.height; j++) {
        let z = '';
        for (let k = 0; k < this.width; k++) {
          z += 'X';
        }
        console.log(z);
      }
    }
    rotate () {
      const aux = this.width;
      this.width = this.height;
      this.height = aux;
    }
  
    double () {
      this.height *= 2;
      this.width *= 2;
    }
  }
  module.exports = Rectangle;