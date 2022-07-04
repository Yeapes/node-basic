// const path = require('path');
// const os = require('os');
// const fs = require('fs');
const EventEmitter = require('events');

// const myPath = 'C:/laragon/www/node-basic/index.js';
// const outputPath = path.extname(myPath);
// console.log(outputPath);


// console.log(os.cpus());

// fs.writeFileSync('hello.txt','Hello World!');
// fs.appendFileSync('hello.txt','I\'m from bangladesh');


//Synchoronous way readFile
// const data = fs.readFileSync('hello.txt');

// console.log(data.toString());


const emitter = new EventEmitter();
console.log("Class Started");


//Event fire or Raise Event
emitter.emit('Horn');

//Register Listener for Horn
emitter.on('Horn', () =>{
    console.log("In Jam! Peeep! Peep!");
})