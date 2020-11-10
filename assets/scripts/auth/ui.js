'use strict'
const signUpSuccess = function (res) {
  $('#status-message').text('Sign up successful')
  $('#sign-up-form').trigger('reset')
}
const signUpFailure = function (error) {
  console.log(error)
  $('#status-message').text('Sign up failed, try again')
}
const logInSuccess = function (res) {
  $('#status-message').text('Sign in successful')
  $('#sign-in-form').trigger('reset')
  store.user = response.user
}
const logInFailure = function (error) {
  $('#status-message').text('Sign in failed, try again')
}
const changePWSuccess = function (res) {
  $('#status-message').text('Password change successful')
  $('#change-pw-form').trigger('reset')
}
const changePWFailure = function (error) {
  $('#status-message').text('Password change failed, try again')
}
const logOutSuccess = function (res) {
  $('#status-message').text('Sign out successful')
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
