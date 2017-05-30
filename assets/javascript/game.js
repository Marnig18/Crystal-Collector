// Defining  Variables/

var gameNumber = 0;
var youNumber= 0;
var youNumberNum = Number(youNumber);
var wins = 0;
var losses = 0;
var phrase ;

// $('.btn').on('click', function(){
// 	co
// })

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
 		gameNumber = Math.floor((Math.random()* 120) + 19) ;
		console.log(gameNumber);
		$("#gameBox").html(gameNumber);
	}

function reset(){
	b1 = Number(Math.floor((Math.random()* 12) + 1));
	b2 = Number(Math.floor((Math.random()* 12) + 1));
	b3 = Number(Math.floor((Math.random()* 12) + 1));
	b4 = Number(Math.floor((Math.random()* 12) + 1));

	youNumberNum = 0;
	console.log(youNumberNum)
	numberGen();	
	console.log("newNumber " + gameNumber)
	$("#number").html(youNumberNum);


}

 $(document).ready(function(){
		numberGen();
		console.log(gameNumber);
		console.log(youNumberNum);
		start();
	});

function start(){
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
			 		console.log(youNumberNum)	;
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

 
  
  function checkScore(){	
		if (gameNumber === youNumberNum){
					console.log(gameNumber);
					wins++;
					console.log(wins);
					$("#Wins").html("Wins: " + wins);
					$("#phrase").html("You Win!!!");
					reset();
				}

	  else if (gameNumber < youNumberNum && youNumberNum !== 0){
					console.log(gameNumber);
					losses++;
					console.log(losses);
					$("#Losses").html("Losses: " + losses);
					$("#phrase").html("You Loose!");
					reset();
				}
		
		}  



	

	



		



 // 
			
	// 		}
		
// 

	 	







	
	

	 


	

		











	
         









// numberGen();
// // 
// }
	




