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
}
