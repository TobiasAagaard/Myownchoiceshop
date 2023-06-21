import express  from 'express'
import { sequelize } from '../Config/db.sequelize.js'
import LikedModel from '../Models/liked.model.js'
import BrandModel from '../Models/brand.model.js'
import ProductModel from '../Models/product.model.js'
import ReviewModel from '../Models/type.model.js'
import TypeModel from '../Models/type.model.js'
import UserModel from '../Models/user.model.js'


const initRouter = express.Router()

initRouter.get('/init', (req, res) => { 
try {
    sequelize.sync()
    res.sendStatus(200)
}
catch(err) {
    res.send(err)
}


})


export { initRouter }

