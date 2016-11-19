// http request in node
module.exports = (zip, callback) => {
    const apiKey = '92e17d6aaedeb2add1ea3588c1627fbe'; // #yolo
    const urlTemplate = 'http://api.openweathermap.org/data/2.5/weather?q=';
    const createFromUrlTemplate = (template, zip) => `${template}${zip}`;
    let url = `${createFromUrlTemplate(urlTemplate, zip)}&APPID=${apiKey}`;


    const http = require('http');
    try {
        http.get(url, (res) => {
            const statusCode = res.statusCode;
            const contentType = res.headers['content-type'];

            let error;
            if (statusCode !== 200) {
                error = new Error(`Request Failed.\n` +
                    `Status Code: ${statusCode}`);
            } else if (!/^application\/json/.test(contentType)) {
                error = new Error(`Invalid content-type.\n` +
                    `Expected application/json but received ${contentType}`);
            }
            if (error) {
                console.log(error.message);
                // consume response data to free up memory
                res.resume();
                return;
            }

            res.setEncoding('utf8');
            let rawData = '';
            res.on('data', (chunk) => rawData += chunk);
            res.on('end', () => {
                try {
                    let parsedData = JSON.parse(rawData);
                    return callback(parsedData);
                } catch (e) {
                    console.log(e.message);
                }
            });
        }).on('error', (e) => {
            console.log(`Got error: ${e.message}`);
        });
    } catch (error) {
        console.log(error);
    };
}