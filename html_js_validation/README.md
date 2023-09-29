Javascript Form Validation
Summary: in this tutorial, you’ll learn about JavaScript form validation by building a signup form from scratch.

What is form validation
Before submitting data to the server, you should check the data in the web browser to ensure that the submitted data is in the correct format.

To provide quick feedback, you can use JavaScript to validate data. This is called client-side validation.

If you don’t carry the client-side validation, it may cause a bad user experience. In this case, you may feel a noticeable delay because it takes time for the form data to transfer between the web browsers and the server.

Unlike the client-side validation that performs in the web browser, the server-side validation is performed on the server. It’s critical always to implement the server-side validation.

The reason is that client-side validation is quite easy to bypass. Malicious users can disable JavaScript and submit bad data to your server.

In this tutorial, you’re going to focus on the client-side validation only.

Client-side validation options
When it comes to client-side validation, you’ll have two options:

JavaScript validation: you develop the validation logic using JavaScript. Or you can use a library to do so.
Built-in form validation: you can use the HTML5 form validation features. This validation has a better performance than JavaScript validation. However, it isn’t as customizable as JavaScript validation.
JavaScript validation
You will create a simple signup form with four input fields: username, email, password, and confirm password.

When you click the sign up without filling anything or filling incorrect data format, the form will show error messages: