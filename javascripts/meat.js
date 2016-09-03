var SandwichMaker = (function(newSandwich){
	var meat = {
		"ham": 2.10, 
		"turkey": 2.20, 
		"roast": 2.30, 
		"bacon": 2.40
	};
	
	if 


	newSandwich.getNewMeat = function() {
		return meat;
	};
	newSandwich.setNewMeat = function(newMeat) {
		meat.push(newMeat);
	};

	return newSandwich;

})(SandwichMaker || {});