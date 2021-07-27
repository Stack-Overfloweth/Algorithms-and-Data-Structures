const isPalindrome = (string) => {
	// Write your code here.
	if(string.length === 1) return true;
	const revStr = string.split('').reverse().join('');
	return string === revStr;
}
  
// Do not edit the line below.
module.exports  = isPalindrome;