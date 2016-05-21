var koa = require('koa');
var serve = require('koa-static');
var app = koa();
app.use(serve('./public'));
app.listen(Number.parseInt(process.env.PORT, 10) || 3000);
