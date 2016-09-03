var SandwichMaker = (function(newSandwich){
	var condiments = {
		"mayonnaise": 0.10, 
		"ketchup": 0.20, 
		"mustard": 0.30, 
		"BBQ": 0.40
	};

	newSandwich.getNewCondiments = function() {
		return condiments;
	};
	newSandwich.setNewCondiments = function(newCondiments) {
		condiments.push(newCondiments);
	};

	return newSandwich;

})(SandwichMaker || {});