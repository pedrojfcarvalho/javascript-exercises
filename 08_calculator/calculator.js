const add = function(num1, num2) {
	return num1 + num2;
};

const subtract = function(num1, num2) {
	return num1 - num2;
};

const sum = function(numArray) {
	let total = 0;

  for(let i = 0; i < numArray.length; i++) {
    total += numArray[i];
  }

  return total;
};

const multiply = function(numArray) {
  let total = 1;

  for(let i = 0; i < numArray.length; i++) {
    total *= numArray[i];
  }

  return total;
};

const power = function(num, power) {
	let total = 1;

  for(let i = 0; i < power; i++) {
    total *= num;
  }

  return total;
};

const factorial = function(n) {
	let total = 1;

  if(n == 0 || n == 1) {
    return total;
  } else if (n > 1) {
    for(let i = 0; i < n; i++) {
      total *= (n - i);
    }
    return total;
  }
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
