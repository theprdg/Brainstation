//CHALLENGE 1

var pound = '\n',	//accumulates a new '#' to the end of itself
		tree = '';		//accumulates a new 'pound' to form the final hash tree

for (var i = 1; i < 8; i++) {
	pound += "#";
	tree += pound
}

console.log(tree);

/* 
Challenge 1 Explained

For each iteration of the 'for' loop, the variable 'pound'
would add a new '#' to the end of itself and the variable 
'tree' would add the new 'pound' to the end of itself
forming a long string of incrementally large hashes
*/


//CHALLENGE 2

function isEven(number) {
	if (!isNaN(number)) {
		if (number % 2 === 0) {
			return console.log("number is even")
		}
		return console.log("number is odd")
	}
	return console.log("input is not a number")
}

/*
Challenge 2 Explained

I'm assuming we're accepting either an integer or a non-number
(i.e. floats ignored). The first thing the function does is 
check if 'number' is indeed a number, failing which will return
a message noting such, otherwise it will continue to check
against even/odd-ness with the modulo operator and return the
corresponding result
*/