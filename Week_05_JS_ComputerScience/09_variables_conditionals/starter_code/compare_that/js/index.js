$(document).ready(function() {
	console.log("js loaded");

	var compareHandler = function () {
		// console.log("compareHandler");
		var num1 = parseInt($('#a').val(), 10);
		// console.log(specialMessage);

		var num2 = parseInt($("#b").val(), 10);
		// console.log(specialMessage2);

		if(num1 > num2) {
			console.log("num1 is greater than num2");
		}

		if(num1 < num2) {
			console.log("num1 is less than num2");
		}

if (num1 === num2) {
	console.log("Both numbers are equal");
}

	}



	 

	$("#submit").click(compareHandler);





	// var a;
	// var b;
	// var compareHandler = function() {
	// 	a = $("#a").val();
	// 	b = $("#b").val();
	// 		if (a > b) {
	// 				console.log("a is the greatest");
	// 				} else if (b > a) {
	// 					console.log("b is the greatest");
	// 					} else {
	// 						console.log("everything is equal");
			
	// 	}
	// };
});




























