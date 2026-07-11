// Understanding Reassignment vs Mutation

// This object is declared with const
const person = { name: 'Alice', age: 30, city: 'Seattle' };

console.log('Original person:', person);

// 🐨 Try to reassign person to a new object:
// person = { name: 'Bob', age: 25, city: 'Portland' }
// 💣 Uncomment the line above and see the TypeScript error

// 🐨 Now try MUTATING the object by changing the age property
person.age = 31;

// 🐨 Mutate again by changing the city
person.city = 'Portland';

console.log('Modified person:', person);

// 🐨 Export your variable so we can verify your work
export { person };