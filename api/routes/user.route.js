const express = require("express")
const router = express.Router()
const User = require('../controller/user.controller')







router.get('/', User)





module.exports = router