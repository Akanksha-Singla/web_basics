const Nemail = document.getElementById("email");
const errNode1 = document.getElementById("error1");

 function validate1 () {
  const email = Nemail.value;
  const emailPattern ="^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]$"
  const regExp = new RegExp(emailPattern);

  if (email == "") {
    errNode1.textContent = "Enter valid email";
    return false;
  } else if (email.match(emailPattern)) {
    errNode1.textContent = "Enter valid email";
    return false;
  } else {
    console.log("tring to submit");
    errNode1.textContent = "";
    return true;
  }
};
Nemail.addEventListener("blur",() => validate1());

function submit() {
  console.log("submit");
  const r1 = validate1();
  if (r1 === true) {
    console.log("validate")
    return true;
  } else {
    return false;
  }
}

// let rm=document.getElementById("p");
// rm.remove();

// let rm2=document.getElementById("ul");
// if(rm2.hasChildNodes()){
//     rm2.removeChild(rm2.Child[0])
// }
