// Grade Calculator
// Convert numeric scores to letter grades

const score: number = 85

// 🐨 Create a variable `grade` of type string
let grade: string

// 🐨 Write if/else if/else to set the grade:
// - 90 and above: "A"
// - 80-89: "B"
// - 70-79: "C"
// - 60-69: "D"
// - Below 60: "F"
if (score >= 90) {
  grade = "A"
} else if (score >= 80) {
  grade = "B"
} else if (score >= 70) {
  grade = "C"
} else if (score >= 60) {
  grade = "D"
} else {
  grade = "F"
}

// 🐨 Create a variable `passed` that is true if grade is C or above
const passed = grade === "A" || grade === "B" || grade === "C"

console.log(`Score: ${score}`)
console.log(`Grade: ${grade}`)
console.log(`Passed: ${passed}`)

// 🐨 Export your variables so we can verify your work
export { score, grade, passed }