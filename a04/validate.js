function validateFirstName() {
  var validFirstname=false;
  var firstname = document.getElementById("firstname").value;
  if (firstname==="null" || firstname==="" || firstname.length > 20)
    errorMessages += "<p>The firstname is required and cannot be greater than 20 characters</p>";
  else
    validFirstname = true;
  document.getElementById("errorMessages").innerHTML = errorMessages;
  return (validFirstname);
}

function validateLastName() {
  var validLastname=false;
  var lastname = document.getElementById("lastname").value;
  if (lastname==="null" || lastname==="" || lastname.length > 50)
    errorMessages += "<p>The lastname is required and cannot be greater than 50 characters</p>";
  else
    validLastname = true;
  document.getElementById("errorMessages").innerHTML = errorMessages;
  return (validLastname);
} 

function validateEmail() {
  var userEmail = document.getElementById("email").value;
  var atpos = userEmail.indexOf("@");
  var dotpos = userEmail.lastIndexOf(".");
  if (atpos< 1 || dotpos<atpos+2 || dotpos+2>=userEmail.length) {
    errorMessages = "<p>Invalid email</p>";
  else
    return true;
}
  
function validatePhone() {
  var phone = document.getElementById("phone").value;
  if (isNaN(phone) || phone.length >15 || phone===null || phone==="")
    errorMessages = "<p>Invalid phone number </p>";
  else
    return true; 
} 

function validateUsername() {
  var validUsername = false;
  var username = document.getElementById("username").value;
  if (username==="" || username.length > 12)
    errorMessages += "<p>The username is required and cannot be greater than 12 characters</p>";
  else 
    validUsername = true;
  return (validUsername);
}  

function validatePassword() {
  var validPassword = false;
  var password = document.getElementById("password").value;
  if (password==="" || password.length > 7)
    errorMessages += "<p>The password is required and cannot be greater than 7 characters</p>";
  else 
    validPassword = true;
  return (validPassword);
}  
  
function validateAddress() {
  var validAddress = false;
  var address = document.getElementById("address").value;
  if (address==="null" || address==="")
    errorMessages += "<p>The address is required</p>";
  else 
    validAddress = true;
  return (validAddress);
}  

function validateCity() {
  var validCity = false;
  var city = document.getElementById("city").value;
  if (city==="null" || city==="")
    errorMessages += "<p>The city is required</p>";
  else 
    validCity = true;
  return (validCity);
}  
