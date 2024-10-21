console.log("hi");
const firstNameNode = document.getElementById("firstname");
const lastNameNode = document.getElementById("lastname");
const ageNode = document.getElementById("age");
const emailNode = document.getElementById("email");
const passwordNode = document.getElementById("password");
const error1 = document.getElementById("error1");
const error2 = document.getElementById("error2");
const error3 = document.getElementById("error3");
const error4 = document.getElementById("error4");
const error5 = document.getElementById("error5");

//extractValue

firstNameNode.addEventListener("blur", () => validate1());
const validate1 = function () {
  const firstname = firstNameNode.value;
  const pattern = "[A-Za-z]*";

  if (firstname == "") {
    error1.textContent = "First Name Required";
    return false;
  } else if (firstname.length < 2) {
    error1.textContent = "please enter valid name";
    return false;
  } else if (!firstname.match(pattern)) {
    error1.textContent = "please enter valid characters";
    return false;
  } else {
    error1.textContent = "";
    return true;
  }
  console.log(firstname);
};

lastNameNode.addEventListener("blur", () => validate2());
const validate2 = function () {
  const lastName = lastNameNode.value;
  const pattern = "[A-Za-z]*";
  if (lastName == "") {
    error2.textContent = "Last Name Required";
    return false;
  } else if (lastName.length < 20) {
    error2.textContent = "last name should be valid";
    return false;
  } else if (!lastName.match(pattern)) {
    error2.textContent = "last name should be valid";
    return false;
  } else {
    error2.textContent = "";
    return true;
  }
  console.log(lastname);
};

ageNode.addEventListener("blur", () => validate3());
const validate3 = function () {
  const age = ageNode.value;
  if (age == "") {
    error3.textContent = "age Required";
    return false;
  } else if (age > 14 || age < 40) {
    error3.textContent = " age must be between 12 to 40";
    return false;
  } else {
    error3.textContent = "";
    return true;
  }
  console.log(age);
};

emailNode.addEventListener("blur", () => validate4());
const validate4 = function () {
  const emailPattern ="/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/"
  const email = emailNode.value;
  
  if (email == "") {
    error4.textContent = "email Required";
    return false;
  } else if (!email.match(emailPattern)) {
    error4.textContent = "enter valid email";
    return false;
  } else {
    error4.textContent = "";
    return true;
  }
  console.log(email);
};

passwordNode.addEventListener("blur", () => validate5());
const validate5 = function () {
  const passwordPattern =
    "^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*?]).{6,12}$";
  const regExp = RegExp(passwordPattern);

  const password = passwordNode.value;
  if (password == "") {
    error5.textContent = "password Required";
    return false;
  }
  //password.match(passwordPatterb)
  else if (!regExp.test(password)) {
    error5.textContent = "please enter valid password";
    return false;
  } else {
    error5.textContent = "";
    return true;
  }
  console.log(password);
};

function validateAll() {
    
  return (
    validate1() && validate2() && validate3() && validate4() && validate5()
  );
}
