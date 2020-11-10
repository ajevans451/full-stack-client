'use strict'
const formFields = require('./../../../lib/get-form-fields')

const createCharacter = (event) => {
  event.preventDefault()
  const form = event.target
  const data = formFields(form)
}
const indexCharacter = (event) => {
  event.preventDefault()
  const form = event.target
  const data = formFields(form)
}
const showCharacter = (event) => {
  event.preventDefault()
  const form = event.target
  const data = formFields(form)
}
const updateCharacter = (event) => {
  event.preventDefault()
  const form = event.target
  const data = formFields(form)
}
const deleteCharacter = (event) => {
  event.preventDefault()
}
module.exports = {
  signUp,
  logIn,
  changePW,
  logOut
}
