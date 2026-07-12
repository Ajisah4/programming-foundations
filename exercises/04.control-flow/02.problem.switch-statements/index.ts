// Grade Description
// Convert letter grades to descriptive feedback using switch

const grade: string = 'B'

// 🐨 Create a variable `description` of type string
let description: string

// 🐨 Write a switch statement on `grade`
switch (grade) {
  case 'A':
    description = "Excellent"
    break

  case 'B':
    description = "Good"
    break

  case 'C':
    description = "Satisfactory"
    break

  case 'D':
    description = "Needs Improvement"
    break

  case 'F':
    description = "Failing"
    break

  default:
    description = "Invalid grade"
    break
}

console.log(`Grade ${grade}: ${description}`)

// 🐨 Export your variables so we can verify your work
export { grade, description }