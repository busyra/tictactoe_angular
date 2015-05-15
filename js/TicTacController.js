angular
    .module("ticTacApp")
    .controller("ticTacController", ticTacController);
	//tested attached console.log("controller attached")
	

function ticTacController(){
 	var self = this;
	//sets board with squares
 	self.board = [{square: ""},{square: ""},{square: ""},{square: ""},
 				  {square: ""},{square: ""},{square: ""},{square: ""},
 				  {square: ""}];
 	self.turn = "X";
 	self.winner= "O";
 	self.player1wins= 0;
 	self.player2wins= 0;
 	//notify players turn
 	self.message = self.turn + "s turn";
 	/*
 	will check off square with player's avatar
 	call getWinner function to check if anyone has won
 	and switch player turns
 	*/
 	self.tic = function(i){
 		console.log(i);
		//check if square is empty and marks
 		if (self.board[i].square === ""){
 			self.board[i].square = self.turn;
 			console.log("WINNER")
 			getWinner();
			//switches turn X/O
 			if(self.turn == "X"){
 				self.turn = "O";
 				self.winner = "X";
 			}
 			else {
 				self.turn = "X";
 				self.winner="O";
 			}
		//resets message
 		self.message = self.turn + "\'s turn";
		}
		//if already taken sends alert
		else{
			alert("Please choose another box");
		}
 	}
 	/*
 	will check if anyone has won the game or has tied up the game
 	*/
 	function getWinner() {
		console.log ("winner");
		//checks for player has a win horizontally, vertically, diagnolly
	    if(
	       ((self.board[0].square === self.turn) && (self.board[1].square === self.turn) && (self.board[2].square === self.turn)) 
	       || ((self.board[3].square === self.turn) && (self.board[4].square === self.turn) && (self.board[5].square === self.turn)) 
	       || ((self.board[6].square === self.turn) && (self.board[7].square === self.turn) && (self.board[8].square === self.turn)) 
	       || ((self.board[0].square === self.turn) && (self.board[3].square === self.turn) && (self.board[6].square === self.turn)) 
	       || ((self.board[1].square === self.turn) && (self.board[4].square === self.turn) && (self.board[7].square === self.turn)) 
	       || ((self.board[2].square === self.turn) && (self.board[5].square === self.turn) && (self.board[8].square === self.turn)) 
	       || ((self.board[0].square === self.turn) && (self.board[4].square === self.turn) && (self.board[8].square === self.turn)) 
	       || ((self.board[2].square === self.turn) && (self.board[4].square === self.turn) && (self.board[6].square === self.turn))
	       )
	    {	
	    	// notifies the player has won
	        setTimeout(function(){
	        	alert(self.winner + " has won!");
	        	if(self.winner === "X"){
	        		self.player1wins= self.player1wins+1;
				}
				else{
					self.player2wins= self.player2wins+1;
				}
	        	for (var c  =0 ; c < 9 ; c++){
	        	self.board[c].square = "";
	        	}

	        }, 50)
			// resets board
			// console.log(self.turn+"has won")
	        // for (var c  =0 ; c < 9 ; c++){
	        // self.board[c].square = "";
	        // }
	        return;        
	    }
		//checks for tie by checking if all squares have been filled and there is no winner
	    else if (
	      (self.board[0].square != "") && (self.board[1].square != "") && (self.board[2].square != "") &&
	      (self.board[3].square != "") && (self.board[4].square != "") && (self.board[5].square != "") &&
	      (self.board[6].square != "") && (self.board[7].square != "") && (self.board[8].square != "") )
	      {
	      	alert("nobody wins");
			//resets board
	        for (var c = 0; c < 9; c++){
	        	self.board[c].square = "";
	        }
	        return;
	      }
	}
}


