'use strict';

const authEvents = require('./auth/events.js');
$(() => {

authEvents.addHandlers();

// user require with a reference to bundle the file and use it in this file
// var example = require('./example');

// use require without a reference to ensure a file is bundled


// require('assets/scripts/index.js');

let turnClick = 1;
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
      //  row wins ^
       playerIcon === board[0] && playerIcon === board[3] && playerIcon === board[6] ||
       playerIcon === board[1] && playerIcon === board[4] && playerIcon === board[7] ||
       playerIcon === board[2] && playerIcon === board[5] && playerIcon === board[8] ||
      //  col wins ^
       playerIcon === board[0] && playerIcon === board[4] && playerIcon === board[8] ||
       playerIcon === board[2] && playerIcon === board[4] && playerIcon === board[6]){
        //  diag wins

      console.log("winner is " + playerIcon);
      win = true;
      $('td').off('click');
    } else{
    }
  };
  // checks for a tie
  function isTie(){
    let tie = false;
    if (turnClick === 9 && getWinner === false){
      console.log("It's a tie ya'll!");
      tie = true;
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
        console.log("turnclicks current" + turnClick);
        currentCell.text(playerIcon);
        $(this).data('board', playerIcon);   //This is what logs playerIcon to board array
        let attrId = $(this).attr('id');
        board[attrId] = playerIcon;
        console.log("cell " + currentCell.attr('id')); //logs which cell is clicked by it's id
        console.log("cell class " + currentCell.attr('class')); // logs the class of clicked cell
        console.log(board);
        currentCell.text(playerIcon);
        turnClick++;
      getWinner(board);
      isTie(board);
    });
  });
