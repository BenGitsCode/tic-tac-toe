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
let oPlayerImg = "assets/images/oprah1.gif";
let xPlayerImg = "assets/images/xzibit.gif";

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
    //     currentCell.removeClass()
    //     currentCell.addClass('xzibit');
    //   }else {
    //     currentCell.addClass('oprah');
    //     }
    //     turnClick++;
    //     getWinner(board);
    //     isTie(board);
    //   }
    //   }
    // );


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

      // right idea for inserting img into html??
      $(currentCell.html('<img src=" + xPlayerImg + >');
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
