const fibonacci = function (num) {
  let a = 0;
  let b = 1;

  for (let i = 2; i <= num; i++) {
    let temp = a;
    a = b;
    b = temp + b;
  }
  return b;
};

// Do not edit below this line
module.exports = fibonacci;
