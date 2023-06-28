import express from 'express';
import dotenv from 'dotenv';
import path from 'path'

// routers imports
import InitRouter from './Routes/init.router.js';


dotenv.config()

const app = express();

app.use(express.urlencoded({ extended: true}));

const PORT = process.env.PORT || 4000

app.get("/", (req, res) => (
    res.send('velkommen')
))

app.use(InitRouter)

app.listen(PORT, () => {
    console.log(`This server runs on http://localhost:${PORT} `)
});