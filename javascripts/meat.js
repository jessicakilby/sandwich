var SandwichMaker = (function(meatChoice){
	var meatPrice = {
		"ham": 2.10, 
		"turkey": 2.20, 
		"roast": 2.30, 
		"bacon": 2.40
	};
	
	meatChoice.addMeat = function(meatOption) {
		var meatOptionPrice = meatPrice[meatOption];
		SandwichMaker.addTopping(meatOptionPrice);
	};

	return meatChoice;

})(SandwichMaker || {});

	