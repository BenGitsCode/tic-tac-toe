'use strict';



let displayChars = ['X', 'O'];
let board = ['', '', '', '', '', '', '', '', ''];
let xWins = 0;
let oWins = 0;
let oPlayerImg;
let xPlayerImg;

// all potential win possibilities


let getWinner = function(player){
  let winner = false;
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
    console.log(player 'is the winner');
    }
    return winner;
  }
