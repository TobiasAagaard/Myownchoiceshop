import express from 'express';
import dotenv from 'dotenv';
import path from 'path'


const app = express();

app.get("/", (req, res) => (
    res.send('velkommen')
))

app.listen(4000, () => {
    console.log('The server is running on http://localhost:4000')
});