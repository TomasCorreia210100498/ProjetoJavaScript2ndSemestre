'use strict'

let imageShow = document.querySelector("#imageShow")
let Monumento = document.querySelector("#monumento")
let Destaque = document.querySelector("#destaque")

let africaBtn = document.querySelector("#turismo1")
let americaBtn = document.querySelector("#turismo2")
let asiaBtn = document.querySelector("#turismo3")
let europaBtn = document.querySelector("#turismo4")
let oceaniaBtn = document.querySelector("#turismo5")



africaBtn.addEventListener("click", mostrar)
function mostrar(){
    Destaque.src = "imgs/africa.jpg"
    Monumento.textContent = "África"
}

americaBtn.addEventListener("click", mostrar1)
function mostrar1(){
    Destaque.src = "imgs/america.jpg"
    Monumento.textContent = "América"
}

asiaBtn.addEventListener("click", mostrar2)
function mostrar2(){
    Destaque.src = "imgs/asia.png"
    Monumento.textContent = "Ásia"
}

europaBtn.addEventListener("click", mostrar3)
function mostrar3(){
    Destaque.src = "imgs/europa.jpg"
    Monumento.textContent = "Europa"
}

oceaniaBtn.addEventListener("click", mostrar4)
function mostrar4(){
    Destaque.src = "imgs/oceania.jpg"
    Monumento.textContent = "Oceânia"
}


