'use strict';

require('assets/scripts/index.js');

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
