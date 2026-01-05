const palindromes = function (text) {
  text = text.toLowerCase();
  let newArr = [];
  let signs = ", ";
  let arr = text.split("");
  arr.forEach((element) => {
    if (!signs.includes(element)) {
      newArr.push(element);
    }
  });
  let newArr1 = newArr.reverse();
  if (newArr1 == newArr) {
    return true;
  } else {
    return false;
  }
};

// Do not edit below this line
module.exports = palindromes;
