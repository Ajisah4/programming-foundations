// Theater Seating Chart
// Use nested loops to build rows and seats

const rows = ['A', 'B', 'C']
const seatsPerRow = 4

// 🐨 Create a variable `seatChart` starting as an empty string
let seatChart: string = ""

// 🐨 Use nested for loops to build the seating chart
for (let i = 0; i < rows.length; i++) {
  for (let j = 1; j <= seatsPerRow; j++) {
    seatChart += `${rows[i]}${j}`

    if (j < seatsPerRow) {
      seatChart += " "
    }
  }

  seatChart += "\n"
}

console.log(seatChart)

// 🐨 Export your variable so we can verify your work
export { seatChart }