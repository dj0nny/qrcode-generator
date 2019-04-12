const express = require('express');
const cors = require('cors');
const axios = require('axios');

const app = express();
const port = 4040;

app.use(cors());

app.get('/', function(req, res) {
  res.send('Route: /')
})

app.get('/generate-qr', function (req, res) {

  var data = req.query.data
  axios.get('https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=' + data)
    .then(function (response) {
      res.send(response.config.url)
    })
})

app.listen(port, function(){
  console.log('Server is up at port ' + port)
})