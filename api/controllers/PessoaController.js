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
}

module.exports = PessoaController