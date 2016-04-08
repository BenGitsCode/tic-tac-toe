'use strict';

const getFormFields = require('../../../lib/get-form-fields.js');

const authApi = require('./api');
const authUi = require('./ui');


const signCheck = () => {

  $('#sign-up').on('submit', function (event) {
    event.preventDefault();
    let data = getFormFields(this);
    authApi.signUp(authUi.success, authUi.failure, data);
    console.log(data);
  });
  $('#getGame').on('click', function (event) {
    event.preventDefault();
    let data = getFormFields(this);
    authApi.getGames(authUi.getGameSuccess, authUi.failure, data);
    console.log(data);
  });

  $('#sign-in').on('submit', function (event) {
    let data = getFormFields(this);
    event.preventDefault();
    authApi.signIn(authUi.signInSuccess, authUi.failure, data);
    console.log(data);
  });
  $('#sign-in-two').on('submit', function (event) {
    let data = getFormFields(this);
    event.preventDefault();
    authApi.signIn(authUi.signInSuccess, authUi.failure, data);
    console.log(data);
  });
  $('#sign-out').on('click', function (event) {
    event.preventDefault();
    authApi.signOut(authUi.signOutSuccess, authUi.failure);
    console.log("signed out");
  });
  $('#change-password').on('submit', function (event) {
    event.preventDefault();
    let data = getFormFields(this);
    authApi.changePass(authUi.success, authUi.failure, data);
    console.log(data);
  });
  $('#new-game').on('click', function (event) {
    event.preventDefault();
    let data = "data";
    console.log(data);
    authApi.createGame(authUi.createGameSuccess, authUi.failure, data);
  });
  $('#reset-game').click(function() {
    location.reload();
  });




};









  module.exports = {
   signCheck,
  };
