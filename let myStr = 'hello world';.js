let myStr = 'hello world';

let newStr = myStr.split(' ').reverse().join(' ').split('').reverse().join('');

newStr;
function somefunc(y){
  let x = 4 
  return function (z) {
    let x = 5
    x = x + y + z //?
    x
  }
}
somefunc(2)(3)


function randomFunc(obj1){
  
  return function(){
    console.log(obj1.name + " is "+ "awesome"); // Has access to obj1 even when the randomFunc function is executed

  }
}

var obj1 = {name:"Vivian", age:45};


var initialiseClosure = randomFunc(obj1); // Returns a function

initialiseClosure(); 

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

let obj = {name2: "Dood", date: 33}
 // ?
obj['date'] //?
obj.name3 //?