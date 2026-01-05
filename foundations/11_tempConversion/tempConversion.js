const convertToCelsius = function (temperature) {
  let newTemperature = (temperature - 32) * (5 / 9);
  newTemperature = Math.round((newTemperature * 10) / 10);
  return newTemperature;
};

const convertToFahrenheit = function (temperature) {
  let newTemp = (temperature + 32) * (9 / 5);
  newTemp = Math.round((newTemperature * 10) / 10);
  return newTemperature;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit,
};
