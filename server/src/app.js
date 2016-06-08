var koa        = require('koa');
var cors       = require('koa-cors');
var route      = require('koa-route');
var serve      = require('koa-static-server');
var Promise    = require('bluebird');
var hbs        = require('koa-hbs');
var log        = require('./utilities/logger');
var koaLogger  = require('./utilities/koa-logger');
var routes     = require('./routes.js');
var config     = require('./config/config');


//exports
var app = module.exports = koa();

app.use(hbs.middleware({
    viewPath: __dirname + '/../../widget/src'
}));

//app config
app.use(cors());
app.use(koaLogger());

// Serve dist directory on /dist
app.use(serve({rootPath: '/dist', rootDir: config.widgetDist}));

// Serve frame appFrame at /frame
app.use(route.get('/frame', frame));

function *frame () {
    yield this.render('frame', { appSource: config.appSource });
}

//app routing
app.use(route.get('/start', routes.Start));
app.use(route.get('/next', routes.Next));


//------------------------------------------------------------------------------

if (!module.parent) {
    app.listen(config.port);
    console.log('server running on http://localhost:' + config.port);
}

//------------------------------------------------------------------------------
