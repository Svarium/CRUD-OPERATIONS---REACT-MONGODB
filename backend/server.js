const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const cors = require("cors");
const routes = require("./routes/TaskRouter");


const app = express();

const PORT = process.env.PORT | 5000;

app.use(express.json());
app.use(cors());

app.listen(PORT, ()=> console.log("Listening at port:" + PORT))

mongoose.connect(process.env.MONGO_URI)
.then(() => console.log("Mongo db conected!!"))
.catch((error) => console.log(error));

app.use("/api",routes);
