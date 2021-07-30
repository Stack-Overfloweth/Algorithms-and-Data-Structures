/*
Write a function that takes in a string of lower case English-alphabet letters and returns the index of the string's first non-repeating character.

The first non-repeating character is the first character in a string that occurs only once.

If the input string doesn't have any non-repeating characters, your function should return -1.
*/

// const firstNonRepeatingCharacter = (string) => {
//   // Write your code here.
//   const stringArray = string.split('');
//   let index = -1;
//   const cache = stringArray.reduce((obj, letter) => {
//     obj[letter] ? obj[letter] += 1 : obj[letter] = 1;
//     return obj;
//   }, {})
//   for(let key in cache){
//     if(cache[key] < 2){
//       index = stringArray.indexOf(key);
//       break;
//     }
//   }
//   return index;
// };


function firstNonRepeatingCharacter(str) {
  for (let i = 0; i < str.length; i++) {
    let char = str[i];
  
    if (str.indexOf(char) == i && str.indexOf(char, i + 1) == -1) {
      return i;
    }
  }
  return -1;
}




  module.exports = {firstNonRepeatingCharacter};