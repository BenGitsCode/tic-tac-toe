'use strict';

const authEvents = require('./auth/events.js');
$(() => {

authEvents.addHandlers();

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

let board = ["", "", "", "", "", "", "", "", "" ];

let getWinner = function(board) {
  let win = false;
   if (playerIcon === board[0] && playerIcon === board[1] && playerIcon === board[2] ||
       playerIcon === board[3] && playerIcon === board[4] && playerIcon === board[5] ||
       playerIcon === board[6] && playerIcon === board[7] && playerIcon === board[8] ||
       playerIcon === board[0] && playerIcon === board[3] && playerIcon === board[6] ||
       playerIcon === board[1] && playerIcon === board[4] && playerIcon === board[7] ||
       playerIcon === board[2] && playerIcon === board[5] && playerIcon === board[8] ||
       playerIcon === board[0] && playerIcon === board[4] && playerIcon === board[8] ||
       playerIcon === board[2] && playerIcon === board[4] && playerIcon === board[6]){

      console.log("winner is " + playerIcon);
      win = true;
      $('td').off('click');
    } else{
    }
    console.log("Its a tie");
  };
  // checks for a tie
  function isTie(){
    let tie = false;
    if (turnClick >= 9 && getWinner === false) {
      tie = true;
      console.log("Its a tie ya'll!");
      }
    }



    $('td').one('click', function(){
      if (turnClick % 2 === 0) {
        playerIcon = playerIcons[0];
      } else {
        playerIcon = playerIcons[1];
      }
      let currentCell = $(this);
      console.log(playerIcon);
      console.log(turnClick);
      currentCell.text(playerIcon);
      $(this).data('board', playerIcon);   //This is what logs playerIcon to board array
      let attrId = $(this).attr('id');
      board[attrId] = playerIcon;
      console.log(currentCell.attr('id')); //logs which cell is clicked by it's id
      console.log(currentCell.attr('class')); // logs the class of clicked cell
      console.log(board);
      //checks move validity
      currentCell.text(playerIcon);
      turnClick++;
      getWinner(board);
      isTie(board);
    });
  });






// let topRowWin = [$("#C1"),$("#C2"),$("#C3")];
// let centerRowWin = [$("#C4"),$("#C5"),$("#C6")];
// let botRowWin = [$("#C7"),$("#C8"),$("#C9")];
// let topColWin = [$("#C1"),$("#C4"),$("#C7")];
// let centerColWin = [$("#C2"),$("#C5"),$("#C8")];
// let botColWin = [$("#C3"),$("#C6"),$("#C9")];
// let leftDiagWin = [$("#C1"),$("#C5"),$("#C9")];
// let rightDiagWin = [$("#C3"),$("#C5"),$("#C7")];
//
// let winArray = [
//   topRowWin,
//   centerRowWin,
//   botRowWin,
//   topColWin,
//   centerColWin,
//   botColWin,
//   leftDiagWin,
//   rightDiagWin,
// ];

// takes num of clicks % 2  to determine player icon
// function getPlayer(numOfClicks){
//   if (numOfClicks % 2 === 0) {
//   playerIcon = playerIcons[0];
// } else {
//  playerIcon = playerIcons[1];
// }
// }




// THIS WORKS by assigning class changes with color background changes of
// red and blue to players x and o
// does not work for css images yet

// $('td').on('click', function(){
//     if (turnClick % 2 === 0) {
//     playerIcon = playerIcons[0];
//     } else {
//     playerIcon = playerIcons[1];
//   }
//   let currentCell = $(this);
//   if (currentCell.hasClass('start-cell')) {
//     console.log(currentCell.attr('class'));
//     currentCell.removeClass('start-cell');
//     console.log(currentCell.attr('class'));
//     currentCell.addClass('playerIcon');
//     console.log(currentCell.attr('class'));
//     console.log((playerIcon));
//   if (playerIcon === 'Xzibit') {     //should this be playerIcons[0] instead of "xzibit"?
//     currentCell.addClass('xzibit');
//   }else {
//     currentCell.addClass('oprah');
//     }
//     turnClick++;
//   }
//   }
// );



// listens for click event on td, sets clicked cell to currentCell and inserts
// string of current player
// THIS VERSION WORKS
// it assigns string names to player X and O
