function returnBrackets(str) {
  const number = str;
  return number;
  for (let i = 0; i < str.length; i++) {
    const el = str[i];
  }
  return '(';
}

console.assert(
  returnBrackets('(') === true,
  {
    number: 5,
    msg: `This ${this.number} is not even`,
  },
  {
    number1: 5,
    msg: `This ${this.number1} is not even`,
  }
);
console.assert(returnBrackets(')') === false);
console.assert(returnBrackets('())') === false);
console.assert(returnBrackets('(()') === false);
console.assert(returnBrackets('()') === true);
