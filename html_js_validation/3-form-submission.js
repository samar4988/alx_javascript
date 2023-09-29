document.addEventListener("DOMContentLoaded", function () {
    let submitForm = document.getElementById("submitForm");
    let errorElement = document.getElementById("error");
    let successElement = document.getElementById("success");

    submitForm.addEventListener("submit", function (event) {
        event.preventDefault();

        let nameInput = document.getElementById("name");
        let emailInput = document.getElementById("email");
        let name = nameInput.value.trim();
        let email = emailInput.value.trim();

        if (name === "" || email === "") {
            errorElement.textContent = "Please fill in all required fields";
            successElement.textContent = "";
        }
        else {
            errorElement.textContent = "";
            
            successElement.textContent = "Form submitted successfully!";
            submitForm.reset();
        }
    });
});