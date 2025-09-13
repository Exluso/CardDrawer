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
        //console.log("DEBUG | GIA | ConvertLinestoHtmlID") //@debug
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
