const hello = () => console.log('Hello, World!');

const sayHi = (name) => console.log(`Hi ${name}!`);

const multiplyByTen = (a) => a * 10;

const sum = (a,b) => a + b;

const power = (base, exponent) => {
	let result = 1;
	
	for (let count = 0; count < exponent; count ++) {
		result *= base;
	}
	
	return result;
};

//Testit
console.log('Testit:');
hello();
sayHi('Santtu');

number = multiplyByTen(10);
console.log(number);

number = sum(10, 12);
console.log(number);

number = power(2, 5);
console.log(number);
