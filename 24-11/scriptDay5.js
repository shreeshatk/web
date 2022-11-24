// 30 Days of JavaScript

// Day 5: Arrays


const arr = Array()
console.log(arr)

const emptyArr = Array(8).fill(0)
console.log(emptyArr)

// Reverse Array

const numbers = [1,2,3,4,5,6]
numbers.reverse()
console.log(numbers)

// sort

numbers.sort()
console.log(numbers)


// Add and Remove

// push -> append 
// pop -> remove from end

numbers.push(7)
console.log(numbers)
numbers.pop()
console.log(numbers)


// shift -> remove first element
// unshift -> prepend

numbers.shift()
console.log(numbers)

numbers.unshift(1)
console.log(numbers)


// Extend Array -> Concat

const newNumbers = [8,9,10]

console.log(numbers.concat(newNumbers))



// index of array element

console.log(numbers.indexOf(5))


// Check datatype

console.log(Array.isArray(numbers))



// Array to String Conversion

console.log(numbers.toString())

// Join

console.log(numbers.join('#'))

// Slice Array

console.log(numbers.slice(0, numbers.length))
// consider start, end-1