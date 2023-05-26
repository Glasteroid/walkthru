function validateForm() {
  var validFirstname=false;
  var firstname = document.getElementById("firstname").value;
  var validLastname=false;
  var lastname = document.getElementById("lastname").value;
  var validemail = false;
  var userEmail = document.getElementById("email").value;
  var atpos = userEmail.indexOf("@");
  var dotpos = userEmail.lastIndexOf(".");
  var validphone = false;
  var phone = document.getElementById("phone").value;
  var validUsername = false;
  var username = document.getElementById("username").value;
  var validPassword = false;
  var password = document.getElementById("password").value;
  var validAddress = false;
  var address = document.getElementById("address").value;
  var validCity = false;
  var city = document.getElementById("city").value;
  var country = document.getElementById("country").value;
  var validZipcode = false;
  var zipcode = document.getElementById("zipcode").value;
  if (firstname==="null" || firstname==="" || firstname.length > 20) {
    errorMessages += "<p>The firstname is required and cannot be greater than 20 characters</p>";
  }
  else {
    validFirstname = true;
  }
  if (lastname==="null" || lastname==="" || lastname.length > 50) {
    errorMessages += "<p>The lastname is required and cannot be greater than 50 characters</p>";
  }
  else {
    validLastname = true;
  }
  if (atpos< 1 || dotpos<atpos+2 || dotpos+2>=userEmail.length) {
    errorMessages = "<p>Invalid email</p>";
  }
  else {
    validemail = true;
  }
  if (isNaN(phone) || phone.length >15 || phone===null || phone==="") {
    errorMessages = "<p>Invalid phone number </p>";
  }
  else {
    validphone = true;
  }
  if (username==="" || username.length > 12) {
    errorMessages += "<p>The username is required and cannot be greater than 12 characters</p>";
  }
  else {
    validUsername = true;
  }
  if (password==="" || password.length > 7) {
    errorMessages += "<p>The password is required and cannot be greater than 7 characters</p>";
  }
  else {
    validPassword = true;
  }
  if (address==="null" || address==="") {
    errorMessages += "<p>The address is required</p>";
  }
  else {
    validAddress = true;
  }
  if (city==="null" || city==="") {
    errorMessages += "<p>The city is required</p>";
  }
  else {
    validCity = true;
  }
  if (country === "USA") {
    if (zipcode.length <= 5) {
      validZipcode = true;
    }
  }
  else {
    validZipcode = false;
  }
    document.getElementById("errorMessages").innerHTML = errorMessages;
    return (validFirstname && validLastname &&  validemail && validphone && validUsername && validPassword && validAddress && validCity && validZipcode);
}
