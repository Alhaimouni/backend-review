'use strict';

const { Sequelize, DataTypes } = require('sequelize');

require('dotenv').config();



const POSTGRS_URL = process.env.DATABASE_URL;

const sequelizeOption = {}

const sequelize = new Sequelize(POSTGRS_URL, sequelizeOption);




module.exports = { sequelize };
