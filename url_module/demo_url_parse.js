// * Include the URL module
var url = require('url');

// * The URL module splits up a web address into readable parts.

// * Parse an address with the url.parse() method, and it will
// * return a URL object with each part of the address as properties
var adr = 'http://localhost:8080/default.htm?year=2021&month=March';
var q = url.parse(adr, true);

console.log(q.host);    // returns 'localhost:8080'
console.log(q.pathname);// returns '/default.htm'
console.log(q.search);  // returns '?year=2021&month=March'

var qdata = q.query;    // returns an object {year:2021, month:'March'}
console.log(qdata.month);   // returns 'March'