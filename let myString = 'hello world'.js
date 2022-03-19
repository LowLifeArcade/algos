let myString = 'hello world';
let newArr = [];
let stringArr = myString.split(' ').reverse(); //?
newArr.push(stringArr[1].split('').reverse().join('')); //?
newArr.push(stringArr[0].split('').reverse().join('')); //?

myString = newArr.join(' '); //?

myString;

let newWord = [];
for (let i = 0; i < myString.length; i++) {
  const letter = myString[i];
  newWord.unshift(letter);
}
newWord.join(''); //?
