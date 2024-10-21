// Declare array of employee names

// Solve following using built-in methods

// 1. Iterate array
// 2. find all names starting with "A"/a
// 3. Find first matching name ending with "Sharma"
// 4. Apply prefix as NEO- to every employee name
// 5. Concatenate 1st letter of every name and display result


// Implement all String API function
// length, toUpperCase, charAt, indexOf….

// Implement array api methods
// push, pop, join, splice....

// 2. find all names starting with "A"/a
let arr = ["akanksha", "Anurag", "ankita","Ram",'Rohan','Abhishek', "surbhi"];

let namesStartingWithA = arr.filter(name => /^[Aa]/.test(name));
// array iterate
namesStartingWithA.forEach(element => console.log(element));

let employeeList = ["Vivek Sharma","Rahul Sharma","Meena Roy","Vivek  Swami"]

let surnameSharma = employeeList.filter(name => /Sharma$/.test(name));
console.log(surnameSharma)

let neoEmployee = employeeList.map((item) => "Neo" + item);

console.log(neoEmployee)



let concatenatedFirstLetters = arr.map(name => name[0]).join('');

console.log(concatenatedFirstLetters);

let str = "akanksha"
console.log(str.length)
console.log(str.toLocaleUpperCase())
console.log(str.charAt(0));
console.log(str.indexOf("k"))

let apiArr = ["apple","grapes","mango","lichi"];

let lastElement = apiArr.pop();
console.log(lastElement);

apiArr.push("sitaphal");

// console.log(apiArr.join("+"))

console.log(apiArr.splice(1,1,"chiku"))
console.log(apiArr);
