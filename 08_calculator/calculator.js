const add = function(num1, num2) {
  let numberToAdd = 0;
  for (let i = 0; i < arguments.length; i++) {
    numberToAdd += arguments[i];
  }
  return numberToAdd;
};

const subtract = function(num1, num2) {
  return num1 - num2;
};

const sum = function(sumArr) {
  let numberToSum = 0;
  for (let i = 0; i < sumArr.length; i++) {
    numberToSum += sumArr[i];
  }
  return numberToSum;
};

const multiply = function(multiplyArr) {
  let numbersToMultiply = 1;
  for (let i = 0; i < multiplyArr.length; i++) {
    numbersToMultiply *= multiplyArr[i];
  }
  return numbersToMultiply;
};

const power = function(number, power) {
  return number ** power;
};

const factorial = function(factorialNumber) {
  let returnedFactorial = 1;
    while (factorialNumber > 1) {
      returnedFactorial *= factorialNumber;
      factorialNumber--;
    }
    return returnedFactorial;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};

console.log(subtract(10, 4));