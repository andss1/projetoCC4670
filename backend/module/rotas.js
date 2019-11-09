const express = require('express')
const router = express.Router()
const {all, findById , save , delUser} = require('./usuario-controller')

router.get('/', all)
router.get('/:id', findById)
router.post('/', save) //cria
router.put('/:id', save) //atualiza
router.delete('/:id', delUser)

module.exports = router
