import { sequelize } from "../Config/db.sequelize.js";
import { Sequelize, DataTypes, Model } from "sequelize";

class ProductModel extends Model {}

ProductModel.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true, 
        allowNull: false,
        primaryKey: true
        
    },
    stock: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 'Untitled'
        
    },
    price: {
        type: DataTypes.TEXT,
        allowNull: true
    },
    
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },

    description: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
    ,

    brand: {
        type: DataTypes.STRING,
        allowNull: false
    }

    ,

    type: {
        type: DataTypes.STRING,
        allowNull: false
    }

    ,   

    size: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
    ,

    image: {
        type: DataTypes.BLOB,
        allowNull: false
    }

    ,

    color: {
        type: DataTypes.STRING,
        allowNull: false
    }

    ,





}, {
    sequelize, 
    modelName: 'product',
    freezeTableName: true,
    underscored: true
})

export default ProductModel;