var SandwichMaker = (function(newSandwich){
	var bread = {
		"white": 1.00, 
		"wheat": 1.10, 
		"rye": 1.20, 
		"ciabatta": 1.3
	};

	newSandwich.getNewBread = function() {
		return bread;
	};
	newSandwich.setNewBread = function(newBread) {
		bread.push(newBread);
	};

	return newSandwich;

})(SandwichMaker || {});