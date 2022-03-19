function memoizedAddTo256(){
  var cache = {};
  

  return function(num){
    if(num in cache){
      console.log("cached value");
      return cache[num]

    }
    else{
      cache[num] = num + 256; 
      cache[num] //?
      return cache[num];
    }
  }
}

var memoizedFunc = memoizedAddTo256();

memoizedFunc(20); // Normal return
memoizedFunc(20); // Cached return

let obj = {name2: "Dood", 2: 33}
 // ?
obj[2] //?
obj.name3 //?



function memoizedDivide() {
  let cache = {}

  return function (num, dnum = 1) {
    if (num in cache && dnum in cache) {
      console.log("numbered entered is already cached and will return without calculation")
      cache //?
      return cache.answer
    } else {
      cache[num] = num  
      cache[dnum] = dnum  
      cache //?
      cache.answer = Math.ceil(num / dnum)
      return cache.answer
    }
  }
}

const memoizedDivFunc = memoizedDivide()

memoizedDivFunc(30,2) //?
// memoizedDivFunc(3)
// memoizedDivFunc(1,2)  //?
// memoizedDivFunc(1,3) //?