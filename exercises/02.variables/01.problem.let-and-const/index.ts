// Shopping Cart System
// Understanding when to use let vs const

// 🐨 Create a constant `TAX_RATE` set to 0.08 (8%)
const TAX_RATE = 0.08;

// 🐨 Create a variable `cartTotal` using `let`, starting at 0
let cartTotal = 0;

// 🐨 Create constants for product prices
const bookPrice = 15.99;
const muffinPrice = 4.5;
const laptopPrice = 999.99;

// 🐨 Add the book to the cart (update cartTotal)
cartTotal = cartTotal + bookPrice;

// 🐨 Add the muffin to the cart (update cartTotal)
cartTotal = cartTotal + muffinPrice;

// 🐨 Calculate the final total with tax
const finalTotal = cartTotal + (cartTotal * TAX_RATE);

// 🐨 Try uncommenting the line below - what happens?
// TAX_RATE = 0.10; 
// ❌ Error: Cannot assign to 'TAX_RATE' because it is a constant.

// Uncomment the following lines to see the results
console.log('Cart subtotal:', cartTotal);
console.log('Tax:', cartTotal * TAX_RATE);
console.log('Final total:', finalTotal);

// 🐨 Export your variables so we can verify your work
export { TAX_RATE, cartTotal, finalTotal };
