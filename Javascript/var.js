"use strict"

console.log(this);
function x(){
    console.log(this)
}

x();
window.x();



const obj={
    name:"a",
    y:function(){
        console.log(this)
    }
}

obj.y()