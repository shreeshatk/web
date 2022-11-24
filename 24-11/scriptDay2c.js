// 30 Days of JavaScript

// Day 2: Exercise Level 3

let s = 'Love is the best thing in this world. Some found their love and some are still looking for their love.'

// count the number of love in above sentence => remember it is case sensitive

let pattern = /love/gi

console.log(s.match(pattern))

console.log((s.split('love')).length - 1)

///
let sentence = 'You cannot end a sentence with because because because is a conjunction'

let newPattern = /because/gi

/*
g -> search whole text
i -> text insensitive
*/

console.log(sentence.match(newPattern))


//Clean the following text and find the most frequent word (hint, use replace and regular expressions).


const clearme = '%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching'

let r = /[^a-zA-Z ]/g


/*
/<regex Expression>/ modifier(s)

a-z -> between a to z
^ -> not
g -> don't stop after first match [global]
Space can also be added
regex is not a string
*/

console.log(clearme.replace(r, ""))


/*
Calculate the total annual income of the person by extracting the numbers from 
the following text. 'He earns 5000 euro from salary per month, 10000 euro 
annual bonus, 15000 euro online courses per month.'
*/

let story = 'He earns 5000 euro from salary per month, 10000 euro \
annual bonus, 15000 euro online courses per month.'

function sum(arr){

    let total = 0
    for (let i = 0; i < arr.length; i++){
        console.log(arr[i])
        total += parseInt(arr[i])
    }

    return total
}


let regex = /\d+/g 

let digits = story.match(regex)
console.log(sum(digits))