let companyName="neosoft";
console.log(companyName,typeof companyName);



let branch = new String("cse")
console.log(branch ,typeof branch) //object : string

//strings are immutable
//not changable
//will store into a new string

companyName.toUpperCase();
console.log(companyName);

// arrays are mutable

let arr = [1,2,6,5];

arr.sort();
console.log(arr);

// if 2 literals have same value then their memory location is same;

let company2 ="neosoft"; 

//both company and company2 have same location as both have same value;
// in case of literals we can compare value using ==;
console.log(company2 == companyName) // true when memory loacation is same and case sensitive comparision

//if two string objects have same value still their memory location is different

let branch2 = new String("cse")

console.log(branch == branch2)
console.log(branch.valueOf() == branch2.valueOf())


// console.log(78 == "78")


let str = "grapes"

console.log(str.slice(1,3));
console.log(str.substring(1,4))
console.log(str.substring(4))
console.log(str.substring(6,3)) //3,6
console.log(str.substring(-6,3)) //- 6 REPLACED BY 0



console.log(str.slice(-1));
console.log("-1,-3",str.slice(-3,-1));






// console.log(str.split(","))

