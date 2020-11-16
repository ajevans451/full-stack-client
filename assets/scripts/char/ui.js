'use strict'
const store = require('./../store')
const events = require('./events')
const charCreateSuccess = function (response) {
  $('#status-message').text('Creation was successful')
  store.character = response.character
}
const charCreateFailure = function (error) {
  $('#status-message').text('Could not create character, try again')
}
const charIndexSuccess = function (response) {
$('#status-message').text('Showing characters')
}
const charIndexFailure = function (error) {
  $('#status-message').text('Could not show characters, try again')
}
const charUpdateSuccess = function (response) {
$('#status-message').text('Update was successful')
}
const charUpdateFailure = function (error) {
  $('#status-message').text('Could not update character, try again')
}
const charDeleteSuccess = function (response) {
$('#status-message').text('Deletion was successful')
}
const charDeleteFailure = function (error) {
  $('#status-message').text('Could not delete character, try again')
}
module.exports = {
  charCreateSuccess,
  charCreateFailure,
  charIndexSuccess,
  charIndexFailure,
  charUpdateSuccess,
  charUpdateFailure,
  charDeleteSuccess,
  charDeleteFailure
}
