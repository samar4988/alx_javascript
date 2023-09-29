document.addEventListener("DOMContentLoaded", function () {
    let dynamicForm = document.getElementById("dynamicForm");
    let numFieldsSelect = document.getElementById("numFields");
    let inputContainer = document.getElementById("inputContainer");

    dynamicForm.addEventListener("submit", function (event) {
        event.preventDefault();
        validateForm();
    });
    numFieldsSelect.addEventListener("change", function () {
        let selectedValue = parseInt(numFieldsSelect.value, 10);
        generateInputFields(selectedValue);
    });
    function generateInputFields(numFields) {
        inputContainer.innerHTML = ""; // clear previous input fields

        for (let j = 1; j <= numFields; j++) {
            let inputField = document.createElement("input");
            inputField.type = "text";
            inputField.name = "field" + j;

            inputContainer.appendChild(inputField);
        }
    }
    function validateForm() {
        let inputFields = inputContainer.querySelectorAll("input[type='text']");

        for (let j = 0; j < inputFields.length; j++) {
            if (inputFields[j].value.trim() === "") {
                alert("Please fill in all fields");
                return;
            }
        }
        dynamicForm.submit();
    }
    generateInputFields(parseInt(numFieldsSelect.value, 10));
});