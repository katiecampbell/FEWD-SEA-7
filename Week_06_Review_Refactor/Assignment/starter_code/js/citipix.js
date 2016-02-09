$(document).ready(function() {
	console.log("hello");

	var $selectField = $("#city-type");

	// imageArray = [
	// 	"../images/au.jpg",
	// 	"../images/nyc.jpg",
	// 	"../images/nyc.jpg",
	// 	"../images/nyc.jpg",
	// 	"../images/nyc.jpg",
	// 	"../images/nyc.jpg",
	// ]

	$selectField.on("change", function() {
		console.log("it changed");

		var city = $(this).val();
		console.log(city);
			$("body").removeClass().addClass(city);

	});

});

// // This is the start of one way
// var $selectField = $("#city-type")

// // Here is another way
// for(var i = 0; < cities.length; i++) {
// 	var option = "<option value='";
// 	option+= "'>" + cities[i] + "<option>";
// 	$selectField.append(option);
// }

// Bind select field event onChange()