// @ts-check
function memoizedAddTo256() {
  var cache = {};

  return function (num) {
    if (num in cache) {
      console.log('cached value');
      return cache[num];
    } else {
      cache[num] = num + 256;
      cache[num]; //?
      return cache[num];
    }
  };
}

var memoizedFunc = memoizedAddTo256();

memoizedFunc(20); // Normal return
memoizedFunc(20); // Cached return

let obj = { name2: 'Dood', 2: 33 };
// ?
obj[2]; //?
obj.name3; //?

function memoizedDivide() {
  let cache = {};

  return (num, dnum = 1) => {
    if (num in cache && dnum in cache) {
      console.log(
        'numbers entered is already cached and calculated and the answer will be returned without calculation'
      );
      cache; //?
      return cache[`${num}/${dnum}`]; //?
    } else {
      cache[num] = num;
      cache[dnum] = dnum;
      cache; //?
      cache[num + '/' + dnum] = Math.ceil(num / dnum);
      return cache[`${num}/${dnum}`];
    }
  };
}

const memoizedDivFunc = memoizedDivide();

memoizedDivFunc(30, 2); //?
// memoizedDivFunc(30, 2); //?
memoizedDivFunc(30, 3); //?
memoizedDivFunc(30, 3); //?
// memoizedDivFunc(3)
// memoizedDivFunc(1,2)  //?
// memoizedDivFunc(1,3) //?

/**
 *
 * @param {number} num
 * @returns
 */
function memoizedThing(num) {
  let cache = {};

  /**
   * @param {number} p1
   * @param {number} p2
   *
   * @return {number}
   */
  return function expensiveCalc(p1, p2) {
    if (p1 in cache && p2 in cache) {
      console.log('cached');
      return cache[`${p1}|${p2}`];
    } else {
      let timeout = () =>
        setTimeout(() => {
          return p1 + p2
        }, 200);
      let answer = timeout();
      cache[p1] = p1;
      cache[p2] = p2;
      return (cache[`${p1}|${p2}`] = answer);
    }
  };
}

const newFunc = memoizedThing(3);
newFunc(2, 2); //?
newFunc(2, 2); //?
