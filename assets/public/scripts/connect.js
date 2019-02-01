var socket = io();

$(function(){
    socket.on("connect", () => {
        console.log("Connection established")
    })
    var socketID = socket.io.engine.id
    socket.emit("user", { socket: socketID, screen: { x: $(window).width(), y: $(window).height() } })
    socket.on("toScreen", (msg) => {
    })
})