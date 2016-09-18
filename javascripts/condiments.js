var SandwichMaker = (function(condChoice){
	var condPrice = {
		"mayonnaise": 0.10, 
		"ketchup": 0.20, 
		"mustard": 0.30, 
		"BBQ": 0.40
	};

	condChoice.addCondiments = function(condOption) {
		var condOptionPrice = condPrice[condOption];
		SandwichMaker.addTopping(condOptionPrice);
	};

	return condChoice;

})(SandwichMaker || {});