var SandwichMaker = (function(veggieChoice){
	var veggiePrice = {
		"lettuce": 0.60, 
		"tomato": 0.70, 
		"onion": 0.80, 
		"pickle": 0.50
	};

	veggieChoice.addVeggie = function(veggieOption) {
		var vegOptionPrice = veggiePrice[veggieOption];
		SandwichMaker.addTopping(vegOptionPrice);
	};

	// veggieChoice.removeVeggie = function(veggieOption){
	// 	var vegOptionPrice = veggiePrice[veggieOption];
	// 	SandwichMaker.addTopping(vegOptionPrice);
	// };

	return veggieChoice;

})(SandwichMaker || {});