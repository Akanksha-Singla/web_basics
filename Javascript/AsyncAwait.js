async function asyncFunction() {
    try {
     
      const promise = new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve("Resolved");
        }, 5000);
      });
      console.log("Start");
      const result = await promise;
      console.log(result);
      console.log("End");
    } catch (error) {
      console.error(error);
    }
  }
  asyncFunction()
  console.log("before start")

  // sorting 

//   const arr = [4,7,8,1,2]

//   function sort(arr){
//    let temp;
//     for(let i =0; i<arr.length;i++ ){
//         for(let j = 0; j<arr.length;j++){
//             if(arr[i]<arr[j]){
//                temp = arr[i];
//                arr[i] = arr[j];
//                arr[j] = temp
//              }
//         }
//     }
//     return arr
//   }
// console.log(sort(arr))


const arr = [1,2,3,4,5,6,7,8]

const res = arr.reduce((acc,curr)=>{
    if(curr%2 == 0){
        acc.push(curr)

    }
    return acc
},[])
  
console.log(res)