// a script that prints My number: <first argument converted in integer> if the first argument can be converted to an integer

const args = process.argv.slice(2);
const num = parseInt(args[0]);

if (isNaN(num)) {
	  console.log("Not a number");
} else {
	  console.log(`My number: ${num}`);
}

