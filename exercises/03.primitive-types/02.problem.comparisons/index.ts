// Comparison Operators
// Understanding equality and inequality in JavaScript/TypeScript

const price: number = 100
const quantity: string = '100'

// 🐨 Create a variable `looseEqual` that compares price and quantity with ==
// @ts-expect-error
const looseEqual = price == quantity

// 🐨 Create a variable `strictEqual` that compares price and quantity with ===
// @ts-expect-error
const strictEqual = price === quantity

// 🐨 Log both results to see the difference
console.log('Loose equality (==):', looseEqual)
console.log('Strict equality (===):', strictEqual)

const a: number = 10
const b: number = 20

// 🐨 Create a variable `notEqualLoose` using != to check if a is not equal to b
const notEqualLoose = a != b

// 🐨 Create a variable `notEqualStrict` using !== to check if a is not equal to b
const notEqualStrict = a !== b

// 🐨 Create a variable `isGreater` that checks if b is greater than a
const isGreater = b > a

// 🐨 Create a variable `isLessOrEqual` that checks if a is less than or equal to b
const isLessOrEqual = a <= b

console.log('a != b:', notEqualLoose)
console.log('a !== b:', notEqualStrict)
console.log('b > a:', isGreater)
console.log('a <= b:', isLessOrEqual)

// 🐨 Export your variables so we can verify your work
export {
  looseEqual,
  strictEqual,
  notEqualLoose,
  notEqualStrict,
  isGreater,
  isLessOrEqual,
}