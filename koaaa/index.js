const koa = require('koa')
const koaRouter = require('koa-router')// importing Koa-Router
const bodyParser = require('koa-bodyparser')

const app = new koa()
const router = new koaRouter()

const dataMap = require('./chap8/rd');
const renderAns = require('./chap8/findAirport')
const render = require('./render.js')

app.use(bodyParser())
app.use(async (ctx, next) => {
    try {
        await next();
    }
    catch (err) {
        console.log(err);
        ctx.status = 500;
    }
})

router.get('/', (ctx) => {
    ctx.body = "Hello World!!";
})

router.get('/home', (ctx) => {
    ctx.body = 'welcome to page by hai long';
})

router.get('/users', render);

router.post('/users', renderAns);

router.get('/list', (ctx) => {
    ctx.body = dataMap.points;
})

app.use(router.routes())
    .use(router.allowedMethods())// registering routes to the application

app.listen(2400, () => console.log('Server running at PORT 2400'))