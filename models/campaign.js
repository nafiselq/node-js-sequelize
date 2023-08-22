'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Campaign extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Campaign.init({
    title: DataTypes.STRING,
    desc: DataTypes.STRING,
    image: DataTypes.STRING,
    price_collect: DataTypes.INTEGER,
    target_price_collect: DataTypes.INTEGER,
    institution_name: DataTypes.STRING,
    verified: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'Campaign',
  });
  return Campaign;
};