// function recurse(num) {
//   if (num === 1) return 1
//   console.log('I ran' + num)
//   return num * recurse(num -1) 
// }

// console.log(recurse(16))
// console.log('Hello World')

let myStr = 'Hello: Bearer Token:jflajflajflajflafj'

let token = myStr.split(' ')[2].split(':')[1] //?

token