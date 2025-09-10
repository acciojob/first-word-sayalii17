function firstWord(s) {
  // your code here
	let s= s.trim();

	if(s.length === 0)   return " ";
	
	let idx= s.indexOf(" ");

	if(idx== -1)   return s;
	
	return s.substr(0,idx);
}

// Do not change the code below

const s = prompt("Enter String:");
alert(firstWord(s));