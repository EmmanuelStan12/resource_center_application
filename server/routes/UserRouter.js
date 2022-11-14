const express = require('express')
const { login, register } = require('../controllers/UserController')

const router = express.Router();

router.get('/', (req, res) => {
    res.send('Welcome to users route')
})

router.post('/login', login);

router.post('/register', register)

module.exports.userRouter = router;