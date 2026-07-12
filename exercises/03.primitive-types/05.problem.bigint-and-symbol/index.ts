// BigInt and Symbol

const largeNumber = 9007199254740993n
const anotherLarge = 1000000000000000000n

const sum = largeNumber + anotherLarge

const userId = Symbol('user')
const anotherId = Symbol('user')

const areEqual = userId === anotherId

console.log('Large Number:', largeNumber)
console.log('Another Large:', anotherLarge)
console.log('Sum:', sum)
console.log('User ID:', userId)
console.log('Another ID:', anotherId)
console.log('Are Equal:', areEqual)

export {
  largeNumber,
  anotherLarge,
  sum,
  userId,
  anotherId,
  areEqual,
}