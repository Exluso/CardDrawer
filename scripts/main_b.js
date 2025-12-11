document.addEventListener("DOMContentLoaded", (event) =>{
    console.log("DOM LOADED")

    let game = new Game();
    window.game = game; //makes it accessible from the console! :O

    const refreshBut = document.querySelector("#refresh"); //debug box
    const logButton = document.querySelector("#logGame"); //debug box 
    const drawButtons = document.querySelectorAll(".drawButton");
    const discardCardElems = document.querySelectorAll(".discardCard");
    const discardLineElems = document.querySelectorAll(".discardLine");
    const discardBoardBut = document.querySelector("#discardBoardBut");
    const downloadBut = document.querySelector("#exportStatus");
    const loadStatusFileBut =  document.querySelector("#loadGameStatusFile");
    const invisfileSelector = document.querySelector("#fileSelector");
    const resetButton = document.querySelector("#resetBut");
    const dialCloseBut = document.querySelector("#closeBut");
    
    dialCloseBut.addEventListener("click", hideDialog);
    refreshBut.addEventListener("click", debugRenderBoard);
    drawButtons.forEach( function(e) {
        e.addEventListener("click", drawCard);
    });
    discardCardElems.forEach( function(e) {
        e.addEventListener("click", discardCard)
    });
    discardLineElems.forEach( function(e) {
        e.addEventListener("click", discardLine);
    });
    discardBoardBut.addEventListener("click", discardBoard);
    downloadBut.addEventListener("click", () => exportStatus(game));
    loadStatusFileBut.addEventListener("click", () => document.querySelector("#fileSelector").click());
    invisfileSelector.addEventListener("change", () => importStatusFile(game));
    resetButton.addEventListener("click", () => {
            showDialog(game.msg.resetConfirmation, {
                msg: game.msg.reset_button,
                cb: resetGame,
                game: game,
            })
    })
    logButton.addEventListener("click", debugLogGame)
});

// #region UI functions
/**
 * Begins the flow to draw a card
 * @param {event} event that triggered the listener
 */
function drawCard(event) {
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
    let targetLine = event.target.closest(".line-side-wrapper").dataset.line
    if (game.board[targetLine].length > 0) game.discardCard(targetLine);
    renderBoard(game);
}

/**
 * Begins the flow to remove all cards in a card line.
 * @param {event} event that triggers the function
 */
function discardLine(event) {
    const targetLine = event.target.closest(".line-side-wrapper").dataset.line
    game.discardLine(targetLine);
    renderBoard(game);    
}

/**
 * starts the flow to discard all the cards on the board
 * @param {*} event that triggers the listener
 */
function discardBoard(event) {
    game.discardAllCards();
    renderBoard(game);

}

/**
 * returns the game to the original status and shuffles the deck
 * @param {event} event that triggered the function
 */
function resetGame(event){
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
 * Downloads a .txt file containing a JSON string containing
 * the current game object status.
 * @param {Game class instance} game the current game
 */
function exportStatus(game){
    const gameData = JSON.stringify(game);
    const invisHTML = document.createElement('a');

    const blobContainer = new Blob([gameData], {type: "text/plain"} );
    const blobUrl = window.URL.createObjectURL(blobContainer);

    invisHTML.setAttribute("href", blobUrl);
    invisHTML.setAttribute("download", "Card Drawer Save.txt");
    invisHTML.click();

    window.URL.revokeObjectURL(blobUrl);

}

/**
 * Imports a txt file with a game object in a specific status.
 * @param {Game class} game the current game instance (not the one being imported!)
 */
function importStatusFile(game){
    const fileToImport = document.querySelector("#fileSelector").files[0];
    if (fileToImport == "") return;

    const reader = new FileReader();
    let gameObjToImport;

    reader.onload  = (e) => { 
        const status = reader.result
        gameObjToImport = JSON.parse(reader.result);
        game.importStatus(gameObjToImport);
        renderBoard(game);
    }
    
    reader.readAsText(fileToImport);
    document.querySelector.value=""

}

// #endregion

// #region Rendering functions
/**
 * Renders the board, ie the rows where cards are revealed
 */
function renderBoard(game){
    const lines = Object.keys(game.board);

    for (let curLine of lines ) {
        let lineId = Helpers.convertLineToHtmlId(curLine);
        const line_elem = document.querySelector(lineId);
        let newSlot;

        //Remove line elements
        while (line_elem.firstChild) {
            line_elem.removeChild(line_elem.firstChild);
        }

        if (!game.board[curLine].length) continue

        //Add line elements
        for (let card = 0; card < game.board[curLine].length; card++) {
            curCard = game.board[curLine][card] 
            newSlot = document.createElement("div");
            newSlot.classList.add("slot", "card-front", curCard.colorClass);
            newSlot.innerHTML = curCard.appearence;
            newSlot.setAttribute("title", `${curCard.value} of ${curCard.suit}`);
            line_elem.appendChild(newSlot);
        }
        //game.logMe();
    }
    renderDiscardPile(game);

    //reset the fileSelector in case there is any value.
    document.querySelector("fileSelector").value = "";
}
/**
 * renders the card on top of the discard pile
 * @param {Game Object} game 
 */
function renderDiscardPile(game) {
    let discardPileElem = document.querySelector("#resetBut");
    let topCard; //the card that goes on top of the discarpile
    if (game.discardPile.length > 0) {
        topCard = game.discardPile[game.discardPile.length - 1];
    } else {
        topCard = { appearence: "D", colorClass:"card-back"};
    }

    discardPileElem.innerHTML = topCard.appearence;
    discardPileElem.classList.remove("card-back", "red-card", "black-card")
    discardPileElem.classList.add(topCard.colorClass);
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


// #endregion

// #region Debug Functions
/**
 * Merely used for testing events or other process
 */
function testIt(){
    console.log("test it")
    debugElem = document.querySelector(".debug")
    console.log("DEBUG | GIA | debugelem",debugElem) //@debug 
    debugElem.innerHTML= a;
}

/**
 * force the rendering of the board for debug purposese
 */
function debugRenderBoard(){
    renderBoard(game);
}

function debugLogGame(event){
    game.logMe();
}

// #endregion