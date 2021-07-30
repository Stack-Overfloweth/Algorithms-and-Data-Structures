/*
Write a function that returns an array containing the numbers 1 to NUM.
Put "fizz" in place of numbers divisble by 3 but not by 5,
"buzz" in place of numbers divisble by 5 but not by 3,
and "fizzbuzz" in place of numbers divisble by both 3 and 5.
fizzbuzz(16);
-> [1, 2, 'fizz', 4, 'buzz', 'fizz', 7, 8, 'fizz', 'buzz',
11, 'fizz', 13, 14, 'fizzbuzz', 16]
*/
// const fizzbuzz = num => {
//   // Write your code here.
//   const result = [];
//   for(let i = 1; i <= num; i++){
//     if(i % 3 ===0 ){  //&& i % 5 !==0
//       result.push('fizz')
//     }
//     else if(i % 5 ===0){ // && i % 3 !==0
//       result.push('buzz')
//     }
//     // else if(i % 5 ===0){ // && i % 3 ===0
//     //   result.push('fizzbuzz')
//     // }
//     else result.push(i)

//   }

//   return result;
// };

// const fizzbuzz = num => {
//   // Write your code here.
//   const result = [];
//   for(let i = 1; i <= num; i++){
//     if(i % 15 ===0 ) result.push('fizzbuzz')
//     else if(i % 3 === 0) result.push('fizz')
//     else if(i % 5 === 0)result.push('buzz')
//     else result.push(i)
//   }
//   return result;
// };

const fizzbuzz = (num) => {
  const result = [];
  for (let i = 1; i <= num; i++) {
    let string = ""; //concat to empty string, takes care of fizz & buzz in each conditional
    if (i % 3 === 0) {
      string += "fizz";
    }
    if (i % 5 === 0) {
      string += "buzz";
    }
    if (string.length === 0) {
      result.push(i);
    } else if (string.length > 0) {
      result.push(string);
    }
  }
  return result;
};

/*
Write a function that takes in a non-empty string and returns a boolean representing whether the string is a palindrome.  

A palindrome is defined as a string that's written the same forward and backward.  Note that single-character strings are palindromes.

*/
const isPalindrome = (string) => {
  // Write your code here.
  // Lower cases the entire string, then replaces all non letter characters with an empty str
  let lowerStr = string.toLowerCase().replace(/[\W_]/g, '');

  // create a new variable, to create a reverse string of the lowerStr, split it, reverse it, then join it
                     //to arra, reverse, then back 2 str
  let revStr = lowerStr.split('').reverse().join('');

  return lowerStr === revStr;
};

//console.log(isPalindrome('Never Odd or Even'))
 

// Do not edit the line below.

module.exports = { fizzbuzz, isPalindrome, firstNonRepeatingCharacter };
