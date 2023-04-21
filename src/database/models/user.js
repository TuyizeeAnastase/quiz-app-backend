"use strict";
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define(
    "User",
    {
      username: DataTypes.STRING,
      email: DataTypes.STRING,
      password: DataTypes.STRING,
      role_id: DataTypes.INTEGER,
    },
    {}
  );
  User.associate = function (models) {
    User.belongsTo(models.Role, {
      foreignKey: "role_id",
      as: "role",
      onDelete: "CASCADE",
    });
    User.hasMany(models.Attempt, {
      foreignKey: "user_id",
      as: "user",
      onDelete: "CASCADE",
    });
  };
  return User;
};
