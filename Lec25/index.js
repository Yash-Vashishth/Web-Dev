const PORT = 8000;
const express = require("express");
const { createServer } = require("http");
const { Server: socketServer } = require("socket.io");

const app = express();
const httpServer = createServer(app);
const io = new socketServer(httpServer, {
    cors: {
        origin: "*"                     
    }
});

app.use(express.static("public"))

//two commands necessary ( on-listening for input ) and ( emit - for sending data )
io.on("connection", (socket) => {       //connection is a predefined event
    console.log("server created at ", socket.id);

    socket.on('message', (data) => {
        console.log(data);
        socket.emit("message", data);
    })
})

httpServer.listen(PORT, () => {
    console.log("Server is running at ", PORT);
})