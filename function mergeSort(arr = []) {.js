function mergeSort(arr = []) {
  const swap = (arr, idx1, idx2) =>
    ([arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]]);

  let midPoint = arr.length / 2;
  const left = [];
  const right = [];

  if (arr.length === 1) return arr
  
  for (let i = 0; i < midPoint; i++) {
    left.push(arr[i]);
    // deconstruct array
  }
  for (let j = arr.length - 1; j > midPoint - 1; j--) {
    right.push(arr[j]);
  }

  mergeSort(left)
  mergeSort(right)

}

console.log(mergeSort([2, 5, 3, 1, 9, 10, 8, 7]));

const number = 5
