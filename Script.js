let display = document.getElementById('display');
let numbers = [];
let operator = '';

const appendNumber = (number) => {
  numbers.push(number);
  display.value = numbers.join('');
};

const clearScreen = () => {
  numbers = [];
  operator = '';
  display.value = '';
};

const deleteNumber = () => {
  numbers.pop();
  display.value = numbers.join('');
};

const appendOperator = (op) => {
  operator = op;
  numbers.push(op);
  display.value = numbers.join('');
};

const calculate = () => {
  let result = eval(numbers.join(''));
  numbers = [result];
  display.value = result;
};
