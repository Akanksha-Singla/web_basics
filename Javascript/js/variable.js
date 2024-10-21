var company
var campany
company = "abc";
console.log(typeof company);
company = 123;
document.write("<b>" + typeof company +"</b>");

 function add(){
    // if var is declared in side a function it takes a scope
    var num1 ; //functionsl scope
    for(var i=1;i<=6;i++){
        console.log(i)
    }
    console.log(i)
 }
 add();
 //let variables have block scope where they are declared

//  function add2(){
//     // if var is declared in side a function it takes a scope
//     var num1 ; //functionsl scope
//     for(let i=1;i<=6;i++){
//         console.log(i)
//     }
//     console.log(i) //will create error not defined
//  }
//  add2();

//  function sum(num1,num2){
// let res;
// res = num1+num2;
// return res
//  }

//  const result = sum(1,2);
//  console.log(result);

 function sum(...num){
    let sum = 0;
    for(let value of num){
       sum += value;
    }
    return sum;
 }

 


