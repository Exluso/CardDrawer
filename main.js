import { msg, Deck} from "/scripts/deck.js";
import { Game } from "/scripts/game.js";
import { Helpers } from "/scripts/helpers.js";

document.addEventListener("DOMContentLoaded", (event) =>{
    console.log("DOM LOADED")

    let game = new Game();
    console.log("game.deck.cards:", game.deck.cards)

    window.game = game; //makes it accessible from the console! :O

    const drawBut = document.querySelector("#drawBut")
    drawBut.addEventListener("click", drawCard);
    drawBut.deck = game.deck

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