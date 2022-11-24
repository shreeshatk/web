// Day 2 


// Exercise: Level 1

let challenge = '30 Days of JavaScript'

console.log(challenge)

console.log('length of challenge is', challenge.length)

console.log(challenge.toUpperCase())

console.log(challenge.toLowerCase())

// slice it 

console.log(challenge.substr(3, 4))  //days
console.log(challenge.substring(3, 8)) // days

console.log(challenge.substring(3, ))

////

console.log(challenge.includes('Script'))  // true

// split
console.log(challenge.split(""))
let arr = challenge.split(' ')
console.log(arr)


let pbc = 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon'
console.log(pbc.split(", "))

// modify

console.log(challenge.replace('JavaScript', 'Python'))


// check

console.log(challenge.charAt(15))

console.log(challenge.charCodeAt(11))


//


console.log(challenge.indexOf('a'))
console.log(challenge.lastIndexOf('a'))


//


let sentence = 'You cannot end a sentence with because because because is a conjunction'

console.log(sentence.indexOf('because'))
console.log(sentence.lastIndexOf('because'))

console.log(sentence.search('because'))


//


console.log(challenge.trim())

console.log(challenge.startsWith('30'))
console.log(challenge.endsWith('Script'))



//


console.log(challenge.match('a'))

let firstHalf = "30 Days of "
let secondHalf = "JavaScript"

console.log(firstHalf.concat(secondHalf))

console.log(challenge.repeat(2))