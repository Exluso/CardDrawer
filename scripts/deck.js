import { Helpers } from "/scripts/helpers.js"
export let msg ="bello!";
export class Deck {

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
            //console.debug(picked, pool[picked], "top:", top) // @debug
            this.cards[card] = pool[picked];
            pool.splice(picked, 1)
            //console.log("pool:", pool) 
        }
    }
}