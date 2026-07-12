// BigInt and Symbol

// 🐨 Create a bigint variable `largeNumber`
const largeNumber = 9007199254740991n

// 🐨 Create another bigint variable `anotherLarge`
const anotherLarge = 1000000000000000n

// 🐨 Add them together
const sum = largeNumber + anotherLarge

// 🐨 Create two symbols with the same description
const userId = Symbol('user')
const anotherId = Symbol('user')

// 🐨 Compare the symbols
const areEqual = userId === anotherId

// ✅ Verification
console.log('Large Number:', largeNumber)
console.log('Another Large:', anotherLarge)
console.log('Sum:', sum)
console.log('User ID:', userId)
console.log('Another ID:', anotherId)
console.log('Are Equal:', areEqual)

// 🐨 Export your variables so we can verify your work
export {
  largeNumber,
  anotherLarge,
  sum,
  userId,
  anotherId,
  areEqual,
}