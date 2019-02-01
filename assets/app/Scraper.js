const cheerio = require("cheerio")
const axios = require("axios")
module.exports = class Scraper {
    constructor(URL) {
        this.target = URL
    }
    async getDocument() {
        let response = await axios.get(URL)
        this.document = response.data
    }
}