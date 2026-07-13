// Arrow Functions
// Converting between function forms and using implicit returns

const double = (n: number): number => n * 2;

const greet = (name: string): string => `Hello, ${name}!`;

const calculateTotal = (subtotal: number, taxRate: number): number => {
	const tax = subtotal * taxRate;
	return subtotal + tax;
};

const isEven = (n: number): boolean => n % 2 === 0;

const applyToNumber = (
	n: number,
	transform: (n: number) => number,
): number => transform(n);

const triple = (n: number): number => n * 3;

const square = (n: number): number => n * n;

export {
	double,
	greet,
	calculateTotal,
	isEven,
	applyToNumber,
	triple,
	square,
};