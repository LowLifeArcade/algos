// bubble sort

function bubbleSort(arr) {
  let sortedArr = arr;
  // compare each index and swap
  while (true) {
    let noSwap = true;
    for (let i = 0; i < arr.length - 1; i++) {
      if (arr[i] > arr[i + 1]) {
        let temp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;
        noSwap = false;
        console.log('One Pass');
      }
    }
    if (noSwap === true) break;
  }

  arr.length; //?
  return sortedArr;
}

bubbleSort([1, 6, 2, 5, 3, 10, 22, 32, 1, 2]); //?
