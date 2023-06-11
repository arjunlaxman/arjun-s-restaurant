// script.js
window.addEventListener('DOMContentLoaded', (event) => {
    // Form validation for reservation form
    const reservationForm = document.getElementById('reservation-form');
    reservationForm.addEventListener('submit', (event) => {
        event.preventDefault();
        // Perform validation and display error messages if needed
        const nameInput = document.getElementById('name');
        const emailInput = document.getElementById('email');
        // Add more input field references for validation

        if (nameInput.value.trim() === '') {
            // Display error message for name field
            // Example: nameInput.classList.add('error');
        } else if (emailInput.value.trim() === '') {
            // Display error message for email field
        } else {
            // Submit the form if all fields are valid
            reservationForm.submit();
        }
    });

    // Form validation for contact form
    const contactForm = document.getElementById('contact-form');
    contactForm.addEventListener('submit', (event) => {
        event.preventDefault();
        // Perform validation and display error messages if needed
        const nameInput = document.getElementById('name');
        const emailInput = document.getElementById('email');
        // Add more input field references for validation

        if (nameInput.value.trim() === '') {
            // Display error message for name field
        } else if (emailInput.value.trim() === '') {
            // Display error message for email field
        } else {
            // Submit the form if all fields are valid
            contactForm.submit();
        }
    });
});
