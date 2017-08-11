// basic setup requirements
var express = require('express');
var bodyParser = require('body-parser');
var compress = require('compression');

var app = express();

var renderer = require('./routes/renderer');

app.use(compress());
app.use(bodyParser.json({limit: '100mb'}));
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/', renderer);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    var html = '<!DOCTYPE html>';
    html+= '<html>';
    html+= '  <head>';
    html+= '    <title></title>';
    html+= '  </head>';
    html+= '  <body>';
    html+= '    <h1>'+err.message+'</h1>';
    html+= '    <h2>'+err.status+'</h2>';
    html+= '    <pre>'+err.stack+'</pre>';
    html+= '  </body>';
    html+= '</html>';
    res.send(html);
}); 

module.exports = app;
