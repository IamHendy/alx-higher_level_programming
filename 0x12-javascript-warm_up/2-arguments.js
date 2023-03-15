#!/usr/bin/node
<<<<<<< HEAD
switch (process.argv.length) {
  case 2:
    console.log('No argument');
    break;
  case 3:
    console.log('Argument found');
    break;
  default:
    console.log('Arguments found');
    break;
}
=======

const { argv } = require('process');
if (argv.length === 2) { console.log('No argument'); } else if (argv.length === 3) { console.log('Argument found'); } else { console.log('Arguments found');}
>>>>>>> c62014feabf2987ef378c15d82e76a66c81be2b1
