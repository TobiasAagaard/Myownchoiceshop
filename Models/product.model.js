import { sequelize } from "../Config/db.sequelize.js";
import { Sequelize, DataTypes, Model } from "sequelize";

class SongModel extends Model {}

SongModel.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true, 
        allowNull: false,
        primaryKey: true
        
    },
    stock: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: 'Untitled'
        
    },
    price: {
        type: DataTypes.TEXT,
        allowNull: true
    },
    
    name: {
        type: DataTypes.INTEGER,
        allowNull: false
    },

    description: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
    ,

    brand: {
        type: DataTypes.INTEGER,
        allowNull: false
    }

    ,

    type: {
        type: DataTypes.INTEGER,
        allowNull: false
    }

    ,   

    size: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
    ,

    image: {
        type: DataTypes.INTEGER,
        allowNull: false
    }

    ,

    color: {
        type: DataTypes.INTEGER,
        allowNull: false
    }

    ,





}, {
    sequelize, 
    modelName: 'song',
    freezeTableName: true,
    underscored: true
})

export default SongModel;