const express = require('express')
const homeControler = require('../controllers/HomeController')

const router = express.Router()
router.get('/', homeControler.home)

module.exports = router