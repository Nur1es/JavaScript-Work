
let plus1 = document.getElementById("plus")
let counttt = document.getElementById("colichestvo")
let minus1 = document.getElementById("minus")
let Cena1 = document.getElementById('colichestvo')
let cena1 = document.getElementById('cena1')

num2 = 549

let counterrr = 1

function plusHaandler(){
    counterrr++
    counttt.innerHTML = counterrr
    cena1.innerHTML = counterrr * num2
}

plus1.addEventListener("click", plusHaandler)

num1 = 549

function minusHaandler(){
    counterrr--
    counttt.innerHTML = counterrr
    if (counterrr <= 0){
        counterrr = 1;
    }
    counttt.innerHTML = counterrr
    cena1.innerHTML = counterrr * num2
}


minus1.addEventListener("click", minusHaandler)








let plus2 = document.getElementById("plus2")
let count = document.getElementById("count")
let minus2 = document.getElementById("minus2")
let Cena2 = document.getElementById('colichestvo2')
let cena2 = document.getElementById('cena2')


let counter = 0
num2 = 549

function plusHandler(){
    counter++
    count.innerHTML = counter
    count.innerHTML = counter
    cena2.innerHTML = counter * num2
}

plus2.addEventListener("click", plusHandler)

function minusHandler(){
    counter--
    count.innerHTML = counter
    if (counter <= 0){
        counter = 1;
    }
    cena2.innerHTML = counter * num2
}


minus2.addEventListener("click", minusHandler)


let plus3 = document.getElementById("plus3")
let countt = document.getElementById("colichestvo3")
let minus3 = document.getElementById("minus3")
let Cena3 = document.getElementById('colichestvo3')
let cena3 = document.getElementById('cena3')


let counterr = 0

num3 = 549

function plussHandler(){
    counterr++
    countt.innerHTML = counterr
    cena3.innerHTML = counterr * num3
}

plus3.addEventListener("click", plussHandler)

function minussHandler(){
    counterr--
    countt.innerHTML = counterr
    if (counterr <= 0){
        counterr = 1;
    }
    cena3.innerHTML = counterr * num2
}


minus3.addEventListener("click", minussHandler)


const daalete = document.getElementById('daaleteBtn1')

daalete.addEventListener("click", function(item){
    item.target.parentElement.remove()
})
const dalete = document.getElementById('daaleteBtn2')

dalete.addEventListener("click", function(item){
    item.target.parentElement.remove()
})
const ddalete = document.getElementById('daaleteBtn3')

ddalete.addEventListener("click", function(item){
    item.target.parentElement.remove()
})


const Like1 = document.getElementById('likeBtn1')

Like1.addEventListener("click", () => {
    if(Like1.innerHTML == "🤍"){
        Like1.innerHTML = "❤️"
    }else{
        Like1.innerHTML = "🤍"
    }
})
const Like2 = document.getElementById('likeBtn2')

Like2.addEventListener("click", () => {
    if(Like2.innerHTML == "🤍"){
        Like2.innerHTML = "❤️"
    }else{
        Like2.innerHTML = "🤍"
    }
})
const Like3 = document.getElementById('likeBtn3')

Like3.addEventListener("click", () => {
    if(Like3.innerHTML == "🤍"){
        Like3.innerHTML = "❤️"
    }else{
        Like3.innerHTML = "🤍"
    }
})




