'use strict';

const app = require('../app-data');
// const getWinner = require('../index.js'); //what was this for?

const signUp = (success, failure, data) => {
  $.ajax({
    method: "POST",
    url: app.api + '/sign-up',
    data,

  })
  .done(success)
  .fail(failure);

};
const getGames = (success, failure, data) => {
  $.ajax({
    method: "GET",
    url: app.api + '/games',
    headers: {
      Authorization: 'Token token='+ app.user.token,
    },
  })

  .done(success)
  .fail(failure);
};




const signIn = (success, failure, data) => {
  $.ajax({
    method: "POST",
    url: app.api + '/sign-in',
    data,
    dataProcessing: false,

  }).done(success)
    .fail(failure);
};

const signOut = (success, failure) => {
  // if (!app.user) bad;
  $.ajax({
    method: "DELETE",
    url: app.api + '/sign-out/' + app.user.id,
    headers: {
      Authorization: 'Token token='+ app.user.token,
    },
  })
  .done(success)
  .fail(failure);
};

const changePass = (success, failure, data) => {
  // if (!app.user) bad;
  $.ajax({
    method: "PATCH",
    url: app.api + '/change-password/' + app.user.id,
    data,
    // dataProcessing: false,
    headers: {
      Authorization: 'Token token='+ app.user.token,
    },
  })
  .done(success)
  .fail(failure);
};
const createGame = (success, failure, data) => {
  $.ajax({
    method: "POST",
    url: app.api + '/games',
    data,
    dataProcessing: false,
    headers: {
      Authorization: 'Token token='+ app.user.token,
    },
  })
  .done(success)
  .fail(failure);
};
const updateGame = (success, failure) => {
  $.ajax({
    method: "PATCH",
    url: app.api + '/games/' + app.game.id,
    headers: {
      Authorization: 'Token token='+ app.user.token,
    },
    data: {
      "game": {
        "cell": {
          "index": app.index,
          "value": app.value
        },
          // "over": app.game.over,
      }
    }
  })
  .done(success)
  .fail(failure);
};




module.exports = {
  signUp,
  signIn,
  signOut,
  changePass,
  createGame,
  updateGame,
  app,
  getGames,
};
