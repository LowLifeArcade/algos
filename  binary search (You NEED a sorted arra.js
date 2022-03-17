// binary search (You NEED a sorted array)

function binarySearch(arr, val) {
  let lPointer = 0;
  let rPointer = arr.length - 1;
  let midPointer = Math.floor((lPointer + rPointer) / 2);

  while (arr[midPointer] !== val && lPointer <= rPointer) {
    // check if value is on the left side of the mid point and set the right end to the midpoint
    if (val < arr[midPointer]) rPointer = midPointer - 1;
    // else we set the left pointer to the midpoint because we know that the value is not to the left of the midpoint
    else lPointer = midPointer + 1;
    // then we change the midpoint to point between the new left and right points
    midPointer = Math.floor((lPointer + rPointer) / 2);
  }
  // after we break out of the loop because arr[midpoint] is the value AND left pointer never went past right pointer we return the index (midpointer) of the elem that equals the value
  return arr[midPointer] === val ? midPointer : -1;
  // OR we returned -1 because we broke out of the loop because the left pointer went past the right pointer and that means we couldn't find the value matching anything in the array
}

const myArr = [1, 2, 3, 4, 5, 6, 7, 10, 20, 33, 55];
binarySearch(myArr, 10); //?
