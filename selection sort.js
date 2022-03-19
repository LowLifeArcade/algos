let myArr = [1, 5, 2, 4, 3];
function swap(arr, idx1, idx2) {
  let temp = arr[idx1];
  arr[idx1] = arr[idx2];
  arr[idx2] = temp;
}

(function selectionsort(arr) {
  for (let i = arr.length; i > 0; i--) {
    for (let j = 0; j < i; j++) {
      let lowest = 0;
      if (arr[i] < arr[i + 1]) {
        lowest = i;
      }
    }
  }
  return arr;
})(myArr); //?
