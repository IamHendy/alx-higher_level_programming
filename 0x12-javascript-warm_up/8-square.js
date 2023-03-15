#!/usr/bin/node
<<<<<<< HEAD
const size = process.argv[2];
if (isNaN(Math.floor(Number(size)))) {
  console.log('Missing size');
} else {
  for (let i = 0; i < size; i++) {
    console.log('X'.repeat(size));
  }
=======

const { argv } = require('process');
const size = Number(argv[2]);
const repeat = 'X'.repeat(size);
if (isNaN(size)) {
console.log('Missing size');
} else {
for (i = 0; i < size; i++) {
console.log(repeat);
}
>>>>>>> c62014feabf2987ef378c15d82e76a66c81be2b1
}
