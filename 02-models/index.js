'use strict';

const { Sequelize, DataTypes } = require('sequelize');
const { createPostModel } = require('./post.model');
const { createCommentModel } = require('./comment.model');

require('dotenv').config();



const POSTGRS_URL = process.env.DATABASE_URL;

const sequelizeOption = {};

const sequelize = new Sequelize(POSTGRS_URL, sequelizeOption);

const postModel = createPostModel(sequelize, DataTypes);
const commentModel = createCommentModel(sequelize, DataTypes);

postModel.hasMany(commentModel, { foreignKey: "postId", sourceKey: "id" });
commentModel.belongsTo(postModel, { foreignKey: "postId", targetKey: "id" });










module.exports = { sequelize, postModel, commentModel };
