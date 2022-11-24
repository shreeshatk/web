// 30 days of JavaScript

// Day 2: Exercise Level 2



let x = `The quote 'There is no exercise better for the heart than reaching down and lifting people up.' by John Holmes teaches us to help one another.`


console.log(x)

let y = `"Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead."
`
console.log(y)


let n = '10'

if (typeof(n) != typeof(10)){
    n = parseInt(n)
}

console.log(n, typeof(n))

if (parseFloat('9.8') == 10){
    console.log('yes')   
}
else{
    console.log(Math.ceil(parseFloat('9.8')))
}



let p = 'python'
let j = 'jargon'

console.log(p.includes('on'))
console.log(j.includes('on'))

let sentence = "I hope this course is not full of jargon."

console.log(sentence.match('jargon'))


// generate random number [0, 100]

console.log(Math.floor(Math.random() * 101))

// generate random number [50, 100]

console.log(Math.floor(Math.random() * 51) + 50)

// generate random number [0, 255]

console.log(Math.floor(Math.random() * 256))

// Access JavaScript string characters using random function

let pl = 'JavaScript'

let idx = Math.floor(Math.random() * pl.length)

console.log(pl[idx])

// 1 1 1 1 1
// 2 1 2 4 8


console.log(
    '1\t1\t1\t1\t1\n2\t1\t2\t4\t8'
)


let s = 'You cannot end a sentence with because because because is a conjunction'

console.log(s.substring(s.indexOf('because'), s.lastIndexOf('because')+8))

