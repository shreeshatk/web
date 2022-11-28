// const url = 'https://restcountries.com/v2/all' // countries api
// fetch(url)
//   .then(response => response.json()) // accessing the API data as JSON
//   .then(data => {
//     // getting the data
//     console.log(data)
//   })
//   .catch(error => console.error(error)) 

// const url = 'https://restcountries.com/v2/all'

// fetch(url)
// .then(function(response){
//         return response.json()
//     })
// .then(function(data) {
//         console.log(data[0])
//     })
// .catch(function(err){
//     console.log(err)
// })

const catsAPI = 'https://api.thecatapi.com/v1/breeds'

const d = fetch(catsAPI)
console.log(d)

