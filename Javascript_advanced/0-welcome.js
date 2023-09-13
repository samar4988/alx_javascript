#!/usr/bin/node
function welcome(firstName, lastName) {
  let fullName;
  function displayFullName() {
      return firstName + " " + lastName;
  }
  alert ("Welcome " +displayFullName() +"!");
  alert(fullName);
}