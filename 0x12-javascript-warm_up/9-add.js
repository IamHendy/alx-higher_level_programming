#!/usr/bin/node
<<<<<<< HEAD
function add (a, b) {
  return a + b;
}

console.log(add(Math.floor(Number(process.argv[2])), Math.floor(Number(process.argv[3]))));
=======

const { argv } = require('process');
const a = Number(argv[2]);
const b = Number(argv[3]);
const add = (a, b) => a + b;
console.log(add(a,b));
>>>>>>> c62014feabf2987ef378c15d82e76a66c81be2b1
