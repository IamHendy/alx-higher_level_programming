#!/usr/bin/node
<<<<<<< HEAD
if (process.argv.length === 2 || isNaN(Math.floor(Number(process.argv[2])))) {
  console.log('Missing number of occurrences');
}
for (let i = 0; i < process.argv[2]; i++) {
  console.log('C is fun');
}
=======
const { argv } = require('process');
const occurence = Number(argv[2]);
const display = () => {
for (let i = 0; i < occurence; i++) {
 console.log('C is fun');
  }
};
isNaN(occurence)
 ? (console.log('Missing number of occurrences'))
 : (display());
>>>>>>> c62014feabf2987ef378c15d82e76a66c81be2b1
