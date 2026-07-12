// Ternary Operator
// A concise way to choose between two values

const temperature = 25

// 🐨 Create a variable `weatherDescription` using a ternary operator
// It should be "hot" if temperature > 30, otherwise "comfortable"
const weatherDescription = temperature > 30 ? "hot" : "comfortable"

const score = 85

// 🐨 Create a variable `passed` using a ternary operator
// It should be true if score >= 70, otherwise false
const passed = score >= 70 ? true : false

const stock = 0

// 🐨 Create a variable `stockMessage` using a ternary operator
// It should be "In stock" if stock > 0, otherwise "Out of stock"
const stockMessage = stock > 0 ? "In stock" : "Out of stock"

console.log(`Temperature: ${temperature} → ${weatherDescription}`)
console.log(`Score: ${score} → ${passed ? 'Passed' : 'Failed'}`)
console.log(`Stock: ${stock} → ${stockMessage}`)

// 🐨 Export your variables so we can verify your work
export { weatherDescription, passed, stockMessage }