// Arrow Functions
// Converting between function forms and using implicit returns

// 🐨 Convert this function declaration to an arrow function with implicit return
function double(n: number): number {
	return n * 2
}

// 🐨 Convert this function declaration to an arrow function with implicit return
function greet(name: string): string {
	return `Hello, ${name}!`
}

// 🐨 Convert this to an arrow function (keep the explicit return - it has multiple lines)
function calculateTotal(subtotal: number, taxRate: number): number {
	const tax = subtotal * taxRate
	return subtotal + tax
}
function isEven(n: number): boolean {
	return n % 2 === 0
}
function applyToNumber(n: number, trasform: (n: number ) => number): number {
	return trasform(n)
}
function triple(n: number): number {
	return n * 3
}

// 🐨 Export your functions so we can verify your work
export { double, greet, calculateTotal, isEven, applyToNumber, triple, square }
