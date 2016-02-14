$(document).ready(function() {
	var score = 0;
		$("#zero").click(function(){
			score = 0;
			console.log(score);
		
	var add5 = score + 5
	$("#add5").click(function() {
		$("#result").html(add5);

		var add10 = add5 + 10
		$("#add10").click(function() {
			$("#result").html(add10);

			var subtract1 = add10 - 1
			$("#sub1").click(function() {
				$("#result").html(subtract1);

						function resetCount (){
							$("#result").html(score);
						}
					});
				});
			});
		});
	});

