/*
 * Write a function that accepts a string with parentheses, ( and ), that returns false if any parentheses within
 * the string are unbalanced, and returns true otherwise.
 *
 * Balanced means every left parentheses has a matching right parentheses, and all parentheses are in the correct order.
 *
 * This file executes when the page is refreshed, so open the console to see the results of the unit tests
 * using console.assert(). There is nothing rendered within the page itself.
 */

const isBalanced = (str) => {
  // exp 'ajb(ljlj)lllaf(ljjl'
  // return false if not closed
  // so loop through string and if "("
  // then loop after "("" to find ")"
  let open = 0;
  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    if (char === "(") {
      open++;
    }
    if (char === ")") {
      open--;
    }
    if (open === -1) return false
  }
  return open === 0;
};

// (()

console.assert(isBalanced("") === true);
console.assert(isBalanced("abc") === true);
console.assert(isBalanced("()") === true);
console.assert(isBalanced("a(b)c") === true);
console.assert(isBalanced("(a(b)c)") === true);
console.assert(isBalanced(")(") === false, 'failed with )(');
console.assert(isBalanced("a(bc") === false, 'failed');
console.assert(isBalanced("a)bc") === false, 'failed');
console.assert(isBalanced("a)b(c") === false, 'failed');
console.assert(isBalanced("(a)b(c") === false, 'failed');
