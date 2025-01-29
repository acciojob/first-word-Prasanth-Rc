function firstWord(s) {
  // your code here
	s = s.trim();
	if(s===''){
	   return '';
	 }
	return s.split(' ')[0];
}

window.onload = function() {
  document.getElementById('fname').onblur = capitalizeName; // Set the onblur event handler
};

// Do not change the code below

const s = prompt("Enter String:");
alert(firstWord(s)); 
