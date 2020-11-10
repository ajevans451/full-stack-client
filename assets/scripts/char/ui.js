'use strict'
const store = require('./../store')
const events = require('./events')
const charCreateSuccess = function (response) {
  store.character = response.character
}
const charCreateFailure = function (error) {

}
