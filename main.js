class Deck {

    constructor(){
        this.reset()
    }

    /**Creates the base pools of card of the deck */
    createPool(){
        let pool = [
            {
                suit: "Hearts",
                value: 1,
                location: "deck",
                position: "",
                colorClass: "red-card",
                appearence: "&#x1F0B1;"
            },
            {
                suit: "Hearts",
                value: 2,
                location: "deck",
                position: "",
                colorClass: "red-card",
                appearence: "&#x1F0B2;"
            },
            {
                suit: "Hearts",
                value: 3,
                location: "deck",
                position: "",
                colorClass: "red-card",
                appearence: "&#x1F0B3;"
            },
            {
                suit: "Hearts",
                value: 4,
                location: "deck",
                position: "",
                colorClass: "red-card",
                appearence: "&#x1F0B4;"
            },
            {
                suit: "Hearts",
                value: 5,
                location: "deck",
                position: "",
                colorClass: "red-card",
                appearence: "&#x1F0B5;"
            },
            {
                suit: "Hearts",
                value: 6,
                location: "deck",
                position: "",
                colorClass: "red-card",
                appearence: "&#x1F0B6;"
            },
            {
                suit: "Hearts",
                value: 7,
                location: "deck",
                position: "",
                colorClass: "red-card",
                appearence: "&#x1F0B7;"
            },
            {
                suit: "Hearts",
                value: 8,
                location: "deck",
                position: "",
                colorClass: "red-card",
                appearence: "&#x1F0B8;"
            },
            {
                suit: "Hearts",
                value: 9,
                location: "deck",
                position: "",
                colorClass: "red-card",
                appearence: "&#x1F0B9;"
            },
            {
                suit: "Hearts",
                value: 10,
                location: "deck",
                position: "",
                colorClass: "red-card",
                appearence: "&#x1F0BA;"
            },
            {
                suit: "Hearts",
                value: 11,
                location: "deck",
                position: "",
                colorClass: "red-card",
                appearence: "&#x1F0BB;"
            },
            {
                suit: "Hearts",
                value: 12,
                location: "deck",
                position: "",
                colorClass: "red-card",
                appearence: "&#x1F0BC;"
            },
            {
                suit: "Hearts",
                value: 13,
                location: "deck",
                position: "",
                colorClass: "red-card",
                appearence: "&#x1F0BD;"
            },
            {
                suit: "Diamonds",
                value: 1,
                location: "deck",
                position: "",
                colorClass: "red-card",
                appearence: "&#x1F0C1;"
            },
            {
                suit: "Diamonds",
                value: 2,
                location: "deck",
                position: "",
                colorClass: "red-card",
                appearence: "&#x1F0C2;"
            },
            {
                suit: "Diamonds",
                value: 3,
                location: "deck",
                position: "",
                colorClass: "red-card",
                appearence: "&#x1F0C3;"
            },
            {
                suit: "Diamonds",
                value: 4,
                location: "deck",
                position: "",
                colorClass: "red-card",
                appearence: "&#x1F0C4;"
            },
            {
                suit: "Diamonds",
                value: 5,
                location: "deck",
                position: "",
                colorClass: "red-card",
                appearence: "&#x1F0C5;"
            },
            {
                suit: "Diamonds",
                value: 6,
                location: "deck",
                position: "",
                colorClass: "red-card",
                appearence: "&#x1F0C6;"
            },
            {
                suit: "Diamonds",
                value: 7,
                location: "deck",
                position: "",
                colorClass: "red-card",
                appearence: "&#x1F0C7;"
            },
            {
                suit: "Diamonds",
                value: 8,
                location: "deck",
                position: "",
                colorClass: "red-card",
                appearence: "&#x1F0C8;"
            },
            {
                suit: "Diamonds",
                value: 9,
                location: "deck",
                position: "",
                colorClass: "red-card",
                appearence: "&#x1F0C9;"
            },
            {
                suit: "Diamonds",
                value: 10,
                location: "deck",
                position: "",
                colorClass: "red-card",
                appearence: "&#x1F0CA;"
            },
            {
                suit: "Diamonds",
                value: 11,
                location: "deck",
                position: "",
                colorClass: "red-card",
                appearence: "&#x1F0CB;"
            },
            {
                suit: "Diamonds",
                value: 12,
                location: "deck",
                position: "",
                colorClass: "red-card",
                appearence: "&#x1F0CC;"
            },
            {
                suit: "Diamonds",
                value: 13,
                location: "deck",
                position: "",
                colorClass: "red-card",
                appearence: "&#x1F0CD;"
            },
            {
                suit: "Clubs",
                value: 1,
                location: "deck",
                position: "",
                colorClass: "black-card",
                appearence: "&#x1F0D1;"
            },
            {
                suit: "Clubs",
                value: 2,
                location: "deck",
                position: "",
                colorClass: "black-card",
                appearence: "&#x1F0D2;"
            },
            {
                suit: "Clubs",
                value: 3,
                location: "deck",
                position: "",
                colorClass: "black-card",
                appearence: "&#x1F0D3;"
            },
            {
                suit: "Clubs",
                value: 4,
                location: "deck",
                position: "",
                colorClass: "black-card",
                appearence: "&#x1F0D4;"
            },
            {
                suit: "Clubs",
                value: 5,
                location: "deck",
                position: "",
                colorClass: "black-card",
                appearence: "&#x1F0D5;"
            },
            {
                suit: "Clubs",
                value: 6,
                location: "deck",
                position: "",
                colorClass: "black-card",
                appearence: "&#x1F0D6;"
            },
            {
                suit: "Clubs",
                value: 7,
                location: "deck",
                position: "",
                colorClass: "black-card",
                appearence: "&#x1F0D7;"
            },
            {
                suit: "Clubs",
                value: 8,
                location: "deck",
                position: "",
                colorClass: "black-card",
                appearence: "&#x1F0D8;"
            },
            {
                suit: "Clubs",
                value: 9,
                location: "deck",
                position: "",
                colorClass: "black-card",
                appearence: "&#x1F0D9;"
            },
            {
                suit: "Clubs",
                value: 10,
                location: "deck",
                position: "",
                colorClass: "black-card",
                appearence: "&#x1F0DA;"
            },
            {
                suit: "Clubs",
                value: 11,
                location: "deck",
                position: "",
                colorClass: "black-card",
                appearence: "&#x1F0DB;"
            },
            {
                suit: "Clubs",
                value: 12,
                location: "deck",
                position: "",
                colorClass: "black-card",
                appearence: "&#x1F0DC;"
            },
            {
                suit: "Clubs",
                value: 13,
                location: "deck",
                position: "",
                colorClass: "black-card",
                appearence: "&#x1F0DD;"
            },
            {
                suit: "Spades",
                value: 1,
                location: "deck",
                position: "",
                colorClass: "black-card",
                appearence: "&#x1F0A1;"
            },
            {
                suit: "Spades",
                value: 2,
                location: "deck",
                position: "",
                colorClass: "black-card",
                appearence: "&#x1F0A2;"
            },
            {
                suit: "Spades",
                value: 3,
                location: "deck",
                position: "",
                colorClass: "black-card",
                appearence: "&#x1F0A3;"
            },
            {
                suit: "Spades",
                value: 4,
                location: "deck",
                position: "",
                colorClass: "black-card",
                appearence: "&#x1F0A4;"
            },
            {
                suit: "Spades",
                value: 5,
                location: "deck",
                position: "",
                colorClass: "black-card",
                appearence: "&#x1F0A5;"
            },
            {
                suit: "Spades",
                value: 6,
                location: "deck",
                position: "",
                colorClass: "black-card",
                appearence: "&#x1F0A6;"
            },
            {
                suit: "Spades",
                value: 7,
                location: "deck",
                position: "",
                colorClass: "black-card",
                appearence: "&#x1F0A7;"
            },
            {
                suit: "Spades",
                value: 8,
                location: "deck",
                position: "",
                colorClass: "black-card",
                appearence: "&#x1F0A8;"
            },
            {
                suit: "Spades",
                value: 9,
                location: "deck",
                position: "",
                colorClass: "black-card",
                appearence: "&#x1F0A9;"
            },
            {
                suit: "Spades",
                value: 10,
                location: "deck",
                position: "",
                colorClass: "black-card",
                appearence: "&#x1F0AA;"
            },
            {
                suit: "Spades",
                value: 11,
                location: "deck",
                position: "",
                colorClass: "black-card",
                appearence: "&#x1F0AB;"
            },
            {
                suit: "Spades",
                value: 12,
                location: "deck",
                position: "",
                colorClass: "black-card",
                appearence: "&#x1F0AC;"
            },
            {
                suit: "Spades",
                value: 13,
                location: "deck",
                position: "",
                colorClass: "black-card",
                appearence: "&#x1F0AD;"
            },
        ];

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
    }

    /**
     * Discards all cards from a card line.
     * @param {string} targetLine matching the name of a board line.
     */
    discardLine(targetLine){
        for (let card = 0; card = this.board[targetLine].length; card++) {
            this.discardCard(targetLine);
        };
    }

    /**
     * Removes the cards from all lines of the board
     */
    discardAllCards(){
        //console.log("GIA: this is game.discardAllCards");
        const lines = Object.keys(this.board);
        for (let curLine of lines) {
            this.discardLine(curLine);
        }
    }

    /**
     * logs the current status of the game. For debug.
     */
    logMe(){
        console.log("DEBUG | GAME STATUS | ") 
        console.log("game deck cards:", this.deck.cards);
        console.log("game.board:", this.board);
        console.log("game.discardPile:", this.discardPile);
    }

    /**
     * Import the status of a previous Game, ie loads a save file!
     * @param {game object} gameStatus previously saved
     */
    importStatus(gameStatus){
        console.log("DEBUG | GIA | Game.ImportStatus")
        this.deck.cards = gameStatus.deck.cards;
        this.board = gameStatus.board;
        this.discardPile = gameStatus.discardPile;
    }


    //#region @overrides & Interfaces

    /**
     * Uses the game object data from the Game class to generate a JSON
     * @returns JSON of the game object
     */
    toJSON(){
        const gameJSON = {};
        gameJSON.deck = {};
        gameJSON.deck.cards = this.deck.cards;
        gameJSON.board = this.board;
        gameJSON.discardPile = this.discardPile;

        return gameJSON
    }

    //#endregion 

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