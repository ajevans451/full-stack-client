'use strict'
const formFields = require('./../../../lib/get-form-fields')
const api = require('./api')
const ui = require('./ui')
const store = require('./../store')

const createCharacter = (event) => {
  event.preventDefault()
  const form = event.target
  const data = formFields(form)
  api.createChar()
}
const indexCharacter = (event) => {
  event.preventDefault()
  const form = event.target
  const data = formFields(form)
  api.charIndex()
}
const updateCharacter = (event) => {
  event.preventDefault()
  const form = event.target
  const data = formFields(form)
  api.updateChar()
}
const deleteCharacter = (event) => {
  event.preventDefault()
  api.deleteChar()
}
module.exports = {
  createCharacter,
  indexCharacter,
  updateCharacter,
  deleteCharacter
}
