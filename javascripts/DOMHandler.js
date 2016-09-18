var breadChooser = document.getElementById("bread");
var meatChooser = document.getElementById("meat");
var cheeseChooser = document.getElementById("cheese");
var condimentChooser = document.getElementById("condiments");
var veggieChooser = document.getElementById("veggies");

var submitButton = document.getElementById("submitButton");
var outputPrice = document.getElementById("output");

submitButton.addEventListener("click", function(event){
	alert("Sorry, this isn't a real sandwich shop!");
});

meatChooser.addEventListener("change", function(event) {
  selectedMeat = event.target.value;
  SandwichMaker.addMeat(selectedMeat);
  console.log("selectedMeat: ", selectedMeat);
});

breadChooser.addEventListener("change", function(event) {
  selectedBread = event.target.value;
  SandwichMaker.addBread(selectedBread);
  console.log("selectedBread: ", selectedBread);
});

cheeseChooser.addEventListener("change", function(event) {
  selectedCheese= event.target.value;
  SandwichMaker.addCheese(selectedCheese);
  console.log("selectedCheese: ", selectedCheese);
});

condimentChooser.addEventListener("change", function(event) {
  selectedCondiment = event.target.value;
  SandwichMaker.addCondiments(selectedCondiment);
  console.log("selectedCondiments: ", selectedCondiment);
});

veggieChooser.addEventListener("change", function(event) {
  selectedVeggie = event.target.value;
  SandwichMaker.addVeggie(selectedVeggie);
  console.log("selectedVeggie: ", selectedVeggie);
});

submitButton.addEventListener("change", function(event){

})