'use strict'

let continenteAtual = document.querySelector("#atualContinente")
let dropdown = document.querySelector("#dropdown")
let content = document.querySelector("#dropdownContent")



content.addEventListener("click",clicado)



const countriesElem = document.querySelector(".countries");

async function getCountry(){
    const url = await fetch("https://restcountries.com/v3.1/all");
    const res = await url.json();
console.log(res)
        res.forEach(element => {
            showCountry(element)
        });
}


getCountry()

 function showCountry(data){
    const country = document.createElement("div")
    country.id = `${data.region}`
    country.title = `${data.name["common"]}`
    country.className = "country"
    country.innerHTML =
    `<div class="country-img"> 
    <img src="${data.flags["png"]}" alt="${data.name["common"]}">               
</div>
<div class="country-info"> 
<h3> ${data.translations.por["common"]} </h3>    
<p> <strong> População:</strong>${ "  "+data.population}</p>
    <p class="nomeRegiao"> <strong> Continente:</strong> ${" "+data.region}</p>
    <p> <strong> Capital:</strong>${"  "+data.capital}</p>
    

</div>`
   
    country.addEventListener("click", exibir)
    countriesElem.appendChild(country)
    country.style.border = "3px solid black"
    country.style.margin = "1.7vw"
    country.style.height = "fit-content"
    country.style.width = "min-content"
    
    function exibir(e){
        document.getElementById("myNav").style.width = "100%";
            
           
            let cap = document.getElementById("nomeCapital").textContent = "Capital:  " + data.capital
            let ppl = document.getElementById("people").textContent = "População:  " + data.population
            let reg = document.getElementById("regiao").textContent = "Continente:  " + data.region
            let lmap = document.getElementById("linkMap").href = data.maps["googleMaps"]
            let loc = document.getElementById("loc").textContent =  "Mapa: " + data.maps["googleMaps"]
            let latlong = document.getElementById("lat-long").textContent = "Latitude:  " + data.latlng["0"] + " Longitude:  " + data.latlng["1"]
            let timezone = document.getElementById("tz").textContent = "Fuso Horário:   " + data.timezones["0"]
            let subreg = document.getElementById("subreg").textContent = "Região:  " + data.subregion
            let nomepais = document.getElementById("nomeCountry").textContent = data.translations.por["common"]
            let imgem = document.getElementById("imagem").src = data.flags["png"]
            let ofc = document.getElementById("oficial").textContent = "Nome oficial:  " + data.translations.por["official"]
      }
    
      
      
   
}



var children = document.querySelector(".countries").children



//Filtrar os países por continente

function clicado(e){
    console.log("clicou em " + e.target.textContent)
    continenteAtual.innerHTML = e.target.textContent

for(let i = 0;i<children.length; i++){
   /* console.log(children.item(i).className) */
    if(children.item(i).id == continenteAtual.innerHTML){
            children.item(i).style.display = "block"
           
    }else{
        children.item(i).style.display = "none"
        
    }  

    if(continenteAtual.innerHTML == "Todos"){
        children.item(i).style.display = "block"
    }
   
}
}

function openNav() {
    document.getElementById("myNav").style.width = "100%";
  }
  
 
  function closeNav() {
    document.getElementById("myNav").style.width = "0%";
    let cap = document.getElementById("nomeCapital").textContent = ""
            let ppl = document.getElementById("people").textContent = ""
            let reg = document.getElementById("regiao").textContent = ""
            let lmap = document.getElementById("linkMap").href = ""
            let loc = document.getElementById("loc").textContent =  ""
            let latlong = document.getElementById("lat-long").textContent = ""
            let timezone = document.getElementById("timezone").textContent = ""
            let nomepais = document.getElementById("nomeCountry").textContent = ""
            let imgem = document.getElementById("imagem").src = ""
  } 

  var divs = document.getElementsByClassName("country")
  
  var btn = document.getElementById("top")

  window.onscroll = function() {voltarAoTop()};
  
  function voltarAoTop() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      btn.style.display = "block";
    } else {
      btn.style.display = "none";
    }
    
  }

  function voltarAoTopo() {
    
    document.documentElement.scrollTop = 0; 

  } 
  




 
 
