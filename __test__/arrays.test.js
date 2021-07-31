const {twoSum, duplicateNumber, duplicateNumberAdvanced} = require('../Arrays/Easy/arraysE');
const {threeSum} = require('../Arrays/Medium/arraysM');
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