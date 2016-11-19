'use strict';
const assert = require('assert');
const weather = require('../src/getWeather.js');

describe('Array', () => {
    describe('#indexOf()', () => {
        it('should return -1 when value is not present', () => {
            assert.equal(-1, [1, 2, 3].indexOf(4));
        });
    });
});

describe('Weather Module', () => {
    describe('using weather module', () => {
        it('should show weather for 22309', (done) => {
            weather(22309, (data) => {
                assert.equal('Rain', data.weather[0].main);
                done();
            });
        })
    })

    describe('getting weather module', () => {
        it('should let me use weather data', () => {
            let curWeather =  () => {
                 return  weather(22309, (data) => {
                    data.weather[0].main
                });
            }
            console.log(curWeather());
            assert.equal('Rain', curWeather());
        })
    })
});