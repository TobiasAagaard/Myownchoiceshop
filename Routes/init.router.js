import express from "express";
import sequelize from "../Config/db.sequelize.config.js"

const InitRouter = express.Router();



InitRouter.get('/init', (req, res) => {
    try {
        sequelize.sync()
        res.sendStatus(200)
    }
    catch(err) {
        res.send(err)
    }
})

export default InitRouter