'use strict'
const formFields = require('./../../../lib/get-form-fields')
const api = require('./api')
const ui = require('./ui')

// signup
const signUp = (event) => {
  event.preventDefault()
  const form = event.target
  const data = formFields(form)
  // const data = formFields.getFormFields(form)
  console.log(data)
  api.signUp(data)
  .then(ui.signUpSuccess)
  .catch(ui.signUpFailure)

}
const logIn = (event) => {
  event.preventDefault()
  const form = event.target
  const data = formFields(form)
  api.logIn(data)
  .then(ui.logInSuccess)
  .catch(ui.logInFailure)
}
const changePW = (event) => {
  event.preventDefault()
  const form = event.target
  const data = formFields(form)
  api.changePW(data)
  .then(ui.changePWSuccess)
  .catch(ui.changePWFailure)
}
const logOut = (event) => {
  event.preventDefault()
  api.logOut(data)
  .then(ui.logOutSuccess)
  .catch(ui.logOutFailure)
}
module.exports = {
  signUp,
  logIn,
  changePW,
  logOut
}
