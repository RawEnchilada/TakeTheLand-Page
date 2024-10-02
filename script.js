// script.js

// Mobile Menu Toggle
const menuToggle = document.querySelector('.menu-toggle');
const mobileNav = document.querySelector('.mobile-nav');
if (menuToggle) {
    menuToggle.addEventListener('click', () => {
        mobileNav.classList.toggle('open');
    });
}

// Password Hashing Function (using SHA-256)
async function hashPassword(password) {
    const encoder = new TextEncoder();
    const data = encoder.encode(password);
    const hashBuffer = await crypto.subtle.digest('SHA-256', data);
    const hashArray = Array.from(new Uint8Array(hashBuffer));
    const hashHex = hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
    return hashHex;
}

// Handle Request Deletion Key Form Submission
const requestDeletionForm = document.getElementById('request-deletion-form');
if (requestDeletionForm) {
    requestDeletionForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        const email = document.getElementById('request-email').value;
        const password = document.getElementById('request-password').value;
        const hashedPassword = await hashPassword(password);

        // Send the data to the placeholder route
        // For demonstration, we'll just log it
        console.log('Request Deletion Key:', { email, hashedPassword });

        // Replace with actual request logic
        alert('Deletion key requested successfully!');
    });
}

// Handle Confirm Deletion Form Submission
const confirmDeletionForm = document.getElementById('confirm-deletion-form');
if (confirmDeletionForm) {
    confirmDeletionForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        const email = document.getElementById('confirm-email').value;
        const password = document.getElementById('confirm-password').value;
        const deletionKey = document.getElementById('deletion-key').value;
        const hashedPassword = await hashPassword(password);

        // Send the data to the placeholder route
        // For demonstration, we'll just log it
        console.log('Confirm Deletion:', { email, hashedPassword, deletionKey });

        // Replace with actual request logic
        alert('Account deletion confirmed!');
    });
}

// Handle Password Reset Form Submission
const passwordResetForm = document.getElementById('password-reset-form');
if (passwordResetForm) {
    passwordResetForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        const email = document.getElementById('reset-email').value;
        const password = document.getElementById('reset-password').value;
        const hashedPassword = await hashPassword(password);

        // Send the data to the placeholder route
        // For demonstration, we'll just log it
        console.log('Password Reset:', { email, hashedPassword });

        // Replace with actual request logic
        alert('Password reset successfully!');
    });
}
