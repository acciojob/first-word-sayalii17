function firstWord(s) {
  // your code here
	let res= s.trim().split(" ");
	
	return res[0];
}
// Do not change the code below

const s = prompt("Enter String:");
alert(firstWord(s));