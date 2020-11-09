'use strict'
const config = require('./../config')
const store = require('./../store')
const signUp = function (data) {
  return $.ajax({
      url: config.apiUrl + '/sign-up',
      method: 'POST',
      data: data
  })
}
const logIn = function (data) {
  return $.ajax({
    url: config.apiUrl + '/sign-in',
    method: 'POST',
    data: data
  })
}
const changePW = function (data) {
  return $.ajax({
    url: config.apiUrl + '/change-password',
    method: 'PATCH',
    headers: {
      Authorization: 'Bearer ' + store.user.token
    },
    data: data
  })
}
const logOut = function (data) {
  return $.ajax({
    url: config.apiUrl + '/sign-out',
    method: 'DELETE',
    headers: {
      Authorization: 'Bearer ' + store.user.token
    }
  })
}
module.exports = {
  signUp,
  logIn,
  changePW,
  logOut
}
