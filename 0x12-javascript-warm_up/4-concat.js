#!/usr/bin/node
<<<<<<< HEAD
console.log(process.argv[2] + ' is ' + process.argv[3]);
=======
const { argv } = require('process');
const argv1 = argv[2]; const argv2 = argv[3];
console.log(argv1 + ' is ' + argv2);
>>>>>>> c62014feabf2987ef378c15d82e76a66c81be2b1
