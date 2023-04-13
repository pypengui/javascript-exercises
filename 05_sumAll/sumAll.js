const sumAll = function (a, b) {
    if (a < 0 || b < 0 || typeof a !== 'number' || typeof b !== 'number') {
        return "ERROR";
  } else {
    let sum = 0;
    for (let i = Math.max(a, b); i >= Math.min(a, b); i--) {
      sum += i;
    }
    return sum;
  }
};

// Do not edit below this line
module.exports = sumAll;
