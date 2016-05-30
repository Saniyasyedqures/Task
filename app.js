var express = require('express');
var app = express();

var bodyParser = require('body-parser');



app.set('port', (process.env.PORT || 5005));
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());


// set up a static folder with middleware
app.use(express.static(__dirname + '/public'));

app.get('/', function(request, response) {
    response.render('index')
});

app.listen(app.get('port'), function() {
    console.log('Node app is running on port', app.get('port'));
});


