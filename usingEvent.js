const School = require("./school");


const e1 = new School();

e1.on('bellRing',function(){
    console.log("Bell Event fired");
});

e1.bellEvent();