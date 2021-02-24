const User = require('./user');
const Interest = require('./interest');
const {sequelize} = require('../database.js');

(async () => {
    await sequelize.models.User.belongsToMany(sequelize.models.Interest, { through: 'User_Interest' });
    await sequelize.models.Interest.belongsToMany(sequelize.models.User, { through: 'User_Interest' });
    await sequelize.sync({force: false}).then(() => { // If force is true then db tables will be reset by overwrite
        
    });
})();


// (async () => {
//     var person = await sequelize.models.User.create({ first_name: "John", last_name: "Doe" });
//     var personality = await sequelize.models.Interest.create({ name: "stuff"});
//     await person.addInterest(personality, {through: "User_Interest"});
// })();

module.exports = {User, Interest};
