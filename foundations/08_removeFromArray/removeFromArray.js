const removeFromArray = function (mas, ...args) {
  const newMas = [];
  mas.forEach((item) => {
    if (!args.includes(item)) {
      newMas.push(item);
    }
  });
  return newMas;
};

// Do not edit below this line
module.exports = removeFromArray;
