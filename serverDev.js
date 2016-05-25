var express = require('express'),
    app = express();
var port = 3001;

app.listen(port, function () {
    console.log('Listening on ' + port + '.');
});

app.use(express.static('./dist'));
app.get('/demo', function(req, res){
  res.sendFile(__dirname + '/dist/app_frame.html');
});
