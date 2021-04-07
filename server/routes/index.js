const Router  = require('express')
const  router = new  Router()
const  cakeRouter = require('./cakeRouter')
const  typeRouter = require('./typeRouter')
const  userRouter = require('./userRouter')

router.use('/cake',cakeRouter)
router.use('/type',typeRouter)
router.use('/user',userRouter)

module.exports = router