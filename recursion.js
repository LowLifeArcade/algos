function redoMe(num) {
  if (num <= 1) return num;
  console.log(`ran ${num}`);
  return redoMe(Math.ceil(num / 2));
}
redoMe(10); //?
