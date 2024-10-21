// console.log("hi");
// // const firstNameNode = document.getElementById("firstname");
// // const lastNameNode = document.getElementById("lastname");
// const ageNode = document.getElementById("age");
// const emailNode = document.getElementById("email");
// const passwordNode = document.getElementById("password");
// const error1 = document.getElementById("error1");
// const error2 = document.getElementById("error2");
// const error3 = document.getElementById("error3");
// const error4 = document.getElementById("error4");
// const error5 = document.getElementById("error5");

//extractValue

$("#firstname").blur(() => validate1());
const validate1 = function () {
  const firstname = $("#firstname").val()
  const pattern = "[A-Za-z]*";

  if (firstname == "") {
    $("#error1").text("First Name Required")
    return false;
  } else if (firstname.length < 2) {
    $("#error1").text("valid first name")
    return false;
  } else if (!firstname.match(pattern)) {
    $("#error1").text("please enter valid characters")
    return false;
  } else {
    $("#error1").text("")
    return true;
  }
  console.log(firstname);
};

$("#lastname").blur(()=>validate2())
const validate2 = function () {
  const lastName = $("#lastname").val();
  const pattern = "[A-Za-z]*";
  if (lastName == "") {
    $("#error2").text("last Name Required")
    return false;
  } else if (lastName.length > 20) {
   $("#error2").text("valid last name")
    return false;
  } else if (!lastName.match(pattern)) {
    $("#error2").text("last name should not have number")
    return false;
  } else {
    $("#error2").text("")
    return true;
  }
  console.log(lastname);
};

$("#age").blur(()=>validate3());
const validate3 = function () {
  const age = $("#age").val();
  console.log(age)
  if (age == "") {
    $("#error3").text("enter age")
    return false;
  } else if (age < 14 || age > 40) {
    $("#error3").text(" age must be between 14 to 40")
    return false;
  } else {
    $("#error3").text("")
    return true;
  }
  console.log(age);
};

$("#email").blur(()=>validate4());
const validate4 = function () {
  const emailPattern ="^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]$"
  const email = $("#email").val();
  console.log(email)
  
  if (email == "") {
    $("#error4").text("email Required");
    return false;
  } else if (!email.match(emailPattern)) {
    $("#error4").text("enter valid email");
    return false;
  } else {
    $("#error4").text("");
    return true;
  }
  console.log(email);
};

$("#password").blur(()=>validate5());
const validate5 = function () {
  const passwordPattern =
    "^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*?]).{6,12}$";
  const regExp = RegExp(passwordPattern);

  const password = $("#password").val();
  console.log(password);

  if (password == "") {
    $("#error5").text("required");
    return false;
  }
  //password.match(passwordPatterb)
  else if (!regExp.test(password)) {
    $("#error5").text("please enter valid password");
    return false;
  } else {
    $("#error5").text("");   
     return true;
  }
  console.log(password);
};

$("#confirmPassword").blur(()=>validate6())

function validate6(){
    const confirmPassword = $("#confirmPassword").val();
    console.log(confirmPassword)

if( !confirmPassword === $("#password").val() ){
    $("#error6").text("password does not match"); 
    return false;
}
else if(! confirmPassword == ''){
    $("#error6").text("required");
    return false;

}
else{
    $("#error6").text(""); 
    return true;
}
}

$("#form1").submit(()=>validateAll())


function validateAll() {
    
  return (
    validate1() && validate2() && validate3() && validate4() && validate5() && validate6
  );
}
