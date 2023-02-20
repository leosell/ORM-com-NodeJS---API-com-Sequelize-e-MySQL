'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.bulkInsert('turmas', [
			{
				data_inicio: "2020-02-01",
				nivel_id: 1,
				docente_id: 10,
				createdAt: new Date(),
				updatedAt: new Date()
			},

			{
				data_inicio: "2020-02-01",
				nivel_id: 1,
				docente_id: 11,
				createdAt: new Date(),
				updatedAt: new Date()
			},

			{
				data_inicio: "2020-02-01",
				nivel_id: 2,
				docente_id: 10,
				createdAt: new Date(),
				updatedAt: new Date()
			},

			{
				data_inicio: "2020-02-01",
				nivel_id: 2,
				docente_id: 11,
				createdAt: new Date(),
				updatedAt: new Date()
			},

			{
				data_inicio: "2020-02-01",
				nivel_id: 3,
				docente_id: 10,
				createdAt: new Date(),
				updatedAt: new Date()
			},
			
			{
				data_inicio: "2020-07-01",
				nivel_id: 3,
				docente_id: 11,
				createdAt: new Date(),
				updatedAt: new Date()
			}
		], {})
	},

	async down(queryInterface, Sequelize) {
		await queryInterface.bulkDelete('turmas', null, {})
	}
};
