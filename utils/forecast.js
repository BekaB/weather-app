const request = require('request')

const forecast = (lat, lon, callback) =>{

    const url = 'https://api.weatherstack.com/current?access_key=a818ae5bf8e13c72847c794148f22f96&query='+lat+','+lon+'&units=f'

    request({url: url, json: true}, (error, response)=>{
        if(error){
            callback('unable to connect to the network', undefined)
            //console.log('this is a low level error')
        }else if(response.body.error){
            callback('wrong address', undefined)
            //console.log('wrong city')
        }else{
            callback(undefined, response.body.current.weather_descriptions[0] + ". the tempretur is now " + response.body.current.temperature + " but it feels like " + response.body.current.feelslike)
            //console.log(response.body.current.weather_descriptions[0] + ". the tempretur is now " + response.body.current.temperature + " but it feels like " + response.body.current.feelslike) 
           // console.log()
        }
    })
}

module.exports = forecast