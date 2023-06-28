import ProductModel from '../Models/product.model.js'
import ReviewModel from '../Models/review.model.js'

ProductModel.hasMany(ReviewModel)
ReviewModel.belongsTo(ProductModel)

class ProductController {
    constructor() {
        console.log ("ProductController instace")
    }

    list = async (req, res) => {
        let {limit, attributes} = req.query
        limit = parseInt(limit)  
    }
}