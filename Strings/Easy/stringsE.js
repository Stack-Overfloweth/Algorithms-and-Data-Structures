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
const isPalindrome = (string) => {
  // Write your code here.

};

/* 
Given a string that represents a Binary Number, write a function that converts this string into a decimal number. DO NOT use the native parseInt() method. 
For example: 
binToDec('0')   -> 0
binToDec('11')  -> 3
binToDec('100') -> 4
binToDec('101') -> 5
binToDec('0101') -> 5
For more information on how to read binary, check out this article: 
https://m.wikihow.com/Read-Binary
*/

function binToDec(binString){
  // Write your code here.
}

/* 
Write a function that logs to the console an nxn representation of a staircase for any 
given nonnegative height, n. If the passed-in height is negative, console log an empty string.
The staircase must climb up from left to right. Each level of stairs logs a string of
asterisks and/or leading spaces. Note that the last stair should only consist of 
asterisks without any leading spaces.
 
For example:     
drawStairs(6) ->          
     *
    **
   ***
  ****
 *****
******
*/

const drawStairs = n => {

};


module.exports = {binToDec};
 

// Do not edit the line below.

module.exports = { fizzbuzz, isPalindrome, binToDec, drawStairs };
