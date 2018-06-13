const mysql = require('mysql');
const database = 'ESTATISTICA';

const client = mysql.createConnection({
    user: 'root',
    password: 'root',
    host: 'localhost',
    port: 3306
});

client.query('USE ' + database);

module.exports = client;