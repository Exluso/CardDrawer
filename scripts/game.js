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
