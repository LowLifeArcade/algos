function recurse(num) {
  if (num === 1) return 1
  console.log('I ran' + num)
  return num * recurse(num -1) 
}

console.log(recurse(16))
console.log('Hello World')