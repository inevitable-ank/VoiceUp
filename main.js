// Alert box for confirming form submission
function confirmSubmit() {
    var response = confirm("Are you sure you want to submit this form?");
    if (response == true) {
      return true;
    } else {
      return false;
    }
  }
  
  // Form validation function
  function validateForm() {
    var name = document.forms["contactForm"]["name"].value;
    var email = document.forms["contactForm"]["email"].value;
    var message = document.forms["contactForm"]["message"].value;
    if (name == "") {
      alert("Name must be filled out");
      return false;
    }
    if (email == "") {
      alert("Email must be filled out");
      return false;
    }
    if (message == "") {
      alert("Message must be filled out");
      return false;
    }
  }
  
  // Smooth scrolling function for anchor links
  $(document).ready(function() {
    $('a[href^="#"]').on('click', function(event) {
      var target = $(this.getAttribute('href'));
      if( target.length ) {
          event.preventDefault();
          $('html, body').stop().animate({
              scrollTop: target.offset().top
          }, 1000);
      }
    });
  });
  
  // Function for displaying current date on the footer
  function displayDate() {
    var today = new Date();
    var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
    document.getElementById("currentDate").innerHTML = date;
  }

  // Open the chat form
function openForm() {
  document.getElementById("myForm").style.display = "block";
}

// Close the chat form
function closeForm() {
  document.getElementById("myForm").style.display = "none";
}
