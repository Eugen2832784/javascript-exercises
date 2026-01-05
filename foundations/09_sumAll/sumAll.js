const sumAll = function (start, end) {
  if (!Number.isInteger(start) || !Number.isInteger(end)) {
    return "ERROR";
  }
  if (end < start) {
    const temp = start;
    start = end;
    end = temp;
  }
  let sum = 0;
  for (let i = start; i <= end; i++) {
    sum = sum + i;
  }
  return sum;
};

// Do not edit below this line
module.exports = sumAll;
