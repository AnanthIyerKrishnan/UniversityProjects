const sql = require('mssql');
const { log } = require('node:console');
// build connection details object
const config = {
    user: 'csu',
    password: 'rams',
    server: 'buscissql1901.busdom.colostate.edu\\cisweb',
    database: 'RWStudios',
    trustServerCertificate: true
};
// connect to DB
sql.connect(config)
    .then((myConnection) => {
        return (myConnection.query("SELECT * FROM FILM")
        );


    })
    .then((myData) => {
        console.log(myData.recordset);
    })
    .catch((err) => {
        console.log("Issues encountered connecting to DB", err);
    });