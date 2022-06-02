const express = require('express');
const functioncall=require('../logger/logger')
const router = express.Router();
const functioncal2=require('../util/helper')
const function3=require('../validator/formatter')
router.get('/test-me', function (req, res) {
    functioncall.Welcome()
    functioncal2.printdate()
functioncal2.printmonth()
functioncal2.getBatchInfo()
function3.font()
    res.send('My first ever api!')
});

router.get('/hello',function (req, res){

})

module.exports = router;
// adding this comment for no reason