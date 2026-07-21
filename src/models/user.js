'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      User.belongsTo(models.Group);
      // User.belongsTo(models.Group, { foreignKey: 'groupId', as: 'group' });
      User.belongsToMany(models.Project, {through: 'project_user'});
    }
  }
  User.init({
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    username: DataTypes.STRING,
    address: DataTypes.STRING,
    sex: DataTypes.STRING,
    phone: DataTypes.STRING,
    groupId: DataTypes.INTEGER
    
  }, {
    sequelize,
    modelName: 'User',
    tableName: "user"
  });
  return User;
};