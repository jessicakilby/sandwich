var SandwichMaker = (function(breadChoice){
	var breadPrice = {
		"white": 1.00, 
		"wheat": 1.10, 
		"rye": 1.20, 
		"ciabatta": 1.30
	};

	breadChoice.addBread = function(breadOption) {
		var breadOptionPrice = breadPrice[breadOption];
		SandwichMaker.addTopping(breadOptionPrice);
	};

	return breadChoice;

})(SandwichMaker || {});