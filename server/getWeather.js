// http request in node
const Promise = require('bluebird');
const fetch = Promise.promisifyAll(require('node-fetch'));


module.exports = (zip) => {
  const apiKey = '92e17d6aaedeb2add1ea3588c1627fbe'; // #yolo
  const urlTemplate = 'http://api.openweathermap.org/data/2.5/weather?q=';
  const createFromUrlTemplate = (template, zipCode) => `${template}${zipCode}`;
  const url = `${createFromUrlTemplate(urlTemplate, zip)}&APPID=${apiKey}`;
  return fetch(url)
            .then(res => res.json());
};
