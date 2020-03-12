const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = 'https://api.darksky.net/forecast/aadcff893ab45d831795a63472837fb6/' + latitude + ',' + longitude
    request({url, json: true}, (error, { body }) => {
        if(error){
            callback('Unable to connect to weather services!', undefined)
        } else if(body.error){
            callback('Unable to find location. Try another search', undefined)
        } else {
            callback(undefined, body.daily.data[0].summary +  ' It is currently '  + body.currently.apparentTemperature +  ' degree out. There is a '  + body.currently.precipProbability + '% chance of rain')
        }
    })
}
module.exports = forecast