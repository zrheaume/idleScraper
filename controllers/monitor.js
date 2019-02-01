module.exports = function (io) {
    io.on("connect", function (socket) {
        console.log(`A user has connected at socket ${socket.id}`)
        socket.on("user", (msg) => {
            console.log(msg)
        })
        socket.on("disconnect", () => {
            console.log(`The user on socket ${socket.id} has disconnected`)
        })
    })
}