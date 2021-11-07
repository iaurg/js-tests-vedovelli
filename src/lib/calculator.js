export const sum = function (num1, num2) {
  const number1 = parseInt(num1, 10);
  const number2 = parseInt(num2, 10);

  if (!number1 || !number2) {
    throw new Error('Param cannot be empty');
  }

  return number1 + number2;
};
