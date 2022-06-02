const printdate=function(){
let currentDate=new Date()
console.log("current date and time is: " +currentDate)
}
const printmonth=function(){
    let month=new Date()
    let currentmonth=month.getMonth()+1
console.log("the current month is " + currentmonth)
}
const getBatchInfo=function(){
    console.log("Roadon, W3D1, the topic for today is Nodejs module system" )
}
module.exports.printdate=printdate
module.exports.printmonth=printmonth
module.exports.getBatchInfo=getBatchInfo
