'use strict';


$(() => {
const authEvents = require('./auth/events.js');
const api = require('./auth/api.js');
const app = require('./app-data.js');
const ui = require('./auth/ui.js');



authEvents.signCheck();


let turnClick = 0;
// let oPlayerImg;
// let xPlayerImg;
let playerIcons = ["Xzibit", "Oprah"];
let playerIcon = "";
// let oprahImg = "https://media.giphy.com/media/3o7ZeFpK0qqSpsWNsA/giphy.gif";
// let xzibitImg = "https://media4.giphy.com/media/ToMjGpBGgDijEba1Te8/200.gif";
// let oWinImg = "https://dl.dropboxusercontent.com/u/5056567/gifs/xzibitwin.gif";
// let xWinImg = "https://dl.dropboxusercontent.com/u/5056567/gifs/oprahwin.gif";
let win = false;
let xWins = 0;
let oWins = 0;


let board = ["", "", "", "", "", "", "", "", "" ];


// let newGame = function(){
//   $('.start-cell').empty();
//   $('.start-cell').data('board', '');
//   board = [];
//   turnClick = 0;
// };

let getWinner = function(board) {
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
      $('#winner').text("winner is " + playerIcon);
      win = true;
      if (playerIcon === 'Xzibit') {
       xWins += 1;



     }

     else if (playerIcon === 'Oprah') {
       oWins +=1;
       $('#oScore').text(oWins);

     }

    } else{
    }
  };
  // checks for a tie
  let isTie = function() {
    let tie = false;
    if (turnClick === 9 && win === false){
      console.log("It's a tie ya'll!");
      $('#winner').text("It's a tie! (everyone loses)");
      tie = true;

      }
    };



    $('td').on('click', function(){
      if (turnClick % 2 === 0) {
        playerIcon = playerIcons[0];
      } else {
        playerIcon = playerIcons[1];
      }
      let currentCell = $(this);
      turnClick++;
        console.log(playerIcon);
        console.log("turnclicks current" + turnClick);
        currentCell.text(playerIcon);
        $(this).data('board', playerIcon);   //This is what logs playerIcon to board array
        let attrId = $(this).attr('id');
        board[attrId] = playerIcon;
        currentCell.data('cells', board);
        currentCell.data('player', playerIcon);
        console.log("cell " + currentCell.attr('id')); //logs which cell is clicked by it's id
        console.log("cell class " + currentCell.attr('class')); // logs the class of clicked cell
        currentCell.text(playerIcon);

        // insert currentCell.html(playerIcon images here)
        app.index =$(this).attr('id');
        app.value = playerIcon;
        api.updateGame(ui.success, ui.failure);
        getWinner(board);
        isTie(turnClick);
        $(this).off('click');
      });
    });
