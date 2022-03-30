// const myObj = { number: 5, msg: this.number };
function ErrorMessage() {
  this.number = 5;
  this.msg = this.number;
}
const myObj = new ErrorMessage();
myObj.msg; //?

this.number = 5;
function myFunc() {
  this.number = 6;
  return this.number;
}
myFunc(); //?

{
  (this.number = 3), myFunc();
} // ?
