#!/usr/bin/node
<<<<<<< HEAD
function factorial (n) {
  if (isNaN(n) || n === 1) {
    return (1);
  } else {
    return (n * factorial(n - 1));
  }
}

console.log(factorial(Math.floor(Number(process.argv[2]))));
=======

function factorial (n) {
return n === 0 || isNaN(n) ? 1 : n * factorial(n - 1);
}

console.log(factorial(Number(process.argv[2])));
>>>>>>> c62014feabf2987ef378c15d82e76a66c81be2b1
