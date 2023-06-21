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
    username: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: 'Untitled'
        
    },
    password: {
        type: DataTypes.STRING,
        allowNull: true
    },
    
    email: {
        type: DataTypes.STRING,
        allowNull: false
    },

    birthdate: {
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