/*
Write a function that returns an array containing the numbers 1 to NUM.
Put "fizz" in place of numbers divisble by 3 but not by 5,
"buzz" in place of numbers divisble by 5 but not by 3,
and "fizzbuzz" in place of numbers divisble by both 3 and 5.
fizzbuzz(16);
-> [1, 2, 'fizz', 4, 'buzz', 'fizz', 7, 8, 'fizz', 'buzz',
11, 'fizz', 13, 14, 'fizzbuzz', 16]
*/
  const fizzbuzz = num => {
    // Write your code here.
  };

/*
Write a function that takes in a non-empty string and returns a boolean representing whether the string is a palindrome.  

A palindrome is defined as a string that's written the same forward and backward.  Note that single-character strings are palindromes.

*/
const isPalindrome = string => {
	// Write your code here.
}

/*
Write a function that takes in a string of lower case English-alphabet letters and returns the index of the string's first non-repeating character.

The first non-repeating character is the first cahracter in a string that occurs only once.

If the input string doesn't have any non-repeating characters, your function should return -1.
*/
const firstNonRepeatingCharacter = string => {
	// Write your code here.
}
  
// Do not edit the line below.

module.exports = { fizzbuzz, isPalindrome, firstNonRepeatingCharacter}