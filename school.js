const EventEmitter = require('events');

class School extends EventEmitter{
 
    bellEvent(){
        setTimeout(() =>{
            this.emit('bellRing');
        },1000);
    }
}

module.exports = School;