$(document).ready(function() {
	var score = 0;

	$('#zero').click(zero);
	$('#add5').click(add5);
	$('#add10').click(add10);
	$('#sub1').click(subtract1);

	function zero() {
		score = 0;
		$("#result").html(score);
	}

	function add5() {
		score = score + 5;
		$("#result").html(score);
	}

	function add10() {
		score = score + 10;
		$("#result").html(score);
	}

	function subtract1() {
		score = score - 1;
		$("#result").html(score);
	};
});
	// 	$("#zero").click(function(){
	// 		score = 0;
	// 		console.log(score);
		
	// var add5 = score + 5
	// $("#add5").click(function() {
	// 	$("#result").html(add5);

	// 	var add10 = add5 + 10
	// 	$("#add10").click(function() {
	// 		$("#result").html(add10);

	// 		var subtract1 = add10 - 1
	// 		$("#sub1").click(function() {
	// 			$("#result").html(subtract1);

	// 					function resetCount (){
	// 						$("#result").html(score);
	// 					}
	// 				});
	// 			});
	// 		});
	// 	});
	// });

