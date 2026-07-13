// JSDoc Documentation
// Writing documentation comments that enhance IDE support and code clarity

/**
 * Adds two numbers together.
 *
 * @param a - The first number.
 * @param b - The second number.
 * @returns The sum of the two numbers.
 */
function add(a: number, b: number): number {
	return a + b
}

/**
 * Creates a greeting message for a person.
 *
 * @param name - The name of the person to greet.
 * @returns A greeting message.
 *
 * @example
 * greet("Alice")
 * // Returns: "Hello, Alice!"
 */
function greet(name: string): string {
	return `Hello, ${name}!`
}

/**
 * Calculates the compound interest amount after a given number of years.
 *
 * @param principal - The initial amount of money.
 * @param rate - The annual interest rate as a decimal.
 * @param years - The number of years the money is invested.
 * @returns The final amount after compound interest.
 *
 * @example
 * calculateCompoundInterest(1000, 0.05, 10)
 * // Returns: 1628.894626777442
 */
function calculateCompoundInterest(
	principal: number,
	rate: number,
	years: number,
): number {
	return principal * Math.pow(1 + rate, years)
}

/**
 * Constrains a value between a minimum and maximum.
 *
 * @param value - The value to clamp.
 * @param min - The minimum allowed value.
 * @param max - The maximum allowed value.
 * @returns The clamped value.
 *
 * @example
 * clamp(15, 0, 10)
 * // Returns: 10
 */
function clamp(value: number, min: number, max: number): number {
	return Math.max(min, Math.min(value, max))
}

// 🐨 Export your functions so we can verify your work
export { add, greet, calculateCompoundInterest, clamp }