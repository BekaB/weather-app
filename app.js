const request = require('request')

 const url = 'https://api.weatherstack.com/current?access_key=a818ae5bf8e13c72847c794148f22f96&query=37.8267,-122.4233&units=f'

 request({url: url, json: true}, (error, response) =>{
    if(error){
        console.log("unable to connect to the network")
    }else if(response.body.error) {
        console.log("unable to find location")
    }else{
    console.log(response.body.current.weather_descriptions[0] + ". the tempretur is now " + response.body.current.temperature + " but it feels like " + response.body.current.feelslike) 
}
})
 

 const geocodeURL = 'https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1IjoiYW5kcmV3bWVhZDEiLCJhIjoiY2pvOG8ybW90MDFhazNxcnJ4OTYydzJlOSJ9.njY7HvaalLEVhEOIghPTlw&limit=1'

request({ url: geocodeURL, json: true }, (error, response) => {
    if(error){
        console.log("unable to connect")
    }else if(response.body.message){
        console.log("not authorized")
    }else{
    const latitude = response.body
    const longitude = response.body
    console.log(latitude, longitude)
}
})