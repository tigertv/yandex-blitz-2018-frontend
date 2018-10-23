/** @returns string */  
module.exports = function(inputString) {  
	var m = inputString.match(/ta'((so|ko|ta|qa|goo) \d+?) /i);
	if (m == undefined) return 0;
	return m[1].toLowerCase();
}
