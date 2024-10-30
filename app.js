const request = require('request')
const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')

//  const geocodeURL = 'http://api.ipstack.com/109.177.147.123?access_key=b5991f258c94a2970f197d5c8223222f'

// request({ url: geocodeURL, json: true }, (error, response) => {
//     if(error){
//         console.log("unable to connect")
//     }else if(response.body.latitude){
//         console.log(response.body.latitude)
//     }else{
//     const latitude = response.body
//     const longitude = response.body
//     console.log(latitude, longitude)
// }
// })

geocode('Boston', (error, data)=>{
    console.log(data)
})

forecast(37.8267, -122.4233, (error,data) => {
    //console.log('Error', error)
    console.log('Data', data)
})