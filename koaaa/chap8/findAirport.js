const d3 = require('d3-voronoi')
const listCtx = require('../content')
const dataMap = require('./rd')

function nearestLocation(location, points) {
    const coords = location.split(',');
    const voronoi = d3.voronoi()
        .x(d => d.latitude)
        .y(d => d.longitude);

    return points[voronoi(points).find(coords[0], coords[1]).index];
}

function nearestAirport(ctx, next) {
    if (ctx.request.body.location) {
        const location = ctx.request.body.location;
        const airport = nearestLocation(location, dataMap.points);
        ctx.body = listCtx.ctx3(airport);
    }
}

module.exports = nearestAirport;
