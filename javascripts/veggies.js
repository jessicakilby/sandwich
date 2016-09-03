var SandwichMaker = (function(newSandwich){
	var veggies = {
		"lettuce": 0.60, 
		"tomato": 0.70, 
		"onion": 0.80, 
		"pickle": 0.50
	};

	newSandwich.getNewVeggie = function() {
		return veggies;
	};
	newSandwich.setNewVeggie = function(newVeggie) {
		veggies.push(newVeggie);
	};

	return newSandwich;

})(SandwichMaker || {});