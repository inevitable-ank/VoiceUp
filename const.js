function consultForm() {
    // get the form element by ID
    var form = document.getElementById("consultancyForm");
    
    // get the input values
    var name = form.elements["name"].value;
    var email = form.elements["email"].value;
    var message = form.elements["message"].value;
    
    // validate the input values
    if (name == "" || email == "" || message == "") {
      alert("Please fill all the required fields.");
      return false;
    }
    
    // send the form data to the server using AJAX
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        // display the response message
        document.getElementById("consultancyResponse").innerHTML = this.responseText;
      }
    };
    xhttp.open("POST", "consultancy.php", true);
    xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhttp.send("name=" + name + "&email=" + email + "&message=" + message);
    
    // clear the form inputs
    form.reset();
  }