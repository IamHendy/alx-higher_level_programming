#!/usr/bin/node
<<<<<<< HEAD
if (process.argv.length > 3) {
  const args = process.argv.map(Number);
  args.slice(2);
  args.sort((a, b) => a - b);
  console.log(args[args.length - 2]);
} else {
  console.log(0);
=======
if (process.argv.length <= 3)  {
console.log(0);
} else {
const args = process.argv.map(Number)
.slice(2, process.argv.length)
.sort((a, b) => a - b);
console.log(args[args.length - 2]);
>>>>>>> c62014feabf2987ef378c15d82e76a66c81be2b1
}
