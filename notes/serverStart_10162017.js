const express = require('express');
//  run tha express instance
const app = express();

// set yer port
var port = 3000;

// set public folder, static resources
app.use(express.static('public'));

// set routes
app.get('/', function(req, res) {
   res.sendFile('index.html');
});

app.get('/secondPage', function(req, res) {
   res.sendFile('secondPage.html');
});
