let name1={
    firstname:"Akanksha",
    lastname:"Sukanth"
}

let printname = function(){
    console.log(this.firstname + " " + this.lastname)
}

printname.call(name1)//object to which it is pointing

//passing args

let printnameArgs = function(state,hometown){
    console.log(this.firstname + " " + this.lastname +  "  from  " + hometown, "  " ,state)

}

printnameArgs.call(name1,"haryana","jind")

//only difference between call n bind is we pass args as array in apply

printnameArgs.apply(name1,["haryana","jind"])


// ----------------------------------------------------------poly fill bind --------------------------------------------

//bind method same as call instead it gives a copy of the function which can be inbvoked later
 
let printBindName = printnameArgs.bind(name1,"hry") // return a function
printBindName("jnd")

Function.prototype.myBind = function(...args){
const obj = this
const params = args.slice(1);
return function(...args){
      obj.apply(args[0],[...params,...args])
}
}


const multiply = function(x,y){
    console.log(this)
    console.log(x*y)
}


const multiplyByTwo = multiply.bind(this,2)
multiplyByTwo(3)

// ----------------------------------------------------------call method-------------------------------------------
 