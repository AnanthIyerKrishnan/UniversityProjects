// a utility to use async functions to query DB
const sql=require('mssql');
// pull in config from our other js file
const config =require('./config.js');

async function executeQuery(aQuery){
    const connection =await sql.connect(config.DB);
    let result=await connection.query(aQuery);
    return result.recordset;
}
module.exports={executeQuery:executeQuery};