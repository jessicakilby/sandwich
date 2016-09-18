var SandwichMaker = (function(){

	var totalPrice = 0;

	return {
		addTopping: function(toppingPrice) {
	      totalPrice += toppingPrice;
	      console.log("toppingPrice: ", toppingPrice);
	      console.log("totalPrice: ", totalPrice);
	      outputPrice.innerHTML = "<div>Your final price is: "+(Math.ceil(totalPrice * 100) / 100) +"</div>";
		}
		// removeTopping: function(toppingPrice) {
		// 	totalPrice -= toppingPrice;
		//     console.log("toppingPrice: ", toppingPrice);
		//     console.log("totalPrice: ", totalPrice);
		// 	outputPrice.innerHTML = "<div>Your final price is: "+(Math.ceil(totalPrice * 100) / 100) +"</div>";
		// };
	};
})(SandwichMaker || {});

