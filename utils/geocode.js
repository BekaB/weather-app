const request = require('request')

const geocode = (address, callback)=>{
    const url = 'http://api.openweathermap.org/geo/1.0/direct?q='+ encodeURIComponent(address) +'&limit=1&appid=519c4481ea41c288c2a82fe005c0cae4'

    request({url: url, json: true},(error, response)=>{

        if(error){
            callback('unable to connect to server', undefined)
        }else if(response.body.length === 0){
            callback('there is no city by this name', undefined)
        }else{
            callback(undefined, {
                latitude: response.body[0].lat,
                longitudie: response.body[0].lon,
                location: response.body[0].state            
            })
       }
    })
}

module.exports = geocode