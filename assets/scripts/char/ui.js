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
$('#char-update-form').show()
$('#char-delete-form').show()
$('#char-index-message').text('Your Characters:')
const char = response
console.log(char)
char.forEach(function (currentCharacter){
  const charHtml = (`
      <div class='index-cell col-12'>
      <p>ID: ${currentCharacter._id}<p>
      <h5>Name: ${currentCharacter.name}</h5>
      <p>Race: ${currentCharacter.race}<p>
      <p>Class: ${currentCharacter.class}<p>
      </div>
    `)
    $('#char-index').append(charHtml)
})
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
