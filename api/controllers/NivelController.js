const dataBase = require('../models')

class NivelController {
    static async pegarTodosOsNiveis(req, res) {
        try {
            const todosOsNiveis = await dataBase.nivel.findAll()
            return res
                .status(200)
                .json(todosOsNiveis)
        } catch (err) {
            console.log(err)
            return res
                .status(500)
                .json(err.message)
        }
    }

    static async pegaUmNivel(req, res) {
        const { id } = req.params

        try {
            const umNivel = await dataBase.nivel.findOne({ where: { id: Number(id) } })
            return res
                .status(200)
                .json(umNivel)
        } catch (err) {
            console.log(err)
            return res
                .status(500)
                .json(err.message)
        }
    }

    static async criarNivel(req, res) {
        const novoNivel = req.body

        try {
            const novoNivelCriado = await dataBase.nivel.create(novoNivel)
            return res
                .status(201)
                .json(novoNivelCriado)
        } catch (err) {
            console.log(err)
            return res
                .status(500)
                .json(err.message)
        }
    }

    static async atualizarNivel(req, res) {
        const { id } = req.params
        const novaInfos = req.body

        try {
            await dataBase.nivel.update(novaInfos, { where: { id: Number(id) } })
            const nivelAtualizado = await dataBase.nivel.findOne({ where: { id: Number(id) } })
            return res
                .status(200)
                .json(nivelAtualizado)
        } catch (err) {
            console.log(err)
            return res
                .status(500)
                .json(err.message)
        }
    }

    static async deletarNivel(req, res) {
        const { id } = req.params
        const consultaId = await dataBase.nivel.findOne({ where: { id: Number(id) } })

        try {
            if (consultaId != null) {
                await dataBase.nivel.destroy({ where: { id: Number(id) } })
                return res
                    .status(200)
                    .json({ message: `Nivel do id: (${id}) foi excluido do sistema` })
            } else {
                return res
                    .status(201)
                    .json({ message: `Nivel do id: (${id}) já foi deletado do sistema` })
            }
        } catch (err) {
            console.log(err)
            return res
                .status(500)
                .json(err.message)
        }
    }
}

module.exports = NivelController