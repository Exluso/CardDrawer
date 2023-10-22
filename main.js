import { msg, Deck} from "/scripts/deck.js";
import { Game } from "/scripts/game.js";
import { Helpers } from "/scripts/helpers.js";

document.addEventListener("DOMContentLoaded", (event) =>{
    console.log("DOM LOADED")

    let game = new Game();
    console.log("game.deck.cards:", game.deck.cards)

    window.game = game; //makes it accessible from the console! :O

    const drawBut = document.querySelector("#drawBut")
    const discardBoardBut = document.querySelector("#discardBoardBut")

    drawBut.addEventListener("click", drawCard);
    drawBut.game = game;

    discardBoardBut.addEventListener("click", discardBoard);
    discardBoardBut.game = game;

});

function drawCard(event) {
    let game = event.currentTarget.game
    let curDeck = game.deck.cards
    if (curDeck.length > 0){
    document.querySelector(".slot>span").innerHTML  = game.drawCard()
    } else {
        window.alert("Run out of cards")
    }
}

function discardBoard(event) {
    let game = event.currentTarget.game

    game.discardAllCards()

}

/**
 * Merely used for testing events or other process
 */
function testIt(){
    console.log("Test successful!")
}