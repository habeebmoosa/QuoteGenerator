let button = document.querySelector("#button");
let mainContent = document.querySelector(".mainContent");
let person = document.querySelector(".person");


button.addEventListener('click',change);
function change(){

    let qoute = fetch("https://dummyjson.com/quotes/random")
    qoute.then((value)=>{
        return value.json()
    }).then((value1)=>{

        mainContent.innerHTML = `<p>“${value1.quote}”</p>`
        person.innerHTML = `<p>${value1.author}</p>`


    })
    
}

