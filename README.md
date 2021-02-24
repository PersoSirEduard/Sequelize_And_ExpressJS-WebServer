# Sequelize and Express Node.js web server

## Description
This is an example of a Sequelize and Express web server built in Node.js to access and modify a PostgreSQL database.

## Install all necessary node modules
For this example to work, the following node modules are required:
 - express
 - sequelize
 - cors (middleware for express)
 - body-parser (middleware for express)

These modules can be installed by executing ```npm install``` via a terminal in the root folder of the project.

## Configure the database
To configure the database, credientials can be changed in ```database.js```.
- (Required) Replace ```'insert-user'``` with the username.
- (Required) Replace ```'insert-database-name'``` with the name of the database.
- (Require) Replace ```'insert-password'``` with the password.
- (Option) Change the value of ```port```.
- (Option) Change the value of ```host``` for a specific domain (recommended to use ```localhost``` for dev).
- (Option) Change the value of ```dialect``` for different SQL services.

```javascript
const sequelize = new Sequelize('insert-user', 'insert-database-name', 'insert-password', {
    port: 5432,
    dialect: 'postgres',
    host: 'localhost'
  });
```

## Start the web server
Execute ```node main.js``` to start the express web server.
