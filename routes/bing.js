const router = require('koa-router')()
const ImageController = require('../controller/ImageController')

router.prefix('/v1/bing')

router.get('/images', ImageController.getImagesAll)
router.get('/images/:id', ImageController.getImagesById)
router.get('/images/date/:data', ImageController.getImageByDate)
router.get('/images/page/:page', ImageController.getImageByPage)

module.exports = router
