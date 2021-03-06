const request = require('request')


const forecast = (latitude, longitude, callback) => {
const url = 'http://api.weatherstack.com/current?access_key=ff'+
'30f930ae9eea29cdda9e380ca4a46f&query='+latitude+','+longitude+'&units=f'
//destructure response
request({url, json: true}, (error, {body})=>{
    if(error){
        callback('Unable to connect to weather service!', undefined)
    } else if (body.error){
        callback('Unable to find location', undefined)
    } else {
        callback(undefined, body.current.weather_descriptions[0] +'. It is currently ' + body.current.temperature + ' degrees out. It feels like ' + body.current.feelslike + 
        ' degrees out.') 
    }

    // console.log(response.body.current.weather_descriptions[0] +'. It is currently ' + response.body.current.temperature + ' degrees out. It feels like ' + response.body.current.feelslike + 
    // ' degrees out.') 
})

}


module.exports = forecast