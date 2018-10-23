var elems = document.getElementsByClassName('key');

var keys = [
	7,7,7,
	3,10,7,
	3,10,7,
	14,14,14,
	15,10,6,
	3,10,7
];

const delay = 200;

for (let i=0;i<keys.length;i++) {
	setTimeout(function() {
    	elems[keys[i]].click();
    }, i*delay);
}
