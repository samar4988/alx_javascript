#!/usr/bin/node
exports.callMeMoby = function (x, theFunction) {
    let y = 0;
    while (y < x) {
      theFunction();
      y++;
    }
  };