import { sequelize } from "../Config/db.sequelize.js";
import { Sequelize, DataTypes, Model } from "sequelize";


class TypeModel extends Model {}

TypeModel.init({
    id: {
        type: DataTypes.STRING,
        autoIncrement: true, 
        allowNull: false,
        primaryKey: true
        
    },
    type: {
        type: DataTypes.STRING,
        allowNull: false
    }
    
}, {
    sequelize, 
    modelName: 'type',
    freezeTableName: true,
    underscored: true
})

export default TypeModel;