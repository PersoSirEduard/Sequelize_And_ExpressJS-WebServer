const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('db_name', 'postgres', 'db_pass', {
    port: 5432,
    dialect: 'postgres',
    host: 'localhost'
  });

(async () => {
    try {
        await sequelize.authenticate();
        console.log('Connection to the database has been established successfully.');
      } catch (err) {
        console.error('Unable to connect to the database:', err);
      }
})();

module.exports = {sequelize};
