class Deck {

    constructor(){
        this.reset()
    }

    /**Creates the base pools of card of the deck */
    createPool(){
        let pool = [];
        for (let step = 0; step < 10; step++){
            pool[step] = step + 1;
        }

        return pool
    }

    /**Shuffles the card in the deck in a random order */
    reset() {
        let pool = this.createPool()
        let top = pool.length, picked

        this.cards = [];
        for (let card = 0; card < top; card++){
            picked = Helpers.randBetween(0, pool.length)
            this.cards[card] = pool[picked];
            pool.splice(picked, 1)
        }
    }
}

class Game {

    constructor() {
        this.deck = new Deck()
        this.board = []
        this.discardPile = []
    }

    drawCard(){
        console.log("GIA: this is game.drawCard");
        let targetCard = this.deck.cards.pop();
        this.board.push(targetCard);

        return targetCard;
    }

    discardCard(){
        console.log("GIA: this is game.discardCard");
        let targetCard = this.board.pop();
        this.discardPile.push(targetCard);

    }

    discardAllCards(){
        console.log("GIA: this is game.discardAllCards");
        for ( let c = 0; c = this.board.length; c++ ){
            this.discardCard();
        }

    }

    logMe(){
        console.log("game deck cards:", this.deck.cards);
        console.log("game.board:", this.board);
        console.log("game.discard:", this.discardPile);
    }
}

class Helpers {
    static randBetween(min, max) {
        
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min) + min)
        
    }
}

document.addEventListener("DOMContentLoaded", (event) =>{
    console.log("DOM LOADED")

    let game = new Game();
    window.game = game; //makes it accessible from the console! :O

    const drawBut = document.querySelector("#drawBut")
    const discardBoardBut = document.querySelector("#discardBoardBut")
    const resetButton = document.querySelector("#resetBut")
    const closeBut = document.querySelector("#closeBut")
    
    closeBut.addEventListener("click", () => dialog.close());
    drawBut.addEventListener("click", drawCard);
    drawBut.game = game;

    discardBoardBut.addEventListener("click", discardBoard);
    discardBoardBut.game = game;

    resetButton.addEventListener("click", resetDeck)
    resetButton.game = game;

    // @Debug
    const debugBut = document.querySelector("#debugBut")
    debugBut.addEventListener("click", () => { showDialog("Dialog Test")})

});

function drawCard(event) {
    let game = event.currentTarget.game
    let curDeck = game.deck.cards
    if (curDeck.length > 0){
        game.drawCard();
        pageRefresh(game);
    } else {
        showDialog("Ran out of cards.")
    }
}

function discardBoard(event) {
    let game = event.currentTarget.game;
    game.discardAllCards();
    pageRefresh(game);

}

function resetDeck(event){
    const game = event.currentTarget.game;
    game.deck.reset();
    game.board = [];
    game.discardPile = [];
    pageRefresh(game);

}

function pageRefresh(game){

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

    game.logMe()
        
}

function showDialog(msg){
    document.querySelector(".in-dialog").innerText= msg
    dialog.showModal() //dialog is a HTML element with Id
}

/**
 * Merely used for testing events or other process
 */
function testIt(){
    console.log("test it")
}

//main_b.js end