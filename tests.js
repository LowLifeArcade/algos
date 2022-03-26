function returnBrackets(str) {
  for (let i = 0; i < str.length; i++) {
    const el = str[i];
    
  }
  return '('
}

console.assert(returnBrackets('(') === false)
console.assert(returnBrackets(')') === false)
console.assert(returnBrackets('())') === false)
console.assert(returnBrackets('(()') === false)
console.assert(returnBrackets('()') === true)
