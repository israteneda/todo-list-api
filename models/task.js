'use strict';
module.exports = (sequelize, DataTypes) => {
  const Task = sequelize.define('Task', {
    task: {
      type: DataTypes.STRING,
      allowNull: false
    },
    status: {
      type: DataTypes.INTEGER,
      defaultValue: 1,
      allowNull:false
    }
  }, {});
  Task.associate = function(models) {
    // associations can be defined here
  };
  return Task;
};