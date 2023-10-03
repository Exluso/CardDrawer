import { Helpers } from "/scripts/helpers.js"
export let msg ="bello!";
export class Deck {

    constructor(){
        let pool = [];
        for (let step = 0; step < 10; step++){
            pool[step] = step + 1;
        }

        console.log("pool", pool)
        let top = 10, picked
        this.cards = [];
        for (let card = 0; card < top; card++){
            picked = Helpers.randBetween(0, pool.length)
            console.log(picked, pool[picked])
            this.cards[card] = pool[picked];
            pool.splice(picked,1)
            console.log("pool", pool)
        }

    }
}