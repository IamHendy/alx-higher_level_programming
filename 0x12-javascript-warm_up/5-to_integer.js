#!/usr/bin/node
<<<<<<< HEAD
if (isNaN(Math.floor(Number(process.argv[2])))) {
  console.log('Not a number');
} else {
  console.log('My number: ' + parseInt(process.argv[2]));
}
=======
const { argv } = require('process');
const converted = Number(argv[2]);
if (isNaN(converted)) { console.log('Not a number'); } else { console.log('My number: ${converted}'); }
>>>>>>> c62014feabf2987ef378c15d82e76a66c81be2b1
