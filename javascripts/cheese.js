var SandwichMaker = (function(newSandwich){
	var cheese = {
		"mozzarella": 1.60, 
		"swiss": 1.70, 
		"provolone": 1.80, 
		"american": 1.5
	};

	newSandwich.getNewCheese = function() {
		return cheese;
	};
	newSandwich.setNewCheese = function(newCheese) {
		cheese.push(newCheese);
	};

	return newSandwich;

})(SandwichMaker || {});