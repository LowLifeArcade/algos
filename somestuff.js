// nested loops

function bubbleSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (arr[j] > arr[i]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        // arr[j + 1] = temp;
      }
    }
  }
  return arr;
}

const points = [40, 100, 1, 5, 25, 10];
points.sort((a, b) => a - b); //?

bubbleSort([23, 51, 11, 10, 89]);
'arr blue green smooth pillow janice gregory'.split(' ').sort().reverse() //?


const myStr = 'arr    green  blue  smooth pillow janice gregory'

const myStrArr = myStr.split(' ').filter(arrItem => arrItem != '')

// myStrArr.sort() //?
myStrArr.forEach((word, i) => {
  
})
// for (let i = 0; i < myStrArr.length; i++) {
//   let lowest = i 
//   for (let j = i + 1; j < myStrArr.length; j++) {
//     const wordj = myStrArr[j];
//      if (myStrArr[lowest] > wordj) {
//        lowest = j //?
//      } //?
//   }
//   let temp = myStrArr[i] 
//   myStrArr[i] = myStrArr[lowest]
//   myStrArr[lowest] = temp 
// } 

myStrArr