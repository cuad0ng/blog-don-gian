const express = require('express')
const blogController = require('../controllers/BlogController')

const router = express.Router()
router.get('/show-insert', blogController.show_insert)
router.post('/insert', blogController.insert)
router.get('/show-update/:id', blogController.show_update)
router.post('/update/:id', blogController.update)
router.post('/delete/:id', blogController.delete)
router.post('/add-comment/:slug', blogController.add_comment)
router.get('/:slug', blogController.detail)
router.get('/', blogController.index)

module.exports = router