const express = require('express');
const functioncall=require('../logger/logger')
const router = express.Router();
const functioncal2=require('../util/helper')
const function3=require('../validator/formatter')
const lodash1=require('lodash');
const { chunk, tail, union, fromPairs } = require('lodash');

router.get('/test-me', function (req, res) {
    functioncall.Welcome()
    functioncal2.printdate()
functioncal2.printmonth()
functioncal2.getBatchInfo()
function3.font()
    res.send('My first ever api!')
});

router.get('/hello',function (req, res){
const arr=["january","february","march","april","may","june","july","august","september","october","november","december"]
const arr1=chunk(arr,3);
console.log(arr1)
const arrNum=[1,3,5,7,9,11,13,15,17,19]
const arrFun=tail(arrNum)
console.log("problem4b " +arrFun)
const arr2=[1,2,3,4,5]
const arr3=[3,2,4,5,6]
const arr4=[2,4,5,2,45]
const arr5=[34,2,5,6,1]
const arr6=[2,3,45,6,7]
const uniqueValue=union(arr2,arr3,arr4,arr5,arr6)
console.log("union of all arrays " +uniqueValue)
const moviearr=[["horror","The Shining"],["drama","Titanic"],["thriller","Shutter Island"],["fantasy","Pans Labyrinth"]]
const pairOfarr=fromPairs(moviearr)
console.log(pairOfarr)
})
let players=[
    {
        "name" : "manish",
        "dob" : "1/1/1995",
        "gender":"male",
        "city":"jalander",
        "sports":["swimming"]
    },
    {
        "name" : "gopal",
        "dob" : "11/11/1995",
        "gender":"male",
        "city":"himachal",
        "sports":["running"]
    },
    {
        "name" : "ram",
        "dob" : "1/12/1992",
        "gender":"male",
        "city":"haryana",
        "sports":["boxing"]
    }
]
router.post('/players', function (req, res) {
let newPlayer=players(req.body)
console.log(newPlayer)
    res.send({data:players,type:true})
})

module.exports = router;
// adding this comment for no reason