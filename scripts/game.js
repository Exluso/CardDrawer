import { Deck } from "/scripts/deck.js";

export class Game {

    constructor() {
        this.deck = new Deck()
        this.board = []
        this.discardPile = []

    }

    drawCard(){
        console.log("GIA: this is game.drawCard")
    }

    logMe(){
        console.log("game deck:", this.deck);
        console.log("game.board:", this.board);
        console.log("game.discard:", this.discardPile)
    }
}