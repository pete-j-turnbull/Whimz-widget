var koa        = require('koa');
var cors       = require('koa-cors');
var route      = require('koa-route');
var log        = require('./utilities/logger');
var koaLogger  = require('./utilities/koa-logger');
var routes     = require('./utilities/routes.js');
var questions  = require('./utilities/questions');


//exports
var app = module.exports = koa();

//app config
app.use(cors());
app.use(koaLogger());


//app routing
app.use(route.get('/start', routes.Start));
app.use(route.get('/next', routes.Next));
app.use(route.get('/skip', routes.Skip));


//------------------------------------------------------------------------------

if (!module.parent) {
    app.listen(8080);
    console.log('server running on http://localhost:8080/');
}

//------------------------------------------------------------------------------