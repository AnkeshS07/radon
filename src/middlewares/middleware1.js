const moment=require("moment")
const mid= function ( req, res, next) {
    let time=moment().format("DD/MM/YYYY hh:mm:ss")
    let ip=req.ip;
    let path=req.path
    console.log(time,ip,path)
    next()
}
module.exports.mid=mid