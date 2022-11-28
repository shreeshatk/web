// get 

let imgHolder = document.querySelector('img')
let removeBtns;
let loadingHeading = document.querySelector('#loading')

// console.log(removeBtns)




const url = 'https://api.thecatapi.com/v1/breeds'


// fetch promise
fetch(url)
.then(function(res){
    return res.json()
})
.catch(function(err){
    loadingHeading.innerText = "Loading Failed, Please Reload"
})
.then(function(data){
    loadCats(data)
}).catch(function(err){
    removeBtns = document.querySelectorAll('.remove-btn')

removeBtns.forEach(function(btn){
btn.addEventListener('click', function(e){
    (e.target).parentElement.parentElement.remove()
})})

})


// data = [

//     {
//         name: 'abc',
//         life_span: '10-15',
//         image: {url: 'https://cdn2.thecatapi.com/images/OOD3VXAQn.jpg'}
//     }
// ]


function loadCats(data){
    loadingHeading.innerText = ""
    for (let i=0; i<data.length; i++){
        const catInfo = data[i]
        
        // create Element
        const divCatCard = document.createElement('div')
        const divHeadContainer = document.createElement('div')
        const removeBtn = document.createElement('button')
        const h2 = document.createElement('h2')
        const img = document.createElement('img')
        const h3 = document.createElement('h3')
        

        // Decorate/Modify Element 
        divCatCard.className = 'cat-card'
        divHeadContainer.className = 'head-container'
        removeBtn.className = 'remove-btn'
        removeBtn.innerText = 'x'
        h2.innerText = catInfo.name
        img.src = catInfo.image.url
        h3.innerText = catInfo.life_span
        

        // Structure
        divHeadContainer.append(h2)
        divHeadContainer.append(removeBtn)

        divCatCard.append(divHeadContainer)
        divCatCard.append(img)
        divCatCard.append(h3)

        document.querySelector('body').append(divCatCard)



    }



}

// loadCats(data)


