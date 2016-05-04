var koa = require('koa');  
var app = koa();

app.use(function *(){  
    this.body = 'Hello from whims.co';
});

app.listen(3000);
