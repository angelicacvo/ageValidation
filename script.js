// variable definition
let name = prompt("Please enter your name: ");
let age = prompt("Please enter your age: ");
// convert age into int numbers
age = parseInt(age);

// conditional to validate first if age is a number, if it's not it shows an error,
// if the person is over 18 years old shows a message, if is under 18 years old shows another message.
if (isNaN(age)) {
  console.error("value is not valid. Keep trying.");
  alert(`Hi ${name}, please enter a valid number`);
} else if (age < 18) {
  alert(
    `Hi ${name}, you are under 18 years old. Keep learning to become an excellent programmer.`
  );
} else {
  alert(
    `Hi ${name}, you're over 18 years old. You're ready to become a programmer. Good luck!`
  );
}
