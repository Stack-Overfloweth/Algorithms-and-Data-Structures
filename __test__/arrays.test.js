const {twoSum, duplicateNumber, mode, reverseArray, retrieveDepth,duplicateNumberAdvanced} = require('../Arrays/Easy/arraysE');
const {threeSum, highestProfit} = require('../Arrays/Medium/arraysM');
describe('twoSum test', () => {
  let arr;

  it('should return true if two numbers sum to n', () => {
    arr = [1, 4, 6, 12, 9];
    expect(twoSum(arr, 10)).toBe(true);
    arr = [1, 4, 6, 12, 9];
    expect(twoSum(arr, 16)).toBe(true);
    arr = [1, 4, 7, 2, 9, 0];
    expect(twoSum(arr, 7)).toBe(true);
  });

  it('should work with negative numbers', () => {
    arr = [-1, 4, 6, 12, 9];
    expect(twoSum(arr, 8)).toBe(true);
    arr = [-1, -1, -2, -4, -5]
    expect(twoSum(arr, -2)).toBe(true);
  });

  it('should return false if two numbers DO NOT sum to n', () => {
    arr = [1, 4, 6, 12, 9];
    expect(twoSum(arr, 2)).toBe(false);
    arr = [1, 4, 6, 12, 9];
    expect(twoSum(arr, 45)).toBe(false);
    arr = [1, 4, 7, 2, 9, 0];
    expect(twoSum(arr, 17)).toBe(false);
  });

});

xdescribe('threeSum test', () => {
  let arr;

  it('should return true if three numbers sum to n', () => {
    arr = [2, 5, 11, 15];
    expect(threeSum(arr, 18)).toBe(true);
    arr = [2, 5, 11, 15];;
    expect(threeSum(arr, 22)).toBe(true);
    arr = [2, 5, 11, 15];;
    expect(threeSum(arr, 31)).toBe(true);
  });

  it('should work with negative numbers', () => {
    arr = [-1, 4, 6, 12, 9]
    expect(threeSum(arr, 22)).toBe(true);
    arr = [-1, 4, 6, 12, 9]
    expect(threeSum(arr, 9)).toBe(true);
    arr = [-1, 4, 6, 12, 9];
    expect(threeSum(arr, 20)).toBe(true);
    arr = [-1, -4, 5, 12, 9];
    expect(threeSum(arr, 0)).toBe(true);
    arr = [-1, -1, -2, -4, -5]
    expect(threeSum(arr, -4)).toBe(true);
  });

  it('should return false if three numbers DO NOT sum to n', () => {
    arr = [1, 4, 6, 12, 9];
    expect(threeSum(arr, 2)).toBe(false);
    arr = [1, 4, 6, 12, 9];
    expect(threeSum(arr, 45)).toBe(false);
    arr = [1, 4, 7, 2, 9, 0];
    expect(threeSum(arr, 19)).toBe(false);
  });

});

