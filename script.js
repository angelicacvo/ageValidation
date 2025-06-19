let name = prompt("Please enter your name: ");
let age = prompt("Please enter your age: ");
age = parseInt(age);

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
