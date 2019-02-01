const SERVE = require("./serve")

try {
    SERVE()
} catch(err){
    console.log(err.stack)
}