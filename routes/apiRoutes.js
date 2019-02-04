let scrape = require("../assets/app/Scraper")
module.exports = function (app) {
    app.get("/api", function (req, res) {
        res.send("'Idle Scraper API V 0.0.1\n\nUse endpts --\nPOST /scrape/<Target URL>\n?callback ( doc )=>{}\nGET /fetch/<fetch ID>\n'")
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
}