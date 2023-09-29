document.addEventListener("DOMContentLoaded", function () {
    // Get a reference to the form and the error message element
    let form = document.getElementById("passwordForm");
    let errorElement = document.getElementById("error");

    // Add a submit event listener to the form
    form.addEventListener("submit", function (event) { 
        // Prevent the form from submitting by default
        event.preventDefault();

        // Get the password input value
        let passwordInput = document.getElementById("password");
        let password = passwordInput.value;

        // Validate the password
        let isValid = validatePassword(password);

        // Display an error message or submit the form
        if (isValid) {
            // Password is valid, allow form submission
            form.submit();
        } else {
            // Password is not valid, display an error message
            errorElement.textContent =
                "Password must be at least 8 characters long and include at least one uppercase letter, one lowercase letter, one numeric digit, and one special character (!@#$%^&*).";
        }
    });
});

function validatePassword(password) {
    // Regular expressions for password criteria
    let lengthRegex = /.{8,}/;
    let uppercaseRegex = /[A-Z]/;
    let lowercaseRegex = /[a-z]/;
    let digitRegex = /[0-9]/;
    let specialCharRegex = /[!@#$%^&*]/;

    // Check if the password meets all criteria
    return (
        lengthRegex.test(password) &&
        uppercaseRegex.test(password) &&
        lowercaseRegex.test(password) &&
        digitRegex.test(password) &&
        specialCharRegex.test(password)
    );
}