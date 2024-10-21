//demo.html
const p1 = new Promise ((resolve,reject)=>{
    setTimeout(()=>reject("p 1 fail"),2000)
})
const p2 = new Promise ((resolve,reject)=>{
    setTimeout(()=>resolve("p 2 sceucess"),1000)

})
const p3 = new Promise ((resolve,reject)=>{
    setTimeout(()=>resolve("p 3 success"),2000)
})


//all settleted results safest option
Promise.allSettled([p1,p2,p3])
.then(
    res => console.log(res)
).catch( err => console.error(err))


// if error will throw error immediatly
Promise.all([p1,p2,p3])
.then(
    res => console.log(res)
).catch( err => console.error(err))

/// first settleted promise either fail or successs
Promise.race([p1,p2,p3])
.then(
    res => console.log(res)
).catch( err => console.error(err))

//first sucessufl promise
Promise.any([p1,p2,p3])
.then(
    res => console.log(res)
).catch( err => console.error(err))