/*
  Given an array of numbers and a target number,
  return true if two of the numbers in the array add up to the target.
  Otherwise, return false.
  You may assume that each input would have exactly one solution, and you may not use the same element twice.
  The straightforward way to solve this problem would take O(n²)time. Is it possible to do this in O(n) time? 
  Example:
  const num = [2, 5, 11, 15]
  twoSum(num, 7) -> true
  Rational:  nums[0] + nums[1] = 2 + 5 = 7,
  twoSum(nums, 9) -> false
  Rational: No elements inside the array sum up to the target number
*/

const twoSum = (arr, target) => {
  // Write your code here.
  // init obj to store visited numbers in the array
  let cache = {};

  for (let i = 0; i < arr.length; i++) {
    // diff variable stores the difference between the target and arr at the index
    let diff = target - arr[i];

    // if the cache obj contains the diff, return true
    if (cache[diff]) {
      return true;
    } else {
      // else store the visited number in obj
      cache[arr[i]] = true;
    }
  }
  return false;
};

const num = [1, 4, 7, 2, 9, 0];
console.log(twoSum(num, 7)); //-> true

/*
You have an unsorted array of n + 1 numbers, with the numbers from 1 to n.
One number is duplicated. Find it.
ex: [1,5,4,3,6,2,4,7] should return 4
*/

const duplicateNumber = (array) => {
  // Write your code here.
};

/*
Given an array of numbers (integers), return the mode, that is, the number that
appears most often. If there are multiple modes, use the max of the modes.
Assume that at least one number is present in the array.
e.g.
mode([3, 2, 4, 3]) -> 3
mode([7, 5, 8, 8, 2, 5]) -> 8
*/

const mode = (array) => {
  // Write your code here.
};

/*
Reverse and return an array in-place. Do not create a new array in memory.
Instead, modify the array as given. Do not use the array reverse method built in
to the array prototype while solving the problem.
*/

const reverseArray = (array) => {
  // Write your code here.
};

/*
Given an arbitrarily nested array of numbers and a positive integer "depth",
return a new array consisting of the numbers with depth less than or equal to
the provided depth, in order of appearance.
The original array is considered to be at depth 1, and inner arrays are at
greater depth.
For example:
retrieveDepth([2, [4, [7], 1], 5], 1) -> [2, 5] because only the 2 and 5 are at
"depth 1", and everything else is too deep. The 4 and 1 are at "depth 2", and
the 7 is at "depth 3".
retrieveDepth([2, [4, [7], 1], 5], 2) -> [2, 4, 1, 5] becuase the 2 and 5 are at
"depth 1", the 4 and 1 are at "depth 2", and the 7 is too deep because it's at
"depth 3".
retrieveDepth([2, [4, [7], 1], 5], 3) -> [2, 4, 7, 1, 5] because every number
is within "depth 3". No number is deeper.
*/

const retrieveDepth = (arr, depth) => {
  // Write your code here.
};

/* 
You have an unsorted array of n + 1 numbers, with the range of k to k + n - 1, with an extra number that is a duplicate.
(k is not necessarily 1) Find the duplicate. Do this in O(n) time and O(1) space complexity.
ex: [3, 4, 7, 6, 8, 5, 6] should return 6
*/

const duplicateNumberAdvanced = (array) => {
  // Write your code here.
};

/*
Create a function that takes an array of numbers and return both the minimum and maximum numbers, in that order.
Examples:
minMax([1, 2, 3, 4, 5]) ➞ [1, 5]
minMax([2334454, 5]) ➞ [5, 2334454]
minMax([1]) ➞ [1, 1]
*/

const minMax = (array) => {
  // Write your code here.
};

module.exports = {
  twoSum,
  duplicateNumber,
  mode,
  reverseArray,
  retrieveDepth,
  duplicateNumberAdvanced,
  minMax,
};
