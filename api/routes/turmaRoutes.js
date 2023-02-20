const { Router } = require('express')
const TurmaController = require('../controllers/TurmaController')

const router = Router()

router
    .get('/turmas', TurmaController.pegaTodasAsTurmas)
    .get('/turmas/:id', TurmaController.pegaUmaTurma)
    .post('/turmas/register', TurmaController.criarTurma)
    .put('/turmas/update/:id', TurmaController.atualizarTurma)
    .delete('/turmas/delete/:id', TurmaController.deletarTurma)

module.exports = router