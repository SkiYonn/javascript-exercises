const ftoc = function(fahrenheitToCelsius) {
  fahrenheitToCelsius = (fahrenheitToCelsius - 32) /1.8;
  return Number(fahrenheitToCelsius.toFixed(1));
};

const ctof = function(celsiusToFahrenheit) {
  celsiusToFahrenheit = (celsiusToFahrenheit * 1.8) + 32;
  return Number(celsiusToFahrenheit.toFixed(1));
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
