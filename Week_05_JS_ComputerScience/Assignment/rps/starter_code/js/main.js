// hint: You will need to look at the jQuery docs
// ready() https://api.jquery.com/ready/
// click() https://api.jquery.com/click/
// html() https://api.jquery.com/html/
// String concatenation used the plus symbol (+)
// You can mix variables with strings (text wrapped in quotes)

// add your functions here

function getComputerPlay() {
  // Create an array called plays below this line. It should
  // have the options for the RPS game.
  var play = plays[Math.floor(Math.random() * plays.length)];
  return play;
}

// add your doc ready statement right
// this is where you'll bind evnet (hint: click)
$(document).ready(function() {
	var computerChoiceArray = ["rock", "paper", "scissors"];
		console.log(computerChoiceArray[1]);
	function getRandomChoice() {
		console.log(computerChoiceArray.length);
		var aRandomNumber = Math.random();
		var roundedNumber = Math.floor(aRandomNumber);
		console.log(roundedNumber);

	}
	getRandomChoice();
	console.log("hello");
		var userChoice = "rock";
		var computerChoice = "rock";

	$("#rock").click(function() {
		console.log(userChoice);
	});
	$("#paper").click(function() {
		console.log("paper clicked");
	});
	$("#scissors").click(function() {
		console.log("scissors clicked");
	});
	// computer chooses rock, paper, or scissors upon click
	var getComputerChoice = function() {
		console.log(computerChoice);
		return "rock";
	}
	getComputerChoice();
	var compareTwoStrings = function() {
		if(userChoice === computerChoice); {
			console.log("Cool!");
		}
	}
	compareTwoStrings();// 
});

