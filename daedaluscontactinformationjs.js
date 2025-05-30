document.addEventListener("DOMContentLoaded", function () {
  const collapsibles = document.querySelectorAll(".collapsible");

  collapsibles.forEach(button => {
    button.addEventListener("click", function () {
      this.classList.toggle("active");

      const content = this.nextElementSibling;
      if (content.style.maxHeight) {
        content.style.maxHeight = null;
      } else {
        content.style.maxHeight = content.scrollHeight + "px";
      }
    });
  });
});
document.getElementById('contactForm').addEventListener('submit', function (event) { //Η φόρμα επικοινωνίας 
    event.preventDefault();

    // Clear previous errors
    const errorElements = document.querySelectorAll('.error-message');
    errorElements.forEach(el => el.style.display = 'none');

    // Get form values
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const message = document.getElementById('message').value.trim();

    // Validation flags
    let isValid = true;

    // Name validation
    if (name === '') {
        document.getElementById('nameError').textContent = 'Name is required';
        document.getElementById('nameError').style.display = 'block';
        isValid = false;
    }

    // Email validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (email === '' || !emailPattern.test(email)) {
        document.getElementById('emailError').textContent = 'Valid email is required';
        document.getElementById('emailError').style.display = 'block';
        isValid = false;
    }

    // Phone validation
    const phonePattern = /^[0-9]{10}$/;
    if (phone === '' || !phonePattern.test(phone)) {
        document.getElementById('phoneError').textContent = 'Valid phone number is required';
        document.getElementById('phoneError').style.display = 'block';
        isValid = false;
    }

    // Message validation
    if (message === '') {
        document.getElementById('messageError').textContent = 'Message is required';
        document.getElementById('messageError').style.display = 'block';
        isValid = false;
    }

    // If form is valid, you can submit it or perform any other action
    if (isValid) {
        alert('Form submitted successfully!');
        // You can also submit the form here using AJAX or similar methods
    }
});