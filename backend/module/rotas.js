const express = require('express')
const router = express.Router()
const {all, update , save , delUser, findUser} = require('./usuario-controller')

router.get('/', all)
router.get('/:id', findUser)
router.post('/', save) //cria
router.put('/:id', update) //atualiza
router.delete('/:id', delUser)

module.exports = router
