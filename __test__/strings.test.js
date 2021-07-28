const {fizzbuzz} = require('../Strings/Easy/stringsE');
const {isPalindrome} = require('../Strings/Easy/stringsE');
const {firstNonRepeatingCharacter} = require('../Strings/Easy/stringsE')


describe('Fizzbuzz tests', () =>{

	it('6 should return', () => {
		expect(fizzbuzz(16)).toStrictEqual([1, 2, 'fizz', 4, 'buzz', 'fizz', 7, 8, 'fizz', 'buzz',
		11, 'fizz', 13, 14, 'fizzbuzz', 16]);
	});

	it('2 should return', () => {
		expect(fizzbuzz(2)).toStrictEqual([1, 2]);
	});

	it('6 should return ', () => {
		expect(fizzbuzz(6)).toStrictEqual([1, 2, 'fizz', 4, 'buzz', 'fizz']);
	});

});



describe('Palindrome tests', () =>{

	it('racecar is a palindrome', () => {
		expect(isPalindrome('racecar')).toBe(true);
	});

	it('apple is not a palindrome', () => {
		expect(isPalindrome('apple')).toBe(false);
	});

	it('s is a palindrome', () => {
		expect(isPalindrome('s')).toBe(true);
	});

});

describe('1st non-repeating character tests', () =>{

	it('abcdcaf with b (index of 1) being the first non-repeating character', () => {
		expect(firstNonRepeatingCharacter('abcdcaf')).toBe(1);
	});

	it('ababacc with index of -1 as all characters repeat at least one time', () => {
		expect(firstNonRepeatingCharacter('ababacc')).toBe(-1);
	});

});
