$(document).ready(function() {
	console.log("js loaded");
	var allImages = [
		"./images/food1.jpg",
		"./images/food2.jpg",
		"./images/food3.jpg",
		"./images/food4.jpg",
		"./images/food5.jpg",
		"./images/food6.jpg",
		"./images/food7.jpg",
		"./images/food8.jpg"
	];

	image_index = 0;

	var votes_array = [];

	$('#your-vote').change(function() {

		votes_array.push($("#your-vote").val());
		console.log(votes_array);
		if (image_index < allImages.length){
			image_index++;
	 		$("#image-to-vote-on").attr("src", allImages[image_index]);
	 	}
	});
});
