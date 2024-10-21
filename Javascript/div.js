
console.log("hello")
const div = document.createElement("div");
div.innerText = "new div"
div.setAttribute("id","div1");
// const newDiv = document.getElementById("div1");
div.style.width = "200px";
div.style.height = "200px";
div.style.background ="pink";

const position =div.getBoundingClientRect();

div.addEventListener("mouseover",()=>{
    div.style.transform="translate(300px,300px)";
    div.style.transition="4s";
})
div.addEventListener("mouseout",()=>{
    div.style.transform=`translate(${position.x}px, ${position.y}px)`
   div.style.transition="5s"
})
// const a = document.getElementsByTagName("a")
const before = document.getElementById("before");

before.addEventListener("click",()=>{
    before.append(div);
})
