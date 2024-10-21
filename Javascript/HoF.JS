// //DEMO.HTML

// function area(r){
//     return Math.PI * r * r;
// }

// function circumfrance(r){
//     return 2 * Math.PI * r ;
// }

// const radius =  [2 ,3 ,4]

// function calculate(fn,arr){
// const output = []
// for(let i = 0 ; i < arr.length ; i++){
//  output.push(fn(arr[i]))
// }
// return output
// }


// console.log(calculate(area,radius))

// //filter

// const values = [13,14,15,16]

// function filterF(i,n){
//     return i > n
// }

// function filter(fn,arr,n){
//     let output =[]
//     for(let i =0 ; i < arr.length; i++){
//         fn(arr[i],n) && output.push(arr[i])
//     }
//     return output
// }

// console.log(filter(filterF,values,14))

// //dupe of filter
// Array.prototype.myFilter = function(fn,n){
//     let output =[]
//     for(let i =0 ; i < this.length; i++){
//         fn(this[i],n) && output.push(this[i])
//     }
//     return output
// }
// console.log("my filter",values.myFilter(filterF,14))


// const users =[
// {firstname:"akanksha",age:27},
// {firstname:"aradhya",age:38},
// {firstname:"akki",age:35},
// {firstname:"abv",age:32}
// ]

// // how many of same age

// const output = users.reduce((acc, curr)=>{
//     if(acc[curr.age]){
//         acc[curr.age] =  acc[curr.age] + 1
//     }
//     else{
//         acc[curr.age] = 1 
//     }
//     return acc
// },{})

// console.log(output)

// //first name of people whose name is less than 30

// const out = users.filter((user)=> user.age < 30).map(user => user.firstname)
// console.log(out)

// //usig reduce

// const out1 = users.reduce((acc,curr)=>
// {
//  if(curr.age < 30){
//     acc.push(curr.firstname)
//  }
//  return acc

// },[])

// console.log(out1)
// ..............................Multiple............................................


const val = [-10,0,-271,-300,-2,-4,-5,-6, -7,-8,-1,-5,0]

// function isMultiple(x){
//     if( x === 0){
//         return false
//     }
//    return x % 3  === 0 && x % 5 === 0
// }

// function find(arr ,fn){
//     const op = []
//   for(let i = 0 ; i < arr.length ; i++){
//       fn(arr[i])?op.push("buzz") : op.push(arr[i])
//       }
// return op
// }
// console.log(find(val,isMultiple))

// // ....................................second..............................
// function secLargest(arr){
//     let largest = -10;
//     let secLargest = -10;
// for(const val of arr){
//     if(val > largest){
//         secLargest = largest;
//         largest = val;
//     }

//     else if ( largest > val &&  val > secLargest  ){
//         secLargest = val
//     }
// }

// return {
//     "largest" : largest,
//      "sec": secLargest
// }

// }

// console.log(secLargest(val))



//  function newArray(arr){
// const arr1 = []
// let i = 0;
// while( i < arr.length){
// const input = prompt("enter index arr is")
//    arr.splice(input,1)
//     console.log(arr)}

// }  

// console.log(newArray([1,24,5,6,9,7,8,6]))