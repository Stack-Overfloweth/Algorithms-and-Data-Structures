
const {fizzbuzz, isPalindrome, binToDec, drawStairs} = require('../Strings/Easy/stringsE')
const {firstNonRepeatingCharacter} = require('../Strings/Medium/stringsM')

xdescribe(`Fizzbuzz tests`, () =>{

	it(`16 should return [1, 2, 'fizz', 4, 'buzz', 'fizz', 7, 8, 'fizz', 'buzz',
	11, 'fizz', 13, 14, 'fizzbuzz', 16]`, () => {

		expect(fizzbuzz(16)).toStrictEqual([1, 2, 'fizz', 4, 'buzz', 'fizz', 7, 8, 'fizz', 'buzz',
		11, 'fizz', 13, 14, 'fizzbuzz', 16]);
	});


	it(`2 should return [1, 2]`, () => {
		expect(fizzbuzz(2)).toStrictEqual([1, 2]);
	});

	it(`6 should return [1, 2, 'fizz', 4, 'buzz', 'fizz']`, () => {
		expect(fizzbuzz(6)).toStrictEqual([1, 2, 'fizz', 4, 'buzz', 'fizz']);
	});

});


describe('Palindrome tests', () =>{

	it('s is a palindrome', () => {
		expect(isPalindrome('s')).toBe(true);
	});

	it('racecar is a palindrome', () => {
		expect(isPalindrome('racecar')).toBe(true);
	});

	it('apple is not a palindrome', () => {
		expect(isPalindrome('apple')).toBe(false);
	});

	it('Never Odd or Even is a palindrome', () => {
		expect(isPalindrome('Never Odd or Even')).toBe(true)
	})
});

describe('1st non-repeating character tests', () =>{

	it('abcdcaf with b (index of 1) being the first non-repeating character', () => {
		expect(firstNonRepeatingCharacter('abcdcaf')).toBe(1);
	});

	it('ababacc with index of -1 as all characters repeat at least one time', () => {
		expect(firstNonRepeatingCharacter('ababacc')).toBe(-1);
	});

});


describe('binToDec test', ()=>{
	it('Should return correct conversion', ()=>{
	  expect(binToDec('101')).toBe(5);
	  expect(binToDec('11111100100')).toBe(2020);
	});
  
	it('Should ignore leading zeroes', ()=>{
	  expect(binToDec('0000000010101')).toBe(21);
	})
  });

  describe('drawStairs test', () => {
	let logOutput;

	beforeAll(() => {
		console.nativeLog = console.log;
		console.log = (...args) => logOutput += args.join('') + '\n';
	});

	beforeEach(() => logOutput = '');

	afterAll(() => console.log = console.nativeLog);

  describe('positive height n', () => {
		it('should draw correct stairs for n = 1', () => {
			drawStairs(1);
			expect(logOutput).toBe(`*\n`);
		});
		it('should draw correct stairs for n = 2', () => {
			drawStairs(2);
			expect(logOutput).toBe(` *\n**\n`);
		});
		it('should draw correct stairs for n = 3', () => {
			drawStairs(3);
			expect(logOutput).toBe(`  *\n **\n***\n`);
		});
		it('should draw correct stairs for n = 4', () => {
			drawStairs(4);
			expect(logOutput).toBe(`   *\n  **\n ***\n****\n`);
		});
		it('should draw correct stairs for n = 5', () => {
			drawStairs(5);
			expect(logOutput).toBe(`    *\n   **\n  ***\n ****\n*****\n`);
		});
	});

	describe('non-positive height n', () => {
		it('should draw no stairs for n = 0', () => {
			drawStairs(0);
			expect(logOutput).toBe(``);
		});
		it('should draw no stairs for n = -100', () => {
			drawStairs(-100);
			expect(logOutput).toBe(``);
		});
	});
});