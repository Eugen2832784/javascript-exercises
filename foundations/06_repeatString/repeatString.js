const repeatString = function (word, n) {
  let str = "";
  if (n > 0) {
    for (let i = 0; i < n; i++) {
      str = str + word;
    }
    return str;
  } else {
    return "ERROR";
  }
};

// Do not edit below this line
module.exports = repeatString;
