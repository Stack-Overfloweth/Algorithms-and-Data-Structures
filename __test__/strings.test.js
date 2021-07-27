const isPalindrome = require('../Strings/Easy/stringsE');

describe('Palindrome tests', () =>{

	it('racecar is a palindrome', () => {
		expect(isPalindrome('racecar')).toBe(true);
	});

	it('apple is not a palindrome', () => {
		expect(isPalindrome('apple')).toBe(false);
	});

});