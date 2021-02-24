const { Model, DataTypes, Deferrable } = require("sequelize");
const {sequelize} = require('../database.js');

class User extends Model {}
User.init({
    // Data for each user here
    first_name: { type: DataTypes.STRING, allowNull: false },
    last_name: { type: DataTypes.STRING, allowNull: false },
}, {
    sequelize,
    modelName: 'User',
    freezeTableName: true, // 'User' instead of 'Users'
});