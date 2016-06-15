'use strict';

const app = require('../app-data');
// const newGame = require('./index.js');

const signInSuccess = (data) => {
  app.user = data.user;
  console.log(app);
  console.log("Sign in successful");
};

const signOutSuccess = () => {
  app.user = null;
  console.log(app);
  console.log("You signed bro. Sweet!");
};

const createGameSuccess = (data) => {
  app.game = data.game;
  console.log(data);
  // newGame();
  console.log("You created a game, big whoop!");
};

const updateGameSuccess = (data) => {
  console.log(data);
  app.gameID = data.game.id;
  console.log(data);
  console.log(app);
  console.log("You have updated the game, sweet dude!");
};
const getGameSuccess = (data) => {
  app.game = data.game;
  console.log(data);
  $('#gamesPlayed').html(data.games.length);
};



const success = (data) => {
  console.log(data);
};

const failure = (error) => {
  console.error(error);
};

module.exports = {
  failure,
  success,
  signOutSuccess,
  signInSuccess,
  createGameSuccess,
  updateGameSuccess,
  app,
  getGameSuccess,
};
