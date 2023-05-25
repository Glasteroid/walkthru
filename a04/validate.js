function validateForm() {
  var errorMessages = ""; // Initialize the error messages variable

  var firstname = document.getElementById("firstname").value;
  var lastname = document.getElementById("lastname").value;
  var userEmail = document.getElementById("email").value;
  var phone = document.getElementById("phone").value;
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;
  var address = document.getElementById("address").value;
  var city = document.getElementById("city").value;
  var zipcode = document.getElementById("zipcode").value;
  var country = document.getElementById("country").value;

  if (firstname === null || firstname === "" || firstname.length > 20)
    errorMessages += "<p>The firstname is required and cannot be greater than 20 characters</p>";

  if (lastname === null || lastname === "" || lastname.length > 50)
    errorMessages += "<p>The lastname is required and cannot be greater than 50 characters</p>";

  var atpos = userEmail.indexOf("@");
  var dotpos = userEmail.lastIndexOf(".");
  if (atpos < 1 || dotpos < atpos + 2 || dotpos + 2 >= userEmail.length)
    errorMessages += "<p>Invalid email</p>";

  if (isNaN(phone) || phone.length > 15 || phone === null || phone === "")
    errorMessages += "<p>Invalid phone number</p>";

  if (username === "" || username.length > 12)
    errorMessages += "<p>The username is required and cannot be greater than 12 characters</p>";

  if (password === "" || password.length > 7)
    errorMessages += "<p>The password is required and cannot be greater than 7 characters</p>";

  if (address === null || address === "")
    errorMessages += "<p>The address is required</p>";

  if (city === null || city === "")
    errorMessages += "<p>The city is required</p>";

  if (country === "USA" && zipcode.length > 5)
    errorMessages += "<p>Must be living in United States and input must only be a maximum of 5 digits</p>";

  document.getElementById("errorMessages").innerHTML = errorMessages; // Display the error messages

  return errorMessages; // Return true if there are no error messages, indicating a valid form
