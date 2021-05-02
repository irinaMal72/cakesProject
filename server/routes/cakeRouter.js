const Router  = require('express')
const  router = new  Router()
const  cakeController = require('../controllers/cakeController')
const checkRole = require('../middleWare/checkRoleMiddleware')

router.post('/', checkRole('ADMIN'), cakeController.create)
router.get('/',cakeController.getAll)
router.get('/:id',cakeController.getOne)

module.exports = router