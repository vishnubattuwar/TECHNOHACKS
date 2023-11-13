document.addEventListener('DOMContentLoaded', function () {
    const loginForm = document.getElementById('login-form');
    const errorMessage = document.getElementById('error-message');

    loginForm.addEventListener('submit', function (event) {
        event.preventDefault();

        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        // Perform basic input validation
        if (!username || !password) {
            errorMessage.textContent = 'Please enter both username and password.';
            return;
        }

        // In a real application, you would hash the password here and check it against a database.
        // For simplicity, we'll just compare it as plain text.
        if (username === 'yourusername' && password === 'yourpassword') {
            errorMessage.textContent = 'Login successful!';
        } else {
            errorMessage.textContent = 'Invalid username or password. Please try again.';
        }
    });
});
