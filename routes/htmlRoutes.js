let scrape = require("../assets/app/Scraper")
let db = require("../models/index")

module.exports = function (app) {
    app.get("/", (req, res) => {
        db.Article.find().then((saved) => {
            scrape()
                .then((results) => {
                    res.render("scraped", {
                        result: {
                            scraped: results,
                            saved: saved
                    } })
                })
                .catch((err) => {
                    res.send(err)
                })
        })
    });
}