// Product Availability System
// Using booleans to track product status

const price: number = 29.99
const stockCount: number = 100

// 🐨 Create a variable `isAvailable` with type `boolean` set to `true`
const isAvailable: boolean = true

// 🐨 Create a variable `hasDiscount` that's true when price is under 50
const hasDiscount: boolean = price < 50

// 🐨 Create a variable `canPurchase` that's true when isAvailable AND stockCount > 0
const canPurchase: boolean = isAvailable && stockCount > 0

// 🐨 Create a variable `isNotAvailable` that's the opposite of `isAvailable`
const isNotAvailable: boolean = !isAvailable

// ✅ Verification
console.log('Is Available:', isAvailable)
console.log('Has Discount:', hasDiscount)
console.log('Can Purchase:', canPurchase)
console.log('Is Not Available:', isNotAvailable)

// 🐨 Export your variables so we can verify your work
export { isAvailable, hasDiscount, canPurchase, isNotAvailable }