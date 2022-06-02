const express = require('express');
const functioncall=require('../logger/logger')
const router = express.Router();
const functioncal2=require('../util/helper')
router.get('/test-me', function (req, res) {
    functioncall.well()
    functioncal2.printdate()
functioncal2.printmonth()
functioncal2.getBatchInfo()
    res.send('My first ever api!')
});

module.exports = router;
// adding this comment for no reason