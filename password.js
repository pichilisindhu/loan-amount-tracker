function togglePasswordVisibility(id) {
    const passwordField = document.getElementById(id);
    const type = passwordField.type === "password" ? "text" : "password";
    passwordField.type = type;
}

function validatePassword(event) {
    event.preventDefault(); // Prevent form submission
    
    // Get password and confirm password values
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirm-password').value;
    const passwordError = document.getElementById('password-error');

    // Regular expression for password validation
    const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/; // At least 8 characters, 1 uppercase, 1 lowercase, 1 digit

    // Clear previous error message
    passwordError.textContent = '';

    // Validate password
    if (!passwordPattern.test(password)) {
        passwordError.textContent = "Password must be at least 8 characters long, contain at least one uppercase letter, one lowercase letter, and one number.";
        return; // Stop further processing
    }

    // Validate confirm password
    if (password !== confirmPassword) {
        passwordError.textContent = "Passwords do not match.";
        return; // Stop further processing
    }

    // If all fields are valid, redirect to the login page
    window.location.href = "login-form.html"; // Redirects to the login page
}