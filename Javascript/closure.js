// function x(){
//   let a = 7;
//      function y(){
//     console.log("a",a)
//     return a
//     }
// a=100
//     return y()
// }
// let z = x();

// console.log("z",z)



// function x(){
//     for(let i =1 ;i <=5;i++){
//         setTimeout(function(){
//             console.log("after ",i)
//         },i*1000)
//     }
// }




// x();

function xy(){
    for(var i =1 ;i <=5;i++){
        setTimeout(function(){
            console.log("after ",i)
        },i*1000)
    }
}

xy();

function xz(){
        for(var i =1 ;i <=5;i++){
            function close(i){
                setTimeout(function(){
                    console.log("after ",i)
                },i*1000)
            }
            close(i)
          }  
}
// xz();