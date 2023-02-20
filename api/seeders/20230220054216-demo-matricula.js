'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.bulkInsert('matriculas', [
			{
				status: "confirmado",
				estudante_id: 6,
				turma_id: 1,
				createdAt: new Date(),
				updatedAt: new Date()
			},

			{
				status: "confirmado",
				estudante_id: 7,
				turma_id: 1,
				createdAt: new Date(),
				updatedAt: new Date()
			},

			{
				status: "confirmado",
				estudante_id: 8,
				turma_id: 2,
				createdAt: new Date(),
				updatedAt: new Date()
			},

			{
				status: "confirmado",
				estudante_id: 9,
				turma_id: 3,
				createdAt: new Date(),
				updatedAt: new Date()
			},

			{
				status: "cancelado",
				estudante_id: 12,
				turma_id: 2,
				createdAt: new Date(),
				updatedAt: new Date()
			},
		], {})
	},

	async down(queryInterface, Sequelize) {
		await queryInterface.bulkDelete('matriculas', null, {})
	}
};
