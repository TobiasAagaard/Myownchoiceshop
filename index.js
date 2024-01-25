import express from "express";
import dotenv from "dotenv";

const app = express();
dotenv.config();

const PORT = process.env.PORT || 4242;

app.get("/", (req, res) => {
    res.send("Welcome to my shop API");
});


app.listen(PORT, () => {
    console.log(`The server use this port ${PORT} and runs: localhost:${PORT} `);
});