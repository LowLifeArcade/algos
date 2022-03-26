function returnBrackets(str) {

  return '('
}

console.assert(returnBrackets('(') === false)
console.assert(returnBrackets(')') === false)
console.assert(returnBrackets('())') === false)
console.assert(returnBrackets('(()') === false)
console.assert(returnBrackets('()') === true)
