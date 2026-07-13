// Arrow Functions
// Converting between function forms and using implicit returns

// 🐨 Convert this function declaration to an arrow function with implicit return
const double = (n: number): number => n * 2;

// 🐨 Convert this function declaration to an arrow function with implicit return
const greet = (name: string): string => `Hello, ${name}!`;

// 🐨 Convert this to an arrow function (keep the explicit return - it has multiple lines)
const calculateTotal = (subtotal: number, taxRate: number): number => {
	const tax = subtotal * taxRate;
	return subtotal + tax;
};

const isEven = (n: number): boolean => n % 2 === 0;

const applyToNumber = (
	n: number,
	transform: (n: number) => number,
): number => {
	return transform(n);
};

const triple = (n: number): number => n * 3;

// 🐨 Export your functions so we can verify your work
export {
	double,
	greet,
	calculateTotal,
	isEven,
	applyToNumber,
	triple,
};