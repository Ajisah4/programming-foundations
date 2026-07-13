// Understanding Type Inference
// When to let TypeScript infer vs. when to be explicit

// TypeScript infers the return type here
function multiply(a: number, b: number) {
	return a * b
}

// 🐨 Hover over `multiply` - Inferred return type: number

// Add an explicit return type to catch the bug
function divide(a: number, b: number): number {
	if (b === 0) {
		throw new Error('Cannot divide by zero')
	}
	return a / b
}

// TypeScript infers the return type (boolean)
function isEven(num: number) {
	return num % 2 === 0
}

// ✅ Test
console.log(multiply(4, 5)) // 20
console.log(divide(10, 2)) // 5
// console.log(isEven(4)) // true
// console.log(isEven(7)) // false

// 🐨 Export your functions so we can verify your work
export { multiply, divide, isEven }