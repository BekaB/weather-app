const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')


const address = process.argv[2]

if(!address){
    console.log('please insert and address')

}else{
    geocode(address, (error, {latitude, longitudie, location} = {})=>{
        //console.log('Error', error)
        if(error){
            return console.log('error')
        }
        forecast(latitude, longitudie, (error,forecastdata) => {
            //console.log('Error', error)
            if(error){
                console.log(error)
            }
            console.log(location)
            console.log(forecastdata)
        })
    })
}