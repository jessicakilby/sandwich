// Variable to hold the final price. Default to 0.
var finalSandwichPrice = 0;

// Variable to hold topping that the user selects
var selectedTopping;

// Get a reference to the <select> element that has all the meat options
var breadChooser = document.getElementById("bread");
var meatChooser = document.getElementById("meat");
var cheeseChooser = document.getElementById("cheese");
var condimentsChooser = document.getElementById("condiments");
var veggiesChooser = document.getElementById("veggies");

/* 
  A <select> element broadcasts a change event, so you listen for it
  and get the value of the topping from your augmented IIFE
*/
meatChooser.addEventListener("change", function(event) {
  selectedTopping = event.target.value;

  // Determine the price of the topping chosen

  // Add the topping to the SandwichMaker to increase the total price
});

breadChooser.addEventListener("change", function(event) {
  selectedTopping = event.target.value;
});

cheeseChooser.addEventListener("change", function(event) {
  selectedTopping = event.target.value;
});

condimentsChooser.addEventListener("change", function(event) {
  selectedTopping = event.target.value;
});

veggiesChooser.addEventListener("change", function(event) {
  selectedTopping = event.target.value;
});

