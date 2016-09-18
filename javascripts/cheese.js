var SandwichMaker = (function(cheeseChoice){
	var cheesePrice = {
		"mozzarella": 1.60, 
		"swiss": 1.70, 
		"provolone": 1.80, 
		"american": 1.5
	};

	cheeseChoice.addCheese = function(cheeseOption) {
		var cheeseOptionPrice = cheesePrice[cheeseOption];
		SandwichMaker.addTopping(cheeseOptionPrice);
	};

	return cheeseChoice;

})(SandwichMaker || {});