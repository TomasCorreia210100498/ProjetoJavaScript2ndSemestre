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
    country.className = `${data.region}`
    country.innerHTML =/* ` 
    <div class="${data.region}"> */`
    <div class="country-img"> 
    <img src="${data.flags["png"]}" alt="${data.name["common"]}">               
</div>
<div class="country-info"> 
<h3> ${data.name["common"]} </h3>    
<p> <strong> População:</strong>${ "  "+data.population}</p>
    <p class="nomeRegiao"> <strong> Continente:</strong> ${" "+data.region}</p>
    <p> <strong> Capital:</strong>${"  "+data.capital}</p>
    

</div>`
   
    countriesElem.appendChild(country)
    country.style.border = "3px solid black"
    country.style.margin = "1.7vw"
    country.style.height = "fit-content"
    country.style.width = "min-content"
}



let children = document.querySelector(".countries").children

//Filtrar os países por continente

function clicado(e){
    console.log("clicou em " + e.target.textContent)
    continenteAtual.innerHTML = e.target.textContent

for(let i = 0;i<children.length; i++){
   /* console.log(children.item(i).className) */
    if(children.item(i).className == continenteAtual.innerHTML){
            children.item(i).style.display = "block"
    }else{
        children.item(i).style.display = "none"
    }  

    if(continenteAtual.innerHTML == "Todos"){
        children.item(i).style.display = "block"
    }
}
}