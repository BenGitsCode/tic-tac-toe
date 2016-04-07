'use strict';

const authEvents = require('./auth/events.js');
const game = require('./game.js');
$(() => {

authEvents.signcheck();
game.getWinner();











});
