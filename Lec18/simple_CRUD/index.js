const express = require("express");
const app = express();
const PORT = 5000;
const products = require("./product");
const body_parser = require("body-parser");

app.listen(PORT, () => {
    console.log("Server is active at port", PORT);
});

