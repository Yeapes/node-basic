const path = require('path');
const os = require('os');
const myPath = 'C:/laragon/www/node-basic/index.js';
const outputPath = path.extname(myPath);
console.log(outputPath);


console.log(os.cpus());