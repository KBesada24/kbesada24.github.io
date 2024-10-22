let userName;

let greeting = (window.onload = function () {
  userName = prompt("Welcome! please enter your name:", "Kirollos");
  alert("Welcome " + userName + "! ");
});

let item = (window.onload = function () {
  let item = prompt("What would you like to order?", "Cupcake");
  alert("Your order is " + item + "!");
});

let numOfItems = (window.onload = function () {
  let numOfItems = prompt("How many would you like?", "1");
  alert("Your order is " + numOfItems + " " + item + "s!");
});

document.writeln(
  "Thank you for your order of " +
    numOfItems +
    " " +
    item +
    " " +
    userName +
    "!"
);
