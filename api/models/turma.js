'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class turma extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      turma.hasMany(models.matricula, { foreignKey: 'turma_id' })
      turma.belongsTo(models.pessoa, { foreignKey: 'docente_id' })
      turma.belongsTo(models.nivel, { foreignKey: 'nivel_id' })
    }
  }
  turma.init({
    data_inicio: DataTypes.DATEONLY
  }, {
    sequelize,
    modelName: 'turma',
  });
  return turma;
};