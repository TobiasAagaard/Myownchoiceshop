import express from 'express';
import dotenv from 'dotenv';


const app = express();



app.listen(4000, () => {
    console.log('The server is running on http://localhost:4000')
});