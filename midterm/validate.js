function validateForm() {
  var errorMessages = "";
  var validName=false;
  var name = document.getElementById("name").value;
  var validSubject=false;
  var subject = document.getElementById("subject").value;
  var validComment = false;
  var comment = document.getElementById("commment").value;
  if (name==="null" || name==="") {
    errorMessages += "<p>The name field is required.</p>";
  }
  else {
    validName = true;
  }
  if (subject==="null" || subject==="") {
    errorMessages += "<p>The subject is required.</p>";
  }
  else {
    validSubject = true;
  }
  if (comment==="null" || comment==="") {
    errorMessages += "<p>The comment is required.</p>";
  }
  else {
    validComment = true;
  }
    document.getElementById("errorMessages").innerHTML = errorMessages;
    return (validName && validSubject &&  validComment);
}
