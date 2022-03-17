// linear search

const myArr = [1, 2, 3, 4];

myArr.indexOf(3); //?

function linSearch(arr, value) {
  for (let i = 0; i < arr.length; i++) {
    const el = arr[i];
    if (el === value) return i;
  }
}
linSearch(myArr, 1); //?
