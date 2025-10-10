const fs = require("fs/promises");
const path = require("path");

const data = "some data here...";
const filePath = path.join(__dirname, "data.txt");

fs.writeFile(filePath, data, () => {
    console.log("success!");
});

// fs.readFile(filePath, "utf-8", (data, err) => {
//     if (err) {
//         console.log("something went wrong")
//         return;
//     }

//     console.log(data);
// })

fs.readFile(filePath, "utf-8")
    .then((data) => {
        console.log(data);
    })
    .catch(err=>console.log(err))