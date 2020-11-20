'use strict'
const store = require('./../store')
const signUpSuccess = function (response) {
  $('#status-message').text('Sign up successful')
  $('#sign-up-form').trigger('reset')
}
const signUpFailure = function (error) {
  // console.log(error)
  $('#status-message').text('Sign up failed, try again')
}
const logInSuccess = function (response) {
  $('#status-message').text('Sign in successful')
  //reset forms
  $('#sign-in-form').trigger('reset')
  $('#sign-up-form').trigger('reset')
  store.user = response.user
  store.user.token = response.user.token
  //show signed in user forms
  $('#sign-in-form').hide()
  $('#sign-up-form').hide()
  $('#change-pw-form').show()
  $('#sign-out-form').show()
  $('#content').show()
  $('#char-update-form').hide()
  $('#char-delete-form').hide()
}
const logInFailure = function (error) {
  $('#status-message').text('Sign in failed, try again')
}
const changePWSuccess = function (response) {
  $('#status-message').text('Password change successful')
  $('#change-pw-form').trigger('reset')
}
const changePWFailure = function (error) {
  $('#status-message').text('Password change failed, try again')
}
const logOutSuccess = function (response) {
  $('#status-message').text('Sign out successful')

  $('#change-pw-form').hide()
  $('#sign-out-form').hide()
  $('#sign-in-form').show()
  $('#sign-up-form').show()
  $('#content').hide()
  $('#char-create-form').trigger('reset')
  $('#char-update-form').trigger('reset')
  $('#char-delete-form').trigger('reset')
}
const logOutFailure = function (error) {
  $('#status-message').text('Sign out failed, try again')
}
module.exports = {
  signUpSuccess,
  signUpFailure,
  logInSuccess,
  logInFailure,
  changePWSuccess,
  changePWFailure,
  logOutSuccess,
  logOutFailure
}
