import { sequelize } from "../Config/db.sequelize.js";
import { Sequelize, DataTypes, Model } from "sequelize";


class UserModel extends Model {}

UserModel.init({
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
    modelName: 'user',
    freezeTableName: true,
    underscored: true
})

export default UserModel;