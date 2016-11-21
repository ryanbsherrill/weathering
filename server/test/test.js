const assert = require('assert');
const weather = require('../getWeather');
const Promise = require('bluebird');
const fetch = Promise.promisify(require('node-fetch'));

describe('testing if mocha works', () => {
  describe('this should pass', () => {
    it('should return -1 when value is not present', () => {
      assert.equal(-1, [1, 2, 3].indexOf(4));
    });
  });
});

describe('Weather Module', () => {
  const zip = 22309;

  describe('loaded correctly', () => {
    it('weather module is a function', () => {
      assert.equal('function', typeof weather);
    });

    it('weather(zip) should return  a json object', () => {
      assert.equal('object', typeof weather(zip));
    });

    it('zip code should be a number', () => {
      assert.equal('number', typeof zip);
    });
  });

  describe('using weather module', () => {
    it('should be json', (done) => {
      weather(zip)
                .then((val) => {
                  assert.equal('object', typeof val);
                  done();
                });
    });

    it('should be Clouds', (done) => {
      weather(zip)
                .then((val) => {
                  const weatherName = val.weather[0].main;
                  assert.equal('Clouds', weatherName);
                  done();
                });
    });
  });
});


describe('api server', () => {
  describe('call api server with zipcode query', () => {
    it('should return an object', (done) => {
      fetch('api/zip?zip=22309')
              .then((data) => {
                assert.equal('object', typeof data);
                done();
              });
    });
  });
});
