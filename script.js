console.log("Test")

const knoppen = document.querySelector("#Canvas1")

const buttons = document.querySelectorAll(".buttons img")

const canvas1 = document.querySelector("#Canvas1")
const canvas2 = document.querySelector("#Canvas2")
const canvas3 = document.querySelector("#Canvas3")
const canvas4 = document.querySelector("#Canvas4")
const canvas5 = document.querySelector("#Canvas5")
const canvas6 = document.querySelector("#Canvas6")
const canvas7 = document.querySelector("#Canvas7")
const canvas8 = document.querySelector("#Canvas8")
const canvas9 = document.querySelector("#Canvas9")
const canvas10 = document.querySelector("#Canvas10")


// Hulp met audio van: https://stackoverflow.com/questions/33723377/javascript-if-else-statement-that-plays-an-mp3-audio-file

const sounddier = new Audio("Sounds/cow.mp3")
const soundberg = new Audio("Sounds/oh-yeah.mp3")
const soundster = new Audio("Sounds/ster.mp3")
const soundmens = new Audio("Sounds/sup-bro.mp3")
const soundwater = new Audio("Sounds/wait-what.mp3")
const soundzon = new Audio("Sounds/wauw.mp3")

//*

function Geluid(event) {
    console.log(event.target.id)

    if (event.target.id === "berg") {
        soundberg.play()
    } else if (event.target.id === "dieren") {
        sounddier.play()
    } else if (event.target.id === "mensen") {
        soundmens.play()
    } else if (event.target.id === "sterren") {
        soundster.play()
    } else if (event.target.id === "water") {
        soundwater.play()
    } else if (event.target.id === "zon") {
        soundzon.play()
    } else {
        soundster.play()
    }
}

//hulp van: docent Arthur van Schravendijk

function Knop(event){
    console.log(event.target.id)

    if (event.target.id === "berg"){
        canvas1.src = "img/Bergen.svg"
    } else if (event.target.id === "gras"){
        canvas2.src = "img/Gras.svg"
    } else if (event.target.id === "dieren"){
        canvas3.src = "img/Dieren.svg"
    } else if (event.target.id === "huis"){
        canvas4.src = "img/Huis.svg"
    } else if (event.target.id === "mensen"){
        canvas5.src = "img/Mensen.svg"
    } else if (event.target.id === "stad"){
        canvas6.src = "img/Stad.svg"
    } else if (event.target.id === "sterren"){
        canvas7.src = "img/Sterren.svg"
    } else if (event.target.id === "water"){
        canvas8.src = "img/Water.svg"
    } else if (event.target.id === "wolken"){
        canvas9.src = "img/Wolken.svg"
    } else if (event.target.id === "zon"){
        canvas10.src = "img/Zon.svg"
    }
} 

//*

// Hulp met reset button van: https://chatgpt.com/share/68a7ca38-f9af-4c91-9868-c566031d799e 

function herlaadpagina(){
    location.reload()
}

// Hulp met audio: https://chatgpt.com/share/52dac5b9-cc2e-4870-82fb-da7e31acc892

buttons.forEach(button => {
    button.addEventListener("click", function(event) {
        Knop(event);
        Geluid(event);
    });
});

knoppen.addEventListener('click', Knop)

document.getElementById("opnieuw").addEventListener ('click', herlaadpagina)