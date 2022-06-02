const express = require('express');
const functioncall=require('..logger/logger')
const router = express.Router();

router.get('/test-me', function (req, res) {
functioncall.welcome()
    res.send('My first ever api!')
});

module.exports = router;
// adding this comment for no reason