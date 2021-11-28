const fs = require('fs');
const land = require('./data/land.json')
const boundaries = require('./data/cultural.json')

const dataMap = {
    land: land,
    boundaries: boundaries,
    points: []
}
fs.readFile('./chap8/data/airports.dat', 'utf8', (err, data) => {
    data = data.split('\n');
    for(let i = 0; i < data.length; i++) {
        let airport = data[i].split(',');
        if (airport[4] && airport[5]) {
            dataMap['points'].push({
                name: airport[1],
                location: airport[2],
                country: airport[3],
                code: airport[4],
                latitude: airport[6],
                longitude: airport[7],
                timezone: airport[11],
            })
        }
    }
})


module.exports = dataMap;