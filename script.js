'use strict'

let imageShow = document.querySelector("#imageShow")
let Monumento = document.querySelector("#monumento")
let Destaque = document.querySelector("#destaque")

let belemBtn = document.querySelector("#turismo1")
let bigbenBtn = document.querySelector("#turismo2")
let romaBtn = document.querySelector("#turismo3")
let liberdadeBtn = document.querySelector("#turismo4")
let egitoBtn = document.querySelector("#turismo5")
let cristoBtn = document.querySelector("#turismo6")
let operaBtn = document.querySelector("#turismo7")
let towerBtn = document.querySelector("#turismo8")

belemBtn.addEventListener("click", mostrar)
function mostrar(){
    Destaque.src = "imgs/africa.jpg"
    Monumento.textContent = "África"
}

bigbenBtn.addEventListener("click", mostrar1)
function mostrar1(){
    Destaque.src = "imgs/america.jpg"
    Monumento.textContent = "América"
}

romaBtn.addEventListener("click", mostrar2)
function mostrar2(){
    Destaque.src = "imgs/asia.png"
    Monumento.textContent = "Ásia"
}

liberdadeBtn.addEventListener("click", mostrar3)
function mostrar3(){
    Destaque.src = "imgs/europa.jpg"
    Monumento.textContent = "Europa"
}

egitoBtn.addEventListener("click", mostrar4)
function mostrar4(){
    Destaque.src = "imgs/oceania.jpg"
    Monumento.textContent = "Oceânia"
}


