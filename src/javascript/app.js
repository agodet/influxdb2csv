var config = require("./conf/config");
var request = require("request");
var fs = require('fs');
var csv = require("fast-csv");
var moment = require('moment');

var influxUrl = `http://${config.influxdb.host}:${config.influxdb.port}/db/${config.influxdb.database}/series?chunked=true&q=${config.influxdb.query};&u=${config.influxdb.user}&p=${config.influxdb.password}`;

console.log("url : ", influxUrl);

request({url: influxUrl, json: true}, (error, response, body) => {

    var columns = body.columns;
    var ws = fs.createWriteStream(config.output);
    csv.write(body.points,
        {
            headers: true,
            quoteHeaders: config.quote,
            quoteColumns: config.quote,
            transform: (row) => {

                var transformedJson = {};

                columns.forEach((column, index) => {

                    if (columns[index] == "time") {
                        row[index] = moment(row[index]).format(config.influxdb.timeFormat);
                    }

                    if (columns[index] != "sequence_number") {
                        transformedJson[columns[index]] = row[index];
                    }
                });

                return transformedJson;
            }
        })
        .pipe(ws);
});



