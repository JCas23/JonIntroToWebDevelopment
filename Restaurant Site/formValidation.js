function validateItems() {
    var name = document.forms["contact"]["Name"].value;
    var email = document.forms["contact"]["Email"].value;
    var phone = document.forms["contact"]["phone"].value;
    if (name == "") {
        alert("Name is a required field.");
        document.forms["contact"]["Name"]
           .parentElement.className = "form-group has-error";
        document.forms["contact"]["Name"].focus();
        return false;
    }
   if (email == "") {
       alert("Email is a required field.");
       document.forms["contact"]["Email"]
          .parentElement.className = "form-group has-error"
       document.forms["contact"]["Email"].focus();
       return false;
   }
   if (phone == "") {
       alert("Phone is a required field.");
       document.forms["contact"]["Name"]
          .parentElement.className = "form-group has-error";
       document.forms["contact"]["Name"].focus();
       return false;
}
else {
  alert("Form is valid and complete.");
}
}
