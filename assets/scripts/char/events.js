'use strict'
const formFields = require('./../../../lib/get-form-fields')
const api = require('./api')
const ui = require('./ui')
const store = require('./../store')

const createCharacter = (event) => {
  event.preventDefault()
  const form = event.target
  // console.log(form)
  const data = formFields(form)
  // console.log(data)
  api.createChar(data)
  .then(ui.charCreateSuccess)
  .catch(ui.charCreateFailure)
}
const indexCharacter = (event) => {
  event.preventDefault()
  const form = event.target
  const data = formFields(form)
  api.charIndex(data)
  .then(ui.charIndexSuccess)
  .catch(ui.charIndexFailure)
}
const updateCharacter = (event) => {
  event.preventDefault()
  const form = event.target
  const data = formFields(form)
  // console.log(data)
  api.updateChar(data)
  .then(ui.charUpdateSuccess)
  .catch(ui.charUpdateFailure)
}
const deleteCharacter = (event) => {
  event.preventDefault()
  const form = event.target
  const data = formFields(form)
  api.deleteChar(data)
  .then(ui.charDeleteSuccess)
  .catch(ui.charDeleteFailure)
}
module.exports = {
  createCharacter,
  indexCharacter,
  updateCharacter,
  deleteCharacter
}
