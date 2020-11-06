'use strict'
const formFields = require('./../../../lib/get-form-fields')

// signup
const signUp = (event) => {
  event.preventDefault()
  const form = event.target
  const data = formFields(form)

}
const logIn = (event) => {
  event.preventDefault()
  const form = event.target
  const data = formFields(form)
}
const changePW = (event) => {
  event.preventDefault()
  const form = event.target
  const data = formFields(form)
}
const logOut = (event) => {
  event.preventDefault()
}
module.exports = {
  signUp,
  logIn,
  changePW,
  logOut
}
