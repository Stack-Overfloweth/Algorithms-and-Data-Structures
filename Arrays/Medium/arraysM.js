/*
Given an array of numbers and a target number, 
return true if three of the numbers in the array add up to the target.
Otherwise, return false.
The straightforward way to solve this problem would take O(n³) time. Is it possible to do this in O(n²) time?
*/

const threeSum = (arr, target) => { 
	// Write your code here.
  }

  /*
Consider an array called apple-stock as an argument. This array 
represents the variation of an Apple stock during a single day. 
The values in the array are in chronological order.
ex: [1000, 500, 1500, 2000, 0] --> The stock began at 1000 and closed at 0;
Write a function called highestProfit that calculates the highest profit 
you can make in the given day by buying and selling a single Apple stock. 
This is comprised of one buy and one sell. Keep your worst case 
time complexity in O(n^2).
Return 0 if no profit is possible OR if input is invalid.
** Extension **
Refactor your function to improve your time complexity to O(n).
Hint: Use pointers to keep track of the indices of max, min to 
calculate profit along the array.
*/

const highestProfit = apple_stock => {
	//Write your code here.
}


  
module.exports = {threeSum, highestProfit};