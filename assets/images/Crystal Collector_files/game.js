// Defining  Variables/

var gameNumber = Math.floor((Math.random()* 120) + 19) ;
var youNumber= 0;
var youNumberNum = Number(youNumber);
var wins = 0;
var losses = 0;
var phrase ;


// assigning values to buttons

 var button1 = Math.floor((Math.random()* 12) + 1); 
 	var b1 = Number(button1);
 	 

var button2 = Math.floor((Math.random()* 12) + 1);  
 	 var	b2 = Number(button2);	
 	 	
var button3 = Math.floor((Math.random()* 12) + 1); 
 	  var	b3 = Number(button3);


var button4 = Math.floor((Math.random()* 12) + 1);  	 
 	 	var b4 = Number(button4);	
 	 	
 	 
// function for computer picking numbeR	
 	function numberGen(){
 	
		console.log(gameNumber);
		$("#gameBox").html(gameNumber);
		return
	}


	

// buttons clicks
 var bx1 = function(){
 	$("#button1").on("click", function() {
			 console.log(button1)
			 	youNumberNum = youNumberNum + b1
			 	console.log(youNumberNum)
			 	$("#number").html(youNumberNum);
			 	return
			 	 });
 return;
 }
	var bx2 = function(){		
	 $("#button2").on("click", function() {
			 		console.log(button2)
			 		youNumberNum = youNumberNum + b2
			 		console.log(youNumberNum)
			 		$("#number").html(youNumberNum);
			 		return
			 	});
	 return;
	}

var bx3 = function(){
	$("#button3").on("click", function() {
	 		console.log(button3)
	 		youNumberNum = youNumberNum + b3
	 		console.log(youNumberNum);
	 		$("#number").html(youNumberNum);
	 		return
		});
	return;
}
	
	var bx4 = function(){
	 $("#button4").on("click", function() {
	 		console.log(button4)
	 		youNumberNum = youNumberNum + b4
	 		console.log(youNumberNum);
	 		$("#number").html(youNumberNum); 
	 		return
		});
	 return;
	}


debugger


$(document).ready(function(){
		numberGen();
		console.log(gameNumber);
					bx1();
					bx2();
					bx3();
					bx4();
		
if (gameNumber === youNumberNum){
				console.log(gameNumber);
				wins++
				console.log(wins)
				$("#Wins").html("Wins: " + wins)
				alert("you win")
			}

  else if(gameNumber > youNumberNum){
				losses++
				console.log(losses);
				$("#Losses").html("Losses: " + losses);
				alert("You Loose")
				}	
			
	
	 	
	});







	
	

	 


	

		











	
         









// numberGen();
// // 
// }
	




