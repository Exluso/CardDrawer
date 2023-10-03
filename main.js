import { msg, Deck} from "/scripts/deck.js";
import { Helpers } from "/scripts/helpers.js";

document.addEventListener("DOMContentLoaded", (event) =>{
    console.log("DOM LOADED")

    let deck = new Deck();
    console.log(deck.cards)

    const drawBut = document.querySelector("#drawBut")
    drawBut.addEventListener("click", drawCard);
    drawBut.deck = deck

});

function drawCard(event) {
    let curDeck = event.currentTarget.deck.cards
    if (curDeck.length > 0){
    document.querySelector(".slot>span").innerHTML  = curDeck.shift()
    } else {
        window.alert("Run out of cards")
    }
}

/**
 * Merely used for testing events or other process
 */
function testIt(){
    console.log("Test successful!")
}