'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class nivel extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      nivel.hasMany(models.turma, { foreignKey: 'nivel_id' })
    }
  }
  nivel.init({
    descr_nivel: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'nivel',
  });
  return nivel;
};