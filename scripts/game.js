class Game {

    constructor() {
        this.deck = new Deck()
        this.board = []
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
        this.board.push(targetCard);

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
}
