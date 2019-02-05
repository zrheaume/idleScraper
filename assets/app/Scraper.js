const axios = require("axios");
const htmlparser2 = require("htmlparser2")
const cheerio = require("cheerio");
const db = require("../../models/index")
const Article = db.Article


function pull( $ ) {
    results = []
    $("div.teaser").each((i, element) => {
        let params = {}
        params.title = $(element).find("a").attr("title")
        params.link = $(element).find("a").attr("href")
        if (params.title !== undefined && params.title !== null) {
            results.push(params)
        }
    });
    return results
}

async function scrape() {
    try {
        let target = "https://www.seacoastonline.com/"
        let doc
        let dom
        let $
        console.log("Loading HTML => axios")
        let res = await axios.get(target)
        doc = res.data
        console.log("Loading DOM => htmlparser2")
        dom = await htmlparser2.parseDOM(doc)
        console.log("Loading manipulator => cheerio")
        $ = await cheerio.load(dom)
        console.log("Resolving headlines => cheerio")
        let content = pull($)
        console.log("Resolved headlines => cheerio")
        return Promise.resolve(content)
    }
    catch (err) {
        return Promise.reject(err)
    } finally {
        
    }
}
module.exports = scrape
