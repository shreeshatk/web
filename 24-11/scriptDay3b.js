// 30 Days of JavaScript

// Day 3: Exercise Level 2

// Write a script that prompt the user to enter base and height of the triangle
// and calculate an area of a triangle (area = 0.5 x b x h).

const base = window.prompt("Enter Base", 0)
const height = window.prompt("Enter Height", 0)

window.alert(`Area is ${0.5 * base* height}`)


// Create a human readable time format using the Date time object


const now = new Date()

let year = now.getFullYear()
let month = now.getMonth() + 1
let date = now.getDate()
let hour = now.getHours()
let minutes = now.getMinutes()

// YYYY-MM-DD HH:mm

console.log(`${year}-${month}-${date} ${hour}:${minutes}`)

// DD-MM-YYYY HH:mm

console.log(`${date}-${month}-${year} ${hour}:${minutes}`)

// DD/MM/YYYY HH:mm

console.log(`${date}/${month}/${year} ${hour}:${minutes}`)


// Create a human readable time format using the Date time object. 
// The hour and the minute should be all 
// the time two digits(7 hours should be 07 and 5 minutes should be 05 )
// YYYY-MM-DD HH:mm eg. 2020-01-02 07:05



let newDate = [date, month, year, hour, minutes]
for (let i = 0; i< newDate.length; i++){
    item = newDate[i]
    if (item < 10){
        newDate[i] = '0' + item
    }
}

console.log(newDate)
console.log(`${newDate[0]}/${newDate[1]}/${newDate[2]} ${newDate[3]}:${newDate[4]}`)
