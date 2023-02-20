'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('pessoas', [
      {
        nome: 'Lucas',
        ativo: true,
        email: 'lucas@gmail.com',
        role: 'estudante',
        createdAt: new Date(),
        updatedAt: new Date()
      },

      {
        nome: 'Osvaldo',
        ativo: true,
        email: 'osvaldo@gmail.com',
        role: 'estudante',
        createdAt: new Date(),
        updatedAt: new Date()
      },

      {
        nome: 'Cristiane',
        ativo: true,
        email: 'cristiane@gmail.com',
        role: 'estudante',
        createdAt: new Date(),
        updatedAt: new Date()
      },

      {
        nome: 'Paulo',
        ativo: true,
        email: 'paulo@gmail.com',
        role: 'docente',
        createdAt: new Date(),
        updatedAt: new Date()
      },

      {
        nome: 'Gabriella',
        ativo: true,
        email: 'gabriella@gmail.com',
        role: 'docente',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {})
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('pessoas', null, {})
  }
};
