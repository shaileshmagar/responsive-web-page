// Event listener for dynamic button
document.getElementById('dynamicButton').addEventListener('click', function() {
    document.getElementById('dynamicContent').textContent = "Button Clicked.";
});

// Form validation and submission handling
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();  // Prevent form from submitting
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    if (name && email && message) {
        document.getElementById('formMessage').textContent = "Thank you for contacting us, " + name + "!";
        document.getElementById('contactForm').reset();
    } else {
        document.getElementById('formMessage').textContent = "Please fill in all fields.";
    }
});
