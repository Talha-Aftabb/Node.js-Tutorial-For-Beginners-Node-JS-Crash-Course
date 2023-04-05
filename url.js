//we use this module to get the url from the browser
const url = require("url");

const adress = "http://localhost:8080/default.html?year=2015&month=february";

const parseUrl = url.parse(adress, true);

console.log(parseUrl.host);
console.log(parseUrl.pathname);
console.log(parseUrl.query.month);
