'use strict'

var flag = document.getElementById("guessFlag")
let pais = document.getElementById("guessPais")
let score = document.getElementById("score")
var btns = document.querySelectorAll(".continente")
var RNG = document.getElementById("rng")


var gerar = document.getElementById("gerar")

async function getCountry() {
  const url = await fetch("https://restcountries.com/v3.1/all");
  const res = await url.json();
 
  gerar.addEventListener("click", proximo)
  function proximo(){

    var random = Math.floor(Math.random() * 251)
      flag.src = res[random].flags["png"]
      pais.textContent = res[random].name["common"]
      flag.alt = res[random].region

      for(const ele of btns){
        ele.style.backgroundColor = "black"
        ele.style.color = "white"
      }
  }


  for(const ele of btns){
    ele.addEventListener("click", clicado)
  }
  
  function clicado(e){
    console.log(e.target.textContent)
    var clicked = e.target.textContent
    console.log(flag.alt)

    if(flag.alt == e.target.textContent){
        e.target.style.backgroundColor = "green"
        e.target.style.color = "black"

    }else{
      e.target.style.backgroundColor = "red"
      e.target.style.color = "black"
      }
    }
}
  

getCountry()





