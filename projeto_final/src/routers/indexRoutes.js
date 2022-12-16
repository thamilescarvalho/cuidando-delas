const router = require('express').Router();

router.get('/', (req, res) => {
    res.send({
        'versao': '1.0',
        'titulo': 'Projeto Cuidando-delas',
        'descricao': 'Voltados para mulheres que queiram se previni contra problemas na saúde física e mental'
    })
})

module.exports = router