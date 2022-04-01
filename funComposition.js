const t = (value) => {
  const fn = () => value;
  fn.toString = () => `t(${value})`;
  return fn;
};
const someValue = t(2);
console.log(
  someValue.toString() // "t(2)"
);

function myFunc(value) {
  // a function is just an object that you can add things to like other functions
  const SB = function () {return value};
  // here we add a function TO the SB function which is just an object
  SB.funstuff = (val) => value + val;
  SB.fetchMyData = () => 'fetch data from api';
  return SB;
}

const SB = myFunc(1);

SB.funstuff(32); //?
SB.fetchMyData(); //?
