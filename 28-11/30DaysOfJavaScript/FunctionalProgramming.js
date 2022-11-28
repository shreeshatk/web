

const arr = ['one', 'two']

arr.forEach(function(ele){
    console.log(ele)
})

let mappedArr = arr.map(function(ele){
    return ele.toUpperCase()
})

console.log(mappedArr)