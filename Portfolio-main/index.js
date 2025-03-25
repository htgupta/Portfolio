// Array of strings to display with typewriter effect
var strings = [
    "Programmer",
    "Software Developer",
    "Full Stack Developer",
    // Add more strings as needed
  ];
  
  // Get the paragraph element
  var paragraph = document.getElementById("typewriter");
  
  // Initialize index to track the current string
  var index = 0;
  
  // Function to display strings with typewriter effect
  function typeWriter() {
    if (index < strings.length - 1) {
      // Display the current string
      paragraph.textContent = strings[index];
      index++;
      setTimeout(function() {
        // Remove the displayed string and call the function recursively
        paragraph.textContent = '';
        typeWriter();
      }, 2000); // Wait for 1 second before removing the string
    } else {
      // Display the last string until the end
      paragraph.textContent = strings[strings.length - 1];
    }
  }
  
  // Call the function to start typewriter effect
  typeWriter();
  
























document.addEventListener("DOMContentLoaded", function() {
    
    
    
    
    
    
    
    // Initialize an array to store form submissions
    var formDataArray = [];

    // Debugging: Log when the DOM content is fully loaded
    console.log("DOM content loaded");
  
    document.getElementById("submitButton").addEventListener("click", function(event) {
      // Allow form submission
      // event.preventDefault(); // Prevent form submission
      
      // Get form values
      var email = document.getElementById("exampleInputEmail1").value;
      var username = document.getElementById("basic-addon1").nextElementSibling.value;
      var message = document.querySelector(".input-group").nextElementSibling.querySelector("textarea").value;
  
      // Debugging: Log the form values
      console.log("Email:", email);
      console.log("Username:", username);
      console.log("Message:", message);
  
      // Store form data in an object
      var formData = {
        email: email,
        username: username,
        message: message
      };
  
      // Add the current form data to the array
      formDataArray.push(formData);
  
      // Print all form data to console (for demonstration)
      console.log("All form data:", formDataArray);

      // Optionally, reset the form after submission
      document.getElementById("myForm").reset();
    });
  });
