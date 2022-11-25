/*
Expectations: 
    - DOM Manipulation
    - Use of Local Storage
*/


// get
const clearBtn = document.querySelector("#clear-all")
const taskList = document.querySelector('#task-list')
const submitBtn = document.querySelector("#submit-btn")

// call
document.addEventListener('DOMContentLoaded', initData)
clearBtn.addEventListener('click', clearLocalStorage)


// function
function initData(){

    // this function initializes data if present before
    
    loadLocalStorage()

    document.querySelector("form").addEventListener("submit", (event) => {

        
        addTask()
        event.preventDefault()
        document.querySelector('#task').value = ""


    })

}

function loadLocalStorage(){
    // all the data in local storage is added to the DOM
    for (let i = 1; i<localStorage.length+1;i++){

        const li = document.createElement("li")
        li.innerText = localStorage.getItem(i)
        taskList.append(li)
        
    }

}

function clearLocalStorage(){
    // remove data from localStorage
    
    // remove data from DOM
    while (taskList.firstChild){
        taskList.removeChild(taskList.firstChild)
    }
    
    localStorage.clear()
    console.log('cleared')


}


function addTask(){

    // add Data to LocalStorage and DOM

    const li = document.createElement('li')
    li.innerText = document.querySelector('#task').value

    localStorage.setItem(localStorage.length+1, li.innerText)

    document.querySelector('#task-list').append(li)

}