describe('duplicateNumber test', () => {
	let arr;
  
	it('should return duplicate number in a sorted array', () => {
	  arr = [1,2,3,4,5,6,7,7,8,9,10,11,12,13,14,15];
	  expect(duplicateNumber(arr)).toBe(7);
	})
  
	it('should return duplicate number in an unsorted array', () => {
	  arr = [12,14,3,7,15,1,11,9,10,3,5,2,4,6,13,8];
	  expect(duplicateNumber(arr)).toBe(3);
	})
  })

  describe('mode test', () => {
	let arr;
	it('handles an array of only one (repeated) number', () => {
	  arr = [3];
	  expect(mode(arr)).toBe(3);
	  
	  arr = [-7, -7, -7];
	  expect(mode(arr)).toBe(-7);
	  
	  arr = [0, 0, 0, 0];
	  expect(mode(arr)).toBe(0);
	});
	
	it('handles an array with an obvious mode', () => {
	  arr = [1, 6, 7, 5, 8, 8, 10, 6, 10, 4, 6, 11];
	  expect(mode(arr)).toBe(6);
	});
	
	it('chooses the max for an array with several modes', () => {
	  arr = [12, 5, 32, 4];
	  expect(mode(arr)).toBe(32);
	  arr = [3, 1, 1, 1, 3, 7, 3, 3, 1];
	  expect(mode(arr)).toBe(3);
	});
  });

  describe('reverseArray test', () => {
	let arr, reversed;
	it('returns the same array in memory', () => {
	  arr = [];
	  expect(reverseArray(arr)).toBe(arr);
	  arr = [1, 2, 4];
	  expect(reverseArray(arr)).toBe(arr);
	});
	
	it('reverses the elements of the array', () => {
	  arr = [6];
	  reversed = [6];
	  expect(reverseArray(arr.slice())).toEqual(reversed);
	  
	  arr = [1, 2, 4];
	  reversed = [4, 2, 1];
	  expect(reverseArray(arr.slice())).toEqual(reversed);
	  
	  arr = [1, 2, 4, 5];
	  reversed = [5, 4, 2, 1];
	  expect(reverseArray(arr.slice())).toEqual(reversed);
	});
  });

  describe('retrieveDepth test', () => {
	it('retieves values less than or equal to a certain depth', () => {
	  expect(retrieveDepth([2, [4, [7], 1], 5], 1)).toEqual([2, 5]);
	  expect(retrieveDepth([2, [4, [7], 1], 5], 2)).toEqual([2, 4, 1, 5]);
	  expect(retrieveDepth([2, [4, [7], 1], 5], 3)).toEqual([2, 4, 7, 1, 5]);
	});
  });
  
  xdescribe('duplicateNumberAdvanced test', () => {
	let arr;
  
	it('should return duplicate number in an unsorted array', () => {
	  arr = [];
	  for (let i = 42; i < 142; i++){
		arr.push(i);
	  }
	  arr.push(72)
	  expect(duplicateNumberAdvanced(arr)).toBe(72);
	})
  
	it('should return duplicate number in a sorted array', () => {
	  arr = [];
	  for (let i = 73; i < 211; i++){
		if(i === 111) arr.push(i);
		arr.push(i);
	  }
	  expect(duplicateNumberAdvanced(arr)).toBe(111);
	})
  })

  describe('apple-stocks\' test', () => {
    let stocks;

    it('Function should return 0 if input is invalid', () => {
        expect(highestProfit(['ten', 'nine', 'eight'])).toEqual(0);
        expect(highestProfit({0: 10, 1: 5, 2: 0})).toEqual(0);
        expect(highestProfit('stocks')).toEqual(0);
        expect(highestProfit(1000)).toEqual(0);
        expect(highestProfit(stocks)).toEqual(0);
    });

    it('Function should return 0 if there\'s no possibility of making a profit', () => {
        stocks = [100, 90, 70, 40, 0];
        expect(highestProfit(stocks)).toEqual(0);
        expect(highestProfit([])).toEqual(0);
    });

    it('Function should return the highest profit possible', () => {
        stocks = [0, 2000, 4000, 6000, 8000, 10000];
        expect(highestProfit(stocks)).toEqual(10000);
        stocks = [2000, 1000, 100, 200, 400, 100];
        expect(highestProfit(stocks)).toEqual(300);
        stocks = [8, 5, 4, 3, 2, 7, 2];
        expect(highestProfit(stocks)).toEqual(5);
    });

    it ('Function should return the highest profit possible when given multiple possible profits', () => {
        stocks = [1000, 500, 1000, 1500, 0, 200, 800, -10, 0, 100];
        expect(highestProfit(stocks)).toEqual(1000);
        stocks = [0, 300, 200, 500, 600, 100, 399, 350, 500];
        expect(highestProfit(stocks)).toEqual(600);
        stocks = [200, 600, 700, 100, 300, 200, 620];
        expect(highestProfit(stocks)).toEqual(520);
    });
});