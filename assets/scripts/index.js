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

// takes num of clicks % 2
function getPlayer(numOfClicks){
  if (numOfClicks % 2 === 0) {
  playerIcon = playerIcons[0];
} else {
playerIcon = playerIcons[1];
}
}





//listens for click event on any td
// puts player icon in currentCell (clicked cell)

$('td').on('click', function(){
  turnClick++;
  if (turnClick % 2 === 0) {
  playerIcon = playerIcons[0];
} else {
playerIcon = playerIcons[1];
}
  console.log(playerIcon);
  console.log(turnClick);
  let currentCell = $(this);
  currentCell.text(playerIcon);
  console.log(currentCell.id);
  //checks move validity
  currentCell.text(playerIcon);
});



let checkWin = function(winArray) {
  let win = false;
  if (turnClick >= 4) {

  }
  for (var i = 0; i < board.length; i++) {
    array[i];
  }

};

// checks for a tie
function isTie(){
  var tie = false;
  if (turnClick >= 9){
    tie = true;
    }
    return tie;
  }










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
