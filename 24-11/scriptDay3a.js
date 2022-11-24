// 30 Days of JavaScript

// Day 3: Exercise Level 1


//Check if type of '10' is equal to 10

console.log( typeof('10') == typeof(10)) // false



// Boolean value is either true or false.

// Write three JavaScript statement which provide truthy value.
// Write three JavaScript statement which provide falsy value.

if (1){
    console.log('True')
}

if ("s"){
    console.log('True')
}

if (-55){
    console.log('True')
}

if (0){
    console.log('True')
}

if ("" || '' || ``){
    console.log('True')
}

if (undefined || NaN || null){
    console.log('True')
}

// Use the Date object to do the following activities

const now = new Date()

// What is the year today?

console.log(now.getFullYear())

// What is the month today as a number?

console.log(now.getMonth() + 1)
// since months are indexed from 0 to 11

// What is the date today?
console.log(now.getDate())

// What is the day today as a number?

console.log(now.getDay())
// 4 -> Thursday

// What is the hours now?
console.log(now.getHours())

// What is the minutes now?
console.log(now.getMinutes())

// Find out the numbers of seconds elapsed from January 1, 1970 to now.
console.log(now.getTime())