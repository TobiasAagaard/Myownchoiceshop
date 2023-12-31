import { sequelize } from "../Config/db.sequelize.js";
import { Sequelize, DataTypes, Model } from "sequelize";


class BrandModel extends Model {}

BrandModel.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true, 
        allowNull: false,
        primaryKey: true
        
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: 'Untitled'
        
    },
    
}, {
    sequelize, 
    modelName: 'brand',
    freezeTableName: true,
    underscored: true
})

export default BrandModel;