const form = document.getElementById("contactForm");
const name = document.getElementById("name");
const email = document.getElementById("email");
const message = document.getElementById("message");
const errorMessage = document.getElementById("errorMessage");
const successMessage = document.getElementById("successMessage");

form.addEventListener("submit", function(event) {
  event.preventDefault(); // Stop form from submitting

  if (name.value === "" || email.value === "" || message.value === "") {
    errorMessage.style.display = "block";
    successMessage.style.display = "none";
  } else {
    errorMessage.style.display = "none";
    successMessage.style.display = "block";

    // You can add code here to actually send the message later
    form.reset(); // Clear the form
  }
});

