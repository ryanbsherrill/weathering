const express = require('express');
const weather = require('./getWeather');

const app = express();

app.get('/', (req, res) => {
  res.send('hell');
});

app.get('/api/zip', (req, res) => {
  const zipCode = req.query.zip;
  weather(zipCode)
    .then((data) => {
      res.json(data);
    });
});

app.listen(3001);
