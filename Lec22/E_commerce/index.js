require("dotenv").config();
const express = require("express");

const app = express();

const PORT = process.env.PORT || 8080;

const connectDB = require("./config/db");

connectDB();

// const userRoutes = require("./routes/user.routes");
// const productRoutes = require("./routes/product.routes");
// app.use(userRoutes);
// app.use(productRoutes);

const router = require("./routes/routes");
app.use("/api", router);

//middleware 
app.use(express.json())

app.listen(PORT, () => {
    console.log("Server is up at port", PORT);
})