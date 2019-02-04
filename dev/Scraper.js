const axios = require("axios");
const cheerio = require("cheerio");
const TARGET = String(process.argv[2]);

class Scraper {
    log() {
        console.log(this)
    }
    async getDocument() {
        try {
            let _res = await axios.get(this.target)
            this.doc = _res.data
            this.$ = cheerio.load(this.doc)
            this.log()
        } catch (err) {
            console.log(err)
            return err
        }
    }
    constructor( options ) {
        this.target = options.target
        this.getDocument()
    }
}

let options = {
    target: TARGET
}

let scraper = new Scraper(options)