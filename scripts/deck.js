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
