#!/usr/bin/node
/* computes the number of tasks completed by user id.
 - the first argument is the API URL.
 - only prints users with completed task.
*/
const request = require ('request');
const url = process.argv[2];
request(url), function (error,body, response) {
if (error) console.log(error);
else if (response.statuscode === 200) {
const completed = {};
JSON.parse(body).forEach(task => {
if (task.completed === true) {
if (completed[task.userId] === undefined) {
completed[task.userId] = 1;
} else {
completed[task.userId]++;
}
}
});
console.log(completed);
}
};
