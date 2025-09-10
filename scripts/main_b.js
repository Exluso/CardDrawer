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

function renderBoard(game){

    const board_elem = document.querySelector("#main-line");
    let newSlot;

    //Remove elements
    while (board_elem.firstChild) {
        board_elem.removeChild(board_elem.firstChild);
    }

    if (!game.board.length) return

    //Add new elements
    for (let card = 0; card < game.board.length; card++) {
        newSlot = document.createElement("div");
        newSlot.classList.add("slot", "card-front");
        newSlot.innerHTML = game.board[card];
        board_elem.appendChild(newSlot);
        
    }

    game.logMe()
        
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
