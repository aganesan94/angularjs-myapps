/**
 * Created by AGanesan on 9/12/2015.
 */


var connect = require('connect');
var serveStatic = require('serve-static');

var app = connect();

app.use(serveStatic("./angular"));
app.listen(5000);
