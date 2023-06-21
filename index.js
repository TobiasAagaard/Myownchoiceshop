import express from 'express';
import dotenv from 'dotenv';
import path from 'path'

dotenv.config()

const app = express();

const PORT = process.env.PORT

app.get("/", (req, res) => (
    res.send('velkommen')
))

app.listen(4000, () => {
    console.log(`This server runs on http://localhost:${PORT} `)
});