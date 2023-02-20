const { Router } = require('express')
const NivelController = require('../controllers/NivelController')

const router = Router()

router
    .get('/niveis', NivelController.pegarTodosOsNiveis)
    .get('/niveis/:id', NivelController.pegaUmNivel)
    .post('/niveis/register', NivelController.criarNivel)
    .put('/niveis/update/:id', NivelController.atualizarNivel)
    .delete('/niveis/delete/:id', NivelController.deletarNivel)

module.exports = router