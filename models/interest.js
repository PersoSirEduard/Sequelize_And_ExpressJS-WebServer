const { Model, DataTypes, Deferrable } = require("sequelize");
const {sequelize} = require('../database.js');

class Interest extends Model {}
Interest.init({
    name: { type: DataTypes.STRING, allowNull: false },
}, {
    sequelize,
    modelName: 'Interest',
    freezeTableName: true,
    timestamps: false,
});