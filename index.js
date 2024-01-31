import express from "express";
import dotenv from "dotenv";
import sequelize from "./Config/sequelize.config.js";

const app = express();
dotenv.config();

const PORT = process.env.PORT || 4242;

app.get("/", (req, res) => {
    res.send("Welcome to my shop API");
});


app.listen(PORT, () => {
    console.log(`The server is useing this port ${PORT} and runs: www.localhost:${PORT} `);
});