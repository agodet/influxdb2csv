var parseArgs = require('minimist');

////////////////////////////////////////////////////////////////////////////////////
// Exports
////////////////////////////////////////////////////////////////////////////////////

var args = parseArgs(process.argv.slice(2), {boolean: true});

module.exports = {
    appName: "InfluxDb2Csv",
    verbose: true,
    output: args.output || "out.csv",
    quote: args.quote || false,
    influxdb: {
        host: args.host,
        port: args.port || "8086",
        user: args.user,
        password: args.password,
        database: args.database,
        timeFormat: args.timeFormat || "DD-MM-YYYY",
        query: args.query
    }
}



