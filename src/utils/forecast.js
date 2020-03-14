const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = 'https://api.darksky.net/forecast/aadcff893ab45d831795a63472837fb6/' + latitude + ',' + longitude
    request({url, json: true}, (error, { body }) => {
        if(error){
            callback('Unable to connect to weather services!', undefined)
        } else if(body.error){
            callback('Unable to find location. Try another search', undefined)
        } else {
            // console.log(body.daily.data[0])
            callback(undefined, body.daily.data[0].summary +  ' It is currently '  + body.currently.apparentTemperature +  ' degree out. This high today is '+ body.daily.data[0].temperatureHigh + ' with a low of '+body.daily.data[0].temperatureLow + '. There is a '  + body.currently.precipProbability + '% chance of rain')
        }
    })
}
module.exports = forecast