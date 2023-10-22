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
    const debugButton = document.querySelector("#debugBut")

    drawBut.addEventListener("click", drawCard);
    drawBut.game = game;

    discardBoardBut.addEventListener("click", discardBoard);
    discardBoardBut.game = game;

    debugButton.addEventListener("click", pageRefresh)
    debugButton.game = game;
});

function drawCard(event) {
    let game = event.currentTarget.game
    let curDeck = game.deck.cards
    if (curDeck.length > 0){
        game.drawCard();
        pageRefresh(game);
    } else {
        window.alert("Run out of cards")
    }
}

function discardBoard(event) {
    let game = event.currentTarget.game;
    game.discardAllCards();
    pageRefresh(game);

}

function pageRefresh(game){

    console.debug(game)
    const board_elem = document.querySelector("#board");
    let newSlot;

    //Remove elements
    while (board_elem.firstChild) {
        board_elem.removeChild(board_elem.firstChild);
    }

    if (!game.board.length) return

    //Add new elements
    for (let card = 0; card < game.board.length; card++) {
        newSlot = document.createElement("div");
        newSlot.classList.add("slot");
        newSlot.innerHTML = game.board[card];
        board_elem.appendChild(newSlot);
        
    }
    
}

/**
 * Merely used for testing events or other process
 */
function testIt(){
    console.log("Test successful!")
}