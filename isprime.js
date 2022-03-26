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
