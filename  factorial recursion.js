// factorial recursion

// interative
let num = 5;
let answer = 1;
for (let i = num; i > 1; i--) {
  answer *= i; //?
}
answer;

function factorial(num) {
  if (num === 1) return 1;
  return num * factorial(num - 1);
}

factorial(5); //?

// Think of recursion as a spring. It gets loaded up and then when it hits its apex it releases.

// Your return statement should always be decramenting the value whatever it is so that you eventually reach your base case. Think of the iterative where in a for loop you would be doing i-- to get to your solution
