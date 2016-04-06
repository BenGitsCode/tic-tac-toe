'use strict';

// user require with a reference to bundle the file and use it in this file
// var example = require('./example');

// use require without a reference to ensure a file is bundled


// require('assets/scripts/index.js');

let turnClick = 0;
// let oPlayerImg;
// let xPlayerImg;
let playerIcons = ["Oprah", "Xzibit"];
let playerIcon = "";
// let oprahImg = "";
// let xzibitImg = "";

let board = [$("#C1"),$("#C2"),$("#C3"),$("#C4"),$("#C5"),$("#C6"),$("#C7"),$("#C8"),$("#C9")];

let topRowWin = [$("#C1"),$("#C2"),$("#C3")];
let centerRowWin = [("#C4"),$("#C5"),$("#C6")];
let botRowWin = [("#C7"),$("#C8"),$("#C9")];
let topColWin = [("#C1"),$("#C4"),$("#C7")];
let centerColWin = [("#C2"),$("#C5"),$("#C8")];
let botColWin = [("#C3"),$("#C6"),$("#C9")];
let leftDiagWin = [("#C1"),$("#C5"),$("#C9")];
let rightDiagWin = [("#C3"),$("#C5"),$("#C7")];

let winArray = [
  topRowWin,
  centerRowWin,
  botRowWin,
  topColWin,
  centerColWin,
  botColWin,
  leftDiagWin,
  rightDiagWin,
];

// takes num of clicks % 2  to determine player icon
function getPlayer(numOfClicks){
  if (numOfClicks % 2 === 0) {
  playerIcon = playerIcons[0];
} else {
 playerIcon = playerIcons[1];
}

}

// THIS WORKS by assigning class changes with color background changes of
// red and blue to players x and o

$('td').on('click', function(){
    if (turnClick % 2 === 0) {
    playerIcon = playerIcons[0];
    } else {
    playerIcon = playerIcons[1];
  }
  let currentCell = $(this);
  if (currentCell.hasClass('start-cell')) {
    console.log(currentCell.attr('class'));
    currentCell.removeClass('start-cell');
    console.log(currentCell.attr('class'));
    currentCell.addClass('playerIcon');
    console.log(currentCell.attr('class'));
    console.log((playerIcon));
  if (playerIcon === 'Xzibit') {     //should this be playerIcons[0] instead of "xzibit"?
    currentCell.addClass('xzibit');
  }else {
    currentCell.addClass('oprah');
    }
    turnClick++;
  }
  }
);



// listens for click event on td, sets clicked cell to currentCell and inserts
// string of current player
// THIS VERSION WORKS
// it assigns string names to player X and O

// $('td').on('click', function(){
//   if (turnClick % 2 === 0) {
//   playerIcon = playerIcons[0];
// } else {
// playerIcon = playerIcons[1];
// }
// let currentCell = $(this);
//   console.log(playerIcon);
//   console.log(turnClick);
//   currentCell.text(playerIcon);
//   console.log(currentCell.attr('id')); //logs which cell is clicked by it's id
//   console.log(currentCell.attr('class')); // logs the class of clicked cell
//   //checks move validity
//   currentCell.text(playerIcon);
//    turnClick++;
// });



//testing different winner function
function getWinner(playerIcon) {
  let winner = false;
  if (
      //Wins ROWS
      (playerIcon === $("#C1") && playerIcon === $("#C2") && playerIcon === $("#C3")) ||
      (playerIcon === $("#C4") && playerIcon === $("#C5") && playerIcon === $("#C6")) ||
      (playerIcon === $("#C6") && playerIcon === $("#C7") && playerIcon === $("#C8")) ||

      //Wins COLUMNS
      (playerIcon === $("#C1") && playerIcon === $("#C3") && playerIcon === $("#C")) ||
      (playerIcon === $("#C1") && playerIcon === $("#C4") && playerIcon === $("#C")) ||
      (playerIcon === $("#C2") && playerIcon === $("#C5") && playerIcon === $("#C")) ||

      //Wins DIAGONALLY
      (playerIcon === $("#C1") && playerIcon === $("#C4") && playerIcon === $("#C"))||
      (playerIcon === $("#C2") && playerIcon === $("#C4") && playerIcon === $("#C")))

      {

    winner = true;
      // console.log(winner 'is the winner');
    }
    return winner;
    console.log(winner + " wins!");
  }













// let checkWin = function(playerIcon) {
//   let win = false;
//   if (turnClick >= 4) {
//
//   }
//   for (var i = 0; i < board.length; i++) {
//     if (winArray = true)
//   }
//
// };

// checks for a tie
// function isTie(){
//   var tie = false;
//   if (turnClick >= 9){
//     tie = true;
//     }
//     return tie;
//   }










// Phils wincheck code


// let hasUserClass = function(element){
//  return element.hasClass(users.currentPlayer.cssClass);
// };
//
// let winCheck = function(winArray){
//    for (let i = 0; i < winArray.length; i++) {
//      if(winArray[i].every(hasUserClass)) {
//        users.winner = users.currentPlayer.username;
//        $('.top-box').text(users.winner + " Wins!");
//        $('.top-box').css({
//          'opacity': '1',
//        'background': users.currentPlayer.background});
//        break;
//    }
//  }
// };
