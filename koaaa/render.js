const listCtx = require('./content')

function render(ctx, next) {
    if (ctx.method == 'GET') {
        ctx.body = listCtx.ctx1;
    }
    else {
        const airport = {name: 'London', a:1, b:2, c:3}
        ctx.body = listCtx.ctx2(airport);
    }
}


module.exports = render;