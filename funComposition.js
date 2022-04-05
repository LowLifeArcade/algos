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

// function factory
// a function that returns an object
// a function that returns a function can be a factory too. Just bind to its object attributes

const myFactory = (val) => {
let fn = () => val
fn.myName = () => 'My name is ' + val
  return fn
}

const jonny = myFactory('jonny')
jonny.myName() //?

// simple object

const myFactory2 = (val) => ({
  name: val ? val : 'default',
  username: val ? val + 234 : 'default',
  getName() {
    return this.name 
  },
  getUserName(){
    return this.user
  }
})

myFactory2