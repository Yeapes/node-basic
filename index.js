const path = require('path');
const os = require('os');
const fs = require('fs');
// const myPath = 'C:/laragon/www/node-basic/index.js';
// const outputPath = path.extname(myPath);
// console.log(outputPath);


// console.log(os.cpus());

fs.writeFileSync('hello.txt','Hello World!');
fs.appendFileSync('hello.txt','I\'m from bangladesh');

const data = fs.readFileSync('hello.txt');

console.log(data.toString());