const {getNthFib} = require('../Recursion/Easy/recurE');

describe('Fibonacci tests', () =>{

	it('input of n = 6 to be 5', () => {
		expect(getNthFib(6)).toBe(5);
	});
	it('input of n = 4 to be 2', () => {
		expect(getNthFib(4)).toBe(2);
	});
	it('input of n = 2 to be 1', () => {
		expect(getNthFib(2)).toBe(1);
	});

});