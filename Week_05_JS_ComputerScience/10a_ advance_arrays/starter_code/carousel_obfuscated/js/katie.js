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

	 	// have all images been voted on? If so, then invoke the calculatevotes
	 	if(votes_array.length==allImages.length){
	 		calculateVotes();
	 	}

		function calculateVotes(){
			var ave=0;
			if(votes_array.length!==0){
				votes_array.forEach(function(element){
					ave+=parseInt(element);
				});
				ave=(Math.round((ave/votes_array.length) * 100) / 100).toFixed(2);
			}
			$("#image-to-vote-on+div").text("You have reached the end. Total deliciousness score was: "+ave);
		}
	});
});