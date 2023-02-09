console.log("BOOM!");

const LATOGRIGLIA = 10

let numeroCelle = LATOGRIGLIA * LATOGRIGLIA

// Oggi concentriamoci solamente sulla creazione della griglia:
// l’utente clicca su un pulsante PLAY  per generare la una griglia quadrata 10 * 10
// ogni casella deve contenere il numero corrispondente a partire da 1 fino a 100
//  2.  Ogni volta che l’utente clicca su una delle caselle della griglia stampiamo in console il numero della casella cliccata (se ci riusciamo, in caso contrario stampiamo un messaggio generico)
// BONUS
// quando una casella viene cliccata oltre al console log del numero aggiungiamole una classe che ne cambi il color di background

const start = document.getElementById("play");
start.addEventListener ("click", 

function() {
    var element = document.getElementById("play");
    element.classList.add("hide");
    console.log(numeroCelle)

    const griglia = document.querySelector(".griglia");

    for (let i = 0; i < numeroCelle ; i++){

    
        let creoCella = document.createElement("div")
        griglia.append(creoCella)
        creoCella.classList.add("cella")
        creoCella.append(i)
        //console.log(creoCella)
    
    
    }





})



