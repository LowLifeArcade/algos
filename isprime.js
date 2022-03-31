function getNextPrime(inputValue) {
  let nextNum = inputValue + 1;
  let primeFound = false;
  if (nextNum % 2 == 0) {
    nextNum = nextNum + 1;
  }
  while (!primeFound) {
    if (isPrime(nextNum)) {
      primeFound = true;
    } else {
      nextNum = nextNum + 2;
    }
  }

  return nextNum;
}

// 15
function isPrime(value) { 
  let prime = true;
  for (let i = 2; i < value; i++) {
    if (value % i == 0) prime = false;
  }
  return prime;
}


// even not prime
// check only odds
// don't go past input value


// original question

// a prime is a number divisible by itself and 1 5 is prime 6 is not 
// In Javascript, the modulus function is '%' - e.g. 5%2 gives 1 and 6%2 gives 0.

function getNextPrime(inputValue) { 
  let nextNum = inputValue + 1;
  let primeFound = false;
  while (!primeFound) {
    if (isPrime(nextNum)) {
      primeFound = true;
    } else {
      nextNum = nextNum + 1;
    }
  }
  return nextNum;
}

function isPrime(value) {
  for (let i=2; i < value; i++) {
    if (value % i == 0) {
      return false;
    } else {
      return true;
    }
  }
} 

// 