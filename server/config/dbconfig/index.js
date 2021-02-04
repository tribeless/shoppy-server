const Sequelize = require("sequelize");
require("dotenv").config();

const {UserModel} = require("../../models");

const configValues = process.env;

let sequelize;
sequelize = new Sequelize(configValues.DB, configValues.USER, configValues.PASSWORD,{
    host:configValues.HOST,
    dialect:configValues.DIALECT,
    pool:{
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
});

const User = UserModel(sequelize,Sequelize);
module.exports = sequelize;