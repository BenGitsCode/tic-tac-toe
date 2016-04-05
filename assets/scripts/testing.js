'use strict';

// win conditions
let board = [0, 1, 2, 3, 4, 5, 6, 7, 8];

 let x = "xzibit";
 let o = "oprah";
 //Checks to see if either X or O has hit all the winning combinations

 let getWinner = function(player){
   var winner = false;
   if (
       //Wins Horizontal
       (player === board[0] && player === board[1] && player === board [2]) ||
       (player === board[3] && player === board[4] && player === board [5]) ||
       (player === board[6] && player === board[7] && player === board [8]) ||

       //Wins Vertically
       (player === board[0] && player === board[3] && player === board [6]) ||
       (player === board[1] && player === board[4] && player === board [7]) ||
       (player === board[2] && player === board[5] && player === board [8]) ||

       //Wins Diagonally
       (player === board[0] && player === board[4] && player === board [8]) ||
       (player === board[2] && player === board[4] && player === board [6])) {

     winner = true;
       // console.log(winner 'is the winner');
     }
     return winner;
