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
            resetConfirmation: "Are you sure you want to shuffle the deck?",
            debugTest: "Debug Test",
        }
    }

    drawCard(){
        console.log("GIA: this is game.drawCard");
        let targetCard = this.deck.cards.pop();
        this.board.mainLine.push(targetCard);

        return targetCard;
    }

    /**
     * Moves the last card of the board to the discard pile.
     */
    discardCard(){
        console.log("GIA: this is game.discardCard");
        console.log("DEBUG | GIA | this:", this) //@debug 
        let targetCard = this.board.pop();
        this.discardPile.push(targetCard);
        renderBoard(game);

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


    async debugfunc(){
            console.log("DEBUG | GIA |DELETE THIS Method ") //@debug 
        let a = "mainLine"
        let res;

        res = await Helpers.convertLineToHtmlId(a);
        console.log("DEBUG | GIA | res debugfunc", res) //@debug 
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

    const drawBut = document.querySelector("#drawBut");
    const discardCardElems = document.querySelectorAll(".discardCard");
    const discardBoardBut = document.querySelector("#discardBoardBut");
    const resetButton = document.querySelector("#resetBut");
    const dialCloseBut = document.querySelector("#closeBut");
    
    dialCloseBut.addEventListener("click", hideDialog);

    drawBut.addEventListener("click", drawCard);
    drawBut.game = game;

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
    console.log("DEBUG | GIA | Main drawCard") //@debug
    console.log("DEBUG | GIA | event:", event) //@debug
    let game = event.currentTarget.game
    let curDeck = game.deck.cards
    if (curDeck.length > 0){
        game.drawCard();
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
    console.log("DEBUG | GIA | Main discardCard") //@debug 
    console.log("DEBUG | GIA | event:", event) //@debug
    game.discardCard();
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

function resetGame(event){
    const game = event.currentTarget.game;
    game.deck.reset();
    game.board = [];
    game.discardPile = [];
    renderBoard(game);
    hideDialog();

}

/**
 * Renders the board, ie the rows where cards are revealed
 */
function renderBoard(game){
    const lines = Object.keys(game.board);
    console.log("DEBUG | GIA | renderBoard lines", lines) //@debug 

    for (let curLine of lines ) {
        let lineId = Helpers.convertLineToHtmlId(curLine);
        const board_elem = document.querySelector(lineId);
        let newSlot;

        //Remove line elements
        while (board_elem.firstChild) {
            board_elem.removeChild(board_elem.firstChild);
        }

        if (!game.board[curLine].length) return

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
    dialog.insertBefore(butt_1, CloseBut)

    butt_1.innerText = button1.msg;
    butt_1.addEventListener("click", button1.cb);


}

function hideDialog(){
    dialog.close()
    dialog.removeChild(butt_1)
}

/**
 * Merely used for testing events or other process
 */
function testIt(){
    console.log("test it")
}
