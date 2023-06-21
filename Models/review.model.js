import { sequelize } from "../Config/db.sequelize.js";
import { Sequelize, DataTypes, Model } from "sequelize";


class ReviewModel extends Model {}

ReviewModel.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true, 
        allowNull: false,
        primaryKey: true
        
    },
    rating: {
        type: DataTypes.STRING,
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