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
        this.board = {
            mainLine: [],
            secondaryLine: []
        },
        this.discardPile = []
        this.msg = {
            reset_button: "Shuffle",
            resetConfirmation: "Are you sure you want to shuffle the entire deck \n and reset the game?",
            debugTest: "Debug Test",
        }
    }
    
    /**
     * draws the top card of the deck, aka pops the last card of the deck.cards Array
     * and displays that card on the targetLine
     * @param {string} targetLine name of the game.board array where to add the card.
     * @returns a card object
     */
    drawCard(targetLine){
        //console.log("GIA: this is game.drawCard");
        let targetCard = this.deck.cards.pop();
        this.board[targetLine].push(targetCard);

        return targetCard;
    }

    /**
     * Moves the last card of a card line to the discard pile.
     * @param {string} targetLine matches the key of a game.board line property
     */
    discardCard(targetLine){
        //console.log("GIA: this is game.discardCard");
        let targetCard = this.board[targetLine].pop();
        this.discardPile.push(targetCard);
        renderBoard(game);

    }

    /**
     * Removes the cards from all lines of the board
     */
    discardAllCards(){
        //console.log("GIA: this is game.discardAllCards");

        const lines = Object.keys(this.board);

        for (let curLine of lines) {
            for ( let card = 0; card = this.board[curLine].length; card++ ){
                this.discardCard(curLine);
            }
        }

    }

    logMe(){
        console.log("DEBUG | GAME STATUS | ") //@debug 
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

    /**
     * converts camelcase to HTML hyphenated ID
     * @param {string} lineName a camelCase property name
     * @returns an hyphenated HTML ID name
     */
    static convertLineToHtmlId(lineName) {
        //console.log("DEBUG | GIA | ConvertLinestoHtmlID") //@debug
        let res = "";
 
        for (let l of lineName) {
            if (/[A-Z]/.test(l)) {
                res = `${res}-` + l.toLowerCase()
            } else {
                res = res + l
            }
        }
        res = "#" + res
        return res
    }
}

document.addEventListener("DOMContentLoaded", (event) =>{
    console.log("DOM LOADED")

    let game = new Game();
    window.game = game; //makes it accessible from the console! :O

    const refreshBut = document.querySelector("#refresh"); //@debug
    const drawButtons = document.querySelectorAll(".drawButton");
    const discardCardElems = document.querySelectorAll(".discardCard");
    const discardBoardBut = document.querySelector("#discardBoardBut"); //@debug
    const logButton = document.querySelector("#logGame"); //@debug 
    const resetButton = document.querySelector("#resetBut");
    const dialCloseBut = document.querySelector("#closeBut");
    
    dialCloseBut.addEventListener("click", hideDialog);
    refreshBut.addEventListener("click", debugRenderBoard);
    drawButtons.forEach( function(e) {
        e.addEventListener("click", drawCard);
        e.game = game;
    })
    discardCardElems.forEach( function(e) {
        e.addEventListener("click", discardCard)
        e.game = game
    })
    discardBoardBut.addEventListener("click", discardBoard);
    discardBoardBut.game = game;

    resetButton.addEventListener("click", () => {
        if (game.board.length > 0) {
            game.discardAllCards();
            renderBoard(game);
        } else {
            showDialog(game.msg.resetConfirmation, {
                msg: game.msg.reset_button,
                cb: resetGame,
                game: game,
            })
        }
    })
    resetButton.game = game;
    logButton.addEventListener("click", debugLogGame)
    logButton.game = game;

    // @Debug
    let resetBut_data = {
        msg: game.msg.reset_button,
        game: game,
        cb: resetGame,
    };

    const debugBut = document.querySelector("#debugBut")
    debugBut.addEventListener("click", () => { 
        showDialog("Dialog Test", resetBut_data)
    })

});

/**
 * Begins the flow to draw a card
 * @param {event} event that triggered the listener
 */
function drawCard(event) {
    //console.log("DEBUG | GIA | Main drawCard") //@debug
    let game = event.currentTarget.game
    let curDeck = game.deck.cards
    if (curDeck.length > 0){
        game.drawCard(event.target.dataset.drawTo);
        renderBoard(game);
    } else {
        showDialog("Ran out of cards.")
    }
}

/**
 * starts the flow to discard the last card of the board mainline
 * @param {*} event that triggered the listener
 */
function discardCard(event) {
    //console.log("DEBUG | GIA | Main discardCard") //@debug 
    let targetLine = event.target.closest(".line-side-wrapper").dataset.line
    game.discardCard(targetLine);
    renderBoard(game);

}

/**
 * starts the flow to discard all the cards on the board
 * @param {*} event that triggers the listener
 */
function discardBoard(event) {
    let game = event.currentTarget.game;
    game.discardAllCards();
    renderBoard(game);

}

/**
 * force the rendering of the board for debug purposese
 */
function debugRenderBoard(){
    renderBoard(game);
}

function resetGame(event){
    const game = event.currentTarget.game;
    game.deck.reset();
    game.board = {
        mainLine: [],
        secondaryLine: []
    };
    game.discardPile = [];
    renderBoard(game);
    hideDialog();

}

/**
 * Renders the board, ie the rows where cards are revealed
 */
function renderBoard(game){
    //console.log("DEBUG | GIA | this is renderBoard") //@debug 
    const lines = Object.keys(game.board);

    for (let curLine of lines ) {
        let lineId = Helpers.convertLineToHtmlId(curLine);
        const board_elem = document.querySelector(lineId);
        let newSlot;

        //Remove line elements
        while (board_elem.firstChild) {
            board_elem.removeChild(board_elem.firstChild);
        }

        if (!game.board[curLine].length) continue

        //Add line elements
        for (let card = 0; card < game.board[curLine].length; card++) {
            newSlot = document.createElement("div");
            newSlot.classList.add("slot", "card-front");
            newSlot.innerHTML = game.board[curLine][card];
            board_elem.appendChild(newSlot);
        }

        game.logMe()
    }  
}

function showDialog(msg, button1 = false){
    document.querySelector(".in-dialog").innerText= msg
    dialog.showModal() //dialog is a HTML element with Id= "dialog"!

    if (!button1) return

    butt_1 = document.createElement("button")
    butt_1.setAttribute("id", "butt_1");
    butt_1.game = button1.game
    dialog.insertBefore(butt_1, closeBut)

    butt_1.innerText = button1.msg;
    butt_1.addEventListener("click", button1.cb);

}

function hideDialog(){
    dialog.close()
    if (dialog.contains(butt_1)) dialog.removeChild(butt_1)
}

function debugLogGame(event){
    let game = event.currentTarget.game;
    game.logMe();
}

/**
 * Merely used for testing events or other process
 */
function testIt(){
    console.log("test it")
}
