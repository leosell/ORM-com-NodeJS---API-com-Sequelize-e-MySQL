const dataBase = require('../models')

class PessoaController {
    static async pegaTodasAsPessoas(req, res) {
        try {
            const todasAsPessoas = await dataBase.pessoa.findAll()
            return res
                .status(200)
                .json(todasAsPessoas)
        } catch(err) {
            console.log(err)
            return res
                .status(500)
                .json(err.message)
        }
    }

    static async pegaUmaPessoa(req, res) {
        const { id } = req.params

        try {
            const umaPessoa = await dataBase.pessoa.findOne({ where: { id: Number(id) } })
            return res
                .status(200)
                .json(umaPessoa)
        } catch (err) {
            console.log(err)
            return res
                .status(500)
                .json(err.message)
        }
    }

    static async criarPessoa(req, res) {
        const novaPessoa = req.body

        try {
            const novaPessoaCriada = await dataBase.pessoa.create(novaPessoa)
            return res
                .status(201)
                .json(novaPessoaCriada)
        } catch (err) {
            console.log(err)
            return res
                .status(500)
                .json(err.message)
        }
    }

    static async atualizarPessoa(req, res) {
        const { id } = req.params
        const novaInfos = req.body

        try {
            await dataBase.pessoa.update(novaInfos, { where: { id: Number(id) } })
            const pessoaAtulizada = await dataBase.pessoa.findOne({ where: { id: Number(id) } })
            return res
                .status(200)
                .json(pessoaAtulizada)
        } catch (err) {
            console.log(err)
            return res
                .status(500)
                .json(err.message)
        }
    }

    static async apagaPessoa(req, res) {
        const { id } = req.params
        const consultaId = await dataBase.pessoa.findOne({ where: { id: Number(id) } })

        try {
            if (consultaId != null) {
                await dataBase.pessoa.destroy({ where: { id: Number(id) } })
                return res
                    .status(200)
                    .json({ message: `Pessoa do id: (${id}) foi excluido(a) do sistema` })
            } else {
                return res
                    .status(201)
                    .json({ message: `Pessoa do id: (${id}) já foi deleta do sistema` })
            }
        } catch (err) {
            console.log(err)
            return res
                .status(500)
                .json(err.message)
        }
    }

    static async pegaUmaMatricula(req, res) {
        const { estudanteId, matriculaId } = req.params

        try {
            const umaMatricula = await dataBase.matricula.findOne({ where: { id: Number(matriculaId), estudante_id: Number(estudanteId) } })
            return res
                .status(200)
                .json(umaMatricula)
        } catch (err) {
            console.log(err)
            return res
                .status(500)
                .json(err.message)
        }
    }

    static async criarMatricula(req, res) {
        const { estudanteId } = req.params
        const novaMatricula = { ...req.body, estudante_id: Number(estudanteId) }

        try {
            const novaMatriculaCriada = await dataBase.matricula.create(novaMatricula)
            return res
                .status(201)
                .json(novaMatriculaCriada)
        } catch (err) {
            console.log(err)
            return res
                .status(500)
                .json(err.message)
        }
    }

    static async atualizarMatricula(req, res) {
        const { estudanteId, matriculaId } = req.params
        const novaInfos = req.body

        try {
            await dataBase.matricula.update(novaInfos, { where: { id: Number(matriculaId), estudante_id: Number(estudanteId) } })
            const matriculaAtulizada = await dataBase.matricula.findOne({ where: { id: Number(matriculaId), estudante_id: Number(estudanteId) } })
            return res
                .status(200)
                .json(matriculaAtulizada)
        } catch (err) {
            console.log(err)
            return res
                .status(500)
                .json(err.message)
        }
    }

    static async apagaMatricula(req, res) {
        const { estudanteId, matriculaId } = req.params
    const consultaId = await dataBase.matricula.findOne({ where: { id: Number(matriculaId), estudante_id: Number(estudanteId) } })

        try {
            if (consultaId != null) {
                await dataBase.matricula.destroy({ where: { id: Number(matriculaId), estudante_id: Number(estudanteId) } })
                return res
                    .status(200)
                    .json({ message: `Matricula do id: (${matriculaId}) foi excluido(a) do sistema` })
            } else {
                return res
                    .status(201)
                    .json({ message: `Matricula do id: (${matriculaId}) já foi deleta do sistema` })
            }
        } catch (err) {
            console.log(err)
            return res
                .status(500)
                .json(err.message)
        }
    }
}

module.exports = PessoaController