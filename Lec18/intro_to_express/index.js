const express = require("express");
const path = require("path");
const app = express();
const PORT = 5000;


app.listen(PORT, () => {
    console.log("Server is up at port",PORT);
})


//controller function
// "/" is known as endpoint and Path 
app.get("/", (req, res) => {
    res.send("hello there!");
})

app.get("/login", (req, res) => {
    const filePath = path.join(__dirname, 'login.html');
    res.sendFile(filePath);
})