document.addEventListener("DOMContentLoaded", function () {
    let form = document.getElementById("emailForm");
    let errorElement = document.getElementById("error");
    form.addEventListener("submit", function (event) {
        event.preventDefault();

        let emailInput = document.getElementById("email");
        let email = emailInput.value;

        let isValid = validateEmail(email);

        if (isValid) {
            form.submit();
        }else {
            errorElement.textContent = "Please enter a valid email address.";
        }
    });
});

function validateEmail(email) {
    let emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

    return emailRegex.test(email);
}