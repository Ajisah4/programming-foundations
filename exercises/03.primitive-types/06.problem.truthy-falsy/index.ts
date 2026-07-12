// Account and Checkout Status
// Using truthy and falsy values to drive decisions

const username = 'kent'
const nickname = ''
const age = 0
const email = 'kent@epicweb.dev'
const password = ''
const notes = undefined
const cartTotal = 42
const hasAcceptedTerms = false

// 🐨 Create a variable `hasUsername` based on the truthiness of `username`
const hasUsername = Boolean(username)

// 🐨 Create a variable `hasNickname` based on the truthiness of `nickname`
const hasNickname = Boolean(nickname)

// 🐨 Create a variable `hasAge` based on the truthiness of `age`
const hasAge = Boolean(age)

// 🐨 Create a variable `hasNotes` based on the truthiness of `notes`
const hasNotes = Boolean(notes)

// 🐨 Create a variable `canCheckout` that is true when cartTotal is truthy AND
// hasAcceptedTerms is true
const canCheckout = Boolean(cartTotal) && hasAcceptedTerms

// 🐨 Create a variable `canCreateAccount` that is true when hasUsername, email,
// and password are all truthy
const canCreateAccount = hasUsername && Boolean(email) && Boolean(password)

// ✅ Verification
console.log('Has username:', hasUsername)
console.log('Has nickname:', hasNickname)
console.log('Has age:', hasAge)
console.log('Has notes:', hasNotes)
console.log('Can checkout:', canCheckout)
console.log('Can create account:', canCreateAccount)

// 🐨 Export your variables so we can verify your work
export {
  hasUsername,
  hasNickname,
  hasAge,
  hasNotes,
  canCheckout,
  canCreateAccount,
}