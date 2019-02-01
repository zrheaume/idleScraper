module.exports = function () { 
    const express = require("express")
    var app = express()

    // Tie express app to http server
    const http = require("http").Server(app)

    // Tie socket.io to http server
    const io = require("socket.io")(http)

    var PORT = process.env.PORT || 8080

    require("./config/middleware")(app)
    require("./routes/htmlRoutes")(app)
    require("./controllers/monitor")(io);
    

    http.listen(PORT, function () { 
        console.log(`Server listening on port ${PORT}`)
    });
};