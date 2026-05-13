const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();

const app = express();

app.use(express.json());


// Routes
const userRoutes = require("./routes/userRoutes.js");
app.use(userRoutes);


// MongoDB Connection
mongoose.connect(process.env.MONGO_URL)
.then(() => console.log("MongoDB Connected"))
.catch((err) => console.log(err));


// Server
app.listen(process.env.PORT, () => {
    console.log(`Server Running on Port ${process.env.PORT}`);
});
