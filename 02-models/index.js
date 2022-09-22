'use strict';

const { Sequelize, DataTypes } = require('sequelize');
const { createPostModel } = require('./post.model');

require('dotenv').config();



const POSTGRS_URL = process.env.DATABASE_URL;

const sequelizeOption = {}

const sequelize = new Sequelize(POSTGRS_URL, sequelizeOption);

const postModel = createPostModel(sequelize, DataTypes);


module.exports = { sequelize, postModel };
