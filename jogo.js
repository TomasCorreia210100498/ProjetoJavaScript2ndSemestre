'use strict'

var flag = document.getElementById("guessFlag")
let pais = document.getElementById("guessPais")
let score = document.getElementById("score")
var btns = document.querySelectorAll(".continente")
var RNG = document.getElementById("rng")
var tentativas = document.getElementById("tentativas")
var taxaRespostas = document.getElementById("percentagem")

var numero2 = 0;
var numero = 0;
var gerar = document.getElementById("gerar")

async function getCountry() {
  const url = await fetch("https://restcountries.com/v3.1/all");
  const res = await url.json();
 
  gerar.addEventListener("click", proximo)
  function proximo(){

    var random = Math.floor(Math.random() * 251)
      flag.src = res[random].flags["png"]
      pais.textContent = res[random].translations.por["common"]
      flag.alt = res[random].region
      

      for(const ele of btns) {
        ele.style.backgroundColor = "black"
        ele.style.color = "white"
        ele.disabled = false
      }
  }


  for(const ele of btns){
    ele.addEventListener("click", clicado)
  }
  
  if(pais.textContent = "Clique abaixo para começar"){
    for(const ele of btns){
      ele.disabled = true
    }
  }
  

  function clicado(e){
    console.log(e.target.textContent)
    var clicked = e.target.textContent
    console.log(flag.alt)

    if(flag.alt == e.target.textContent){
        e.target.style.backgroundColor = "green"
        e.target.style.color = "black"
        
        numero2 = numero2 + 1
        tentativas.textContent = "Tentativas:  " + numero2
        numero = numero + 1;
        score.textContent = "Respostas certas:  " + numero;
        let percentage = 0;
        percentage = (numero / numero2 * 100)
        
        taxaRespostas.textContent = "Score: " + percentage.toFixed(1) + "%"

    }else{
      e.target.style.backgroundColor = "red"
      e.target.style.color = "black"
        numero2 = numero2 + 1
        tentativas.textContent = "Tentativas:  " + numero2
        taxaRespostas.textContent = "Score: " + percentage.toFixed(1) + "%"
       }
    }
}



getCountry()





