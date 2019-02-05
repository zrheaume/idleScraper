let scrape = require("../assets/app/Scraper")

module.exports = function (app) {
    app.get("/", (req, res) => {
        scrape()
            .then((results) => {
                res.render("scraped", { result: results })
            })
            .catch((err) => {
                res.send(err)
            })
    });
    app.get("/scraped", (req, res) => {
        scrape()
            .then((results) => {
                res.render("scraped", { result: results })
            })
            .catch((err) => {
                res.send(err)
            })
    })

}