const fs = require("fs");
const path = require("path");

const data = "some data here...";
const filePath = path.join(__dirname, "data.txt");

fs.writeFile(filePath, data, () => {
    console.log("success!");
});

fs.readFile(filePath, "utf-8", (data) => {
    console.log(data);
})