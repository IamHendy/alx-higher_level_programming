#!/usr/bin/node
<<<<<<< HEAD
if (typeof process.argv[2] === 'undefined') {
  console.log('No argument');
} else {
  console.log(process.argv[2]);
}
=======
const { argv } = require('process');
if (argv[2] === undefined) { console.log('No argument'); } else { console.log(argv[2]); }
>>>>>>> c62014feabf2987ef378c15d82e76a66c81be2b1
