angular
    .module("ticTacApp")
    .controller("ticTacController", ticTacController);
//tested attached console.log("controller attached")

function ticTacController(){
 	var self=this;
//sets board with squares
 	self.board = [{square: ""},{square: ""},{square: ""},{square: ""},{square: ""},{square: ""},{square: ""},{square: ""},{square: ""}]
 	self.turn="X";
 	self.message=self.turn+"\'s turn";

 	self.tic= function(i){
 		console.log(i);
//check if square is empty and marks
 		if (self.board[i].square ===""){
 			self.board[i].square = self.turn;
 			getWinner();
//switches X/O
 			if(self.turn=="X"){
 				self.turn="O"
 			}
 			else{
 				self.turn="X"
 			}
//resets message
 			self.message=self.turn+"\'s turn";
		}
//if already taken sends alert
		else{
			alert("Please choose another box");
		}
 	}
 	function getWinner() {
		console.log ("winner");
//checks for X win
	    if(((self.board[0].square === self.turn) && (self.board[1].square === self.turn) && (self.board[2].square === self.turn)) ||
	       ((self.board[3].square === self.turn) && (self.board[4].square === self.turn) && (self.board[5].square === self.turn)) ||
	       ((self.board[6].square === self.turn) && (self.board[7].square === self.turn) && (self.board[8].square === self.turn)) ||
	       ((self.board[0].square === self.turn) && (self.board[3].square === self.turn) && (self.board[6].square === self.turn)) ||
	       ((self.board[1].square === self.turn) && (self.board[4].square === self.turn) && (self.board[7].square === self.turn)) ||
	       ((self.board[2].square === self.turn) && (self.board[5].square === self.turn) && (self.board[8].square === self.turn)) ||
	       ((self.board[0].square === self.turn) && (self.board[4].square === self.turn) && (self.board[8].square === self.turn)) ||
	       ((self.board[2].square === self.turn) && (self.board[4].square === self.turn) && (self.board[6].square === self.turn)))
	    {
	        alert(self.turn+" has won!");
// resets board
	        for (var c=0; c < 9; c++){
	        self.board[c].square="";
	        }
	        return;        
	    }
//checks for tie 
	    else if (
	      (self.board[0].square != "") && (self.board[1].square != "") && (self.board[2].square != "") &&
	      (self.board[3].square != "") && (self.board[4].square != "") && (self.board[5].square != "") &&
	      (self.board[6].square != "") && (self.board[7].square != "") && (self.board[8].square != "") )
	      {alert("nobody wins") 
//resets board
	        for (var c=0; i < 9; i++){
	        self.board[i].square="";
	        }
	        return;
	      }
//turn counter to check for winner after 5 and at 9 do a draw
		}
}


