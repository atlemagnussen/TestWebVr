const path = require('path');
const express = require('express');
const http = require('http');
var port = 8000;

// static server
const app = express();
var router = express.Router();
app.use(express.static(path.join(__dirname, 'web')));
const server = http.createServer(app);

// api
router.get('/', function (req, res) {
    res.json({ message: 'This is the api' });
});

router.get('/config', function (req, res) {
    res.json("hello");
});

app.use('/api', router);
server.listen(port, function listening() {
    console.log('Listening on %d', server.address().port);
});