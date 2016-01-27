$(document).ready(function() {
	var score = 0;
		$("#zero").click(function(){
			score = 0;
			console.log(score);
		
	var add5 = score + 5
	$("#add5").click(function() {
		console.log(add5);

		var add10 = add5 + 10
		$("#add10").click(function() {
			console.log(add10);

			var subtract1 = add10 - 1
			$("#sub1").click(function() {
				console.log(subtract1);
				});
			});
		});
	});
});

