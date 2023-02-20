'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class matricula extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      matricula.belongsTo(models.pessoa, { foreignKey: 'estudante_id' })
      matricula.belongsTo(models.turma, { foreignKey: 'turma_id' })
    }
  }
  matricula.init({
    status: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'matricula',
  });
  return matricula;
};