

const fun=function(){
    console.log("annonymous function" )
}

const fun2 = ()=>{
    console.log("arrow")
}

const fun3 = (n1,n2) => n1 + n2; 
//if arrow function have one arg then () optional
const fun4 = a => console.log(a);
fun4("akanksha");

const fun5 = a => a.toUpperCase(a)

console.log(fun5("ram"));

console.log("--------------------------------------------");

let arr =[ 2,3,4,5,6];

let arr2 = arr.map((i)=>{
return i+2
})

//ananonymous function ,normal function can also be passed
//ref is the array itself
arr.forEach((item,index,ref)=>{
console.log(item , index ,ref)
})

arr.filter((ele)=>ele>3).forEach((ele)=>console.log(ele));
//find out first element that is greater then 4
const ele = arr.find((item)=> item > 4);


//sum

const ans = arr.reduce((acc,item)=>{
 acc = acc + item;
 return acc
},0)

console.log(ans)