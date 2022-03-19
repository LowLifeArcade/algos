// string search

function stringSearch(long, pattern) {
  let count = 0;
  for (let i = 0; i < long.length; i++) {
    for (let j = 0; j < pattern.length; j++) {
      // look at the next letter by doing i + j which will incriment the long string evenly with the pattern
      if (pattern[j] !== long[i + j]) break;
      // if we get to the end of the pattern we incriment the count
      if (j === pattern.length - 1) count++;
    }
  }
  return count;
}

stringSearch('hello lo hh elo', 'lo'); //?
