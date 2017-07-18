// Defining  Variables/

var gameNumber = 0;
var youNumber = 0;
var youNumberNum = Number(youNumber);
var wins = 0;
var losses = 0;

// assigning values to buttons

var button1 = Math.floor((Math.random() * 12) + 1);
var b1 = Number(button1);


var button2 = Math.floor((Math.random() * 12) + 1);
var b2 = Number(button2);

var button3 = Math.floor((Math.random() * 12) + 1);
var b3 = Number(button3);


var button4 = Math.floor((Math.random() * 12) + 1);
var b4 = Number(button4);


// function for computer to pick number
function numberGen() {
	gameNumber = Math.floor((Math.random() * 120) + 19);
	console.log(gameNumber);
	$("#gameBox").html(gameNumber);
}


////Reset Function
function reset() {

	///reseting the buttons with new values
	b1 = Number(Math.floor((Math.random() * 12) + 1));
	b2 = Number(Math.floor((Math.random() * 12) + 1));
	b3 = Number(Math.floor((Math.random() * 12) + 1));
	b4 = Number(Math.floor((Math.random() * 12) + 1));

	//setting starting number back to 0
	youNumberNum = 0;
	console.log(youNumberNum)
		///generating new computer number
	numberGen();
	console.log("newNumber " + gameNumber)
		//writing the new computer number to the HTML
	$("#number").html(youNumberNum);
}



////function for each gem button click
function start() {
	///on click add value of the button to current user number and display it on the screen.
	///call the check score function to compare user number to computer number
	$("#button1").on("click", function() {
		console.log(button1);
		youNumberNum = youNumberNum + b1;
		console.log(youNumberNum)
		$("#number").html(youNumberNum);
		checkScore();
	});

	$("#button2").on("click", function() {
		console.log(event.type);
		console.log(button2);
		youNumberNum = youNumberNum + b2;
		console.log(youNumberNum);
		$("#number").html(youNumberNum);
		checkScore();
	});

	$("#button3").on("click", function() {
		console.log(button3);
		youNumberNum = youNumberNum + b3;
		console.log(youNumberNum);
		$("#number").html(youNumberNum);
		checkScore();
	});

	$("#button4").on("click", function() {
		console.log(button4);
		youNumberNum = youNumberNum + b4;
		console.log(youNumberNum);
		$("#number").html(youNumberNum);
		checkScore();
	});
	return
}



function checkScore() {
	///if computer number equal user number...
	if (gameNumber === youNumberNum) {
		console.log(gameNumber);
		///increase win counter
		wins++;
		console.log(wins);
		//display win tally
		$("#Wins").html("Wins: " + wins);
		$("#phrase").html("You Win!!!");
		//call reset function to reset the game
		reset();
	}
	//if user number is greater than the computer number...		
	else if (gameNumber < youNumberNum && youNumberNum !== 0) {
		console.log(gameNumber);
		///increase win counter
		losses++;
		console.log(losses);
		///display loss tally to the screen
		$("#Losses").html("Losses: " + losses);
		$("#phrase").html("You Loose!");
		///reset the game
		reset();
	}

}



////
$(document).ready(function() {
	numberGen();
	console.log(gameNumber);
	console.log(youNumberNum);
	start();
});