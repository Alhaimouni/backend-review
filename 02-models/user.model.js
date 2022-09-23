'use strict';

function createUserModel(sequelize, DataTypes) {
    return (
        sequelize.define('user', {
            username: { type: DataTypes.STRING, allowNull: false, unique: true },
            email: { type: DataTypes.STRING, allowNull: false, unique: true },
            password: { type: DataTypes.STRING, allowNull: false },
        })
    );
}



module.exports = { createUserModel };