const { Router } = require('express')
const PessoaController = require('../controllers/PessoaController')

const router = Router()

router
    .get('/pessoas', PessoaController.pegaTodasAsPessoas)
    .get('/pessoas/:id', PessoaController.pegaUmaPessoa)
    .post('/pessoas/create', PessoaController.criarPessoa)
    .put('/pessoas/update/:id', PessoaController.atualizarPessoa)
    .delete('/pessoas/delete/:id', PessoaController.apagaPessoa)
    .get('/pessoas/:estudanteId/matricula/:matriculaId', PessoaController.pegaUmaMatricula)
    .post('/pessoas/:estudanteId/matricula/register', PessoaController.criarMatricula)
    .put('/pessoas/:estudanteId/matricula/update/:matriculaId', PessoaController.atualizarMatricula)
    .delete('/pessoas/:estudanteId/matricula/delete/:matriculaId', PessoaController.apagaMatricula)

module.exports = router