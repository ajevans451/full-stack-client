'use strict'
const store = require('./../store')
const events = require('./events')
const charCreateSuccess = function (response) {
  store.character = response.character
}
const charCreateFailure = function (error) {

}
const charIndexSuccess = function (response) {

}
const charIndexFailure = function (error) {

}
const charUpdateSuccess = function (response) {

}
const charUpdateFailure = function (error) {

}
const charDeleteSuccess = function (response) {

}
const charDeleteFailure = function (error) {

}
module.exports {
  charCreateSuccess,
  charCreateFailure,
  charIndexSuccess,
  charIndexFailure,
  charUpdateSuccess,
  charUpdateFailure,
  charDeleteSuccess,
  charDeleteFailure
}
