import { sequelize } from "../Config/db.sequelize.js";
import { Sequelize, DataTypes, Model } from "sequelize";


class ReviewModel extends Model {}

ReviewModel.init({
    id: {
        type: DataTypes.STRING,
        autoIncrement: true, 
        allowNull: false,
        primaryKey: true
        
    },
    rating: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 'Untitled'
        
    },
    comment: {
        type: DataTypes.TEXT,
        allowNull: true
    },
    
    title: {
        type: DataTypes.STRING,
        allowNull: false
    },

    date: {
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

export default ReviewModel;