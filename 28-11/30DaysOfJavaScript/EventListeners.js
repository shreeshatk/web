//get

const inputFormPassword = document.getElementById('password')
let target = document.getElementById('show-pass')
inputFormPassword.addEventListener('input', function(e){
    target.innerText = e.target.value
})

inputFormPassword.addEventListener('blur', function(e){
    target.innerText = "Invalid Password"
    target.style.color = 'red'
})