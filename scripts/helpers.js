export class Helpers {
    static randBetween(min, max) {
        console.log("randbetween")
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min) + min)
        
    }
}