# influxdb2csv
convert a query from influxdb into a cvs file

1. `npm install`
2. `gulp default`
3. `node build/app.js --host="<influxdb_host>" --query="<select query>" --user="<influxdb_user>" --password="<influxdb_password>" --database="<influxdb_database>"`

#### Other non required parameter :
* `--port="<influxdb_port>"` : default 8086
* `--quote` : add quote to the output, default to false
* `--timeFormat="<time_format>"` : manage time format of time column (always present), dafault to "DD-MM-YYYY"
* `--output="<output_file>"` : name of the output file : default to "out.csv"
