/// <reference path="../index.d.ts" />

// External lib
import ADODB = require('node-adodb');

// Variable declaration
var connection = ADODB.open('Provider=Microsoft.Jet.OLEDB.4.0;Data Source=node-adodb.mdb;');

ADODB.debug = true;

// query
connection
  .query('SELECT * FROM Users')
  .on('done', function (data){
    console.log(JSON.stringify(data, null, '  '));
  });