// Day 8: Objects

// Exercise: Level 3

const users = [
    {
        _id: 'ab12ex',
        username: 'Alex',
        email: 'alex@alex.com',
        password: '123123',
        createdAt:'08/01/2020 9:00 AM',
        isLoggedIn: false
    },
    {
        _id: 'fg12cy',
        username: 'Asab',
        email: 'asab@asab.com',
        password: '123456',
        createdAt:'08/01/2020 9:30 AM',
        isLoggedIn: true
    },
    {
        _id: 'zwf8md',
        username: 'Brook',
        email: 'brook@brook.com',
        password: '123111',
        createdAt:'08/01/2020 9:45 AM',
        isLoggedIn: true
    },
    {
        _id: 'eefamr',
        username: 'Martha',
        email: 'martha@martha.com',
        password: '123222',
        createdAt:'08/01/2020 9:50 AM',
        isLoggedIn: false
    },
    {
        _id: 'ghderc',
        username: 'Thomas',
        email: 'thomas@thomas.com',
        password: '123333',
        createdAt:'08/01/2020 10:00 AM',
        isLoggedIn: false
    }
    ];

    const products = [
  {
    _id: 'eedfcf',
    name: 'mobile phone',
    description: 'Huawei Honor',
    price: 200,
    ratings: [
      { userId: 'fg12cy', rate: 5 },
      { userId: 'zwf8md', rate: 4.5 }
    ],
    likes: []
  },
  {
    _id: 'aegfal',
    name: 'Laptop',
    description: 'MacPro: System Darwin',
    price: 2500,
    ratings: [],
    likes: ['fg12cy']
  },
  {
    _id: 'hedfcg',
    name: 'TV',
    description: 'Smart TV:Procaster',
    price: 400,
    ratings: [{ userId: 'fg12cy', rate: 5 }],
    likes: ['fg12cy']
  }
]

// Imagine you are getting the above users collection from a MongoDB database.
// a. Create a function called signUp which allows user to add to the 
// collection. If user exists, inform the user that he has already an 
// account.


function randomIdGeneratorV1(){

    randomNumber = ''
    for (let i=0; i<6; i++){
        let charAscii = (Math.random() * 27) + 97
        const c = String.fromCharCode(charAscii)
        randomNumber += c
    }
    return randomNumber
}

function randomIdGeneratorV2(){
    randomId = ''
    set = 'abcdefghijklmnopqrstuvwxyz0123456789'

    for (let i=0; i<6; i++){
        randomId += set.charAt(Math.floor(Math.random() * (set.length)))
    }
    return randomId
}

// console.log(randomIdGeneratorV2())

function getTimeStamp(){

    // required format:  DD/MM/YYYY HH:MM AM/PM

    const now = new Date()

    const date = now.getDate()
    const month = now.getMonth() + 1  // 0 indexed
    const year = now.getFullYear()
    let hours = now.getHours()
    const minutes = now.getMinutes()
    let am = false 
    let meridiem = 'PM'
    if (hours < 12){
        am = true 
        meridiem = 'AM'
    }
    else{
        hours = hours - 12

    }

    return `${date}/${month}/${year} ${hours}:${minutes} ${meridiem}`

}



function signUp(){

    // const newUserName = window.prompt('Enter User Name')
    // const newEmail = window.prompt('Enter Email')
    // const newPassword = window.prompt('Enter Password')

    const newUserName = 'dummyUser'
    const newEmail = 'dummyMail'
    const newPassword = 'dummyPass'

    for (const user of users){
        if (user.username == newUserName){
            console.log('User Already Exists')
            return
        }
    }

    const newUser = {
        _id: randomIdGeneratorV2(),
        username: newUserName,
        email: newEmail,
        password: newPassword,
        createdAt: getTimeStamp(),
        isLoggedIn: false
    }

    users.push(newUser)

}
signUp()

// b. Create a function called signIn which allows user to 
// sign in to the application

function signIn(){

    // const newUserName = window.prompt('Enter User Name')
    // const newPassword = window.prompt('Enter Password')

    const currentUserName = 'Asab'
    const currentPassword = '123456'

    for (const user of users){
        if (user.username == currentUserName){
            if (user.password == currentPassword){
                console.log('Sign In Successful')
                console.log(user)
                return user
            }else{
                console.log("Invalid Password")
                return
            }
        }
    }
    console.log('User Doesn\'t exist, Sign Up')

}

// signIn()

// The products array has three elements and each of them has six properties.
// a. Create a function called rateProduct which rates the product 


function getProduct(productName){

    for (let product of products){
        if (product.name === productName){
            return product
        }
    }
    return {}
}



function rateProduct(){

    // user and product object is required here

    const user = signIn()
    const product = getProduct('Laptop')

    // rate out of 5
    const getUserRating = Math.floor(Math.random() * 6) 

    const newRating = {
        userId: user._id,
        rate: getUserRating
    }

    product.ratings.push(newRating)

    console.log(product)
    

}


// b. Create a function called averageRating which calculate the average rating of a product


function averageRating(){

    const product = getProduct('mobile phone')

    const ratingOfProduct = product.ratings

    const totalRating = ratingOfProduct.length

    let sumOfRatings = 0

    for (const r of ratingOfProduct){
        sumOfRatings += (r.rate)
    }

    return sumOfRatings / totalRating

}


// console.log(averageRating())



// Create a function called likeProduct.
// This function will helps to like to the product 
// if it is not liked and remove like if it was liked.


function likeProduct(){

    const user = signIn()
    const product = getProduct('Laptop')

    const totalLikes = product.likes.length
    let arr = product.likes
    console.log(product.likes[0] == user.username)
    for (let i=0; i<totalLikes; i++){
        if (product.likes[i] === user._id){
            console.log('Yes')
            product.likes.splice(i, 1)
            return
        }
    }

    product.likes.push(user._id)


}


// likeProduct()
