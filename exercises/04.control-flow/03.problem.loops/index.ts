// Exhibit Labels
// Using a for loop to build a numbered list

// 🐨 Create a variable `exhibitLabels` starting as an empty string
let exhibitLabels: string = ""

// 🐨 Write a for loop that counts from 1 to 5
for (let i = 1; i <= 5; i++) {
  // 🐨 On each pass, add a line like "Exhibit 1" to the string
  exhibitLabels += `Exhibit ${i}\n`
}

// Remove the extra newline at the end
exhibitLabels = exhibitLabels.trim()

console.log(exhibitLabels)

// 🐨 Export your variable so we can verify your work
export { exhibitLabels }