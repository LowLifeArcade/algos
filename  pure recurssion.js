// pure recurssion
function collectOdds(arr) {
  let newArr = [];
  if (arr.length === 0) {
    return newArr;
  }
  if (arr[0] % 2 !== 0) {
    newArr.push(arr[0]);
  }
  // concat: think of this as the spring loading up to the end where it will finally contactonate all of the subsequent returned arrays! It will finally end with an empty array and then concat slowly things like [1], then [3], etc etc
  newArr = newArr.concat(collectOdds(arr.slice(1)));
  return newArr;
}

collectOdds([1, 3, 4, 5, 6]); //?
