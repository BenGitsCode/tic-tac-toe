'use strict';

require('assets/scripts/index.js');

let turnClick = 0;
let oPlayerImg;
let xPlayerImg;
let playerIcon = ["Xzibit", "Oprah"];

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

// // takes num of clicks % 2
// function getCharacter(numOfClicks){
//   var index = numOfClicks % 2;
//   return playerIcon[index];
// }



//td selects all cells

$('td').on('click', function(){
  turnClick++;
  console.log(turnClick)
  let currentCell = $(this).id;
  //checks move validity
});



let checkWin = function(winArray) {
  if (turnClick >= 4) {
  }
  for (var i = 0; i < array.length; i++) {
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
