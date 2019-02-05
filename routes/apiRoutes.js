let db = require("../models/index")
// Import our scraping function
let scrape = require("../assets/app/Scraper")
// Declare router as exported function to be called on express app
// instance in <../serve.js>
module.exports = function (app) {

    app.get("/api", function (req, res) {
        res.json(
            {"app": "idle-scraper","API": {"version": "0.1.1","endpoints": {"/api/scrape": {"methods": {"GET" : "returns scraped data from seacoast online front page (JSON)"}},"/api/savearticle": {"methods": {"POST" : "post article to save, w/ optional note. returns status report (JSON)"}}}}}
        )
    });
    app.get("/api/scrape", (req, res) => {
        scrape()
            .then((links) => {
                console.log("Promise ~returned~")
                res.send(links)
            })
            .catch((err)=>{
             console.log(err)
            })
    })
    app.post("/api/savearticle/", (req, res) => {
        let content = req.body
        db.Article.create(content)
    })
}