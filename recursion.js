function redoMe(num) {
  if (num <= 1) return num;
  console.log(`ran ${num}`);
  return redoMe(Math.ceil(num / 2));
}
redoMe(10); //?

function divideByNumRecurs(num) {
  if (num < 1) return;
  num; //?
  return divideByNumRecurs(num * 2 / 2 - 1);
}

//?.

function divideByNum2(num) {
  while (num > 1) {
    num; //?
    num = num * 2 / 2 - 1; 
  }
  return;
}

divideByNumRecurs(20); //?.
divideByNum2(20); //?.

/**
 * If time complexity is the point of focus, and number of recursive calls would be large, it is better to use iteration. However, if time complexity is not an issue and shortness of code is, recursion would be the way to go.
 */