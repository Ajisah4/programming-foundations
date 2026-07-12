// Throwing and Catching Errors
// Errors interrupt normal control flow, but try/catch lets you recover

const rawInput = 'not-a-number'

let resultMessage = ''
let hadError = false

// 🐨 Use a try/catch block to convert rawInput to a number
try {
  const parsedValue = Number(rawInput)

  if (Number.isNaN(parsedValue)) {
    throw new Error(`Invalid number: ${rawInput}`)
  }

  resultMessage = `Parsed value: ${parsedValue}`
} catch (error) {
  hadError = true

  if (error instanceof Error) {
    resultMessage = `Error: ${error.message}`
  }
}

console.log(resultMessage)

// 🐨 Export resultMessage and hadError so we can verify your work
export { resultMessage, hadError }