const dataBase = require('../models')

class TurmaController {
    static async pegaTodasAsTurmas(req, res) {
        try {
            const todasAsTurmas = await dataBase.turma.findAll()
            return res
                .status(200)
                .json(todasAsTurmas)
        } catch (err) {
            console.log(err)
            return res
                .status(500)
                .json(err.message)
        }
    }

    static async pegaUmaTurma(req, res) {
        const { id } = req.params

        try {
            const umaTurma = await dataBase.turma.findOne({ where: { id: Number(id) } })
            return res
                .status(200)
                .json(umaTurma)
        } catch (err) {
            console.log(err)
            return res
                .status(500)
                .json(err.message)
        }
    }

    static async criarTurma(req, res) {
        const novaTurma = req.body

        try {
            const novaTurmaCriada = await dataBase.turma.create(novaTurma)
            return res
                .status(201)
                .json(novaTurmaCriada)
        } catch (err) {
            console.log(err)
            return res
                .status(500)
                .json(err.message)
        }
    }

    static async atualizarTurma(req, res) {
        const { id } = req.params
        const novaInfos = req.body

        try {
            await dataBase.turma.update(novaInfos, { where: { id: Number(id) } })
            const turmaAtualizada = await dataBase.turma.findOne({ where: { id: Number(id) } })
            return res
                .status(200)
                .json(turmaAtualizada)
        } catch (err) {
            console.log(err)
            return res
                .status(500)
                .json(err.message)
        }
    }

    static async deletarTurma(req, res) {
        const { id } = req.params
        const consultaId = await dataBase.turma.findOne({ where: { id: Number(id) } })

        try {
            if (consultaId != null) {
                await dataBase.turma.destroy({ where: { id: Number(id) } })
                return res
                    .status(200)
                    .json({ message: `Turma do id: (${id}) foi excluido do sistema` })
            } else {
                return res
                    .status(201)
                    .json({ message: `Turma do id: (${id}) já foi deletado do sistema` })
            }
        } catch (err) {
            console.log(err)
            return res
                .status(500)
                .json(err.message)
        }
    }
}

module.exports = TurmaController