#!/usr/bin/node
/* script that displa the status code  of a get request
-  first argument is the URL to request (GET)
- status code must be printed informat code: <status code>
- you must get modulerequest
*/
const request = require('request');
request(process.argv[2], function (error, response) {
if (error) console.log(error);
else console.log('code: ' + response.statusCode);
});
