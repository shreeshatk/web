// Day 7: Functions

// unknown number of arguments



let sumAllArrow = (...args) => {
    console.log(args)
}

sumAllArrow(1,2,3,4,5,8,8,9,6)

function sumAll(){

    console.log(arguments)
    let sum = 0

    for (let i=0; i < arguments.length; i++){
        sum += arguments[i]
    }

    return sum

}

console.log(sumAll(1,2,3,4,5))
sumAll(1,2,3,4,5,6,7)


