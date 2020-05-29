// Controller for '/' route

const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
    res.render('index') //Render routes/index.js file
})

module.exports = router