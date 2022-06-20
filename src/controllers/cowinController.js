let axios = require("axios");
const { options } = require("../routes/route");

let getStates = async function (req, res) {

    try {
        let options = {
            method: 'get',
            url: 'https://cdn-api.co-vin.in/api/v2/admin/location/states'
        }
        let result = await axios(options);
        console.log(result)
        let data = result.data
        res.status(200).send({ msg: data, status: true })
    }
    catch (err) {
        console.log(err)
        res.status(500).send({ msg: err.message })
    }
}


let getDistricts = async function (req, res) {
    try {
        let id = req.params.stateId
        let options = {
            method: "get",
            url: `https://cdn-api.co-vin.in/api/v2/admin/location/districts/${id}`
        }
        let result = await axios(options);
        console.log(result)
        let data = result.data
        res.status(200).send({ msg: data, status: true })
    }
    catch (err) {
        console.log(err)
        res.status(500).send({ msg: err.message })
    }
}

let getByPin = async function (req, res) {
    try {
        let pin = req.query.pincode
        let date = req.query.date
        console.log(`query params are: ${pin} ${date}`)
        var options = {
            method: "get",
            url: `https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/findByPin?pincode=${pin}&date=${date}`
        }
        let result = await axios(options)
        console.log(result.data)
        res.status(200).send({ msg: result.data })
    }
    catch (err) {
        console.log(err)
        res.status(500).send({ msg: err.message })
    }
}

let getOtp = async function (req, res) {
    try {
        let blahhh = req.body

        console.log(`body is : ${blahhh} `)
        var options = {
            method: "post",
            url: `https://cdn-api.co-vin.in/api/v2/auth/public/generateOTP`,
            data: blahhh
        }

        let result = await axios(options)
        console.log(result.data)
        res.status(200).send({ msg: result.data })
    }
    catch (err) {
        console.log(err)
        res.status(500).send({ msg: err.message })
    }
}
let districtsList = async function (req, res) {
    try {
        let distId = req.query.district_id
        let date = req.query.date
        console.log(`query params are: ${distId} ${date}`)
        var options = {
            method: "get",
            url: `https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/findByDistrict?district_id=${distId}&date=${date}`,

        }
        let result = await axios(options)
        console.log(result.data)
        res.status(200).send({ msg: result.data })
    }
    catch (err) {
        console.log(err)
        res.status(500).send({ msg: err.message })
    }
}
let londonWeather = async function (req, res) {
    try {
        let city = req.query.q
        let Appid = req.query.Appid
        console.log(`query params are: ${city} ${Appid}`)


        var options = {
            method: "get",
            url: 'http://api.openweathermap.org/data/2.5/weather?q=London&Appid=369e10c17be329f56dd911499a7353f8'
        }
        let result = await axios(options)
        console.log(result.data)
        res.status(200).send({ msg: result.data })
    }
    catch (err) {
        console.log(err)
        res.status(500).send({ msg: err.message })
    }
}
let CheckTemp = async function (req, res) {
    try {
        let city = req.query.q
        let Appid = req.query.Appid
        console.log(`query params are: ${city} ${Appid}`)


        var options = {
            method: "get",
            url: 'http://api.openweathermap.org/data/2.5/weather?q=London&Appid=369e10c17be329f56dd911499a7353f8'
        }
        let result = await axios(options)
        console.log(result.data)
        res.status(200).send({ city: city, temp: result.data.main.temp })
    }
    catch (err) {
        console.log(err)
        res.status(500).send({ msg: err.message })
    }
}
let CheckWeather = async function (req, res) {
    try {
        let citiesArray = ["Bengaluru", "Mumbai", "Delhi", "Kolkata", "Chennai", "London", "Moscow"]
        let CitiesObj = []
        for (let i = 0; i < citiesArray.length; i++) {
            let Obj = { city: citiesArray[i] }//city:Bengaluru.temp:278.3
            var options = {
                method: "get",
                url:(`http://api.openweathermap.org/data/2.5/weather?q=${citiesArray[i]}&Appid=369e10c17be329f56dd911499a7353f8`),
            }
                let final = await axios(options)
            Obj.temp=final.data.main.temp
            CitiesObj.push(Obj)
        }
        
          var shortt=CitiesObj.sort(function(a,b){return a.temp-b.temp})//asscending order
            res.status(200).send({status:true,data:shortt})
    
    }
    catch (err) {
        console.log(err)
        res.status(500).send({ msg: err.message })
    }
    }
    let memeID = async function (req, res) {
        try {
            let template_id = req.query.template_id
            let text0 = req.query.text0
            let text1 = req.query.text1
            let username = req.body
            let password = req.body
        
            console.log(`query params are: ${template_id} ${text0} ${text1}`)
            var data = {
                method :"post",
                url: `https://api.imgflip.com/caption_image?template_id=${template_id}&text0=${text0}&text1=${text1}&username=chewie12345&password=meme@123`,
                data : (username, password)
            }
            let result = await axios(data)
            // console.log(result.data)
            res.status(200).send({ msg: result.data })
        }
        catch (err) {
            console.log(err)
            res.status(500).send({ msg: err.message })
        }
    }
    
    
module.exports.getStates = getStates
module.exports.getDistricts = getDistricts
module.exports.getByPin = getByPin
module.exports.getOtp = getOtp
module.exports.districtsList = districtsList
module.exports.londonWeather = londonWeather
module.exports.CheckTemp = CheckTemp
module.exports.memeID=memeID
module.exports.CheckWeather = CheckWeather